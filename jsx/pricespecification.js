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
          validFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.validFrom ){
            validFrom.push( ( <DateTime {...props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ props.validFrom } /> );        }
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
      var priceCurrency;
      if( props.priceCurrency ){
        if( props.priceCurrency instanceof Array ){
          priceCurrency = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.priceCurrency ){
            priceCurrency.push( ( <div data-advice='Put your HTML here. priceCurrency is a Text.'></div> ) );
          }
        } else {
            priceCurrency = ( <div data-advice='Put your HTML here. priceCurrency is a Text.'></div> );
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
      var price;
      if( props.price ){
        if( props.price instanceof Array ){
          price = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.price ){
            price.push( ( <div data-advice='Put your HTML here. price is a Text or
Number.'></div> ) );
          }
        } else {
            price = ( <div data-advice='Put your HTML here. price is a Text or
Number.'></div> );
        }
      }
      var maxPrice;
      if( props.maxPrice ){
        if( props.maxPrice instanceof Array ){
          maxPrice = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.maxPrice ){
            maxPrice.push( ( <div data-advice='Put your HTML here. maxPrice is a Number.'></div> ) );
          }
        } else {
            maxPrice = ( <div data-advice='Put your HTML here. maxPrice is a Number.'></div> );
        }
      }
      var eligibleTransactionVolume;
      if( props.eligibleTransactionVolume ){
        if( props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( <PriceSpecification {...props.eligibleTransactionVolume } /> ) );          }
        } else {
          eligibleTransactionVolume = ( <PriceSpecification props={ props.eligibleTransactionVolume } /> );        }
      }
      var valueAddedTaxIncluded;
      if( props.valueAddedTaxIncluded ){
        if( props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.valueAddedTaxIncluded ){
            valueAddedTaxIncluded.push( ( <Boolean {...props.valueAddedTaxIncluded } /> ) );          }
        } else {
          valueAddedTaxIncluded = ( <Boolean props={ props.valueAddedTaxIncluded } /> );        }
      }
      var eligibleQuantity;
      if( props.eligibleQuantity ){
        if( props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.eligibleQuantity ){
            eligibleQuantity.push( ( <QuantitativeValue {...props.eligibleQuantity } /> ) );          }
        } else {
          eligibleQuantity = ( <QuantitativeValue props={ props.eligibleQuantity } /> );        }
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
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var validThrough;
      if( props.validThrough ){
        if( props.validThrough instanceof Array ){
          validThrough = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.validThrough ){
            validThrough.push( ( <DateTime {...props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ props.validThrough } /> );        }
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
      var minPrice;
      if( props.minPrice ){
        if( props.minPrice instanceof Array ){
          minPrice = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.minPrice ){
            minPrice.push( ( <div data-advice='Put your HTML here. minPrice is a Number.'></div> ) );
          }
        } else {
            minPrice = ( <div data-advice='Put your HTML here. minPrice is a Number.'></div> );
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
