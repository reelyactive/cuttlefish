/* Product - Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class Product extends Component {
    render() {
        let isConsumableFor;
        if (this.props.isConsumableFor) {
            if (this.props.isConsumableFor instanceof Array) {
                isConsumableFor = (
                   <div className='isConsumableFor__container'>
                       <div className='isConsumableFor__header' data-advice='HTML for the *head* of the section'>isConsumableFors</div>
                       {this.props.isConsumableFor.map((item, index) => {
                            return (<Product  {...this.props.isConsumableFor} />);
                       })}
                       <div className='isConsumableFor__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isConsumableFor = (<Product  {...this.props.isConsumableFor} />);
            }
        }

        let weight;
        if (this.props.weight) {
            if (this.props.weight instanceof Array) {
                weight = (
                   <div className='weight__container'>
                       <div className='weight__header' data-advice='HTML for the *head* of the section'>weights</div>
                       {this.props.weight.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.weight} />);
                       })}
                       <div className='weight__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                weight = (<QuantitativeValue  {...this.props.weight} />);
            }
        }

        let isAccessoryOrSparePartFor;
        if (this.props.isAccessoryOrSparePartFor) {
            if (this.props.isAccessoryOrSparePartFor instanceof Array) {
                isAccessoryOrSparePartFor = (
                   <div className='isAccessoryOrSparePartFor__container'>
                       <div className='isAccessoryOrSparePartFor__header' data-advice='HTML for the *head* of the section'>isAccessoryOrSparePartFors</div>
                       {this.props.isAccessoryOrSparePartFor.map((item, index) => {
                            return (<Product  {...this.props.isAccessoryOrSparePartFor} />);
                       })}
                       <div className='isAccessoryOrSparePartFor__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isAccessoryOrSparePartFor = (<Product  {...this.props.isAccessoryOrSparePartFor} />);
            }
        }

        let color;
        if (this.props.color) {
            if (this.props.color instanceof Array) {
                color = (
                   <div className='color__container'>
                       <div className='color__header' data-advice='HTML for the *head* of the section'>colors</div>
                       {this.props.color.map((item, index) => {
                            return (<div className='color' data-advice='Put your HTML here. color is a Text.'><p className="Product-color">color: {this.props.color}</p></div>);
                       })}
                       <div className='color__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                color = (<div className='color' data-advice='Put your HTML here. color is a Text.'><p className="Product-color">color: {this.props.color}</p></div>);
            }
        }

        let purchaseDate;
        if (this.props.purchaseDate) {
            if (this.props.purchaseDate instanceof Array) {
                purchaseDate = (
                   <div className='purchaseDate__container'>
                       <div className='purchaseDate__header' data-advice='HTML for the *head* of the section'>purchaseDates</div>
                       {this.props.purchaseDate.map((item, index) => {
                            return (<div className='purchaseDate' data-advice='Put your HTML here. purchaseDate is a Date.'><time className="Product-purchaseDate">purchaseDate: {this.props.purchaseDate}</time></div>);
                       })}
                       <div className='purchaseDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                purchaseDate = (<div className='purchaseDate' data-advice='Put your HTML here. purchaseDate is a Date.'><time className="Product-purchaseDate">purchaseDate: {this.props.purchaseDate}</time></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Product-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Product-image" src={this.props.image} /></div>);
               }
            }
        }

        let gtin8;
        if (this.props.gtin8) {
            if (this.props.gtin8 instanceof Array) {
                gtin8 = (
                   <div className='gtin8__container'>
                       <div className='gtin8__header' data-advice='HTML for the *head* of the section'>gtin8s</div>
                       {this.props.gtin8.map((item, index) => {
                            return (<div className='gtin8' data-advice='Put your HTML here. gtin8 is a Text.'><p className="Product-gtin8">gtin8: {this.props.gtin8}</p></div>);
                       })}
                       <div className='gtin8__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                gtin8 = (<div className='gtin8' data-advice='Put your HTML here. gtin8 is a Text.'><p className="Product-gtin8">gtin8: {this.props.gtin8}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Product-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Product-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let height;
        if (this.props.height) {
            if (this.props.height instanceof Array) {
                height = (
                   <div className='height__container'>
                       <div className='height__header' data-advice='HTML for the *head* of the section'>heights</div>
                       {this.props.height.map((item, index) => {
                           if (this.props['@type'] === 'Distance') {
                               return (<Distance key={index} {...this.props.height} />);
                           }
                           else if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.height} />);
                           }
                       })}
                       <div className='height__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Distance') {
                   height = (<Distance key={index} {...this.props.height} />);
               }
               else if (this.props['@type'] === 'QuantitativeValue') {
                   height = (<QuantitativeValue key={index} {...this.props.height} />);
               }
            }
        }

        let releaseDate;
        if (this.props.releaseDate) {
            if (this.props.releaseDate instanceof Array) {
                releaseDate = (
                   <div className='releaseDate__container'>
                       <div className='releaseDate__header' data-advice='HTML for the *head* of the section'>releaseDates</div>
                       {this.props.releaseDate.map((item, index) => {
                            return (<div className='releaseDate' data-advice='Put your HTML here. releaseDate is a Date.'><time className="Product-releaseDate">releaseDate: {this.props.releaseDate}</time></div>);
                       })}
                       <div className='releaseDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                releaseDate = (<div className='releaseDate' data-advice='Put your HTML here. releaseDate is a Date.'><time className="Product-releaseDate">releaseDate: {this.props.releaseDate}</time></div>);
            }
        }

        let isRelatedTo;
        if (this.props.isRelatedTo) {
            if (this.props.isRelatedTo instanceof Array) {
                isRelatedTo = (
                   <div className='isRelatedTo__container'>
                       <div className='isRelatedTo__header' data-advice='HTML for the *head* of the section'>isRelatedTos</div>
                       {this.props.isRelatedTo.map((item, index) => {
                            return (<Product  {...this.props.isRelatedTo} />);
                       })}
                       <div className='isRelatedTo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isRelatedTo = (<Product  {...this.props.isRelatedTo} />);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Product-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Product-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let logo;
        if (this.props.logo) {
            if (this.props.logo instanceof Array) {
                logo = (
                   <div className='logo__container'>
                       <div className='logo__header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.logo} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="Product-logo" href={this.props.logo} target="_blank">logo</a></div>);
                           }
                       })}
                       <div className='logo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   logo = (<ImageObject key={index} {...this.props.logo} />);
               }
               else if (this.props['@type'] === 'URL') {
                   logo = (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="Product-logo" href={this.props.logo} target="_blank">logo</a></div>);
               }
            }
        }

        let productID;
        if (this.props.productID) {
            if (this.props.productID instanceof Array) {
                productID = (
                   <div className='productID__container'>
                       <div className='productID__header' data-advice='HTML for the *head* of the section'>productIDs</div>
                       {this.props.productID.map((item, index) => {
                            return (<div className='productID' data-advice='Put your HTML here. productID is a Text.'><p className="Product-productID">productID: {this.props.productID}</p></div>);
                       })}
                       <div className='productID__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                productID = (<div className='productID' data-advice='Put your HTML here. productID is a Text.'><p className="Product-productID">productID: {this.props.productID}</p></div>);
            }
        }

        let category;
        if (this.props.category) {
            if (this.props.category instanceof Array) {
                category = (
                   <div className='category__container'>
                       <div className='category__header' data-advice='HTML for the *head* of the section'>categorys</div>
                       {this.props.category.map((item, index) => {
                           if (this.props['@type'] === 'Thing') {
                               return (<Thing key={index} {...this.props.category} />);
                           }
                           else if (this.props['@type'] === 'PhysicalActivityCategory') {
                               return (<PhysicalActivityCategory key={index} {...this.props.category} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='category' data-advice='Put your HTML here. category is a Text.'><p className="Product-category">category: {this.props.category}</p></div>);
                           }
                       })}
                       <div className='category__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   category = (<div className='category' data-advice='Put your HTML here. category is a Text.'><p className="Product-category">category: {this.props.category}</p></div>);
               }
            }
        }

        let isSimilarTo;
        if (this.props.isSimilarTo) {
            if (this.props.isSimilarTo instanceof Array) {
                isSimilarTo = (
                   <div className='isSimilarTo__container'>
                       <div className='isSimilarTo__header' data-advice='HTML for the *head* of the section'>isSimilarTos</div>
                       {this.props.isSimilarTo.map((item, index) => {
                            return (<Product  {...this.props.isSimilarTo} />);
                       })}
                       <div className='isSimilarTo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isSimilarTo = (<Product  {...this.props.isSimilarTo} />);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review  {...this.props.review} />);
                       })}
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                review = (<Review  {...this.props.review} />);
            }
        }

        let audience;
        if (this.props.audience) {
            if (this.props.audience instanceof Array) {
                audience = (
                   <div className='audience__container'>
                       <div className='audience__header' data-advice='HTML for the *head* of the section'>audiences</div>
                       {this.props.audience.map((item, index) => {
                            return (<Audience  {...this.props.audience} />);
                       })}
                       <div className='audience__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                audience = (<Audience  {...this.props.audience} />);
            }
        }

        let width;
        if (this.props.width) {
            if (this.props.width instanceof Array) {
                width = (
                   <div className='width__container'>
                       <div className='width__header' data-advice='HTML for the *head* of the section'>widths</div>
                       {this.props.width.map((item, index) => {
                           if (this.props['@type'] === 'Distance') {
                               return (<Distance key={index} {...this.props.width} />);
                           }
                           else if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.width} />);
                           }
                       })}
                       <div className='width__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Distance') {
                   width = (<Distance key={index} {...this.props.width} />);
               }
               else if (this.props['@type'] === 'QuantitativeValue') {
                   width = (<QuantitativeValue key={index} {...this.props.width} />);
               }
            }
        }

        let additionalProperty;
        if (this.props.additionalProperty) {
            if (this.props.additionalProperty instanceof Array) {
                additionalProperty = (
                   <div className='additionalProperty__container'>
                       <div className='additionalProperty__header' data-advice='HTML for the *head* of the section'>additionalPropertys</div>
                       {this.props.additionalProperty.map((item, index) => {
                            return (<PropertyValue  {...this.props.additionalProperty} />);
                       })}
                       <div className='additionalProperty__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalProperty = (<PropertyValue  {...this.props.additionalProperty} />);
            }
        }

        let offers;
        if (this.props.offers) {
            if (this.props.offers instanceof Array) {
                offers = (
                   <div className='offers__container'>
                       <div className='offers__header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                            return (<Offer  {...this.props.offers} />);
                       })}
                       <div className='offers__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                offers = (<Offer  {...this.props.offers} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Product-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Product-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let productionDate;
        if (this.props.productionDate) {
            if (this.props.productionDate instanceof Array) {
                productionDate = (
                   <div className='productionDate__container'>
                       <div className='productionDate__header' data-advice='HTML for the *head* of the section'>productionDates</div>
                       {this.props.productionDate.map((item, index) => {
                            return (<div className='productionDate' data-advice='Put your HTML here. productionDate is a Date.'><time className="Product-productionDate">productionDate: {this.props.productionDate}</time></div>);
                       })}
                       <div className='productionDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                productionDate = (<div className='productionDate' data-advice='Put your HTML here. productionDate is a Date.'><time className="Product-productionDate">productionDate: {this.props.productionDate}</time></div>);
            }
        }

        let sku;
        if (this.props.sku) {
            if (this.props.sku instanceof Array) {
                sku = (
                   <div className='sku__container'>
                       <div className='sku__header' data-advice='HTML for the *head* of the section'>skus</div>
                       {this.props.sku.map((item, index) => {
                            return (<div className='sku' data-advice='Put your HTML here. sku is a Text.'><p className="Product-sku">sku: {this.props.sku}</p></div>);
                       })}
                       <div className='sku__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sku = (<div className='sku' data-advice='Put your HTML here. sku is a Text.'><p className="Product-sku">sku: {this.props.sku}</p></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Product-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Product-description">description: {this.props.description}</p></div>);
            }
        }

        let mpn;
        if (this.props.mpn) {
            if (this.props.mpn instanceof Array) {
                mpn = (
                   <div className='mpn__container'>
                       <div className='mpn__header' data-advice='HTML for the *head* of the section'>mpns</div>
                       {this.props.mpn.map((item, index) => {
                            return (<div className='mpn' data-advice='Put your HTML here. mpn is a Text.'><p className="Product-mpn">mpn: {this.props.mpn}</p></div>);
                       })}
                       <div className='mpn__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                mpn = (<div className='mpn' data-advice='Put your HTML here. mpn is a Text.'><p className="Product-mpn">mpn: {this.props.mpn}</p></div>);
            }
        }

        let brand;
        if (this.props.brand) {
            if (this.props.brand instanceof Array) {
                brand = (
                   <div className='brand__container'>
                       <div className='brand__header' data-advice='HTML for the *head* of the section'>brands</div>
                       {this.props.brand.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.brand} />);
                           }
                           else if (this.props['@type'] === 'Brand') {
                               return (<Brand key={index} {...this.props.brand} />);
                           }
                       })}
                       <div className='brand__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   brand = (<Organization key={index} {...this.props.brand} />);
               }
               else if (this.props['@type'] === 'Brand') {
                   brand = (<Brand key={index} {...this.props.brand} />);
               }
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award__container'>
                       <div className='award__header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                            return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Product-award">award: {this.props.award}</p></div>);
                       })}
                       <div className='award__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Product-award">award: {this.props.award}</p></div>);
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
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Product-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Product-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let manufacturer;
        if (this.props.manufacturer) {
            if (this.props.manufacturer instanceof Array) {
                manufacturer = (
                   <div className='manufacturer__container'>
                       <div className='manufacturer__header' data-advice='HTML for the *head* of the section'>manufacturers</div>
                       {this.props.manufacturer.map((item, index) => {
                            return (<Organization  {...this.props.manufacturer} />);
                       })}
                       <div className='manufacturer__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                manufacturer = (<Organization  {...this.props.manufacturer} />);
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

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Product-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Product-name">name: {this.props.name}</p></div>);
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating  {...this.props.aggregateRating} />);
                       })}
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating  {...this.props.aggregateRating} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Product-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Product-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let gtin14;
        if (this.props.gtin14) {
            if (this.props.gtin14 instanceof Array) {
                gtin14 = (
                   <div className='gtin14__container'>
                       <div className='gtin14__header' data-advice='HTML for the *head* of the section'>gtin14s</div>
                       {this.props.gtin14.map((item, index) => {
                            return (<div className='gtin14' data-advice='Put your HTML here. gtin14 is a Text.'><p className="Product-gtin14">gtin14: {this.props.gtin14}</p></div>);
                       })}
                       <div className='gtin14__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                gtin14 = (<div className='gtin14' data-advice='Put your HTML here. gtin14 is a Text.'><p className="Product-gtin14">gtin14: {this.props.gtin14}</p></div>);
            }
        }

        let depth;
        if (this.props.depth) {
            if (this.props.depth instanceof Array) {
                depth = (
                   <div className='depth__container'>
                       <div className='depth__header' data-advice='HTML for the *head* of the section'>depths</div>
                       {this.props.depth.map((item, index) => {
                           if (this.props['@type'] === 'Distance') {
                               return (<Distance key={index} {...this.props.depth} />);
                           }
                           else if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.depth} />);
                           }
                       })}
                       <div className='depth__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Distance') {
                   depth = (<Distance key={index} {...this.props.depth} />);
               }
               else if (this.props['@type'] === 'QuantitativeValue') {
                   depth = (<QuantitativeValue key={index} {...this.props.depth} />);
               }
            }
        }

        let gtin13;
        if (this.props.gtin13) {
            if (this.props.gtin13 instanceof Array) {
                gtin13 = (
                   <div className='gtin13__container'>
                       <div className='gtin13__header' data-advice='HTML for the *head* of the section'>gtin13s</div>
                       {this.props.gtin13.map((item, index) => {
                            return (<div className='gtin13' data-advice='Put your HTML here. gtin13 is a Text.'><p className="Product-gtin13">gtin13: {this.props.gtin13}</p></div>);
                       })}
                       <div className='gtin13__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                gtin13 = (<div className='gtin13' data-advice='Put your HTML here. gtin13 is a Text.'><p className="Product-gtin13">gtin13: {this.props.gtin13}</p></div>);
            }
        }

        let gtin12;
        if (this.props.gtin12) {
            if (this.props.gtin12 instanceof Array) {
                gtin12 = (
                   <div className='gtin12__container'>
                       <div className='gtin12__header' data-advice='HTML for the *head* of the section'>gtin12s</div>
                       {this.props.gtin12.map((item, index) => {
                            return (<div className='gtin12' data-advice='Put your HTML here. gtin12 is a Text.'><p className="Product-gtin12">gtin12: {this.props.gtin12}</p></div>);
                       })}
                       <div className='gtin12__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                gtin12 = (<div className='gtin12' data-advice='Put your HTML here. gtin12 is a Text.'><p className="Product-gtin12">gtin12: {this.props.gtin12}</p></div>);
            }
        }

        let model;
        if (this.props.model) {
            if (this.props.model instanceof Array) {
                model = (
                   <div className='model__container'>
                       <div className='model__header' data-advice='HTML for the *head* of the section'>models</div>
                       {this.props.model.map((item, index) => {
                           if (this.props['@type'] === 'ProductModel') {
                               return (<ProductModel key={index} {...this.props.model} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='model' data-advice='Put your HTML here. model is a Text.'><p className="Product-model">model: {this.props.model}</p></div>);
                           }
                       })}
                       <div className='model__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ProductModel') {
                   model = (<ProductModel key={index} {...this.props.model} />);
               }
               else if (this.props['@type'] === 'Text') {
                   model = (<div className='model' data-advice='Put your HTML here. model is a Text.'><p className="Product-model">model: {this.props.model}</p></div>);
               }
            }
        }

        return (
            <div className='Product'>
                {isConsumableFor}
                {weight}
                {isAccessoryOrSparePartFor}
                {color}
                {purchaseDate}
                {image}
                {gtin8}
                {sameAs}
                {height}
                {releaseDate}
                {isRelatedTo}
                {additionalType}
                {logo}
                {productID}
                {category}
                {isSimilarTo}
                {review}
                {audience}
                {width}
                {additionalProperty}
                {offers}
                {mainEntityOfPage}
                {productionDate}
                {sku}
                {description}
                {mpn}
                {brand}
                {award}
                {itemCondition}
                {alternateName}
                {manufacturer}
                {potentialAction}
                {name}
                {aggregateRating}
                {url}
                {gtin14}
                {depth}
                {gtin13}
                {gtin12}
                {model}
            </div>
        );
    }
};

Product.defaultProps = {
};

Product.propTypes = {
   isConsumableFor: React.PropTypes.object,
   weight: React.PropTypes.object,
   isAccessoryOrSparePartFor: React.PropTypes.object,
   color: React.PropTypes.object,
   purchaseDate: React.PropTypes.object,
   image: React.PropTypes.object,
   gtin8: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   height: React.PropTypes.object,
   releaseDate: React.PropTypes.object,
   isRelatedTo: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   logo: React.PropTypes.object,
   productID: React.PropTypes.object,
   category: React.PropTypes.object,
   isSimilarTo: React.PropTypes.object,
   review: React.PropTypes.object,
   audience: React.PropTypes.object,
   width: React.PropTypes.object,
   additionalProperty: React.PropTypes.object,
   offers: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   productionDate: React.PropTypes.object,
   sku: React.PropTypes.object,
   description: React.PropTypes.object,
   mpn: React.PropTypes.object,
   brand: React.PropTypes.object,
   award: React.PropTypes.object,
   itemCondition: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   manufacturer: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   name: React.PropTypes.object,
   aggregateRating: React.PropTypes.object,
   url: React.PropTypes.object,
   gtin14: React.PropTypes.object,
   depth: React.PropTypes.object,
   gtin13: React.PropTypes.object,
   gtin12: React.PropTypes.object,
   model: React.PropTypes.object,
};

