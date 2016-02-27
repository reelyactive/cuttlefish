/* WarrantyPromise - A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import WarrantyScope from './warrantyscope.js';
import CreativeWork from './creativework.js';
import QuantitativeValue from './quantitativevalue.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class WarrantyPromise extends Component {
    render() {
        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="WarrantyPromise-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="WarrantyPromise-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let durationOfWarranty;
        if (this.props.durationOfWarranty) {
            if (this.props.durationOfWarranty instanceof Array) {
                durationOfWarranty = (
                   <div className='durationOfWarranty__container'>
                       <div className='durationOfWarranty__header' data-advice='HTML for the *head* of the section'>durationOfWarrantys</div>
                       {this.props.durationOfWarranty.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.durationOfWarranty} />);
                       })};
                       <div className='durationOfWarranty__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                durationOfWarranty = (<QuantitativeValue key={index} {...this.props.durationOfWarranty} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="WarrantyPromise-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="WarrantyPromise-image" src={this.props.image} /></div>);
               }
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

        let warrantyScope;
        if (this.props.warrantyScope) {
            if (this.props.warrantyScope instanceof Array) {
                warrantyScope = (
                   <div className='warrantyScope__container'>
                       <div className='warrantyScope__header' data-advice='HTML for the *head* of the section'>warrantyScopes</div>
                       {this.props.warrantyScope.map((item, index) => {
                            return (<WarrantyScope key={index} {...this.props.warrantyScope} />);
                       })};
                       <div className='warrantyScope__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                warrantyScope = (<WarrantyScope key={index} {...this.props.warrantyScope} />);
            }
        }

        return (
            <div className='WarrantyPromise'>
                {mainEntityOfPage}
                {durationOfWarranty}
                {image}
                {potentialAction}
                {warrantyScope}
            </div>
        );
    }
};

WarrantyPromise.defaultProps = {
};

WarrantyPromise.propTypes = {
   mainEntityOfPage: React.propTypes.object,
   durationOfWarranty: React.propTypes.object,
   image: React.propTypes.object,
   potentialAction: React.propTypes.object,
   warrantyScope: React.propTypes.object,
};

