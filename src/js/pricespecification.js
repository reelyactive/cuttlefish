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
          validFrom = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          validFrom = validFrom.concat( props.validFrom.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         validFrom.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          validFrom = ( React.createElement(DateTime, {props:  props.validFrom}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var priceCurrency;
      if( props.priceCurrency ){
        if( props.priceCurrency instanceof Array ){
          priceCurrency = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          priceCurrency = priceCurrency.concat( props.priceCurrency.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. priceCurrency is a Text."}) )
           }) );
         priceCurrency.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            priceCurrency = ( React.createElement("div", {"data-advice": "Put your HTML here. priceCurrency is a Text."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var price;
      if( props.price ){
        if( props.price instanceof Array ){
          price = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          price = price.concat( props.price.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. price is a Text or" + ' ' +
"Number."}) )
           }) );
         price.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            price = ( React.createElement("div", {"data-advice": "Put your HTML here. price is a Text or" + ' ' +
"Number."}) );
        }
      }
      var maxPrice;
      if( props.maxPrice ){
        if( props.maxPrice instanceof Array ){
          maxPrice = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          maxPrice = maxPrice.concat( props.maxPrice.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. maxPrice is a Number."}) )
           }) );
         maxPrice.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            maxPrice = ( React.createElement("div", {"data-advice": "Put your HTML here. maxPrice is a Number."}) );
        }
      }
      var eligibleTransactionVolume;
      if( props.eligibleTransactionVolume ){
        if( props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          eligibleTransactionVolume = eligibleTransactionVolume.concat( props.eligibleTransactionVolume.map( function(result, index){
              return ( React.createElement(PriceSpecification, React.__spread({},  result, {key: index})) )
           }) );
         eligibleTransactionVolume.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          eligibleTransactionVolume = ( React.createElement(PriceSpecification, {props:  props.eligibleTransactionVolume}) );        }
      }
      var valueAddedTaxIncluded;
      if( props.valueAddedTaxIncluded ){
        if( props.valueAddedTaxIncluded instanceof Array ){
          valueAddedTaxIncluded = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          valueAddedTaxIncluded = valueAddedTaxIncluded.concat( props.valueAddedTaxIncluded.map( function(result, index){
              return ( React.createElement(Boolean, React.__spread({},  result, {key: index})) )
           }) );
         valueAddedTaxIncluded.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          valueAddedTaxIncluded = ( React.createElement(Boolean, {props:  props.valueAddedTaxIncluded}) );        }
      }
      var eligibleQuantity;
      if( props.eligibleQuantity ){
        if( props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          eligibleQuantity = eligibleQuantity.concat( props.eligibleQuantity.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         eligibleQuantity.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          eligibleQuantity = ( React.createElement(QuantitativeValue, {props:  props.eligibleQuantity}) );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var validThrough;
      if( props.validThrough ){
        if( props.validThrough instanceof Array ){
          validThrough = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          validThrough = validThrough.concat( props.validThrough.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         validThrough.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          validThrough = ( React.createElement(DateTime, {props:  props.validThrough}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var minPrice;
      if( props.minPrice ){
        if( props.minPrice instanceof Array ){
          minPrice = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          minPrice = minPrice.concat( props.minPrice.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. minPrice is a Number."}) )
           }) );
         minPrice.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            minPrice = ( React.createElement("div", {"data-advice": "Put your HTML here. minPrice is a Number."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
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
