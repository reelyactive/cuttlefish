/* PriceSpecification - A structured value representing a monetary amount. Typically, only the subclasses of this type are used for markup.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import CreativeWork from './creativework.js';
import QuantitativeValue from './quantitativevalue.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class PriceSpecification extends Component {
    render() {
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

        let price;
        if (this.props.price) {
            if (this.props.price instanceof Array) {
                price = (
                   <div className='price-container'>
                       <div className='price-header' data-advice='HTML for the *head* of the section'>prices</div>
                       {this.props.price.map((item, index) => {
                           if (this.props['@type'] === 'Number') {
                               return (<div className='price' data-advice='Put your HTML here. price is a Number.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='price' data-advice='Put your HTML here. price is a Text.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
                           }
                       })};
                       <div className='price-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Number') {
                   price = (<div className='price' data-advice='Put your HTML here. price is a Number.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
               }
               else if (this.props['@type'] === 'Text') {
                   price = (<div className='price' data-advice='Put your HTML here. price is a Text.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
               }
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

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="PriceSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="PriceSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="PriceSpecification-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="PriceSpecification-image" src={this.props.image} /></div>);
               }
            }
        }

        return (
            <div className='PriceSpecification'>
                {potentialAction}
                {price}
                {eligibleTransactionVolume}
                {eligibleQuantity}
                {mainEntityOfPage}
                {image}
            </div>
        );
    }
};

PriceSpecification.defaultProps = {
};

PriceSpecification.propTypes = {
   potentialAction: React.propTypes.object,
   price: React.propTypes.object,
   eligibleTransactionVolume: React.propTypes.object,
   eligibleQuantity: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
};

