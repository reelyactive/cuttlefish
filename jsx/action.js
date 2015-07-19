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
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var participant;
      if( this.props.participant ){
        if( this.props.participant instanceof Array ){
          participant = [(<p>participant:</p> )];
          for( i in this.props.participant ){
            participant.push( ( <div class='participant'></div> ) );
          }
        } else {
          participant = ( <div class='participant'>{this.props.participant}</div> );
        }
      }
      var target;
      if( this.props.target ){
        if( this.props.target instanceof Array ){
          target = [(<p>target:</p> )];
          for( i in this.props.target ){
            target.push( ( <EntryPoint props={ this.props.target } /> ) );          }
        } else {
          target = ( <EntryPoint props={ this.props.target } /> );        }
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
      var object;
      if( this.props.object ){
        if( this.props.object instanceof Array ){
          object = [(<p>object:</p> )];
          for( i in this.props.object ){
            object.push( ( <Thing props={ this.props.object } /> ) );          }
        } else {
          object = ( <Thing props={ this.props.object } /> );        }
      }
      var agent;
      if( this.props.agent ){
        if( this.props.agent instanceof Array ){
          agent = [(<p>agent:</p> )];
          for( i in this.props.agent ){
            agent.push( ( <div class='agent'></div> ) );
          }
        } else {
          agent = ( <div class='agent'>{this.props.agent}</div> );
        }
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
      var actionStatus;
      if( this.props.actionStatus ){
        if( this.props.actionStatus instanceof Array ){
          actionStatus = [(<p>actionStatus:</p> )];
          for( i in this.props.actionStatus ){
            actionStatus.push( ( <ActionStatusType props={ this.props.actionStatus } /> ) );          }
        } else {
          actionStatus = ( <ActionStatusType props={ this.props.actionStatus } /> );        }
      }
      var instrument;
      if( this.props.instrument ){
        if( this.props.instrument instanceof Array ){
          instrument = [(<p>instrument:</p> )];
          for( i in this.props.instrument ){
            instrument.push( ( <Thing props={ this.props.instrument } /> ) );          }
        } else {
          instrument = ( <Thing props={ this.props.instrument } /> );        }
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
      var startTime;
      if( this.props.startTime ){
        if( this.props.startTime instanceof Array ){
          startTime = [(<p>startTime:</p> )];
          for( i in this.props.startTime ){
            startTime.push( ( <DateTime props={ this.props.startTime } /> ) );          }
        } else {
          startTime = ( <DateTime props={ this.props.startTime } /> );        }
      }
      var error;
      if( this.props.error ){
        if( this.props.error instanceof Array ){
          error = [(<p>error:</p> )];
          for( i in this.props.error ){
            error.push( ( <Thing props={ this.props.error } /> ) );          }
        } else {
          error = ( <Thing props={ this.props.error } /> );        }
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
      var endTime;
      if( this.props.endTime ){
        if( this.props.endTime instanceof Array ){
          endTime = [(<p>endTime:</p> )];
          for( i in this.props.endTime ){
            endTime.push( ( <DateTime props={ this.props.endTime } /> ) );          }
        } else {
          endTime = ( <DateTime props={ this.props.endTime } /> );        }
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
      var result;
      if( this.props.result ){
        if( this.props.result instanceof Array ){
          result = [(<p>result:</p> )];
          for( i in this.props.result ){
            result.push( ( <Thing props={ this.props.result } /> ) );          }
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
