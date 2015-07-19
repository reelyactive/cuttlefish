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
          inLanguage = [(<p>inLanguage:</p> )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( <div class='inLanguage'></div> ) );
          }
        } else {
          inLanguage = ( <div class='inLanguage'>{this.props.inLanguage}</div> );
        }
      }
      var performer;
      if( this.props.performer ){
        if( this.props.performer instanceof Array ){
          performer = [(<p>performer:</p> )];
          for( i in this.props.performer ){
            performer.push( ( <div class='performer'></div> ) );
          }
        } else {
          performer = ( <div class='performer'>{this.props.performer}</div> );
        }
      }
      var endDate;
      if( this.props.endDate ){
        if( this.props.endDate instanceof Array ){
          endDate = [(<p>endDate:</p> )];
          for( i in this.props.endDate ){
            endDate.push( ( <div class='endDate'></div> ) );
          }
        } else {
          endDate = ( <div class='endDate'>{this.props.endDate}</div> );
        }
      }
      var startDate;
      if( this.props.startDate ){
        if( this.props.startDate instanceof Array ){
          startDate = [(<p>startDate:</p> )];
          for( i in this.props.startDate ){
            startDate.push( ( <div class='startDate'></div> ) );
          }
        } else {
          startDate = ( <div class='startDate'>{this.props.startDate}</div> );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var workPerformed;
      if( this.props.workPerformed ){
        if( this.props.workPerformed instanceof Array ){
          workPerformed = [(<p>workPerformed:</p> )];
          for( i in this.props.workPerformed ){
            workPerformed.push( ( <CreativeWork props={ this.props.workPerformed } /> ) );          }
        } else {
          workPerformed = ( <CreativeWork props={ this.props.workPerformed } /> );        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(<p>aggregateRating:</p> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating props={ this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [(<p>typicalAgeRange:</p> )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( <div class='typicalAgeRange'></div> ) );
          }
        } else {
          typicalAgeRange = ( <div class='typicalAgeRange'>{this.props.typicalAgeRange}</div> );
        }
      }
      var duration;
      if( this.props.duration ){
        if( this.props.duration instanceof Array ){
          duration = [(<p>duration:</p> )];
          for( i in this.props.duration ){
            duration.push( ( <Duration props={ this.props.duration } /> ) );          }
        } else {
          duration = ( <Duration props={ this.props.duration } /> );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var organizer;
      if( this.props.organizer ){
        if( this.props.organizer instanceof Array ){
          organizer = [(<p>organizer:</p> )];
          for( i in this.props.organizer ){
            organizer.push( ( <div class='organizer'></div> ) );
          }
        } else {
          organizer = ( <div class='organizer'>{this.props.organizer}</div> );
        }
      }
      var doorTime;
      if( this.props.doorTime ){
        if( this.props.doorTime instanceof Array ){
          doorTime = [(<p>doorTime:</p> )];
          for( i in this.props.doorTime ){
            doorTime.push( ( <DateTime props={ this.props.doorTime } /> ) );          }
        } else {
          doorTime = ( <DateTime props={ this.props.doorTime } /> );        }
      }
      var previousStartDate;
      if( this.props.previousStartDate ){
        if( this.props.previousStartDate instanceof Array ){
          previousStartDate = [(<p>previousStartDate:</p> )];
          for( i in this.props.previousStartDate ){
            previousStartDate.push( ( <div class='previousStartDate'></div> ) );
          }
        } else {
          previousStartDate = ( <div class='previousStartDate'>{this.props.previousStartDate}</div> );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(<p>review:</p> )];
          for( i in this.props.review ){
            review.push( ( <Review props={ this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [(<p>offers:</p> )];
          for( i in this.props.offers ){
            offers.push( ( <Offer props={ this.props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ this.props.offers } /> );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [(<p>location:</p> )];
          for( i in this.props.location ){
            location.push( ( <div class='location'></div> ) );
          }
        } else {
          location = ( <div class='location'>{this.props.location}</div> );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var attendee;
      if( this.props.attendee ){
        if( this.props.attendee instanceof Array ){
          attendee = [(<p>attendee:</p> )];
          for( i in this.props.attendee ){
            attendee.push( ( <div class='attendee'></div> ) );
          }
        } else {
          attendee = ( <div class='attendee'>{this.props.attendee}</div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var superEvent;
      if( this.props.superEvent ){
        if( this.props.superEvent instanceof Array ){
          superEvent = [(<p>superEvent:</p> )];
          for( i in this.props.superEvent ){
            superEvent.push( ( <Event props={ this.props.superEvent } /> ) );          }
        } else {
          superEvent = ( <Event props={ this.props.superEvent } /> );        }
      }
      var recordedIn;
      if( this.props.recordedIn ){
        if( this.props.recordedIn instanceof Array ){
          recordedIn = [(<p>recordedIn:</p> )];
          for( i in this.props.recordedIn ){
            recordedIn.push( ( <CreativeWork props={ this.props.recordedIn } /> ) );          }
        } else {
          recordedIn = ( <CreativeWork props={ this.props.recordedIn } /> );        }
      }
      var subEvent;
      if( this.props.subEvent ){
        if( this.props.subEvent instanceof Array ){
          subEvent = [(<p>subEvent:</p> )];
          for( i in this.props.subEvent ){
            subEvent.push( ( <Event props={ this.props.subEvent } /> ) );          }
        } else {
          subEvent = ( <Event props={ this.props.subEvent } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var eventStatus;
      if( this.props.eventStatus ){
        if( this.props.eventStatus instanceof Array ){
          eventStatus = [(<p>eventStatus:</p> )];
          for( i in this.props.eventStatus ){
            eventStatus.push( ( <EventStatusType props={ this.props.eventStatus } /> ) );          }
        } else {
          eventStatus = ( <EventStatusType props={ this.props.eventStatus } /> );        }
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
