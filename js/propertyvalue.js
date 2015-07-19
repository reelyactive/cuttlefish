/* Thing > Intangible > StructuredValue > PropertyValue - A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.

Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './enumeration', './propertyvalue', './qualitativevalue', './boolean', './action', './structuredvalue', './creativework', './imageobject'], function(React, QuantitativeValue, Enumeration, PropertyValue, QualitativeValue, Boolean, Action, StructuredValue, CreativeWork, ImageObject){
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
            potentialAction.push( ( React.createElement(Action, React.__spread({},  this.props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var valueReference;
      if( this.props.valueReference ){
        if( this.props.valueReference instanceof Array ){
          valueReference = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.valueReference ){
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
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
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
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
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
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
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
            maxValue = ( React.createElement("div", {"data-advice": "Put your HTML here. maxValue is a Number."}) );
        }
      }
      var value;
      if( this.props.value ){
        if( this.props.value instanceof Array ){
          value = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.value ){
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
      if( this.props.minValue ){
        if( this.props.minValue instanceof Array ){
          minValue = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.minValue ){
            minValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. minValue is a Number."}) ) );
          }
        } else {
            minValue = ( React.createElement("div", {"data-advice": "Put your HTML here. minValue is a Number."}) );
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
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
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
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var unitText;
      if( this.props.unitText ){
        if( this.props.unitText instanceof Array ){
          unitText = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.unitText ){
            unitText.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) ) );
          }
        } else {
            unitText = ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
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
            unitCode = ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a URL or" + ' ' +
"Text."}) );
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
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var propertyID;
      if( this.props.propertyID ){
        if( this.props.propertyID instanceof Array ){
          propertyID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.propertyID ){
            propertyID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. propertyID is a URL or" + ' ' +
"Text."}) ) );
          }
        } else {
            propertyID = ( React.createElement("div", {"data-advice": "Put your HTML here. propertyID is a URL or" + ' ' +
"Text."}) );
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
