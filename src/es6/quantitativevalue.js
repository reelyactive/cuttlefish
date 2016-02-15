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
                           return (<div className='valueReference' data-advice='Put your HTML here. valueReference is a Enumeration or StructuredValue or PropertyValue or QualitativeValue or QuantitativeValue.'><div className="QuantitativeValue-valueReference">valueReference: {this.props.valueReference}</div></div>);
                       })};
                       <div className='valueReference-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                valueReference = (<div className='valueReference' data-advice='Put your HTML here. valueReference is a Enumeration or StructuredValue or PropertyValue or QualitativeValue or QuantitativeValue.'><div className="QuantitativeValue-valueReference">valueReference: {this.props.valueReference}</div></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="QuantitativeValue-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="QuantitativeValue-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="QuantitativeValue-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="QuantitativeValue-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="QuantitativeValue-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="QuantitativeValue-image" src={this.props.image} /></div>);
            }
        }

        let maxValue;
        if (this.props.maxValue) {
            if (this.props.maxValue instanceof Array) {
                maxValue = (
                   <div className='maxValue-container'>
                       <div className='maxValue-header' data-advice='HTML for the *head* of the section'>maxValues</div>
                       {this.props.maxValue.map((item, index) => {
                           return (<div className='maxValue' data-advice='Put your HTML here. maxValue is a Number.'><p className="QuantitativeValue-maxValue">maxValue: {this.props.maxValue}</p></div>);
                       })};
                       <div className='maxValue-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                maxValue = (<div className='maxValue' data-advice='Put your HTML here. maxValue is a Number.'><p className="QuantitativeValue-maxValue">maxValue: {this.props.maxValue}</p></div>);
            }
        }

        let value;
        if (this.props.value) {
            if (this.props.value instanceof Array) {
                value = (
                   <div className='value-container'>
                       <div className='value-header' data-advice='HTML for the *head* of the section'>values</div>
                       {this.props.value.map((item, index) => {
                           return (<div className='value' data-advice='Put your HTML here. value is a StructuredValue or Text or Number or Boolean.'><div className="QuantitativeValue-value">value: {this.props.value}</div></div>);
                       })};
                       <div className='value-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                value = (<div className='value' data-advice='Put your HTML here. value is a StructuredValue or Text or Number or Boolean.'><div className="QuantitativeValue-value">value: {this.props.value}</div></div>);
            }
        }

        let minValue;
        if (this.props.minValue) {
            if (this.props.minValue instanceof Array) {
                minValue = (
                   <div className='minValue-container'>
                       <div className='minValue-header' data-advice='HTML for the *head* of the section'>minValues</div>
                       {this.props.minValue.map((item, index) => {
                           return (<div className='minValue' data-advice='Put your HTML here. minValue is a Number.'><p className="QuantitativeValue-minValue">minValue: {this.props.minValue}</p></div>);
                       })};
                       <div className='minValue-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                minValue = (<div className='minValue' data-advice='Put your HTML here. minValue is a Number.'><p className="QuantitativeValue-minValue">minValue: {this.props.minValue}</p></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="QuantitativeValue-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="QuantitativeValue-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="QuantitativeValue-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="QuantitativeValue-url" href={this.props.url} target="_blank">url</a></div>);
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

        let unitText;
        if (this.props.unitText) {
            if (this.props.unitText instanceof Array) {
                unitText = (
                   <div className='unitText-container'>
                       <div className='unitText-header' data-advice='HTML for the *head* of the section'>unitTexts</div>
                       {this.props.unitText.map((item, index) => {
                           return (<div className='unitText' data-advice='Put your HTML here. unitText is a Text.'><p className="QuantitativeValue-unitText">unitText: {this.props.unitText}</p></div>);
                       })};
                       <div className='unitText-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                unitText = (<div className='unitText' data-advice='Put your HTML here. unitText is a Text.'><p className="QuantitativeValue-unitText">unitText: {this.props.unitText}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="QuantitativeValue-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="QuantitativeValue-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let unitCode;
        if (this.props.unitCode) {
            if (this.props.unitCode instanceof Array) {
                unitCode = (
                   <div className='unitCode-container'>
                       <div className='unitCode-header' data-advice='HTML for the *head* of the section'>unitCodes</div>
                       {this.props.unitCode.map((item, index) => {
                           return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text or URL.'><div className="QuantitativeValue-unitCode">unitCode: {this.props.unitCode}</div></div>);
                       })};
                       <div className='unitCode-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                unitCode = (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text or URL.'><div className="QuantitativeValue-unitCode">unitCode: {this.props.unitCode}</div></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="QuantitativeValue-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="QuantitativeValue-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="QuantitativeValue-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="QuantitativeValue-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='QuantitativeValue'>
                {potentialAction}
                {valueReference}
                {description}
                {sameAs}
                {image}
                {maxValue}
                {value}
                {minValue}
                {additionalType}
                {url}
                {additionalProperty}
                {unitText}
                {mainEntityOfPage}
                {unitCode}
                {alternateName}
                {name}
            </div>
        );
    }
};

QuantitativeValue.defaultProps = {
};

QuantitativeValue.propTypes = {
   potentialAction: React.propTypes.object,
   valueReference: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   maxValue: React.propTypes.number,
   value: React.propTypes.object,
   minValue: React.propTypes.number,
   additionalType: React.propTypes.string,
   url: React.propTypes.string,
   additionalProperty: React.propTypes.object,
   unitText: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   unitCode: React.propTypes.object,
   alternateName: React.propTypes.string,
   name: React.propTypes.string,
};

