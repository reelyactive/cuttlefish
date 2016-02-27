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

        for (propertyName, typeNameArray) in properties.iteritems():

            renderProperty = [
                "        let %s;\n" % propertyName,
                "        if (this.props.%s) {\n" % propertyName,
                "            if (this.props.%s instanceof Array) {\n" % propertyName,
                "                %s = (\n" % propertyName,
                "                   <div className='%s__container'>\n" % propertyName,
                "                       <div className='%s__header' data-advice='HTML for the *head* of the section'>%ss</div>\n" % (propertyName, propertyName),
                "                       {this.props.%s.map((item, index) => {\n" % propertyName
            ]
            renderProperty += self.getPropertyReturn(propertyName, typeNameArray, 'return')
            renderProperty += [
                "                       })};\n",
                "                       <div className='%s__footer' data-advice='HTML for the *footer* of the section'></div>;\n" % propertyName,
                "                   </div>\n",
                "                );\n",
                "            } else {\n"
            ]
            renderProperty += self.getPropertyReturn(propertyName, typeNameArray, '=')
            renderProperty += [
                "            }\n",
                "        }\n\n",
            ]
            render += renderProperty

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

    def getPropertyReturn(self, propertyName, typeNameArray, returnOrEqual):
        if returnOrEqual == '=':
            returnOrEqual = '%s =' % propertyName
            tabs = ''
        else:
            tabs = '            '
        if len(typeNameArray) > 1:
            propertyReturn = []
            number = 0
            for typeName in typeNameArray:
                if number == 0:
                    propertyReturn.append(
                        "               %sif (this.props['@type'] === '%s') {\n" % (tabs, typeName)
                    )
                elif number == len(typeNameArray):
                    propertyReturn.append(
                        "               %selse {\n" % tabs
                    )
                else:
                    propertyReturn.append(
                        "               %selse if (this.props['@type'] === '%s') {\n" % (tabs, typeName)
                    )
                number += 1
                propertyReturn += [
                    "                   %s%s %s;\n" % (tabs, returnOrEqual, self.getPropertyRepresentation(propertyName, typeName, True)),
                    "               %s}\n" % tabs
                ]
        else:
            propertyReturn = [
                "                %s%s %s;\n" % (tabs, returnOrEqual, self.getPropertyRepresentation(propertyName, typeNameArray[0], True)),
            ]
        return propertyReturn

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

