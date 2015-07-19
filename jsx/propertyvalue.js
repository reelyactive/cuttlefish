/* Thing > Intangible > StructuredValue > PropertyValue - A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.

Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './quantitativevalue', './enumeration', './propertyvalue', './qualitativevalue', './boolean', './action', './structuredvalue', './creativework', './imageobject'], function(React, QuantitativeValue, Enumeration, PropertyValue, QualitativeValue, Boolean, Action, StructuredValue, CreativeWork, ImageObject){
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
      var propertyID;
      if( this.props.propertyID ){
        if( this.props.propertyID instanceof Array ){
          propertyID = [(<p>propertyID:</p> )];
          for( i in this.props.propertyID ){
            propertyID.push( ( <div class='propertyID'></div> ) );
          }
        } else {
          propertyID = ( <div class='propertyID'>{this.props.propertyID}</div> );
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
      return (<div title='PropertyValue' className='PropertyValue entity'>
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
        { unitText }
        { mainEntityOfPage }
        { unitCode }
        { alternateName }
        { propertyID }
        { name }
     </div>);
    }
  });
});
