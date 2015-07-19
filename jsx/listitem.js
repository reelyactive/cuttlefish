/* Thing > Intangible > ListItem - An list item, e.g. a step in a checklist or how-to description.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './imageobject', './thing', './listitem', './action', './integer', './creativework'], function(React, ImageObject, Thing, ListItem, Action, Integer, CreativeWork){
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
      var nextItem;
      if( this.props.nextItem ){
        if( this.props.nextItem instanceof Array ){
          nextItem = [(<p>nextItem:</p> )];
          for( i in this.props.nextItem ){
            nextItem.push( ( <ListItem props={ this.props.nextItem } /> ) );          }
        } else {
          nextItem = ( <ListItem props={ this.props.nextItem } /> );        }
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
      var item;
      if( this.props.item ){
        if( this.props.item instanceof Array ){
          item = [(<p>item:</p> )];
          for( i in this.props.item ){
            item.push( ( <Thing props={ this.props.item } /> ) );          }
        } else {
          item = ( <Thing props={ this.props.item } /> );        }
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
      var position;
      if( this.props.position ){
        if( this.props.position instanceof Array ){
          position = [(<p>position:</p> )];
          for( i in this.props.position ){
            position.push( ( <div class='position'></div> ) );
          }
        } else {
          position = ( <div class='position'>{this.props.position}</div> );
        }
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
      var previousItem;
      if( this.props.previousItem ){
        if( this.props.previousItem instanceof Array ){
          previousItem = [(<p>previousItem:</p> )];
          for( i in this.props.previousItem ){
            previousItem.push( ( <ListItem props={ this.props.previousItem } /> ) );          }
        } else {
          previousItem = ( <ListItem props={ this.props.previousItem } /> );        }
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
      return (<div title='ListItem' className='ListItem entity'>
        { potentialAction }
        { description }
        { nextItem }
        { sameAs }
        { image }
        { item }
        { url }
        { position }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { previousItem }
        { name }
     </div>);
    }
  });
});
