/* QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */
import Property from './property.js';
import QuantitativeValue from './quantitativevalue.js';
import Enumeration from './enumeration.js';
import StructuredValue from './structuredvalue.js';
import ImageObject from './imageobject.js';
import Action from './action.js';
import PropertyValue from './propertyvalue.js';
import CreativeWork from './creativework.js';
import Class from './class.js';


import React, {
  Component
} from 'react';

export default class QualitativeValue extends Component {
    render() {
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

        let valueReference;
        if (this.props.valueReference) {
            if (this.props.valueReference instanceof Array) {
                valueReference = (
                   <div className='valueReference__container'>
                       <div className='valueReference__header' data-advice='HTML for the *head* of the section'>valueReferences</div>
                       {this.props.valueReference.map((item, index) => {
                           if (this.props['@type'] === 'QualitativeValue') {
                               return (<QualitativeValue key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'Enumeration') {
                               return (<Enumeration key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'StructuredValue') {
                               return (<StructuredValue key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.valueReference} />);
                           }
                           else if (this.props['@type'] === 'PropertyValue') {
                               return (<PropertyValue key={index} {...this.props.valueReference} />);
                           }
                       })};
                       <div className='valueReference__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'QualitativeValue') {
                   valueReference = (<QualitativeValue key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'Enumeration') {
                   valueReference = (<Enumeration key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'StructuredValue') {
                   valueReference = (<StructuredValue key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'QuantitativeValue') {
                   valueReference = (<QuantitativeValue key={index} {...this.props.valueReference} />);
               }
               else if (this.props['@type'] === 'PropertyValue') {
                   valueReference = (<PropertyValue key={index} {...this.props.valueReference} />);
               }
            }
        }

        let greater;
        if (this.props.greater) {
            if (this.props.greater instanceof Array) {
                greater = (
                   <div className='greater__container'>
                       <div className='greater__header' data-advice='HTML for the *head* of the section'>greaters</div>
                       {this.props.greater.map((item, index) => {
                            return (<QualitativeValue key={index} {...this.props.greater} />);
                       })};
                       <div className='greater__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                greater = (<QualitativeValue key={index} {...this.props.greater} />);
            }
        }

        let lesserOrEqual;
        if (this.props.lesserOrEqual) {
            if (this.props.lesserOrEqual instanceof Array) {
                lesserOrEqual = (
                   <div className='lesserOrEqual__container'>
                       <div className='lesserOrEqual__header' data-advice='HTML for the *head* of the section'>lesserOrEquals</div>
                       {this.props.lesserOrEqual.map((item, index) => {
                            return (<QualitativeValue key={index} {...this.props.lesserOrEqual} />);
                       })};
                       <div className='lesserOrEqual__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                lesserOrEqual = (<QualitativeValue key={index} {...this.props.lesserOrEqual} />);
            }
        }

        let equal;
        if (this.props.equal) {
            if (this.props.equal instanceof Array) {
                equal = (
                   <div className='equal__container'>
                       <div className='equal__header' data-advice='HTML for the *head* of the section'>equals</div>
                       {this.props.equal.map((item, index) => {
                            return (<QualitativeValue key={index} {...this.props.equal} />);
                       })};
                       <div className='equal__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                equal = (<QualitativeValue key={index} {...this.props.equal} />);
            }
        }

        let lesser;
        if (this.props.lesser) {
            if (this.props.lesser instanceof Array) {
                lesser = (
                   <div className='lesser__container'>
                       <div className='lesser__header' data-advice='HTML for the *head* of the section'>lessers</div>
                       {this.props.lesser.map((item, index) => {
                            return (<QualitativeValue key={index} {...this.props.lesser} />);
                       })};
                       <div className='lesser__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                lesser = (<QualitativeValue key={index} {...this.props.lesser} />);
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

        let supersededBy;
        if (this.props.supersededBy) {
            if (this.props.supersededBy instanceof Array) {
                supersededBy = (
                   <div className='supersededBy__container'>
                       <div className='supersededBy__header' data-advice='HTML for the *head* of the section'>supersededBys</div>
                       {this.props.supersededBy.map((item, index) => {
                           if (this.props['@type'] === 'Enumeration') {
                               return (<Enumeration key={index} {...this.props.supersededBy} />);
                           }
                           else if (this.props['@type'] === 'Class') {
                               return (<Class key={index} {...this.props.supersededBy} />);
                           }
                           else if (this.props['@type'] === 'Property') {
                               return (<Property key={index} {...this.props.supersededBy} />);
                           }
                       })};
                       <div className='supersededBy__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Enumeration') {
                   supersededBy = (<Enumeration key={index} {...this.props.supersededBy} />);
               }
               else if (this.props['@type'] === 'Class') {
                   supersededBy = (<Class key={index} {...this.props.supersededBy} />);
               }
               else if (this.props['@type'] === 'Property') {
                   supersededBy = (<Property key={index} {...this.props.supersededBy} />);
               }
            }
        }

        let greaterOrEqual;
        if (this.props.greaterOrEqual) {
            if (this.props.greaterOrEqual instanceof Array) {
                greaterOrEqual = (
                   <div className='greaterOrEqual__container'>
                       <div className='greaterOrEqual__header' data-advice='HTML for the *head* of the section'>greaterOrEquals</div>
                       {this.props.greaterOrEqual.map((item, index) => {
                            return (<QualitativeValue key={index} {...this.props.greaterOrEqual} />);
                       })};
                       <div className='greaterOrEqual__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                greaterOrEqual = (<QualitativeValue key={index} {...this.props.greaterOrEqual} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="QualitativeValue-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="QualitativeValue-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let nonEqual;
        if (this.props.nonEqual) {
            if (this.props.nonEqual instanceof Array) {
                nonEqual = (
                   <div className='nonEqual__container'>
                       <div className='nonEqual__header' data-advice='HTML for the *head* of the section'>nonEquals</div>
                       {this.props.nonEqual.map((item, index) => {
                            return (<QualitativeValue key={index} {...this.props.nonEqual} />);
                       })};
                       <div className='nonEqual__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                nonEqual = (<QualitativeValue key={index} {...this.props.nonEqual} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QualitativeValue-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QualitativeValue-image" src={this.props.image} /></div>);
               }
            }
        }

        return (
            <div className='QualitativeValue'>
                {potentialAction}
                {valueReference}
                {greater}
                {lesserOrEqual}
                {equal}
                {lesser}
                {additionalProperty}
                {supersededBy}
                {greaterOrEqual}
                {mainEntityOfPage}
                {nonEqual}
                {image}
            </div>
        );
    }
};

QualitativeValue.defaultProps = {
};

QualitativeValue.propTypes = {
   potentialAction: React.propTypes.object,
   valueReference: React.propTypes.object,
   greater: React.propTypes.object,
   lesserOrEqual: React.propTypes.object,
   equal: React.propTypes.object,
   lesser: React.propTypes.object,
   additionalProperty: React.propTypes.object,
   supersededBy: React.propTypes.object,
   greaterOrEqual: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   nonEqual: React.propTypes.object,
   image: React.propTypes.object,
};

