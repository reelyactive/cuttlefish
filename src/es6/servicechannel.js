/* ServiceChannel - A means for accessing a service, e.g. a government office location, web site, or phone number.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class ServiceChannel extends Component {
    render() {
        let serviceLocation;
        if (this.props.serviceLocation) {
            if (this.props.serviceLocation instanceof Array) {
                serviceLocation = (
                   <div className='serviceLocation__container'>
                       <div className='serviceLocation__header' data-advice='HTML for the *head* of the section'>serviceLocations</div>
                       {this.props.serviceLocation.map((item, index) => {
                            return (<Place  {...this.props.serviceLocation} />);
                       })}
                       <div className='serviceLocation__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ServiceChannel-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='servicePhone__container'>
                       <div className='servicePhone__header' data-advice='HTML for the *head* of the section'>servicePhones</div>
                       {this.props.servicePhone.map((item, index) => {
                            return (<ContactPoint  {...this.props.servicePhone} />);
                       })}
                       <div className='servicePhone__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ServiceChannel-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ServiceChannel-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ServiceChannel-image" src={this.props.image} /></div>);
               }
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ServiceChannel-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='processingTime__container'>
                       <div className='processingTime__header' data-advice='HTML for the *head* of the section'>processingTimes</div>
                       {this.props.processingTime.map((item, index) => {
                            return (<Duration  {...this.props.processingTime} />);
                       })}
                       <div className='processingTime__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ServiceChannel-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let servicePostalAddress;
        if (this.props.servicePostalAddress) {
            if (this.props.servicePostalAddress instanceof Array) {
                servicePostalAddress = (
                   <div className='servicePostalAddress__container'>
                       <div className='servicePostalAddress__header' data-advice='HTML for the *head* of the section'>servicePostalAddresss</div>
                       {this.props.servicePostalAddress.map((item, index) => {
                            return (<PostalAddress  {...this.props.servicePostalAddress} />);
                       })}
                       <div className='servicePostalAddress__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='serviceUrl__container'>
                       <div className='serviceUrl__header' data-advice='HTML for the *head* of the section'>serviceUrls</div>
                       {this.props.serviceUrl.map((item, index) => {
                            return (<div className='serviceUrl' data-advice='Put your HTML here. serviceUrl is a URL.'><a className="ServiceChannel-serviceUrl" href={this.props.serviceUrl} target="_blank">serviceUrl</a></div>);
                       })}
                       <div className='serviceUrl__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ServiceChannel-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ServiceChannel-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   <div className='providesService__container'>
                       <div className='providesService__header' data-advice='HTML for the *head* of the section'>providesServices</div>
                       {this.props.providesService.map((item, index) => {
                            return (<Service  {...this.props.providesService} />);
                       })}
                       <div className='providesService__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ServiceChannel-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='availableLanguage__container'>
                       <div className='availableLanguage__header' data-advice='HTML for the *head* of the section'>availableLanguages</div>
                       {this.props.availableLanguage.map((item, index) => {
                            return (<Language  {...this.props.availableLanguage} />);
                       })}
                       <div className='availableLanguage__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='serviceSmsNumber__container'>
                       <div className='serviceSmsNumber__header' data-advice='HTML for the *head* of the section'>serviceSmsNumbers</div>
                       {this.props.serviceSmsNumber.map((item, index) => {
                            return (<ContactPoint  {...this.props.serviceSmsNumber} />);
                       })}
                       <div className='serviceSmsNumber__footer' data-advice='HTML for the *footer* of the section'></div>
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
   serviceLocation: React.PropTypes.object,
   description: React.PropTypes.object,
   servicePhone: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   name: React.PropTypes.object,
   processingTime: React.PropTypes.object,
   url: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   servicePostalAddress: React.PropTypes.object,
   serviceUrl: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   providesService: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   availableLanguage: React.PropTypes.object,
   serviceSmsNumber: React.PropTypes.object,
};

