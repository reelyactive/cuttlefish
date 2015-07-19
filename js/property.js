/* Thing > Intangible > Property - A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './imageobject', './enumeration', './action', './property', './creativework', './class'], function(React, ImageObject, Enumeration, Action, Property, CreativeWork, Class){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var inverseOf;
      if( props.inverseOf ){
        if( props.inverseOf instanceof Array ){
          inverseOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.inverseOf ){
            inverseOf.push( ( React.createElement(Property, React.__spread({},  props.inverseOf )) ) );          }
        } else {
          inverseOf = ( React.createElement(Property, {props:  props.inverseOf}) );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var rangeIncludes;
      if( props.rangeIncludes ){
        if( props.rangeIncludes instanceof Array ){
          rangeIncludes = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.rangeIncludes ){
            rangeIncludes.push( ( React.createElement(Class, React.__spread({},  props.rangeIncludes )) ) );          }
        } else {
          rangeIncludes = ( React.createElement(Class, {props:  props.rangeIncludes}) );        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.supersededBy ){
            supersededBy.push( ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Enumeration or" + ' ' +
"Class or" + ' ' +
"Property."}) ) );
          }
        } else {
            supersededBy = ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Enumeration or" + ' ' +
"Class or" + ' ' +
"Property."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var domainIncludes;
      if( props.domainIncludes ){
        if( props.domainIncludes instanceof Array ){
          domainIncludes = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.domainIncludes ){
            domainIncludes.push( ( React.createElement(Class, React.__spread({},  props.domainIncludes )) ) );          }
        } else {
          domainIncludes = ( React.createElement(Class, {props:  props.domainIncludes}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "Property", className: "Property entity"}, 
         potentialAction, 
         description, 
         inverseOf, 
         sameAs, 
         rangeIncludes, 
         image, 
         url, 
         supersededBy, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         domainIncludes, 
         name 
     ));
    }
  });
});
