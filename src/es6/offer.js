/* Offer - An offer to transfer some rights to an item or to provide a service\u2014for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nFor GTIN-related fields, see\nCheck Digit calculator and validation guide from GS1.. Generated automatically by the reactGenerator. */
import GeoShape from './geoshape.js';
import Service from './service.js';
import BusinessEntityType from './businessentitytype.js';
import Review from './review.js';
import QuantitativeValue from './quantitativevalue.js';
import AdministrativeArea from './administrativearea.js';
import ItemAvailability from './itemavailability.js';
import Product from './product.js';
import OfferItemCondition from './offeritemcondition.js';
import BusinessFunction from './businessfunction.js';
import ImageObject from './imageobject.js';
import AggregateRating from './aggregaterating.js';
import WarrantyPromise from './warrantypromise.js';
import PhysicalActivityCategory from './physicalactivitycategory.js';
import CreativeWork from './creativework.js';
import Person from './person.js';
import TypeAndQuantityNode from './typeandquantitynode.js';
import Place from './place.js';
import Action from './action.js';
import Organization from './organization.js';
import PaymentMethod from './paymentmethod.js';
import Thing from './thing.js';
import PriceSpecification from './pricespecification.js';
import DeliveryMethod from './deliverymethod.js';


import React, {
  Component
} from 'react';

