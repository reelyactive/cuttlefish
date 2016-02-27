/* Product - Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.. Generated automatically by the reactGenerator. */
import Distance from './distance.js';
import ProductModel from './productmodel.js';
import Thing from './thing.js';
import OfferItemCondition from './offeritemcondition.js';
import Brand from './brand.js';
import Offer from './offer.js';
import QuantitativeValue from './quantitativevalue.js';
import PropertyValue from './propertyvalue.js';
import AggregateRating from './aggregaterating.js';
import Audience from './audience.js';
import PhysicalActivityCategory from './physicalactivitycategory.js';
import Action from './action.js';
import Organization from './organization.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';
import Review from './review.js';


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
                            return (<Product key={index} {...this.props.isConsumableFor} />);
                       })};
                       <div className='isConsumableFor__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isConsumableFor = (<Product key={index} {...this.props.isConsumableFor} />);
            }
        }

        let weight;
        if (this.props.weight) {
            if (this.props.weight instanceof Array) {
                weight = (
                   <div className='weight__container'>
                       <div className='weight__header' data-advice='HTML for the *head* of the section'>weights</div>
                       {this.props.weight.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.weight} />);
                       })};
                       <div className='weight__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                weight = (<QuantitativeValue key={index} {...this.props.weight} />);
            }
        }

        let isAccessoryOrSparePartFor;
        if (this.props.isAccessoryOrSparePartFor) {
            if (this.props.isAccessoryOrSparePartFor instanceof Array) {
                isAccessoryOrSparePartFor = (
                   <div className='isAccessoryOrSparePartFor__container'>
                       <div className='isAccessoryOrSparePartFor__header' data-advice='HTML for the *head* of the section'>isAccessoryOrSparePartFors</div>
                       {this.props.isAccessoryOrSparePartFor.map((item, index) => {
                            return (<Product key={index} {...this.props.isAccessoryOrSparePartFor} />);
                       })};
                       <div className='isAccessoryOrSparePartFor__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isAccessoryOrSparePartFor = (<Product key={index} {...this.props.isAccessoryOrSparePartFor} />);
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
                       })};
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                       })};
                       <div className='height__footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let isRelatedTo;
        if (this.props.isRelatedTo) {
            if (this.props.isRelatedTo instanceof Array) {
                isRelatedTo = (
                   <div className='isRelatedTo__container'>
                       <div className='isRelatedTo__header' data-advice='HTML for the *head* of the section'>isRelatedTos</div>
                       {this.props.isRelatedTo.map((item, index) => {
                            return (<Product key={index} {...this.props.isRelatedTo} />);
                       })};
                       <div className='isRelatedTo__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isRelatedTo = (<Product key={index} {...this.props.isRelatedTo} />);
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
                       })};
                       <div className='logo__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                       })};
                       <div className='category__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                            return (<Product key={index} {...this.props.isSimilarTo} />);
                       })};
                       <div className='isSimilarTo__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isSimilarTo = (<Product key={index} {...this.props.isSimilarTo} />);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review key={index} {...this.props.review} />);
            }
        }

        let audience;
        if (this.props.audience) {
            if (this.props.audience instanceof Array) {
                audience = (
                   <div className='audience__container'>
                       <div className='audience__header' data-advice='HTML for the *head* of the section'>audiences</div>
                       {this.props.audience.map((item, index) => {
                            return (<Audience key={index} {...this.props.audience} />);
                       })};
                       <div className='audience__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                audience = (<Audience key={index} {...this.props.audience} />);
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
                       })};
                       <div className='width__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                            return (<PropertyValue key={index} {...this.props.additionalProperty} />);
                       })};
                       <div className='additionalProperty__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalProperty = (<PropertyValue key={index} {...this.props.additionalProperty} />);
            }
        }

        let offers;
        if (this.props.offers) {
            if (this.props.offers instanceof Array) {
                offers = (
                   <div className='offers__container'>
                       <div className='offers__header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                            return (<Offer key={index} {...this.props.offers} />);
                       })};
                       <div className='offers__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                offers = (<Offer key={index} {...this.props.offers} />);
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
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                       })};
                       <div className='brand__footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let itemCondition;
        if (this.props.itemCondition) {
            if (this.props.itemCondition instanceof Array) {
                itemCondition = (
                   <div className='itemCondition__container'>
                       <div className='itemCondition__header' data-advice='HTML for the *head* of the section'>itemConditions</div>
                       {this.props.itemCondition.map((item, index) => {
                            return (<OfferItemCondition key={index} {...this.props.itemCondition} />);
                       })};
                       <div className='itemCondition__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                itemCondition = (<OfferItemCondition key={index} {...this.props.itemCondition} />);
            }
        }

        let manufacturer;
        if (this.props.manufacturer) {
            if (this.props.manufacturer instanceof Array) {
                manufacturer = (
                   <div className='manufacturer__container'>
                       <div className='manufacturer__header' data-advice='HTML for the *head* of the section'>manufacturers</div>
                       {this.props.manufacturer.map((item, index) => {
                            return (<Organization key={index} {...this.props.manufacturer} />);
                       })};
                       <div className='manufacturer__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                manufacturer = (<Organization key={index} {...this.props.manufacturer} />);
            }
        }

        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating key={index} {...this.props.aggregateRating} />);
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
                       })};
                       <div className='depth__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                       })};
                       <div className='model__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                {image}
                {height}
                {isRelatedTo}
                {logo}
                {category}
                {isSimilarTo}
                {review}
                {audience}
                {width}
                {additionalProperty}
                {offers}
                {mainEntityOfPage}
                {brand}
                {itemCondition}
                {manufacturer}
                {potentialAction}
                {aggregateRating}
                {depth}
                {model}
            </div>
        );
    }
};

Product.defaultProps = {
};

Product.propTypes = {
   isConsumableFor: React.propTypes.object,
   weight: React.propTypes.object,
   isAccessoryOrSparePartFor: React.propTypes.object,
   image: React.propTypes.object,
   height: React.propTypes.object,
   isRelatedTo: React.propTypes.object,
   logo: React.propTypes.object,
   category: React.propTypes.object,
   isSimilarTo: React.propTypes.object,
   review: React.propTypes.object,
   audience: React.propTypes.object,
   width: React.propTypes.object,
   additionalProperty: React.propTypes.object,
   offers: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   brand: React.propTypes.object,
   itemCondition: React.propTypes.object,
   manufacturer: React.propTypes.object,
   potentialAction: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   depth: React.propTypes.object,
   model: React.propTypes.object,
};

