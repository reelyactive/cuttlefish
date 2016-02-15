#! /usr/bin/python
from config import *
from helpers import Helpers
import os
import os.path as path

class ReactWriter:
    def __init__(self, componentName, topComments, dependencies, properties, defaultProps = None):
        self.componentName = componentName
        if not path.exists(outputPath):
            os.makedirs(outputPath)

        self.lines = []
        self.lines.append( topComments )

        self.useES6Snippet(dependencies, properties)

        self.writeLines()

    def useES6Snippet(self, dependencies, properties):
        with open(
            path.join(
                path.dirname(path.realpath(__file__)),
                'ES6ClassSnippet.js'
            )
        ) as snippet:
            for line in snippet:
                if '%imports%' in line:
                    self.writeImports(dependencies)
                elif '%className%' in line:
                    addline = line.replace('%className%', self.componentName)
                    self.lines.append(addline)
                elif '%render%' in line:
                    self.writeRender(properties)
                elif '%propTypes%' in line:
                    self.writePropTypes(properties)
                elif '%' in line:
                    pass
                else:
                    self.lines.append(line)
                # Add other snippets parts here

    def writeImports(self, dependencies):
        for dependency in dependencies:
            if dependency != self.componentName:
                self.lines.append("\nimport %s from './%s.js';" % (dependency, dependency.lower()))
        self.lines.append("\n\n")

    def writeRender(self, properties):
        render = [
            "    render() {\n"
        ]

        for (propertyName, typeName) in properties.iteritems():
            renderProperty = [
                "        let %s;\n" % propertyName,
                "        if (this.props.%s) {\n" % propertyName,
                "            if (this.props.%s instanceof Array) {\n" % propertyName,
                "                %s = (\n" % propertyName,
                "                   <div className='%s-container'>\n" % propertyName,
                "                       <div className='%s-header' data-advice='HTML for the *head* of the section'>%ss</div>\n" % (propertyName, propertyName),
                "                       {this.props.%s.map((item, index) => {\n" % propertyName,
                "                           return %s;\n" % self.getPropertyRepresentation(propertyName, typeName, True),
                "                       })};\n",
                "                       <div className='%s-footer' data-advice='HTML for the *footer* of the section'></div>;\n" % propertyName,
                "                   </div>\n",
                "                );\n",
                "            } else {\n",
                "                %s = %s;\n" % (propertyName, self.getPropertyRepresentation(propertyName, typeName)),
                "            }\n",
                "        }\n\n",
            ]
            render = render + renderProperty

        render = render + [
            "        return (\n",
            "            <div className='%s'>\n" % self.componentName
        ]

        for (propertyName, typeName) in properties.iteritems():
            render.append(
                "                {%s}\n" % propertyName
            )

        render = render + [
                "            </div>\n",
                "        );\n",
                "    }\n"
        ]

        self.lines = self.lines + render

    def writePropTypes(self, properties):
        for (propertyName, typeName) in properties.iteritems():
            if Helpers.isEntity(typeName):
                self.lines.append("   %s: React.propTypes.object,\n" % propertyName)
            else:
                self.lines.append("   %s: React.propTypes.%s,\n" % (propertyName, Helpers.typeOfNonEntity(typeName)))

    def getPropertyRepresentation(self, propertyName, typeName, isElementOfArray=False):
        key = ''
        item = ''
        if isElementOfArray:
            key = 'key={index}'
            item = '{item}'
        if Helpers.isEntity(typeName) and ' ' not in typeName:
            return "(<%s %s {...this.props.%s} />)" % (typeName, key ,propertyName)
        else:
            return "(<div className='%s' data-advice='Put your HTML here. %s is a %s.'>%s</div>)" % (propertyName, propertyName, typeName.replace('\n', ' '), Helpers.getNonEntityRepresentation(typeName, propertyName, self.componentName))

    def writeLines(self):
        safeLines = []

        for line in self.lines:
            safeLines.append( Helpers.safe_unicode( Helpers.safe_str( line ) ) )

        pathOfNewFile = path.join(outputPath, self.componentName.lower() + '.js')
        print "Writing %s ..." % pathOfNewFile

        f = open( pathOfNewFile, 'w' )
        f.writelines( safeLines )
        f.close()

        print "Done writing %s.js" % self.componentName.lower()

