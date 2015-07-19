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
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var broadcastDisplayName;
      if( props.broadcastDisplayName ){
        if( props.broadcastDisplayName instanceof Array ){
          broadcastDisplayName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          broadcastDisplayName = broadcastDisplayName.concat( props.broadcastDisplayName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. broadcastDisplayName is a Text."}) )
           }) );
         broadcastDisplayName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            broadcastDisplayName = ( React.createElement("div", {"data-advice": "Put your HTML here. broadcastDisplayName is a Text."}) );
        }
      }
      var broadcastTimezone;
      if( props.broadcastTimezone ){
        if( props.broadcastTimezone instanceof Array ){
          broadcastTimezone = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          broadcastTimezone = broadcastTimezone.concat( props.broadcastTimezone.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. broadcastTimezone is a Text."}) )
           }) );
         broadcastTimezone.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            broadcastTimezone = ( React.createElement("div", {"data-advice": "Put your HTML here. broadcastTimezone is a Text."}) );
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
      var broadcastAffiliateOf;
      if( props.broadcastAffiliateOf ){
        if( props.broadcastAffiliateOf instanceof Array ){
          broadcastAffiliateOf = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          broadcastAffiliateOf = broadcastAffiliateOf.concat( props.broadcastAffiliateOf.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         broadcastAffiliateOf.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          broadcastAffiliateOf = ( React.createElement(Organization, {props:  props.broadcastAffiliateOf}) );        }
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
      var parentService;
      if( props.parentService ){
        if( props.parentService instanceof Array ){
          parentService = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          parentService = parentService.concat( props.parentService.map( function(result, index){
              return ( React.createElement(BroadcastService, React.__spread({},  result, {key: index})) )
           }) );
         parentService.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          parentService = ( React.createElement(BroadcastService, {props:  props.parentService}) );        }
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
      var broadcaster;
      if( props.broadcaster ){
        if( props.broadcaster instanceof Array ){
          broadcaster = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          broadcaster = broadcaster.concat( props.broadcaster.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         broadcaster.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          broadcaster = ( React.createElement(Organization, {props:  props.broadcaster}) );        }
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
      return (React.createElement("div", {title: "BroadcastService", className: "BroadcastService entity"}, 
         potentialAction, 
         broadcastDisplayName, 
         broadcastTimezone, 
         sameAs, 
         broadcastAffiliateOf, 
         image, 
         parentService, 
         name, 
         url, 
         broadcaster, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         description 
     ));
    }
  });
});
