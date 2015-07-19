/* Thing > Intangible > StructuredValue > GeoShape - The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var box;
      if( props.box ){
        if( props.box instanceof Array ){
          box = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.box ){
            box.push( ( React.createElement("div", {"data-advice": "Put your HTML here. box is a Text."}) ) );
          }
        } else {
            box = ( React.createElement("div", {"data-advice": "Put your HTML here. box is a Text."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var elevation;
      if( props.elevation ){
        if( props.elevation instanceof Array ){
          elevation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.elevation ){
            elevation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. elevation is a Text or" + ' ' +
"Number."}) ) );
          }
        } else {
            elevation = ( React.createElement("div", {"data-advice": "Put your HTML here. elevation is a Text or" + ' ' +
"Number."}) );
        }
      }
      var polygon;
      if( props.polygon ){
        if( props.polygon instanceof Array ){
          polygon = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.polygon ){
            polygon.push( ( React.createElement("div", {"data-advice": "Put your HTML here. polygon is a Text."}) ) );
          }
        } else {
            polygon = ( React.createElement("div", {"data-advice": "Put your HTML here. polygon is a Text."}) );
        }
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
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
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
      var circle;
      if( props.circle ){
        if( props.circle instanceof Array ){
          circle = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.circle ){
            circle.push( ( React.createElement("div", {"data-advice": "Put your HTML here. circle is a Text."}) ) );
          }
        } else {
            circle = ( React.createElement("div", {"data-advice": "Put your HTML here. circle is a Text."}) );
        }
      }
      var line;
      if( props.line ){
        if( props.line instanceof Array ){
          line = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.line ){
            line.push( ( React.createElement("div", {"data-advice": "Put your HTML here. line is a Text."}) ) );
          }
        } else {
            line = ( React.createElement("div", {"data-advice": "Put your HTML here. line is a Text."}) );
        }
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
      return (React.createElement("div", {title: "GeoShape", className: "GeoShape entity"}, 
         box, 
         potentialAction, 
         elevation, 
         polygon, 
         sameAs, 
         image, 
         name, 
         alternateName, 
         url, 
         mainEntityOfPage, 
         additionalType, 
         circle, 
         line, 
         description 
     ));
    }
  });
});
