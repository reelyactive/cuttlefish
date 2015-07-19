/* Thing > Intangible > Enumeration > QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './propertyvalue', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './imageobject', './action', './property', './creativework', './class'], function(React, PropertyValue, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, ImageObject, Action, Property, CreativeWork, Class){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var valueReference;
      if( this.props.valueReference ){
        if( this.props.valueReference instanceof Array ){
          valueReference = [(React.createElement("p", null, "valueReference:") )];
          for( i in this.props.valueReference ){
            valueReference.push( ( React.createElement("div", {class: "valueReference"}) ) );
          }
        } else {
          valueReference = ( React.createElement("div", {class: "valueReference"}, this.props.valueReference) );
        }
      }
      var greater;
      if( this.props.greater ){
        if( this.props.greater instanceof Array ){
          greater = [(React.createElement("p", null, "greater:") )];
          for( i in this.props.greater ){
            greater.push( ( React.createElement(QualitativeValue, {props:  this.props.greater}) ) );          }
        } else {
          greater = ( React.createElement(QualitativeValue, {props:  this.props.greater}) );        }
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
      var lesserOrEqual;
      if( this.props.lesserOrEqual ){
        if( this.props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [(React.createElement("p", null, "lesserOrEqual:") )];
          for( i in this.props.lesserOrEqual ){
            lesserOrEqual.push( ( React.createElement(QualitativeValue, {props:  this.props.lesserOrEqual}) ) );          }
        } else {
          lesserOrEqual = ( React.createElement(QualitativeValue, {props:  this.props.lesserOrEqual}) );        }
      }
      var equal;
      if( this.props.equal ){
        if( this.props.equal instanceof Array ){
          equal = [(React.createElement("p", null, "equal:") )];
          for( i in this.props.equal ){
            equal.push( ( React.createElement(QualitativeValue, {props:  this.props.equal}) ) );          }
        } else {
          equal = ( React.createElement(QualitativeValue, {props:  this.props.equal}) );        }
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
      var lesser;
      if( this.props.lesser ){
        if( this.props.lesser instanceof Array ){
          lesser = [(React.createElement("p", null, "lesser:") )];
          for( i in this.props.lesser ){
            lesser.push( ( React.createElement(QualitativeValue, {props:  this.props.lesser}) ) );          }
        } else {
          lesser = ( React.createElement(QualitativeValue, {props:  this.props.lesser}) );        }
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
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [(React.createElement("p", null, "additionalProperty:") )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) );        }
      }
      var supersededBy;
      if( this.props.supersededBy ){
        if( this.props.supersededBy instanceof Array ){
          supersededBy = [(React.createElement("p", null, "supersededBy:") )];
          for( i in this.props.supersededBy ){
            supersededBy.push( ( React.createElement("div", {class: "supersededBy"}) ) );
          }
        } else {
          supersededBy = ( React.createElement("div", {class: "supersededBy"}, this.props.supersededBy) );
        }
      }
      var greaterOrEqual;
      if( this.props.greaterOrEqual ){
        if( this.props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [(React.createElement("p", null, "greaterOrEqual:") )];
          for( i in this.props.greaterOrEqual ){
            greaterOrEqual.push( ( React.createElement(QualitativeValue, {props:  this.props.greaterOrEqual}) ) );          }
        } else {
          greaterOrEqual = ( React.createElement(QualitativeValue, {props:  this.props.greaterOrEqual}) );        }
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
      var nonEqual;
      if( this.props.nonEqual ){
        if( this.props.nonEqual instanceof Array ){
          nonEqual = [(React.createElement("p", null, "nonEqual:") )];
          for( i in this.props.nonEqual ){
            nonEqual.push( ( React.createElement(QualitativeValue, {props:  this.props.nonEqual}) ) );          }
        } else {
          nonEqual = ( React.createElement(QualitativeValue, {props:  this.props.nonEqual}) );        }
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
      return (React.createElement("div", {title: "QualitativeValue", className: "QualitativeValue entity"}, 
         potentialAction, 
         valueReference, 
         greater, 
         sameAs, 
         lesserOrEqual, 
         equal, 
         name, 
         lesser, 
         url, 
         additionalProperty, 
         supersededBy, 
         greaterOrEqual, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         nonEqual, 
         image, 
         description 
     ));
    }
  });
});
