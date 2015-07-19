/* Thing > Intangible > StructuredValue > GeoShape - The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var box;
      if( this.props.box ){
        if( this.props.box instanceof Array ){
          box = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.box ){
            box.push( ( React.createElement("div", {"data-advice": "Put your HTML here. box is a Text."}) ) );
          }
        } else {
            box.push( ( React.createElement("div", {"data-advice": "Put your HTML here. box is a Text."}) ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var elevation;
      if( this.props.elevation ){
        if( this.props.elevation instanceof Array ){
          elevation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.elevation ){
            elevation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. elevation is a Text or" + ' ' +
"Number."}) ) );
          }
        } else {
            elevation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. elevation is a Text or" + ' ' +
"Number."}) ) );
        }
      }
      var polygon;
      if( this.props.polygon ){
        if( this.props.polygon instanceof Array ){
          polygon = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.polygon ){
            polygon.push( ( React.createElement("div", {"data-advice": "Put your HTML here. polygon is a Text."}) ) );
          }
        } else {
            polygon.push( ( React.createElement("div", {"data-advice": "Put your HTML here. polygon is a Text."}) ) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
        }
      }
      var circle;
      if( this.props.circle ){
        if( this.props.circle instanceof Array ){
          circle = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.circle ){
            circle.push( ( React.createElement("div", {"data-advice": "Put your HTML here. circle is a Text."}) ) );
          }
        } else {
            circle.push( ( React.createElement("div", {"data-advice": "Put your HTML here. circle is a Text."}) ) );
        }
      }
      var line;
      if( this.props.line ){
        if( this.props.line instanceof Array ){
          line = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.line ){
            line.push( ( React.createElement("div", {"data-advice": "Put your HTML here. line is a Text."}) ) );
          }
        } else {
            line.push( ( React.createElement("div", {"data-advice": "Put your HTML here. line is a Text."}) ) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
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
