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

        let valueReference;
        if (this.props.valueReference) {
            if (this.props.valueReference instanceof Array) {
                valueReference = (
                   <div className='valueReference-container'>
                       <div className='valueReference-header' data-advice='HTML for the *head* of the section'>valueReferences</div>
                       {this.props.valueReference.map((item, index) => {
                           return (<div className='valueReference' data-advice='Put your HTML here. valueReference is a QualitativeValue or Enumeration or StructuredValue or QuantitativeValue or PropertyValue.'><div className="QualitativeValue-valueReference">valueReference: {this.props.valueReference}</div></div>);
                       })};
                       <div className='valueReference-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                valueReference = (<div className='valueReference' data-advice='Put your HTML here. valueReference is a QualitativeValue or Enumeration or StructuredValue or QuantitativeValue or PropertyValue.'><div className="QualitativeValue-valueReference">valueReference: {this.props.valueReference}</div></div>);
            }
        }

        let greater;
        if (this.props.greater) {
            if (this.props.greater instanceof Array) {
                greater = (
                   <div className='greater-container'>
                       <div className='greater-header' data-advice='HTML for the *head* of the section'>greaters</div>
                       {this.props.greater.map((item, index) => {
                           return (<QualitativeValue key={index} {...this.props.greater} />);
                       })};
                       <div className='greater-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                greater = (<QualitativeValue  {...this.props.greater} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="QualitativeValue-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="QualitativeValue-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let lesserOrEqual;
        if (this.props.lesserOrEqual) {
            if (this.props.lesserOrEqual instanceof Array) {
                lesserOrEqual = (
                   <div className='lesserOrEqual-container'>
                       <div className='lesserOrEqual-header' data-advice='HTML for the *head* of the section'>lesserOrEquals</div>
                       {this.props.lesserOrEqual.map((item, index) => {
                           return (<QualitativeValue key={index} {...this.props.lesserOrEqual} />);
                       })};
                       <div className='lesserOrEqual-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                lesserOrEqual = (<QualitativeValue  {...this.props.lesserOrEqual} />);
            }
        }

        let equal;
        if (this.props.equal) {
            if (this.props.equal instanceof Array) {
                equal = (
                   <div className='equal-container'>
                       <div className='equal-header' data-advice='HTML for the *head* of the section'>equals</div>
                       {this.props.equal.map((item, index) => {
                           return (<QualitativeValue key={index} {...this.props.equal} />);
                       })};
                       <div className='equal-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                equal = (<QualitativeValue  {...this.props.equal} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="QualitativeValue-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="QualitativeValue-name">name: {this.props.name}</p></div>);
            }
        }

        let lesser;
        if (this.props.lesser) {
            if (this.props.lesser instanceof Array) {
                lesser = (
                   <div className='lesser-container'>
                       <div className='lesser-header' data-advice='HTML for the *head* of the section'>lessers</div>
                       {this.props.lesser.map((item, index) => {
                           return (<QualitativeValue key={index} {...this.props.lesser} />);
                       })};
                       <div className='lesser-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                lesser = (<QualitativeValue  {...this.props.lesser} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="QualitativeValue-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="QualitativeValue-url" href={this.props.url} target="_blank">url</a></div>);
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

        let supersededBy;
        if (this.props.supersededBy) {
            if (this.props.supersededBy instanceof Array) {
                supersededBy = (
                   <div className='supersededBy-container'>
                       <div className='supersededBy-header' data-advice='HTML for the *head* of the section'>supersededBys</div>
                       {this.props.supersededBy.map((item, index) => {
                           return (<div className='supersededBy' data-advice='Put your HTML here. supersededBy is a Enumeration or Class or Property.'><div className="QualitativeValue-supersededBy">supersededBy: {this.props.supersededBy}</div></div>);
                       })};
                       <div className='supersededBy-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                supersededBy = (<div className='supersededBy' data-advice='Put your HTML here. supersededBy is a Enumeration or Class or Property.'><div className="QualitativeValue-supersededBy">supersededBy: {this.props.supersededBy}</div></div>);
            }
        }

        let greaterOrEqual;
        if (this.props.greaterOrEqual) {
            if (this.props.greaterOrEqual instanceof Array) {
                greaterOrEqual = (
                   <div className='greaterOrEqual-container'>
                       <div className='greaterOrEqual-header' data-advice='HTML for the *head* of the section'>greaterOrEquals</div>
                       {this.props.greaterOrEqual.map((item, index) => {
                           return (<QualitativeValue key={index} {...this.props.greaterOrEqual} />);
                       })};
                       <div className='greaterOrEqual-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                greaterOrEqual = (<QualitativeValue  {...this.props.greaterOrEqual} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="QualitativeValue-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="QualitativeValue-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="QualitativeValue-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="QualitativeValue-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="QualitativeValue-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="QualitativeValue-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let nonEqual;
        if (this.props.nonEqual) {
            if (this.props.nonEqual instanceof Array) {
                nonEqual = (
                   <div className='nonEqual-container'>
                       <div className='nonEqual-header' data-advice='HTML for the *head* of the section'>nonEquals</div>
                       {this.props.nonEqual.map((item, index) => {
                           return (<QualitativeValue key={index} {...this.props.nonEqual} />);
                       })};
                       <div className='nonEqual-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                nonEqual = (<QualitativeValue  {...this.props.nonEqual} />);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="QualitativeValue-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="QualitativeValue-image" src={this.props.image} /></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="QualitativeValue-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="QualitativeValue-description">description: {this.props.description}</p></div>);
            }
        }

        return (
            <div className='QualitativeValue'>
                {potentialAction}
                {valueReference}
                {greater}
                {sameAs}
                {lesserOrEqual}
                {equal}
                {name}
                {lesser}
                {url}
                {additionalProperty}
                {supersededBy}
                {greaterOrEqual}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {nonEqual}
                {image}
                {description}
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
   sameAs: React.propTypes.string,
   lesserOrEqual: React.propTypes.object,
   equal: React.propTypes.object,
   name: React.propTypes.string,
   lesser: React.propTypes.object,
   url: React.propTypes.string,
   additionalProperty: React.propTypes.object,
   supersededBy: React.propTypes.object,
   greaterOrEqual: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   nonEqual: React.propTypes.object,
   image: React.propTypes.object,
   description: React.propTypes.string,
};

