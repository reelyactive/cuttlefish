/* ServiceChannel - A means for accessing a service, e.g. a government office location, web site, or phone number.. Generated automatically by the reactGenerator. */
import Language from './language.js';
import Service from './service.js';
import ImageObject from './imageobject.js';
import Action from './action.js';
import Place from './place.js';
import Duration from './duration.js';
import ContactPoint from './contactpoint.js';
import CreativeWork from './creativework.js';
import PostalAddress from './postaladdress.js';


import React, {
  Component
} from 'react';

export default class ServiceChannel extends Component {
    render() {
        let serviceLocation;
        if (this.props.serviceLocation) {
            if (this.props.serviceLocation instanceof Array) {
                serviceLocation = (
                   <div className='serviceLocation-container'>
                       <div className='serviceLocation-header' data-advice='HTML for the *head* of the section'>serviceLocations</div>
                       {this.props.serviceLocation.map((item, index) => {
                           return (<Place key={index} {...this.props.serviceLocation} />);
                       })};
                       <div className='serviceLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                serviceLocation = (<Place  {...this.props.serviceLocation} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ServiceChannel-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ServiceChannel-description">description: {this.props.description}</p></div>);
            }
        }

        let servicePhone;
        if (this.props.servicePhone) {
            if (this.props.servicePhone instanceof Array) {
                servicePhone = (
                   <div className='servicePhone-container'>
                       <div className='servicePhone-header' data-advice='HTML for the *head* of the section'>servicePhones</div>
                       {this.props.servicePhone.map((item, index) => {
                           return (<ContactPoint key={index} {...this.props.servicePhone} />);
                       })};
                       <div className='servicePhone-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                servicePhone = (<ContactPoint  {...this.props.servicePhone} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ServiceChannel-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ServiceChannel-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ServiceChannel-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ServiceChannel-image" src={this.props.image} /></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ServiceChannel-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ServiceChannel-name">name: {this.props.name}</p></div>);
            }
        }

        let processingTime;
        if (this.props.processingTime) {
            if (this.props.processingTime instanceof Array) {
                processingTime = (
                   <div className='processingTime-container'>
                       <div className='processingTime-header' data-advice='HTML for the *head* of the section'>processingTimes</div>
                       {this.props.processingTime.map((item, index) => {
                           return (<Duration key={index} {...this.props.processingTime} />);
                       })};
                       <div className='processingTime-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                processingTime = (<Duration  {...this.props.processingTime} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ServiceChannel-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ServiceChannel-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

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

        let servicePostalAddress;
        if (this.props.servicePostalAddress) {
            if (this.props.servicePostalAddress instanceof Array) {
                servicePostalAddress = (
                   <div className='servicePostalAddress-container'>
                       <div className='servicePostalAddress-header' data-advice='HTML for the *head* of the section'>servicePostalAddresss</div>
                       {this.props.servicePostalAddress.map((item, index) => {
                           return (<PostalAddress key={index} {...this.props.servicePostalAddress} />);
                       })};
                       <div className='servicePostalAddress-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                servicePostalAddress = (<PostalAddress  {...this.props.servicePostalAddress} />);
            }
        }

        let serviceUrl;
        if (this.props.serviceUrl) {
            if (this.props.serviceUrl instanceof Array) {
                serviceUrl = (
                   <div className='serviceUrl-container'>
                       <div className='serviceUrl-header' data-advice='HTML for the *head* of the section'>serviceUrls</div>
                       {this.props.serviceUrl.map((item, index) => {
                           return (<div className='serviceUrl' data-advice='Put your HTML here. serviceUrl is a URL.'><a className="ServiceChannel-serviceUrl" href={this.props.serviceUrl} target="_blank">serviceUrl</a></div>);
                       })};
                       <div className='serviceUrl-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                serviceUrl = (<div className='serviceUrl' data-advice='Put your HTML here. serviceUrl is a URL.'><a className="ServiceChannel-serviceUrl" href={this.props.serviceUrl} target="_blank">serviceUrl</a></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ServiceChannel-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ServiceChannel-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="ServiceChannel-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="ServiceChannel-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let providesService;
        if (this.props.providesService) {
            if (this.props.providesService instanceof Array) {
                providesService = (
                   <div className='providesService-container'>
                       <div className='providesService-header' data-advice='HTML for the *head* of the section'>providesServices</div>
                       {this.props.providesService.map((item, index) => {
                           return (<Service key={index} {...this.props.providesService} />);
                       })};
                       <div className='providesService-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                providesService = (<Service  {...this.props.providesService} />);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ServiceChannel-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ServiceChannel-alternateName">alternateName: {this.props.alternateName}</p></div>);
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

        let serviceSmsNumber;
        if (this.props.serviceSmsNumber) {
            if (this.props.serviceSmsNumber instanceof Array) {
                serviceSmsNumber = (
                   <div className='serviceSmsNumber-container'>
                       <div className='serviceSmsNumber-header' data-advice='HTML for the *head* of the section'>serviceSmsNumbers</div>
                       {this.props.serviceSmsNumber.map((item, index) => {
                           return (<ContactPoint key={index} {...this.props.serviceSmsNumber} />);
                       })};
                       <div className='serviceSmsNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                serviceSmsNumber = (<ContactPoint  {...this.props.serviceSmsNumber} />);
            }
        }

        return (
            <div className='ServiceChannel'>
                {serviceLocation}
                {description}
                {servicePhone}
                {sameAs}
                {image}
                {name}
                {processingTime}
                {url}
                {potentialAction}
                {servicePostalAddress}
                {serviceUrl}
                {additionalType}
                {mainEntityOfPage}
                {providesService}
                {alternateName}
                {availableLanguage}
                {serviceSmsNumber}
            </div>
        );
    }
};

ServiceChannel.defaultProps = {
};

ServiceChannel.propTypes = {
   serviceLocation: React.propTypes.object,
   description: React.propTypes.string,
   servicePhone: React.propTypes.object,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   name: React.propTypes.string,
   processingTime: React.propTypes.object,
   url: React.propTypes.string,
   potentialAction: React.propTypes.object,
   servicePostalAddress: React.propTypes.object,
   serviceUrl: React.propTypes.string,
   additionalType: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   providesService: React.propTypes.object,
   alternateName: React.propTypes.string,
   availableLanguage: React.propTypes.object,
   serviceSmsNumber: React.propTypes.object,
};

