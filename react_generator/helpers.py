class Helpers:
    @classmethod
    def safe_unicode(klass, obj, * args):
        """ return the unicode representation of obj """
        try:
            return unicode(obj, * args)
        except UnicodeDecodeError:
            # obj is byte string
            ascii_text = str(obj).encode('string_escape')
            return unicode(ascii_text)

    @classmethod
    def safe_str(klass, obj):
        """ return the byte string representation of obj """
        try:
            return str(obj)
        except UnicodeEncodeError:
            # obj is unicode
            return unicode(obj).encode('unicode_escape')

    @classmethod
    def isEntity(klass, typeText):
        return (
            typeText != u'Date' and
            typeText != u'DateTime' and
            typeText != u'Text' and
            typeText != u'URL' and
            typeText != u'Number' and
            typeText != u'Integer' and
            typeText != u'Boolean'
        )

    @classmethod
    def getNonEntityRepresentation(klass, typeText, value, componentName):
        className = "%s-%s" % (componentName, value)
        if typeText == u'Date' or typeText == u'DateTime':
            return '<time className="%s">%s: {this.props.%s}</time>' % (className, value, value)
        elif typeText == u'Text':
            return '<p className="%s">%s: {this.props.%s}</p>' % (className, value, value)
        elif value == u'image':
            return '<img className="%s" src={this.props.%s} />' % (className, value)
        elif typeText == u'URL':
            return '<a className="%s" href={this.props.%s} target="_blank">%s</a>' % (className, value, value)
        elif typeText == u'Number':
            return '<p className="%s">%s: {this.props.%s}</p>' % (className, value, value)
        elif typeText == u'Integer':
            return '<p className="%s">%s: {this.props.%s}</p>' % (className, value, value)
        elif typeText == u'boolean':
            return '<p className="%s">%s: {this.props.%s}</p>' % (className, value, value)
        else:
            return '<div className="%s">%s: {this.props.%s}</div>' % (className, value, value)

    @classmethod
    def typeOfNonEntity(klass, typeText):
        if typeText == u'Date':
            return 'string'
        if typeText == u'DateTime':
            return 'string'
        elif typeText == u'Text':
            return 'string'
        elif typeText == u'URL':
            return 'string'
        elif typeText == u'Number':
            return 'number'
        elif typeText == u'Integer':
            return 'number'
        elif typeText == u'boolean':
            return 'bool'
        else:
            return 'string'

