/* Thing > Intangible > Enumeration > QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './property', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './imageobject', './action', './propertyvalue', './creativework', './class'], function(React, Property, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, ImageObject, Action, PropertyValue, CreativeWork, Class){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var valueReference;
      if( this.props.valueReference ){
        if( this.props.valueReference instanceof Array ){
          valueReference = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.valueReference ){
            valueReference.push( ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a QualitativeValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue."}) ) );
          }
        } else {
            valueReference.push( ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a QualitativeValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue."}) ) );
        }
      }
      var greater;
      if( this.props.greater ){
        if( this.props.greater instanceof Array ){
          greater = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.greater ){
            greater.push( ( React.createElement(QualitativeValue, {props:  this.props.greater}) ) );          }
        } else {
          greater = ( React.createElement(QualitativeValue, {props:  this.props.greater}) );        }
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
      var lesserOrEqual;
      if( this.props.lesserOrEqual ){
        if( this.props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.lesserOrEqual ){
            lesserOrEqual.push( ( React.createElement(QualitativeValue, {props:  this.props.lesserOrEqual}) ) );          }
        } else {
          lesserOrEqual = ( React.createElement(QualitativeValue, {props:  this.props.lesserOrEqual}) );        }
      }
      var equal;
      if( this.props.equal ){
        if( this.props.equal instanceof Array ){
          equal = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.equal ){
            equal.push( ( React.createElement(QualitativeValue, {props:  this.props.equal}) ) );          }
        } else {
          equal = ( React.createElement(QualitativeValue, {props:  this.props.equal}) );        }
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
      var lesser;
      if( this.props.lesser ){
        if( this.props.lesser instanceof Array ){
          lesser = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.lesser ){
            lesser.push( ( React.createElement(QualitativeValue, {props:  this.props.lesser}) ) );          }
        } else {
          lesser = ( React.createElement(QualitativeValue, {props:  this.props.lesser}) );        }
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
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) );        }
      }
      var supersededBy;
      if( this.props.supersededBy ){
        if( this.props.supersededBy instanceof Array ){
          supersededBy = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.supersededBy ){
            supersededBy.push( ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Enumeration or" + ' ' +
"Class or" + ' ' +
"Property."}) ) );
          }
        } else {
            supersededBy.push( ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Enumeration or" + ' ' +
"Class or" + ' ' +
"Property."}) ) );
        }
      }
      var greaterOrEqual;
      if( this.props.greaterOrEqual ){
        if( this.props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.greaterOrEqual ){
            greaterOrEqual.push( ( React.createElement(QualitativeValue, {props:  this.props.greaterOrEqual}) ) );          }
        } else {
          greaterOrEqual = ( React.createElement(QualitativeValue, {props:  this.props.greaterOrEqual}) );        }
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
      var nonEqual;
      if( this.props.nonEqual ){
        if( this.props.nonEqual instanceof Array ){
          nonEqual = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.nonEqual ){
            nonEqual.push( ( React.createElement(QualitativeValue, {props:  this.props.nonEqual}) ) );          }
        } else {
          nonEqual = ( React.createElement(QualitativeValue, {props:  this.props.nonEqual}) );        }
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
