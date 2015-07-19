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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var valueReference;
      if( props.valueReference ){
        if( props.valueReference instanceof Array ){
          valueReference = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.valueReference ){
            valueReference.push( ( <div data-advice='Put your HTML here. valueReference is a PropertyValue or
QuantitativeValue or
QualitativeValue or
Enumeration or
StructuredValue.'></div> ) );
          }
        } else {
            valueReference = ( <div data-advice='Put your HTML here. valueReference is a PropertyValue or
QuantitativeValue or
QualitativeValue or
Enumeration or
StructuredValue.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var maxValue;
      if( props.maxValue ){
        if( props.maxValue instanceof Array ){
          maxValue = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.maxValue ){
            maxValue.push( ( <div data-advice='Put your HTML here. maxValue is a Number.'></div> ) );
          }
        } else {
            maxValue = ( <div data-advice='Put your HTML here. maxValue is a Number.'></div> );
        }
      }
      var value;
      if( props.value ){
        if( props.value instanceof Array ){
          value = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.value ){
            value.push( ( <div data-advice='Put your HTML here. value is a Boolean or
Text or
Number or
StructuredValue.'></div> ) );
          }
        } else {
            value = ( <div data-advice='Put your HTML here. value is a Boolean or
Text or
Number or
StructuredValue.'></div> );
        }
      }
      var minValue;
      if( props.minValue ){
        if( props.minValue instanceof Array ){
          minValue = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.minValue ){
            minValue.push( ( <div data-advice='Put your HTML here. minValue is a Number.'></div> ) );
          }
        } else {
            minValue = ( <div data-advice='Put your HTML here. minValue is a Number.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var unitText;
      if( props.unitText ){
        if( props.unitText instanceof Array ){
          unitText = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.unitText ){
            unitText.push( ( <div data-advice='Put your HTML here. unitText is a Text.'></div> ) );
          }
        } else {
            unitText = ( <div data-advice='Put your HTML here. unitText is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var unitCode;
      if( props.unitCode ){
        if( props.unitCode instanceof Array ){
          unitCode = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.unitCode ){
            unitCode.push( ( <div data-advice='Put your HTML here. unitCode is a URL or
Text.'></div> ) );
          }
        } else {
            unitCode = ( <div data-advice='Put your HTML here. unitCode is a URL or
Text.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var propertyID;
      if( props.propertyID ){
        if( props.propertyID instanceof Array ){
          propertyID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.propertyID ){
            propertyID.push( ( <div data-advice='Put your HTML here. propertyID is a URL or
Text.'></div> ) );
          }
        } else {
            propertyID = ( <div data-advice='Put your HTML here. propertyID is a URL or
Text.'></div> );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      return (<div title='PropertyValue' className='PropertyValue entity'>
        { potentialAction }
        { valueReference }
        { description }
        { sameAs }
        { image }
        { maxValue }
        { value }
        { minValue }
        { additionalType }
        { url }
        { unitText }
        { mainEntityOfPage }
        { unitCode }
        { alternateName }
        { propertyID }
        { name }
     </div>);
    }
  });
});
