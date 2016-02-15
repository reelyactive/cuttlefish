/* Demand - A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.. Generated automatically by the reactGenerator. */
import ItemAvailability from './itemavailability.js';
import GeoShape from './geoshape.js';
import Product from './product.js';
import WarrantyPromise from './warrantypromise.js';
import Service from './service.js';
import OfferItemCondition from './offeritemcondition.js';
import BusinessEntityType from './businessentitytype.js';
import BusinessFunction from './businessfunction.js';
import PriceSpecification from './pricespecification.js';
import QuantitativeValue from './quantitativevalue.js';
import DeliveryMethod from './deliverymethod.js';
import Person from './person.js';
import AdministrativeArea from './administrativearea.js';
import Place from './place.js';
import CreativeWork from './creativework.js';
import Action from './action.js';
import Organization from './organization.js';
import PaymentMethod from './paymentmethod.js';
import ImageObject from './imageobject.js';
import TypeAndQuantityNode from './typeandquantitynode.js';


import React, {
  Component
} from 'react';

export default class Demand extends Component {
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
                warranty = (<WarrantyPromise  {...this.props.warranty} />);
            }
        }

        let ineligibleRegion;
        if (this.props.ineligibleRegion) {
            if (this.props.ineligibleRegion instanceof Array) {
                ineligibleRegion = (
                   <div className='ineligibleRegion-container'>
                       <div className='ineligibleRegion-header' data-advice='HTML for the *head* of the section'>ineligibleRegions</div>
                       {this.props.ineligibleRegion.map((item, index) => {
                           return (<div className='ineligibleRegion' data-advice='Put your HTML here. ineligibleRegion is a Place or Text or GeoShape.'><div className="Demand-ineligibleRegion">ineligibleRegion: {this.props.ineligibleRegion}</div></div>);
                       })};
                       <div className='ineligibleRegion-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                ineligibleRegion = (<div className='ineligibleRegion' data-advice='Put your HTML here. ineligibleRegion is a Place or Text or GeoShape.'><div className="Demand-ineligibleRegion">ineligibleRegion: {this.props.ineligibleRegion}</div></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Demand-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Demand-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let eligibleRegion;
        if (this.props.eligibleRegion) {
            if (this.props.eligibleRegion instanceof Array) {
                eligibleRegion = (
                   <div className='eligibleRegion-container'>
                       <div className='eligibleRegion-header' data-advice='HTML for the *head* of the section'>eligibleRegions</div>
                       {this.props.eligibleRegion.map((item, index) => {
                           return (<div className='eligibleRegion' data-advice='Put your HTML here. eligibleRegion is a Place or Text or GeoShape.'><div className="Demand-eligibleRegion">eligibleRegion: {this.props.eligibleRegion}</div></div>);
                       })};
                       <div className='eligibleRegion-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                eligibleRegion = (<div className='eligibleRegion' data-advice='Put your HTML here. eligibleRegion is a Place or Text or GeoShape.'><div className="Demand-eligibleRegion">eligibleRegion: {this.props.eligibleRegion}</div></div>);
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
                businessFunction = (<BusinessFunction  {...this.props.businessFunction} />);
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
                deliveryLeadTime = (<QuantitativeValue  {...this.props.deliveryLeadTime} />);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Demand-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Demand-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
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
                availability = (<ItemAvailability  {...this.props.availability} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Demand-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Demand-description">description: {this.props.description}</p></div>);
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
                inventoryLevel = (<QuantitativeValue  {...this.props.inventoryLevel} />);
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
                includesObject = (<TypeAndQuantityNode  {...this.props.includesObject} />);
            }
        }

        let gtin14;
        if (this.props.gtin14) {
            if (this.props.gtin14 instanceof Array) {
                gtin14 = (
                   <div className='gtin14-container'>
                       <div className='gtin14-header' data-advice='HTML for the *head* of the section'>gtin14s</div>
                       {this.props.gtin14.map((item, index) => {
                           return (<div className='gtin14' data-advice='Put your HTML here. gtin14 is a Text.'><p className="Demand-gtin14">gtin14: {this.props.gtin14}</p></div>);
                       })};
                       <div className='gtin14-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin14 = (<div className='gtin14' data-advice='Put your HTML here. gtin14 is a Text.'><p className="Demand-gtin14">gtin14: {this.props.gtin14}</p></div>);
            }
        }

        let seller;
        if (this.props.seller) {
            if (this.props.seller instanceof Array) {
                seller = (
                   <div className='seller-container'>
                       <div className='seller-header' data-advice='HTML for the *head* of the section'>sellers</div>
                       {this.props.seller.map((item, index) => {
                           return (<div className='seller' data-advice='Put your HTML here. seller is a Person or Organization.'><div className="Demand-seller">seller: {this.props.seller}</div></div>);
                       })};
                       <div className='seller-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                seller = (<div className='seller' data-advice='Put your HTML here. seller is a Person or Organization.'><div className="Demand-seller">seller: {this.props.seller}</div></div>);
            }
        }

        let availabilityStarts;
        if (this.props.availabilityStarts) {
            if (this.props.availabilityStarts instanceof Array) {
                availabilityStarts = (
                   <div className='availabilityStarts-container'>
                       <div className='availabilityStarts-header' data-advice='HTML for the *head* of the section'>availabilityStartss</div>
                       {this.props.availabilityStarts.map((item, index) => {
                           return (<div className='availabilityStarts' data-advice='Put your HTML here. availabilityStarts is a DateTime.'><time className="Demand-availabilityStarts">availabilityStarts: {this.props.availabilityStarts}</time></div>);
                       })};
                       <div className='availabilityStarts-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availabilityStarts = (<div className='availabilityStarts' data-advice='Put your HTML here. availabilityStarts is a DateTime.'><time className="Demand-availabilityStarts">availabilityStarts: {this.props.availabilityStarts}</time></div>);
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
                eligibleDuration = (<QuantitativeValue  {...this.props.eligibleDuration} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Demand-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Demand-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Demand-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Demand-image" src={this.props.image} /></div>);
            }
        }

        let itemOffered;
        if (this.props.itemOffered) {
            if (this.props.itemOffered instanceof Array) {
                itemOffered = (
                   <div className='itemOffered-container'>
                       <div className='itemOffered-header' data-advice='HTML for the *head* of the section'>itemOffereds</div>
                       {this.props.itemOffered.map((item, index) => {
                           return (<div className='itemOffered' data-advice='Put your HTML here. itemOffered is a Product or Service.'><div className="Demand-itemOffered">itemOffered: {this.props.itemOffered}</div></div>);
                       })};
                       <div className='itemOffered-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                itemOffered = (<div className='itemOffered' data-advice='Put your HTML here. itemOffered is a Product or Service.'><div className="Demand-itemOffered">itemOffered: {this.props.itemOffered}</div></div>);
            }
        }

        let sku;
        if (this.props.sku) {
            if (this.props.sku instanceof Array) {
                sku = (
                   <div className='sku-container'>
                       <div className='sku-header' data-advice='HTML for the *head* of the section'>skus</div>
                       {this.props.sku.map((item, index) => {
                           return (<div className='sku' data-advice='Put your HTML here. sku is a Text.'><p className="Demand-sku">sku: {this.props.sku}</p></div>);
                       })};
                       <div className='sku-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sku = (<div className='sku' data-advice='Put your HTML here. sku is a Text.'><p className="Demand-sku">sku: {this.props.sku}</p></div>);
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
                availableAtOrFrom = (<Place  {...this.props.availableAtOrFrom} />);
            }
        }

        let areaServed;
        if (this.props.areaServed) {
            if (this.props.areaServed instanceof Array) {
                areaServed = (
                   <div className='areaServed-container'>
                       <div className='areaServed-header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Place or Text or GeoShape or AdministrativeArea.'><div className="Demand-areaServed">areaServed: {this.props.areaServed}</div></div>);
                       })};
                       <div className='areaServed-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Place or Text or GeoShape or AdministrativeArea.'><div className="Demand-areaServed">areaServed: {this.props.areaServed}</div></div>);
            }
        }

        let mpn;
        if (this.props.mpn) {
            if (this.props.mpn instanceof Array) {
                mpn = (
                   <div className='mpn-container'>
                       <div className='mpn-header' data-advice='HTML for the *head* of the section'>mpns</div>
                       {this.props.mpn.map((item, index) => {
                           return (<div className='mpn' data-advice='Put your HTML here. mpn is a Text.'><p className="Demand-mpn">mpn: {this.props.mpn}</p></div>);
                       })};
                       <div className='mpn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mpn = (<div className='mpn' data-advice='Put your HTML here. mpn is a Text.'><p className="Demand-mpn">mpn: {this.props.mpn}</p></div>);
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
                eligibleCustomerType = (<BusinessEntityType  {...this.props.eligibleCustomerType} />);
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
                priceSpecification = (<PriceSpecification  {...this.props.priceSpecification} />);
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
                acceptedPaymentMethod = (<PaymentMethod  {...this.props.acceptedPaymentMethod} />);
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
                eligibleTransactionVolume = (<PriceSpecification  {...this.props.eligibleTransactionVolume} />);
            }
        }

        let gtin8;
        if (this.props.gtin8) {
            if (this.props.gtin8 instanceof Array) {
                gtin8 = (
                   <div className='gtin8-container'>
                       <div className='gtin8-header' data-advice='HTML for the *head* of the section'>gtin8s</div>
                       {this.props.gtin8.map((item, index) => {
                           return (<div className='gtin8' data-advice='Put your HTML here. gtin8 is a Text.'><p className="Demand-gtin8">gtin8: {this.props.gtin8}</p></div>);
                       })};
                       <div className='gtin8-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin8 = (<div className='gtin8' data-advice='Put your HTML here. gtin8 is a Text.'><p className="Demand-gtin8">gtin8: {this.props.gtin8}</p></div>);
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
                eligibleQuantity = (<QuantitativeValue  {...this.props.eligibleQuantity} />);
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
                potentialAction = (<Action  {...this.props.potentialAction} />);
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
                itemCondition = (<OfferItemCondition  {...this.props.itemCondition} />);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Demand-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Demand-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let availabilityEnds;
        if (this.props.availabilityEnds) {
            if (this.props.availabilityEnds instanceof Array) {
                availabilityEnds = (
                   <div className='availabilityEnds-container'>
                       <div className='availabilityEnds-header' data-advice='HTML for the *head* of the section'>availabilityEndss</div>
                       {this.props.availabilityEnds.map((item, index) => {
                           return (<div className='availabilityEnds' data-advice='Put your HTML here. availabilityEnds is a DateTime.'><time className="Demand-availabilityEnds">availabilityEnds: {this.props.availabilityEnds}</time></div>);
                       })};
                       <div className='availabilityEnds-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availabilityEnds = (<div className='availabilityEnds' data-advice='Put your HTML here. availabilityEnds is a DateTime.'><time className="Demand-availabilityEnds">availabilityEnds: {this.props.availabilityEnds}</time></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Demand-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Demand-name">name: {this.props.name}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Demand-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Demand-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let serialNumber;
        if (this.props.serialNumber) {
            if (this.props.serialNumber instanceof Array) {
                serialNumber = (
                   <div className='serialNumber-container'>
                       <div className='serialNumber-header' data-advice='HTML for the *head* of the section'>serialNumbers</div>
                       {this.props.serialNumber.map((item, index) => {
                           return (<div className='serialNumber' data-advice='Put your HTML here. serialNumber is a Text.'><p className="Demand-serialNumber">serialNumber: {this.props.serialNumber}</p></div>);
                       })};
                       <div className='serialNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                serialNumber = (<div className='serialNumber' data-advice='Put your HTML here. serialNumber is a Text.'><p className="Demand-serialNumber">serialNumber: {this.props.serialNumber}</p></div>);
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
                availableDeliveryMethod = (<DeliveryMethod  {...this.props.availableDeliveryMethod} />);
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
                advanceBookingRequirement = (<QuantitativeValue  {...this.props.advanceBookingRequirement} />);
            }
        }

        let gtin13;
        if (this.props.gtin13) {
            if (this.props.gtin13 instanceof Array) {
                gtin13 = (
                   <div className='gtin13-container'>
                       <div className='gtin13-header' data-advice='HTML for the *head* of the section'>gtin13s</div>
                       {this.props.gtin13.map((item, index) => {
                           return (<div className='gtin13' data-advice='Put your HTML here. gtin13 is a Text.'><p className="Demand-gtin13">gtin13: {this.props.gtin13}</p></div>);
                       })};
                       <div className='gtin13-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin13 = (<div className='gtin13' data-advice='Put your HTML here. gtin13 is a Text.'><p className="Demand-gtin13">gtin13: {this.props.gtin13}</p></div>);
            }
        }

        let gtin12;
        if (this.props.gtin12) {
            if (this.props.gtin12 instanceof Array) {
                gtin12 = (
                   <div className='gtin12-container'>
                       <div className='gtin12-header' data-advice='HTML for the *head* of the section'>gtin12s</div>
                       {this.props.gtin12.map((item, index) => {
                           return (<div className='gtin12' data-advice='Put your HTML here. gtin12 is a Text.'><p className="Demand-gtin12">gtin12: {this.props.gtin12}</p></div>);
                       })};
                       <div className='gtin12-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin12 = (<div className='gtin12' data-advice='Put your HTML here. gtin12 is a Text.'><p className="Demand-gtin12">gtin12: {this.props.gtin12}</p></div>);
            }
        }

        let validFrom;
        if (this.props.validFrom) {
            if (this.props.validFrom instanceof Array) {
                validFrom = (
                   <div className='validFrom-container'>
                       <div className='validFrom-header' data-advice='HTML for the *head* of the section'>validFroms</div>
                       {this.props.validFrom.map((item, index) => {
                           return (<div className='validFrom' data-advice='Put your HTML here. validFrom is a DateTime.'><time className="Demand-validFrom">validFrom: {this.props.validFrom}</time></div>);
                       })};
                       <div className='validFrom-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                validFrom = (<div className='validFrom' data-advice='Put your HTML here. validFrom is a DateTime.'><time className="Demand-validFrom">validFrom: {this.props.validFrom}</time></div>);
            }
        }

        let validThrough;
        if (this.props.validThrough) {
            if (this.props.validThrough instanceof Array) {
                validThrough = (
                   <div className='validThrough-container'>
                       <div className='validThrough-header' data-advice='HTML for the *head* of the section'>validThroughs</div>
                       {this.props.validThrough.map((item, index) => {
                           return (<div className='validThrough' data-advice='Put your HTML here. validThrough is a DateTime.'><time className="Demand-validThrough">validThrough: {this.props.validThrough}</time></div>);
                       })};
                       <div className='validThrough-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                validThrough = (<div className='validThrough' data-advice='Put your HTML here. validThrough is a DateTime.'><time className="Demand-validThrough">validThrough: {this.props.validThrough}</time></div>);
            }
        }

        return (
            <div className='Demand'>
                {warranty}
                {ineligibleRegion}
                {sameAs}
                {eligibleRegion}
                {businessFunction}
                {deliveryLeadTime}
                {additionalType}
                {availability}
                {description}
                {inventoryLevel}
                {includesObject}
                {gtin14}
                {seller}
                {availabilityStarts}
                {eligibleDuration}
                {mainEntityOfPage}
                {image}
                {itemOffered}
                {sku}
                {availableAtOrFrom}
                {areaServed}
                {mpn}
                {eligibleCustomerType}
                {priceSpecification}
                {acceptedPaymentMethod}
                {eligibleTransactionVolume}
                {gtin8}
                {eligibleQuantity}
                {potentialAction}
                {itemCondition}
                {alternateName}
                {availabilityEnds}
                {name}
                {url}
                {serialNumber}
                {availableDeliveryMethod}
                {advanceBookingRequirement}
                {gtin13}
                {gtin12}
                {validFrom}
                {validThrough}
            </div>
        );
    }
};

Demand.defaultProps = {
};

Demand.propTypes = {
   warranty: React.propTypes.object,
   ineligibleRegion: React.propTypes.object,
   sameAs: React.propTypes.string,
   eligibleRegion: React.propTypes.object,
   businessFunction: React.propTypes.object,
   deliveryLeadTime: React.propTypes.object,
   additionalType: React.propTypes.string,
   availability: React.propTypes.object,
   description: React.propTypes.string,
   inventoryLevel: React.propTypes.object,
   includesObject: React.propTypes.object,
   gtin14: React.propTypes.string,
   seller: React.propTypes.object,
   availabilityStarts: React.propTypes.string,
   eligibleDuration: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   itemOffered: React.propTypes.object,
   sku: React.propTypes.string,
   availableAtOrFrom: React.propTypes.object,
   areaServed: React.propTypes.object,
   mpn: React.propTypes.string,
   eligibleCustomerType: React.propTypes.object,
   priceSpecification: React.propTypes.object,
   acceptedPaymentMethod: React.propTypes.object,
   eligibleTransactionVolume: React.propTypes.object,
   gtin8: React.propTypes.string,
   eligibleQuantity: React.propTypes.object,
   potentialAction: React.propTypes.object,
   itemCondition: React.propTypes.object,
   alternateName: React.propTypes.string,
   availabilityEnds: React.propTypes.string,
   name: React.propTypes.string,
   url: React.propTypes.string,
   serialNumber: React.propTypes.string,
   availableDeliveryMethod: React.propTypes.object,
   advanceBookingRequirement: React.propTypes.object,
   gtin13: React.propTypes.string,
   gtin12: React.propTypes.string,
   validFrom: React.propTypes.string,
   validThrough: React.propTypes.string,
};

