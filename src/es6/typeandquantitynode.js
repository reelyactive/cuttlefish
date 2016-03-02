/* TypeAndQuantityNode - A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class TypeAndQuantityNode extends Component {
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

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="TypeAndQuantityNode-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="TypeAndQuantityNode-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="TypeAndQuantityNode-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="TypeAndQuantityNode-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let businessFunction;
        if (this.props.businessFunction) {
            if (this.props.businessFunction instanceof Array) {
                businessFunction = (
                   <div className='businessFunction__container'>
                       <div className='businessFunction__header' data-advice='HTML for the *head* of the section'>businessFunctions</div>
                       {this.props.businessFunction.map((item, index) => {
                            return (<BusinessFunction  {...this.props.businessFunction} />);
                       })}
                       <div className='businessFunction__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                businessFunction = (<BusinessFunction  {...this.props.businessFunction} />);
            }
        }

        let unitText;
        if (this.props.unitText) {
            if (this.props.unitText instanceof Array) {
                unitText = (
                   <div className='unitText__container'>
                       <div className='unitText__header' data-advice='HTML for the *head* of the section'>unitTexts</div>
                       {this.props.unitText.map((item, index) => {
                            return (<div className='unitText' data-advice='Put your HTML here. unitText is a Text.'><p className="TypeAndQuantityNode-unitText">unitText: {this.props.unitText}</p></div>);
                       })}
                       <div className='unitText__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                unitText = (<div className='unitText' data-advice='Put your HTML here. unitText is a Text.'><p className="TypeAndQuantityNode-unitText">unitText: {this.props.unitText}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="TypeAndQuantityNode-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="TypeAndQuantityNode-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let amountOfThisGood;
        if (this.props.amountOfThisGood) {
            if (this.props.amountOfThisGood instanceof Array) {
                amountOfThisGood = (
                   <div className='amountOfThisGood__container'>
                       <div className='amountOfThisGood__header' data-advice='HTML for the *head* of the section'>amountOfThisGoods</div>
                       {this.props.amountOfThisGood.map((item, index) => {
                            return (<div className='amountOfThisGood' data-advice='Put your HTML here. amountOfThisGood is a Number.'><p className="TypeAndQuantityNode-amountOfThisGood">amountOfThisGood: {this.props.amountOfThisGood}</p></div>);
                       })}
                       <div className='amountOfThisGood__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                amountOfThisGood = (<div className='amountOfThisGood' data-advice='Put your HTML here. amountOfThisGood is a Number.'><p className="TypeAndQuantityNode-amountOfThisGood">amountOfThisGood: {this.props.amountOfThisGood}</p></div>);
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
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text.'><p className="TypeAndQuantityNode-unitCode">unitCode: {this.props.unitCode}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a URL.'><a className="TypeAndQuantityNode-unitCode" href={this.props.unitCode} target="_blank">unitCode</a></div>);
                           }
                       })}
                       <div className='unitCode__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="TypeAndQuantityNode-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="TypeAndQuantityNode-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="TypeAndQuantityNode-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="TypeAndQuantityNode-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="TypeAndQuantityNode-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="TypeAndQuantityNode-alternateName">alternateName: {this.props.alternateName}</p></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="TypeAndQuantityNode-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="TypeAndQuantityNode-image" src={this.props.image} /></div>);
               }
            }
        }

        let typeOfGood;
        if (this.props.typeOfGood) {
            if (this.props.typeOfGood instanceof Array) {
                typeOfGood = (
                   <div className='typeOfGood__container'>
                       <div className='typeOfGood__header' data-advice='HTML for the *head* of the section'>typeOfGoods</div>
                       {this.props.typeOfGood.map((item, index) => {
                            return (<Product  {...this.props.typeOfGood} />);
                       })}
                       <div className='typeOfGood__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                typeOfGood = (<Product  {...this.props.typeOfGood} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="TypeAndQuantityNode-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="TypeAndQuantityNode-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='TypeAndQuantityNode'>
                {potentialAction}
                {description}
                {sameAs}
                {businessFunction}
                {unitText}
                {url}
                {amountOfThisGood}
                {unitCode}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {image}
                {typeOfGood}
                {name}
            </div>
        );
    }
};

TypeAndQuantityNode.defaultProps = {
};

TypeAndQuantityNode.propTypes = {
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   businessFunction: React.PropTypes.object,
   unitText: React.PropTypes.object,
   url: React.PropTypes.object,
   amountOfThisGood: React.PropTypes.object,
   unitCode: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   image: React.PropTypes.object,
   typeOfGood: React.PropTypes.object,
   name: React.PropTypes.object,
};

