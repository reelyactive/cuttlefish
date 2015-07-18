#! /usr/bin/python
from pattern.web import *
import os.path as path

jsxPath = './test/'
schemaOrgUrl = 'https://schema.org/'

def extract_react_component_from_URL( componentName ):
  if not path.isFile( jsxPath + componentName.toLowerCase() + '.js' )
    print "Fetching %s (%s%s)..." % ( componentName, schemaOrgUrl, componentName )
    urlObject = URL( schemaOrgUrl + componentName )
    html = urlObject.download(cached=True)
    dom = DOM( html )
    
    title = dom( 'h1.page-title' )
    comment = dom( 'div[property=rdfs:comment]' )
    outputTopComments = plaintext( title ) + '-' + plaintext( comment )

    table = dom( 'tbody.supertype' )
    properties = {}
    dependencies = {}
    for tbody in table:
      for line in tbody('tr'):
        typeElement = line('.prop-ect')[0]
        typeText = plaintext(typeElement)
        properties[ plaintext(line('.prop-nam')[0]) ] = typeText
        if typeText is not 'Date' and typeText is not 'Text':
          dependencies[ typeText ] = './' + typeText.toLowerCase()

    outputInFile( componentName, outputTopComments, dependencies, properties )
#    for (dependencyName, fileName) in dependencies.iteritems():
#      extract_react_component_from_URL( dependencyName )
    print "Done."

def outputInFile( componentName, topComments, otherDependencies, properties, defaultProps = None):
  print "Writing %s.js ..." % componentName.toLowerCase()
  f = open( jsxPath + componentName.toLowerCase() + '.js' )
  f.write( topComments )
  dependencyLineStart = "define(['../bower_components/react/react'"
  dependencyLineMiddle = "], function(React"
  dependencyLineEnd = "){"
  for (name, filename) in otherDependencies.iteritems():
    dependencyLineStart += ", '" + filename + "'"
    dependencyLineMiddle += ", " + name
  f.write( dependencyLineStart + dependencyLineMiddle + dependencyLineEnd )
  f.write( "  return React.createClass({" )
  f.write( "    getDefaultProps: function(){" )
  f.write( "      return {" )
  if defaultProps:
    for (name, value) in defaultProps.iteritems():
      f.write( "        " + name + ": " + value )
  f.write( "      }" )
  f.write( "    }," )
  f.write( "    render: function(){" )
  for (propertyName, typeName) in properties.iteritems():
    f.write( "      var " + propertyName + ";" )
    f.write( "      if( this.props." + propertyName + " ){" )
    f.write( "        " + propertyName + " = ( /* Put your HTML here ("
      + propertyName + " is a " + typeName + ")*/ )" )
    f.write( "      }" )
  f.write( "      return (<div title='" + componentName + "' className='"
    + componentName + " entity'>" )
  for (propertyName, typeName) in properties.iteritems():
    f.write( "        { " + propertyName + " }" )
  f.write( "     </div>);" )
  f.write( "    }" )
  f.write( "  });" )
  f.write( "});" )
  f.close()
  print "Done writing %s.js" % componentName.toLowerCase()

extract_react_component_from_URL( 'Person' )

