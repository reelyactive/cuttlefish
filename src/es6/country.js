/* Country - A country.. Generated automatically by the reactGenerator. */
import Map from './map.js';
import GeoShape from './geoshape.js';
import OpeningHoursSpecification from './openinghoursspecification.js';
import Photograph from './photograph.js';
import Review from './review.js';
import ImageObject from './imageobject.js';
import PropertyValue from './propertyvalue.js';
import AggregateRating from './aggregaterating.js';
import Place from './place.js';
import Action from './action.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import Event from './event.js';
import GeoCoordinates from './geocoordinates.js';


import React, {
  Component
} from 'react';

export default class Country extends Component {
    render() {
        let openingHoursSpecification;
        if (this.props.openingHoursSpecification) {
            if (this.props.openingHoursSpecification instanceof Array) {
                openingHoursSpecification = (
                   <div className='openingHoursSpecification__container'>
                       <div className='openingHoursSpecification__header' data-advice='HTML for the *head* of the section'>openingHoursSpecifications</div>
                       {this.props.openingHoursSpecification.map((item, index) => {
                            return (<OpeningHoursSpecification key={index} {...this.props.openingHoursSpecification} />);
                       })};
                       <div className='openingHoursSpecification__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                openingHoursSpecification = (<OpeningHoursSpecification key={index} {...this.props.openingHoursSpecification} />);
            }
        }

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

        let photo;
        if (this.props.photo) {
            if (this.props.photo instanceof Array) {
                photo = (
                   <div className='photo__container'>
                       <div className='photo__header' data-advice='HTML for the *head* of the section'>photos</div>
                       {this.props.photo.map((item, index) => {
                           if (this.props['@type'] === 'Photograph') {
                               return (<Photograph key={index} {...this.props.photo} />);
                           }
                           else if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.photo} />);
                           }
                       })};
                       <div className='photo__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Photograph') {
                   photo = (<Photograph key={index} {...this.props.photo} />);
               }
               else if (this.props['@type'] === 'ImageObject') {
                   photo = (<ImageObject key={index} {...this.props.photo} />);
               }
            }
        }

        let hasMap;
        if (this.props.hasMap) {
            if (this.props.hasMap instanceof Array) {
                hasMap = (
                   <div className='hasMap__container'>
                       <div className='hasMap__header' data-advice='HTML for the *head* of the section'>hasMaps</div>
                       {this.props.hasMap.map((item, index) => {
                           if (this.props['@type'] === 'Map') {
                               return (<Map key={index} {...this.props.hasMap} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='hasMap' data-advice='Put your HTML here. hasMap is a URL.'><a className="Country-hasMap" href={this.props.hasMap} target="_blank">hasMap</a></div>);
                           }
                       })};
                       <div className='hasMap__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Map') {
                   hasMap = (<Map key={index} {...this.props.hasMap} />);
               }
               else if (this.props['@type'] === 'URL') {
                   hasMap = (<div className='hasMap' data-advice='Put your HTML here. hasMap is a URL.'><a className="Country-hasMap" href={this.props.hasMap} target="_blank">hasMap</a></div>);
               }
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review key={index} {...this.props.review} />);
            }
        }

        let containedInPlace;
        if (this.props.containedInPlace) {
            if (this.props.containedInPlace instanceof Array) {
                containedInPlace = (
                   <div className='containedInPlace__container'>
                       <div className='containedInPlace__header' data-advice='HTML for the *head* of the section'>containedInPlaces</div>
                       {this.props.containedInPlace.map((item, index) => {
                            return (<Place key={index} {...this.props.containedInPlace} />);
                       })};
                       <div className='containedInPlace__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                containedInPlace = (<Place key={index} {...this.props.containedInPlace} />);
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating key={index} {...this.props.aggregateRating} />);
            }
        }

        let additionalProperty;
        if (this.props.additionalProperty) {
            if (this.props.additionalProperty instanceof Array) {
                additionalProperty = (
                   <div className='additionalProperty__container'>
                       <div className='additionalProperty__header' data-advice='HTML for the *head* of the section'>additionalPropertys</div>
                       {this.props.additionalProperty.map((item, index) => {
                            return (<PropertyValue key={index} {...this.props.additionalProperty} />);
                       })};
                       <div className='additionalProperty__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalProperty = (<PropertyValue key={index} {...this.props.additionalProperty} />);
            }
        }

        let containsPlace;
        if (this.props.containsPlace) {
            if (this.props.containsPlace instanceof Array) {
                containsPlace = (
                   <div className='containsPlace__container'>
                       <div className='containsPlace__header' data-advice='HTML for the *head* of the section'>containsPlaces</div>
                       {this.props.containsPlace.map((item, index) => {
                            return (<Place key={index} {...this.props.containsPlace} />);
                       })};
                       <div className='containsPlace__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                containsPlace = (<Place key={index} {...this.props.containsPlace} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Country-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Country-image" src={this.props.image} /></div>);
               }
            }
        }

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address__container'>
                       <div className='address__header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="Country-address">address: {this.props.address}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.address} />);
                           }
                       })};
                       <div className='address__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="Country-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
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
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Country-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Country-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let logo;
        if (this.props.logo) {
            if (this.props.logo instanceof Array) {
                logo = (
                   <div className='logo__container'>
                       <div className='logo__header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="Country-logo" href={this.props.logo} target="_blank">logo</a></div>);
                           }
                           else if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.logo} />);
                           }
                       })};
                       <div className='logo__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   logo = (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="Country-logo" href={this.props.logo} target="_blank">logo</a></div>);
               }
               else if (this.props['@type'] === 'ImageObject') {
                   logo = (<ImageObject key={index} {...this.props.logo} />);
               }
            }
        }

        let geo;
        if (this.props.geo) {
            if (this.props.geo instanceof Array) {
                geo = (
                   <div className='geo__container'>
                       <div className='geo__header' data-advice='HTML for the *head* of the section'>geos</div>
                       {this.props.geo.map((item, index) => {
                           if (this.props['@type'] === 'GeoCoordinates') {
                               return (<GeoCoordinates key={index} {...this.props.geo} />);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.geo} />);
                           }
                       })};
                       <div className='geo__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'GeoCoordinates') {
                   geo = (<GeoCoordinates key={index} {...this.props.geo} />);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   geo = (<GeoShape key={index} {...this.props.geo} />);
               }
            }
        }

        let event;
        if (this.props.event) {
            if (this.props.event instanceof Array) {
                event = (
                   <div className='event__container'>
                       <div className='event__header' data-advice='HTML for the *head* of the section'>events</div>
                       {this.props.event.map((item, index) => {
                            return (<Event key={index} {...this.props.event} />);
                       })};
                       <div className='event__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                event = (<Event key={index} {...this.props.event} />);
            }
        }

        return (
            <div className='Country'>
                {openingHoursSpecification}
                {potentialAction}
                {photo}
                {hasMap}
                {review}
                {containedInPlace}
                {aggregateRating}
                {additionalProperty}
                {containsPlace}
                {image}
                {address}
                {mainEntityOfPage}
                {logo}
                {geo}
                {event}
            </div>
        );
    }
};

Country.defaultProps = {
};

Country.propTypes = {
   openingHoursSpecification: React.propTypes.object,
   potentialAction: React.propTypes.object,
   photo: React.propTypes.object,
   hasMap: React.propTypes.object,
   review: React.propTypes.object,
   containedInPlace: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   additionalProperty: React.propTypes.object,
   containsPlace: React.propTypes.object,
   image: React.propTypes.object,
   address: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   logo: React.propTypes.object,
   geo: React.propTypes.object,
   event: React.propTypes.object,
};

