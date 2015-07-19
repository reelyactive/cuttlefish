#! /usr/bin/python
from pattern.web import *
import os, re
import os.path as path

jsxPath = path.join( os.path.dirname(os.path.realpath(__file__)), 'jsx')
schemaOrgUrl = 'https://schema.org/'

def safe_unicode(obj, * args):
  """ return the unicode representation of obj """
  try:
    return unicode(obj, * args)
  except UnicodeDecodeError:
    # obj is byte string
    ascii_text = str(obj).encode('string_escape')
    return unicode(ascii_text)

def safe_str(obj):
  """ return the byte string representation of obj """
  try:
    return str(obj)
  except UnicodeEncodeError:
    # obj is unicode
    return unicode(obj).encode('unicode_escape')

def isEntity( typeText ):
  return (
    typeText != u'Date' and
    typeText != u'Text' and
    typeText != u'URL' and
    typeText != u'Number'
  )

def extract_react_component_from_URL( componentName ):
  filename = path.join(jsxPath, componentName.lower() + '.js')
  if not path.isfile( filename ) and isEntity( componentName ):
    if not isEntity( componentName ):
      print "-------------- YOU SHOULDN'T BE HERE %s ! -----------------" % componentName
    print "Fetching %s (%s%s)..." % ( componentName, schemaOrgUrl, componentName )
    urlObject = URL( schemaOrgUrl + componentName )
    html = urlObject.download(cached=True)
    dom = DOM( html )
    
    title = dom( 'h1.page-title' )[0]
    comment = dom( 'div[property=rdfs:comment]' )[0]
    outputTopComments = "/* " + plaintext( "%s" % title ) + " - " + plaintext( "%s" % comment ) + ". Generated automatically by the reactGenerator. */"

    table = dom( 'tbody.supertype' )
    properties = {}
    dependencies = {}
    for tbody in table:
      for line in tbody('tr'):
        typeElement = line('.prop-ect')[0]
        typeText = plaintext( "%s" % typeElement )
        properties[ plaintext( "%s" % line('.prop-nam')[0] ) ] = typeText
        if isEntity( typeText ): 
          arrayOfDependencies = re.findall( r"(\w{2,}).{0,2}", typeText )
          for dependency in arrayOfDependencies:
            if isEntity( dependency ):
              dependencies[ dependency ] = './' + dependency.lower()
    outputInFile( componentName, outputTopComments, dependencies, properties )
    for (dependencyName, fileName) in dependencies.iteritems():
      extract_react_component_from_URL( dependencyName )
    print "Done."
  else:
    print "Sorry, %s is already treated" % componentName

def outputInFile( componentName, topComments, otherDependencies, properties, defaultProps = None):
  if not os.path.exists(jsxPath):
    os.makedirs(jsxPath)
  pathOfNewFile = path.join(jsxPath, componentName.lower() + '.js')
  print "Writing %s ..." % pathOfNewFile
  f = open( pathOfNewFile, 'w' )
  lines = []
  lines.append( topComments )
  dependencyLineStart = "\n define(['../bower_components/react/react'"
  dependencyLineMiddle = "], function(React"
  dependencyLineEnd = "){\n"
  for (name, filename) in otherDependencies.iteritems():
    dependencyLineStart += ", '" + filename + "'"
    dependencyLineMiddle += ", " + name
  lines.append( dependencyLineStart + dependencyLineMiddle + dependencyLineEnd )
  lines.append( "  return React.createClass({\n" )
  lines.append( "    getDefaultProps: function(){\n" )
  lines.append( "      return {\n" )
  if defaultProps:
    for (name, value) in defaultProps.iteritems():
      lines.append( "        " + name + ": " + value + "\n" )
  lines.append( "      }\n" )
  lines.append( "    },\n" )
  lines.append( "    render: function(){\n" )
  for (propertyName, typeName) in properties.iteritems():
    lines.append( "      var " + propertyName + ";\n" )
    lines.append( "      if( this.props." + propertyName + " ){\n" )
    lines.append( "        if( this.props." + propertyName + " instanceof Array ){\n" )
    lines.append( "          " + propertyName +" = [( <div data-advice='HTML for the *head* of the section'></div> )];\n" )
    lines.append( "          for( i in this.props." + propertyName + " ){\n" )
    if isEntity( typeName ) and ' ' not in typeName:
      lines.append( "            " + propertyName + ".push( ( <" + typeName +" {..." 
      + "this.props." + propertyName + " } /> ) );" )
    else:
      lines.append( "            " + propertyName + ".push( ( <div data-advice='Put your HTML here. "
      + propertyName + " is a " + typeName + ".'></div> ) );\n" )
    lines.append( "          }\n" )
    lines.append( "        } else {\n" )
    if isEntity( typeName ) and ' ' not in typeName:
      lines.append( "          " + propertyName + " = ( <" + typeName +" props=" 
      + "{ this.props." + propertyName + " } /> );" )
    else:
      lines.append( "            " + propertyName + " = ( <div data-advice='Put your HTML here. "
      + propertyName + " is a " + typeName + ".'></div> );\n" )
    lines.append( "        }\n" )
    lines.append( "      }\n" )
  lines.append( "      return (<div title='" + componentName + "' className='"
    + componentName + " entity'>\n" )
  for (propertyName, typeName) in properties.iteritems():
    lines.append( "        { " + propertyName + " }\n" )
  lines.append( "     </div>);\n" )
  lines.append( "    }\n" )
  lines.append( "  });\n" )
  lines.append( "});\n" )
  safeLines = []
  for line in lines:
    safeLines.append( safe_unicode( safe_str( line ) ) )
  f.writelines( safeLines )
  f.close()
  print "Done writing %s.js" % componentName.lower()

extract_react_component_from_URL( 'Person' )

