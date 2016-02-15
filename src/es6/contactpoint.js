/* ContactPoint - A contact point\u2014for example, a Customer Complaints department.. Generated automatically by the reactGenerator. */
import OpeningHoursSpecification from './openinghoursspecification.js';
import GeoShape from './geoshape.js';
import Language from './language.js';
import Product from './product.js';
import ImageObject from './imageobject.js';
import AdministrativeArea from './administrativearea.js';
import Place from './place.js';
import Action from './action.js';
import CreativeWork from './creativework.js';
import ContactPointOption from './contactpointoption.js';


import React, {
  Component
} from 'react';

export default class ContactPoint extends Component {
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ContactPoint-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ContactPoint-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ContactPoint-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ContactPoint-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let productSupported;
        if (this.props.productSupported) {
            if (this.props.productSupported instanceof Array) {
                productSupported = (
                   <div className='productSupported-container'>
                       <div className='productSupported-header' data-advice='HTML for the *head* of the section'>productSupporteds</div>
                       {this.props.productSupported.map((item, index) => {
                           return (<div className='productSupported' data-advice='Put your HTML here. productSupported is a Product or Text.'><div className="ContactPoint-productSupported">productSupported: {this.props.productSupported}</div></div>);
                       })};
                       <div className='productSupported-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                productSupported = (<div className='productSupported' data-advice='Put your HTML here. productSupported is a Product or Text.'><div className="ContactPoint-productSupported">productSupported: {this.props.productSupported}</div></div>);
            }
        }

        let contactOption;
        if (this.props.contactOption) {
            if (this.props.contactOption instanceof Array) {
                contactOption = (
                   <div className='contactOption-container'>
                       <div className='contactOption-header' data-advice='HTML for the *head* of the section'>contactOptions</div>
                       {this.props.contactOption.map((item, index) => {
                           return (<ContactPointOption key={index} {...this.props.contactOption} />);
                       })};
                       <div className='contactOption-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contactOption = (<ContactPointOption  {...this.props.contactOption} />);
            }
        }

        let telephone;
        if (this.props.telephone) {
            if (this.props.telephone instanceof Array) {
                telephone = (
                   <div className='telephone-container'>
                       <div className='telephone-header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                           return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="ContactPoint-telephone">telephone: {this.props.telephone}</p></div>);
                       })};
                       <div className='telephone-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                telephone = (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="ContactPoint-telephone">telephone: {this.props.telephone}</p></div>);
            }
        }

        let faxNumber;
        if (this.props.faxNumber) {
            if (this.props.faxNumber instanceof Array) {
                faxNumber = (
                   <div className='faxNumber-container'>
                       <div className='faxNumber-header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                           return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="ContactPoint-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })};
                       <div className='faxNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                faxNumber = (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="ContactPoint-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ContactPoint-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ContactPoint-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let hoursAvailable;
        if (this.props.hoursAvailable) {
            if (this.props.hoursAvailable instanceof Array) {
                hoursAvailable = (
                   <div className='hoursAvailable-container'>
                       <div className='hoursAvailable-header' data-advice='HTML for the *head* of the section'>hoursAvailables</div>
                       {this.props.hoursAvailable.map((item, index) => {
                           return (<OpeningHoursSpecification key={index} {...this.props.hoursAvailable} />);
                       })};
                       <div className='hoursAvailable-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hoursAvailable = (<OpeningHoursSpecification  {...this.props.hoursAvailable} />);
            }
        }

        let areaServed;
        if (this.props.areaServed) {
            if (this.props.areaServed instanceof Array) {
                areaServed = (
                   <div className='areaServed-container'>
                       <div className='areaServed-header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a AdministrativeArea or Place or Text or GeoShape.'><div className="ContactPoint-areaServed">areaServed: {this.props.areaServed}</div></div>);
                       })};
                       <div className='areaServed-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a AdministrativeArea or Place or Text or GeoShape.'><div className="ContactPoint-areaServed">areaServed: {this.props.areaServed}</div></div>);
            }
        }

        let contactType;
        if (this.props.contactType) {
            if (this.props.contactType instanceof Array) {
                contactType = (
                   <div className='contactType-container'>
                       <div className='contactType-header' data-advice='HTML for the *head* of the section'>contactTypes</div>
                       {this.props.contactType.map((item, index) => {
                           return (<div className='contactType' data-advice='Put your HTML here. contactType is a Text.'><p className="ContactPoint-contactType">contactType: {this.props.contactType}</p></div>);
                       })};
                       <div className='contactType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contactType = (<div className='contactType' data-advice='Put your HTML here. contactType is a Text.'><p className="ContactPoint-contactType">contactType: {this.props.contactType}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="ContactPoint-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="ContactPoint-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ContactPoint-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ContactPoint-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ContactPoint-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ContactPoint-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ContactPoint-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ContactPoint-image" src={this.props.image} /></div>);
            }
        }

        let email;
        if (this.props.email) {
            if (this.props.email instanceof Array) {
                email = (
                   <div className='email-container'>
                       <div className='email-header' data-advice='HTML for the *head* of the section'>emails</div>
                       {this.props.email.map((item, index) => {
                           return (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="ContactPoint-email">email: {this.props.email}</p></div>);
                       })};
                       <div className='email-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                email = (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="ContactPoint-email">email: {this.props.email}</p></div>);
            }
        }

        let availableLanguage;
        if (this.props.availableLanguage) {
            if (this.props.availableLanguage instanceof Array) {
                availableLanguage = (
                   <div className='availableLanguage-container'>
                       <div className='availableLanguage-header' data-advice='HTML for the *head* of the section'>availableLanguages</div>
                       {this.props.availableLanguage.map((item, index) => {
                           return (<Language key={index} {...this.props.availableLanguage} />);
                       })};
                       <div className='availableLanguage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availableLanguage = (<Language  {...this.props.availableLanguage} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ContactPoint-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ContactPoint-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='ContactPoint'>
                {potentialAction}
                {description}
                {sameAs}
                {productSupported}
                {contactOption}
                {telephone}
                {faxNumber}
                {url}
                {hoursAvailable}
                {areaServed}
                {contactType}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {image}
                {email}
                {availableLanguage}
                {name}
            </div>
        );
    }
};

ContactPoint.defaultProps = {
};

ContactPoint.propTypes = {
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   productSupported: React.propTypes.object,
   contactOption: React.propTypes.object,
   telephone: React.propTypes.string,
   faxNumber: React.propTypes.string,
   url: React.propTypes.string,
   hoursAvailable: React.propTypes.object,
   areaServed: React.propTypes.object,
   contactType: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   image: React.propTypes.object,
   email: React.propTypes.string,
   availableLanguage: React.propTypes.object,
   name: React.propTypes.string,
};

