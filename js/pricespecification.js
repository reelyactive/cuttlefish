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
          validFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, {props:  this.props.validFrom}) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  this.props.validFrom}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
        }
      }
      var priceCurrency;
      if( this.props.priceCurrency ){
        if( this.props.priceCurrency instanceof Array ){
          priceCurrency = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.priceCurrency ){
            priceCurrency.push( ( React.createElement("div", {"data-advice": "Put your HTML here. priceCurrency is a Text."}) ) );
          }
        } else {
            priceCurrency.push( ( React.createElement("div", {"data-advice": "Put your HTML here. priceCurrency is a Text."}) ) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
        }
      }
      var price;
      if( this.props.price ){
        if( this.props.price instanceof Array ){
          price = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.price ){
            price.push( ( React.createElement("div", {"data-advice": "Put your HTML here. price is a Text or" + ' ' +
"Number."}) ) );
          }
        } else {
            price.push( ( React.createElement("div", {"data-advice": "Put your HTML here. price is a Text or" + ' ' +
"Number."}) ) );
        }
      }
      var maxPrice;
      if( this.props.maxPrice ){
        if( this.props.maxPrice instanceof Array ){
          maxPrice = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.maxPrice ){
            maxPrice.push( ( React.createElement("div", {"data-advice": "Put your HTML here. maxPrice is a Number."}) ) );
          }
        } else {
            maxPrice.push( ( React.createElement("div", {"data-advice": "Put your HTML here. maxPrice is a Number."}) ) );
        }
      }
      var eligibleTransactionVolume;
      if( this.props.eligibleTransactionVolume ){
        if( this.props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( React.createElement(PriceSpecification, {props:  this.props.eligibleTransactionVolume}) ) );          }
        } else {
          eligibleTransactionVolume = ( React.createElement(PriceSpecification, {props:  this.props.eligibleTransactionVolume}) );        }
      }
      var valueAddedTaxIncluded;
      if( this.props.valueAddedTaxIncluded ){
        if( this.props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.valueAddedTaxIncluded ){
            valueAddedTaxIncluded.push( ( React.createElement(Boolean, {props:  this.props.valueAddedTaxIncluded}) ) );          }
        } else {
          valueAddedTaxIncluded = ( React.createElement(Boolean, {props:  this.props.valueAddedTaxIncluded}) );        }
      }
      var eligibleQuantity;
      if( this.props.eligibleQuantity ){
        if( this.props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.eligibleQuantity ){
            eligibleQuantity.push( ( React.createElement(QuantitativeValue, {props:  this.props.eligibleQuantity}) ) );          }
        } else {
          eligibleQuantity = ( React.createElement(QuantitativeValue, {props:  this.props.eligibleQuantity}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.validThrough ){
            validThrough.push( ( React.createElement(DateTime, {props:  this.props.validThrough}) ) );          }
        } else {
          validThrough = ( React.createElement(DateTime, {props:  this.props.validThrough}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
        }
      }
      var minPrice;
      if( this.props.minPrice ){
        if( this.props.minPrice instanceof Array ){
          minPrice = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.minPrice ){
            minPrice.push( ( React.createElement("div", {"data-advice": "Put your HTML here. minPrice is a Number."}) ) );
          }
        } else {
            minPrice.push( ( React.createElement("div", {"data-advice": "Put your HTML here. minPrice is a Number."}) ) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      return (React.createElement("div", {title: "PriceSpecification", className: "PriceSpecification entity"}, 
         validFrom, 
         description, 
         priceCurrency, 
         sameAs, 
         price, 
         maxPrice, 
         eligibleTransactionVolume, 
         valueAddedTaxIncluded, 
         eligibleQuantity, 
         url, 
         potentialAction, 
         validThrough, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         minPrice, 
         image, 
         name 
     ));
    }
  });
});
