/* Thing > Intangible > StructuredValue > QuantitativeValue - A point value or interval for product characteristics and other purposes.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './boolean', './action', './propertyvalue', './creativework', './imageobject'], function(React, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, Boolean, Action, PropertyValue, CreativeWork, ImageObject){
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
            valueReference.push( ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            valueReference = ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue or" + ' ' +
"QuantitativeValue."}) );
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
            value.push( ( React.createElement("div", {"data-advice": "Put your HTML here. value is a Text or" + ' ' +
"Number or" + ' ' +
"StructuredValue or" + ' ' +
"Boolean."}) ) );
          }
        } else {
            value = ( React.createElement("div", {"data-advice": "Put your HTML here. value is a Text or" + ' ' +
"Number or" + ' ' +
"StructuredValue or" + ' ' +
"Boolean."}) );
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
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, React.__spread({},  props.additionalProperty )) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  props.additionalProperty}) );        }
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
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var unitCode;
      if( props.unitCode ){
        if( props.unitCode instanceof Array ){
          unitCode = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.unitCode ){
            unitCode.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            unitCode = ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a Text or" + ' ' +
"URL."}) );
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
