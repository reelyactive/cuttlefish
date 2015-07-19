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
          validFrom = [(<p>validFrom:</p> )];
          for( i in this.props.validFrom ){
            validFrom.push( ( <DateTime props={ this.props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ this.props.validFrom } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var priceCurrency;
      if( this.props.priceCurrency ){
        if( this.props.priceCurrency instanceof Array ){
          priceCurrency = [(<p>priceCurrency:</p> )];
          for( i in this.props.priceCurrency ){
            priceCurrency.push( ( <div class='priceCurrency'></div> ) );
          }
        } else {
          priceCurrency = ( <div class='priceCurrency'>{this.props.priceCurrency}</div> );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var price;
      if( this.props.price ){
        if( this.props.price instanceof Array ){
          price = [(<p>price:</p> )];
          for( i in this.props.price ){
            price.push( ( <div class='price'></div> ) );
          }
        } else {
          price = ( <div class='price'>{this.props.price}</div> );
        }
      }
      var maxPrice;
      if( this.props.maxPrice ){
        if( this.props.maxPrice instanceof Array ){
          maxPrice = [(<p>maxPrice:</p> )];
          for( i in this.props.maxPrice ){
            maxPrice.push( ( <div class='maxPrice'></div> ) );
          }
        } else {
          maxPrice = ( <div class='maxPrice'>{this.props.maxPrice}</div> );
        }
      }
      var eligibleTransactionVolume;
      if( this.props.eligibleTransactionVolume ){
        if( this.props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [(<p>eligibleTransactionVolume:</p> )];
          for( i in this.props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( <PriceSpecification props={ this.props.eligibleTransactionVolume } /> ) );          }
        } else {
          eligibleTransactionVolume = ( <PriceSpecification props={ this.props.eligibleTransactionVolume } /> );        }
      }
      var valueAddedTaxIncluded;
      if( this.props.valueAddedTaxIncluded ){
        if( this.props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [(<p>valueAddedTaxIncluded:</p> )];
          for( i in this.props.valueAddedTaxIncluded ){
            valueAddedTaxIncluded.push( ( <Boolean props={ this.props.valueAddedTaxIncluded } /> ) );          }
        } else {
          valueAddedTaxIncluded = ( <Boolean props={ this.props.valueAddedTaxIncluded } /> );        }
      }
      var eligibleQuantity;
      if( this.props.eligibleQuantity ){
        if( this.props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [(<p>eligibleQuantity:</p> )];
          for( i in this.props.eligibleQuantity ){
            eligibleQuantity.push( ( <QuantitativeValue props={ this.props.eligibleQuantity } /> ) );          }
        } else {
          eligibleQuantity = ( <QuantitativeValue props={ this.props.eligibleQuantity } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [(<p>validThrough:</p> )];
          for( i in this.props.validThrough ){
            validThrough.push( ( <DateTime props={ this.props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ this.props.validThrough } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var minPrice;
      if( this.props.minPrice ){
        if( this.props.minPrice instanceof Array ){
          minPrice = [(<p>minPrice:</p> )];
          for( i in this.props.minPrice ){
            minPrice.push( ( <div class='minPrice'></div> ) );
          }
        } else {
          minPrice = ( <div class='minPrice'>{this.props.minPrice}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
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
