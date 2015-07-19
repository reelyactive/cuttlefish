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
          box = [(React.createElement("p", null, "box:") )];
          for( i in this.props.box ){
            box.push( ( React.createElement("div", {class: "box"}) ) );
          }
        } else {
          box = ( React.createElement("div", {class: "box"}, this.props.box) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var elevation;
      if( this.props.elevation ){
        if( this.props.elevation instanceof Array ){
          elevation = [(React.createElement("p", null, "elevation:") )];
          for( i in this.props.elevation ){
            elevation.push( ( React.createElement("div", {class: "elevation"}) ) );
          }
        } else {
          elevation = ( React.createElement("div", {class: "elevation"}, this.props.elevation) );
        }
      }
      var polygon;
      if( this.props.polygon ){
        if( this.props.polygon instanceof Array ){
          polygon = [(React.createElement("p", null, "polygon:") )];
          for( i in this.props.polygon ){
            polygon.push( ( React.createElement("div", {class: "polygon"}) ) );
          }
        } else {
          polygon = ( React.createElement("div", {class: "polygon"}, this.props.polygon) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var circle;
      if( this.props.circle ){
        if( this.props.circle instanceof Array ){
          circle = [(React.createElement("p", null, "circle:") )];
          for( i in this.props.circle ){
            circle.push( ( React.createElement("div", {class: "circle"}) ) );
          }
        } else {
          circle = ( React.createElement("div", {class: "circle"}, this.props.circle) );
        }
      }
      var line;
      if( this.props.line ){
        if( this.props.line instanceof Array ){
          line = [(React.createElement("p", null, "line:") )];
          for( i in this.props.line ){
            line.push( ( React.createElement("div", {class: "line"}) ) );
          }
        } else {
          line = ( React.createElement("div", {class: "line"}, this.props.line) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
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
