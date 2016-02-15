/* Service - A service provided by an organization, e.g. delivery service, print services, etc.. Generated automatically by the reactGenerator. */
import OpeningHoursSpecification from './openinghoursspecification.js';
import GeoShape from './geoshape.js';
import OfferCatalog from './offercatalog.js';
import Thing from './thing.js';
import Review from './review.js';
import Offer from './offer.js';
import ImageObject from './imageobject.js';
import Person from './person.js';
import ServiceChannel from './servicechannel.js';
import AggregateRating from './aggregaterating.js';
import AdministrativeArea from './administrativearea.js';
import Place from './place.js';
import Organization from './organization.js';
import Action from './action.js';
import PhysicalActivityCategory from './physicalactivitycategory.js';
import CreativeWork from './creativework.js';


import React, {
  Component
} from 'react';

export default class Service extends Component {
    render() {
        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Service-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Service-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Service-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Service-image" src={this.props.image} /></div>);
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating-container'>
                       <div className='aggregateRating-header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                           return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating  {...this.props.aggregateRating} />);
            }
        }

        let serviceOutput;
        if (this.props.serviceOutput) {
            if (this.props.serviceOutput instanceof Array) {
                serviceOutput = (
                   <div className='serviceOutput-container'>
                       <div className='serviceOutput-header' data-advice='HTML for the *head* of the section'>serviceOutputs</div>
                       {this.props.serviceOutput.map((item, index) => {
                           return (<Thing key={index} {...this.props.serviceOutput} />);
                       })};
                       <div className='serviceOutput-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                serviceOutput = (<Thing  {...this.props.serviceOutput} />);
            }
        }

        let hasOfferCatalog;
        if (this.props.hasOfferCatalog) {
            if (this.props.hasOfferCatalog instanceof Array) {
                hasOfferCatalog = (
                   <div className='hasOfferCatalog-container'>
                       <div className='hasOfferCatalog-header' data-advice='HTML for the *head* of the section'>hasOfferCatalogs</div>
                       {this.props.hasOfferCatalog.map((item, index) => {
                           return (<OfferCatalog key={index} {...this.props.hasOfferCatalog} />);
                       })};
                       <div className='hasOfferCatalog-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hasOfferCatalog = (<OfferCatalog  {...this.props.hasOfferCatalog} />);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Service-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Service-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let category;
        if (this.props.category) {
            if (this.props.category instanceof Array) {
                category = (
                   <div className='category-container'>
                       <div className='category-header' data-advice='HTML for the *head* of the section'>categorys</div>
                       {this.props.category.map((item, index) => {
                           return (<div className='category' data-advice='Put your HTML here. category is a Thing or PhysicalActivityCategory or Text.'><div className="Service-category">category: {this.props.category}</div></div>);
                       })};
                       <div className='category-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                category = (<div className='category' data-advice='Put your HTML here. category is a Thing or PhysicalActivityCategory or Text.'><div className="Service-category">category: {this.props.category}</div></div>);
            }
        }

        let availableChannel;
        if (this.props.availableChannel) {
            if (this.props.availableChannel instanceof Array) {
                availableChannel = (
                   <div className='availableChannel-container'>
                       <div className='availableChannel-header' data-advice='HTML for the *head* of the section'>availableChannels</div>
                       {this.props.availableChannel.map((item, index) => {
                           return (<ServiceChannel key={index} {...this.props.availableChannel} />);
                       })};
                       <div className='availableChannel-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                availableChannel = (<ServiceChannel  {...this.props.availableChannel} />);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review-container'>
                       <div className='review-header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                           return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review  {...this.props.review} />);
            }
        }

        let offers;
        if (this.props.offers) {
            if (this.props.offers instanceof Array) {
                offers = (
                   <div className='offers-container'>
                       <div className='offers-header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                           return (<Offer key={index} {...this.props.offers} />);
                       })};
                       <div className='offers-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                offers = (<Offer  {...this.props.offers} />);
            }
        }

        let provider;
        if (this.props.provider) {
            if (this.props.provider instanceof Array) {
                provider = (
                   <div className='provider-container'>
                       <div className='provider-header' data-advice='HTML for the *head* of the section'>providers</div>
                       {this.props.provider.map((item, index) => {
                           return (<div className='provider' data-advice='Put your HTML here. provider is a Person or Organization.'><div className="Service-provider">provider: {this.props.provider}</div></div>);
                       })};
                       <div className='provider-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                provider = (<div className='provider' data-advice='Put your HTML here. provider is a Person or Organization.'><div className="Service-provider">provider: {this.props.provider}</div></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="Service-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="Service-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let serviceType;
        if (this.props.serviceType) {
            if (this.props.serviceType instanceof Array) {
                serviceType = (
                   <div className='serviceType-container'>
                       <div className='serviceType-header' data-advice='HTML for the *head* of the section'>serviceTypes</div>
                       {this.props.serviceType.map((item, index) => {
                           return (<div className='serviceType' data-advice='Put your HTML here. serviceType is a Text.'><p className="Service-serviceType">serviceType: {this.props.serviceType}</p></div>);
                       })};
                       <div className='serviceType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                serviceType = (<div className='serviceType' data-advice='Put your HTML here. serviceType is a Text.'><p className="Service-serviceType">serviceType: {this.props.serviceType}</p></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Service-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Service-description">description: {this.props.description}</p></div>);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award-container'>
                       <div className='award-header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                           return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Service-award">award: {this.props.award}</p></div>);
                       })};
                       <div className='award-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Service-award">award: {this.props.award}</p></div>);
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

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Service-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Service-alternateName">alternateName: {this.props.alternateName}</p></div>);
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

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Service-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Service-name">name: {this.props.name}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Service-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Service-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let providerMobility;
        if (this.props.providerMobility) {
            if (this.props.providerMobility instanceof Array) {
                providerMobility = (
                   <div className='providerMobility-container'>
                       <div className='providerMobility-header' data-advice='HTML for the *head* of the section'>providerMobilitys</div>
                       {this.props.providerMobility.map((item, index) => {
                           return (<div className='providerMobility' data-advice='Put your HTML here. providerMobility is a Text.'><p className="Service-providerMobility">providerMobility: {this.props.providerMobility}</p></div>);
                       })};
                       <div className='providerMobility-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                providerMobility = (<div className='providerMobility' data-advice='Put your HTML here. providerMobility is a Text.'><p className="Service-providerMobility">providerMobility: {this.props.providerMobility}</p></div>);
            }
        }

        let areaServed;
        if (this.props.areaServed) {
            if (this.props.areaServed instanceof Array) {
                areaServed = (
                   <div className='areaServed-container'>
                       <div className='areaServed-header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a AdministrativeArea or Place or Text or GeoShape.'><div className="Service-areaServed">areaServed: {this.props.areaServed}</div></div>);
                       })};
                       <div className='areaServed-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a AdministrativeArea or Place or Text or GeoShape.'><div className="Service-areaServed">areaServed: {this.props.areaServed}</div></div>);
            }
        }

        return (
            <div className='Service'>
                {sameAs}
                {image}
                {aggregateRating}
                {serviceOutput}
                {hasOfferCatalog}
                {additionalType}
                {category}
                {availableChannel}
                {review}
                {offers}
                {provider}
                {mainEntityOfPage}
                {serviceType}
                {description}
                {award}
                {hoursAvailable}
                {alternateName}
                {potentialAction}
                {name}
                {url}
                {providerMobility}
                {areaServed}
            </div>
        );
    }
};

Service.defaultProps = {
};

Service.propTypes = {
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   serviceOutput: React.propTypes.object,
   hasOfferCatalog: React.propTypes.object,
   additionalType: React.propTypes.string,
   category: React.propTypes.object,
   availableChannel: React.propTypes.object,
   review: React.propTypes.object,
   offers: React.propTypes.object,
   provider: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   serviceType: React.propTypes.string,
   description: React.propTypes.string,
   award: React.propTypes.string,
   hoursAvailable: React.propTypes.object,
   alternateName: React.propTypes.string,
   potentialAction: React.propTypes.object,
   name: React.propTypes.string,
   url: React.propTypes.string,
   providerMobility: React.propTypes.string,
   areaServed: React.propTypes.object,
};

