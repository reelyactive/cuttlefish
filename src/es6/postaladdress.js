/* PostalAddress - The mailing address.. Generated automatically by the reactGenerator. */
import OpeningHoursSpecification from './openinghoursspecification.js';
import GeoShape from './geoshape.js';
import Language from './language.js';
import Country from './country.js';
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

export default class PostalAddress extends Component {
    render() {
        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
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
                               return (<div className='productSupported' data-advice='Put your HTML here. productSupported is a Text.'><p className="PostalAddress-productSupported">productSupported: {this.props.productSupported}</p></div>);
                           }
                       })};
                       <div className='productSupported__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Product') {
                   productSupported = (<Product key={index} {...this.props.productSupported} />);
               }
               else if (this.props['@type'] === 'Text') {
                   productSupported = (<div className='productSupported' data-advice='Put your HTML here. productSupported is a Text.'><p className="PostalAddress-productSupported">productSupported: {this.props.productSupported}</p></div>);
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
                            return (<ContactPointOption key={index} {...this.props.contactOption} />);
                       })};
                       <div className='contactOption__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contactOption = (<ContactPointOption key={index} {...this.props.contactOption} />);
            }
        }

        let addressCountry;
        if (this.props.addressCountry) {
            if (this.props.addressCountry instanceof Array) {
                addressCountry = (
                   <div className='addressCountry__container'>
                       <div className='addressCountry__header' data-advice='HTML for the *head* of the section'>addressCountrys</div>
                       {this.props.addressCountry.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text.'><p className="PostalAddress-addressCountry">addressCountry: {this.props.addressCountry}</p></div>);
                           }
                           else if (this.props['@type'] === 'Country') {
                               return (<Country key={index} {...this.props.addressCountry} />);
                           }
                       })};
                       <div className='addressCountry__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   addressCountry = (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text.'><p className="PostalAddress-addressCountry">addressCountry: {this.props.addressCountry}</p></div>);
               }
               else if (this.props['@type'] === 'Country') {
                   addressCountry = (<Country key={index} {...this.props.addressCountry} />);
               }
            }
        }

        let hoursAvailable;
        if (this.props.hoursAvailable) {
            if (this.props.hoursAvailable instanceof Array) {
                hoursAvailable = (
                   <div className='hoursAvailable__container'>
                       <div className='hoursAvailable__header' data-advice='HTML for the *head* of the section'>hoursAvailables</div>
                       {this.props.hoursAvailable.map((item, index) => {
                            return (<OpeningHoursSpecification key={index} {...this.props.hoursAvailable} />);
                       })};
                       <div className='hoursAvailable__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hoursAvailable = (<OpeningHoursSpecification key={index} {...this.props.hoursAvailable} />);
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
                               return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="PostalAddress-areaServed">areaServed: {this.props.areaServed}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.areaServed} />);
                           }
                       })};
                       <div className='areaServed__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="PostalAddress-areaServed">areaServed: {this.props.areaServed}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   areaServed = (<GeoShape key={index} {...this.props.areaServed} />);
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
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="PostalAddress-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="PostalAddress-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="PostalAddress-image" src={this.props.image} /></div>);
                           }
                       })};
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="PostalAddress-image" src={this.props.image} /></div>);
               }
            }
        }

        let availableLanguage;
        if (this.props.availableLanguage) {
            if (this.props.availableLanguage instanceof Array) {
                availableLanguage = (
                   <div className='availableLanguage__container'>
                       <div className='availableLanguage__header' data-advice='HTML for the *head* of the section'>availableLanguages</div>
                       {this.props.availableLanguage.map((item, index) => {
                            return (<Language key={index} {...this.props.availableLanguage} />);
                       })};
                       <div className='availableLanguage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availableLanguage = (<Language key={index} {...this.props.availableLanguage} />);
            }
        }

        return (
            <div className='PostalAddress'>
                {potentialAction}
                {productSupported}
                {contactOption}
                {addressCountry}
                {hoursAvailable}
                {areaServed}
                {mainEntityOfPage}
                {image}
                {availableLanguage}
            </div>
        );
    }
};

PostalAddress.defaultProps = {
};

PostalAddress.propTypes = {
   potentialAction: React.propTypes.object,
   productSupported: React.propTypes.object,
   contactOption: React.propTypes.object,
   addressCountry: React.propTypes.object,
   hoursAvailable: React.propTypes.object,
   areaServed: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   availableLanguage: React.propTypes.object,
};

