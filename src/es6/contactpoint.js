/* ContactPoint - A contact point\u2014for example, a Customer Complaints department.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class ContactPoint extends Component {
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ContactPoint-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ContactPoint-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='productSupported__container'>
                       <div className='productSupported__header' data-advice='HTML for the *head* of the section'>productSupporteds</div>
                       {this.props.productSupported.map((item, index) => {
                           if (this.props['@type'] === 'Product') {
                               return (<Product key={index} {...this.props.productSupported} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='productSupported' data-advice='Put your HTML here. productSupported is a Text.'><p className="ContactPoint-productSupported">productSupported: {this.props.productSupported}</p></div>);
                           }
                       })}
                       <div className='productSupported__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Product') {
                   productSupported = (<Product key={index} {...this.props.productSupported} />);
               }
               else if (this.props['@type'] === 'Text') {
                   productSupported = (<div className='productSupported' data-advice='Put your HTML here. productSupported is a Text.'><p className="ContactPoint-productSupported">productSupported: {this.props.productSupported}</p></div>);
               }
            }
        }

        let contactOption;
        if (this.props.contactOption) {
            if (this.props.contactOption instanceof Array) {
                contactOption = (
                   <div className='contactOption__container'>
                       <div className='contactOption__header' data-advice='HTML for the *head* of the section'>contactOptions</div>
                       {this.props.contactOption.map((item, index) => {
                            return (<ContactPointOption  {...this.props.contactOption} />);
                       })}
                       <div className='contactOption__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='telephone__container'>
                       <div className='telephone__header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                            return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="ContactPoint-telephone">telephone: {this.props.telephone}</p></div>);
                       })}
                       <div className='telephone__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='faxNumber__container'>
                       <div className='faxNumber__header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                            return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="ContactPoint-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })}
                       <div className='faxNumber__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ContactPoint-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='hoursAvailable__container'>
                       <div className='hoursAvailable__header' data-advice='HTML for the *head* of the section'>hoursAvailables</div>
                       {this.props.hoursAvailable.map((item, index) => {
                            return (<OpeningHoursSpecification  {...this.props.hoursAvailable} />);
                       })}
                       <div className='hoursAvailable__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='areaServed__container'>
                       <div className='areaServed__header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           if (this.props['@type'] === 'AdministrativeArea') {
                               return (<AdministrativeArea key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="ContactPoint-areaServed">areaServed: {this.props.areaServed}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.areaServed} />);
                           }
                       })}
                       <div className='areaServed__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'AdministrativeArea') {
                   areaServed = (<AdministrativeArea key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Place') {
                   areaServed = (<Place key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Text') {
                   areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="ContactPoint-areaServed">areaServed: {this.props.areaServed}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   areaServed = (<GeoShape key={index} {...this.props.areaServed} />);
               }
            }
        }

        let contactType;
        if (this.props.contactType) {
            if (this.props.contactType instanceof Array) {
                contactType = (
                   <div className='contactType__container'>
                       <div className='contactType__header' data-advice='HTML for the *head* of the section'>contactTypes</div>
                       {this.props.contactType.map((item, index) => {
                            return (<div className='contactType' data-advice='Put your HTML here. contactType is a Text.'><p className="ContactPoint-contactType">contactType: {this.props.contactType}</p></div>);
                       })}
                       <div className='contactType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ContactPoint-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ContactPoint-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ContactPoint-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ContactPoint-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ContactPoint-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ContactPoint-image" src={this.props.image} /></div>);
               }
            }
        }

        let email;
        if (this.props.email) {
            if (this.props.email instanceof Array) {
                email = (
                   <div className='email__container'>
                       <div className='email__header' data-advice='HTML for the *head* of the section'>emails</div>
                       {this.props.email.map((item, index) => {
                            return (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="ContactPoint-email">email: {this.props.email}</p></div>);
                       })}
                       <div className='email__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ContactPoint-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   productSupported: React.PropTypes.object,
   contactOption: React.PropTypes.object,
   telephone: React.PropTypes.object,
   faxNumber: React.PropTypes.object,
   url: React.PropTypes.object,
   hoursAvailable: React.PropTypes.object,
   areaServed: React.PropTypes.object,
   contactType: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   image: React.PropTypes.object,
   email: React.PropTypes.object,
   availableLanguage: React.PropTypes.object,
   name: React.PropTypes.object,
};

