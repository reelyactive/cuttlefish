/* TypeAndQuantityNode - A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import BusinessFunction from './businessfunction.js';
import CreativeWork from './creativework.js';
import Product from './product.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class TypeAndQuantityNode extends Component {
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

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="TypeAndQuantityNode-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="TypeAndQuantityNode-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let unitCode;
        if (this.props.unitCode) {
            if (this.props.unitCode instanceof Array) {
                unitCode = (
                   <div className='unitCode-container'>
                       <div className='unitCode-header' data-advice='HTML for the *head* of the section'>unitCodes</div>
                       {this.props.unitCode.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text.'><p className="TypeAndQuantityNode-unitCode">unitCode: {this.props.unitCode}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a URL.'><a className="TypeAndQuantityNode-unitCode" href={this.props.unitCode} target="_blank">unitCode</a></div>);
                           }
                       })};
                       <div className='unitCode-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   unitCode = (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text.'><p className="TypeAndQuantityNode-unitCode">unitCode: {this.props.unitCode}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   unitCode = (<div className='unitCode' data-advice='Put your HTML here. unitCode is a URL.'><a className="TypeAndQuantityNode-unitCode" href={this.props.unitCode} target="_blank">unitCode</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="TypeAndQuantityNode-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="TypeAndQuantityNode-image" src={this.props.image} /></div>);
               }
            }
        }

        let typeOfGood;
        if (this.props.typeOfGood) {
            if (this.props.typeOfGood instanceof Array) {
                typeOfGood = (
                   <div className='typeOfGood-container'>
                       <div className='typeOfGood-header' data-advice='HTML for the *head* of the section'>typeOfGoods</div>
                       {this.props.typeOfGood.map((item, index) => {
                            return (<Product key={index} {...this.props.typeOfGood} />);
                       })};
                       <div className='typeOfGood-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                typeOfGood = (<Product key={index} {...this.props.typeOfGood} />);
            }
        }

        return (
            <div className='TypeAndQuantityNode'>
                {potentialAction}
                {businessFunction}
                {mainEntityOfPage}
                {unitCode}
                {image}
                {typeOfGood}
            </div>
        );
    }
};

TypeAndQuantityNode.defaultProps = {
};

TypeAndQuantityNode.propTypes = {
   potentialAction: React.propTypes.object,
   businessFunction: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   unitCode: React.propTypes.object,
   image: React.propTypes.object,
   typeOfGood: React.propTypes.object,
};

