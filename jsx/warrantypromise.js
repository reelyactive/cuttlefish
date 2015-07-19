/* Thing > Intangible > StructuredValue > WarrantyPromise - A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './warrantyscope', './creativework', './quantitativevalue', './imageobject'], function(React, Action, WarrantyScope, CreativeWork, QuantitativeValue, ImageObject){
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
      var warrantyScope;
      if( this.props.warrantyScope ){
        if( this.props.warrantyScope instanceof Array ){
          warrantyScope = [(<p>warrantyScope:</p> )];
          for( i in this.props.warrantyScope ){
            warrantyScope.push( ( <WarrantyScope props={ this.props.warrantyScope } /> ) );          }
        } else {
          warrantyScope = ( <WarrantyScope props={ this.props.warrantyScope } /> );        }
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
      var durationOfWarranty;
      if( this.props.durationOfWarranty ){
        if( this.props.durationOfWarranty instanceof Array ){
          durationOfWarranty = [(<p>durationOfWarranty:</p> )];
          for( i in this.props.durationOfWarranty ){
            durationOfWarranty.push( ( <QuantitativeValue props={ this.props.durationOfWarranty } /> ) );          }
        } else {
          durationOfWarranty = ( <QuantitativeValue props={ this.props.durationOfWarranty } /> );        }
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
      return (<div title='WarrantyPromise' className='WarrantyPromise entity'>
        { potentialAction }
        { description }
        { sameAs }
        { warrantyScope }
        { image }
        { url }
        { durationOfWarranty }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { name }
     </div>);
    }
  });
});
