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
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var broadcastDisplayName;
      if( this.props.broadcastDisplayName ){
        if( this.props.broadcastDisplayName instanceof Array ){
          broadcastDisplayName = [(<p>broadcastDisplayName:</p> )];
          for( i in this.props.broadcastDisplayName ){
            broadcastDisplayName.push( ( <div class='broadcastDisplayName'></div> ) );
          }
        } else {
          broadcastDisplayName = ( <div class='broadcastDisplayName'>{this.props.broadcastDisplayName}</div> );
        }
      }
      var broadcastTimezone;
      if( this.props.broadcastTimezone ){
        if( this.props.broadcastTimezone instanceof Array ){
          broadcastTimezone = [(<p>broadcastTimezone:</p> )];
          for( i in this.props.broadcastTimezone ){
            broadcastTimezone.push( ( <div class='broadcastTimezone'></div> ) );
          }
        } else {
          broadcastTimezone = ( <div class='broadcastTimezone'>{this.props.broadcastTimezone}</div> );
        }
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
      var broadcastAffiliateOf;
      if( this.props.broadcastAffiliateOf ){
        if( this.props.broadcastAffiliateOf instanceof Array ){
          broadcastAffiliateOf = [(<p>broadcastAffiliateOf:</p> )];
          for( i in this.props.broadcastAffiliateOf ){
            broadcastAffiliateOf.push( ( <Organization props={ this.props.broadcastAffiliateOf } /> ) );          }
        } else {
          broadcastAffiliateOf = ( <Organization props={ this.props.broadcastAffiliateOf } /> );        }
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
      var parentService;
      if( this.props.parentService ){
        if( this.props.parentService instanceof Array ){
          parentService = [(<p>parentService:</p> )];
          for( i in this.props.parentService ){
            parentService.push( ( <BroadcastService props={ this.props.parentService } /> ) );          }
        } else {
          parentService = ( <BroadcastService props={ this.props.parentService } /> );        }
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
      var broadcaster;
      if( this.props.broadcaster ){
        if( this.props.broadcaster instanceof Array ){
          broadcaster = [(<p>broadcaster:</p> )];
          for( i in this.props.broadcaster ){
            broadcaster.push( ( <Organization props={ this.props.broadcaster } /> ) );          }
        } else {
          broadcaster = ( <Organization props={ this.props.broadcaster } /> );        }
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
