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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var participant;
      if( this.props.participant ){
        if( this.props.participant instanceof Array ){
          participant = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.participant ){
            participant.push( ( <div data-advice='Put your HTML here. participant is a Person or
Organization.'></div> ) );
          }
        } else {
            participant = ( <div data-advice='Put your HTML here. participant is a Person or
Organization.'></div> );
        }
      }
      var target;
      if( this.props.target ){
        if( this.props.target instanceof Array ){
          target = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.target ){
            target.push( ( <EntryPoint {...this.props.target } /> ) );          }
        } else {
          target = ( <EntryPoint props={ this.props.target } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var object;
      if( this.props.object ){
        if( this.props.object instanceof Array ){
          object = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.object ){
            object.push( ( <Thing {...this.props.object } /> ) );          }
        } else {
          object = ( <Thing props={ this.props.object } /> );        }
      }
      var agent;
      if( this.props.agent ){
        if( this.props.agent instanceof Array ){
          agent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.agent ){
            agent.push( ( <div data-advice='Put your HTML here. agent is a Person or
Organization.'></div> ) );
          }
        } else {
            agent = ( <div data-advice='Put your HTML here. agent is a Person or
Organization.'></div> );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var actionStatus;
      if( this.props.actionStatus ){
        if( this.props.actionStatus instanceof Array ){
          actionStatus = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.actionStatus ){
            actionStatus.push( ( <ActionStatusType {...this.props.actionStatus } /> ) );          }
        } else {
          actionStatus = ( <ActionStatusType props={ this.props.actionStatus } /> );        }
      }
      var instrument;
      if( this.props.instrument ){
        if( this.props.instrument instanceof Array ){
          instrument = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.instrument ){
            instrument.push( ( <Thing {...this.props.instrument } /> ) );          }
        } else {
          instrument = ( <Thing props={ this.props.instrument } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.location ){
            location.push( ( <div data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> ) );
          }
        } else {
            location = ( <div data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> );
        }
      }
      var startTime;
      if( this.props.startTime ){
        if( this.props.startTime instanceof Array ){
          startTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.startTime ){
            startTime.push( ( <DateTime {...this.props.startTime } /> ) );          }
        } else {
          startTime = ( <DateTime props={ this.props.startTime } /> );        }
      }
      var error;
      if( this.props.error ){
        if( this.props.error instanceof Array ){
          error = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.error ){
            error.push( ( <Thing {...this.props.error } /> ) );          }
        } else {
          error = ( <Thing props={ this.props.error } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var endTime;
      if( this.props.endTime ){
        if( this.props.endTime instanceof Array ){
          endTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.endTime ){
            endTime.push( ( <DateTime {...this.props.endTime } /> ) );          }
        } else {
          endTime = ( <DateTime props={ this.props.endTime } /> );        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var result;
      if( this.props.result ){
        if( this.props.result instanceof Array ){
          result = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.result ){
            result.push( ( <Thing {...this.props.result } /> ) );          }
        } else {
          result = ( <Thing props={ this.props.result } /> );        }
      }
      return (<div title='Action' className='Action entity'>
        { potentialAction }
        { participant }
        { target }
        { sameAs }
        { description }
        { object }
        { agent }
        { name }
        { actionStatus }
        { instrument }
        { url }
        { location }
        { startTime }
        { error }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { endTime }
        { image }
        { result }
     </div>);
    }
  });
});
