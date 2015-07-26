/* Thing > Event - An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the 'offers' property. Repeated events may be structured as separate Event objects.. Generated automatically by the reactGenerator. */  var Event= React.createClass({displayName: "Event",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var inLanguage;
      if( props.inLanguage ){
        if( props.inLanguage instanceof Array ){
          inLanguage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          inLanguage = inLanguage.concat( props.inLanguage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) )
           }) );
         inLanguage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            inLanguage = ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) );
        }
      }
      var performer;
      if( props.performer ){
        if( props.performer instanceof Array ){
          performer = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          performer = performer.concat( props.performer.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. performer is a Person or" + ' ' +
"Organization."}) )
           }) );
         performer.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            performer = ( React.createElement("div", {"data-advice": "Put your HTML here. performer is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var endDate;
      if( props.endDate ){
        if( props.endDate instanceof Array ){
          endDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          endDate = endDate.concat( props.endDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. endDate is a Date."}) )
           }) );
         endDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            endDate = ( React.createElement("div", {"data-advice": "Put your HTML here. endDate is a Date."}) );
        }
      }
      var startDate;
      if( props.startDate ){
        if( props.startDate instanceof Array ){
          startDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          startDate = startDate.concat( props.startDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. startDate is a Date."}) )
           }) );
         startDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            startDate = ( React.createElement("div", {"data-advice": "Put your HTML here. startDate is a Date."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var workPerformed;
      if( props.workPerformed ){
        if( props.workPerformed instanceof Array ){
          workPerformed = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          workPerformed = workPerformed.concat( props.workPerformed.map( function(result, index){
              return ( React.createElement(CreativeWork, React.__spread({},  result, {key: index})) )
           }) );
         workPerformed.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          workPerformed = ( React.createElement(CreativeWork, {props:  props.workPerformed}) );        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( React.createElement(AggregateRating, React.__spread({},  result, {key: index})) )
           }) );
         aggregateRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          typicalAgeRange = typicalAgeRange.concat( props.typicalAgeRange.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. typicalAgeRange is a Text."}) )
           }) );
         typicalAgeRange.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            typicalAgeRange = ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) );
        }
      }
      var duration;
      if( props.duration ){
        if( props.duration instanceof Array ){
          duration = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          duration = duration.concat( props.duration.map( function(result, index){
              return ( React.createElement(Duration, React.__spread({},  result, {key: index})) )
           }) );
         duration.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          duration = ( React.createElement(Duration, {props:  props.duration}) );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var organizer;
      if( props.organizer ){
        if( props.organizer instanceof Array ){
          organizer = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          organizer = organizer.concat( props.organizer.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. organizer is a Person or" + ' ' +
"Organization."}) )
           }) );
         organizer.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            organizer = ( React.createElement("div", {"data-advice": "Put your HTML here. organizer is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var doorTime;
      if( props.doorTime ){
        if( props.doorTime instanceof Array ){
          doorTime = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          doorTime = doorTime.concat( props.doorTime.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         doorTime.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          doorTime = ( React.createElement(DateTime, {props:  props.doorTime}) );        }
      }
      var previousStartDate;
      if( props.previousStartDate ){
        if( props.previousStartDate instanceof Array ){
          previousStartDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          previousStartDate = previousStartDate.concat( props.previousStartDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. previousStartDate is a Date."}) )
           }) );
         previousStartDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            previousStartDate = ( React.createElement("div", {"data-advice": "Put your HTML here. previousStartDate is a Date."}) );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          review = review.concat( props.review.map( function(result, index){
              return ( React.createElement(Review, React.__spread({},  result, {key: index})) )
           }) );
         review.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          offers = offers.concat( props.offers.map( function(result, index){
              return ( React.createElement(Offer, React.__spread({},  result, {key: index})) )
           }) );
         offers.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          offers = ( React.createElement(Offer, {props:  props.offers}) );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          location = location.concat( props.location.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. location is a Place or" + ' ' +
"PostalAddress."}) )
           }) );
         location.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            location = ( React.createElement("div", {"data-advice": "Put your HTML here. location is a Place or" + ' ' +
"PostalAddress."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var attendee;
      if( props.attendee ){
        if( props.attendee instanceof Array ){
          attendee = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          attendee = attendee.concat( props.attendee.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. attendee is a Person or" + ' ' +
"Organization."}) )
           }) );
         attendee.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            attendee = ( React.createElement("div", {"data-advice": "Put your HTML here. attendee is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var superEvent;
      if( props.superEvent ){
        if( props.superEvent instanceof Array ){
          superEvent = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          superEvent = superEvent.concat( props.superEvent.map( function(result, index){
              return ( React.createElement(Event, React.__spread({},  result, {key: index})) )
           }) );
         superEvent.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          superEvent = ( React.createElement(Event, {props:  props.superEvent}) );        }
      }
      var recordedIn;
      if( props.recordedIn ){
        if( props.recordedIn instanceof Array ){
          recordedIn = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          recordedIn = recordedIn.concat( props.recordedIn.map( function(result, index){
              return ( React.createElement(CreativeWork, React.__spread({},  result, {key: index})) )
           }) );
         recordedIn.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          recordedIn = ( React.createElement(CreativeWork, {props:  props.recordedIn}) );        }
      }
      var subEvent;
      if( props.subEvent ){
        if( props.subEvent instanceof Array ){
          subEvent = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          subEvent = subEvent.concat( props.subEvent.map( function(result, index){
              return ( React.createElement(Event, React.__spread({},  result, {key: index})) )
           }) );
         subEvent.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          subEvent = ( React.createElement(Event, {props:  props.subEvent}) );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var eventStatus;
      if( props.eventStatus ){
        if( props.eventStatus instanceof Array ){
          eventStatus = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          eventStatus = eventStatus.concat( props.eventStatus.map( function(result, index){
              return ( React.createElement(EventStatusType, React.__spread({},  result, {key: index})) )
           }) );
         eventStatus.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
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
