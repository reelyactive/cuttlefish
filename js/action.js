/* Thing > Action - An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.

See also blog post and Actions overview document.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './actionstatustype', './thing', './imageobject', './datetime', './person', './place', './action', './organization', './postaladdress', './creativework', './entrypoint'], function(React, ActionStatusType, Thing, ImageObject, DateTime, Person, Place, Action, Organization, PostalAddress, CreativeWork, EntryPoint){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var participant;
      if( this.props.participant ){
        if( this.props.participant instanceof Array ){
          participant = [(React.createElement("p", null, "participant:") )];
          for( i in this.props.participant ){
            participant.push( ( React.createElement("div", {class: "participant"}) ) );
          }
        } else {
          participant = ( React.createElement("div", {class: "participant"}, this.props.participant) );
        }
      }
      var target;
      if( this.props.target ){
        if( this.props.target instanceof Array ){
          target = [(React.createElement("p", null, "target:") )];
          for( i in this.props.target ){
            target.push( ( React.createElement(EntryPoint, {props:  this.props.target}) ) );          }
        } else {
          target = ( React.createElement(EntryPoint, {props:  this.props.target}) );        }
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
      var object;
      if( this.props.object ){
        if( this.props.object instanceof Array ){
          object = [(React.createElement("p", null, "object:") )];
          for( i in this.props.object ){
            object.push( ( React.createElement(Thing, {props:  this.props.object}) ) );          }
        } else {
          object = ( React.createElement(Thing, {props:  this.props.object}) );        }
      }
      var agent;
      if( this.props.agent ){
        if( this.props.agent instanceof Array ){
          agent = [(React.createElement("p", null, "agent:") )];
          for( i in this.props.agent ){
            agent.push( ( React.createElement("div", {class: "agent"}) ) );
          }
        } else {
          agent = ( React.createElement("div", {class: "agent"}, this.props.agent) );
        }
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
      var actionStatus;
      if( this.props.actionStatus ){
        if( this.props.actionStatus instanceof Array ){
          actionStatus = [(React.createElement("p", null, "actionStatus:") )];
          for( i in this.props.actionStatus ){
            actionStatus.push( ( React.createElement(ActionStatusType, {props:  this.props.actionStatus}) ) );          }
        } else {
          actionStatus = ( React.createElement(ActionStatusType, {props:  this.props.actionStatus}) );        }
      }
      var instrument;
      if( this.props.instrument ){
        if( this.props.instrument instanceof Array ){
          instrument = [(React.createElement("p", null, "instrument:") )];
          for( i in this.props.instrument ){
            instrument.push( ( React.createElement(Thing, {props:  this.props.instrument}) ) );          }
        } else {
          instrument = ( React.createElement(Thing, {props:  this.props.instrument}) );        }
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
      var startTime;
      if( this.props.startTime ){
        if( this.props.startTime instanceof Array ){
          startTime = [(React.createElement("p", null, "startTime:") )];
          for( i in this.props.startTime ){
            startTime.push( ( React.createElement(DateTime, {props:  this.props.startTime}) ) );          }
        } else {
          startTime = ( React.createElement(DateTime, {props:  this.props.startTime}) );        }
      }
      var error;
      if( this.props.error ){
        if( this.props.error instanceof Array ){
          error = [(React.createElement("p", null, "error:") )];
          for( i in this.props.error ){
            error.push( ( React.createElement(Thing, {props:  this.props.error}) ) );          }
        } else {
          error = ( React.createElement(Thing, {props:  this.props.error}) );        }
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
      var endTime;
      if( this.props.endTime ){
        if( this.props.endTime instanceof Array ){
          endTime = [(React.createElement("p", null, "endTime:") )];
          for( i in this.props.endTime ){
            endTime.push( ( React.createElement(DateTime, {props:  this.props.endTime}) ) );          }
        } else {
          endTime = ( React.createElement(DateTime, {props:  this.props.endTime}) );        }
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
      var result;
      if( this.props.result ){
        if( this.props.result instanceof Array ){
          result = [(React.createElement("p", null, "result:") )];
          for( i in this.props.result ){
            result.push( ( React.createElement(Thing, {props:  this.props.result}) ) );          }
        } else {
          result = ( React.createElement(Thing, {props:  this.props.result}) );        }
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
