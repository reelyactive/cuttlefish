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
          warranty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.warranty ){
            warranty.push( ( <WarrantyPromise {...props.warranty } /> ) );          }
        } else {
          warranty = ( <WarrantyPromise props={ props.warranty } /> );        }
      }
      var ineligibleRegion;
      if( props.ineligibleRegion ){
        if( props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.ineligibleRegion ){
            ineligibleRegion.push( ( <div data-advice='Put your HTML here. ineligibleRegion is a Text or
Place or
GeoShape.'></div> ) );
          }
        } else {
            ineligibleRegion = ( <div data-advice='Put your HTML here. ineligibleRegion is a Text or
Place or
GeoShape.'></div> );
        }
      }
      var priceValidUntil;
      if( props.priceValidUntil ){
        if( props.priceValidUntil instanceof Array ){
          priceValidUntil = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.priceValidUntil ){
            priceValidUntil.push( ( <div data-advice='Put your HTML here. priceValidUntil is a Date.'></div> ) );
          }
        } else {
            priceValidUntil = ( <div data-advice='Put your HTML here. priceValidUntil is a Date.'></div> );
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
      var eligibleRegion;
      if( props.eligibleRegion ){
        if( props.eligibleRegion instanceof Array ){
          eligibleRegion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.eligibleRegion ){
            eligibleRegion.push( ( <div data-advice='Put your HTML here. eligibleRegion is a Text or
Place or
GeoShape.'></div> ) );
          }
        } else {
            eligibleRegion = ( <div data-advice='Put your HTML here. eligibleRegion is a Text or
Place or
GeoShape.'></div> );
        }
      }
      var businessFunction;
      if( props.businessFunction ){
        if( props.businessFunction instanceof Array ){
          businessFunction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.businessFunction ){
            businessFunction.push( ( <BusinessFunction {...props.businessFunction } /> ) );          }
        } else {
          businessFunction = ( <BusinessFunction props={ props.businessFunction } /> );        }
      }
      var deliveryLeadTime;
      if( props.deliveryLeadTime ){
        if( props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.deliveryLeadTime ){
            deliveryLeadTime.push( ( <QuantitativeValue {...props.deliveryLeadTime } /> ) );          }
        } else {
          deliveryLeadTime = ( <QuantitativeValue props={ props.deliveryLeadTime } /> );        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sku ){
            sku.push( ( <div data-advice='Put your HTML here. sku is a Text.'></div> ) );
          }
        } else {
            sku = ( <div data-advice='Put your HTML here. sku is a Text.'></div> );
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
      var availability;
      if( props.availability ){
        if( props.availability instanceof Array ){
          availability = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.availability ){
            availability.push( ( <ItemAvailability {...props.availability } /> ) );          }
        } else {
          availability = ( <ItemAvailability props={ props.availability } /> );        }
      }
      var category;
      if( props.category ){
        if( props.category instanceof Array ){
          category = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.category ){
            category.push( ( <div data-advice='Put your HTML here. category is a Text or
Thing or
PhysicalActivityCategory.'></div> ) );
          }
        } else {
            category = ( <div data-advice='Put your HTML here. category is a Text or
Thing or
PhysicalActivityCategory.'></div> );
        }
      }
      var availabilityStarts;
      if( props.availabilityStarts ){
        if( props.availabilityStarts instanceof Array ){
          availabilityStarts = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.availabilityStarts ){
            availabilityStarts.push( ( <DateTime {...props.availabilityStarts } /> ) );          }
        } else {
          availabilityStarts = ( <DateTime props={ props.availabilityStarts } /> );        }
      }
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin14 ){
            gtin14.push( ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> ) );
          }
        } else {
            gtin14 = ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.review ){
            review.push( ( <Review {...props.review } /> ) );          }
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var itemOffered;
      if( props.itemOffered ){
        if( props.itemOffered instanceof Array ){
          itemOffered = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.itemOffered ){
            itemOffered.push( ( <Product {...props.itemOffered } /> ) );          }
        } else {
          itemOffered = ( <Product props={ props.itemOffered } /> );        }
      }
      var seller;
      if( props.seller ){
        if( props.seller instanceof Array ){
          seller = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.seller ){
            seller.push( ( <div data-advice='Put your HTML here. seller is a Person or
Organization.'></div> ) );
          }
        } else {
            seller = ( <div data-advice='Put your HTML here. seller is a Person or
Organization.'></div> );
        }
      }
      var includesObject;
      if( props.includesObject ){
        if( props.includesObject instanceof Array ){
          includesObject = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.includesObject ){
            includesObject.push( ( <TypeAndQuantityNode {...props.includesObject } /> ) );          }
        } else {
          includesObject = ( <TypeAndQuantityNode props={ props.includesObject } /> );        }
      }
      var eligibleDuration;
      if( props.eligibleDuration ){
        if( props.eligibleDuration instanceof Array ){
          eligibleDuration = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.eligibleDuration ){
            eligibleDuration.push( ( <QuantitativeValue {...props.eligibleDuration } /> ) );          }
        } else {
          eligibleDuration = ( <QuantitativeValue props={ props.eligibleDuration } /> );        }
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
      var addOn;
      if( props.addOn ){
        if( props.addOn instanceof Array ){
          addOn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.addOn ){
            addOn.push( ( <Offer {...props.addOn } /> ) );          }
        } else {
          addOn = ( <Offer props={ props.addOn } /> );        }
      }
      var inventoryLevel;
      if( props.inventoryLevel ){
        if( props.inventoryLevel instanceof Array ){
          inventoryLevel = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.inventoryLevel ){
            inventoryLevel.push( ( <QuantitativeValue {...props.inventoryLevel } /> ) );          }
        } else {
          inventoryLevel = ( <QuantitativeValue props={ props.inventoryLevel } /> );        }
      }
      var availableAtOrFrom;
      if( props.availableAtOrFrom ){
        if( props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.availableAtOrFrom ){
            availableAtOrFrom.push( ( <Place {...props.availableAtOrFrom } /> ) );          }
        } else {
          availableAtOrFrom = ( <Place props={ props.availableAtOrFrom } /> );        }
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
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mpn ){
            mpn.push( ( <div data-advice='Put your HTML here. mpn is a Text.'></div> ) );
          }
        } else {
            mpn = ( <div data-advice='Put your HTML here. mpn is a Text.'></div> );
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
      var eligibleCustomerType;
      if( props.eligibleCustomerType ){
        if( props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.eligibleCustomerType ){
            eligibleCustomerType.push( ( <BusinessEntityType {...props.eligibleCustomerType } /> ) );          }
        } else {
          eligibleCustomerType = ( <BusinessEntityType props={ props.eligibleCustomerType } /> );        }
      }
      var priceSpecification;
      if( props.priceSpecification ){
        if( props.priceSpecification instanceof Array ){
          priceSpecification = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.priceSpecification ){
            priceSpecification.push( ( <PriceSpecification {...props.priceSpecification } /> ) );          }
        } else {
          priceSpecification = ( <PriceSpecification props={ props.priceSpecification } /> );        }
      }
      var acceptedPaymentMethod;
      if( props.acceptedPaymentMethod ){
        if( props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.acceptedPaymentMethod ){
            acceptedPaymentMethod.push( ( <PaymentMethod {...props.acceptedPaymentMethod } /> ) );          }
        } else {
          acceptedPaymentMethod = ( <PaymentMethod props={ props.acceptedPaymentMethod } /> );        }
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
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin8 ){
            gtin8.push( ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> ) );
          }
        } else {
            gtin8 = ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> );
        }
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
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.itemCondition ){
            itemCondition.push( ( <OfferItemCondition {...props.itemCondition } /> ) );          }
        } else {
          itemCondition = ( <OfferItemCondition props={ props.itemCondition } /> );        }
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
      var availabilityEnds;
      if( props.availabilityEnds ){
        if( props.availabilityEnds instanceof Array ){
          availabilityEnds = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.availabilityEnds ){
            availabilityEnds.push( ( <DateTime {...props.availabilityEnds } /> ) );          }
        } else {
          availabilityEnds = ( <DateTime props={ props.availabilityEnds } /> );        }
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
      var serialNumber;
      if( props.serialNumber ){
        if( props.serialNumber instanceof Array ){
          serialNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.serialNumber ){
            serialNumber.push( ( <div data-advice='Put your HTML here. serialNumber is a Text.'></div> ) );
          }
        } else {
            serialNumber = ( <div data-advice='Put your HTML here. serialNumber is a Text.'></div> );
        }
      }
      var availableDeliveryMethod;
      if( props.availableDeliveryMethod ){
        if( props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.availableDeliveryMethod ){
            availableDeliveryMethod.push( ( <DeliveryMethod {...props.availableDeliveryMethod } /> ) );          }
        } else {
          availableDeliveryMethod = ( <DeliveryMethod props={ props.availableDeliveryMethod } /> );        }
      }
      var advanceBookingRequirement;
      if( props.advanceBookingRequirement ){
        if( props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.advanceBookingRequirement ){
            advanceBookingRequirement.push( ( <QuantitativeValue {...props.advanceBookingRequirement } /> ) );          }
        } else {
          advanceBookingRequirement = ( <QuantitativeValue props={ props.advanceBookingRequirement } /> );        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin13 ){
            gtin13.push( ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> ) );
          }
        } else {
            gtin13 = ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin12 ){
            gtin12.push( ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> ) );
          }
        } else {
            gtin12 = ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> );
        }
      }
      var validFrom;
      if( props.validFrom ){
        if( props.validFrom instanceof Array ){
          validFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.validFrom ){
            validFrom.push( ( <DateTime {...props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ props.validFrom } /> );        }
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
});
