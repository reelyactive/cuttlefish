/* Thing > Intangible > StructuredValue > OwnershipInfo - A structured value providing information about when a certain organization or person owned a certain product.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './product', './imageobject', './datetime', './person', './action', './organization', './creativework'], function(React, Product, ImageObject, DateTime, Person, Action, Organization, CreativeWork){
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
      var ownedFrom;
      if( this.props.ownedFrom ){
        if( this.props.ownedFrom instanceof Array ){
          ownedFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.ownedFrom ){
            ownedFrom.push( ( <DateTime {...this.props.ownedFrom } /> ) );          }
        } else {
          ownedFrom = ( <DateTime props={ this.props.ownedFrom } /> );        }
      }
      var acquiredFrom;
      if( this.props.acquiredFrom ){
        if( this.props.acquiredFrom instanceof Array ){
          acquiredFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.acquiredFrom ){
            acquiredFrom.push( ( <div data-advice='Put your HTML here. acquiredFrom is a Person or
Organization.'></div> ) );
          }
        } else {
            acquiredFrom = ( <div data-advice='Put your HTML here. acquiredFrom is a Person or
Organization.'></div> );
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
      var ownedThrough;
      if( this.props.ownedThrough ){
        if( this.props.ownedThrough instanceof Array ){
          ownedThrough = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.ownedThrough ){
            ownedThrough.push( ( <DateTime {...this.props.ownedThrough } /> ) );          }
        } else {
          ownedThrough = ( <DateTime props={ this.props.ownedThrough } /> );        }
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
      var typeOfGood;
      if( this.props.typeOfGood ){
        if( this.props.typeOfGood instanceof Array ){
          typeOfGood = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.typeOfGood ){
            typeOfGood.push( ( <Product {...this.props.typeOfGood } /> ) );          }
        } else {
          typeOfGood = ( <Product props={ this.props.typeOfGood } /> );        }
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
