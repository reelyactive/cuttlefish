/* Thing > Event - An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the 'offers' property. Repeated events may be structured as separate Event objects.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './language', './eventstatustype', './review', './offer', './imageobject', './person', './datetime', './aggregaterating', './place', './duration', './organization', './postaladdress', './creativework', './event'], function(React, Action, Language, EventStatusType, Review, Offer, ImageObject, Person, DateTime, AggregateRating, Place, Duration, Organization, PostalAddress, CreativeWork, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [(React.createElement("p", null, "inLanguage:") )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( React.createElement("div", {class: "inLanguage"}) ) );
          }
        } else {
          inLanguage = ( React.createElement("div", {class: "inLanguage"}, this.props.inLanguage) );
        }
      }
      var performer;
      if( this.props.performer ){
        if( this.props.performer instanceof Array ){
          performer = [(React.createElement("p", null, "performer:") )];
          for( i in this.props.performer ){
            performer.push( ( React.createElement("div", {class: "performer"}) ) );
          }
        } else {
          performer = ( React.createElement("div", {class: "performer"}, this.props.performer) );
        }
      }
      var endDate;
      if( this.props.endDate ){
        if( this.props.endDate instanceof Array ){
          endDate = [(React.createElement("p", null, "endDate:") )];
          for( i in this.props.endDate ){
            endDate.push( ( React.createElement("div", {class: "endDate"}) ) );
          }
        } else {
          endDate = ( React.createElement("div", {class: "endDate"}, this.props.endDate) );
        }
      }
      var startDate;
      if( this.props.startDate ){
        if( this.props.startDate instanceof Array ){
          startDate = [(React.createElement("p", null, "startDate:") )];
          for( i in this.props.startDate ){
            startDate.push( ( React.createElement("div", {class: "startDate"}) ) );
          }
        } else {
          startDate = ( React.createElement("div", {class: "startDate"}, this.props.startDate) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var workPerformed;
      if( this.props.workPerformed ){
        if( this.props.workPerformed instanceof Array ){
          workPerformed = [(React.createElement("p", null, "workPerformed:") )];
          for( i in this.props.workPerformed ){
            workPerformed.push( ( React.createElement(CreativeWork, {props:  this.props.workPerformed}) ) );          }
        } else {
          workPerformed = ( React.createElement(CreativeWork, {props:  this.props.workPerformed}) );        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(React.createElement("p", null, "aggregateRating:") )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [(React.createElement("p", null, "typicalAgeRange:") )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( React.createElement("div", {class: "typicalAgeRange"}) ) );
          }
        } else {
          typicalAgeRange = ( React.createElement("div", {class: "typicalAgeRange"}, this.props.typicalAgeRange) );
        }
      }
      var duration;
      if( this.props.duration ){
        if( this.props.duration instanceof Array ){
          duration = [(React.createElement("p", null, "duration:") )];
          for( i in this.props.duration ){
            duration.push( ( React.createElement(Duration, {props:  this.props.duration}) ) );          }
        } else {
          duration = ( React.createElement(Duration, {props:  this.props.duration}) );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var organizer;
      if( this.props.organizer ){
        if( this.props.organizer instanceof Array ){
          organizer = [(React.createElement("p", null, "organizer:") )];
          for( i in this.props.organizer ){
            organizer.push( ( React.createElement("div", {class: "organizer"}) ) );
          }
        } else {
          organizer = ( React.createElement("div", {class: "organizer"}, this.props.organizer) );
        }
      }
      var doorTime;
      if( this.props.doorTime ){
        if( this.props.doorTime instanceof Array ){
          doorTime = [(React.createElement("p", null, "doorTime:") )];
          for( i in this.props.doorTime ){
            doorTime.push( ( React.createElement(DateTime, {props:  this.props.doorTime}) ) );          }
        } else {
          doorTime = ( React.createElement(DateTime, {props:  this.props.doorTime}) );        }
      }
      var previousStartDate;
      if( this.props.previousStartDate ){
        if( this.props.previousStartDate instanceof Array ){
          previousStartDate = [(React.createElement("p", null, "previousStartDate:") )];
          for( i in this.props.previousStartDate ){
            previousStartDate.push( ( React.createElement("div", {class: "previousStartDate"}) ) );
          }
        } else {
          previousStartDate = ( React.createElement("div", {class: "previousStartDate"}, this.props.previousStartDate) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(React.createElement("p", null, "review:") )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [(React.createElement("p", null, "offers:") )];
          for( i in this.props.offers ){
            offers.push( ( React.createElement(Offer, {props:  this.props.offers}) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  this.props.offers}) );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [(React.createElement("p", null, "location:") )];
          for( i in this.props.location ){
            location.push( ( React.createElement("div", {class: "location"}) ) );
          }
        } else {
          location = ( React.createElement("div", {class: "location"}, this.props.location) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var attendee;
      if( this.props.attendee ){
        if( this.props.attendee instanceof Array ){
          attendee = [(React.createElement("p", null, "attendee:") )];
          for( i in this.props.attendee ){
            attendee.push( ( React.createElement("div", {class: "attendee"}) ) );
          }
        } else {
          attendee = ( React.createElement("div", {class: "attendee"}, this.props.attendee) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var superEvent;
      if( this.props.superEvent ){
        if( this.props.superEvent instanceof Array ){
          superEvent = [(React.createElement("p", null, "superEvent:") )];
          for( i in this.props.superEvent ){
            superEvent.push( ( React.createElement(Event, {props:  this.props.superEvent}) ) );          }
        } else {
          superEvent = ( React.createElement(Event, {props:  this.props.superEvent}) );        }
      }
      var recordedIn;
      if( this.props.recordedIn ){
        if( this.props.recordedIn instanceof Array ){
          recordedIn = [(React.createElement("p", null, "recordedIn:") )];
          for( i in this.props.recordedIn ){
            recordedIn.push( ( React.createElement(CreativeWork, {props:  this.props.recordedIn}) ) );          }
        } else {
          recordedIn = ( React.createElement(CreativeWork, {props:  this.props.recordedIn}) );        }
      }
      var subEvent;
      if( this.props.subEvent ){
        if( this.props.subEvent instanceof Array ){
          subEvent = [(React.createElement("p", null, "subEvent:") )];
          for( i in this.props.subEvent ){
            subEvent.push( ( React.createElement(Event, {props:  this.props.subEvent}) ) );          }
        } else {
          subEvent = ( React.createElement(Event, {props:  this.props.subEvent}) );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var eventStatus;
      if( this.props.eventStatus ){
        if( this.props.eventStatus instanceof Array ){
          eventStatus = [(React.createElement("p", null, "eventStatus:") )];
          for( i in this.props.eventStatus ){
            eventStatus.push( ( React.createElement(EventStatusType, {props:  this.props.eventStatus}) ) );          }
        } else {
          eventStatus = ( React.createElement(EventStatusType, {props:  this.props.eventStatus}) );        }
      }
      return (React.createElement("div", {title: "Event", className: "Event entity"}, 
         inLanguage, 
         performer, 
         endDate, 
         startDate, 
         sameAs, 
         workPerformed, 
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
