/* Thing > Action - An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.

See also blog post and Actions overview document.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './actionstatustype', './thing', './imageobject', './datetime', './person', './place', './action', './organization', './postaladdress', './creativework', './entrypoint'], function(React, ActionStatusType, Thing, ImageObject, DateTime, Person, Place, Action, Organization, PostalAddress, CreativeWork, EntryPoint){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
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
      var participant;
      if( props.participant ){
        if( props.participant instanceof Array ){
          participant = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          participant = participant.concat( props.participant.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. participant is a Person or" + ' ' +
"Organization."}) )
           }) );
         participant.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            participant = ( React.createElement("div", {"data-advice": "Put your HTML here. participant is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var target;
      if( props.target ){
        if( props.target instanceof Array ){
          target = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          target = target.concat( props.target.map( function(result, index){
              return ( React.createElement(EntryPoint, React.__spread({},  result, {key: index})) )
           }) );
         target.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          target = ( React.createElement(EntryPoint, {props:  props.target}) );        }
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
      var object;
      if( props.object ){
        if( props.object instanceof Array ){
          object = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          object = object.concat( props.object.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         object.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          object = ( React.createElement(Thing, {props:  props.object}) );        }
      }
      var agent;
      if( props.agent ){
        if( props.agent instanceof Array ){
          agent = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          agent = agent.concat( props.agent.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. agent is a Person or" + ' ' +
"Organization."}) )
           }) );
         agent.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            agent = ( React.createElement("div", {"data-advice": "Put your HTML here. agent is a Person or" + ' ' +
"Organization."}) );
        }
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
      var actionStatus;
      if( props.actionStatus ){
        if( props.actionStatus instanceof Array ){
          actionStatus = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          actionStatus = actionStatus.concat( props.actionStatus.map( function(result, index){
              return ( React.createElement(ActionStatusType, React.__spread({},  result, {key: index})) )
           }) );
         actionStatus.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          actionStatus = ( React.createElement(ActionStatusType, {props:  props.actionStatus}) );        }
      }
      var instrument;
      if( props.instrument ){
        if( props.instrument instanceof Array ){
          instrument = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          instrument = instrument.concat( props.instrument.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         instrument.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          instrument = ( React.createElement(Thing, {props:  props.instrument}) );        }
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
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          location = location.concat( props.location.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) )
           }) );
         location.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            location = ( React.createElement("div", {"data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) );
        }
      }
      var startTime;
      if( props.startTime ){
        if( props.startTime instanceof Array ){
          startTime = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          startTime = startTime.concat( props.startTime.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         startTime.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          startTime = ( React.createElement(DateTime, {props:  props.startTime}) );        }
      }
      var error;
      if( props.error ){
        if( props.error instanceof Array ){
          error = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          error = error.concat( props.error.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         error.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          error = ( React.createElement(Thing, {props:  props.error}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
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
      var endTime;
      if( props.endTime ){
        if( props.endTime instanceof Array ){
          endTime = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          endTime = endTime.concat( props.endTime.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         endTime.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          endTime = ( React.createElement(DateTime, {props:  props.endTime}) );        }
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
      var result;
      if( props.result ){
        if( props.result instanceof Array ){
          result = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          result = result.concat( props.result.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         result.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          result = ( React.createElement(Thing, {props:  props.result}) );        }
      }
      return (React.createElement("div", {title: "Action", className: "Action entity"}, 
         potentialAction, 
         participant, 
         target, 
         sameAs, 
         description, 
         object, 
         agent, 
         name, 
         actionStatus, 
         instrument, 
         url, 
         location, 
         startTime, 
         error, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         endTime, 
         image, 
         result 
     ));
    }
  });
});
