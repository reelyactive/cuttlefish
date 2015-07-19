/* Thing > Intangible > Enumeration > QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './propertyvalue', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './imageobject', './action', './property', './creativework', './class'], function(React, PropertyValue, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, ImageObject, Action, Property, CreativeWork, Class){
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
      var valueReference;
      if( this.props.valueReference ){
        if( this.props.valueReference instanceof Array ){
          valueReference = [(<p>valueReference:</p> )];
          for( i in this.props.valueReference ){
            valueReference.push( ( <div class='valueReference'></div> ) );
          }
        } else {
          valueReference = ( <div class='valueReference'>{this.props.valueReference}</div> );
        }
      }
      var greater;
      if( this.props.greater ){
        if( this.props.greater instanceof Array ){
          greater = [(<p>greater:</p> )];
          for( i in this.props.greater ){
            greater.push( ( <QualitativeValue props={ this.props.greater } /> ) );          }
        } else {
          greater = ( <QualitativeValue props={ this.props.greater } /> );        }
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
      var lesserOrEqual;
      if( this.props.lesserOrEqual ){
        if( this.props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [(<p>lesserOrEqual:</p> )];
          for( i in this.props.lesserOrEqual ){
            lesserOrEqual.push( ( <QualitativeValue props={ this.props.lesserOrEqual } /> ) );          }
        } else {
          lesserOrEqual = ( <QualitativeValue props={ this.props.lesserOrEqual } /> );        }
      }
      var equal;
      if( this.props.equal ){
        if( this.props.equal instanceof Array ){
          equal = [(<p>equal:</p> )];
          for( i in this.props.equal ){
            equal.push( ( <QualitativeValue props={ this.props.equal } /> ) );          }
        } else {
          equal = ( <QualitativeValue props={ this.props.equal } /> );        }
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
      var lesser;
      if( this.props.lesser ){
        if( this.props.lesser instanceof Array ){
          lesser = [(<p>lesser:</p> )];
          for( i in this.props.lesser ){
            lesser.push( ( <QualitativeValue props={ this.props.lesser } /> ) );          }
        } else {
          lesser = ( <QualitativeValue props={ this.props.lesser } /> );        }
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
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [(<p>additionalProperty:</p> )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue props={ this.props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ this.props.additionalProperty } /> );        }
      }
      var supersededBy;
      if( this.props.supersededBy ){
        if( this.props.supersededBy instanceof Array ){
          supersededBy = [(<p>supersededBy:</p> )];
          for( i in this.props.supersededBy ){
            supersededBy.push( ( <div class='supersededBy'></div> ) );
          }
        } else {
          supersededBy = ( <div class='supersededBy'>{this.props.supersededBy}</div> );
        }
      }
      var greaterOrEqual;
      if( this.props.greaterOrEqual ){
        if( this.props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [(<p>greaterOrEqual:</p> )];
          for( i in this.props.greaterOrEqual ){
            greaterOrEqual.push( ( <QualitativeValue props={ this.props.greaterOrEqual } /> ) );          }
        } else {
          greaterOrEqual = ( <QualitativeValue props={ this.props.greaterOrEqual } /> );        }
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
      var nonEqual;
      if( this.props.nonEqual ){
        if( this.props.nonEqual instanceof Array ){
          nonEqual = [(<p>nonEqual:</p> )];
          for( i in this.props.nonEqual ){
            nonEqual.push( ( <QualitativeValue props={ this.props.nonEqual } /> ) );          }
        } else {
          nonEqual = ( <QualitativeValue props={ this.props.nonEqual } /> );        }
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
      return (<div title='QualitativeValue' className='QualitativeValue entity'>
        { potentialAction }
        { valueReference }
        { greater }
        { sameAs }
        { lesserOrEqual }
        { equal }
        { name }
        { lesser }
        { url }
        { additionalProperty }
        { supersededBy }
        { greaterOrEqual }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { nonEqual }
        { image }
        { description }
     </div>);
    }
  });
});
