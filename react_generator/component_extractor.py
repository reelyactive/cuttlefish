from pattern.web import *
import os, re
import os.path as path
from config import *
from react_writer import ReactWriter
from helpers import Helpers

class ComponentExtractor:
    def __init__(self, componentName):
        filename = path.join(outputPath, componentName.lower() + '.js')
        if not path.isfile(filename) and Helpers.isEntity(componentName):
            if not Helpers.isEntity(componentName):
                print "XXX YOU SHOULDN'T BE HERE, %s is an 'End' component" % componentName
            print "Fetching %s (%s%s)..." % (componentName, schemaOrgUrl, componentName)
            urlObject = URL(schemaOrgUrl + componentName)
            html = urlObject.download(cached=True)
            dom = DOM(html)
            
            title = dom('h1.page-title')[0]
            comment = dom('div[property=rdfs:comment]')[0]
            outputTopComments = "/* " + plaintext("%s" % title) + " - " + plaintext("%s" % comment) + ". Generated automatically by the reactGenerator. */"

            table = dom('tbody.supertype')
            properties = {}
            dependencies = {}
            for tbody in table:
                for line in tbody('tr'):
                    if len(line('.prop-ect')) > 0:
                        typeElement = line('.prop-ect')[0]
                        typeText = plaintext("%s" % typeElement)
                        if Helpers.isEntity(typeText): 
                            arrayOfDependencies = re.findall(r"(\w{2,}).{0,2}", typeText)
                            properties[ plaintext("%s" % line('.prop-nam')[0]) ] = arrayOfDependencies
                            for dependency in arrayOfDependencies:
                                if Helpers.isEntity(dependency):
                                    dependencies[ dependency ] = './' + dependency.lower()
            ReactWriter(componentName, outputTopComments, dependencies, properties)
            for (dependencyName, fileName) in dependencies.iteritems():
                ComponentExtractor(dependencyName)
            print "Done."
        else:
            print "Sorry, %s is already treated" % componentName

ComponentExtractor('Person')
ComponentExtractor('Place')
ComponentExtractor('Product')