export default class Offer extends Component {
    render() {
        let warranty;
        if (this.props.warranty) {
            if (this.props.warranty instanceof Array) {
                warranty = (
                   <div className='warranty-container'>
                       <div className='warranty-header' data-advice='HTML for the *head* of the section'>warrantys</div>
                       {this.props.warranty.map((item, index) => {
                            return (<WarrantyPromise key={index} {...this.props.warranty} />);
                       })};
                       <div className='warranty-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                warranty = (<WarrantyPromise key={index} {...this.props.warranty} />);
            }
        }

        let ineligibleRegion;
        if (this.props.ineligibleRegion) {
            if (this.props.ineligibleRegion instanceof Array) {
                ineligibleRegion = (
                   <div className='ineligibleRegion-container'>
                       <div className='ineligibleRegion-header' data-advice='HTML for the *head* of the section'>ineligibleRegions</div>
                       {this.props.ineligibleRegion.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.ineligibleRegion} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='ineligibleRegion' data-advice='Put your HTML here. ineligibleRegion is a Text.'><p className="Offer-ineligibleRegion">ineligibleRegion: {this.props.ineligibleRegion}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.ineligibleRegion} />);
                           }
                       })};
                       <div className='ineligibleRegion-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   ineligibleRegion = (<Place key={index} {...this.props.ineligibleRegion} />);
               }
               else if (this.props['@type'] === 'Text') {
                   ineligibleRegion = (<div className='ineligibleRegion' data-advice='Put your HTML here. ineligibleRegion is a Text.'><p className="Offer-ineligibleRegion">ineligibleRegion: {this.props.ineligibleRegion}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   ineligibleRegion = (<GeoShape key={index} {...this.props.ineligibleRegion} />);
               }
            }
        }

        let eligibleRegion;
        if (this.props.eligibleRegion) {
            if (this.props.eligibleRegion instanceof Array) {
                eligibleRegion = (
                   <div className='eligibleRegion-container'>
                       <div className='eligibleRegion-header' data-advice='HTML for the *head* of the section'>eligibleRegions</div>
                       {this.props.eligibleRegion.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.eligibleRegion} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='eligibleRegion' data-advice='Put your HTML here. eligibleRegion is a Text.'><p className="Offer-eligibleRegion">eligibleRegion: {this.props.eligibleRegion}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.eligibleRegion} />);
                           }
                       })};
                       <div className='eligibleRegion-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   eligibleRegion = (<Place key={index} {...this.props.eligibleRegion} />);
               }
               else if (this.props['@type'] === 'Text') {
                   eligibleRegion = (<div className='eligibleRegion' data-advice='Put your HTML here. eligibleRegion is a Text.'><p className="Offer-eligibleRegion">eligibleRegion: {this.props.eligibleRegion}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   eligibleRegion = (<GeoShape key={index} {...this.props.eligibleRegion} />);
               }
            }
        }

        let businessFunction;
        if (this.props.businessFunction) {
            if (this.props.businessFunction instanceof Array) {
                businessFunction = (
                   <div className='businessFunction-container'>
                       <div className='businessFunction-header' data-advice='HTML for the *head* of the section'>businessFunctions</div>
                       {this.props.businessFunction.map((item, index) => {
                            return (<BusinessFunction key={index} {...this.props.businessFunction} />);
                       })};
                       <div className='businessFunction-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                businessFunction = (<BusinessFunction key={index} {...this.props.businessFunction} />);
            }
        }

        let deliveryLeadTime;
        if (this.props.deliveryLeadTime) {
            if (this.props.deliveryLeadTime instanceof Array) {
                deliveryLeadTime = (
                   <div className='deliveryLeadTime-container'>
                       <div className='deliveryLeadTime-header' data-advice='HTML for the *head* of the section'>deliveryLeadTimes</div>
                       {this.props.deliveryLeadTime.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.deliveryLeadTime} />);
                       })};
                       <div className='deliveryLeadTime-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                deliveryLeadTime = (<QuantitativeValue key={index} {...this.props.deliveryLeadTime} />);
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating-container'>
                       <div className='aggregateRating-header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating key={index} {...this.props.aggregateRating} />);
            }
        }

        let availability;
        if (this.props.availability) {
            if (this.props.availability instanceof Array) {
                availability = (
                   <div className='availability-container'>
                       <div className='availability-header' data-advice='HTML for the *head* of the section'>availabilitys</div>
                       {this.props.availability.map((item, index) => {
                            return (<ItemAvailability key={index} {...this.props.availability} />);
                       })};
                       <div className='availability-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availability = (<ItemAvailability key={index} {...this.props.availability} />);
            }
        }

        let offeredBy;
        if (this.props.offeredBy) {
            if (this.props.offeredBy instanceof Array) {
                offeredBy = (
                   <div className='offeredBy-container'>
                       <div className='offeredBy-header' data-advice='HTML for the *head* of the section'>offeredBys</div>
                       {this.props.offeredBy.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.offeredBy} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.offeredBy} />);
                           }
                       })};
                       <div className='offeredBy-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   offeredBy = (<Person key={index} {...this.props.offeredBy} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   offeredBy = (<Organization key={index} {...this.props.offeredBy} />);
               }
            }
        }

        let category;
        if (this.props.category) {
            if (this.props.category instanceof Array) {
                category = (
                   <div className='category-container'>
                       <div className='category-header' data-advice='HTML for the *head* of the section'>categorys</div>
                       {this.props.category.map((item, index) => {
                           if (this.props['@type'] === 'Thing') {
                               return (<Thing key={index} {...this.props.category} />);
                           }
                           else if (this.props['@type'] === 'PhysicalActivityCategory') {
                               return (<PhysicalActivityCategory key={index} {...this.props.category} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='category' data-advice='Put your HTML here. category is a Text.'><p className="Offer-category">category: {this.props.category}</p></div>);
                           }
                       })};
                       <div className='category-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Thing') {
                   category = (<Thing key={index} {...this.props.category} />);
               }
               else if (this.props['@type'] === 'PhysicalActivityCategory') {
                   category = (<PhysicalActivityCategory key={index} {...this.props.category} />);
               }
               else if (this.props['@type'] === 'Text') {
                   category = (<div className='category' data-advice='Put your HTML here. category is a Text.'><p className="Offer-category">category: {this.props.category}</p></div>);
               }
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review-container'>
                       <div className='review-header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review key={index} {...this.props.review} />);
            }
        }

        let seller;
        if (this.props.seller) {
            if (this.props.seller instanceof Array) {
                seller = (
                   <div className='seller-container'>
                       <div className='seller-header' data-advice='HTML for the *head* of the section'>sellers</div>
                       {this.props.seller.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.seller} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.seller} />);
                           }
                       })};
                       <div className='seller-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   seller = (<Person key={index} {...this.props.seller} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   seller = (<Organization key={index} {...this.props.seller} />);
               }
            }
        }

        let includesObject;
        if (this.props.includesObject) {
            if (this.props.includesObject instanceof Array) {
                includesObject = (
                   <div className='includesObject-container'>
                       <div className='includesObject-header' data-advice='HTML for the *head* of the section'>includesObjects</div>
                       {this.props.includesObject.map((item, index) => {
                            return (<TypeAndQuantityNode key={index} {...this.props.includesObject} />);
                       })};
                       <div className='includesObject-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                includesObject = (<TypeAndQuantityNode key={index} {...this.props.includesObject} />);
            }
        }

        let eligibleDuration;
        if (this.props.eligibleDuration) {
            if (this.props.eligibleDuration instanceof Array) {
                eligibleDuration = (
                   <div className='eligibleDuration-container'>
                       <div className='eligibleDuration-header' data-advice='HTML for the *head* of the section'>eligibleDurations</div>
                       {this.props.eligibleDuration.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.eligibleDuration} />);
                       })};
                       <div className='eligibleDuration-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                eligibleDuration = (<QuantitativeValue key={index} {...this.props.eligibleDuration} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Offer-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Offer-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Offer-image" src={this.props.image} /></div>);
                           }
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Offer-image" src={this.props.image} /></div>);
               }
            }
        }

        let advanceBookingRequirement;
        if (this.props.advanceBookingRequirement) {
            if (this.props.advanceBookingRequirement instanceof Array) {
                advanceBookingRequirement = (
                   <div className='advanceBookingRequirement-container'>
                       <div className='advanceBookingRequirement-header' data-advice='HTML for the *head* of the section'>advanceBookingRequirements</div>
                       {this.props.advanceBookingRequirement.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.advanceBookingRequirement} />);
                       })};
                       <div className='advanceBookingRequirement-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                advanceBookingRequirement = (<QuantitativeValue key={index} {...this.props.advanceBookingRequirement} />);
            }
        }

        let inventoryLevel;
        if (this.props.inventoryLevel) {
            if (this.props.inventoryLevel instanceof Array) {
                inventoryLevel = (
                   <div className='inventoryLevel-container'>
                       <div className='inventoryLevel-header' data-advice='HTML for the *head* of the section'>inventoryLevels</div>
                       {this.props.inventoryLevel.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.inventoryLevel} />);
                       })};
                       <div className='inventoryLevel-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                inventoryLevel = (<QuantitativeValue key={index} {...this.props.inventoryLevel} />);
            }
        }

        let availableAtOrFrom;
        if (this.props.availableAtOrFrom) {
            if (this.props.availableAtOrFrom instanceof Array) {
                availableAtOrFrom = (
                   <div className='availableAtOrFrom-container'>
                       <div className='availableAtOrFrom-header' data-advice='HTML for the *head* of the section'>availableAtOrFroms</div>
                       {this.props.availableAtOrFrom.map((item, index) => {
                            return (<Place key={index} {...this.props.availableAtOrFrom} />);
                       })};
                       <div className='availableAtOrFrom-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availableAtOrFrom = (<Place key={index} {...this.props.availableAtOrFrom} />);
            }
        }

        let price;
        if (this.props.price) {
            if (this.props.price instanceof Array) {
                price = (
                   <div className='price-container'>
                       <div className='price-header' data-advice='HTML for the *head* of the section'>prices</div>
                       {this.props.price.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='price' data-advice='Put your HTML here. price is a Text.'><p className="Offer-price">price: {this.props.price}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='price' data-advice='Put your HTML here. price is a Number.'><p className="Offer-price">price: {this.props.price}</p></div>);
                           }
                       })};
                       <div className='price-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   price = (<div className='price' data-advice='Put your HTML here. price is a Text.'><p className="Offer-price">price: {this.props.price}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   price = (<div className='price' data-advice='Put your HTML here. price is a Number.'><p className="Offer-price">price: {this.props.price}</p></div>);
               }
            }
        }

        let eligibleCustomerType;
        if (this.props.eligibleCustomerType) {
            if (this.props.eligibleCustomerType instanceof Array) {
                eligibleCustomerType = (
                   <div className='eligibleCustomerType-container'>
                       <div className='eligibleCustomerType-header' data-advice='HTML for the *head* of the section'>eligibleCustomerTypes</div>
                       {this.props.eligibleCustomerType.map((item, index) => {
                            return (<BusinessEntityType key={index} {...this.props.eligibleCustomerType} />);
                       })};
                       <div className='eligibleCustomerType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                eligibleCustomerType = (<BusinessEntityType key={index} {...this.props.eligibleCustomerType} />);
            }
        }

        let priceSpecification;
        if (this.props.priceSpecification) {
            if (this.props.priceSpecification instanceof Array) {
                priceSpecification = (
                   <div className='priceSpecification-container'>
                       <div className='priceSpecification-header' data-advice='HTML for the *head* of the section'>priceSpecifications</div>
                       {this.props.priceSpecification.map((item, index) => {
                            return (<PriceSpecification key={index} {...this.props.priceSpecification} />);
                       })};
                       <div className='priceSpecification-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                priceSpecification = (<PriceSpecification key={index} {...this.props.priceSpecification} />);
            }
        }

        let acceptedPaymentMethod;
        if (this.props.acceptedPaymentMethod) {
            if (this.props.acceptedPaymentMethod instanceof Array) {
                acceptedPaymentMethod = (
                   <div className='acceptedPaymentMethod-container'>
                       <div className='acceptedPaymentMethod-header' data-advice='HTML for the *head* of the section'>acceptedPaymentMethods</div>
                       {this.props.acceptedPaymentMethod.map((item, index) => {
                            return (<PaymentMethod key={index} {...this.props.acceptedPaymentMethod} />);
                       })};
                       <div className='acceptedPaymentMethod-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                acceptedPaymentMethod = (<PaymentMethod key={index} {...this.props.acceptedPaymentMethod} />);
            }
        }

        let eligibleTransactionVolume;
        if (this.props.eligibleTransactionVolume) {
            if (this.props.eligibleTransactionVolume instanceof Array) {
                eligibleTransactionVolume = (
                   <div className='eligibleTransactionVolume-container'>
                       <div className='eligibleTransactionVolume-header' data-advice='HTML for the *head* of the section'>eligibleTransactionVolumes</div>
                       {this.props.eligibleTransactionVolume.map((item, index) => {
                            return (<PriceSpecification key={index} {...this.props.eligibleTransactionVolume} />);
                       })};
                       <div className='eligibleTransactionVolume-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                eligibleTransactionVolume = (<PriceSpecification key={index} {...this.props.eligibleTransactionVolume} />);
            }
        }

        let eligibleQuantity;
        if (this.props.eligibleQuantity) {
            if (this.props.eligibleQuantity instanceof Array) {
                eligibleQuantity = (
                   <div className='eligibleQuantity-container'>
                       <div className='eligibleQuantity-header' data-advice='HTML for the *head* of the section'>eligibleQuantitys</div>
                       {this.props.eligibleQuantity.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.eligibleQuantity} />);
                       })};
                       <div className='eligibleQuantity-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                eligibleQuantity = (<QuantitativeValue key={index} {...this.props.eligibleQuantity} />);
            }
        }

        let itemCondition;
        if (this.props.itemCondition) {
            if (this.props.itemCondition instanceof Array) {
                itemCondition = (
                   <div className='itemCondition-container'>
                       <div className='itemCondition-header' data-advice='HTML for the *head* of the section'>itemConditions</div>
                       {this.props.itemCondition.map((item, index) => {
                            return (<OfferItemCondition key={index} {...this.props.itemCondition} />);
                       })};
                       <div className='itemCondition-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                itemCondition = (<OfferItemCondition key={index} {...this.props.itemCondition} />);
            }
        }

        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction-container'>
                       <div className='potentialAction-header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let availableDeliveryMethod;
        if (this.props.availableDeliveryMethod) {
            if (this.props.availableDeliveryMethod instanceof Array) {
                availableDeliveryMethod = (
                   <div className='availableDeliveryMethod-container'>
                       <div className='availableDeliveryMethod-header' data-advice='HTML for the *head* of the section'>availableDeliveryMethods</div>
                       {this.props.availableDeliveryMethod.map((item, index) => {
                            return (<DeliveryMethod key={index} {...this.props.availableDeliveryMethod} />);
                       })};
                       <div className='availableDeliveryMethod-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availableDeliveryMethod = (<DeliveryMethod key={index} {...this.props.availableDeliveryMethod} />);
            }
        }

        let itemOffered;
        if (this.props.itemOffered) {
            if (this.props.itemOffered instanceof Array) {
                itemOffered = (
                   <div className='itemOffered-container'>
                       <div className='itemOffered-header' data-advice='HTML for the *head* of the section'>itemOffereds</div>
                       {this.props.itemOffered.map((item, index) => {
                           if (this.props['@type'] === 'Product') {
                               return (<Product key={index} {...this.props.itemOffered} />);
                           }
                           else if (this.props['@type'] === 'Service') {
                               return (<Service key={index} {...this.props.itemOffered} />);
                           }
                       })};
                       <div className='itemOffered-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Product') {
                   itemOffered = (<Product key={index} {...this.props.itemOffered} />);
               }
               else if (this.props['@type'] === 'Service') {
                   itemOffered = (<Service key={index} {...this.props.itemOffered} />);
               }
            }
        }

        let areaServed;
        if (this.props.areaServed) {
            if (this.props.areaServed instanceof Array) {
                areaServed = (
                   <div className='areaServed-container'>
                       <div className='areaServed-header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           if (this.props['@type'] === 'AdministrativeArea') {
                               return (<AdministrativeArea key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="Offer-areaServed">areaServed: {this.props.areaServed}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.areaServed} />);
                           }
                       })};
                       <div className='areaServed-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'AdministrativeArea') {
                   areaServed = (<AdministrativeArea key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Place') {
                   areaServed = (<Place key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Text') {
                   areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="Offer-areaServed">areaServed: {this.props.areaServed}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   areaServed = (<GeoShape key={index} {...this.props.areaServed} />);
               }
            }
        }

        let addOn;
        if (this.props.addOn) {
            if (this.props.addOn instanceof Array) {
                addOn = (
                   <div className='addOn-container'>
                       <div className='addOn-header' data-advice='HTML for the *head* of the section'>addOns</div>
                       {this.props.addOn.map((item, index) => {
                            return (<Offer key={index} {...this.props.addOn} />);
                       })};
                       <div className='addOn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                addOn = (<Offer key={index} {...this.props.addOn} />);
            }
        }

        return (
            <div className='Offer'>
                {warranty}
                {ineligibleRegion}
                {eligibleRegion}
                {businessFunction}
                {deliveryLeadTime}
                {aggregateRating}
                {availability}
                {offeredBy}
                {category}
                {review}
                {seller}
                {includesObject}
                {eligibleDuration}
                {mainEntityOfPage}
                {image}
                {advanceBookingRequirement}
                {inventoryLevel}
                {availableAtOrFrom}
                {price}
                {eligibleCustomerType}
                {priceSpecification}
                {acceptedPaymentMethod}
                {eligibleTransactionVolume}
                {eligibleQuantity}
                {itemCondition}
                {potentialAction}
                {availableDeliveryMethod}
                {itemOffered}
                {areaServed}
                {addOn}
            </div>
        );
    }
};

Offer.defaultProps = {
};

Offer.propTypes = {
   warranty: React.propTypes.object,
   ineligibleRegion: React.propTypes.object,
   eligibleRegion: React.propTypes.object,
   businessFunction: React.propTypes.object,
   deliveryLeadTime: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   availability: React.propTypes.object,
   offeredBy: React.propTypes.object,
   category: React.propTypes.object,
   review: React.propTypes.object,
   seller: React.propTypes.object,
   includesObject: React.propTypes.object,
   eligibleDuration: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   advanceBookingRequirement: React.propTypes.object,
   inventoryLevel: React.propTypes.object,
   availableAtOrFrom: React.propTypes.object,
   price: React.propTypes.object,
   eligibleCustomerType: React.propTypes.object,
   priceSpecification: React.propTypes.object,
   acceptedPaymentMethod: React.propTypes.object,
   eligibleTransactionVolume: React.propTypes.object,
   eligibleQuantity: React.propTypes.object,
   itemCondition: React.propTypes.object,
   potentialAction: React.propTypes.object,
   availableDeliveryMethod: React.propTypes.object,
   itemOffered: React.propTypes.object,
   areaServed: React.propTypes.object,
   addOn: React.propTypes.object,
};

