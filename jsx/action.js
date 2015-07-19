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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var participant;
      if( props.participant ){
        if( props.participant instanceof Array ){
          participant = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.participant ){
            participant.push( ( <div data-advice='Put your HTML here. participant is a Person or
Organization.'></div> ) );
          }
        } else {
            participant = ( <div data-advice='Put your HTML here. participant is a Person or
Organization.'></div> );
        }
      }
      var target;
      if( props.target ){
        if( props.target instanceof Array ){
          target = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.target ){
            target.push( ( <EntryPoint {...props.target } /> ) );          }
        } else {
          target = ( <EntryPoint props={ props.target } /> );        }
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
      var object;
      if( props.object ){
        if( props.object instanceof Array ){
          object = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.object ){
            object.push( ( <Thing {...props.object } /> ) );          }
        } else {
          object = ( <Thing props={ props.object } /> );        }
      }
      var agent;
      if( props.agent ){
        if( props.agent instanceof Array ){
          agent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.agent ){
            agent.push( ( <div data-advice='Put your HTML here. agent is a Person or
Organization.'></div> ) );
          }
        } else {
            agent = ( <div data-advice='Put your HTML here. agent is a Person or
Organization.'></div> );
        }
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
      var actionStatus;
      if( props.actionStatus ){
        if( props.actionStatus instanceof Array ){
          actionStatus = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.actionStatus ){
            actionStatus.push( ( <ActionStatusType {...props.actionStatus } /> ) );          }
        } else {
          actionStatus = ( <ActionStatusType props={ props.actionStatus } /> );        }
      }
      var instrument;
      if( props.instrument ){
        if( props.instrument instanceof Array ){
          instrument = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.instrument ){
            instrument.push( ( <Thing {...props.instrument } /> ) );          }
        } else {
          instrument = ( <Thing props={ props.instrument } /> );        }
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
      var startTime;
      if( props.startTime ){
        if( props.startTime instanceof Array ){
          startTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.startTime ){
            startTime.push( ( <DateTime {...props.startTime } /> ) );          }
        } else {
          startTime = ( <DateTime props={ props.startTime } /> );        }
      }
      var error;
      if( props.error ){
        if( props.error instanceof Array ){
          error = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.error ){
            error.push( ( <Thing {...props.error } /> ) );          }
        } else {
          error = ( <Thing props={ props.error } /> );        }
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
      var endTime;
      if( props.endTime ){
        if( props.endTime instanceof Array ){
          endTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.endTime ){
            endTime.push( ( <DateTime {...props.endTime } /> ) );          }
        } else {
          endTime = ( <DateTime props={ props.endTime } /> );        }
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
      var result;
      if( props.result ){
        if( props.result instanceof Array ){
          result = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.result ){
            result.push( ( <Thing {...props.result } /> ) );          }
        } else {
          result = ( <Thing props={ props.result } /> );        }
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
