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
          warranty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.warranty ){
            warranty.push( ( <WarrantyPromise {...this.props.warranty } /> ) );          }
        } else {
          warranty = ( <WarrantyPromise props={ this.props.warranty } /> );        }
      }
      var ineligibleRegion;
      if( this.props.ineligibleRegion ){
        if( this.props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.ineligibleRegion ){
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
      if( this.props.priceValidUntil ){
        if( this.props.priceValidUntil instanceof Array ){
          priceValidUntil = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.priceValidUntil ){
            priceValidUntil.push( ( <div data-advice='Put your HTML here. priceValidUntil is a Date.'></div> ) );
          }
        } else {
            priceValidUntil = ( <div data-advice='Put your HTML here. priceValidUntil is a Date.'></div> );
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
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var eligibleRegion;
      if( this.props.eligibleRegion ){
        if( this.props.eligibleRegion instanceof Array ){
          eligibleRegion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eligibleRegion ){
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
      if( this.props.businessFunction ){
        if( this.props.businessFunction instanceof Array ){
          businessFunction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.businessFunction ){
            businessFunction.push( ( <BusinessFunction {...this.props.businessFunction } /> ) );          }
        } else {
          businessFunction = ( <BusinessFunction props={ this.props.businessFunction } /> );        }
      }
      var deliveryLeadTime;
      if( this.props.deliveryLeadTime ){
        if( this.props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.deliveryLeadTime ){
            deliveryLeadTime.push( ( <QuantitativeValue {...this.props.deliveryLeadTime } /> ) );          }
        } else {
          deliveryLeadTime = ( <QuantitativeValue props={ this.props.deliveryLeadTime } /> );        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sku ){
            sku.push( ( <div data-advice='Put your HTML here. sku is a Text.'></div> ) );
          }
        } else {
            sku = ( <div data-advice='Put your HTML here. sku is a Text.'></div> );
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
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var availability;
      if( this.props.availability ){
        if( this.props.availability instanceof Array ){
          availability = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.availability ){
            availability.push( ( <ItemAvailability {...this.props.availability } /> ) );          }
        } else {
          availability = ( <ItemAvailability props={ this.props.availability } /> );        }
      }
      var category;
      if( this.props.category ){
        if( this.props.category instanceof Array ){
          category = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.category ){
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
      if( this.props.availabilityStarts ){
        if( this.props.availabilityStarts instanceof Array ){
          availabilityStarts = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.availabilityStarts ){
            availabilityStarts.push( ( <DateTime {...this.props.availabilityStarts } /> ) );          }
        } else {
          availabilityStarts = ( <DateTime props={ this.props.availabilityStarts } /> );        }
      }
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> ) );
          }
        } else {
            gtin14 = ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.review ){
            review.push( ( <Review {...this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var itemOffered;
      if( this.props.itemOffered ){
        if( this.props.itemOffered instanceof Array ){
          itemOffered = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.itemOffered ){
            itemOffered.push( ( <Product {...this.props.itemOffered } /> ) );          }
        } else {
          itemOffered = ( <Product props={ this.props.itemOffered } /> );        }
      }
      var seller;
      if( this.props.seller ){
        if( this.props.seller instanceof Array ){
          seller = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.seller ){
            seller.push( ( <div data-advice='Put your HTML here. seller is a Person or
Organization.'></div> ) );
          }
        } else {
            seller = ( <div data-advice='Put your HTML here. seller is a Person or
Organization.'></div> );
        }
      }
      var includesObject;
      if( this.props.includesObject ){
        if( this.props.includesObject instanceof Array ){
          includesObject = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.includesObject ){
            includesObject.push( ( <TypeAndQuantityNode {...this.props.includesObject } /> ) );          }
        } else {
          includesObject = ( <TypeAndQuantityNode props={ this.props.includesObject } /> );        }
      }
      var eligibleDuration;
      if( this.props.eligibleDuration ){
        if( this.props.eligibleDuration instanceof Array ){
          eligibleDuration = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eligibleDuration ){
            eligibleDuration.push( ( <QuantitativeValue {...this.props.eligibleDuration } /> ) );          }
        } else {
          eligibleDuration = ( <QuantitativeValue props={ this.props.eligibleDuration } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var addOn;
      if( this.props.addOn ){
        if( this.props.addOn instanceof Array ){
          addOn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.addOn ){
            addOn.push( ( <Offer {...this.props.addOn } /> ) );          }
        } else {
          addOn = ( <Offer props={ this.props.addOn } /> );        }
      }
      var inventoryLevel;
      if( this.props.inventoryLevel ){
        if( this.props.inventoryLevel instanceof Array ){
          inventoryLevel = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.inventoryLevel ){
            inventoryLevel.push( ( <QuantitativeValue {...this.props.inventoryLevel } /> ) );          }
        } else {
          inventoryLevel = ( <QuantitativeValue props={ this.props.inventoryLevel } /> );        }
      }
      var availableAtOrFrom;
      if( this.props.availableAtOrFrom ){
        if( this.props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.availableAtOrFrom ){
            availableAtOrFrom.push( ( <Place {...this.props.availableAtOrFrom } /> ) );          }
        } else {
          availableAtOrFrom = ( <Place props={ this.props.availableAtOrFrom } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mpn ){
            mpn.push( ( <div data-advice='Put your HTML here. mpn is a Text.'></div> ) );
          }
        } else {
            mpn = ( <div data-advice='Put your HTML here. mpn is a Text.'></div> );
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
            price = ( <div data-advice='Put your HTML here. price is a Text or
Number.'></div> );
        }
      }
      var eligibleCustomerType;
      if( this.props.eligibleCustomerType ){
        if( this.props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eligibleCustomerType ){
            eligibleCustomerType.push( ( <BusinessEntityType {...this.props.eligibleCustomerType } /> ) );          }
        } else {
          eligibleCustomerType = ( <BusinessEntityType props={ this.props.eligibleCustomerType } /> );        }
      }
      var priceSpecification;
      if( this.props.priceSpecification ){
        if( this.props.priceSpecification instanceof Array ){
          priceSpecification = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.priceSpecification ){
            priceSpecification.push( ( <PriceSpecification {...this.props.priceSpecification } /> ) );          }
        } else {
          priceSpecification = ( <PriceSpecification props={ this.props.priceSpecification } /> );        }
      }
      var acceptedPaymentMethod;
      if( this.props.acceptedPaymentMethod ){
        if( this.props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.acceptedPaymentMethod ){
            acceptedPaymentMethod.push( ( <PaymentMethod {...this.props.acceptedPaymentMethod } /> ) );          }
        } else {
          acceptedPaymentMethod = ( <PaymentMethod props={ this.props.acceptedPaymentMethod } /> );        }
      }
      var eligibleTransactionVolume;
      if( this.props.eligibleTransactionVolume ){
        if( this.props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( <PriceSpecification {...this.props.eligibleTransactionVolume } /> ) );          }
        } else {
          eligibleTransactionVolume = ( <PriceSpecification props={ this.props.eligibleTransactionVolume } /> );        }
      }
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> ) );
          }
        } else {
            gtin8 = ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> );
        }
      }
      var eligibleQuantity;
      if( this.props.eligibleQuantity ){
        if( this.props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eligibleQuantity ){
            eligibleQuantity.push( ( <QuantitativeValue {...this.props.eligibleQuantity } /> ) );          }
        } else {
          eligibleQuantity = ( <QuantitativeValue props={ this.props.eligibleQuantity } /> );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( <OfferItemCondition {...this.props.itemCondition } /> ) );          }
        } else {
          itemCondition = ( <OfferItemCondition props={ this.props.itemCondition } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var availabilityEnds;
      if( this.props.availabilityEnds ){
        if( this.props.availabilityEnds instanceof Array ){
          availabilityEnds = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.availabilityEnds ){
            availabilityEnds.push( ( <DateTime {...this.props.availabilityEnds } /> ) );          }
        } else {
          availabilityEnds = ( <DateTime props={ this.props.availabilityEnds } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
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
            priceCurrency = ( <div data-advice='Put your HTML here. priceCurrency is a Text.'></div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var serialNumber;
      if( this.props.serialNumber ){
        if( this.props.serialNumber instanceof Array ){
          serialNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.serialNumber ){
            serialNumber.push( ( <div data-advice='Put your HTML here. serialNumber is a Text.'></div> ) );
          }
        } else {
            serialNumber = ( <div data-advice='Put your HTML here. serialNumber is a Text.'></div> );
        }
      }
      var availableDeliveryMethod;
      if( this.props.availableDeliveryMethod ){
        if( this.props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.availableDeliveryMethod ){
            availableDeliveryMethod.push( ( <DeliveryMethod {...this.props.availableDeliveryMethod } /> ) );          }
        } else {
          availableDeliveryMethod = ( <DeliveryMethod props={ this.props.availableDeliveryMethod } /> );        }
      }
      var advanceBookingRequirement;
      if( this.props.advanceBookingRequirement ){
        if( this.props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.advanceBookingRequirement ){
            advanceBookingRequirement.push( ( <QuantitativeValue {...this.props.advanceBookingRequirement } /> ) );          }
        } else {
          advanceBookingRequirement = ( <QuantitativeValue props={ this.props.advanceBookingRequirement } /> );        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> ) );
          }
        } else {
            gtin13 = ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> ) );
          }
        } else {
            gtin12 = ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> );
        }
      }
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.validFrom ){
            validFrom.push( ( <DateTime {...this.props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ this.props.validFrom } /> );        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.validThrough ){
            validThrough.push( ( <DateTime {...this.props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ this.props.validThrough } /> );        }
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
