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
          potentialAction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( <Action {...result} key={index} /> )
           }) );
         potentialAction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var valueReference;
      if( props.valueReference ){
        if( props.valueReference instanceof Array ){
          valueReference = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          valueReference = valueReference.concat( props.valueReference.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. valueReference is a PropertyValue or
QuantitativeValue or
QualitativeValue or
Enumeration or
StructuredValue.'></div> )
           }) );
         valueReference.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
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
          greater = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          greater = greater.concat( props.greater.map( function(result, index){
              return ( <QualitativeValue {...result} key={index} /> )
           }) );
         greater.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          greater = ( <QualitativeValue props={ props.greater } /> );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sameAs is a URL.'></div> )
           }) );
         sameAs.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var lesserOrEqual;
      if( props.lesserOrEqual ){
        if( props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          lesserOrEqual = lesserOrEqual.concat( props.lesserOrEqual.map( function(result, index){
              return ( <QualitativeValue {...result} key={index} /> )
           }) );
         lesserOrEqual.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          lesserOrEqual = ( <QualitativeValue props={ props.lesserOrEqual } /> );        }
      }
      var equal;
      if( props.equal ){
        if( props.equal instanceof Array ){
          equal = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          equal = equal.concat( props.equal.map( function(result, index){
              return ( <QualitativeValue {...result} key={index} /> )
           }) );
         equal.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          equal = ( <QualitativeValue props={ props.equal } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          name = name.concat( props.name.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. name is a Text.'></div> )
           }) );
         name.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var lesser;
      if( props.lesser ){
        if( props.lesser instanceof Array ){
          lesser = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          lesser = lesser.concat( props.lesser.map( function(result, index){
              return ( <QualitativeValue {...result} key={index} /> )
           }) );
         lesser.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          lesser = ( <QualitativeValue props={ props.lesser } /> );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          url = url.concat( props.url.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. url is a URL.'></div> )
           }) );
         url.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalProperty = additionalProperty.concat( props.additionalProperty.map( function(result, index){
              return ( <PropertyValue {...result} key={index} /> )
           }) );
         additionalProperty.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          additionalProperty = ( <PropertyValue props={ props.additionalProperty } /> );        }
      }
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          supersededBy = supersededBy.concat( props.supersededBy.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. supersededBy is a Property or
Enumeration or
Class.'></div> )
           }) );
         supersededBy.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            supersededBy = ( <div data-advice='Put your HTML here. supersededBy is a Property or
Enumeration or
Class.'></div> );
        }
      }
      var greaterOrEqual;
      if( props.greaterOrEqual ){
        if( props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          greaterOrEqual = greaterOrEqual.concat( props.greaterOrEqual.map( function(result, index){
              return ( <QualitativeValue {...result} key={index} /> )
           }) );
         greaterOrEqual.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          greaterOrEqual = ( <QualitativeValue props={ props.greaterOrEqual } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. additionalType is a URL.'></div> )
           }) );
         additionalType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alternateName is a Text.'></div> )
           }) );
         alternateName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var nonEqual;
      if( props.nonEqual ){
        if( props.nonEqual instanceof Array ){
          nonEqual = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          nonEqual = nonEqual.concat( props.nonEqual.map( function(result, index){
              return ( <QualitativeValue {...result} key={index} /> )
           }) );
         nonEqual.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          nonEqual = ( <QualitativeValue props={ props.nonEqual } /> );        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          image = image.concat( props.image.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> )
           }) );
         image.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          description = description.concat( props.description.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. description is a Text.'></div> )
           }) );
         description.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
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
