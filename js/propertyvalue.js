/* Thing > Intangible > StructuredValue > PropertyValue - A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.

Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './enumeration', './propertyvalue', './qualitativevalue', './boolean', './action', './structuredvalue', './creativework', './imageobject'], function(React, QuantitativeValue, Enumeration, PropertyValue, QualitativeValue, Boolean, Action, StructuredValue, CreativeWork, ImageObject){
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
      var valueReference;
      if( props.valueReference ){
        if( props.valueReference instanceof Array ){
          valueReference = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.valueReference ){
            valueReference.push( ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue."}) ) );
          }
        } else {
            valueReference = ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue."}) );
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
      var maxValue;
      if( props.maxValue ){
        if( props.maxValue instanceof Array ){
          maxValue = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.maxValue ){
            maxValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. maxValue is a Number."}) ) );
          }
        } else {
            maxValue = ( React.createElement("div", {"data-advice": "Put your HTML here. maxValue is a Number."}) );
        }
      }
      var value;
      if( props.value ){
        if( props.value instanceof Array ){
          value = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.value ){
            value.push( ( React.createElement("div", {"data-advice": "Put your HTML here. value is a Boolean or" + ' ' +
"Text or" + ' ' +
"Number or" + ' ' +
"StructuredValue."}) ) );
          }
        } else {
            value = ( React.createElement("div", {"data-advice": "Put your HTML here. value is a Boolean or" + ' ' +
"Text or" + ' ' +
"Number or" + ' ' +
"StructuredValue."}) );
        }
      }
      var minValue;
      if( props.minValue ){
        if( props.minValue instanceof Array ){
          minValue = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.minValue ){
            minValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. minValue is a Number."}) ) );
          }
        } else {
            minValue = ( React.createElement("div", {"data-advice": "Put your HTML here. minValue is a Number."}) );
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
      var unitText;
      if( props.unitText ){
        if( props.unitText instanceof Array ){
          unitText = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.unitText ){
            unitText.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) ) );
          }
        } else {
            unitText = ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) );
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
      var unitCode;
      if( props.unitCode ){
        if( props.unitCode instanceof Array ){
          unitCode = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.unitCode ){
            unitCode.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a URL or" + ' ' +
"Text."}) ) );
          }
        } else {
            unitCode = ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a URL or" + ' ' +
"Text."}) );
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
      var propertyID;
      if( props.propertyID ){
        if( props.propertyID instanceof Array ){
          propertyID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.propertyID ){
            propertyID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. propertyID is a URL or" + ' ' +
"Text."}) ) );
          }
        } else {
            propertyID = ( React.createElement("div", {"data-advice": "Put your HTML here. propertyID is a URL or" + ' ' +
"Text."}) );
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
      return (React.createElement("div", {title: "PropertyValue", className: "PropertyValue entity"}, 
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
         unitText, 
         mainEntityOfPage, 
         unitCode, 
         alternateName, 
         propertyID, 
         name 
     ));
    }
  });
});
