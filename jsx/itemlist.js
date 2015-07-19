/* Thing > Intangible > ItemList - A list of items of any sort\u2014for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './imageobject', './thing', './listitem', './action', './integer', './itemlistordertype', './creativework'], function(React, ImageObject, Thing, ListItem, Action, Integer, ItemListOrderType, CreativeWork){
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
      var itemListOrder;
      if( props.itemListOrder ){
        if( props.itemListOrder instanceof Array ){
          itemListOrder = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          itemListOrder = itemListOrder.concat( props.itemListOrder.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. itemListOrder is a ItemListOrderType or
Text.'></div> )
           }) );
         itemListOrder.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            itemListOrder = ( <div data-advice='Put your HTML here. itemListOrder is a ItemListOrderType or
Text.'></div> );
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
      var numberOfItems;
      if( props.numberOfItems ){
        if( props.numberOfItems instanceof Array ){
          numberOfItems = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          numberOfItems = numberOfItems.concat( props.numberOfItems.map( function(result, index){
              return ( <Integer {...result} key={index} /> )
           }) );
         numberOfItems.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          numberOfItems = ( <Integer props={ props.numberOfItems } /> );        }
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
      var itemListElement;
      if( props.itemListElement ){
        if( props.itemListElement instanceof Array ){
          itemListElement = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          itemListElement = itemListElement.concat( props.itemListElement.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. itemListElement is a Thing or
ListItem or
Text.'></div> )
           }) );
         itemListElement.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            itemListElement = ( <div data-advice='Put your HTML here. itemListElement is a Thing or
ListItem or
Text.'></div> );
        }
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
      return (<div title='ItemList' className='ItemList entity'>
        { potentialAction }
        { description }
        { sameAs }
        { image }
        { itemListOrder }
        { url }
        { numberOfItems }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { itemListElement }
        { name }
     </div>);
    }
  });
});
