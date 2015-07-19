/* Thing > Intangible > Enumeration > QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './propertyvalue', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './imageobject', './action', './property', './creativework', './class'], function(React, PropertyValue, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, ImageObject, Action, Property, CreativeWork, Class){
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
      var greater;
      if( props.greater ){
        if( props.greater instanceof Array ){
          greater = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.greater ){
            greater.push( ( <QualitativeValue {...props.greater } /> ) );          }
        } else {
          greater = ( <QualitativeValue props={ props.greater } /> );        }
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
      var lesserOrEqual;
      if( props.lesserOrEqual ){
        if( props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.lesserOrEqual ){
            lesserOrEqual.push( ( <QualitativeValue {...props.lesserOrEqual } /> ) );          }
        } else {
          lesserOrEqual = ( <QualitativeValue props={ props.lesserOrEqual } /> );        }
      }
      var equal;
      if( props.equal ){
        if( props.equal instanceof Array ){
          equal = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.equal ){
            equal.push( ( <QualitativeValue {...props.equal } /> ) );          }
        } else {
          equal = ( <QualitativeValue props={ props.equal } /> );        }
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
      var lesser;
      if( props.lesser ){
        if( props.lesser instanceof Array ){
          lesser = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.lesser ){
            lesser.push( ( <QualitativeValue {...props.lesser } /> ) );          }
        } else {
          lesser = ( <QualitativeValue props={ props.lesser } /> );        }
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
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue {...props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ props.additionalProperty } /> );        }
      }
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.supersededBy ){
            supersededBy.push( ( <div data-advice='Put your HTML here. supersededBy is a Property or
Enumeration or
Class.'></div> ) );
          }
        } else {
            supersededBy = ( <div data-advice='Put your HTML here. supersededBy is a Property or
Enumeration or
Class.'></div> );
        }
      }
      var greaterOrEqual;
      if( props.greaterOrEqual ){
        if( props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.greaterOrEqual ){
            greaterOrEqual.push( ( <QualitativeValue {...props.greaterOrEqual } /> ) );          }
        } else {
          greaterOrEqual = ( <QualitativeValue props={ props.greaterOrEqual } /> );        }
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
      var nonEqual;
      if( props.nonEqual ){
        if( props.nonEqual instanceof Array ){
          nonEqual = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.nonEqual ){
            nonEqual.push( ( <QualitativeValue {...props.nonEqual } /> ) );          }
        } else {
          nonEqual = ( <QualitativeValue props={ props.nonEqual } /> );        }
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
