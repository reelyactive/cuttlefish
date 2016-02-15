/* PublicationEvent - A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Language from './language.js';
import EventStatusType from './eventstatustype.js';
import BroadcastService from './broadcastservice.js';
import Offer from './offer.js';
import ImageObject from './imageobject.js';
import Person from './person.js';
import Event from './event.js';
import AggregateRating from './aggregaterating.js';
import Place from './place.js';
import Duration from './duration.js';
import Organization from './organization.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import Review from './review.js';


import React, {
  Component
} from 'react';

export default class PublicationEvent extends Component {
    render() {
        let inLanguage;
        if (this.props.inLanguage) {
            if (this.props.inLanguage instanceof Array) {
                inLanguage = (
                   <div className='inLanguage-container'>
                       <div className='inLanguage-header' data-advice='HTML for the *head* of the section'>inLanguages</div>
                       {this.props.inLanguage.map((item, index) => {
                           return (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text or Language.'><div className="PublicationEvent-inLanguage">inLanguage: {this.props.inLanguage}</div></div>);
                       })};
                       <div className='inLanguage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                inLanguage = (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text or Language.'><div className="PublicationEvent-inLanguage">inLanguage: {this.props.inLanguage}</div></div>);
            }
        }

        let performer;
        if (this.props.performer) {
            if (this.props.performer instanceof Array) {
                performer = (
                   <div className='performer-container'>
                       <div className='performer-header' data-advice='HTML for the *head* of the section'>performers</div>
                       {this.props.performer.map((item, index) => {
                           return (<div className='performer' data-advice='Put your HTML here. performer is a Person or Organization.'><div className="PublicationEvent-performer">performer: {this.props.performer}</div></div>);
                       })};
                       <div className='performer-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                performer = (<div className='performer' data-advice='Put your HTML here. performer is a Person or Organization.'><div className="PublicationEvent-performer">performer: {this.props.performer}</div></div>);
            }
        }

        let endDate;
        if (this.props.endDate) {
            if (this.props.endDate instanceof Array) {
                endDate = (
                   <div className='endDate-container'>
                       <div className='endDate-header' data-advice='HTML for the *head* of the section'>endDates</div>
                       {this.props.endDate.map((item, index) => {
                           return (<div className='endDate' data-advice='Put your HTML here. endDate is a Date.'><time className="PublicationEvent-endDate">endDate: {this.props.endDate}</time></div>);
                       })};
                       <div className='endDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                endDate = (<div className='endDate' data-advice='Put your HTML here. endDate is a Date.'><time className="PublicationEvent-endDate">endDate: {this.props.endDate}</time></div>);
            }
        }

        let startDate;
        if (this.props.startDate) {
            if (this.props.startDate instanceof Array) {
                startDate = (
                   <div className='startDate-container'>
                       <div className='startDate-header' data-advice='HTML for the *head* of the section'>startDates</div>
                       {this.props.startDate.map((item, index) => {
                           return (<div className='startDate' data-advice='Put your HTML here. startDate is a Date.'><time className="PublicationEvent-startDate">startDate: {this.props.startDate}</time></div>);
                       })};
                       <div className='startDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                startDate = (<div className='startDate' data-advice='Put your HTML here. startDate is a Date.'><time className="PublicationEvent-startDate">startDate: {this.props.startDate}</time></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="PublicationEvent-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="PublicationEvent-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="PublicationEvent-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="PublicationEvent-image" src={this.props.image} /></div>);
            }
        }

        let isAccessibleForFree;
        if (this.props.isAccessibleForFree) {
            if (this.props.isAccessibleForFree instanceof Array) {
                isAccessibleForFree = (
                   <div className='isAccessibleForFree-container'>
                       <div className='isAccessibleForFree-header' data-advice='HTML for the *head* of the section'>isAccessibleForFrees</div>
                       {this.props.isAccessibleForFree.map((item, index) => {
                           return (<div className='isAccessibleForFree' data-advice='Put your HTML here. isAccessibleForFree is a Boolean.'><div className="PublicationEvent-isAccessibleForFree">isAccessibleForFree: {this.props.isAccessibleForFree}</div></div>);
                       })};
                       <div className='isAccessibleForFree-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isAccessibleForFree = (<div className='isAccessibleForFree' data-advice='Put your HTML here. isAccessibleForFree is a Boolean.'><div className="PublicationEvent-isAccessibleForFree">isAccessibleForFree: {this.props.isAccessibleForFree}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="PublicationEvent-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="PublicationEvent-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
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

        let typicalAgeRange;
        if (this.props.typicalAgeRange) {
            if (this.props.typicalAgeRange instanceof Array) {
                typicalAgeRange = (
                   <div className='typicalAgeRange-container'>
                       <div className='typicalAgeRange-header' data-advice='HTML for the *head* of the section'>typicalAgeRanges</div>
                       {this.props.typicalAgeRange.map((item, index) => {
                           return (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="PublicationEvent-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
                       })};
                       <div className='typicalAgeRange-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                typicalAgeRange = (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="PublicationEvent-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
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
                duration = (<Duration  {...this.props.duration} />);
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
                workPerformed = (<CreativeWork  {...this.props.workPerformed} />);
            }
        }

        let organizer;
        if (this.props.organizer) {
            if (this.props.organizer instanceof Array) {
                organizer = (
                   <div className='organizer-container'>
                       <div className='organizer-header' data-advice='HTML for the *head* of the section'>organizers</div>
                       {this.props.organizer.map((item, index) => {
                           return (<div className='organizer' data-advice='Put your HTML here. organizer is a Person or Organization.'><div className="PublicationEvent-organizer">organizer: {this.props.organizer}</div></div>);
                       })};
                       <div className='organizer-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                organizer = (<div className='organizer' data-advice='Put your HTML here. organizer is a Person or Organization.'><div className="PublicationEvent-organizer">organizer: {this.props.organizer}</div></div>);
            }
        }

        let doorTime;
        if (this.props.doorTime) {
            if (this.props.doorTime instanceof Array) {
                doorTime = (
                   <div className='doorTime-container'>
                       <div className='doorTime-header' data-advice='HTML for the *head* of the section'>doorTimes</div>
                       {this.props.doorTime.map((item, index) => {
                           return (<div className='doorTime' data-advice='Put your HTML here. doorTime is a DateTime.'><time className="PublicationEvent-doorTime">doorTime: {this.props.doorTime}</time></div>);
                       })};
                       <div className='doorTime-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                doorTime = (<div className='doorTime' data-advice='Put your HTML here. doorTime is a DateTime.'><time className="PublicationEvent-doorTime">doorTime: {this.props.doorTime}</time></div>);
            }
        }

        let previousStartDate;
        if (this.props.previousStartDate) {
            if (this.props.previousStartDate instanceof Array) {
                previousStartDate = (
                   <div className='previousStartDate-container'>
                       <div className='previousStartDate-header' data-advice='HTML for the *head* of the section'>previousStartDates</div>
                       {this.props.previousStartDate.map((item, index) => {
                           return (<div className='previousStartDate' data-advice='Put your HTML here. previousStartDate is a Date.'><time className="PublicationEvent-previousStartDate">previousStartDate: {this.props.previousStartDate}</time></div>);
                       })};
                       <div className='previousStartDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                previousStartDate = (<div className='previousStartDate' data-advice='Put your HTML here. previousStartDate is a Date.'><time className="PublicationEvent-previousStartDate">previousStartDate: {this.props.previousStartDate}</time></div>);
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

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location-container'>
                       <div className='location-header' data-advice='HTML for the *head* of the section'>locations</div>
                       {this.props.location.map((item, index) => {
                           return (<div className='location' data-advice='Put your HTML here. location is a Place or Text or PostalAddress.'><div className="PublicationEvent-location">location: {this.props.location}</div></div>);
                       })};
                       <div className='location-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                location = (<div className='location' data-advice='Put your HTML here. location is a Place or Text or PostalAddress.'><div className="PublicationEvent-location">location: {this.props.location}</div></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="PublicationEvent-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="PublicationEvent-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let publishedOn;
        if (this.props.publishedOn) {
            if (this.props.publishedOn instanceof Array) {
                publishedOn = (
                   <div className='publishedOn-container'>
                       <div className='publishedOn-header' data-advice='HTML for the *head* of the section'>publishedOns</div>
                       {this.props.publishedOn.map((item, index) => {
                           return (<BroadcastService key={index} {...this.props.publishedOn} />);
                       })};
                       <div className='publishedOn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                publishedOn = (<BroadcastService  {...this.props.publishedOn} />);
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
                workFeatured = (<CreativeWork  {...this.props.workFeatured} />);
            }
        }

        let attendee;
        if (this.props.attendee) {
            if (this.props.attendee instanceof Array) {
                attendee = (
                   <div className='attendee-container'>
                       <div className='attendee-header' data-advice='HTML for the *head* of the section'>attendees</div>
                       {this.props.attendee.map((item, index) => {
                           return (<div className='attendee' data-advice='Put your HTML here. attendee is a Person or Organization.'><div className="PublicationEvent-attendee">attendee: {this.props.attendee}</div></div>);
                       })};
                       <div className='attendee-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                attendee = (<div className='attendee' data-advice='Put your HTML here. attendee is a Person or Organization.'><div className="PublicationEvent-attendee">attendee: {this.props.attendee}</div></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="PublicationEvent-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="PublicationEvent-description">description: {this.props.description}</p></div>);
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
                superEvent = (<Event  {...this.props.superEvent} />);
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
                recordedIn = (<CreativeWork  {...this.props.recordedIn} />);
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
                subEvent = (<Event  {...this.props.subEvent} />);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="PublicationEvent-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="PublicationEvent-alternateName">alternateName: {this.props.alternateName}</p></div>);
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
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="PublicationEvent-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="PublicationEvent-name">name: {this.props.name}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="PublicationEvent-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="PublicationEvent-url" href={this.props.url} target="_blank">url</a></div>);
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
                eventStatus = (<EventStatusType  {...this.props.eventStatus} />);
            }
        }

        return (
            <div className='PublicationEvent'>
                {inLanguage}
                {performer}
                {endDate}
                {startDate}
                {sameAs}
                {image}
                {isAccessibleForFree}
                {additionalType}
                {aggregateRating}
                {typicalAgeRange}
                {duration}
                {workPerformed}
                {organizer}
                {doorTime}
                {previousStartDate}
                {review}
                {offers}
                {location}
                {mainEntityOfPage}
                {publishedOn}
                {workFeatured}
                {attendee}
                {description}
                {superEvent}
                {recordedIn}
                {subEvent}
                {alternateName}
                {potentialAction}
                {name}
                {url}
                {eventStatus}
            </div>
        );
    }
};

PublicationEvent.defaultProps = {
};

PublicationEvent.propTypes = {
   inLanguage: React.propTypes.object,
   performer: React.propTypes.object,
   endDate: React.propTypes.string,
   startDate: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   isAccessibleForFree: React.propTypes.string,
   additionalType: React.propTypes.string,
   aggregateRating: React.propTypes.object,
   typicalAgeRange: React.propTypes.string,
   duration: React.propTypes.object,
   workPerformed: React.propTypes.object,
   organizer: React.propTypes.object,
   doorTime: React.propTypes.string,
   previousStartDate: React.propTypes.string,
   review: React.propTypes.object,
   offers: React.propTypes.object,
   location: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   publishedOn: React.propTypes.object,
   workFeatured: React.propTypes.object,
   attendee: React.propTypes.object,
   description: React.propTypes.string,
   superEvent: React.propTypes.object,
   recordedIn: React.propTypes.object,
   subEvent: React.propTypes.object,
   alternateName: React.propTypes.string,
   potentialAction: React.propTypes.object,
   name: React.propTypes.string,
   url: React.propTypes.string,
   eventStatus: React.propTypes.object,
};

