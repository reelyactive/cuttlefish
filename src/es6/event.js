/* Event - An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the 'offers' property. Repeated events may be structured as separate Event objects.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Language from './language.js';
import EventStatusType from './eventstatustype.js';
import Review from './review.js';
import Offer from './offer.js';
import ImageObject from './imageobject.js';
import Person from './person.js';
import AggregateRating from './aggregaterating.js';
import Place from './place.js';
import Duration from './duration.js';
import Organization from './organization.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';


import React, {
  Component
} from 'react';

export default class Event extends Component {
    render() {
        let inLanguage;
        if (this.props.inLanguage) {
            if (this.props.inLanguage instanceof Array) {
                inLanguage = (
                   <div className='inLanguage-container'>
                       <div className='inLanguage-header' data-advice='HTML for the *head* of the section'>inLanguages</div>
                       {this.props.inLanguage.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text.'><p className="Event-inLanguage">inLanguage: {this.props.inLanguage}</p></div>);
                           }
                           else if (this.props['@type'] === 'Language') {
                               return (<Language key={index} {...this.props.inLanguage} />);
                           }
                       })};
                       <div className='inLanguage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   inLanguage = (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text.'><p className="Event-inLanguage">inLanguage: {this.props.inLanguage}</p></div>);
               }
               else if (this.props['@type'] === 'Language') {
                   inLanguage = (<Language key={index} {...this.props.inLanguage} />);
               }
            }
        }

        let attendee;
        if (this.props.attendee) {
            if (this.props.attendee instanceof Array) {
                attendee = (
                   <div className='attendee-container'>
                       <div className='attendee-header' data-advice='HTML for the *head* of the section'>attendees</div>
                       {this.props.attendee.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.attendee} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.attendee} />);
                           }
                       })};
                       <div className='attendee-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   attendee = (<Person key={index} {...this.props.attendee} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   attendee = (<Organization key={index} {...this.props.attendee} />);
               }
            }
        }

        let performer;
        if (this.props.performer) {
            if (this.props.performer instanceof Array) {
                performer = (
                   <div className='performer-container'>
                       <div className='performer-header' data-advice='HTML for the *head* of the section'>performers</div>
                       {this.props.performer.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.performer} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.performer} />);
                           }
                       })};
                       <div className='performer-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   performer = (<Person key={index} {...this.props.performer} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   performer = (<Organization key={index} {...this.props.performer} />);
               }
            }
        }

        let workPerformed;
        if (this.props.workPerformed) {
            if (this.props.workPerformed instanceof Array) {
                workPerformed = (
                   <div className='workPerformed-container'>
                       <div className='workPerformed-header' data-advice='HTML for the *head* of the section'>workPerformeds</div>
                       {this.props.workPerformed.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.workPerformed} />);
                       })};
                       <div className='workPerformed-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                workPerformed = (<CreativeWork key={index} {...this.props.workPerformed} />);
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

        let superEvent;
        if (this.props.superEvent) {
            if (this.props.superEvent instanceof Array) {
                superEvent = (
                   <div className='superEvent-container'>
                       <div className='superEvent-header' data-advice='HTML for the *head* of the section'>superEvents</div>
                       {this.props.superEvent.map((item, index) => {
                            return (<Event key={index} {...this.props.superEvent} />);
                       })};
                       <div className='superEvent-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                superEvent = (<Event key={index} {...this.props.superEvent} />);
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
                review = (<Review key={index} {...this.props.review} />);
            }
        }

        let recordedIn;
        if (this.props.recordedIn) {
            if (this.props.recordedIn instanceof Array) {
                recordedIn = (
                   <div className='recordedIn-container'>
                       <div className='recordedIn-header' data-advice='HTML for the *head* of the section'>recordedIns</div>
                       {this.props.recordedIn.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.recordedIn} />);
                       })};
                       <div className='recordedIn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                recordedIn = (<CreativeWork key={index} {...this.props.recordedIn} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Event-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Event-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
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
                aggregateRating = (<AggregateRating key={index} {...this.props.aggregateRating} />);
            }
        }

        let subEvent;
        if (this.props.subEvent) {
            if (this.props.subEvent instanceof Array) {
                subEvent = (
                   <div className='subEvent-container'>
                       <div className='subEvent-header' data-advice='HTML for the *head* of the section'>subEvents</div>
                       {this.props.subEvent.map((item, index) => {
                            return (<Event key={index} {...this.props.subEvent} />);
                       })};
                       <div className='subEvent-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                subEvent = (<Event key={index} {...this.props.subEvent} />);
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
                offers = (<Offer key={index} {...this.props.offers} />);
            }
        }

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location-container'>
                       <div className='location-header' data-advice='HTML for the *head* of the section'>locations</div>
                       {this.props.location.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.location} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="Event-location">location: {this.props.location}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.location} />);
                           }
                       })};
                       <div className='location-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   location = (<Place key={index} {...this.props.location} />);
               }
               else if (this.props['@type'] === 'Text') {
                   location = (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="Event-location">location: {this.props.location}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   location = (<PostalAddress key={index} {...this.props.location} />);
               }
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Event-image" src={this.props.image} /></div>);
                           }
                           else if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Event-image" src={this.props.image} /></div>);
               }
               else if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
            }
        }

        let duration;
        if (this.props.duration) {
            if (this.props.duration instanceof Array) {
                duration = (
                   <div className='duration-container'>
                       <div className='duration-header' data-advice='HTML for the *head* of the section'>durations</div>
                       {this.props.duration.map((item, index) => {
                            return (<Duration key={index} {...this.props.duration} />);
                       })};
                       <div className='duration-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                duration = (<Duration key={index} {...this.props.duration} />);
            }
        }

        let organizer;
        if (this.props.organizer) {
            if (this.props.organizer instanceof Array) {
                organizer = (
                   <div className='organizer-container'>
                       <div className='organizer-header' data-advice='HTML for the *head* of the section'>organizers</div>
                       {this.props.organizer.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.organizer} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.organizer} />);
                           }
                       })};
                       <div className='organizer-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   organizer = (<Person key={index} {...this.props.organizer} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   organizer = (<Organization key={index} {...this.props.organizer} />);
               }
            }
        }

        let workFeatured;
        if (this.props.workFeatured) {
            if (this.props.workFeatured instanceof Array) {
                workFeatured = (
                   <div className='workFeatured-container'>
                       <div className='workFeatured-header' data-advice='HTML for the *head* of the section'>workFeatureds</div>
                       {this.props.workFeatured.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.workFeatured} />);
                       })};
                       <div className='workFeatured-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                workFeatured = (<CreativeWork key={index} {...this.props.workFeatured} />);
            }
        }

        let eventStatus;
        if (this.props.eventStatus) {
            if (this.props.eventStatus instanceof Array) {
                eventStatus = (
                   <div className='eventStatus-container'>
                       <div className='eventStatus-header' data-advice='HTML for the *head* of the section'>eventStatuss</div>
                       {this.props.eventStatus.map((item, index) => {
                            return (<EventStatusType key={index} {...this.props.eventStatus} />);
                       })};
                       <div className='eventStatus-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                eventStatus = (<EventStatusType key={index} {...this.props.eventStatus} />);
            }
        }

        return (
            <div className='Event'>
                {inLanguage}
                {attendee}
                {performer}
                {workPerformed}
                {potentialAction}
                {superEvent}
                {review}
                {recordedIn}
                {mainEntityOfPage}
                {aggregateRating}
                {subEvent}
                {offers}
                {location}
                {image}
                {duration}
                {organizer}
                {workFeatured}
                {eventStatus}
            </div>
        );
    }
};

Event.defaultProps = {
};

Event.propTypes = {
   inLanguage: React.propTypes.object,
   attendee: React.propTypes.object,
   performer: React.propTypes.object,
   workPerformed: React.propTypes.object,
   potentialAction: React.propTypes.object,
   superEvent: React.propTypes.object,
   review: React.propTypes.object,
   recordedIn: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   subEvent: React.propTypes.object,
   offers: React.propTypes.object,
   location: React.propTypes.object,
   image: React.propTypes.object,
   duration: React.propTypes.object,
   organizer: React.propTypes.object,
   workFeatured: React.propTypes.object,
   eventStatus: React.propTypes.object,
};

