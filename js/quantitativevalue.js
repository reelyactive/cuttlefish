/* Thing > Intangible > StructuredValue > QuantitativeValue - A point value or interval for product characteristics and other purposes.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './boolean', './action', './propertyvalue', './creativework', './imageobject'], function(React, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, Boolean, Action, PropertyValue, CreativeWork, ImageObject){
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
            valueReference.push( ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue."}) ) );
          }
        } else {
            valueReference.push( ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue."}) ) );
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
      var maxValue;
      if( this.props.maxValue ){
        if( this.props.maxValue instanceof Array ){
          maxValue = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.maxValue ){
            maxValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. maxValue is a Number."}) ) );
          }
        } else {
            maxValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. maxValue is a Number."}) ) );
        }
      }
      var value;
      if( this.props.value ){
        if( this.props.value instanceof Array ){
          value = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.value ){
            value.push( ( React.createElement("div", {"data-advice": "Put your HTML here. value is a Number or" + ' ' +
"StructuredValue or" + ' ' +
"Boolean or" + ' ' +
"Text."}) ) );
          }
        } else {
            value.push( ( React.createElement("div", {"data-advice": "Put your HTML here. value is a Number or" + ' ' +
"StructuredValue or" + ' ' +
"Boolean or" + ' ' +
"Text."}) ) );
        }
      }
      var minValue;
      if( this.props.minValue ){
        if( this.props.minValue instanceof Array ){
          minValue = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.minValue ){
            minValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. minValue is a Number."}) ) );
          }
        } else {
            minValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. minValue is a Number."}) ) );
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
      var unitText;
      if( this.props.unitText ){
        if( this.props.unitText instanceof Array ){
          unitText = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.unitText ){
            unitText.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) ) );
          }
        } else {
            unitText.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) ) );
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
      var unitCode;
      if( this.props.unitCode ){
        if( this.props.unitCode instanceof Array ){
          unitCode = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.unitCode ){
            unitCode.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a URL or" + ' ' +
"Text."}) ) );
          }
        } else {
            unitCode.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a URL or" + ' ' +
"Text."}) ) );
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
      return (React.createElement("div", {title: "QuantitativeValue", className: "QuantitativeValue entity"}, 
         potentialAction, 
         valueReference, 
         description, 
         sameAs, 
         image, 
         maxValue, 
         value, 
         minValue, 
         additionalType, 
         url, 
         additionalProperty, 
         unitText, 
         mainEntityOfPage, 
         unitCode, 
         alternateName, 
         name 
     ));
    }
  });
});
