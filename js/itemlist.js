/* Thing > Intangible > ItemList - A list of items of any sort\u2014for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './imageobject', './thing', './listitem', './action', './integer', './itemlistordertype', './creativework'], function(React, ImageObject, Thing, ListItem, Action, Integer, ItemListOrderType, CreativeWork){
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
      var itemListOrder;
      if( this.props.itemListOrder ){
        if( this.props.itemListOrder instanceof Array ){
          itemListOrder = [(React.createElement("p", null, "itemListOrder:") )];
          for( i in this.props.itemListOrder ){
            itemListOrder.push( ( React.createElement("div", {class: "itemListOrder"}) ) );
          }
        } else {
          itemListOrder = ( React.createElement("div", {class: "itemListOrder"}, this.props.itemListOrder) );
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
      var numberOfItems;
      if( this.props.numberOfItems ){
        if( this.props.numberOfItems instanceof Array ){
          numberOfItems = [(React.createElement("p", null, "numberOfItems:") )];
          for( i in this.props.numberOfItems ){
            numberOfItems.push( ( React.createElement(Integer, {props:  this.props.numberOfItems}) ) );          }
        } else {
          numberOfItems = ( React.createElement(Integer, {props:  this.props.numberOfItems}) );        }
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
      var itemListElement;
      if( this.props.itemListElement ){
        if( this.props.itemListElement instanceof Array ){
          itemListElement = [(React.createElement("p", null, "itemListElement:") )];
          for( i in this.props.itemListElement ){
            itemListElement.push( ( React.createElement("div", {class: "itemListElement"}) ) );
          }
        } else {
          itemListElement = ( React.createElement("div", {class: "itemListElement"}, this.props.itemListElement) );
        }
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
      return (React.createElement("div", {title: "ItemList", className: "ItemList entity"}, 
         potentialAction, 
         description, 
         sameAs, 
         image, 
         itemListOrder, 
         url, 
         numberOfItems, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         itemListElement, 
         name 
     ));
    }
  });
});
