/* Thing > Event > PublicationEvent - A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './language', './person', './broadcastservice', './offer', './imageobject', './event', './datetime', './aggregaterating', './boolean', './place', './duration', './organization', './postaladdress', './creativework', './review', './eventstatustype'], function(React, Action, Language, Person, BroadcastService, Offer, ImageObject, Event, DateTime, AggregateRating, Boolean, Place, Duration, Organization, PostalAddress, CreativeWork, Review, EventStatusType){
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
          inLanguage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.inLanguage ){
            inLanguage.push( ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> ) );
          }
        } else {
            inLanguage = ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> );
        }
      }
      var performer;
      if( props.performer ){
        if( props.performer instanceof Array ){
          performer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.performer ){
            performer.push( ( <div data-advice='Put your HTML here. performer is a Person or
Organization.'></div> ) );
          }
        } else {
            performer = ( <div data-advice='Put your HTML here. performer is a Person or
Organization.'></div> );
        }
      }
      var endDate;
      if( props.endDate ){
        if( props.endDate instanceof Array ){
          endDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.endDate ){
            endDate.push( ( <div data-advice='Put your HTML here. endDate is a Date.'></div> ) );
          }
        } else {
            endDate = ( <div data-advice='Put your HTML here. endDate is a Date.'></div> );
        }
      }
      var startDate;
      if( props.startDate ){
        if( props.startDate instanceof Array ){
          startDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.startDate ){
            startDate.push( ( <div data-advice='Put your HTML here. startDate is a Date.'></div> ) );
          }
        } else {
            startDate = ( <div data-advice='Put your HTML here. startDate is a Date.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var workPerformed;
      if( props.workPerformed ){
        if( props.workPerformed instanceof Array ){
          workPerformed = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.workPerformed ){
            workPerformed.push( ( <CreativeWork {...props.workPerformed } /> ) );          }
        } else {
          workPerformed = ( <CreativeWork props={ props.workPerformed } /> );        }
      }
      var isAccessibleForFree;
      if( props.isAccessibleForFree ){
        if( props.isAccessibleForFree instanceof Array ){
          isAccessibleForFree = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isAccessibleForFree ){
            isAccessibleForFree.push( ( <Boolean {...props.isAccessibleForFree } /> ) );          }
        } else {
          isAccessibleForFree = ( <Boolean props={ props.isAccessibleForFree } /> );        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.typicalAgeRange ){
            typicalAgeRange.push( ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> ) );
          }
        } else {
            typicalAgeRange = ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> );
        }
      }
      var duration;
      if( props.duration ){
        if( props.duration instanceof Array ){
          duration = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.duration ){
            duration.push( ( <Duration {...props.duration } /> ) );          }
        } else {
          duration = ( <Duration props={ props.duration } /> );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var organizer;
      if( props.organizer ){
        if( props.organizer instanceof Array ){
          organizer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.organizer ){
            organizer.push( ( <div data-advice='Put your HTML here. organizer is a Person or
Organization.'></div> ) );
          }
        } else {
            organizer = ( <div data-advice='Put your HTML here. organizer is a Person or
Organization.'></div> );
        }
      }
      var doorTime;
      if( props.doorTime ){
        if( props.doorTime instanceof Array ){
          doorTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.doorTime ){
            doorTime.push( ( <DateTime {...props.doorTime } /> ) );          }
        } else {
          doorTime = ( <DateTime props={ props.doorTime } /> );        }
      }
      var previousStartDate;
      if( props.previousStartDate ){
        if( props.previousStartDate instanceof Array ){
          previousStartDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.previousStartDate ){
            previousStartDate.push( ( <div data-advice='Put your HTML here. previousStartDate is a Date.'></div> ) );
          }
        } else {
            previousStartDate = ( <div data-advice='Put your HTML here. previousStartDate is a Date.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.review ){
            review.push( ( <Review {...props.review } /> ) );          }
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.offers ){
            offers.push( ( <Offer {...props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ props.offers } /> );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.location ){
            location.push( ( <div data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> ) );
          }
        } else {
            location = ( <div data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var publishedOn;
      if( props.publishedOn ){
        if( props.publishedOn instanceof Array ){
          publishedOn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.publishedOn ){
            publishedOn.push( ( <BroadcastService {...props.publishedOn } /> ) );          }
        } else {
          publishedOn = ( <BroadcastService props={ props.publishedOn } /> );        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var attendee;
      if( props.attendee ){
        if( props.attendee instanceof Array ){
          attendee = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.attendee ){
            attendee.push( ( <div data-advice='Put your HTML here. attendee is a Person or
Organization.'></div> ) );
          }
        } else {
            attendee = ( <div data-advice='Put your HTML here. attendee is a Person or
Organization.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var superEvent;
      if( props.superEvent ){
        if( props.superEvent instanceof Array ){
          superEvent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.superEvent ){
            superEvent.push( ( <Event {...props.superEvent } /> ) );          }
        } else {
          superEvent = ( <Event props={ props.superEvent } /> );        }
      }
      var recordedIn;
      if( props.recordedIn ){
        if( props.recordedIn instanceof Array ){
          recordedIn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.recordedIn ){
            recordedIn.push( ( <CreativeWork {...props.recordedIn } /> ) );          }
        } else {
          recordedIn = ( <CreativeWork props={ props.recordedIn } /> );        }
      }
      var subEvent;
      if( props.subEvent ){
        if( props.subEvent instanceof Array ){
          subEvent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.subEvent ){
            subEvent.push( ( <Event {...props.subEvent } /> ) );          }
        } else {
          subEvent = ( <Event props={ props.subEvent } /> );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var eventStatus;
      if( props.eventStatus ){
        if( props.eventStatus instanceof Array ){
          eventStatus = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.eventStatus ){
            eventStatus.push( ( <EventStatusType {...props.eventStatus } /> ) );          }
        } else {
          eventStatus = ( <EventStatusType props={ props.eventStatus } /> );        }
      }
      return (<div title='PublicationEvent' className='PublicationEvent entity'>
        { inLanguage }
        { performer }
        { endDate }
        { startDate }
        { sameAs }
        { workPerformed }
        { isAccessibleForFree }
        { aggregateRating }
        { typicalAgeRange }
        { duration }
        { additionalType }
        { organizer }
        { doorTime }
        { previousStartDate }
        { review }
        { offers }
        { location }
        { mainEntityOfPage }
        { publishedOn }
        { image }
        { attendee }
        { description }
        { superEvent }
        { recordedIn }
        { subEvent }
        { alternateName }
        { potentialAction }
        { name }
        { url }
        { eventStatus }
     </div>);
    }
  });
});
