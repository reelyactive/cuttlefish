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
            typeText != u'Text' and
            typeText != u'URL' and
            typeText != u'Number'
        )

