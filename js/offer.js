/* Thing > Intangible > Offer - An offer to transfer some rights to an item or to provide a service\u2014for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nFor GTIN-related fields, see\nCheck Digit calculator and validation guide from GS1.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './geoshape', './businessentitytype', './review', './quantitativevalue', './datetime', './itemavailability', './product', './offer', './offeritemcondition', './businessfunction', './imageobject', './aggregaterating', './warrantypromise', './physicalactivitycategory', './creativework', './person', './typeandquantitynode', './place', './action', './organization', './paymentmethod', './thing', './pricespecification', './deliverymethod'], function(React, GeoShape, BusinessEntityType, Review, QuantitativeValue, DateTime, ItemAvailability, Product, Offer, OfferItemCondition, BusinessFunction, ImageObject, AggregateRating, WarrantyPromise, PhysicalActivityCategory, CreativeWork, Person, TypeAndQuantityNode, Place, Action, Organization, PaymentMethod, Thing, PriceSpecification, DeliveryMethod){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var warranty;
      if( this.props.warranty ){
        if( this.props.warranty instanceof Array ){
          warranty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.warranty ){
            warranty.push( ( React.createElement(WarrantyPromise, {props:  this.props.warranty}) ) );          }
        } else {
          warranty = ( React.createElement(WarrantyPromise, {props:  this.props.warranty}) );        }
      }
      var ineligibleRegion;
      if( this.props.ineligibleRegion ){
        if( this.props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.ineligibleRegion ){
            ineligibleRegion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. ineligibleRegion is a Text or" + ' ' +
"Place or" + ' ' +
"GeoShape."}) ) );
          }
        } else {
            ineligibleRegion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. ineligibleRegion is a Text or" + ' ' +
"Place or" + ' ' +
"GeoShape."}) ) );
        }
      }
      var priceValidUntil;
      if( this.props.priceValidUntil ){
        if( this.props.priceValidUntil instanceof Array ){
          priceValidUntil = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.priceValidUntil ){
            priceValidUntil.push( ( React.createElement("div", {"data-advice": "Put your HTML here. priceValidUntil is a Date."}) ) );
          }
        } else {
            priceValidUntil.push( ( React.createElement("div", {"data-advice": "Put your HTML here. priceValidUntil is a Date."}) ) );
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
      var eligibleRegion;
      if( this.props.eligibleRegion ){
        if( this.props.eligibleRegion instanceof Array ){
          eligibleRegion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.eligibleRegion ){
            eligibleRegion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. eligibleRegion is a Text or" + ' ' +
"Place or" + ' ' +
"GeoShape."}) ) );
          }
        } else {
            eligibleRegion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. eligibleRegion is a Text or" + ' ' +
"Place or" + ' ' +
"GeoShape."}) ) );
        }
      }
      var businessFunction;
      if( this.props.businessFunction ){
        if( this.props.businessFunction instanceof Array ){
          businessFunction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.businessFunction ){
            businessFunction.push( ( React.createElement(BusinessFunction, {props:  this.props.businessFunction}) ) );          }
        } else {
          businessFunction = ( React.createElement(BusinessFunction, {props:  this.props.businessFunction}) );        }
      }
      var deliveryLeadTime;
      if( this.props.deliveryLeadTime ){
        if( this.props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.deliveryLeadTime ){
            deliveryLeadTime.push( ( React.createElement(QuantitativeValue, {props:  this.props.deliveryLeadTime}) ) );          }
        } else {
          deliveryLeadTime = ( React.createElement(QuantitativeValue, {props:  this.props.deliveryLeadTime}) );        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sku ){
            sku.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) ) );
          }
        } else {
            sku.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) ) );
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
      var availability;
      if( this.props.availability ){
        if( this.props.availability instanceof Array ){
          availability = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.availability ){
            availability.push( ( React.createElement(ItemAvailability, {props:  this.props.availability}) ) );          }
        } else {
          availability = ( React.createElement(ItemAvailability, {props:  this.props.availability}) );        }
      }
      var category;
      if( this.props.category ){
        if( this.props.category instanceof Array ){
          category = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.category ){
            category.push( ( React.createElement("div", {"data-advice": "Put your HTML here. category is a Text or" + ' ' +
"PhysicalActivityCategory or" + ' ' +
"Thing."}) ) );
          }
        } else {
            category.push( ( React.createElement("div", {"data-advice": "Put your HTML here. category is a Text or" + ' ' +
"PhysicalActivityCategory or" + ' ' +
"Thing."}) ) );
        }
      }
      var availabilityStarts;
      if( this.props.availabilityStarts ){
        if( this.props.availabilityStarts instanceof Array ){
          availabilityStarts = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.availabilityStarts ){
            availabilityStarts.push( ( React.createElement(DateTime, {props:  this.props.availabilityStarts}) ) );          }
        } else {
          availabilityStarts = ( React.createElement(DateTime, {props:  this.props.availabilityStarts}) );        }
      }
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) ) );
          }
        } else {
            gtin14.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) ) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var itemOffered;
      if( this.props.itemOffered ){
        if( this.props.itemOffered instanceof Array ){
          itemOffered = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.itemOffered ){
            itemOffered.push( ( React.createElement(Product, {props:  this.props.itemOffered}) ) );          }
        } else {
          itemOffered = ( React.createElement(Product, {props:  this.props.itemOffered}) );        }
      }
      var seller;
      if( this.props.seller ){
        if( this.props.seller instanceof Array ){
          seller = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.seller ){
            seller.push( ( React.createElement("div", {"data-advice": "Put your HTML here. seller is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            seller.push( ( React.createElement("div", {"data-advice": "Put your HTML here. seller is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var includesObject;
      if( this.props.includesObject ){
        if( this.props.includesObject instanceof Array ){
          includesObject = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.includesObject ){
            includesObject.push( ( React.createElement(TypeAndQuantityNode, {props:  this.props.includesObject}) ) );          }
        } else {
          includesObject = ( React.createElement(TypeAndQuantityNode, {props:  this.props.includesObject}) );        }
      }
      var eligibleDuration;
      if( this.props.eligibleDuration ){
        if( this.props.eligibleDuration instanceof Array ){
          eligibleDuration = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.eligibleDuration ){
            eligibleDuration.push( ( React.createElement(QuantitativeValue, {props:  this.props.eligibleDuration}) ) );          }
        } else {
          eligibleDuration = ( React.createElement(QuantitativeValue, {props:  this.props.eligibleDuration}) );        }
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
      var addOn;
      if( this.props.addOn ){
        if( this.props.addOn instanceof Array ){
          addOn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.addOn ){
            addOn.push( ( React.createElement(Offer, {props:  this.props.addOn}) ) );          }
        } else {
          addOn = ( React.createElement(Offer, {props:  this.props.addOn}) );        }
      }
      var inventoryLevel;
      if( this.props.inventoryLevel ){
        if( this.props.inventoryLevel instanceof Array ){
          inventoryLevel = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.inventoryLevel ){
            inventoryLevel.push( ( React.createElement(QuantitativeValue, {props:  this.props.inventoryLevel}) ) );          }
        } else {
          inventoryLevel = ( React.createElement(QuantitativeValue, {props:  this.props.inventoryLevel}) );        }
      }
      var availableAtOrFrom;
      if( this.props.availableAtOrFrom ){
        if( this.props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.availableAtOrFrom ){
            availableAtOrFrom.push( ( React.createElement(Place, {props:  this.props.availableAtOrFrom}) ) );          }
        } else {
          availableAtOrFrom = ( React.createElement(Place, {props:  this.props.availableAtOrFrom}) );        }
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
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mpn ){
            mpn.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) ) );
          }
        } else {
            mpn.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) ) );
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
      var eligibleCustomerType;
      if( this.props.eligibleCustomerType ){
        if( this.props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.eligibleCustomerType ){
            eligibleCustomerType.push( ( React.createElement(BusinessEntityType, {props:  this.props.eligibleCustomerType}) ) );          }
        } else {
          eligibleCustomerType = ( React.createElement(BusinessEntityType, {props:  this.props.eligibleCustomerType}) );        }
      }
      var priceSpecification;
      if( this.props.priceSpecification ){
        if( this.props.priceSpecification instanceof Array ){
          priceSpecification = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.priceSpecification ){
            priceSpecification.push( ( React.createElement(PriceSpecification, {props:  this.props.priceSpecification}) ) );          }
        } else {
          priceSpecification = ( React.createElement(PriceSpecification, {props:  this.props.priceSpecification}) );        }
      }
      var acceptedPaymentMethod;
      if( this.props.acceptedPaymentMethod ){
        if( this.props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.acceptedPaymentMethod ){
            acceptedPaymentMethod.push( ( React.createElement(PaymentMethod, {props:  this.props.acceptedPaymentMethod}) ) );          }
        } else {
          acceptedPaymentMethod = ( React.createElement(PaymentMethod, {props:  this.props.acceptedPaymentMethod}) );        }
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
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) ) );
          }
        } else {
            gtin8.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) ) );
        }
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
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( React.createElement(OfferItemCondition, {props:  this.props.itemCondition}) ) );          }
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  this.props.itemCondition}) );        }
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
      var availabilityEnds;
      if( this.props.availabilityEnds ){
        if( this.props.availabilityEnds instanceof Array ){
          availabilityEnds = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.availabilityEnds ){
            availabilityEnds.push( ( React.createElement(DateTime, {props:  this.props.availabilityEnds}) ) );          }
        } else {
          availabilityEnds = ( React.createElement(DateTime, {props:  this.props.availabilityEnds}) );        }
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
      var serialNumber;
      if( this.props.serialNumber ){
        if( this.props.serialNumber instanceof Array ){
          serialNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.serialNumber ){
            serialNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. serialNumber is a Text."}) ) );
          }
        } else {
            serialNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. serialNumber is a Text."}) ) );
        }
      }
      var availableDeliveryMethod;
      if( this.props.availableDeliveryMethod ){
        if( this.props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.availableDeliveryMethod ){
            availableDeliveryMethod.push( ( React.createElement(DeliveryMethod, {props:  this.props.availableDeliveryMethod}) ) );          }
        } else {
          availableDeliveryMethod = ( React.createElement(DeliveryMethod, {props:  this.props.availableDeliveryMethod}) );        }
      }
      var advanceBookingRequirement;
      if( this.props.advanceBookingRequirement ){
        if( this.props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.advanceBookingRequirement ){
            advanceBookingRequirement.push( ( React.createElement(QuantitativeValue, {props:  this.props.advanceBookingRequirement}) ) );          }
        } else {
          advanceBookingRequirement = ( React.createElement(QuantitativeValue, {props:  this.props.advanceBookingRequirement}) );        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) ) );
          }
        } else {
            gtin13.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) ) );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) ) );
          }
        } else {
            gtin12.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) ) );
        }
      }
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, {props:  this.props.validFrom}) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  this.props.validFrom}) );        }
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