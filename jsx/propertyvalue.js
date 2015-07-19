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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var valueReference;
      if( this.props.valueReference ){
        if( this.props.valueReference instanceof Array ){
          valueReference = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.valueReference ){
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
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var maxValue;
      if( this.props.maxValue ){
        if( this.props.maxValue instanceof Array ){
          maxValue = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.maxValue ){
            maxValue.push( ( <div data-advice='Put your HTML here. maxValue is a Number.'></div> ) );
          }
        } else {
            maxValue = ( <div data-advice='Put your HTML here. maxValue is a Number.'></div> );
        }
      }
      var value;
      if( this.props.value ){
        if( this.props.value instanceof Array ){
          value = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.value ){
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
      if( this.props.minValue ){
        if( this.props.minValue instanceof Array ){
          minValue = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.minValue ){
            minValue.push( ( <div data-advice='Put your HTML here. minValue is a Number.'></div> ) );
          }
        } else {
            minValue = ( <div data-advice='Put your HTML here. minValue is a Number.'></div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var unitText;
      if( this.props.unitText ){
        if( this.props.unitText instanceof Array ){
          unitText = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.unitText ){
            unitText.push( ( <div data-advice='Put your HTML here. unitText is a Text.'></div> ) );
          }
        } else {
            unitText = ( <div data-advice='Put your HTML here. unitText is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var unitCode;
      if( this.props.unitCode ){
        if( this.props.unitCode instanceof Array ){
          unitCode = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.unitCode ){
            unitCode.push( ( <div data-advice='Put your HTML here. unitCode is a URL or
Text.'></div> ) );
          }
        } else {
            unitCode = ( <div data-advice='Put your HTML here. unitCode is a URL or
Text.'></div> );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var propertyID;
      if( this.props.propertyID ){
        if( this.props.propertyID instanceof Array ){
          propertyID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.propertyID ){
            propertyID.push( ( <div data-advice='Put your HTML here. propertyID is a URL or
Text.'></div> ) );
          }
        } else {
            propertyID = ( <div data-advice='Put your HTML here. propertyID is a URL or
Text.'></div> );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
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
