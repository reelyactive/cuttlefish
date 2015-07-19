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
            valueReference.push( ( <div data-advice='Put your HTML here. valueReference is a Enumeration or
StructuredValue or
PropertyValue or
QuantitativeValue or
QualitativeValue.'></div> ) );
          }
        } else {
            valueReference = ( <div data-advice='Put your HTML here. valueReference is a Enumeration or
StructuredValue or
PropertyValue or
QuantitativeValue or
QualitativeValue.'></div> );
        }
      }
      var greater;
      if( this.props.greater ){
        if( this.props.greater instanceof Array ){
          greater = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.greater ){
            greater.push( ( <QualitativeValue {...this.props.greater } /> ) );          }
        } else {
          greater = ( <QualitativeValue props={ this.props.greater } /> );        }
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
      var lesserOrEqual;
      if( this.props.lesserOrEqual ){
        if( this.props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.lesserOrEqual ){
            lesserOrEqual.push( ( <QualitativeValue {...this.props.lesserOrEqual } /> ) );          }
        } else {
          lesserOrEqual = ( <QualitativeValue props={ this.props.lesserOrEqual } /> );        }
      }
      var equal;
      if( this.props.equal ){
        if( this.props.equal instanceof Array ){
          equal = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.equal ){
            equal.push( ( <QualitativeValue {...this.props.equal } /> ) );          }
        } else {
          equal = ( <QualitativeValue props={ this.props.equal } /> );        }
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
      var lesser;
      if( this.props.lesser ){
        if( this.props.lesser instanceof Array ){
          lesser = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.lesser ){
            lesser.push( ( <QualitativeValue {...this.props.lesser } /> ) );          }
        } else {
          lesser = ( <QualitativeValue props={ this.props.lesser } /> );        }
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
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue {...this.props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ this.props.additionalProperty } /> );        }
      }
      var supersededBy;
      if( this.props.supersededBy ){
        if( this.props.supersededBy instanceof Array ){
          supersededBy = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.supersededBy ){
            supersededBy.push( ( <div data-advice='Put your HTML here. supersededBy is a Class or
Property or
Enumeration.'></div> ) );
          }
        } else {
            supersededBy = ( <div data-advice='Put your HTML here. supersededBy is a Class or
Property or
Enumeration.'></div> );
        }
      }
      var greaterOrEqual;
      if( this.props.greaterOrEqual ){
        if( this.props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.greaterOrEqual ){
            greaterOrEqual.push( ( <QualitativeValue {...this.props.greaterOrEqual } /> ) );          }
        } else {
          greaterOrEqual = ( <QualitativeValue props={ this.props.greaterOrEqual } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
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
      var nonEqual;
      if( this.props.nonEqual ){
        if( this.props.nonEqual instanceof Array ){
          nonEqual = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.nonEqual ){
            nonEqual.push( ( <QualitativeValue {...this.props.nonEqual } /> ) );          }
        } else {
          nonEqual = ( <QualitativeValue props={ this.props.nonEqual } /> );        }
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
      return (<div title='QualitativeValue' className='QualitativeValue entity'>
        { potentialAction }
        { valueReference }
        { greater }
        { sameAs }
        { lesserOrEqual }
        { equal }
        { name }
        { lesser }
        { url }
        { additionalProperty }
        { supersededBy }
        { greaterOrEqual }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { nonEqual }
        { image }
        { description }
     </div>);
    }
  });
});
