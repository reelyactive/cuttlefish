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
                serviceLocation = (<Place key={index} {...this.props.serviceLocation} />);
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
                servicePhone = (<ContactPoint key={index} {...this.props.servicePhone} />);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ServiceChannel-image" src={this.props.image} /></div>);
                           }
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ServiceChannel-image" src={this.props.image} /></div>);
               }
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
                processingTime = (<Duration key={index} {...this.props.processingTime} />);
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
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
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
                servicePostalAddress = (<PostalAddress key={index} {...this.props.servicePostalAddress} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ServiceChannel-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ServiceChannel-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
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
                providesService = (<Service key={index} {...this.props.providesService} />);
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
                availableLanguage = (<Language key={index} {...this.props.availableLanguage} />);
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
                serviceSmsNumber = (<ContactPoint key={index} {...this.props.serviceSmsNumber} />);
            }
        }

        return (
            <div className='ServiceChannel'>
                {serviceLocation}
                {servicePhone}
                {image}
                {processingTime}
                {potentialAction}
                {servicePostalAddress}
                {mainEntityOfPage}
                {providesService}
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
   servicePhone: React.propTypes.object,
   image: React.propTypes.object,
   processingTime: React.propTypes.object,
   potentialAction: React.propTypes.object,
   servicePostalAddress: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   providesService: React.propTypes.object,
   availableLanguage: React.propTypes.object,
   serviceSmsNumber: React.propTypes.object,
};

