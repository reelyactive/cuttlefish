  window.cormorantTools = {
    "highlight": function highlight( json ) {
       if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 4);
       }
       json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
       var jsonHighlighted = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return '<pre><span class="' + cls + '">' + match + '</span></pre>';
       });
       return jsonHighlighted.replace( /[\[\]\,{}]/g , function( match ){
         if( match == '}' || match == ']' )
           var result = "<br />" + match;
         else{
           var result = match+"<br />";
         }
         return result;
       });
     },
    "translateToJSONLD": function translateToJSONLD( json, type ){
      var mappingJSONld = {
        'firstName': 'givenName',
        'lastName': 'familyName',
        'portraitImageUrl': 'image',
        'companyName': 'worksFor',
        'linkedInPublicUrl': 'url'
      }
      var newObj = {};
      newObj['@type'] = type;
      newObj['@context'] = 'http://schema.org';
      keys = Object.keys(json);
      for( var index in keys ){
        if( mappingJSONld[ keys[index] ] != undefined ){
          newObj[ mappingJSONld[ keys[index] ] ] = json[ keys[index] ];
        } else {
          newObj[ keys[index] ] = json[ keys[index] ];
        }
      }
      return newObj;
    },
    "renderJSON": function renderJSON( element ){
       if( element.getAttribute( "rendered" ) !== "true" ){
         var content = element.innerHTML;
         var sep = content.indexOf( ":") + 1;
         var prefix = content.substring( 0, sep );
         element.innerHTML = prefix + highlight( content.substring( sep ) );
         element.setAttribute( "rendered", true );
       }
     },
    "renderMACAdress": function renderMACAddress( address ){
      String.prototype.chunk = function(n) {
        var ret = [];
        for(var i=0, len=this.length; i < len; i += n) {
          ret.push(this.substr(i, n))
        }
        return ret
      };

      return address.chunk( 2 ).join( ':' );
    },
    "getUrlVars": function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
      });
      return vars;
    }
  };

