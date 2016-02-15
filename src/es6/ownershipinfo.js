/* OwnershipInfo - A structured value providing information about when a certain organization or person owned a certain product.. Generated automatically by the reactGenerator. */
import Product from './product.js';
import ImageObject from './imageobject.js';
import Person from './person.js';
import Action from './action.js';
import Organization from './organization.js';
import CreativeWork from './creativework.js';


import React, {
  Component
} from 'react';

export default class OwnershipInfo extends Component {
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OwnershipInfo-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OwnershipInfo-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OwnershipInfo-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OwnershipInfo-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let ownedFrom;
        if (this.props.ownedFrom) {
            if (this.props.ownedFrom instanceof Array) {
                ownedFrom = (
                   <div className='ownedFrom-container'>
                       <div className='ownedFrom-header' data-advice='HTML for the *head* of the section'>ownedFroms</div>
                       {this.props.ownedFrom.map((item, index) => {
                           return (<div className='ownedFrom' data-advice='Put your HTML here. ownedFrom is a DateTime.'><time className="OwnershipInfo-ownedFrom">ownedFrom: {this.props.ownedFrom}</time></div>);
                       })};
                       <div className='ownedFrom-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                ownedFrom = (<div className='ownedFrom' data-advice='Put your HTML here. ownedFrom is a DateTime.'><time className="OwnershipInfo-ownedFrom">ownedFrom: {this.props.ownedFrom}</time></div>);
            }
        }

        let acquiredFrom;
        if (this.props.acquiredFrom) {
            if (this.props.acquiredFrom instanceof Array) {
                acquiredFrom = (
                   <div className='acquiredFrom-container'>
                       <div className='acquiredFrom-header' data-advice='HTML for the *head* of the section'>acquiredFroms</div>
                       {this.props.acquiredFrom.map((item, index) => {
                           return (<div className='acquiredFrom' data-advice='Put your HTML here. acquiredFrom is a Person or Organization.'><div className="OwnershipInfo-acquiredFrom">acquiredFrom: {this.props.acquiredFrom}</div></div>);
                       })};
                       <div className='acquiredFrom-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                acquiredFrom = (<div className='acquiredFrom' data-advice='Put your HTML here. acquiredFrom is a Person or Organization.'><div className="OwnershipInfo-acquiredFrom">acquiredFrom: {this.props.acquiredFrom}</div></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OwnershipInfo-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OwnershipInfo-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let ownedThrough;
        if (this.props.ownedThrough) {
            if (this.props.ownedThrough instanceof Array) {
                ownedThrough = (
                   <div className='ownedThrough-container'>
                       <div className='ownedThrough-header' data-advice='HTML for the *head* of the section'>ownedThroughs</div>
                       {this.props.ownedThrough.map((item, index) => {
                           return (<div className='ownedThrough' data-advice='Put your HTML here. ownedThrough is a DateTime.'><time className="OwnershipInfo-ownedThrough">ownedThrough: {this.props.ownedThrough}</time></div>);
                       })};
                       <div className='ownedThrough-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                ownedThrough = (<div className='ownedThrough' data-advice='Put your HTML here. ownedThrough is a DateTime.'><time className="OwnershipInfo-ownedThrough">ownedThrough: {this.props.ownedThrough}</time></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="OwnershipInfo-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="OwnershipInfo-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OwnershipInfo-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OwnershipInfo-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OwnershipInfo-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OwnershipInfo-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="OwnershipInfo-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="OwnershipInfo-image" src={this.props.image} /></div>);
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
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OwnershipInfo-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OwnershipInfo-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='OwnershipInfo'>
                {potentialAction}
                {description}
                {sameAs}
                {ownedFrom}
                {acquiredFrom}
                {url}
                {ownedThrough}
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

OwnershipInfo.defaultProps = {
};

OwnershipInfo.propTypes = {
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   ownedFrom: React.propTypes.string,
   acquiredFrom: React.propTypes.object,
   url: React.propTypes.string,
   ownedThrough: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   image: React.propTypes.object,
   typeOfGood: React.propTypes.object,
   name: React.propTypes.string,
};

