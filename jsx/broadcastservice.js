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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var broadcastDisplayName;
      if( props.broadcastDisplayName ){
        if( props.broadcastDisplayName instanceof Array ){
          broadcastDisplayName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.broadcastDisplayName ){
            broadcastDisplayName.push( ( <div data-advice='Put your HTML here. broadcastDisplayName is a Text.'></div> ) );
          }
        } else {
            broadcastDisplayName = ( <div data-advice='Put your HTML here. broadcastDisplayName is a Text.'></div> );
        }
      }
      var broadcastTimezone;
      if( props.broadcastTimezone ){
        if( props.broadcastTimezone instanceof Array ){
          broadcastTimezone = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.broadcastTimezone ){
            broadcastTimezone.push( ( <div data-advice='Put your HTML here. broadcastTimezone is a Text.'></div> ) );
          }
        } else {
            broadcastTimezone = ( <div data-advice='Put your HTML here. broadcastTimezone is a Text.'></div> );
        }
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
      var broadcastAffiliateOf;
      if( props.broadcastAffiliateOf ){
        if( props.broadcastAffiliateOf instanceof Array ){
          broadcastAffiliateOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.broadcastAffiliateOf ){
            broadcastAffiliateOf.push( ( <Organization {...props.broadcastAffiliateOf } /> ) );          }
        } else {
          broadcastAffiliateOf = ( <Organization props={ props.broadcastAffiliateOf } /> );        }
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
      var parentService;
      if( props.parentService ){
        if( props.parentService instanceof Array ){
          parentService = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.parentService ){
            parentService.push( ( <BroadcastService {...props.parentService } /> ) );          }
        } else {
          parentService = ( <BroadcastService props={ props.parentService } /> );        }
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
      var broadcaster;
      if( props.broadcaster ){
        if( props.broadcaster instanceof Array ){
          broadcaster = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.broadcaster ){
            broadcaster.push( ( <Organization {...props.broadcaster } /> ) );          }
        } else {
          broadcaster = ( <Organization props={ props.broadcaster } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
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
