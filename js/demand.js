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
          warranty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.warranty ){
            warranty.push( ( React.createElement(WarrantyPromise, React.__spread({},  props.warranty )) ) );          }
        } else {
          warranty = ( React.createElement(WarrantyPromise, {props:  props.warranty}) );        }
      }
      var ineligibleRegion;
      if( props.ineligibleRegion ){
        if( props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.ineligibleRegion ){
            ineligibleRegion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. ineligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) ) );
          }
        } else {
            ineligibleRegion = ( React.createElement("div", {"data-advice": "Put your HTML here. ineligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) );
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
      var eligibleRegion;
      if( props.eligibleRegion ){
        if( props.eligibleRegion instanceof Array ){
          eligibleRegion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.eligibleRegion ){
            eligibleRegion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. eligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) ) );
          }
        } else {
            eligibleRegion = ( React.createElement("div", {"data-advice": "Put your HTML here. eligibleRegion is a Text or" + ' ' +
"GeoShape or" + ' ' +
"Place."}) );
        }
      }
      var businessFunction;
      if( props.businessFunction ){
        if( props.businessFunction instanceof Array ){
          businessFunction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.businessFunction ){
            businessFunction.push( ( React.createElement(BusinessFunction, React.__spread({},  props.businessFunction )) ) );          }
        } else {
          businessFunction = ( React.createElement(BusinessFunction, {props:  props.businessFunction}) );        }
      }
      var deliveryLeadTime;
      if( props.deliveryLeadTime ){
        if( props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.deliveryLeadTime ){
            deliveryLeadTime.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.deliveryLeadTime )) ) );          }
        } else {
          deliveryLeadTime = ( React.createElement(QuantitativeValue, {props:  props.deliveryLeadTime}) );        }
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
      var availability;
      if( props.availability ){
        if( props.availability instanceof Array ){
          availability = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.availability ){
            availability.push( ( React.createElement(ItemAvailability, React.__spread({},  props.availability )) ) );          }
        } else {
          availability = ( React.createElement(ItemAvailability, {props:  props.availability}) );        }
      }
      var inventoryLevel;
      if( props.inventoryLevel ){
        if( props.inventoryLevel instanceof Array ){
          inventoryLevel = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.inventoryLevel ){
            inventoryLevel.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.inventoryLevel )) ) );          }
        } else {
          inventoryLevel = ( React.createElement(QuantitativeValue, {props:  props.inventoryLevel}) );        }
      }
      var includesObject;
      if( props.includesObject ){
        if( props.includesObject instanceof Array ){
          includesObject = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.includesObject ){
            includesObject.push( ( React.createElement(TypeAndQuantityNode, React.__spread({},  props.includesObject )) ) );          }
        } else {
          includesObject = ( React.createElement(TypeAndQuantityNode, {props:  props.includesObject}) );        }
      }
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin14 ){
            gtin14.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) ) );
          }
        } else {
            gtin14 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) );
        }
      }
      var seller;
      if( props.seller ){
        if( props.seller instanceof Array ){
          seller = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.seller ){
            seller.push( ( React.createElement("div", {"data-advice": "Put your HTML here. seller is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            seller = ( React.createElement("div", {"data-advice": "Put your HTML here. seller is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var availabilityStarts;
      if( props.availabilityStarts ){
        if( props.availabilityStarts instanceof Array ){
          availabilityStarts = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.availabilityStarts ){
            availabilityStarts.push( ( React.createElement(DateTime, React.__spread({},  props.availabilityStarts )) ) );          }
        } else {
          availabilityStarts = ( React.createElement(DateTime, {props:  props.availabilityStarts}) );        }
      }
      var eligibleDuration;
      if( props.eligibleDuration ){
        if( props.eligibleDuration instanceof Array ){
          eligibleDuration = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.eligibleDuration ){
            eligibleDuration.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.eligibleDuration )) ) );          }
        } else {
          eligibleDuration = ( React.createElement(QuantitativeValue, {props:  props.eligibleDuration}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
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
      var itemOffered;
      if( props.itemOffered ){
        if( props.itemOffered instanceof Array ){
          itemOffered = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.itemOffered ){
            itemOffered.push( ( React.createElement(Product, React.__spread({},  props.itemOffered )) ) );          }
        } else {
          itemOffered = ( React.createElement(Product, {props:  props.itemOffered}) );        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sku ){
            sku.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) ) );
          }
        } else {
            sku = ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) );
        }
      }
      var availableAtOrFrom;
      if( props.availableAtOrFrom ){
        if( props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.availableAtOrFrom ){
            availableAtOrFrom.push( ( React.createElement(Place, React.__spread({},  props.availableAtOrFrom )) ) );          }
        } else {
          availableAtOrFrom = ( React.createElement(Place, {props:  props.availableAtOrFrom}) );        }
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
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mpn ){
            mpn.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) ) );
          }
        } else {
            mpn = ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) );
        }
      }
      var eligibleCustomerType;
      if( props.eligibleCustomerType ){
        if( props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.eligibleCustomerType ){
            eligibleCustomerType.push( ( React.createElement(BusinessEntityType, React.__spread({},  props.eligibleCustomerType )) ) );          }
        } else {
          eligibleCustomerType = ( React.createElement(BusinessEntityType, {props:  props.eligibleCustomerType}) );        }
      }
      var priceSpecification;
      if( props.priceSpecification ){
        if( props.priceSpecification instanceof Array ){
          priceSpecification = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.priceSpecification ){
            priceSpecification.push( ( React.createElement(PriceSpecification, React.__spread({},  props.priceSpecification )) ) );          }
        } else {
          priceSpecification = ( React.createElement(PriceSpecification, {props:  props.priceSpecification}) );        }
      }
      var acceptedPaymentMethod;
      if( props.acceptedPaymentMethod ){
        if( props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.acceptedPaymentMethod ){
            acceptedPaymentMethod.push( ( React.createElement(PaymentMethod, React.__spread({},  props.acceptedPaymentMethod )) ) );          }
        } else {
          acceptedPaymentMethod = ( React.createElement(PaymentMethod, {props:  props.acceptedPaymentMethod}) );        }
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
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin8 ){
            gtin8.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) ) );
          }
        } else {
            gtin8 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) );
        }
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
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.itemCondition ){
            itemCondition.push( ( React.createElement(OfferItemCondition, React.__spread({},  props.itemCondition )) ) );          }
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  props.itemCondition}) );        }
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
      var availabilityEnds;
      if( props.availabilityEnds ){
        if( props.availabilityEnds instanceof Array ){
          availabilityEnds = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.availabilityEnds ){
            availabilityEnds.push( ( React.createElement(DateTime, React.__spread({},  props.availabilityEnds )) ) );          }
        } else {
          availabilityEnds = ( React.createElement(DateTime, {props:  props.availabilityEnds}) );        }
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
      var serialNumber;
      if( props.serialNumber ){
        if( props.serialNumber instanceof Array ){
          serialNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.serialNumber ){
            serialNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. serialNumber is a Text."}) ) );
          }
        } else {
            serialNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. serialNumber is a Text."}) );
        }
      }
      var availableDeliveryMethod;
      if( props.availableDeliveryMethod ){
        if( props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.availableDeliveryMethod ){
            availableDeliveryMethod.push( ( React.createElement(DeliveryMethod, React.__spread({},  props.availableDeliveryMethod )) ) );          }
        } else {
          availableDeliveryMethod = ( React.createElement(DeliveryMethod, {props:  props.availableDeliveryMethod}) );        }
      }
      var advanceBookingRequirement;
      if( props.advanceBookingRequirement ){
        if( props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.advanceBookingRequirement ){
            advanceBookingRequirement.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.advanceBookingRequirement )) ) );          }
        } else {
          advanceBookingRequirement = ( React.createElement(QuantitativeValue, {props:  props.advanceBookingRequirement}) );        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin13 ){
            gtin13.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) ) );
          }
        } else {
            gtin13 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin12 ){
            gtin12.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) ) );
          }
        } else {
            gtin12 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) );
        }
      }
      var validFrom;
      if( props.validFrom ){
        if( props.validFrom instanceof Array ){
          validFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, React.__spread({},  props.validFrom )) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  props.validFrom}) );        }
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
      return (React.createElement("div", {title: "Demand", className: "Demand entity"}, 
         warranty, 
         ineligibleRegion, 
         sameAs, 
         eligibleRegion, 
         businessFunction, 
         deliveryLeadTime, 
         additionalType, 
         availability, 
         inventoryLevel, 
         includesObject, 
         gtin14, 
         seller, 
         availabilityStarts, 
         eligibleDuration, 
         mainEntityOfPage, 
         image, 
         itemOffered, 
         sku, 
         availableAtOrFrom, 
         description, 
         mpn, 
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
