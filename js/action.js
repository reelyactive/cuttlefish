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
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  this.props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var participant;
      if( this.props.participant ){
        if( this.props.participant instanceof Array ){
          participant = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.participant ){
            participant.push( ( React.createElement("div", {"data-advice": "Put your HTML here. participant is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            participant = ( React.createElement("div", {"data-advice": "Put your HTML here. participant is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var target;
      if( this.props.target ){
        if( this.props.target instanceof Array ){
          target = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.target ){
            target.push( ( React.createElement(EntryPoint, React.__spread({},  this.props.target )) ) );          }
        } else {
          target = ( React.createElement(EntryPoint, {props:  this.props.target}) );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
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
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var object;
      if( this.props.object ){
        if( this.props.object instanceof Array ){
          object = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.object ){
            object.push( ( React.createElement(Thing, React.__spread({},  this.props.object )) ) );          }
        } else {
          object = ( React.createElement(Thing, {props:  this.props.object}) );        }
      }
      var agent;
      if( this.props.agent ){
        if( this.props.agent instanceof Array ){
          agent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.agent ){
            agent.push( ( React.createElement("div", {"data-advice": "Put your HTML here. agent is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            agent = ( React.createElement("div", {"data-advice": "Put your HTML here. agent is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var actionStatus;
      if( this.props.actionStatus ){
        if( this.props.actionStatus instanceof Array ){
          actionStatus = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.actionStatus ){
            actionStatus.push( ( React.createElement(ActionStatusType, React.__spread({},  this.props.actionStatus )) ) );          }
        } else {
          actionStatus = ( React.createElement(ActionStatusType, {props:  this.props.actionStatus}) );        }
      }
      var instrument;
      if( this.props.instrument ){
        if( this.props.instrument instanceof Array ){
          instrument = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.instrument ){
            instrument.push( ( React.createElement(Thing, React.__spread({},  this.props.instrument )) ) );          }
        } else {
          instrument = ( React.createElement(Thing, {props:  this.props.instrument}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
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
            location = ( React.createElement("div", {"data-advice": "Put your HTML here. location is a Place or" + ' ' +
"PostalAddress."}) );
        }
      }
      var startTime;
      if( this.props.startTime ){
        if( this.props.startTime instanceof Array ){
          startTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.startTime ){
            startTime.push( ( React.createElement(DateTime, React.__spread({},  this.props.startTime )) ) );          }
        } else {
          startTime = ( React.createElement(DateTime, {props:  this.props.startTime}) );        }
      }
      var error;
      if( this.props.error ){
        if( this.props.error instanceof Array ){
          error = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.error ){
            error.push( ( React.createElement(Thing, React.__spread({},  this.props.error )) ) );          }
        } else {
          error = ( React.createElement(Thing, {props:  this.props.error}) );        }
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
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var endTime;
      if( this.props.endTime ){
        if( this.props.endTime instanceof Array ){
          endTime = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.endTime ){
            endTime.push( ( React.createElement(DateTime, React.__spread({},  this.props.endTime )) ) );          }
        } else {
          endTime = ( React.createElement(DateTime, {props:  this.props.endTime}) );        }
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
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var result;
      if( this.props.result ){
        if( this.props.result instanceof Array ){
          result = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.result ){
            result.push( ( React.createElement(Thing, React.__spread({},  this.props.result )) ) );          }
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
