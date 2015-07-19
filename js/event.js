/* Thing > Event - An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the 'offers' property. Repeated events may be structured as separate Event objects.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './language', './eventstatustype', './review', './offer', './imageobject', './person', './datetime', './aggregaterating', './place', './duration', './organization', './postaladdress', './creativework', './event'], function(React, Action, Language, EventStatusType, Review, Offer, ImageObject, Person, DateTime, AggregateRating, Place, Duration, Organization, PostalAddress, CreativeWork, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var inLanguage;
      if( props.inLanguage ){
        if( props.inLanguage instanceof Array ){
          inLanguage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.inLanguage ){
            inLanguage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) ) );
          }
        } else {
            inLanguage = ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) );
        }
      }
      var performer;
      if( props.performer ){
        if( props.performer instanceof Array ){
          performer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.performer ){
            performer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. performer is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            performer = ( React.createElement("div", {"data-advice": "Put your HTML here. performer is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var endDate;
      if( props.endDate ){
        if( props.endDate instanceof Array ){
          endDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.endDate ){
            endDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. endDate is a Date."}) ) );
          }
        } else {
            endDate = ( React.createElement("div", {"data-advice": "Put your HTML here. endDate is a Date."}) );
        }
      }
      var startDate;
      if( props.startDate ){
        if( props.startDate instanceof Array ){
          startDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.startDate ){
            startDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. startDate is a Date."}) ) );
          }
        } else {
            startDate = ( React.createElement("div", {"data-advice": "Put your HTML here. startDate is a Date."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var workPerformed;
      if( props.workPerformed ){
        if( props.workPerformed instanceof Array ){
          workPerformed = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.workPerformed ){
            workPerformed.push( ( React.createElement(CreativeWork, React.__spread({},  props.workPerformed )) ) );          }
        } else {
          workPerformed = ( React.createElement(CreativeWork, {props:  props.workPerformed}) );        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, React.__spread({},  props.aggregateRating )) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.typicalAgeRange ){
            typicalAgeRange.push( ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) ) );
          }
        } else {
            typicalAgeRange = ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) );
        }
      }
      var duration;
      if( props.duration ){
        if( props.duration instanceof Array ){
          duration = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.duration ){
            duration.push( ( React.createElement(Duration, React.__spread({},  props.duration )) ) );          }
        } else {
          duration = ( React.createElement(Duration, {props:  props.duration}) );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var organizer;
      if( props.organizer ){
        if( props.organizer instanceof Array ){
          organizer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.organizer ){
            organizer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. organizer is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            organizer = ( React.createElement("div", {"data-advice": "Put your HTML here. organizer is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var doorTime;
      if( props.doorTime ){
        if( props.doorTime instanceof Array ){
          doorTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.doorTime ){
            doorTime.push( ( React.createElement(DateTime, React.__spread({},  props.doorTime )) ) );          }
        } else {
          doorTime = ( React.createElement(DateTime, {props:  props.doorTime}) );        }
      }
      var previousStartDate;
      if( props.previousStartDate ){
        if( props.previousStartDate instanceof Array ){
          previousStartDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.previousStartDate ){
            previousStartDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. previousStartDate is a Date."}) ) );
          }
        } else {
            previousStartDate = ( React.createElement("div", {"data-advice": "Put your HTML here. previousStartDate is a Date."}) );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.review ){
            review.push( ( React.createElement(Review, React.__spread({},  props.review )) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.offers ){
            offers.push( ( React.createElement(Offer, React.__spread({},  props.offers )) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  props.offers}) );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.location ){
            location.push( ( React.createElement("div", {"data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) ) );
          }
        } else {
            location = ( React.createElement("div", {"data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var attendee;
      if( props.attendee ){
        if( props.attendee instanceof Array ){
          attendee = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.attendee ){
            attendee.push( ( React.createElement("div", {"data-advice": "Put your HTML here. attendee is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            attendee = ( React.createElement("div", {"data-advice": "Put your HTML here. attendee is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var superEvent;
      if( props.superEvent ){
        if( props.superEvent instanceof Array ){
          superEvent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.superEvent ){
            superEvent.push( ( React.createElement(Event, React.__spread({},  props.superEvent )) ) );          }
        } else {
          superEvent = ( React.createElement(Event, {props:  props.superEvent}) );        }
      }
      var recordedIn;
      if( props.recordedIn ){
        if( props.recordedIn instanceof Array ){
          recordedIn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.recordedIn ){
            recordedIn.push( ( React.createElement(CreativeWork, React.__spread({},  props.recordedIn )) ) );          }
        } else {
          recordedIn = ( React.createElement(CreativeWork, {props:  props.recordedIn}) );        }
      }
      var subEvent;
      if( props.subEvent ){
        if( props.subEvent instanceof Array ){
          subEvent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.subEvent ){
            subEvent.push( ( React.createElement(Event, React.__spread({},  props.subEvent )) ) );          }
        } else {
          subEvent = ( React.createElement(Event, {props:  props.subEvent}) );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var eventStatus;
      if( props.eventStatus ){
        if( props.eventStatus instanceof Array ){
          eventStatus = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.eventStatus ){
            eventStatus.push( ( React.createElement(EventStatusType, React.__spread({},  props.eventStatus )) ) );          }
        } else {
          eventStatus = ( React.createElement(EventStatusType, {props:  props.eventStatus}) );        }
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
