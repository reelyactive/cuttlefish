/* QuantitativeValue - A point value or interval for product characteristics and other purposes.. Generated automatically by the reactGenerator. */
import ImageObject from './imageobject.js';
import Enumeration from './enumeration.js';
import StructuredValue from './structuredvalue.js';
import QualitativeValue from './qualitativevalue.js';
import Action from './action.js';
import PropertyValue from './propertyvalue.js';
import CreativeWork from './creativework.js';


import React, {
  Component
} from 'react';

export default class QuantitativeValue extends Component {
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

        let valueReference;
        if (this.props.valueReference) {
            if (this.props.valueReference instanceof Array) {
                valueReference = (
                   <div className='valueReference-container'>
                       <div className='valueReference-header' data-advice='HTML for the *head* of the section'>valueReferences</div>
                       {this.props.valueReference.map((item, index) => {
                           if (this.props['@type'] === 'Enumeration') {
                               return (<Enumeration key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'StructuredValue') {
                               return (<StructuredValue key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'PropertyValue') {
                               return (<PropertyValue key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'QualitativeValue') {
                               return (<QualitativeValue key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.valueReference} />);
                           }
                       })};
                       <div className='valueReference-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Enumeration') {
                   valueReference = (<Enumeration key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'StructuredValue') {
                   valueReference = (<StructuredValue key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'PropertyValue') {
                   valueReference = (<PropertyValue key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'QualitativeValue') {
                   valueReference = (<QualitativeValue key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'QuantitativeValue') {
                   valueReference = (<QuantitativeValue key={index} {...this.props.valueReference} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QuantitativeValue-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QuantitativeValue-image" src={this.props.image} /></div>);
               }
            }
        }

        let value;
        if (this.props.value) {
            if (this.props.value instanceof Array) {
                value = (
                   <div className='value-container'>
                       <div className='value-header' data-advice='HTML for the *head* of the section'>values</div>
                       {this.props.value.map((item, index) => {
                           if (this.props['@type'] === 'StructuredValue') {
                               return (<StructuredValue key={index} {...this.props.value} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='value' data-advice='Put your HTML here. value is a Text.'><p className="QuantitativeValue-value">value: {this.props.value}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='value' data-advice='Put your HTML here. value is a Number.'><p className="QuantitativeValue-value">value: {this.props.value}</p></div>);
                           }
                           else if (this.props['@type'] === 'Boolean') {
                               return (<div className='value' data-advice='Put your HTML here. value is a Boolean.'><div className="QuantitativeValue-value">value: {this.props.value}</div></div>);
                           }
                       })};
                       <div className='value-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'StructuredValue') {
                   value = (<StructuredValue key={index} {...this.props.value} />);
               }
               else if (this.props['@type'] === 'Text') {
                   value = (<div className='value' data-advice='Put your HTML here. value is a Text.'><p className="QuantitativeValue-value">value: {this.props.value}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   value = (<div className='value' data-advice='Put your HTML here. value is a Number.'><p className="QuantitativeValue-value">value: {this.props.value}</p></div>);
               }
               else if (this.props['@type'] === 'Boolean') {
                   value = (<div className='value' data-advice='Put your HTML here. value is a Boolean.'><div className="QuantitativeValue-value">value: {this.props.value}</div></div>);
               }
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
                additionalProperty = (<PropertyValue key={index} {...this.props.additionalProperty} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="QuantitativeValue-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="QuantitativeValue-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text.'><p className="QuantitativeValue-unitCode">unitCode: {this.props.unitCode}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a URL.'><a className="QuantitativeValue-unitCode" href={this.props.unitCode} target="_blank">unitCode</a></div>);
                           }
                       })};
                       <div className='unitCode-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   unitCode = (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text.'><p className="QuantitativeValue-unitCode">unitCode: {this.props.unitCode}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   unitCode = (<div className='unitCode' data-advice='Put your HTML here. unitCode is a URL.'><a className="QuantitativeValue-unitCode" href={this.props.unitCode} target="_blank">unitCode</a></div>);
               }
            }
        }

        return (
            <div className='QuantitativeValue'>
                {potentialAction}
                {valueReference}
                {image}
                {value}
                {additionalProperty}
                {mainEntityOfPage}
                {unitCode}
            </div>
        );
    }
};

QuantitativeValue.defaultProps = {
};

QuantitativeValue.propTypes = {
   potentialAction: React.propTypes.object,
   valueReference: React.propTypes.object,
   image: React.propTypes.object,
   value: React.propTypes.object,
   additionalProperty: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   unitCode: React.propTypes.object,
};

