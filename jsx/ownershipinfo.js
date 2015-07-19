/* Thing > Intangible > StructuredValue > OwnershipInfo - A structured value providing information about when a certain organization or person owned a certain product.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './product', './imageobject', './datetime', './person', './action', './organization', './creativework'], function(React, Product, ImageObject, DateTime, Person, Action, Organization, CreativeWork){
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
      var ownedFrom;
      if( props.ownedFrom ){
        if( props.ownedFrom instanceof Array ){
          ownedFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.ownedFrom ){
            ownedFrom.push( ( <DateTime {...props.ownedFrom } /> ) );          }
        } else {
          ownedFrom = ( <DateTime props={ props.ownedFrom } /> );        }
      }
      var acquiredFrom;
      if( props.acquiredFrom ){
        if( props.acquiredFrom instanceof Array ){
          acquiredFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.acquiredFrom ){
            acquiredFrom.push( ( <div data-advice='Put your HTML here. acquiredFrom is a Person or
Organization.'></div> ) );
          }
        } else {
            acquiredFrom = ( <div data-advice='Put your HTML here. acquiredFrom is a Person or
Organization.'></div> );
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
      var ownedThrough;
      if( props.ownedThrough ){
        if( props.ownedThrough instanceof Array ){
          ownedThrough = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.ownedThrough ){
            ownedThrough.push( ( <DateTime {...props.ownedThrough } /> ) );          }
        } else {
          ownedThrough = ( <DateTime props={ props.ownedThrough } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
      var typeOfGood;
      if( props.typeOfGood ){
        if( props.typeOfGood instanceof Array ){
          typeOfGood = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.typeOfGood ){
            typeOfGood.push( ( <Product {...props.typeOfGood } /> ) );          }
        } else {
          typeOfGood = ( <Product props={ props.typeOfGood } /> );        }
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
      return (<div title='OwnershipInfo' className='OwnershipInfo entity'>
        { potentialAction }
        { description }
        { sameAs }
        { ownedFrom }
        { acquiredFrom }
        { url }
        { ownedThrough }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { image }
        { typeOfGood }
        { name }
     </div>);
    }
  });
});
