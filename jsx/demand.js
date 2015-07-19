/* Thing > Intangible > Demand - A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './itemavailability', './geoshape', './product', './warrantypromise', './offeritemcondition', './businessentitytype', './businessfunction', './pricespecification', './deliverymethod', './quantitativevalue', './person', './typeandquantitynode', './place', './creativework', './action', './organization', './datetime', './paymentmethod', './imageobject'], function(React, ItemAvailability, GeoShape, Product, WarrantyPromise, OfferItemCondition, BusinessEntityType, BusinessFunction, PriceSpecification, DeliveryMethod, QuantitativeValue, Person, TypeAndQuantityNode, Place, CreativeWork, Action, Organization, DateTime, PaymentMethod, ImageObject){
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
GeoShape or
Place.'></div> ) );
          }
        } else {
            ineligibleRegion = ( <div data-advice='Put your HTML here. ineligibleRegion is a Text or
GeoShape or
Place.'></div> );
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
GeoShape or
Place.'></div> ) );
          }
        } else {
            eligibleRegion = ( <div data-advice='Put your HTML here. eligibleRegion is a Text or
GeoShape or
Place.'></div> );
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
      var inventoryLevel;
      if( props.inventoryLevel ){
        if( props.inventoryLevel instanceof Array ){
          inventoryLevel = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.inventoryLevel ){
            inventoryLevel.push( ( <QuantitativeValue {...props.inventoryLevel } /> ) );          }
        } else {
          inventoryLevel = ( <QuantitativeValue props={ props.inventoryLevel } /> );        }
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
      var seller;
      if( props.seller ){
        if( props.seller instanceof Array ){
          seller = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.seller ){
            seller.push( ( <div data-advice='Put your HTML here. seller is a Organization or
Person.'></div> ) );
          }
        } else {
            seller = ( <div data-advice='Put your HTML here. seller is a Organization or
Person.'></div> );
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
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
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
      var itemOffered;
      if( props.itemOffered ){
        if( props.itemOffered instanceof Array ){
          itemOffered = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.itemOffered ){
            itemOffered.push( ( <Product {...props.itemOffered } /> ) );          }
        } else {
          itemOffered = ( <Product props={ props.itemOffered } /> );        }
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
      return (<div title='Demand' className='Demand entity'>
        { warranty }
        { ineligibleRegion }
        { sameAs }
        { eligibleRegion }
        { businessFunction }
        { deliveryLeadTime }
        { additionalType }
        { availability }
        { inventoryLevel }
        { includesObject }
        { gtin14 }
        { seller }
        { availabilityStarts }
        { eligibleDuration }
        { mainEntityOfPage }
        { image }
        { itemOffered }
        { sku }
        { availableAtOrFrom }
        { description }
        { mpn }
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
