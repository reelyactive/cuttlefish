/* Thing > Event > PublicationEvent - A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './language', './person', './broadcastservice', './offer', './imageobject', './event', './datetime', './aggregaterating', './boolean', './place', './duration', './organization', './postaladdress', './creativework', './review', './eventstatustype'], function(React, Action, Language, Person, BroadcastService, Offer, ImageObject, Event, DateTime, AggregateRating, Boolean, Place, Duration, Organization, PostalAddress, CreativeWork, Review, EventStatusType){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) ) );
          }
        } else {
            inLanguage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) ) );
        }
      }
      var performer;
      if( this.props.performer ){
        if( this.props.performer instanceof Array ){
          performer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.performer ){
            performer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. performer is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            performer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. performer is a Person or" + ' ' +
"Organization."}) ) );
        }
      }
      var endDate;
      if( this.props.endDate ){
        if( this.props.endDate instanceof Array ){
          endDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.endDate ){
            endDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. endDate is a Date."}) ) );
          }
        } else {
            endDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. endDate is a Date."}) ) );
        }
      }
      var startDate;
      if( this.props.startDate ){
        if( this.props.startDate instanceof Array ){
          startDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.startDate ){
            startDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. startDate is a Date."}) ) );
          }
        } else {
            startDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. startDate is a Date."}) ) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
        }
      }
      var workPerformed;
      if( this.props.workPerformed ){
        if( this.props.workPerformed instanceof Array ){
          workPerformed = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.workPerformed ){
            workPerformed.push( ( React.createElement(CreativeWork, {props:  this.props.workPerformed}) ) );          }
        } else {
          workPerformed = ( React.createElement(CreativeWork, {props:  this.props.workPerformed}) );        }
      }
      var isAccessibleForFree;
      if( this.props.isAccessibleForFree ){
        if( this.props.isAccessibleForFree instanceof Array ){
          isAccessibleForFree = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isAccessibleForFree ){
            isAccessibleForFree.push( ( React.createElement(Boolean, {props:  this.props.isAccessibleForFree}) ) );          }
        } else {
          isAccessibleForFree = ( React.createElement(Boolean, {props:  this.props.isAccessibleForFree}) );        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) ) );
          }
        } else {
            typicalAgeRange.push( ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) ) );
        }
      }
      var duration;
      if( this.props.duration ){
        if( this.props.duration instanceof Array ){
          duration = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.duration ){
            duration.push( ( React.createElement(Duration, {props:  this.props.duration}) ) );          }
        } else {
          duration = ( React.createElement(Duration, {props:  this.props.duration}) );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
        }
      }
      var organizer;
      if( this.props.organizer ){
        if( this.props.organizer instanceof Array ){
          organizer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.organizer ){
            organizer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. organizer is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            organizer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. organizer is a Person or" + ' ' +
"Organization."}) ) );
        }
      }
      var doorTime;
      if( this.props.doorTime ){
        if( this.props.doorTime instanceof Array ){
          doorTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.doorTime ){
            doorTime.push( ( React.createElement(DateTime, {props:  this.props.doorTime}) ) );          }
        } else {
          doorTime = ( React.createElement(DateTime, {props:  this.props.doorTime}) );        }
      }
      var previousStartDate;
      if( this.props.previousStartDate ){
        if( this.props.previousStartDate instanceof Array ){
          previousStartDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.previousStartDate ){
            previousStartDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. previousStartDate is a Date."}) ) );
          }
        } else {
            previousStartDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. previousStartDate is a Date."}) ) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.offers ){
            offers.push( ( React.createElement(Offer, {props:  this.props.offers}) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  this.props.offers}) );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.location ){
            location.push( ( React.createElement("div", {"data-advice": "Put your HTML here. location is a Place or" + ' ' +
"PostalAddress."}) ) );
          }
        } else {
            location.push( ( React.createElement("div", {"data-advice": "Put your HTML here. location is a Place or" + ' ' +
"PostalAddress."}) ) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
        }
      }
      var publishedOn;
      if( this.props.publishedOn ){
        if( this.props.publishedOn instanceof Array ){
          publishedOn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.publishedOn ){
            publishedOn.push( ( React.createElement(BroadcastService, {props:  this.props.publishedOn}) ) );          }
        } else {
          publishedOn = ( React.createElement(BroadcastService, {props:  this.props.publishedOn}) );        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var attendee;
      if( this.props.attendee ){
        if( this.props.attendee instanceof Array ){
          attendee = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.attendee ){
            attendee.push( ( React.createElement("div", {"data-advice": "Put your HTML here. attendee is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            attendee.push( ( React.createElement("div", {"data-advice": "Put your HTML here. attendee is a Person or" + ' ' +
"Organization."}) ) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
        }
      }
      var superEvent;
      if( this.props.superEvent ){
        if( this.props.superEvent instanceof Array ){
          superEvent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.superEvent ){
            superEvent.push( ( React.createElement(Event, {props:  this.props.superEvent}) ) );          }
        } else {
          superEvent = ( React.createElement(Event, {props:  this.props.superEvent}) );        }
      }
      var recordedIn;
      if( this.props.recordedIn ){
        if( this.props.recordedIn instanceof Array ){
          recordedIn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.recordedIn ){
            recordedIn.push( ( React.createElement(CreativeWork, {props:  this.props.recordedIn}) ) );          }
        } else {
          recordedIn = ( React.createElement(CreativeWork, {props:  this.props.recordedIn}) );        }
      }
      var subEvent;
      if( this.props.subEvent ){
        if( this.props.subEvent instanceof Array ){
          subEvent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.subEvent ){
            subEvent.push( ( React.createElement(Event, {props:  this.props.subEvent}) ) );          }
        } else {
          subEvent = ( React.createElement(Event, {props:  this.props.subEvent}) );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var eventStatus;
      if( this.props.eventStatus ){
        if( this.props.eventStatus instanceof Array ){
          eventStatus = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.eventStatus ){
            eventStatus.push( ( React.createElement(EventStatusType, {props:  this.props.eventStatus}) ) );          }
        } else {
          eventStatus = ( React.createElement(EventStatusType, {props:  this.props.eventStatus}) );        }
      }
      return (React.createElement("div", {title: "PublicationEvent", className: "PublicationEvent entity"}, 
         inLanguage, 
         performer, 
         endDate, 
         startDate, 
         sameAs, 
         workPerformed, 
         isAccessibleForFree, 
         aggregateRating, 
         typicalAgeRange, 
         duration, 
         additionalType, 
         organizer, 
         doorTime, 
         previousStartDate, 
         review, 
         offers, 
         location, 
         mainEntityOfPage, 
         publishedOn, 
         image, 
         attendee, 
         description, 
         superEvent, 
         recordedIn, 
         subEvent, 
         alternateName, 
         potentialAction, 
         name, 
         url, 
         eventStatus 
     ));
    }
  });
});
