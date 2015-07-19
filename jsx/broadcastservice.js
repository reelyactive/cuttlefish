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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var broadcastDisplayName;
      if( this.props.broadcastDisplayName ){
        if( this.props.broadcastDisplayName instanceof Array ){
          broadcastDisplayName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.broadcastDisplayName ){
            broadcastDisplayName.push( ( <div data-advice='Put your HTML here. broadcastDisplayName is a Text.'></div> ) );
          }
        } else {
            broadcastDisplayName = ( <div data-advice='Put your HTML here. broadcastDisplayName is a Text.'></div> );
        }
      }
      var broadcastTimezone;
      if( this.props.broadcastTimezone ){
        if( this.props.broadcastTimezone instanceof Array ){
          broadcastTimezone = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.broadcastTimezone ){
            broadcastTimezone.push( ( <div data-advice='Put your HTML here. broadcastTimezone is a Text.'></div> ) );
          }
        } else {
            broadcastTimezone = ( <div data-advice='Put your HTML here. broadcastTimezone is a Text.'></div> );
        }
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
      var broadcastAffiliateOf;
      if( this.props.broadcastAffiliateOf ){
        if( this.props.broadcastAffiliateOf instanceof Array ){
          broadcastAffiliateOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.broadcastAffiliateOf ){
            broadcastAffiliateOf.push( ( <Organization {...this.props.broadcastAffiliateOf } /> ) );          }
        } else {
          broadcastAffiliateOf = ( <Organization props={ this.props.broadcastAffiliateOf } /> );        }
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
      var parentService;
      if( this.props.parentService ){
        if( this.props.parentService instanceof Array ){
          parentService = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.parentService ){
            parentService.push( ( <BroadcastService {...this.props.parentService } /> ) );          }
        } else {
          parentService = ( <BroadcastService props={ this.props.parentService } /> );        }
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
      var broadcaster;
      if( this.props.broadcaster ){
        if( this.props.broadcaster instanceof Array ){
          broadcaster = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.broadcaster ){
            broadcaster.push( ( <Organization {...this.props.broadcaster } /> ) );          }
        } else {
          broadcaster = ( <Organization props={ this.props.broadcaster } /> );        }
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
