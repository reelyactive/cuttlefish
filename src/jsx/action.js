/* Thing > Action - An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.

See also blog post and Actions overview document.. Generated automatically by the reactGenerator. */  var Action= React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
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
      var participant;
      if( props.participant ){
        if( props.participant instanceof Array ){
          participant = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          participant = participant.concat( props.participant.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. participant is a Person or
Organization.'></div> )
           }) );
         participant.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            participant = ( <div data-advice='Put your HTML here. participant is a Person or
Organization.'></div> );
        }
      }
      var target;
      if( props.target ){
        if( props.target instanceof Array ){
          target = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          target = target.concat( props.target.map( function(result, index){
              return ( <EntryPoint {...result} key={index} /> )
           }) );
         target.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          target = ( <EntryPoint props={ props.target } /> );        }
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
      var object;
      if( props.object ){
        if( props.object instanceof Array ){
          object = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          object = object.concat( props.object.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         object.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          object = ( <Thing props={ props.object } /> );        }
      }
      var agent;
      if( props.agent ){
        if( props.agent instanceof Array ){
          agent = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          agent = agent.concat( props.agent.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. agent is a Person or
Organization.'></div> )
           }) );
         agent.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            agent = ( <div data-advice='Put your HTML here. agent is a Person or
Organization.'></div> );
        }
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
      var actionStatus;
      if( props.actionStatus ){
        if( props.actionStatus instanceof Array ){
          actionStatus = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          actionStatus = actionStatus.concat( props.actionStatus.map( function(result, index){
              return ( <ActionStatusType {...result} key={index} /> )
           }) );
         actionStatus.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          actionStatus = ( <ActionStatusType props={ props.actionStatus } /> );        }
      }
      var instrument;
      if( props.instrument ){
        if( props.instrument instanceof Array ){
          instrument = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          instrument = instrument.concat( props.instrument.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         instrument.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          instrument = ( <Thing props={ props.instrument } /> );        }
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
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          location = location.concat( props.location.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> )
           }) );
         location.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            location = ( <div data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> );
        }
      }
      var startTime;
      if( props.startTime ){
        if( props.startTime instanceof Array ){
          startTime = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          startTime = startTime.concat( props.startTime.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         startTime.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          startTime = ( <DateTime props={ props.startTime } /> );        }
      }
      var error;
      if( props.error ){
        if( props.error instanceof Array ){
          error = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          error = error.concat( props.error.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         error.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          error = ( <Thing props={ props.error } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
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
      var endTime;
      if( props.endTime ){
        if( props.endTime instanceof Array ){
          endTime = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          endTime = endTime.concat( props.endTime.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         endTime.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          endTime = ( <DateTime props={ props.endTime } /> );        }
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
      var result;
      if( props.result ){
        if( props.result instanceof Array ){
          result = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          result = result.concat( props.result.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         result.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
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
