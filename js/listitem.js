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
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
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
      var nextItem;
      if( this.props.nextItem ){
        if( this.props.nextItem instanceof Array ){
          nextItem = [(React.createElement("p", null, "nextItem:") )];
          for( i in this.props.nextItem ){
            nextItem.push( ( React.createElement(ListItem, {props:  this.props.nextItem}) ) );          }
        } else {
          nextItem = ( React.createElement(ListItem, {props:  this.props.nextItem}) );        }
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
      var item;
      if( this.props.item ){
        if( this.props.item instanceof Array ){
          item = [(React.createElement("p", null, "item:") )];
          for( i in this.props.item ){
            item.push( ( React.createElement(Thing, {props:  this.props.item}) ) );          }
        } else {
          item = ( React.createElement(Thing, {props:  this.props.item}) );        }
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
      var position;
      if( this.props.position ){
        if( this.props.position instanceof Array ){
          position = [(React.createElement("p", null, "position:") )];
          for( i in this.props.position ){
            position.push( ( React.createElement("div", {class: "position"}) ) );
          }
        } else {
          position = ( React.createElement("div", {class: "position"}, this.props.position) );
        }
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
      var previousItem;
      if( this.props.previousItem ){
        if( this.props.previousItem instanceof Array ){
          previousItem = [(React.createElement("p", null, "previousItem:") )];
          for( i in this.props.previousItem ){
            previousItem.push( ( React.createElement(ListItem, {props:  this.props.previousItem}) ) );          }
        } else {
          previousItem = ( React.createElement(ListItem, {props:  this.props.previousItem}) );        }
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
      return (React.createElement("div", {title: "ListItem", className: "ListItem entity"}, 
         potentialAction, 
         description, 
         nextItem, 
         sameAs, 
         image, 
         item, 
         url, 
         position, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         previousItem, 
         name 
     ));
    }
  });
});
