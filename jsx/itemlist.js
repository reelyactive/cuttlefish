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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
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
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
        }
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
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
        }
      }
      var itemListOrder;
      if( this.props.itemListOrder ){
        if( this.props.itemListOrder instanceof Array ){
          itemListOrder = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.itemListOrder ){
            itemListOrder.push( ( <div data-advice='Put your HTML here. itemListOrder is a ItemListOrderType or
Text.'></div> ) );
          }
        } else {
            itemListOrder.push( ( <div data-advice='Put your HTML here. itemListOrder is a ItemListOrderType or
Text.'></div> ) );
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
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
        }
      }
      var numberOfItems;
      if( this.props.numberOfItems ){
        if( this.props.numberOfItems instanceof Array ){
          numberOfItems = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.numberOfItems ){
            numberOfItems.push( ( <Integer props={ this.props.numberOfItems } /> ) );          }
        } else {
          numberOfItems = ( <Integer props={ this.props.numberOfItems } /> );        }
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
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
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
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
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
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
        }
      }
      var itemListElement;
      if( this.props.itemListElement ){
        if( this.props.itemListElement instanceof Array ){
          itemListElement = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.itemListElement ){
            itemListElement.push( ( <div data-advice='Put your HTML here. itemListElement is a Thing or
Text or
ListItem.'></div> ) );
          }
        } else {
            itemListElement.push( ( <div data-advice='Put your HTML here. itemListElement is a Thing or
Text or
ListItem.'></div> ) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
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
