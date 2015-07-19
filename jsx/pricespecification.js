/* Thing > Intangible > StructuredValue > PriceSpecification - A structured value representing a monetary amount. Typically, only the subclasses of this type are used for markup.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './pricespecification', './quantitativevalue', './imageobject', './boolean', './action', './datetime', './creativework'], function(React, PriceSpecification, QuantitativeValue, ImageObject, Boolean, Action, DateTime, CreativeWork){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.validFrom ){
            validFrom.push( ( <DateTime props={ this.props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ this.props.validFrom } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
        }
      }
      var priceCurrency;
      if( this.props.priceCurrency ){
        if( this.props.priceCurrency instanceof Array ){
          priceCurrency = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.priceCurrency ){
            priceCurrency.push( ( <div data-advice='Put your HTML here. priceCurrency is a Text.'></div> ) );
          }
        } else {
            priceCurrency.push( ( <div data-advice='Put your HTML here. priceCurrency is a Text.'></div> ) );
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
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
        }
      }
      var price;
      if( this.props.price ){
        if( this.props.price instanceof Array ){
          price = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.price ){
            price.push( ( <div data-advice='Put your HTML here. price is a Text or
Number.'></div> ) );
          }
        } else {
            price.push( ( <div data-advice='Put your HTML here. price is a Text or
Number.'></div> ) );
        }
      }
      var maxPrice;
      if( this.props.maxPrice ){
        if( this.props.maxPrice instanceof Array ){
          maxPrice = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.maxPrice ){
            maxPrice.push( ( <div data-advice='Put your HTML here. maxPrice is a Number.'></div> ) );
          }
        } else {
            maxPrice.push( ( <div data-advice='Put your HTML here. maxPrice is a Number.'></div> ) );
        }
      }
      var eligibleTransactionVolume;
      if( this.props.eligibleTransactionVolume ){
        if( this.props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( <PriceSpecification props={ this.props.eligibleTransactionVolume } /> ) );          }
        } else {
          eligibleTransactionVolume = ( <PriceSpecification props={ this.props.eligibleTransactionVolume } /> );        }
      }
      var valueAddedTaxIncluded;
      if( this.props.valueAddedTaxIncluded ){
        if( this.props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.valueAddedTaxIncluded ){
            valueAddedTaxIncluded.push( ( <Boolean props={ this.props.valueAddedTaxIncluded } /> ) );          }
        } else {
          valueAddedTaxIncluded = ( <Boolean props={ this.props.valueAddedTaxIncluded } /> );        }
      }
      var eligibleQuantity;
      if( this.props.eligibleQuantity ){
        if( this.props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eligibleQuantity ){
            eligibleQuantity.push( ( <QuantitativeValue props={ this.props.eligibleQuantity } /> ) );          }
        } else {
          eligibleQuantity = ( <QuantitativeValue props={ this.props.eligibleQuantity } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.validThrough ){
            validThrough.push( ( <DateTime props={ this.props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ this.props.validThrough } /> );        }
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
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
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
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
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
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
        }
      }
      var minPrice;
      if( this.props.minPrice ){
        if( this.props.minPrice instanceof Array ){
          minPrice = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.minPrice ){
            minPrice.push( ( <div data-advice='Put your HTML here. minPrice is a Number.'></div> ) );
          }
        } else {
            minPrice.push( ( <div data-advice='Put your HTML here. minPrice is a Number.'></div> ) );
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
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
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
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
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
