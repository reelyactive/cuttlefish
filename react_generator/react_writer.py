#! /usr/bin/python
from config import *
from helpers import Helpers
import os
import os.path as path

class ReactWriter:
    def __init__(self, componentName, topComments, otherDependencies, properties, defaultProps = None):
        if not path.exists(outputPath):
            os.makedirs(outputPath)
        pathOfNewFile = path.join(outputPath, componentName.lower() + '.js')
        print "Writing %s ..." % pathOfNewFile
        f = open( pathOfNewFile, 'w' )
        lines = []
        lines.append( topComments )
        lines.append( "  var " + componentName + "= React.createClass({\n" )
        lines.append( "    getDefaultProps: function(){\n" )
        lines.append( "      return {\n" )
        if defaultProps:
            for (name, value) in defaultProps.iteritems():
                lines.append( "        " + name + ": " + value + "\n" )
        lines.append( "      }\n" )
        lines.append( "    },\n" )
        lines.append( "    render: function(){\n" )
        lines.append( "      var props = this.props.props;\n" )
        for (propertyName, typeName) in properties.iteritems():
            lines.append( "      var " + propertyName + ";\n" )
            lines.append( "      if( props." + propertyName + " ){\n" )
            lines.append( "        if( props." + propertyName + " instanceof Array ){\n" )
            lines.append( "          " + propertyName + " = [ "
            + "(<div key='header' data-advice='HTML for the *head* of the section'></div>) ]\n" )
            lines.append( "          " + propertyName + " = " + propertyName
            + ".concat( props." + propertyName + ".map( function(result, index){\n" )
            if Helpers.isEntity( typeName ) and ' ' not in typeName:
                lines.append( "              return ( <" + typeName +" {...result} key={index} /> )\n" )
            else:
                lines.append( "              return ( <div key={index} data-advice='Put your HTML here. "
                + propertyName + " is a " + typeName + ".'></div> )\n" )
            lines.append( "           }) );\n" )
            lines.append( "         " + propertyName + ".push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );\n" )
            lines.append( "        } else {\n" )
            if Helpers.isEntity( typeName ) and ' ' not in typeName:
                lines.append( "          " + propertyName + " = ( <" + typeName +" props=" 
                + "{ props." + propertyName + " } /> );" )
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
        safeLines = []

        for line in lines:
            safeLines.append( Helpers.safe_unicode( Helpers.safe_str( line ) ) )
        f.writelines( safeLines )
        f.close()

        print "Done writing %s.js" % componentName.lower()

