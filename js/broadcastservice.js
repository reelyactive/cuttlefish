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
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var broadcastDisplayName;
      if( this.props.broadcastDisplayName ){
        if( this.props.broadcastDisplayName instanceof Array ){
          broadcastDisplayName = [(React.createElement("p", null, "broadcastDisplayName:") )];
          for( i in this.props.broadcastDisplayName ){
            broadcastDisplayName.push( ( React.createElement("div", {class: "broadcastDisplayName"}) ) );
          }
        } else {
          broadcastDisplayName = ( React.createElement("div", {class: "broadcastDisplayName"}, this.props.broadcastDisplayName) );
        }
      }
      var broadcastTimezone;
      if( this.props.broadcastTimezone ){
        if( this.props.broadcastTimezone instanceof Array ){
          broadcastTimezone = [(React.createElement("p", null, "broadcastTimezone:") )];
          for( i in this.props.broadcastTimezone ){
            broadcastTimezone.push( ( React.createElement("div", {class: "broadcastTimezone"}) ) );
          }
        } else {
          broadcastTimezone = ( React.createElement("div", {class: "broadcastTimezone"}, this.props.broadcastTimezone) );
        }
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
      var broadcastAffiliateOf;
      if( this.props.broadcastAffiliateOf ){
        if( this.props.broadcastAffiliateOf instanceof Array ){
          broadcastAffiliateOf = [(React.createElement("p", null, "broadcastAffiliateOf:") )];
          for( i in this.props.broadcastAffiliateOf ){
            broadcastAffiliateOf.push( ( React.createElement(Organization, {props:  this.props.broadcastAffiliateOf}) ) );          }
        } else {
          broadcastAffiliateOf = ( React.createElement(Organization, {props:  this.props.broadcastAffiliateOf}) );        }
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
      var parentService;
      if( this.props.parentService ){
        if( this.props.parentService instanceof Array ){
          parentService = [(React.createElement("p", null, "parentService:") )];
          for( i in this.props.parentService ){
            parentService.push( ( React.createElement(BroadcastService, {props:  this.props.parentService}) ) );          }
        } else {
          parentService = ( React.createElement(BroadcastService, {props:  this.props.parentService}) );        }
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
      var broadcaster;
      if( this.props.broadcaster ){
        if( this.props.broadcaster instanceof Array ){
          broadcaster = [(React.createElement("p", null, "broadcaster:") )];
          for( i in this.props.broadcaster ){
            broadcaster.push( ( React.createElement(Organization, {props:  this.props.broadcaster}) ) );          }
        } else {
          broadcaster = ( React.createElement(Organization, {props:  this.props.broadcaster}) );        }
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
