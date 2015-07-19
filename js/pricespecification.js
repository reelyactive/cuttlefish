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
          validFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, React.__spread({},  props.validFrom )) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  props.validFrom}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var priceCurrency;
      if( props.priceCurrency ){
        if( props.priceCurrency instanceof Array ){
          priceCurrency = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.priceCurrency ){
            priceCurrency.push( ( React.createElement("div", {"data-advice": "Put your HTML here. priceCurrency is a Text."}) ) );
          }
        } else {
            priceCurrency = ( React.createElement("div", {"data-advice": "Put your HTML here. priceCurrency is a Text."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var price;
      if( props.price ){
        if( props.price instanceof Array ){
          price = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.price ){
            price.push( ( React.createElement("div", {"data-advice": "Put your HTML here. price is a Text or" + ' ' +
"Number."}) ) );
          }
        } else {
            price = ( React.createElement("div", {"data-advice": "Put your HTML here. price is a Text or" + ' ' +
"Number."}) );
        }
      }
      var maxPrice;
      if( props.maxPrice ){
        if( props.maxPrice instanceof Array ){
          maxPrice = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.maxPrice ){
            maxPrice.push( ( React.createElement("div", {"data-advice": "Put your HTML here. maxPrice is a Number."}) ) );
          }
        } else {
            maxPrice = ( React.createElement("div", {"data-advice": "Put your HTML here. maxPrice is a Number."}) );
        }
      }
      var eligibleTransactionVolume;
      if( props.eligibleTransactionVolume ){
        if( props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( React.createElement(PriceSpecification, React.__spread({},  props.eligibleTransactionVolume )) ) );          }
        } else {
          eligibleTransactionVolume = ( React.createElement(PriceSpecification, {props:  props.eligibleTransactionVolume}) );        }
      }
      var valueAddedTaxIncluded;
      if( props.valueAddedTaxIncluded ){
        if( props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.valueAddedTaxIncluded ){
            valueAddedTaxIncluded.push( ( React.createElement(Boolean, React.__spread({},  props.valueAddedTaxIncluded )) ) );          }
        } else {
          valueAddedTaxIncluded = ( React.createElement(Boolean, {props:  props.valueAddedTaxIncluded}) );        }
      }
      var eligibleQuantity;
      if( props.eligibleQuantity ){
        if( props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.eligibleQuantity ){
            eligibleQuantity.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.eligibleQuantity )) ) );          }
        } else {
          eligibleQuantity = ( React.createElement(QuantitativeValue, {props:  props.eligibleQuantity}) );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var validThrough;
      if( props.validThrough ){
        if( props.validThrough instanceof Array ){
          validThrough = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.validThrough ){
            validThrough.push( ( React.createElement(DateTime, React.__spread({},  props.validThrough )) ) );          }
        } else {
          validThrough = ( React.createElement(DateTime, {props:  props.validThrough}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var minPrice;
      if( props.minPrice ){
        if( props.minPrice instanceof Array ){
          minPrice = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.minPrice ){
            minPrice.push( ( React.createElement("div", {"data-advice": "Put your HTML here. minPrice is a Number."}) ) );
          }
        } else {
            minPrice = ( React.createElement("div", {"data-advice": "Put your HTML here. minPrice is a Number."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
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
