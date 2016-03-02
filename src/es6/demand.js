/* Demand - A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class Demand extends Component {
    render() {
        let warranty;
        if (this.props.warranty) {
            if (this.props.warranty instanceof Array) {
                warranty = (
                   <div className='warranty__container'>
                       <div className='warranty__header' data-advice='HTML for the *head* of the section'>warrantys</div>
                       {this.props.warranty.map((item, index) => {
                            return (<WarrantyPromise  {...this.props.warranty} />);
                       })}
                       <div className='warranty__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='ineligibleRegion__container'>
                       <div className='ineligibleRegion__header' data-advice='HTML for the *head* of the section'>ineligibleRegions</div>
                       {this.props.ineligibleRegion.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.ineligibleRegion} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='ineligibleRegion' data-advice='Put your HTML here. ineligibleRegion is a Text.'><p className="Demand-ineligibleRegion">ineligibleRegion: {this.props.ineligibleRegion}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.ineligibleRegion} />);
                           }
                       })}
                       <div className='ineligibleRegion__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   ineligibleRegion = (<Place key={index} {...this.props.ineligibleRegion} />);
               }
               else if (this.props['@type'] === 'Text') {
                   ineligibleRegion = (<div className='ineligibleRegion' data-advice='Put your HTML here. ineligibleRegion is a Text.'><p className="Demand-ineligibleRegion">ineligibleRegion: {this.props.ineligibleRegion}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   ineligibleRegion = (<GeoShape key={index} {...this.props.ineligibleRegion} />);
               }
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Demand-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='eligibleRegion__container'>
                       <div className='eligibleRegion__header' data-advice='HTML for the *head* of the section'>eligibleRegions</div>
                       {this.props.eligibleRegion.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.eligibleRegion} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='eligibleRegion' data-advice='Put your HTML here. eligibleRegion is a Text.'><p className="Demand-eligibleRegion">eligibleRegion: {this.props.eligibleRegion}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.eligibleRegion} />);
                           }
                       })}
                       <div className='eligibleRegion__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   eligibleRegion = (<Place key={index} {...this.props.eligibleRegion} />);
               }
               else if (this.props['@type'] === 'Text') {
                   eligibleRegion = (<div className='eligibleRegion' data-advice='Put your HTML here. eligibleRegion is a Text.'><p className="Demand-eligibleRegion">eligibleRegion: {this.props.eligibleRegion}</p></div>);
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
                   <div className='businessFunction__container'>
                       <div className='businessFunction__header' data-advice='HTML for the *head* of the section'>businessFunctions</div>
                       {this.props.businessFunction.map((item, index) => {
                            return (<BusinessFunction  {...this.props.businessFunction} />);
                       })}
                       <div className='businessFunction__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='deliveryLeadTime__container'>
                       <div className='deliveryLeadTime__header' data-advice='HTML for the *head* of the section'>deliveryLeadTimes</div>
                       {this.props.deliveryLeadTime.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.deliveryLeadTime} />);
                       })}
                       <div className='deliveryLeadTime__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Demand-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='availability__container'>
                       <div className='availability__header' data-advice='HTML for the *head* of the section'>availabilitys</div>
                       {this.props.availability.map((item, index) => {
                            return (<ItemAvailability  {...this.props.availability} />);
                       })}
                       <div className='availability__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Demand-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='inventoryLevel__container'>
                       <div className='inventoryLevel__header' data-advice='HTML for the *head* of the section'>inventoryLevels</div>
                       {this.props.inventoryLevel.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.inventoryLevel} />);
                       })}
                       <div className='inventoryLevel__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='includesObject__container'>
                       <div className='includesObject__header' data-advice='HTML for the *head* of the section'>includesObjects</div>
                       {this.props.includesObject.map((item, index) => {
                            return (<TypeAndQuantityNode  {...this.props.includesObject} />);
                       })}
                       <div className='includesObject__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='gtin14__container'>
                       <div className='gtin14__header' data-advice='HTML for the *head* of the section'>gtin14s</div>
                       {this.props.gtin14.map((item, index) => {
                            return (<div className='gtin14' data-advice='Put your HTML here. gtin14 is a Text.'><p className="Demand-gtin14">gtin14: {this.props.gtin14}</p></div>);
                       })}
                       <div className='gtin14__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='seller__container'>
                       <div className='seller__header' data-advice='HTML for the *head* of the section'>sellers</div>
                       {this.props.seller.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.seller} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.seller} />);
                           }
                       })}
                       <div className='seller__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let availabilityStarts;
        if (this.props.availabilityStarts) {
            if (this.props.availabilityStarts instanceof Array) {
                availabilityStarts = (
                   <div className='availabilityStarts__container'>
                       <div className='availabilityStarts__header' data-advice='HTML for the *head* of the section'>availabilityStartss</div>
                       {this.props.availabilityStarts.map((item, index) => {
                            return (<div className='availabilityStarts' data-advice='Put your HTML here. availabilityStarts is a DateTime.'><time className="Demand-availabilityStarts">availabilityStarts: {this.props.availabilityStarts}</time></div>);
                       })}
                       <div className='availabilityStarts__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='eligibleDuration__container'>
                       <div className='eligibleDuration__header' data-advice='HTML for the *head* of the section'>eligibleDurations</div>
                       {this.props.eligibleDuration.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.eligibleDuration} />);
                       })}
                       <div className='eligibleDuration__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Demand-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Demand-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Demand-image" src={this.props.image} /></div>);
                           }
                       })}
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Demand-image" src={this.props.image} /></div>);
               }
            }
        }

        let itemOffered;
        if (this.props.itemOffered) {
            if (this.props.itemOffered instanceof Array) {
                itemOffered = (
                   <div className='itemOffered__container'>
                       <div className='itemOffered__header' data-advice='HTML for the *head* of the section'>itemOffereds</div>
                       {this.props.itemOffered.map((item, index) => {
                           if (this.props['@type'] === 'Product') {
                               return (<Product key={index} {...this.props.itemOffered} />);
                           }
                           else if (this.props['@type'] === 'Service') {
                               return (<Service key={index} {...this.props.itemOffered} />);
                           }
                       })}
                       <div className='itemOffered__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let sku;
        if (this.props.sku) {
            if (this.props.sku instanceof Array) {
                sku = (
                   <div className='sku__container'>
                       <div className='sku__header' data-advice='HTML for the *head* of the section'>skus</div>
                       {this.props.sku.map((item, index) => {
                            return (<div className='sku' data-advice='Put your HTML here. sku is a Text.'><p className="Demand-sku">sku: {this.props.sku}</p></div>);
                       })}
                       <div className='sku__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='availableAtOrFrom__container'>
                       <div className='availableAtOrFrom__header' data-advice='HTML for the *head* of the section'>availableAtOrFroms</div>
                       {this.props.availableAtOrFrom.map((item, index) => {
                            return (<Place  {...this.props.availableAtOrFrom} />);
                       })}
                       <div className='availableAtOrFrom__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='areaServed__container'>
                       <div className='areaServed__header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="Demand-areaServed">areaServed: {this.props.areaServed}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'AdministrativeArea') {
                               return (<AdministrativeArea key={index} {...this.props.areaServed} />);
                           }
                       })}
                       <div className='areaServed__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   areaServed = (<Place key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Text') {
                   areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="Demand-areaServed">areaServed: {this.props.areaServed}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   areaServed = (<GeoShape key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'AdministrativeArea') {
                   areaServed = (<AdministrativeArea key={index} {...this.props.areaServed} />);
               }
            }
        }

        let mpn;
        if (this.props.mpn) {
            if (this.props.mpn instanceof Array) {
                mpn = (
                   <div className='mpn__container'>
                       <div className='mpn__header' data-advice='HTML for the *head* of the section'>mpns</div>
                       {this.props.mpn.map((item, index) => {
                            return (<div className='mpn' data-advice='Put your HTML here. mpn is a Text.'><p className="Demand-mpn">mpn: {this.props.mpn}</p></div>);
                       })}
                       <div className='mpn__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='eligibleCustomerType__container'>
                       <div className='eligibleCustomerType__header' data-advice='HTML for the *head* of the section'>eligibleCustomerTypes</div>
                       {this.props.eligibleCustomerType.map((item, index) => {
                            return (<BusinessEntityType  {...this.props.eligibleCustomerType} />);
                       })}
                       <div className='eligibleCustomerType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='priceSpecification__container'>
                       <div className='priceSpecification__header' data-advice='HTML for the *head* of the section'>priceSpecifications</div>
                       {this.props.priceSpecification.map((item, index) => {
                            return (<PriceSpecification  {...this.props.priceSpecification} />);
                       })}
                       <div className='priceSpecification__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='acceptedPaymentMethod__container'>
                       <div className='acceptedPaymentMethod__header' data-advice='HTML for the *head* of the section'>acceptedPaymentMethods</div>
                       {this.props.acceptedPaymentMethod.map((item, index) => {
                            return (<PaymentMethod  {...this.props.acceptedPaymentMethod} />);
                       })}
                       <div className='acceptedPaymentMethod__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='eligibleTransactionVolume__container'>
                       <div className='eligibleTransactionVolume__header' data-advice='HTML for the *head* of the section'>eligibleTransactionVolumes</div>
                       {this.props.eligibleTransactionVolume.map((item, index) => {
                            return (<PriceSpecification  {...this.props.eligibleTransactionVolume} />);
                       })}
                       <div className='eligibleTransactionVolume__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='gtin8__container'>
                       <div className='gtin8__header' data-advice='HTML for the *head* of the section'>gtin8s</div>
                       {this.props.gtin8.map((item, index) => {
                            return (<div className='gtin8' data-advice='Put your HTML here. gtin8 is a Text.'><p className="Demand-gtin8">gtin8: {this.props.gtin8}</p></div>);
                       })}
                       <div className='gtin8__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='eligibleQuantity__container'>
                       <div className='eligibleQuantity__header' data-advice='HTML for the *head* of the section'>eligibleQuantitys</div>
                       {this.props.eligibleQuantity.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.eligibleQuantity} />);
                       })}
                       <div className='eligibleQuantity__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action  {...this.props.potentialAction} />);
                       })}
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='itemCondition__container'>
                       <div className='itemCondition__header' data-advice='HTML for the *head* of the section'>itemConditions</div>
                       {this.props.itemCondition.map((item, index) => {
                            return (<OfferItemCondition  {...this.props.itemCondition} />);
                       })}
                       <div className='itemCondition__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Demand-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='availabilityEnds__container'>
                       <div className='availabilityEnds__header' data-advice='HTML for the *head* of the section'>availabilityEndss</div>
                       {this.props.availabilityEnds.map((item, index) => {
                            return (<div className='availabilityEnds' data-advice='Put your HTML here. availabilityEnds is a DateTime.'><time className="Demand-availabilityEnds">availabilityEnds: {this.props.availabilityEnds}</time></div>);
                       })}
                       <div className='availabilityEnds__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Demand-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Demand-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='serialNumber__container'>
                       <div className='serialNumber__header' data-advice='HTML for the *head* of the section'>serialNumbers</div>
                       {this.props.serialNumber.map((item, index) => {
                            return (<div className='serialNumber' data-advice='Put your HTML here. serialNumber is a Text.'><p className="Demand-serialNumber">serialNumber: {this.props.serialNumber}</p></div>);
                       })}
                       <div className='serialNumber__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='availableDeliveryMethod__container'>
                       <div className='availableDeliveryMethod__header' data-advice='HTML for the *head* of the section'>availableDeliveryMethods</div>
                       {this.props.availableDeliveryMethod.map((item, index) => {
                            return (<DeliveryMethod  {...this.props.availableDeliveryMethod} />);
                       })}
                       <div className='availableDeliveryMethod__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='advanceBookingRequirement__container'>
                       <div className='advanceBookingRequirement__header' data-advice='HTML for the *head* of the section'>advanceBookingRequirements</div>
                       {this.props.advanceBookingRequirement.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.advanceBookingRequirement} />);
                       })}
                       <div className='advanceBookingRequirement__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='gtin13__container'>
                       <div className='gtin13__header' data-advice='HTML for the *head* of the section'>gtin13s</div>
                       {this.props.gtin13.map((item, index) => {
                            return (<div className='gtin13' data-advice='Put your HTML here. gtin13 is a Text.'><p className="Demand-gtin13">gtin13: {this.props.gtin13}</p></div>);
                       })}
                       <div className='gtin13__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='gtin12__container'>
                       <div className='gtin12__header' data-advice='HTML for the *head* of the section'>gtin12s</div>
                       {this.props.gtin12.map((item, index) => {
                            return (<div className='gtin12' data-advice='Put your HTML here. gtin12 is a Text.'><p className="Demand-gtin12">gtin12: {this.props.gtin12}</p></div>);
                       })}
                       <div className='gtin12__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='validFrom__container'>
                       <div className='validFrom__header' data-advice='HTML for the *head* of the section'>validFroms</div>
                       {this.props.validFrom.map((item, index) => {
                            return (<div className='validFrom' data-advice='Put your HTML here. validFrom is a DateTime.'><time className="Demand-validFrom">validFrom: {this.props.validFrom}</time></div>);
                       })}
                       <div className='validFrom__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='validThrough__container'>
                       <div className='validThrough__header' data-advice='HTML for the *head* of the section'>validThroughs</div>
                       {this.props.validThrough.map((item, index) => {
                            return (<div className='validThrough' data-advice='Put your HTML here. validThrough is a DateTime.'><time className="Demand-validThrough">validThrough: {this.props.validThrough}</time></div>);
                       })}
                       <div className='validThrough__footer' data-advice='HTML for the *footer* of the section'></div>
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
   warranty: React.PropTypes.object,
   ineligibleRegion: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   eligibleRegion: React.PropTypes.object,
   businessFunction: React.PropTypes.object,
   deliveryLeadTime: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   availability: React.PropTypes.object,
   description: React.PropTypes.object,
   inventoryLevel: React.PropTypes.object,
   includesObject: React.PropTypes.object,
   gtin14: React.PropTypes.object,
   seller: React.PropTypes.object,
   availabilityStarts: React.PropTypes.object,
   eligibleDuration: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   image: React.PropTypes.object,
   itemOffered: React.PropTypes.object,
   sku: React.PropTypes.object,
   availableAtOrFrom: React.PropTypes.object,
   areaServed: React.PropTypes.object,
   mpn: React.PropTypes.object,
   eligibleCustomerType: React.PropTypes.object,
   priceSpecification: React.PropTypes.object,
   acceptedPaymentMethod: React.PropTypes.object,
   eligibleTransactionVolume: React.PropTypes.object,
   gtin8: React.PropTypes.object,
   eligibleQuantity: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   itemCondition: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   availabilityEnds: React.PropTypes.object,
   name: React.PropTypes.object,
   url: React.PropTypes.object,
   serialNumber: React.PropTypes.object,
   availableDeliveryMethod: React.PropTypes.object,
   advanceBookingRequirement: React.PropTypes.object,
   gtin13: React.PropTypes.object,
   gtin12: React.PropTypes.object,
   validFrom: React.PropTypes.object,
   validThrough: React.PropTypes.object,
};

