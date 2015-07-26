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
          inLanguage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          inLanguage = inLanguage.concat( props.inLanguage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> )
           }) );
         inLanguage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            inLanguage = ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> );
        }
      }
      var performer;
      if( props.performer ){
        if( props.performer instanceof Array ){
          performer = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          performer = performer.concat( props.performer.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. performer is a Person or
Organization.'></div> )
           }) );
         performer.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            performer = ( <div data-advice='Put your HTML here. performer is a Person or
Organization.'></div> );
        }
      }
      var endDate;
      if( props.endDate ){
        if( props.endDate instanceof Array ){
          endDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          endDate = endDate.concat( props.endDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. endDate is a Date.'></div> )
           }) );
         endDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            endDate = ( <div data-advice='Put your HTML here. endDate is a Date.'></div> );
        }
      }
      var startDate;
      if( props.startDate ){
        if( props.startDate instanceof Array ){
          startDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          startDate = startDate.concat( props.startDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. startDate is a Date.'></div> )
           }) );
         startDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            startDate = ( <div data-advice='Put your HTML here. startDate is a Date.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sameAs is a URL.'></div> )
           }) );
         sameAs.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var workPerformed;
      if( props.workPerformed ){
        if( props.workPerformed instanceof Array ){
          workPerformed = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          workPerformed = workPerformed.concat( props.workPerformed.map( function(result, index){
              return ( <CreativeWork {...result} key={index} /> )
           }) );
         workPerformed.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          workPerformed = ( <CreativeWork props={ props.workPerformed } /> );        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( <AggregateRating {...result} key={index} /> )
           }) );
         aggregateRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          typicalAgeRange = typicalAgeRange.concat( props.typicalAgeRange.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> )
           }) );
         typicalAgeRange.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            typicalAgeRange = ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> );
        }
      }
      var duration;
      if( props.duration ){
        if( props.duration instanceof Array ){
          duration = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          duration = duration.concat( props.duration.map( function(result, index){
              return ( <Duration {...result} key={index} /> )
           }) );
         duration.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          duration = ( <Duration props={ props.duration } /> );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. additionalType is a URL.'></div> )
           }) );
         additionalType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var organizer;
      if( props.organizer ){
        if( props.organizer instanceof Array ){
          organizer = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          organizer = organizer.concat( props.organizer.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. organizer is a Person or
Organization.'></div> )
           }) );
         organizer.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            organizer = ( <div data-advice='Put your HTML here. organizer is a Person or
Organization.'></div> );
        }
      }
      var doorTime;
      if( props.doorTime ){
        if( props.doorTime instanceof Array ){
          doorTime = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          doorTime = doorTime.concat( props.doorTime.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         doorTime.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          doorTime = ( <DateTime props={ props.doorTime } /> );        }
      }
      var previousStartDate;
      if( props.previousStartDate ){
        if( props.previousStartDate instanceof Array ){
          previousStartDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          previousStartDate = previousStartDate.concat( props.previousStartDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. previousStartDate is a Date.'></div> )
           }) );
         previousStartDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            previousStartDate = ( <div data-advice='Put your HTML here. previousStartDate is a Date.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          review = review.concat( props.review.map( function(result, index){
              return ( <Review {...result} key={index} /> )
           }) );
         review.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          offers = offers.concat( props.offers.map( function(result, index){
              return ( <Offer {...result} key={index} /> )
           }) );
         offers.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          offers = ( <Offer props={ props.offers } /> );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          location = location.concat( props.location.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> )
           }) );
         location.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            location = ( <div data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          image = image.concat( props.image.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> )
           }) );
         image.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var attendee;
      if( props.attendee ){
        if( props.attendee instanceof Array ){
          attendee = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          attendee = attendee.concat( props.attendee.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. attendee is a Person or
Organization.'></div> )
           }) );
         attendee.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            attendee = ( <div data-advice='Put your HTML here. attendee is a Person or
Organization.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          description = description.concat( props.description.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. description is a Text.'></div> )
           }) );
         description.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var superEvent;
      if( props.superEvent ){
        if( props.superEvent instanceof Array ){
          superEvent = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          superEvent = superEvent.concat( props.superEvent.map( function(result, index){
              return ( <Event {...result} key={index} /> )
           }) );
         superEvent.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          superEvent = ( <Event props={ props.superEvent } /> );        }
      }
      var recordedIn;
      if( props.recordedIn ){
        if( props.recordedIn instanceof Array ){
          recordedIn = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          recordedIn = recordedIn.concat( props.recordedIn.map( function(result, index){
              return ( <CreativeWork {...result} key={index} /> )
           }) );
         recordedIn.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          recordedIn = ( <CreativeWork props={ props.recordedIn } /> );        }
      }
      var subEvent;
      if( props.subEvent ){
        if( props.subEvent instanceof Array ){
          subEvent = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          subEvent = subEvent.concat( props.subEvent.map( function(result, index){
              return ( <Event {...result} key={index} /> )
           }) );
         subEvent.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          subEvent = ( <Event props={ props.subEvent } /> );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alternateName is a Text.'></div> )
           }) );
         alternateName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( <Action {...result} key={index} /> )
           }) );
         potentialAction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          name = name.concat( props.name.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. name is a Text.'></div> )
           }) );
         name.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          url = url.concat( props.url.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. url is a URL.'></div> )
           }) );
         url.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var eventStatus;
      if( props.eventStatus ){
        if( props.eventStatus instanceof Array ){
          eventStatus = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          eventStatus = eventStatus.concat( props.eventStatus.map( function(result, index){
              return ( <EventStatusType {...result} key={index} /> )
           }) );
         eventStatus.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          eventStatus = ( <EventStatusType props={ props.eventStatus } /> );        }
      }
      return (<div title='Event' className='Event entity'>
        { inLanguage }
        { performer }
        { endDate }
        { startDate }
        { sameAs }
        { workPerformed }
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
