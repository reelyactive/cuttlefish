/* QuantitativeValue - A point value or interval for product characteristics and other purposes.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class QuantitativeValue extends Component {
    render() {
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

        let valueReference;
        if (this.props.valueReference) {
            if (this.props.valueReference instanceof Array) {
                valueReference = (
                   <div className='valueReference__container'>
                       <div className='valueReference__header' data-advice='HTML for the *head* of the section'>valueReferences</div>
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
                       })}
                       <div className='valueReference__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="QuantitativeValue-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="QuantitativeValue-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QuantitativeValue-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QuantitativeValue-image" src={this.props.image} /></div>);
               }
            }
        }

        let maxValue;
        if (this.props.maxValue) {
            if (this.props.maxValue instanceof Array) {
                maxValue = (
                   <div className='maxValue__container'>
                       <div className='maxValue__header' data-advice='HTML for the *head* of the section'>maxValues</div>
                       {this.props.maxValue.map((item, index) => {
                            return (<div className='maxValue' data-advice='Put your HTML here. maxValue is a Number.'><p className="QuantitativeValue-maxValue">maxValue: {this.props.maxValue}</p></div>);
                       })}
                       <div className='maxValue__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='value__container'>
                       <div className='value__header' data-advice='HTML for the *head* of the section'>values</div>
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
                       })}
                       <div className='value__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let minValue;
        if (this.props.minValue) {
            if (this.props.minValue instanceof Array) {
                minValue = (
                   <div className='minValue__container'>
                       <div className='minValue__header' data-advice='HTML for the *head* of the section'>minValues</div>
                       {this.props.minValue.map((item, index) => {
                            return (<div className='minValue' data-advice='Put your HTML here. minValue is a Number.'><p className="QuantitativeValue-minValue">minValue: {this.props.minValue}</p></div>);
                       })}
                       <div className='minValue__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="QuantitativeValue-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="QuantitativeValue-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let unitText;
        if (this.props.unitText) {
            if (this.props.unitText instanceof Array) {
                unitText = (
                   <div className='unitText__container'>
                       <div className='unitText__header' data-advice='HTML for the *head* of the section'>unitTexts</div>
                       {this.props.unitText.map((item, index) => {
                            return (<div className='unitText' data-advice='Put your HTML here. unitText is a Text.'><p className="QuantitativeValue-unitText">unitText: {this.props.unitText}</p></div>);
                       })}
                       <div className='unitText__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="QuantitativeValue-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='unitCode__container'>
                       <div className='unitCode__header' data-advice='HTML for the *head* of the section'>unitCodes</div>
                       {this.props.unitCode.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text.'><p className="QuantitativeValue-unitCode">unitCode: {this.props.unitCode}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a URL.'><a className="QuantitativeValue-unitCode" href={this.props.unitCode} target="_blank">unitCode</a></div>);
                           }
                       })}
                       <div className='unitCode__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="QuantitativeValue-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="QuantitativeValue-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
   potentialAction: React.PropTypes.object,
   valueReference: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   maxValue: React.PropTypes.object,
   value: React.PropTypes.object,
   minValue: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   url: React.PropTypes.object,
   additionalProperty: React.PropTypes.object,
   unitText: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   unitCode: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   name: React.PropTypes.object,
};

