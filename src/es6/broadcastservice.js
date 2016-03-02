/* BroadcastService - A delivery service through which content is provided via broadcast over the air or online.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class BroadcastService extends Component {
    render() {
        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="BroadcastService-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="BroadcastService-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let broadcastAffiliateOf;
        if (this.props.broadcastAffiliateOf) {
            if (this.props.broadcastAffiliateOf instanceof Array) {
                broadcastAffiliateOf = (
                   <div className='broadcastAffiliateOf__container'>
                       <div className='broadcastAffiliateOf__header' data-advice='HTML for the *head* of the section'>broadcastAffiliateOfs</div>
                       {this.props.broadcastAffiliateOf.map((item, index) => {
                            return (<Organization  {...this.props.broadcastAffiliateOf} />);
                       })}
                       <div className='broadcastAffiliateOf__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                broadcastAffiliateOf = (<Organization  {...this.props.broadcastAffiliateOf} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="BroadcastService-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="BroadcastService-image" src={this.props.image} /></div>);
               }
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating  {...this.props.aggregateRating} />);
                       })}
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='serviceOutput__container'>
                       <div className='serviceOutput__header' data-advice='HTML for the *head* of the section'>serviceOutputs</div>
                       {this.props.serviceOutput.map((item, index) => {
                            return (<Thing  {...this.props.serviceOutput} />);
                       })}
                       <div className='serviceOutput__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='hasOfferCatalog__container'>
                       <div className='hasOfferCatalog__header' data-advice='HTML for the *head* of the section'>hasOfferCatalogs</div>
                       {this.props.hasOfferCatalog.map((item, index) => {
                            return (<OfferCatalog  {...this.props.hasOfferCatalog} />);
                       })}
                       <div className='hasOfferCatalog__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="BroadcastService-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="BroadcastService-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let category;
        if (this.props.category) {
            if (this.props.category instanceof Array) {
                category = (
                   <div className='category__container'>
                       <div className='category__header' data-advice='HTML for the *head* of the section'>categorys</div>
                       {this.props.category.map((item, index) => {
                           if (this.props['@type'] === 'Thing') {
                               return (<Thing key={index} {...this.props.category} />);
                           }
                           else if (this.props['@type'] === 'PhysicalActivityCategory') {
                               return (<PhysicalActivityCategory key={index} {...this.props.category} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='category' data-advice='Put your HTML here. category is a Text.'><p className="BroadcastService-category">category: {this.props.category}</p></div>);
                           }
                       })}
                       <div className='category__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Thing') {
                   category = (<Thing key={index} {...this.props.category} />);
               }
               else if (this.props['@type'] === 'PhysicalActivityCategory') {
                   category = (<PhysicalActivityCategory key={index} {...this.props.category} />);
               }
               else if (this.props['@type'] === 'Text') {
                   category = (<div className='category' data-advice='Put your HTML here. category is a Text.'><p className="BroadcastService-category">category: {this.props.category}</p></div>);
               }
            }
        }

        let broadcastDisplayName;
        if (this.props.broadcastDisplayName) {
            if (this.props.broadcastDisplayName instanceof Array) {
                broadcastDisplayName = (
                   <div className='broadcastDisplayName__container'>
                       <div className='broadcastDisplayName__header' data-advice='HTML for the *head* of the section'>broadcastDisplayNames</div>
                       {this.props.broadcastDisplayName.map((item, index) => {
                            return (<div className='broadcastDisplayName' data-advice='Put your HTML here. broadcastDisplayName is a Text.'><p className="BroadcastService-broadcastDisplayName">broadcastDisplayName: {this.props.broadcastDisplayName}</p></div>);
                       })}
                       <div className='broadcastDisplayName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                broadcastDisplayName = (<div className='broadcastDisplayName' data-advice='Put your HTML here. broadcastDisplayName is a Text.'><p className="BroadcastService-broadcastDisplayName">broadcastDisplayName: {this.props.broadcastDisplayName}</p></div>);
            }
        }

        let availableChannel;
        if (this.props.availableChannel) {
            if (this.props.availableChannel instanceof Array) {
                availableChannel = (
                   <div className='availableChannel__container'>
                       <div className='availableChannel__header' data-advice='HTML for the *head* of the section'>availableChannels</div>
                       {this.props.availableChannel.map((item, index) => {
                            return (<ServiceChannel  {...this.props.availableChannel} />);
                       })}
                       <div className='availableChannel__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review  {...this.props.review} />);
                       })}
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='offers__container'>
                       <div className='offers__header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                            return (<Offer  {...this.props.offers} />);
                       })}
                       <div className='offers__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='provider__container'>
                       <div className='provider__header' data-advice='HTML for the *head* of the section'>providers</div>
                       {this.props.provider.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.provider} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.provider} />);
                           }
                       })}
                       <div className='provider__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   provider = (<Person key={index} {...this.props.provider} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   provider = (<Organization key={index} {...this.props.provider} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="BroadcastService-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="BroadcastService-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let videoFormat;
        if (this.props.videoFormat) {
            if (this.props.videoFormat instanceof Array) {
                videoFormat = (
                   <div className='videoFormat__container'>
                       <div className='videoFormat__header' data-advice='HTML for the *head* of the section'>videoFormats</div>
                       {this.props.videoFormat.map((item, index) => {
                            return (<div className='videoFormat' data-advice='Put your HTML here. videoFormat is a Text.'><p className="BroadcastService-videoFormat">videoFormat: {this.props.videoFormat}</p></div>);
                       })}
                       <div className='videoFormat__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                videoFormat = (<div className='videoFormat' data-advice='Put your HTML here. videoFormat is a Text.'><p className="BroadcastService-videoFormat">videoFormat: {this.props.videoFormat}</p></div>);
            }
        }

        let serviceType;
        if (this.props.serviceType) {
            if (this.props.serviceType instanceof Array) {
                serviceType = (
                   <div className='serviceType__container'>
                       <div className='serviceType__header' data-advice='HTML for the *head* of the section'>serviceTypes</div>
                       {this.props.serviceType.map((item, index) => {
                            return (<div className='serviceType' data-advice='Put your HTML here. serviceType is a Text.'><p className="BroadcastService-serviceType">serviceType: {this.props.serviceType}</p></div>);
                       })}
                       <div className='serviceType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                serviceType = (<div className='serviceType' data-advice='Put your HTML here. serviceType is a Text.'><p className="BroadcastService-serviceType">serviceType: {this.props.serviceType}</p></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="BroadcastService-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="BroadcastService-description">description: {this.props.description}</p></div>);
            }
        }

        let parentService;
        if (this.props.parentService) {
            if (this.props.parentService instanceof Array) {
                parentService = (
                   <div className='parentService__container'>
                       <div className='parentService__header' data-advice='HTML for the *head* of the section'>parentServices</div>
                       {this.props.parentService.map((item, index) => {
                            return (<BroadcastService  {...this.props.parentService} />);
                       })}
                       <div className='parentService__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                parentService = (<BroadcastService  {...this.props.parentService} />);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award__container'>
                       <div className='award__header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                            return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="BroadcastService-award">award: {this.props.award}</p></div>);
                       })}
                       <div className='award__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="BroadcastService-award">award: {this.props.award}</p></div>);
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

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="BroadcastService-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="BroadcastService-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="BroadcastService-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="BroadcastService-name">name: {this.props.name}</p></div>);
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

        let broadcastTimezone;
        if (this.props.broadcastTimezone) {
            if (this.props.broadcastTimezone instanceof Array) {
                broadcastTimezone = (
                   <div className='broadcastTimezone__container'>
                       <div className='broadcastTimezone__header' data-advice='HTML for the *head* of the section'>broadcastTimezones</div>
                       {this.props.broadcastTimezone.map((item, index) => {
                            return (<div className='broadcastTimezone' data-advice='Put your HTML here. broadcastTimezone is a Text.'><p className="BroadcastService-broadcastTimezone">broadcastTimezone: {this.props.broadcastTimezone}</p></div>);
                       })}
                       <div className='broadcastTimezone__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                broadcastTimezone = (<div className='broadcastTimezone' data-advice='Put your HTML here. broadcastTimezone is a Text.'><p className="BroadcastService-broadcastTimezone">broadcastTimezone: {this.props.broadcastTimezone}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="BroadcastService-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="BroadcastService-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let broadcaster;
        if (this.props.broadcaster) {
            if (this.props.broadcaster instanceof Array) {
                broadcaster = (
                   <div className='broadcaster__container'>
                       <div className='broadcaster__header' data-advice='HTML for the *head* of the section'>broadcasters</div>
                       {this.props.broadcaster.map((item, index) => {
                            return (<Organization  {...this.props.broadcaster} />);
                       })}
                       <div className='broadcaster__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                broadcaster = (<Organization  {...this.props.broadcaster} />);
            }
        }

        let providerMobility;
        if (this.props.providerMobility) {
            if (this.props.providerMobility instanceof Array) {
                providerMobility = (
                   <div className='providerMobility__container'>
                       <div className='providerMobility__header' data-advice='HTML for the *head* of the section'>providerMobilitys</div>
                       {this.props.providerMobility.map((item, index) => {
                            return (<div className='providerMobility' data-advice='Put your HTML here. providerMobility is a Text.'><p className="BroadcastService-providerMobility">providerMobility: {this.props.providerMobility}</p></div>);
                       })}
                       <div className='providerMobility__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                providerMobility = (<div className='providerMobility' data-advice='Put your HTML here. providerMobility is a Text.'><p className="BroadcastService-providerMobility">providerMobility: {this.props.providerMobility}</p></div>);
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
                               return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="BroadcastService-areaServed">areaServed: {this.props.areaServed}</p></div>);
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
                   areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="BroadcastService-areaServed">areaServed: {this.props.areaServed}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   areaServed = (<GeoShape key={index} {...this.props.areaServed} />);
               }
            }
        }

        return (
            <div className='BroadcastService'>
                {sameAs}
                {broadcastAffiliateOf}
                {image}
                {aggregateRating}
                {serviceOutput}
                {hasOfferCatalog}
                {additionalType}
                {category}
                {broadcastDisplayName}
                {availableChannel}
                {review}
                {offers}
                {provider}
                {mainEntityOfPage}
                {videoFormat}
                {serviceType}
                {description}
                {parentService}
                {award}
                {hoursAvailable}
                {alternateName}
                {name}
                {potentialAction}
                {broadcastTimezone}
                {url}
                {broadcaster}
                {providerMobility}
                {areaServed}
            </div>
        );
    }
};

BroadcastService.defaultProps = {
};

BroadcastService.propTypes = {
   sameAs: React.PropTypes.object,
   broadcastAffiliateOf: React.PropTypes.object,
   image: React.PropTypes.object,
   aggregateRating: React.PropTypes.object,
   serviceOutput: React.PropTypes.object,
   hasOfferCatalog: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   category: React.PropTypes.object,
   broadcastDisplayName: React.PropTypes.object,
   availableChannel: React.PropTypes.object,
   review: React.PropTypes.object,
   offers: React.PropTypes.object,
   provider: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   videoFormat: React.PropTypes.object,
   serviceType: React.PropTypes.object,
   description: React.PropTypes.object,
   parentService: React.PropTypes.object,
   award: React.PropTypes.object,
   hoursAvailable: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   name: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   broadcastTimezone: React.PropTypes.object,
   url: React.PropTypes.object,
   broadcaster: React.PropTypes.object,
   providerMobility: React.PropTypes.object,
   areaServed: React.PropTypes.object,
};

