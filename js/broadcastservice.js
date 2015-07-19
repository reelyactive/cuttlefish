/* Thing > BroadcastService - A delivery service through which content is provided via broadcast over the air or online.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './organization', './broadcastservice', './creativework', './imageobject'], function(React, Action, Organization, BroadcastService, CreativeWork, ImageObject){
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
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var broadcastDisplayName;
      if( this.props.broadcastDisplayName ){
        if( this.props.broadcastDisplayName instanceof Array ){
          broadcastDisplayName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.broadcastDisplayName ){
            broadcastDisplayName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. broadcastDisplayName is a Text."}) ) );
          }
        } else {
            broadcastDisplayName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. broadcastDisplayName is a Text."}) ) );
        }
      }
      var broadcastTimezone;
      if( this.props.broadcastTimezone ){
        if( this.props.broadcastTimezone instanceof Array ){
          broadcastTimezone = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.broadcastTimezone ){
            broadcastTimezone.push( ( React.createElement("div", {"data-advice": "Put your HTML here. broadcastTimezone is a Text."}) ) );
          }
        } else {
            broadcastTimezone.push( ( React.createElement("div", {"data-advice": "Put your HTML here. broadcastTimezone is a Text."}) ) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
        }
      }
      var broadcastAffiliateOf;
      if( this.props.broadcastAffiliateOf ){
        if( this.props.broadcastAffiliateOf instanceof Array ){
          broadcastAffiliateOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.broadcastAffiliateOf ){
            broadcastAffiliateOf.push( ( React.createElement(Organization, {props:  this.props.broadcastAffiliateOf}) ) );          }
        } else {
          broadcastAffiliateOf = ( React.createElement(Organization, {props:  this.props.broadcastAffiliateOf}) );        }
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
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var parentService;
      if( this.props.parentService ){
        if( this.props.parentService instanceof Array ){
          parentService = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.parentService ){
            parentService.push( ( React.createElement(BroadcastService, {props:  this.props.parentService}) ) );          }
        } else {
          parentService = ( React.createElement(BroadcastService, {props:  this.props.parentService}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var broadcaster;
      if( this.props.broadcaster ){
        if( this.props.broadcaster instanceof Array ){
          broadcaster = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.broadcaster ){
            broadcaster.push( ( React.createElement(Organization, {props:  this.props.broadcaster}) ) );          }
        } else {
          broadcaster = ( React.createElement(Organization, {props:  this.props.broadcaster}) );        }
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
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
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
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
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
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
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
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
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
