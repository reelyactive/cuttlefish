/* Event - An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the 'offers' property. Repeated events may be structured as separate Event objects.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class Event extends Component {
    render() {
        let inLanguage;
        if (this.props.inLanguage) {
            if (this.props.inLanguage instanceof Array) {
                inLanguage = (
                   <div className='inLanguage__container'>
                       <div className='inLanguage__header' data-advice='HTML for the *head* of the section'>inLanguages</div>
                       {this.props.inLanguage.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text.'><p className="Event-inLanguage">inLanguage: {this.props.inLanguage}</p></div>);
                           }
                           else if (this.props['@type'] === 'Language') {
                               return (<Language key={index} {...this.props.inLanguage} />);
                           }
                       })}
                       <div className='inLanguage__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let performer;
        if (this.props.performer) {
            if (this.props.performer instanceof Array) {
                performer = (
                   <div className='performer__container'>
                       <div className='performer__header' data-advice='HTML for the *head* of the section'>performers</div>
                       {this.props.performer.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.performer} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.performer} />);
                           }
                       })}
                       <div className='performer__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let endDate;
        if (this.props.endDate) {
            if (this.props.endDate instanceof Array) {
                endDate = (
                   <div className='endDate__container'>
                       <div className='endDate__header' data-advice='HTML for the *head* of the section'>endDates</div>
                       {this.props.endDate.map((item, index) => {
                            return (<div className='endDate' data-advice='Put your HTML here. endDate is a Date.'><time className="Event-endDate">endDate: {this.props.endDate}</time></div>);
                       })}
                       <div className='endDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                endDate = (<div className='endDate' data-advice='Put your HTML here. endDate is a Date.'><time className="Event-endDate">endDate: {this.props.endDate}</time></div>);
            }
        }

        let startDate;
        if (this.props.startDate) {
            if (this.props.startDate instanceof Array) {
                startDate = (
                   <div className='startDate__container'>
                       <div className='startDate__header' data-advice='HTML for the *head* of the section'>startDates</div>
                       {this.props.startDate.map((item, index) => {
                            return (<div className='startDate' data-advice='Put your HTML here. startDate is a Date.'><time className="Event-startDate">startDate: {this.props.startDate}</time></div>);
                       })}
                       <div className='startDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                startDate = (<div className='startDate' data-advice='Put your HTML here. startDate is a Date.'><time className="Event-startDate">startDate: {this.props.startDate}</time></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Event-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Event-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let workPerformed;
        if (this.props.workPerformed) {
            if (this.props.workPerformed instanceof Array) {
                workPerformed = (
                   <div className='workPerformed__container'>
                       <div className='workPerformed__header' data-advice='HTML for the *head* of the section'>workPerformeds</div>
                       {this.props.workPerformed.map((item, index) => {
                            return (<CreativeWork  {...this.props.workPerformed} />);
                       })}
                       <div className='workPerformed__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                workPerformed = (<CreativeWork  {...this.props.workPerformed} />);
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

        let typicalAgeRange;
        if (this.props.typicalAgeRange) {
            if (this.props.typicalAgeRange instanceof Array) {
                typicalAgeRange = (
                   <div className='typicalAgeRange__container'>
                       <div className='typicalAgeRange__header' data-advice='HTML for the *head* of the section'>typicalAgeRanges</div>
                       {this.props.typicalAgeRange.map((item, index) => {
                            return (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="Event-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
                       })}
                       <div className='typicalAgeRange__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                typicalAgeRange = (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="Event-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
            }
        }

        let duration;
        if (this.props.duration) {
            if (this.props.duration instanceof Array) {
                duration = (
                   <div className='duration__container'>
                       <div className='duration__header' data-advice='HTML for the *head* of the section'>durations</div>
                       {this.props.duration.map((item, index) => {
                            return (<Duration  {...this.props.duration} />);
                       })}
                       <div className='duration__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                duration = (<Duration  {...this.props.duration} />);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Event-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Event-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let organizer;
        if (this.props.organizer) {
            if (this.props.organizer instanceof Array) {
                organizer = (
                   <div className='organizer__container'>
                       <div className='organizer__header' data-advice='HTML for the *head* of the section'>organizers</div>
                       {this.props.organizer.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.organizer} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.organizer} />);
                           }
                       })}
                       <div className='organizer__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let doorTime;
        if (this.props.doorTime) {
            if (this.props.doorTime instanceof Array) {
                doorTime = (
                   <div className='doorTime__container'>
                       <div className='doorTime__header' data-advice='HTML for the *head* of the section'>doorTimes</div>
                       {this.props.doorTime.map((item, index) => {
                            return (<div className='doorTime' data-advice='Put your HTML here. doorTime is a DateTime.'><time className="Event-doorTime">doorTime: {this.props.doorTime}</time></div>);
                       })}
                       <div className='doorTime__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                doorTime = (<div className='doorTime' data-advice='Put your HTML here. doorTime is a DateTime.'><time className="Event-doorTime">doorTime: {this.props.doorTime}</time></div>);
            }
        }

        let previousStartDate;
        if (this.props.previousStartDate) {
            if (this.props.previousStartDate instanceof Array) {
                previousStartDate = (
                   <div className='previousStartDate__container'>
                       <div className='previousStartDate__header' data-advice='HTML for the *head* of the section'>previousStartDates</div>
                       {this.props.previousStartDate.map((item, index) => {
                            return (<div className='previousStartDate' data-advice='Put your HTML here. previousStartDate is a Date.'><time className="Event-previousStartDate">previousStartDate: {this.props.previousStartDate}</time></div>);
                       })}
                       <div className='previousStartDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                previousStartDate = (<div className='previousStartDate' data-advice='Put your HTML here. previousStartDate is a Date.'><time className="Event-previousStartDate">previousStartDate: {this.props.previousStartDate}</time></div>);
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

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location__container'>
                       <div className='location__header' data-advice='HTML for the *head* of the section'>locations</div>
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
                       })}
                       <div className='location__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Event-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Event-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let workFeatured;
        if (this.props.workFeatured) {
            if (this.props.workFeatured instanceof Array) {
                workFeatured = (
                   <div className='workFeatured__container'>
                       <div className='workFeatured__header' data-advice='HTML for the *head* of the section'>workFeatureds</div>
                       {this.props.workFeatured.map((item, index) => {
                            return (<CreativeWork  {...this.props.workFeatured} />);
                       })}
                       <div className='workFeatured__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='attendee__container'>
                       <div className='attendee__header' data-advice='HTML for the *head* of the section'>attendees</div>
                       {this.props.attendee.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.attendee} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.attendee} />);
                           }
                       })}
                       <div className='attendee__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Event-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Event-description">description: {this.props.description}</p></div>);
            }
        }

        let superEvent;
        if (this.props.superEvent) {
            if (this.props.superEvent instanceof Array) {
                superEvent = (
                   <div className='superEvent__container'>
                       <div className='superEvent__header' data-advice='HTML for the *head* of the section'>superEvents</div>
                       {this.props.superEvent.map((item, index) => {
                            return (<Event  {...this.props.superEvent} />);
                       })}
                       <div className='superEvent__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='recordedIn__container'>
                       <div className='recordedIn__header' data-advice='HTML for the *head* of the section'>recordedIns</div>
                       {this.props.recordedIn.map((item, index) => {
                            return (<CreativeWork  {...this.props.recordedIn} />);
                       })}
                       <div className='recordedIn__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='subEvent__container'>
                       <div className='subEvent__header' data-advice='HTML for the *head* of the section'>subEvents</div>
                       {this.props.subEvent.map((item, index) => {
                            return (<Event  {...this.props.subEvent} />);
                       })}
                       <div className='subEvent__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Event-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Event-alternateName">alternateName: {this.props.alternateName}</p></div>);
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

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Event-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Event-name">name: {this.props.name}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Event-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Event-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let eventStatus;
        if (this.props.eventStatus) {
            if (this.props.eventStatus instanceof Array) {
                eventStatus = (
                   <div className='eventStatus__container'>
                       <div className='eventStatus__header' data-advice='HTML for the *head* of the section'>eventStatuss</div>
                       {this.props.eventStatus.map((item, index) => {
                            return (<EventStatusType  {...this.props.eventStatus} />);
                       })}
                       <div className='eventStatus__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                eventStatus = (<EventStatusType  {...this.props.eventStatus} />);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Event-image" src={this.props.image} /></div>);
                           }
                           else if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                       })}
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>
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

        return (
            <div className='Event'>
                {inLanguage}
                {performer}
                {endDate}
                {startDate}
                {sameAs}
                {workPerformed}
                {aggregateRating}
                {typicalAgeRange}
                {duration}
                {additionalType}
                {organizer}
                {doorTime}
                {previousStartDate}
                {review}
                {offers}
                {location}
                {mainEntityOfPage}
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
                {image}
            </div>
        );
    }
};

Event.defaultProps = {
};

Event.propTypes = {
   inLanguage: React.PropTypes.object,
   performer: React.PropTypes.object,
   endDate: React.PropTypes.object,
   startDate: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   workPerformed: React.PropTypes.object,
   aggregateRating: React.PropTypes.object,
   typicalAgeRange: React.PropTypes.object,
   duration: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   organizer: React.PropTypes.object,
   doorTime: React.PropTypes.object,
   previousStartDate: React.PropTypes.object,
   review: React.PropTypes.object,
   offers: React.PropTypes.object,
   location: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   workFeatured: React.PropTypes.object,
   attendee: React.PropTypes.object,
   description: React.PropTypes.object,
   superEvent: React.PropTypes.object,
   recordedIn: React.PropTypes.object,
   subEvent: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   name: React.PropTypes.object,
   url: React.PropTypes.object,
   eventStatus: React.PropTypes.object,
   image: React.PropTypes.object,
};

