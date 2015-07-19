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
          validFrom = [(React.createElement("p", null, "validFrom:") )];
          for( i in this.props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, {props:  this.props.validFrom}) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  this.props.validFrom}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var priceCurrency;
      if( this.props.priceCurrency ){
        if( this.props.priceCurrency instanceof Array ){
          priceCurrency = [(React.createElement("p", null, "priceCurrency:") )];
          for( i in this.props.priceCurrency ){
            priceCurrency.push( ( React.createElement("div", {class: "priceCurrency"}) ) );
          }
        } else {
          priceCurrency = ( React.createElement("div", {class: "priceCurrency"}, this.props.priceCurrency) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var price;
      if( this.props.price ){
        if( this.props.price instanceof Array ){
          price = [(React.createElement("p", null, "price:") )];
          for( i in this.props.price ){
            price.push( ( React.createElement("div", {class: "price"}) ) );
          }
        } else {
          price = ( React.createElement("div", {class: "price"}, this.props.price) );
        }
      }
      var maxPrice;
      if( this.props.maxPrice ){
        if( this.props.maxPrice instanceof Array ){
          maxPrice = [(React.createElement("p", null, "maxPrice:") )];
          for( i in this.props.maxPrice ){
            maxPrice.push( ( React.createElement("div", {class: "maxPrice"}) ) );
          }
        } else {
          maxPrice = ( React.createElement("div", {class: "maxPrice"}, this.props.maxPrice) );
        }
      }
      var eligibleTransactionVolume;
      if( this.props.eligibleTransactionVolume ){
        if( this.props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [(React.createElement("p", null, "eligibleTransactionVolume:") )];
          for( i in this.props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( React.createElement(PriceSpecification, {props:  this.props.eligibleTransactionVolume}) ) );          }
        } else {
          eligibleTransactionVolume = ( React.createElement(PriceSpecification, {props:  this.props.eligibleTransactionVolume}) );        }
      }
      var valueAddedTaxIncluded;
      if( this.props.valueAddedTaxIncluded ){
        if( this.props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [(React.createElement("p", null, "valueAddedTaxIncluded:") )];
          for( i in this.props.valueAddedTaxIncluded ){
            valueAddedTaxIncluded.push( ( React.createElement(Boolean, {props:  this.props.valueAddedTaxIncluded}) ) );          }
        } else {
          valueAddedTaxIncluded = ( React.createElement(Boolean, {props:  this.props.valueAddedTaxIncluded}) );        }
      }
      var eligibleQuantity;
      if( this.props.eligibleQuantity ){
        if( this.props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [(React.createElement("p", null, "eligibleQuantity:") )];
          for( i in this.props.eligibleQuantity ){
            eligibleQuantity.push( ( React.createElement(QuantitativeValue, {props:  this.props.eligibleQuantity}) ) );          }
        } else {
          eligibleQuantity = ( React.createElement(QuantitativeValue, {props:  this.props.eligibleQuantity}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [(React.createElement("p", null, "validThrough:") )];
          for( i in this.props.validThrough ){
            validThrough.push( ( React.createElement(DateTime, {props:  this.props.validThrough}) ) );          }
        } else {
          validThrough = ( React.createElement(DateTime, {props:  this.props.validThrough}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var minPrice;
      if( this.props.minPrice ){
        if( this.props.minPrice instanceof Array ){
          minPrice = [(React.createElement("p", null, "minPrice:") )];
          for( i in this.props.minPrice ){
            minPrice.push( ( React.createElement("div", {class: "minPrice"}) ) );
          }
        } else {
          minPrice = ( React.createElement("div", {class: "minPrice"}, this.props.minPrice) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
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
