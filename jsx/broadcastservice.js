/* Thing > BroadcastService - A delivery service through which content is provided via broadcast over the air or online.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './organization', './broadcastservice', './creativework', './imageobject'], function(React, Action, Organization, BroadcastService, CreativeWork, ImageObject){
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
          potentialAction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( <Action {...result} key={index} /> )
           }) );
         potentialAction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var broadcastDisplayName;
      if( props.broadcastDisplayName ){
        if( props.broadcastDisplayName instanceof Array ){
          broadcastDisplayName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          broadcastDisplayName = broadcastDisplayName.concat( props.broadcastDisplayName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. broadcastDisplayName is a Text.'></div> )
           }) );
         broadcastDisplayName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            broadcastDisplayName = ( <div data-advice='Put your HTML here. broadcastDisplayName is a Text.'></div> );
        }
      }
      var broadcastTimezone;
      if( props.broadcastTimezone ){
        if( props.broadcastTimezone instanceof Array ){
          broadcastTimezone = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          broadcastTimezone = broadcastTimezone.concat( props.broadcastTimezone.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. broadcastTimezone is a Text.'></div> )
           }) );
         broadcastTimezone.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            broadcastTimezone = ( <div data-advice='Put your HTML here. broadcastTimezone is a Text.'></div> );
        }
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
      var broadcastAffiliateOf;
      if( props.broadcastAffiliateOf ){
        if( props.broadcastAffiliateOf instanceof Array ){
          broadcastAffiliateOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          broadcastAffiliateOf = broadcastAffiliateOf.concat( props.broadcastAffiliateOf.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         broadcastAffiliateOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          broadcastAffiliateOf = ( <Organization props={ props.broadcastAffiliateOf } /> );        }
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
      var parentService;
      if( props.parentService ){
        if( props.parentService instanceof Array ){
          parentService = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          parentService = parentService.concat( props.parentService.map( function(result, index){
              return ( <BroadcastService {...result} key={index} /> )
           }) );
         parentService.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          parentService = ( <BroadcastService props={ props.parentService } /> );        }
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
      var broadcaster;
      if( props.broadcaster ){
        if( props.broadcaster instanceof Array ){
          broadcaster = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          broadcaster = broadcaster.concat( props.broadcaster.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         broadcaster.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          broadcaster = ( <Organization props={ props.broadcaster } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
      return (<div title='BroadcastService' className='BroadcastService entity'>
        { potentialAction }
        { broadcastDisplayName }
        { broadcastTimezone }
        { sameAs }
        { broadcastAffiliateOf }
        { image }
        { parentService }
        { name }
        { url }
        { broadcaster }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { description }
     </div>);
    }
  });
});
