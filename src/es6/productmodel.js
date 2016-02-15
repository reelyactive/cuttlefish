/* ProductModel - A datasheet or vendor specification of a product (in the sense of a prototypical description).. Generated automatically by the reactGenerator. */
import Distance from './distance.js';
import Product from './product.js';
import Thing from './thing.js';
import Brand from './brand.js';
import Offer from './offer.js';
import QuantitativeValue from './quantitativevalue.js';
import PropertyValue from './propertyvalue.js';
import AggregateRating from './aggregaterating.js';
import Audience from './audience.js';
import PhysicalActivityCategory from './physicalactivitycategory.js';
import OfferItemCondition from './offeritemcondition.js';
import Action from './action.js';
import Organization from './organization.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';
import Review from './review.js';


import React, {
  Component
} from 'react';

export default class ProductModel extends Component {
    render() {
        let isConsumableFor;
        if (this.props.isConsumableFor) {
            if (this.props.isConsumableFor instanceof Array) {
                isConsumableFor = (
                   <div className='isConsumableFor-container'>
                       <div className='isConsumableFor-header' data-advice='HTML for the *head* of the section'>isConsumableFors</div>
                       {this.props.isConsumableFor.map((item, index) => {
                           return (<Product key={index} {...this.props.isConsumableFor} />);
                       })};
                       <div className='isConsumableFor-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='weight-container'>
                       <div className='weight-header' data-advice='HTML for the *head* of the section'>weights</div>
                       {this.props.weight.map((item, index) => {
                           return (<QuantitativeValue key={index} {...this.props.weight} />);
                       })};
                       <div className='weight-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='isAccessoryOrSparePartFor-container'>
                       <div className='isAccessoryOrSparePartFor-header' data-advice='HTML for the *head* of the section'>isAccessoryOrSparePartFors</div>
                       {this.props.isAccessoryOrSparePartFor.map((item, index) => {
                           return (<Product key={index} {...this.props.isAccessoryOrSparePartFor} />);
                       })};
                       <div className='isAccessoryOrSparePartFor-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='color-container'>
                       <div className='color-header' data-advice='HTML for the *head* of the section'>colors</div>
                       {this.props.color.map((item, index) => {
                           return (<div className='color' data-advice='Put your HTML here. color is a Text.'><p className="ProductModel-color">color: {this.props.color}</p></div>);
                       })};
                       <div className='color-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                color = (<div className='color' data-advice='Put your HTML here. color is a Text.'><p className="ProductModel-color">color: {this.props.color}</p></div>);
            }
        }

        let purchaseDate;
        if (this.props.purchaseDate) {
            if (this.props.purchaseDate instanceof Array) {
                purchaseDate = (
                   <div className='purchaseDate-container'>
                       <div className='purchaseDate-header' data-advice='HTML for the *head* of the section'>purchaseDates</div>
                       {this.props.purchaseDate.map((item, index) => {
                           return (<div className='purchaseDate' data-advice='Put your HTML here. purchaseDate is a Date.'><time className="ProductModel-purchaseDate">purchaseDate: {this.props.purchaseDate}</time></div>);
                       })};
                       <div className='purchaseDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                purchaseDate = (<div className='purchaseDate' data-advice='Put your HTML here. purchaseDate is a Date.'><time className="ProductModel-purchaseDate">purchaseDate: {this.props.purchaseDate}</time></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ProductModel-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ProductModel-image" src={this.props.image} /></div>);
            }
        }

        let gtin8;
        if (this.props.gtin8) {
            if (this.props.gtin8 instanceof Array) {
                gtin8 = (
                   <div className='gtin8-container'>
                       <div className='gtin8-header' data-advice='HTML for the *head* of the section'>gtin8s</div>
                       {this.props.gtin8.map((item, index) => {
                           return (<div className='gtin8' data-advice='Put your HTML here. gtin8 is a Text.'><p className="ProductModel-gtin8">gtin8: {this.props.gtin8}</p></div>);
                       })};
                       <div className='gtin8-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin8 = (<div className='gtin8' data-advice='Put your HTML here. gtin8 is a Text.'><p className="ProductModel-gtin8">gtin8: {this.props.gtin8}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ProductModel-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ProductModel-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let height;
        if (this.props.height) {
            if (this.props.height instanceof Array) {
                height = (
                   <div className='height-container'>
                       <div className='height-header' data-advice='HTML for the *head* of the section'>heights</div>
                       {this.props.height.map((item, index) => {
                           return (<div className='height' data-advice='Put your HTML here. height is a Distance or QuantitativeValue.'><div className="ProductModel-height">height: {this.props.height}</div></div>);
                       })};
                       <div className='height-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                height = (<div className='height' data-advice='Put your HTML here. height is a Distance or QuantitativeValue.'><div className="ProductModel-height">height: {this.props.height}</div></div>);
            }
        }

        let releaseDate;
        if (this.props.releaseDate) {
            if (this.props.releaseDate instanceof Array) {
                releaseDate = (
                   <div className='releaseDate-container'>
                       <div className='releaseDate-header' data-advice='HTML for the *head* of the section'>releaseDates</div>
                       {this.props.releaseDate.map((item, index) => {
                           return (<div className='releaseDate' data-advice='Put your HTML here. releaseDate is a Date.'><time className="ProductModel-releaseDate">releaseDate: {this.props.releaseDate}</time></div>);
                       })};
                       <div className='releaseDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                releaseDate = (<div className='releaseDate' data-advice='Put your HTML here. releaseDate is a Date.'><time className="ProductModel-releaseDate">releaseDate: {this.props.releaseDate}</time></div>);
            }
        }

        let isRelatedTo;
        if (this.props.isRelatedTo) {
            if (this.props.isRelatedTo instanceof Array) {
                isRelatedTo = (
                   <div className='isRelatedTo-container'>
                       <div className='isRelatedTo-header' data-advice='HTML for the *head* of the section'>isRelatedTos</div>
                       {this.props.isRelatedTo.map((item, index) => {
                           return (<Product key={index} {...this.props.isRelatedTo} />);
                       })};
                       <div className='isRelatedTo-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ProductModel-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ProductModel-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let logo;
        if (this.props.logo) {
            if (this.props.logo instanceof Array) {
                logo = (
                   <div className='logo-container'>
                       <div className='logo-header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           return (<div className='logo' data-advice='Put your HTML here. logo is a ImageObject or URL.'><div className="ProductModel-logo">logo: {this.props.logo}</div></div>);
                       })};
                       <div className='logo-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                logo = (<div className='logo' data-advice='Put your HTML here. logo is a ImageObject or URL.'><div className="ProductModel-logo">logo: {this.props.logo}</div></div>);
            }
        }

        let productID;
        if (this.props.productID) {
            if (this.props.productID instanceof Array) {
                productID = (
                   <div className='productID-container'>
                       <div className='productID-header' data-advice='HTML for the *head* of the section'>productIDs</div>
                       {this.props.productID.map((item, index) => {
                           return (<div className='productID' data-advice='Put your HTML here. productID is a Text.'><p className="ProductModel-productID">productID: {this.props.productID}</p></div>);
                       })};
                       <div className='productID-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                productID = (<div className='productID' data-advice='Put your HTML here. productID is a Text.'><p className="ProductModel-productID">productID: {this.props.productID}</p></div>);
            }
        }

        let category;
        if (this.props.category) {
            if (this.props.category instanceof Array) {
                category = (
                   <div className='category-container'>
                       <div className='category-header' data-advice='HTML for the *head* of the section'>categorys</div>
                       {this.props.category.map((item, index) => {
                           return (<div className='category' data-advice='Put your HTML here. category is a Thing or PhysicalActivityCategory or Text.'><div className="ProductModel-category">category: {this.props.category}</div></div>);
                       })};
                       <div className='category-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                category = (<div className='category' data-advice='Put your HTML here. category is a Thing or PhysicalActivityCategory or Text.'><div className="ProductModel-category">category: {this.props.category}</div></div>);
            }
        }

        let predecessorOf;
        if (this.props.predecessorOf) {
            if (this.props.predecessorOf instanceof Array) {
                predecessorOf = (
                   <div className='predecessorOf-container'>
                       <div className='predecessorOf-header' data-advice='HTML for the *head* of the section'>predecessorOfs</div>
                       {this.props.predecessorOf.map((item, index) => {
                           return (<ProductModel key={index} {...this.props.predecessorOf} />);
                       })};
                       <div className='predecessorOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                predecessorOf = (<ProductModel  {...this.props.predecessorOf} />);
            }
        }

        let isSimilarTo;
        if (this.props.isSimilarTo) {
            if (this.props.isSimilarTo instanceof Array) {
                isSimilarTo = (
                   <div className='isSimilarTo-container'>
                       <div className='isSimilarTo-header' data-advice='HTML for the *head* of the section'>isSimilarTos</div>
                       {this.props.isSimilarTo.map((item, index) => {
                           return (<Product key={index} {...this.props.isSimilarTo} />);
                       })};
                       <div className='isSimilarTo-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='review-container'>
                       <div className='review-header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                           return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review  {...this.props.review} />);
            }
        }

        let depth;
        if (this.props.depth) {
            if (this.props.depth instanceof Array) {
                depth = (
                   <div className='depth-container'>
                       <div className='depth-header' data-advice='HTML for the *head* of the section'>depths</div>
                       {this.props.depth.map((item, index) => {
                           return (<div className='depth' data-advice='Put your HTML here. depth is a Distance or QuantitativeValue.'><div className="ProductModel-depth">depth: {this.props.depth}</div></div>);
                       })};
                       <div className='depth-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                depth = (<div className='depth' data-advice='Put your HTML here. depth is a Distance or QuantitativeValue.'><div className="ProductModel-depth">depth: {this.props.depth}</div></div>);
            }
        }

        let width;
        if (this.props.width) {
            if (this.props.width instanceof Array) {
                width = (
                   <div className='width-container'>
                       <div className='width-header' data-advice='HTML for the *head* of the section'>widths</div>
                       {this.props.width.map((item, index) => {
                           return (<div className='width' data-advice='Put your HTML here. width is a Distance or QuantitativeValue.'><div className="ProductModel-width">width: {this.props.width}</div></div>);
                       })};
                       <div className='width-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                width = (<div className='width' data-advice='Put your HTML here. width is a Distance or QuantitativeValue.'><div className="ProductModel-width">width: {this.props.width}</div></div>);
            }
        }

        let additionalProperty;
        if (this.props.additionalProperty) {
            if (this.props.additionalProperty instanceof Array) {
                additionalProperty = (
                   <div className='additionalProperty-container'>
                       <div className='additionalProperty-header' data-advice='HTML for the *head* of the section'>additionalPropertys</div>
                       {this.props.additionalProperty.map((item, index) => {
                           return (<PropertyValue key={index} {...this.props.additionalProperty} />);
                       })};
                       <div className='additionalProperty-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='offers-container'>
                       <div className='offers-header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                           return (<Offer key={index} {...this.props.offers} />);
                       })};
                       <div className='offers-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="ProductModel-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="ProductModel-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let manufacturer;
        if (this.props.manufacturer) {
            if (this.props.manufacturer instanceof Array) {
                manufacturer = (
                   <div className='manufacturer-container'>
                       <div className='manufacturer-header' data-advice='HTML for the *head* of the section'>manufacturers</div>
                       {this.props.manufacturer.map((item, index) => {
                           return (<Organization key={index} {...this.props.manufacturer} />);
                       })};
                       <div className='manufacturer-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                manufacturer = (<Organization  {...this.props.manufacturer} />);
            }
        }

        let brand;
        if (this.props.brand) {
            if (this.props.brand instanceof Array) {
                brand = (
                   <div className='brand-container'>
                       <div className='brand-header' data-advice='HTML for the *head* of the section'>brands</div>
                       {this.props.brand.map((item, index) => {
                           return (<div className='brand' data-advice='Put your HTML here. brand is a Organization or Brand.'><div className="ProductModel-brand">brand: {this.props.brand}</div></div>);
                       })};
                       <div className='brand-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                brand = (<div className='brand' data-advice='Put your HTML here. brand is a Organization or Brand.'><div className="ProductModel-brand">brand: {this.props.brand}</div></div>);
            }
        }

        let sku;
        if (this.props.sku) {
            if (this.props.sku instanceof Array) {
                sku = (
                   <div className='sku-container'>
                       <div className='sku-header' data-advice='HTML for the *head* of the section'>skus</div>
                       {this.props.sku.map((item, index) => {
                           return (<div className='sku' data-advice='Put your HTML here. sku is a Text.'><p className="ProductModel-sku">sku: {this.props.sku}</p></div>);
                       })};
                       <div className='sku-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sku = (<div className='sku' data-advice='Put your HTML here. sku is a Text.'><p className="ProductModel-sku">sku: {this.props.sku}</p></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ProductModel-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ProductModel-description">description: {this.props.description}</p></div>);
            }
        }

        let mpn;
        if (this.props.mpn) {
            if (this.props.mpn instanceof Array) {
                mpn = (
                   <div className='mpn-container'>
                       <div className='mpn-header' data-advice='HTML for the *head* of the section'>mpns</div>
                       {this.props.mpn.map((item, index) => {
                           return (<div className='mpn' data-advice='Put your HTML here. mpn is a Text.'><p className="ProductModel-mpn">mpn: {this.props.mpn}</p></div>);
                       })};
                       <div className='mpn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mpn = (<div className='mpn' data-advice='Put your HTML here. mpn is a Text.'><p className="ProductModel-mpn">mpn: {this.props.mpn}</p></div>);
            }
        }

        let successorOf;
        if (this.props.successorOf) {
            if (this.props.successorOf instanceof Array) {
                successorOf = (
                   <div className='successorOf-container'>
                       <div className='successorOf-header' data-advice='HTML for the *head* of the section'>successorOfs</div>
                       {this.props.successorOf.map((item, index) => {
                           return (<ProductModel key={index} {...this.props.successorOf} />);
                       })};
                       <div className='successorOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                successorOf = (<ProductModel  {...this.props.successorOf} />);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award-container'>
                       <div className='award-header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                           return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="ProductModel-award">award: {this.props.award}</p></div>);
                       })};
                       <div className='award-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="ProductModel-award">award: {this.props.award}</p></div>);
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
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ProductModel-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ProductModel-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let isVariantOf;
        if (this.props.isVariantOf) {
            if (this.props.isVariantOf instanceof Array) {
                isVariantOf = (
                   <div className='isVariantOf-container'>
                       <div className='isVariantOf-header' data-advice='HTML for the *head* of the section'>isVariantOfs</div>
                       {this.props.isVariantOf.map((item, index) => {
                           return (<ProductModel key={index} {...this.props.isVariantOf} />);
                       })};
                       <div className='isVariantOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isVariantOf = (<ProductModel  {...this.props.isVariantOf} />);
            }
        }

        let productionDate;
        if (this.props.productionDate) {
            if (this.props.productionDate instanceof Array) {
                productionDate = (
                   <div className='productionDate-container'>
                       <div className='productionDate-header' data-advice='HTML for the *head* of the section'>productionDates</div>
                       {this.props.productionDate.map((item, index) => {
                           return (<div className='productionDate' data-advice='Put your HTML here. productionDate is a Date.'><time className="ProductModel-productionDate">productionDate: {this.props.productionDate}</time></div>);
                       })};
                       <div className='productionDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                productionDate = (<div className='productionDate' data-advice='Put your HTML here. productionDate is a Date.'><time className="ProductModel-productionDate">productionDate: {this.props.productionDate}</time></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ProductModel-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ProductModel-name">name: {this.props.name}</p></div>);
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
                aggregateRating = (<AggregateRating  {...this.props.aggregateRating} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ProductModel-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ProductModel-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let gtin14;
        if (this.props.gtin14) {
            if (this.props.gtin14 instanceof Array) {
                gtin14 = (
                   <div className='gtin14-container'>
                       <div className='gtin14-header' data-advice='HTML for the *head* of the section'>gtin14s</div>
                       {this.props.gtin14.map((item, index) => {
                           return (<div className='gtin14' data-advice='Put your HTML here. gtin14 is a Text.'><p className="ProductModel-gtin14">gtin14: {this.props.gtin14}</p></div>);
                       })};
                       <div className='gtin14-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin14 = (<div className='gtin14' data-advice='Put your HTML here. gtin14 is a Text.'><p className="ProductModel-gtin14">gtin14: {this.props.gtin14}</p></div>);
            }
        }

        let audience;
        if (this.props.audience) {
            if (this.props.audience instanceof Array) {
                audience = (
                   <div className='audience-container'>
                       <div className='audience-header' data-advice='HTML for the *head* of the section'>audiences</div>
                       {this.props.audience.map((item, index) => {
                           return (<Audience key={index} {...this.props.audience} />);
                       })};
                       <div className='audience-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                audience = (<Audience  {...this.props.audience} />);
            }
        }

        let gtin13;
        if (this.props.gtin13) {
            if (this.props.gtin13 instanceof Array) {
                gtin13 = (
                   <div className='gtin13-container'>
                       <div className='gtin13-header' data-advice='HTML for the *head* of the section'>gtin13s</div>
                       {this.props.gtin13.map((item, index) => {
                           return (<div className='gtin13' data-advice='Put your HTML here. gtin13 is a Text.'><p className="ProductModel-gtin13">gtin13: {this.props.gtin13}</p></div>);
                       })};
                       <div className='gtin13-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin13 = (<div className='gtin13' data-advice='Put your HTML here. gtin13 is a Text.'><p className="ProductModel-gtin13">gtin13: {this.props.gtin13}</p></div>);
            }
        }

        let gtin12;
        if (this.props.gtin12) {
            if (this.props.gtin12 instanceof Array) {
                gtin12 = (
                   <div className='gtin12-container'>
                       <div className='gtin12-header' data-advice='HTML for the *head* of the section'>gtin12s</div>
                       {this.props.gtin12.map((item, index) => {
                           return (<div className='gtin12' data-advice='Put your HTML here. gtin12 is a Text.'><p className="ProductModel-gtin12">gtin12: {this.props.gtin12}</p></div>);
                       })};
                       <div className='gtin12-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gtin12 = (<div className='gtin12' data-advice='Put your HTML here. gtin12 is a Text.'><p className="ProductModel-gtin12">gtin12: {this.props.gtin12}</p></div>);
            }
        }

        let model;
        if (this.props.model) {
            if (this.props.model instanceof Array) {
                model = (
                   <div className='model-container'>
                       <div className='model-header' data-advice='HTML for the *head* of the section'>models</div>
                       {this.props.model.map((item, index) => {
                           return (<div className='model' data-advice='Put your HTML here. model is a ProductModel or Text.'><div className="ProductModel-model">model: {this.props.model}</div></div>);
                       })};
                       <div className='model-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                model = (<div className='model' data-advice='Put your HTML here. model is a ProductModel or Text.'><div className="ProductModel-model">model: {this.props.model}</div></div>);
            }
        }

        return (
            <div className='ProductModel'>
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
                {predecessorOf}
                {isSimilarTo}
                {review}
                {depth}
                {width}
                {additionalProperty}
                {offers}
                {mainEntityOfPage}
                {manufacturer}
                {brand}
                {sku}
                {description}
                {mpn}
                {successorOf}
                {award}
                {potentialAction}
                {itemCondition}
                {alternateName}
                {isVariantOf}
                {productionDate}
                {name}
                {aggregateRating}
                {url}
                {gtin14}
                {audience}
                {gtin13}
                {gtin12}
                {model}
            </div>
        );
    }
};

ProductModel.defaultProps = {
};

ProductModel.propTypes = {
   isConsumableFor: React.propTypes.object,
   weight: React.propTypes.object,
   isAccessoryOrSparePartFor: React.propTypes.object,
   color: React.propTypes.string,
   purchaseDate: React.propTypes.string,
   image: React.propTypes.object,
   gtin8: React.propTypes.string,
   sameAs: React.propTypes.string,
   height: React.propTypes.object,
   releaseDate: React.propTypes.string,
   isRelatedTo: React.propTypes.object,
   additionalType: React.propTypes.string,
   logo: React.propTypes.object,
   productID: React.propTypes.string,
   category: React.propTypes.object,
   predecessorOf: React.propTypes.object,
   isSimilarTo: React.propTypes.object,
   review: React.propTypes.object,
   depth: React.propTypes.object,
   width: React.propTypes.object,
   additionalProperty: React.propTypes.object,
   offers: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   manufacturer: React.propTypes.object,
   brand: React.propTypes.object,
   sku: React.propTypes.string,
   description: React.propTypes.string,
   mpn: React.propTypes.string,
   successorOf: React.propTypes.object,
   award: React.propTypes.string,
   potentialAction: React.propTypes.object,
   itemCondition: React.propTypes.object,
   alternateName: React.propTypes.string,
   isVariantOf: React.propTypes.object,
   productionDate: React.propTypes.string,
   name: React.propTypes.string,
   aggregateRating: React.propTypes.object,
   url: React.propTypes.string,
   gtin14: React.propTypes.string,
   audience: React.propTypes.object,
   gtin13: React.propTypes.string,
   gtin12: React.propTypes.string,
   model: React.propTypes.object,
};

