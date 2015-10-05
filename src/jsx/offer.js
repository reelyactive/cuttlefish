/* Thing > Intangible > Offer - An offer to transfer some rights to an item or to provide a service\u2014for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nFor GTIN-related fields, see\nCheck Digit calculator and validation guide from GS1.. Generated automatically by the reactGenerator. */  var Offer= React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var warranty;
      if( props.warranty ){
        if( props.warranty instanceof Array ){
          warranty = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          warranty = warranty.concat( props.warranty.map( function(result, index){
              return ( <WarrantyPromise {...result} key={index} /> )
           }) );
         warranty.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          warranty = ( <WarrantyPromise props={ props.warranty } /> );        }
      }
      var ineligibleRegion;
      if( props.ineligibleRegion ){
        if( props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          ineligibleRegion = ineligibleRegion.concat( props.ineligibleRegion.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. ineligibleRegion is a GeoShape or
Text or
Place.'></div> )
           }) );
         ineligibleRegion.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            ineligibleRegion = ( <div data-advice='Put your HTML here. ineligibleRegion is a GeoShape or
Text or
Place.'></div> );
        }
      }
      var priceValidUntil;
      if( props.priceValidUntil ){
        if( props.priceValidUntil instanceof Array ){
          priceValidUntil = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          priceValidUntil = priceValidUntil.concat( props.priceValidUntil.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. priceValidUntil is a Date.'></div> )
           }) );
         priceValidUntil.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            priceValidUntil = ( <div data-advice='Put your HTML here. priceValidUntil is a Date.'></div> );
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
      var eligibleRegion;
      if( props.eligibleRegion ){
        if( props.eligibleRegion instanceof Array ){
          eligibleRegion = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          eligibleRegion = eligibleRegion.concat( props.eligibleRegion.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. eligibleRegion is a GeoShape or
Text or
Place.'></div> )
           }) );
         eligibleRegion.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            eligibleRegion = ( <div data-advice='Put your HTML here. eligibleRegion is a GeoShape or
Text or
Place.'></div> );
        }
      }
      var businessFunction;
      if( props.businessFunction ){
        if( props.businessFunction instanceof Array ){
          businessFunction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          businessFunction = businessFunction.concat( props.businessFunction.map( function(result, index){
              return ( <BusinessFunction {...result} key={index} /> )
           }) );
         businessFunction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          businessFunction = ( <BusinessFunction props={ props.businessFunction } /> );        }
      }
      var deliveryLeadTime;
      if( props.deliveryLeadTime ){
        if( props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          deliveryLeadTime = deliveryLeadTime.concat( props.deliveryLeadTime.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         deliveryLeadTime.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          deliveryLeadTime = ( <QuantitativeValue props={ props.deliveryLeadTime } /> );        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( <AggregateRating {...result} key={index} /> )
           }) );
         aggregateRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sku = sku.concat( props.sku.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sku is a Text.'></div> )
           }) );
         sku.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sku = ( <div data-advice='Put your HTML here. sku is a Text.'></div> );
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
      var availability;
      if( props.availability ){
        if( props.availability instanceof Array ){
          availability = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          availability = availability.concat( props.availability.map( function(result, index){
              return ( <ItemAvailability {...result} key={index} /> )
           }) );
         availability.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          availability = ( <ItemAvailability props={ props.availability } /> );        }
      }
      var category;
      if( props.category ){
        if( props.category instanceof Array ){
          category = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          category = category.concat( props.category.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. category is a PhysicalActivityCategory or
Thing or
Text.'></div> )
           }) );
         category.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            category = ( <div data-advice='Put your HTML here. category is a PhysicalActivityCategory or
Thing or
Text.'></div> );
        }
      }
      var availabilityStarts;
      if( props.availabilityStarts ){
        if( props.availabilityStarts instanceof Array ){
          availabilityStarts = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          availabilityStarts = availabilityStarts.concat( props.availabilityStarts.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         availabilityStarts.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          availabilityStarts = ( <DateTime props={ props.availabilityStarts } /> );        }
      }
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin14 = gtin14.concat( props.gtin14.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin14 is a Text.'></div> )
           }) );
         gtin14.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin14 = ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          review = review.concat( props.review.map( function(result, index){
              return ( <Review {...result} key={index} /> )
           }) );
         review.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var itemOffered;
      if( props.itemOffered ){
        if( props.itemOffered instanceof Array ){
          itemOffered = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          itemOffered = itemOffered.concat( props.itemOffered.map( function(result, index){
              return ( <Product {...result} key={index} /> )
           }) );
         itemOffered.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          itemOffered = ( <Product props={ props.itemOffered } /> );        }
      }
      var seller;
      if( props.seller ){
        if( props.seller instanceof Array ){
          seller = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          seller = seller.concat( props.seller.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. seller is a Person or
Organization.'></div> )
           }) );
         seller.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            seller = ( <div data-advice='Put your HTML here. seller is a Person or
Organization.'></div> );
        }
      }
      var includesObject;
      if( props.includesObject ){
        if( props.includesObject instanceof Array ){
          includesObject = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          includesObject = includesObject.concat( props.includesObject.map( function(result, index){
              return ( <TypeAndQuantityNode {...result} key={index} /> )
           }) );
         includesObject.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          includesObject = ( <TypeAndQuantityNode props={ props.includesObject } /> );        }
      }
      var eligibleDuration;
      if( props.eligibleDuration ){
        if( props.eligibleDuration instanceof Array ){
          eligibleDuration = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          eligibleDuration = eligibleDuration.concat( props.eligibleDuration.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         eligibleDuration.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          eligibleDuration = ( <QuantitativeValue props={ props.eligibleDuration } /> );        }
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
      var addOn;
      if( props.addOn ){
        if( props.addOn instanceof Array ){
          addOn = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          addOn = addOn.concat( props.addOn.map( function(result, index){
              return ( <Offer {...result} key={index} /> )
           }) );
         addOn.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          addOn = ( <Offer props={ props.addOn } /> );        }
      }
      var inventoryLevel;
      if( props.inventoryLevel ){
        if( props.inventoryLevel instanceof Array ){
          inventoryLevel = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          inventoryLevel = inventoryLevel.concat( props.inventoryLevel.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         inventoryLevel.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          inventoryLevel = ( <QuantitativeValue props={ props.inventoryLevel } /> );        }
      }
      var availableAtOrFrom;
      if( props.availableAtOrFrom ){
        if( props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          availableAtOrFrom = availableAtOrFrom.concat( props.availableAtOrFrom.map( function(result, index){
              return ( <Place {...result} key={index} /> )
           }) );
         availableAtOrFrom.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          availableAtOrFrom = ( <Place props={ props.availableAtOrFrom } /> );        }
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
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mpn = mpn.concat( props.mpn.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mpn is a Text.'></div> )
           }) );
         mpn.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mpn = ( <div data-advice='Put your HTML here. mpn is a Text.'></div> );
        }
      }
      var price;
      if( props.price ){
        if( props.price instanceof Array ){
          price = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          price = price.concat( props.price.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. price is a Number or
Text.'></div> )
           }) );
         price.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            price = ( <div data-advice='Put your HTML here. price is a Number or
Text.'></div> );
        }
      }
      var eligibleCustomerType;
      if( props.eligibleCustomerType ){
        if( props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          eligibleCustomerType = eligibleCustomerType.concat( props.eligibleCustomerType.map( function(result, index){
              return ( <BusinessEntityType {...result} key={index} /> )
           }) );
         eligibleCustomerType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          eligibleCustomerType = ( <BusinessEntityType props={ props.eligibleCustomerType } /> );        }
      }
      var priceSpecification;
      if( props.priceSpecification ){
        if( props.priceSpecification instanceof Array ){
          priceSpecification = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          priceSpecification = priceSpecification.concat( props.priceSpecification.map( function(result, index){
              return ( <PriceSpecification {...result} key={index} /> )
           }) );
         priceSpecification.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          priceSpecification = ( <PriceSpecification props={ props.priceSpecification } /> );        }
      }
      var acceptedPaymentMethod;
      if( props.acceptedPaymentMethod ){
        if( props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          acceptedPaymentMethod = acceptedPaymentMethod.concat( props.acceptedPaymentMethod.map( function(result, index){
              return ( <PaymentMethod {...result} key={index} /> )
           }) );
         acceptedPaymentMethod.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          acceptedPaymentMethod = ( <PaymentMethod props={ props.acceptedPaymentMethod } /> );        }
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
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin8 = gtin8.concat( props.gtin8.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin8 is a Text.'></div> )
           }) );
         gtin8.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin8 = ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> );
        }
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
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          itemCondition = itemCondition.concat( props.itemCondition.map( function(result, index){
              return ( <OfferItemCondition {...result} key={index} /> )
           }) );
         itemCondition.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          itemCondition = ( <OfferItemCondition props={ props.itemCondition } /> );        }
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
      var availabilityEnds;
      if( props.availabilityEnds ){
        if( props.availabilityEnds instanceof Array ){
          availabilityEnds = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          availabilityEnds = availabilityEnds.concat( props.availabilityEnds.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         availabilityEnds.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          availabilityEnds = ( <DateTime props={ props.availabilityEnds } /> );        }
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
      var serialNumber;
      if( props.serialNumber ){
        if( props.serialNumber instanceof Array ){
          serialNumber = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          serialNumber = serialNumber.concat( props.serialNumber.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. serialNumber is a Text.'></div> )
           }) );
         serialNumber.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            serialNumber = ( <div data-advice='Put your HTML here. serialNumber is a Text.'></div> );
        }
      }
      var availableDeliveryMethod;
      if( props.availableDeliveryMethod ){
        if( props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          availableDeliveryMethod = availableDeliveryMethod.concat( props.availableDeliveryMethod.map( function(result, index){
              return ( <DeliveryMethod {...result} key={index} /> )
           }) );
         availableDeliveryMethod.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          availableDeliveryMethod = ( <DeliveryMethod props={ props.availableDeliveryMethod } /> );        }
      }
      var advanceBookingRequirement;
      if( props.advanceBookingRequirement ){
        if( props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          advanceBookingRequirement = advanceBookingRequirement.concat( props.advanceBookingRequirement.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         advanceBookingRequirement.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          advanceBookingRequirement = ( <QuantitativeValue props={ props.advanceBookingRequirement } /> );        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin13 = gtin13.concat( props.gtin13.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin13 is a Text.'></div> )
           }) );
         gtin13.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin13 = ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin12 = gtin12.concat( props.gtin12.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin12 is a Text.'></div> )
           }) );
         gtin12.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin12 = ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> );
        }
      }
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
      return (<div title='Offer' className='Offer entity'>
        { warranty }
        { ineligibleRegion }
        { priceValidUntil }
        { sameAs }
        { eligibleRegion }
        { businessFunction }
        { deliveryLeadTime }
        { aggregateRating }
        { sku }
        { additionalType }
        { availability }
        { category }
        { availabilityStarts }
        { gtin14 }
        { review }
        { itemOffered }
        { seller }
        { includesObject }
        { eligibleDuration }
        { mainEntityOfPage }
        { image }
        { addOn }
        { inventoryLevel }
        { availableAtOrFrom }
        { description }
        { mpn }
        { price }
        { eligibleCustomerType }
        { priceSpecification }
        { acceptedPaymentMethod }
        { eligibleTransactionVolume }
        { gtin8 }
        { eligibleQuantity }
        { potentialAction }
        { itemCondition }
        { alternateName }
        { availabilityEnds }
        { name }
        { priceCurrency }
        { url }
        { serialNumber }
        { availableDeliveryMethod }
        { advanceBookingRequirement }
        { gtin13 }
        { gtin12 }
        { validFrom }
        { validThrough }
     </div>);
    }
  });
