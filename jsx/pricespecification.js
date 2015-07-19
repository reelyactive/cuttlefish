/* Thing > Intangible > StructuredValue > PriceSpecification - A structured value representing a monetary amount. Typically, only the subclasses of this type are used for markup.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './pricespecification', './quantitativevalue', './imageobject', './boolean', './action', './datetime', './creativework'], function(React, PriceSpecification, QuantitativeValue, ImageObject, Boolean, Action, DateTime, CreativeWork){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var validFrom;
      if( props.validFrom ){
        if( props.validFrom instanceof Array ){
          validFrom = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          validFrom = validFrom.concat( props.validFrom.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         validFrom.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          validFrom = ( <DateTime props={ props.validFrom } /> );        }
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
      var priceCurrency;
      if( props.priceCurrency ){
        if( props.priceCurrency instanceof Array ){
          priceCurrency = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          priceCurrency = priceCurrency.concat( props.priceCurrency.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. priceCurrency is a Text.'></div> )
           }) );
         priceCurrency.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            priceCurrency = ( <div data-advice='Put your HTML here. priceCurrency is a Text.'></div> );
        }
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
      var price;
      if( props.price ){
        if( props.price instanceof Array ){
          price = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          price = price.concat( props.price.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. price is a Text or
Number.'></div> )
           }) );
         price.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            price = ( <div data-advice='Put your HTML here. price is a Text or
Number.'></div> );
        }
      }
      var maxPrice;
      if( props.maxPrice ){
        if( props.maxPrice instanceof Array ){
          maxPrice = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          maxPrice = maxPrice.concat( props.maxPrice.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. maxPrice is a Number.'></div> )
           }) );
         maxPrice.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            maxPrice = ( <div data-advice='Put your HTML here. maxPrice is a Number.'></div> );
        }
      }
      var eligibleTransactionVolume;
      if( props.eligibleTransactionVolume ){
        if( props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          eligibleTransactionVolume = eligibleTransactionVolume.concat( props.eligibleTransactionVolume.map( function(result, index){
              return ( <PriceSpecification {...result} key={index} /> )
           }) );
         eligibleTransactionVolume.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          eligibleTransactionVolume = ( <PriceSpecification props={ props.eligibleTransactionVolume } /> );        }
      }
      var valueAddedTaxIncluded;
      if( props.valueAddedTaxIncluded ){
        if( props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          valueAddedTaxIncluded = valueAddedTaxIncluded.concat( props.valueAddedTaxIncluded.map( function(result, index){
              return ( <Boolean {...result} key={index} /> )
           }) );
         valueAddedTaxIncluded.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          valueAddedTaxIncluded = ( <Boolean props={ props.valueAddedTaxIncluded } /> );        }
      }
      var eligibleQuantity;
      if( props.eligibleQuantity ){
        if( props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          eligibleQuantity = eligibleQuantity.concat( props.eligibleQuantity.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         eligibleQuantity.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          eligibleQuantity = ( <QuantitativeValue props={ props.eligibleQuantity } /> );        }
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
      var validThrough;
      if( props.validThrough ){
        if( props.validThrough instanceof Array ){
          validThrough = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          validThrough = validThrough.concat( props.validThrough.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         validThrough.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          validThrough = ( <DateTime props={ props.validThrough } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
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
      var minPrice;
      if( props.minPrice ){
        if( props.minPrice instanceof Array ){
          minPrice = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          minPrice = minPrice.concat( props.minPrice.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. minPrice is a Number.'></div> )
           }) );
         minPrice.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            minPrice = ( <div data-advice='Put your HTML here. minPrice is a Number.'></div> );
        }
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
      return (<div title='PriceSpecification' className='PriceSpecification entity'>
        { validFrom }
        { description }
        { priceCurrency }
        { sameAs }
        { price }
        { maxPrice }
        { eligibleTransactionVolume }
        { valueAddedTaxIncluded }
        { eligibleQuantity }
        { url }
        { potentialAction }
        { validThrough }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { minPrice }
        { image }
        { name }
     </div>);
    }
  });
});
