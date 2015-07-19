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
      var ownedFrom;
      if( this.props.ownedFrom ){
        if( this.props.ownedFrom instanceof Array ){
          ownedFrom = [(<p>ownedFrom:</p> )];
          for( i in this.props.ownedFrom ){
            ownedFrom.push( ( <DateTime props={ this.props.ownedFrom } /> ) );          }
        } else {
          ownedFrom = ( <DateTime props={ this.props.ownedFrom } /> );        }
      }
      var acquiredFrom;
      if( this.props.acquiredFrom ){
        if( this.props.acquiredFrom instanceof Array ){
          acquiredFrom = [(<p>acquiredFrom:</p> )];
          for( i in this.props.acquiredFrom ){
            acquiredFrom.push( ( <div class='acquiredFrom'></div> ) );
          }
        } else {
          acquiredFrom = ( <div class='acquiredFrom'>{this.props.acquiredFrom}</div> );
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
      var ownedThrough;
      if( this.props.ownedThrough ){
        if( this.props.ownedThrough instanceof Array ){
          ownedThrough = [(<p>ownedThrough:</p> )];
          for( i in this.props.ownedThrough ){
            ownedThrough.push( ( <DateTime props={ this.props.ownedThrough } /> ) );          }
        } else {
          ownedThrough = ( <DateTime props={ this.props.ownedThrough } /> );        }
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
      var typeOfGood;
      if( this.props.typeOfGood ){
        if( this.props.typeOfGood instanceof Array ){
          typeOfGood = [(<p>typeOfGood:</p> )];
          for( i in this.props.typeOfGood ){
            typeOfGood.push( ( <Product props={ this.props.typeOfGood } /> ) );          }
        } else {
          typeOfGood = ( <Product props={ this.props.typeOfGood } /> );        }
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
