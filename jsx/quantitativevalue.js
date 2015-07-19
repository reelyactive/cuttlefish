/* Thing > Intangible > StructuredValue > QuantitativeValue - A point value or interval for product characteristics and other purposes.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './boolean', './action', './propertyvalue', './creativework', './imageobject'], function(React, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, Boolean, Action, PropertyValue, CreativeWork, ImageObject){
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
      var maxValue;
      if( this.props.maxValue ){
        if( this.props.maxValue instanceof Array ){
          maxValue = [(<p>maxValue:</p> )];
          for( i in this.props.maxValue ){
            maxValue.push( ( <div class='maxValue'></div> ) );
          }
        } else {
          maxValue = ( <div class='maxValue'>{this.props.maxValue}</div> );
        }
      }
      var value;
      if( this.props.value ){
        if( this.props.value instanceof Array ){
          value = [(<p>value:</p> )];
          for( i in this.props.value ){
            value.push( ( <div class='value'></div> ) );
          }
        } else {
          value = ( <div class='value'>{this.props.value}</div> );
        }
      }
      var minValue;
      if( this.props.minValue ){
        if( this.props.minValue instanceof Array ){
          minValue = [(<p>minValue:</p> )];
          for( i in this.props.minValue ){
            minValue.push( ( <div class='minValue'></div> ) );
          }
        } else {
          minValue = ( <div class='minValue'>{this.props.minValue}</div> );
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
      return (<div title='QuantitativeValue' className='QuantitativeValue entity'>
        { potentialAction }
        { valueReference }
        { description }
        { sameAs }
        { image }
        { maxValue }
        { value }
        { minValue }
        { additionalType }
        { url }
        { additionalProperty }
        { unitText }
        { mainEntityOfPage }
        { unitCode }
        { alternateName }
        { name }
     </div>);
    }
  });
});
