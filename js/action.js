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
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var participant;
      if( props.participant ){
        if( props.participant instanceof Array ){
          participant = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.participant ){
            participant.push( ( React.createElement("div", {"data-advice": "Put your HTML here. participant is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            participant = ( React.createElement("div", {"data-advice": "Put your HTML here. participant is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var target;
      if( props.target ){
        if( props.target instanceof Array ){
          target = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.target ){
            target.push( ( React.createElement(EntryPoint, React.__spread({},  props.target )) ) );          }
        } else {
          target = ( React.createElement(EntryPoint, {props:  props.target}) );        }
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
      var object;
      if( props.object ){
        if( props.object instanceof Array ){
          object = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.object ){
            object.push( ( React.createElement(Thing, React.__spread({},  props.object )) ) );          }
        } else {
          object = ( React.createElement(Thing, {props:  props.object}) );        }
      }
      var agent;
      if( props.agent ){
        if( props.agent instanceof Array ){
          agent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.agent ){
            agent.push( ( React.createElement("div", {"data-advice": "Put your HTML here. agent is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            agent = ( React.createElement("div", {"data-advice": "Put your HTML here. agent is a Person or" + ' ' +
"Organization."}) );
        }
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
      var actionStatus;
      if( props.actionStatus ){
        if( props.actionStatus instanceof Array ){
          actionStatus = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.actionStatus ){
            actionStatus.push( ( React.createElement(ActionStatusType, React.__spread({},  props.actionStatus )) ) );          }
        } else {
          actionStatus = ( React.createElement(ActionStatusType, {props:  props.actionStatus}) );        }
      }
      var instrument;
      if( props.instrument ){
        if( props.instrument instanceof Array ){
          instrument = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.instrument ){
            instrument.push( ( React.createElement(Thing, React.__spread({},  props.instrument )) ) );          }
        } else {
          instrument = ( React.createElement(Thing, {props:  props.instrument}) );        }
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
      var startTime;
      if( props.startTime ){
        if( props.startTime instanceof Array ){
          startTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.startTime ){
            startTime.push( ( React.createElement(DateTime, React.__spread({},  props.startTime )) ) );          }
        } else {
          startTime = ( React.createElement(DateTime, {props:  props.startTime}) );        }
      }
      var error;
      if( props.error ){
        if( props.error instanceof Array ){
          error = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.error ){
            error.push( ( React.createElement(Thing, React.__spread({},  props.error )) ) );          }
        } else {
          error = ( React.createElement(Thing, {props:  props.error}) );        }
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
      var endTime;
      if( props.endTime ){
        if( props.endTime instanceof Array ){
          endTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.endTime ){
            endTime.push( ( React.createElement(DateTime, React.__spread({},  props.endTime )) ) );          }
        } else {
          endTime = ( React.createElement(DateTime, {props:  props.endTime}) );        }
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
      var result;
      if( props.result ){
        if( props.result instanceof Array ){
          result = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.result ){
            result.push( ( React.createElement(Thing, React.__spread({},  props.result )) ) );          }
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
