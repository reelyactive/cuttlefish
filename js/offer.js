/* Thing > Intangible > Offer - An offer to transfer some rights to an item or to provide a service\u2014for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nFor GTIN-related fields, see\nCheck Digit calculator and validation guide from GS1.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './geoshape', './businessentitytype', './review', './quantitativevalue', './datetime', './itemavailability', './product', './offer', './offeritemcondition', './businessfunction', './imageobject', './aggregaterating', './warrantypromise', './physicalactivitycategory', './creativework', './person', './typeandquantitynode', './place', './action', './organization', './paymentmethod', './thing', './pricespecification', './deliverymethod'], function(React, GeoShape, BusinessEntityType, Review, QuantitativeValue, DateTime, ItemAvailability, Product, Offer, OfferItemCondition, BusinessFunction, ImageObject, AggregateRating, WarrantyPromise, PhysicalActivityCategory, CreativeWork, Person, TypeAndQuantityNode, Place, Action, Organization, PaymentMethod, Thing, PriceSpecification, DeliveryMethod){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var warranty;
      if( props.warranty ){
        if( props.warranty instanceof Array ){
          warranty = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          warranty = warranty.concat( props.warranty.map( function(result, index){
              return ( React.createElement(WarrantyPromise, React.__spread({},  result, {key: index})) )
           }) );
         warranty.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          warranty = ( React.createElement(WarrantyPromise, {props:  props.warranty}) );        }
      }
      var ineligibleRegion;
      if( props.ineligibleRegion ){
        if( props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          ineligibleRegion = ineligibleRegion.concat( props.ineligibleRegion.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. ineligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) )
           }) );
         ineligibleRegion.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            ineligibleRegion = ( React.createElement("div", {"data-advice": "Put your HTML here. ineligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) );
        }
      }
      var priceValidUntil;
      if( props.priceValidUntil ){
        if( props.priceValidUntil instanceof Array ){
          priceValidUntil = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          priceValidUntil = priceValidUntil.concat( props.priceValidUntil.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. priceValidUntil is a Date."}) )
           }) );
         priceValidUntil.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            priceValidUntil = ( React.createElement("div", {"data-advice": "Put your HTML here. priceValidUntil is a Date."}) );
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
      var eligibleRegion;
      if( props.eligibleRegion ){
        if( props.eligibleRegion instanceof Array ){
          eligibleRegion = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          eligibleRegion = eligibleRegion.concat( props.eligibleRegion.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. eligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) )
           }) );
         eligibleRegion.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            eligibleRegion = ( React.createElement("div", {"data-advice": "Put your HTML here. eligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) );
        }
      }
      var businessFunction;
      if( props.businessFunction ){
        if( props.businessFunction instanceof Array ){
          businessFunction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          businessFunction = businessFunction.concat( props.businessFunction.map( function(result, index){
              return ( React.createElement(BusinessFunction, React.__spread({},  result, {key: index})) )
           }) );
         businessFunction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          businessFunction = ( React.createElement(BusinessFunction, {props:  props.businessFunction}) );        }
      }
      var deliveryLeadTime;
      if( props.deliveryLeadTime ){
        if( props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          deliveryLeadTime = deliveryLeadTime.concat( props.deliveryLeadTime.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         deliveryLeadTime.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          deliveryLeadTime = ( React.createElement(QuantitativeValue, {props:  props.deliveryLeadTime}) );        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( React.createElement(AggregateRating, React.__spread({},  result, {key: index})) )
           }) );
         aggregateRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sku = sku.concat( props.sku.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sku is a Text."}) )
           }) );
         sku.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sku = ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) );
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
      var availability;
      if( props.availability ){
        if( props.availability instanceof Array ){
          availability = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          availability = availability.concat( props.availability.map( function(result, index){
              return ( React.createElement(ItemAvailability, React.__spread({},  result, {key: index})) )
           }) );
         availability.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          availability = ( React.createElement(ItemAvailability, {props:  props.availability}) );        }
      }
      var category;
      if( props.category ){
        if( props.category instanceof Array ){
          category = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          category = category.concat( props.category.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. category is a Thing or" + ' ' +
"Text or" + ' ' +
"PhysicalActivityCategory."}) )
           }) );
         category.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            category = ( React.createElement("div", {"data-advice": "Put your HTML here. category is a Thing or" + ' ' +
"Text or" + ' ' +
"PhysicalActivityCategory."}) );
        }
      }
      var availabilityStarts;
      if( props.availabilityStarts ){
        if( props.availabilityStarts instanceof Array ){
          availabilityStarts = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          availabilityStarts = availabilityStarts.concat( props.availabilityStarts.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         availabilityStarts.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          availabilityStarts = ( React.createElement(DateTime, {props:  props.availabilityStarts}) );        }
      }
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin14 = gtin14.concat( props.gtin14.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin14 is a Text."}) )
           }) );
         gtin14.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin14 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          review = review.concat( props.review.map( function(result, index){
              return ( React.createElement(Review, React.__spread({},  result, {key: index})) )
           }) );
         review.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var itemOffered;
      if( props.itemOffered ){
        if( props.itemOffered instanceof Array ){
          itemOffered = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          itemOffered = itemOffered.concat( props.itemOffered.map( function(result, index){
              return ( React.createElement(Product, React.__spread({},  result, {key: index})) )
           }) );
         itemOffered.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          itemOffered = ( React.createElement(Product, {props:  props.itemOffered}) );        }
      }
      var seller;
      if( props.seller ){
        if( props.seller instanceof Array ){
          seller = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          seller = seller.concat( props.seller.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. seller is a Person or" + ' ' +
"Organization."}) )
           }) );
         seller.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            seller = ( React.createElement("div", {"data-advice": "Put your HTML here. seller is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var includesObject;
      if( props.includesObject ){
        if( props.includesObject instanceof Array ){
          includesObject = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          includesObject = includesObject.concat( props.includesObject.map( function(result, index){
              return ( React.createElement(TypeAndQuantityNode, React.__spread({},  result, {key: index})) )
           }) );
         includesObject.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          includesObject = ( React.createElement(TypeAndQuantityNode, {props:  props.includesObject}) );        }
      }
      var eligibleDuration;
      if( props.eligibleDuration ){
        if( props.eligibleDuration instanceof Array ){
          eligibleDuration = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          eligibleDuration = eligibleDuration.concat( props.eligibleDuration.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         eligibleDuration.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          eligibleDuration = ( React.createElement(QuantitativeValue, {props:  props.eligibleDuration}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
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
      var addOn;
      if( props.addOn ){
        if( props.addOn instanceof Array ){
          addOn = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          addOn = addOn.concat( props.addOn.map( function(result, index){
              return ( React.createElement(Offer, React.__spread({},  result, {key: index})) )
           }) );
         addOn.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          addOn = ( React.createElement(Offer, {props:  props.addOn}) );        }
      }
      var inventoryLevel;
      if( props.inventoryLevel ){
        if( props.inventoryLevel instanceof Array ){
          inventoryLevel = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          inventoryLevel = inventoryLevel.concat( props.inventoryLevel.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         inventoryLevel.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          inventoryLevel = ( React.createElement(QuantitativeValue, {props:  props.inventoryLevel}) );        }
      }
      var availableAtOrFrom;
      if( props.availableAtOrFrom ){
        if( props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          availableAtOrFrom = availableAtOrFrom.concat( props.availableAtOrFrom.map( function(result, index){
              return ( React.createElement(Place, React.__spread({},  result, {key: index})) )
           }) );
         availableAtOrFrom.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          availableAtOrFrom = ( React.createElement(Place, {props:  props.availableAtOrFrom}) );        }
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
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mpn = mpn.concat( props.mpn.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mpn is a Text."}) )
           }) );
         mpn.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mpn = ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) );
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
      var eligibleCustomerType;
      if( props.eligibleCustomerType ){
        if( props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          eligibleCustomerType = eligibleCustomerType.concat( props.eligibleCustomerType.map( function(result, index){
              return ( React.createElement(BusinessEntityType, React.__spread({},  result, {key: index})) )
           }) );
         eligibleCustomerType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          eligibleCustomerType = ( React.createElement(BusinessEntityType, {props:  props.eligibleCustomerType}) );        }
      }
      var priceSpecification;
      if( props.priceSpecification ){
        if( props.priceSpecification instanceof Array ){
          priceSpecification = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          priceSpecification = priceSpecification.concat( props.priceSpecification.map( function(result, index){
              return ( React.createElement(PriceSpecification, React.__spread({},  result, {key: index})) )
           }) );
         priceSpecification.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          priceSpecification = ( React.createElement(PriceSpecification, {props:  props.priceSpecification}) );        }
      }
      var acceptedPaymentMethod;
      if( props.acceptedPaymentMethod ){
        if( props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          acceptedPaymentMethod = acceptedPaymentMethod.concat( props.acceptedPaymentMethod.map( function(result, index){
              return ( React.createElement(PaymentMethod, React.__spread({},  result, {key: index})) )
           }) );
         acceptedPaymentMethod.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          acceptedPaymentMethod = ( React.createElement(PaymentMethod, {props:  props.acceptedPaymentMethod}) );        }
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
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin8 = gtin8.concat( props.gtin8.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin8 is a Text."}) )
           }) );
         gtin8.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin8 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) );
        }
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
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          itemCondition = itemCondition.concat( props.itemCondition.map( function(result, index){
              return ( React.createElement(OfferItemCondition, React.__spread({},  result, {key: index})) )
           }) );
         itemCondition.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  props.itemCondition}) );        }
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
      var availabilityEnds;
      if( props.availabilityEnds ){
        if( props.availabilityEnds instanceof Array ){
          availabilityEnds = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          availabilityEnds = availabilityEnds.concat( props.availabilityEnds.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         availabilityEnds.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          availabilityEnds = ( React.createElement(DateTime, {props:  props.availabilityEnds}) );        }
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
      var serialNumber;
      if( props.serialNumber ){
        if( props.serialNumber instanceof Array ){
          serialNumber = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          serialNumber = serialNumber.concat( props.serialNumber.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. serialNumber is a Text."}) )
           }) );
         serialNumber.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            serialNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. serialNumber is a Text."}) );
        }
      }
      var availableDeliveryMethod;
      if( props.availableDeliveryMethod ){
        if( props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          availableDeliveryMethod = availableDeliveryMethod.concat( props.availableDeliveryMethod.map( function(result, index){
              return ( React.createElement(DeliveryMethod, React.__spread({},  result, {key: index})) )
           }) );
         availableDeliveryMethod.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          availableDeliveryMethod = ( React.createElement(DeliveryMethod, {props:  props.availableDeliveryMethod}) );        }
      }
      var advanceBookingRequirement;
      if( props.advanceBookingRequirement ){
        if( props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          advanceBookingRequirement = advanceBookingRequirement.concat( props.advanceBookingRequirement.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         advanceBookingRequirement.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          advanceBookingRequirement = ( React.createElement(QuantitativeValue, {props:  props.advanceBookingRequirement}) );        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin13 = gtin13.concat( props.gtin13.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin13 is a Text."}) )
           }) );
         gtin13.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin13 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin12 = gtin12.concat( props.gtin12.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin12 is a Text."}) )
           }) );
         gtin12.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin12 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) );
        }
      }
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
      return (React.createElement("div", {title: "Offer", className: "Offer entity"}, 
         warranty, 
         ineligibleRegion, 
         priceValidUntil, 
         sameAs, 
         eligibleRegion, 
         businessFunction, 
         deliveryLeadTime, 
         aggregateRating, 
         sku, 
         additionalType, 
         availability, 
         category, 
         availabilityStarts, 
         gtin14, 
         review, 
         itemOffered, 
         seller, 
         includesObject, 
         eligibleDuration, 
         mainEntityOfPage, 
         image, 
         addOn, 
         inventoryLevel, 
         availableAtOrFrom, 
         description, 
         mpn, 
         price, 
         eligibleCustomerType, 
         priceSpecification, 
         acceptedPaymentMethod, 
         eligibleTransactionVolume, 
         gtin8, 
         eligibleQuantity, 
         potentialAction, 
         itemCondition, 
         alternateName, 
         availabilityEnds, 
         name, 
         priceCurrency, 
         url, 
         serialNumber, 
         availableDeliveryMethod, 
         advanceBookingRequirement, 
         gtin13, 
         gtin12, 
         validFrom, 
         validThrough 
     ));
    }
  });
});
