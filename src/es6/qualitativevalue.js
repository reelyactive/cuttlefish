/* QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */
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
                       })}
                       <div className='valueReference__footer' data-advice='HTML for the *footer* of the section'></div>
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
                            return (<QualitativeValue  {...this.props.greater} />);
                       })}
                       <div className='greater__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="QualitativeValue-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='lesserOrEqual__container'>
                       <div className='lesserOrEqual__header' data-advice='HTML for the *head* of the section'>lesserOrEquals</div>
                       {this.props.lesserOrEqual.map((item, index) => {
                            return (<QualitativeValue  {...this.props.lesserOrEqual} />);
                       })}
                       <div className='lesserOrEqual__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='equal__container'>
                       <div className='equal__header' data-advice='HTML for the *head* of the section'>equals</div>
                       {this.props.equal.map((item, index) => {
                            return (<QualitativeValue  {...this.props.equal} />);
                       })}
                       <div className='equal__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="QualitativeValue-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='lesser__container'>
                       <div className='lesser__header' data-advice='HTML for the *head* of the section'>lessers</div>
                       {this.props.lesser.map((item, index) => {
                            return (<QualitativeValue  {...this.props.lesser} />);
                       })}
                       <div className='lesser__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="QualitativeValue-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                       })}
                       <div className='supersededBy__footer' data-advice='HTML for the *footer* of the section'></div>
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
                            return (<QualitativeValue  {...this.props.greaterOrEqual} />);
                       })}
                       <div className='greaterOrEqual__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="QualitativeValue-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="QualitativeValue-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="QualitativeValue-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='nonEqual__container'>
                       <div className='nonEqual__header' data-advice='HTML for the *head* of the section'>nonEquals</div>
                       {this.props.nonEqual.map((item, index) => {
                            return (<QualitativeValue  {...this.props.nonEqual} />);
                       })}
                       <div className='nonEqual__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QualitativeValue-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="QualitativeValue-image" src={this.props.image} /></div>);
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="QualitativeValue-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
   potentialAction: React.PropTypes.object,
   valueReference: React.PropTypes.object,
   greater: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   lesserOrEqual: React.PropTypes.object,
   equal: React.PropTypes.object,
   name: React.PropTypes.object,
   lesser: React.PropTypes.object,
   url: React.PropTypes.object,
   additionalProperty: React.PropTypes.object,
   supersededBy: React.PropTypes.object,
   greaterOrEqual: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   nonEqual: React.PropTypes.object,
   image: React.PropTypes.object,
   description: React.PropTypes.object,
};

