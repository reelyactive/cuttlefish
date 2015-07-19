/* Thing > Intangible > StructuredValue > TypeAndQuantityNode - A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './businessfunction', './creativework', './product', './imageobject'], function(React, Action, BusinessFunction, CreativeWork, Product, ImageObject){
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
      var businessFunction;
      if( this.props.businessFunction ){
        if( this.props.businessFunction instanceof Array ){
          businessFunction = [(<p>businessFunction:</p> )];
          for( i in this.props.businessFunction ){
            businessFunction.push( ( <BusinessFunction props={ this.props.businessFunction } /> ) );          }
        } else {
          businessFunction = ( <BusinessFunction props={ this.props.businessFunction } /> );        }
      }
      var unitText;
      if( this.props.unitText ){
        if( this.props.unitText instanceof Array ){
          unitText = [(<p>unitText:</p> )];
          for( i in this.props.unitText ){
            unitText.push( ( <div class='unitText'></div> ) );
          }
        } else {
          unitText = ( <div class='unitText'>{this.props.unitText}</div> );
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
      var amountOfThisGood;
      if( this.props.amountOfThisGood ){
        if( this.props.amountOfThisGood instanceof Array ){
          amountOfThisGood = [(<p>amountOfThisGood:</p> )];
          for( i in this.props.amountOfThisGood ){
            amountOfThisGood.push( ( <div class='amountOfThisGood'></div> ) );
          }
        } else {
          amountOfThisGood = ( <div class='amountOfThisGood'>{this.props.amountOfThisGood}</div> );
        }
      }
      var unitCode;
      if( this.props.unitCode ){
        if( this.props.unitCode instanceof Array ){
          unitCode = [(<p>unitCode:</p> )];
          for( i in this.props.unitCode ){
            unitCode.push( ( <div class='unitCode'></div> ) );
          }
        } else {
          unitCode = ( <div class='unitCode'>{this.props.unitCode}</div> );
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
      return (<div title='TypeAndQuantityNode' className='TypeAndQuantityNode entity'>
        { potentialAction }
        { description }
        { sameAs }
        { businessFunction }
        { unitText }
        { url }
        { amountOfThisGood }
        { unitCode }
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
