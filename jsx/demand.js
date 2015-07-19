/* Thing > Intangible > Demand - A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './itemavailability', './geoshape', './product', './warrantypromise', './offeritemcondition', './businessentitytype', './businessfunction', './pricespecification', './deliverymethod', './quantitativevalue', './person', './typeandquantitynode', './place', './creativework', './action', './organization', './datetime', './paymentmethod', './imageobject'], function(React, ItemAvailability, GeoShape, Product, WarrantyPromise, OfferItemCondition, BusinessEntityType, BusinessFunction, PriceSpecification, DeliveryMethod, QuantitativeValue, Person, TypeAndQuantityNode, Place, CreativeWork, Action, Organization, DateTime, PaymentMethod, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var warranty;
      if( this.props.warranty ){
        if( this.props.warranty instanceof Array ){
          warranty = [(<p>warranty:</p> )];
          for( i in this.props.warranty ){
            warranty.push( ( <WarrantyPromise props={ this.props.warranty } /> ) );          }
        } else {
          warranty = ( <WarrantyPromise props={ this.props.warranty } /> );        }
      }
      var ineligibleRegion;
      if( this.props.ineligibleRegion ){
        if( this.props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [(<p>ineligibleRegion:</p> )];
          for( i in this.props.ineligibleRegion ){
            ineligibleRegion.push( ( <div class='ineligibleRegion'></div> ) );
          }
        } else {
          ineligibleRegion = ( <div class='ineligibleRegion'>{this.props.ineligibleRegion}</div> );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var eligibleRegion;
      if( this.props.eligibleRegion ){
        if( this.props.eligibleRegion instanceof Array ){
          eligibleRegion = [(<p>eligibleRegion:</p> )];
          for( i in this.props.eligibleRegion ){
            eligibleRegion.push( ( <div class='eligibleRegion'></div> ) );
          }
        } else {
          eligibleRegion = ( <div class='eligibleRegion'>{this.props.eligibleRegion}</div> );
        }
      }
      var businessFunction;
      if( this.props.businessFunction ){
        if( this.props.businessFunction instanceof Array ){
          businessFunction = [(<p>businessFunction:</p> )];
          for( i in this.props.businessFunction ){
            businessFunction.push( ( <BusinessFunction props={ this.props.businessFunction } /> ) );          }
        } else {
          businessFunction = ( <BusinessFunction props={ this.props.businessFunction } /> );        }
      }
      var deliveryLeadTime;
      if( this.props.deliveryLeadTime ){
        if( this.props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [(<p>deliveryLeadTime:</p> )];
          for( i in this.props.deliveryLeadTime ){
            deliveryLeadTime.push( ( <QuantitativeValue props={ this.props.deliveryLeadTime } /> ) );          }
        } else {
          deliveryLeadTime = ( <QuantitativeValue props={ this.props.deliveryLeadTime } /> );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var availability;
      if( this.props.availability ){
        if( this.props.availability instanceof Array ){
          availability = [(<p>availability:</p> )];
          for( i in this.props.availability ){
            availability.push( ( <ItemAvailability props={ this.props.availability } /> ) );          }
        } else {
          availability = ( <ItemAvailability props={ this.props.availability } /> );        }
      }
      var inventoryLevel;
      if( this.props.inventoryLevel ){
        if( this.props.inventoryLevel instanceof Array ){
          inventoryLevel = [(<p>inventoryLevel:</p> )];
          for( i in this.props.inventoryLevel ){
            inventoryLevel.push( ( <QuantitativeValue props={ this.props.inventoryLevel } /> ) );          }
        } else {
          inventoryLevel = ( <QuantitativeValue props={ this.props.inventoryLevel } /> );        }
      }
      var includesObject;
      if( this.props.includesObject ){
        if( this.props.includesObject instanceof Array ){
          includesObject = [(<p>includesObject:</p> )];
          for( i in this.props.includesObject ){
            includesObject.push( ( <TypeAndQuantityNode props={ this.props.includesObject } /> ) );          }
        } else {
          includesObject = ( <TypeAndQuantityNode props={ this.props.includesObject } /> );        }
      }
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [(<p>gtin14:</p> )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( <div class='gtin14'></div> ) );
          }
        } else {
          gtin14 = ( <div class='gtin14'>{this.props.gtin14}</div> );
        }
      }
      var seller;
      if( this.props.seller ){
        if( this.props.seller instanceof Array ){
          seller = [(<p>seller:</p> )];
          for( i in this.props.seller ){
            seller.push( ( <div class='seller'></div> ) );
          }
        } else {
          seller = ( <div class='seller'>{this.props.seller}</div> );
        }
      }
      var availabilityStarts;
      if( this.props.availabilityStarts ){
        if( this.props.availabilityStarts instanceof Array ){
          availabilityStarts = [(<p>availabilityStarts:</p> )];
          for( i in this.props.availabilityStarts ){
            availabilityStarts.push( ( <DateTime props={ this.props.availabilityStarts } /> ) );          }
        } else {
          availabilityStarts = ( <DateTime props={ this.props.availabilityStarts } /> );        }
      }
      var eligibleDuration;
      if( this.props.eligibleDuration ){
        if( this.props.eligibleDuration instanceof Array ){
          eligibleDuration = [(<p>eligibleDuration:</p> )];
          for( i in this.props.eligibleDuration ){
            eligibleDuration.push( ( <QuantitativeValue props={ this.props.eligibleDuration } /> ) );          }
        } else {
          eligibleDuration = ( <QuantitativeValue props={ this.props.eligibleDuration } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var itemOffered;
      if( this.props.itemOffered ){
        if( this.props.itemOffered instanceof Array ){
          itemOffered = [(<p>itemOffered:</p> )];
          for( i in this.props.itemOffered ){
            itemOffered.push( ( <Product props={ this.props.itemOffered } /> ) );          }
        } else {
          itemOffered = ( <Product props={ this.props.itemOffered } /> );        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [(<p>sku:</p> )];
          for( i in this.props.sku ){
            sku.push( ( <div class='sku'></div> ) );
          }
        } else {
          sku = ( <div class='sku'>{this.props.sku}</div> );
        }
      }
      var availableAtOrFrom;
      if( this.props.availableAtOrFrom ){
        if( this.props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [(<p>availableAtOrFrom:</p> )];
          for( i in this.props.availableAtOrFrom ){
            availableAtOrFrom.push( ( <Place props={ this.props.availableAtOrFrom } /> ) );          }
        } else {
          availableAtOrFrom = ( <Place props={ this.props.availableAtOrFrom } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [(<p>mpn:</p> )];
          for( i in this.props.mpn ){
            mpn.push( ( <div class='mpn'></div> ) );
          }
        } else {
          mpn = ( <div class='mpn'>{this.props.mpn}</div> );
        }
      }
      var eligibleCustomerType;
      if( this.props.eligibleCustomerType ){
        if( this.props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [(<p>eligibleCustomerType:</p> )];
          for( i in this.props.eligibleCustomerType ){
            eligibleCustomerType.push( ( <BusinessEntityType props={ this.props.eligibleCustomerType } /> ) );          }
        } else {
          eligibleCustomerType = ( <BusinessEntityType props={ this.props.eligibleCustomerType } /> );        }
      }
      var priceSpecification;
      if( this.props.priceSpecification ){
        if( this.props.priceSpecification instanceof Array ){
          priceSpecification = [(<p>priceSpecification:</p> )];
          for( i in this.props.priceSpecification ){
            priceSpecification.push( ( <PriceSpecification props={ this.props.priceSpecification } /> ) );          }
        } else {
          priceSpecification = ( <PriceSpecification props={ this.props.priceSpecification } /> );        }
      }
      var acceptedPaymentMethod;
      if( this.props.acceptedPaymentMethod ){
        if( this.props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [(<p>acceptedPaymentMethod:</p> )];
          for( i in this.props.acceptedPaymentMethod ){
            acceptedPaymentMethod.push( ( <PaymentMethod props={ this.props.acceptedPaymentMethod } /> ) );          }
        } else {
          acceptedPaymentMethod = ( <PaymentMethod props={ this.props.acceptedPaymentMethod } /> );        }
      }
      var eligibleTransactionVolume;
      if( this.props.eligibleTransactionVolume ){
        if( this.props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [(<p>eligibleTransactionVolume:</p> )];
          for( i in this.props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( <PriceSpecification props={ this.props.eligibleTransactionVolume } /> ) );          }
        } else {
          eligibleTransactionVolume = ( <PriceSpecification props={ this.props.eligibleTransactionVolume } /> );        }
      }
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [(<p>gtin8:</p> )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( <div class='gtin8'></div> ) );
          }
        } else {
          gtin8 = ( <div class='gtin8'>{this.props.gtin8}</div> );
        }
      }
      var eligibleQuantity;
      if( this.props.eligibleQuantity ){
        if( this.props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [(<p>eligibleQuantity:</p> )];
          for( i in this.props.eligibleQuantity ){
            eligibleQuantity.push( ( <QuantitativeValue props={ this.props.eligibleQuantity } /> ) );          }
        } else {
          eligibleQuantity = ( <QuantitativeValue props={ this.props.eligibleQuantity } /> );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [(<p>itemCondition:</p> )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( <OfferItemCondition props={ this.props.itemCondition } /> ) );          }
        } else {
          itemCondition = ( <OfferItemCondition props={ this.props.itemCondition } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var availabilityEnds;
      if( this.props.availabilityEnds ){
        if( this.props.availabilityEnds instanceof Array ){
          availabilityEnds = [(<p>availabilityEnds:</p> )];
          for( i in this.props.availabilityEnds ){
            availabilityEnds.push( ( <DateTime props={ this.props.availabilityEnds } /> ) );          }
        } else {
          availabilityEnds = ( <DateTime props={ this.props.availabilityEnds } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var serialNumber;
      if( this.props.serialNumber ){
        if( this.props.serialNumber instanceof Array ){
          serialNumber = [(<p>serialNumber:</p> )];
          for( i in this.props.serialNumber ){
            serialNumber.push( ( <div class='serialNumber'></div> ) );
          }
        } else {
          serialNumber = ( <div class='serialNumber'>{this.props.serialNumber}</div> );
        }
      }
      var availableDeliveryMethod;
      if( this.props.availableDeliveryMethod ){
        if( this.props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [(<p>availableDeliveryMethod:</p> )];
          for( i in this.props.availableDeliveryMethod ){
            availableDeliveryMethod.push( ( <DeliveryMethod props={ this.props.availableDeliveryMethod } /> ) );          }
        } else {
          availableDeliveryMethod = ( <DeliveryMethod props={ this.props.availableDeliveryMethod } /> );        }
      }
      var advanceBookingRequirement;
      if( this.props.advanceBookingRequirement ){
        if( this.props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [(<p>advanceBookingRequirement:</p> )];
          for( i in this.props.advanceBookingRequirement ){
            advanceBookingRequirement.push( ( <QuantitativeValue props={ this.props.advanceBookingRequirement } /> ) );          }
        } else {
          advanceBookingRequirement = ( <QuantitativeValue props={ this.props.advanceBookingRequirement } /> );        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [(<p>gtin13:</p> )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( <div class='gtin13'></div> ) );
          }
        } else {
          gtin13 = ( <div class='gtin13'>{this.props.gtin13}</div> );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [(<p>gtin12:</p> )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( <div class='gtin12'></div> ) );
          }
        } else {
          gtin12 = ( <div class='gtin12'>{this.props.gtin12}</div> );
        }
      }
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [(<p>validFrom:</p> )];
          for( i in this.props.validFrom ){
            validFrom.push( ( <DateTime props={ this.props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ this.props.validFrom } /> );        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [(<p>validThrough:</p> )];
          for( i in this.props.validThrough ){
            validThrough.push( ( <DateTime props={ this.props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ this.props.validThrough } /> );        }
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
