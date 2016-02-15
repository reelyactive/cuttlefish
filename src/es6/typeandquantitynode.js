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
                potentialAction = (<Action  {...this.props.potentialAction} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="TypeAndQuantityNode-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="TypeAndQuantityNode-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='businessFunction-container'>
                       <div className='businessFunction-header' data-advice='HTML for the *head* of the section'>businessFunctions</div>
                       {this.props.businessFunction.map((item, index) => {
                           return (<BusinessFunction key={index} {...this.props.businessFunction} />);
                       })};
                       <div className='businessFunction-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='unitText-container'>
                       <div className='unitText-header' data-advice='HTML for the *head* of the section'>unitTexts</div>
                       {this.props.unitText.map((item, index) => {
                           return (<div className='unitText' data-advice='Put your HTML here. unitText is a Text.'><p className="TypeAndQuantityNode-unitText">unitText: {this.props.unitText}</p></div>);
                       })};
                       <div className='unitText-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="TypeAndQuantityNode-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='amountOfThisGood-container'>
                       <div className='amountOfThisGood-header' data-advice='HTML for the *head* of the section'>amountOfThisGoods</div>
                       {this.props.amountOfThisGood.map((item, index) => {
                           return (<div className='amountOfThisGood' data-advice='Put your HTML here. amountOfThisGood is a Number.'><p className="TypeAndQuantityNode-amountOfThisGood">amountOfThisGood: {this.props.amountOfThisGood}</p></div>);
                       })};
                       <div className='amountOfThisGood-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='unitCode-container'>
                       <div className='unitCode-header' data-advice='HTML for the *head* of the section'>unitCodes</div>
                       {this.props.unitCode.map((item, index) => {
                           return (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text or URL.'><div className="TypeAndQuantityNode-unitCode">unitCode: {this.props.unitCode}</div></div>);
                       })};
                       <div className='unitCode-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                unitCode = (<div className='unitCode' data-advice='Put your HTML here. unitCode is a Text or URL.'><div className="TypeAndQuantityNode-unitCode">unitCode: {this.props.unitCode}</div></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="TypeAndQuantityNode-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="TypeAndQuantityNode-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="TypeAndQuantityNode-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="TypeAndQuantityNode-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="TypeAndQuantityNode-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="TypeAndQuantityNode-image" src={this.props.image} /></div>);
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
                typeOfGood = (<Product  {...this.props.typeOfGood} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="TypeAndQuantityNode-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
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
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   businessFunction: React.propTypes.object,
   unitText: React.propTypes.string,
   url: React.propTypes.string,
   amountOfThisGood: React.propTypes.number,
   unitCode: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   image: React.propTypes.object,
   typeOfGood: React.propTypes.object,
   name: React.propTypes.string,
};

