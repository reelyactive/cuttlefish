/* Thing > Intangible > StructuredValue > QuantitativeValue - A point value or interval for product characteristics and other purposes.. Generated automatically by the reactGenerator. */  var QuantitativeValue= React.createClass({
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
      var valueReference;
      if( props.valueReference ){
        if( props.valueReference instanceof Array ){
          valueReference = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          valueReference = valueReference.concat( props.valueReference.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. valueReference is a Enumeration or
StructuredValue or
PropertyValue or
QuantitativeValue or
QualitativeValue.'></div> )
           }) );
         valueReference.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            valueReference = ( <div data-advice='Put your HTML here. valueReference is a Enumeration or
StructuredValue or
PropertyValue or
QuantitativeValue or
QualitativeValue.'></div> );
        }
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
      var maxValue;
      if( props.maxValue ){
        if( props.maxValue instanceof Array ){
          maxValue = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          maxValue = maxValue.concat( props.maxValue.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. maxValue is a Number.'></div> )
           }) );
         maxValue.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            maxValue = ( <div data-advice='Put your HTML here. maxValue is a Number.'></div> );
        }
      }
      var value;
      if( props.value ){
        if( props.value instanceof Array ){
          value = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          value = value.concat( props.value.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. value is a Number or
StructuredValue or
Boolean or
Text.'></div> )
           }) );
         value.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            value = ( <div data-advice='Put your HTML here. value is a Number or
StructuredValue or
Boolean or
Text.'></div> );
        }
      }
      var minValue;
      if( props.minValue ){
        if( props.minValue instanceof Array ){
          minValue = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          minValue = minValue.concat( props.minValue.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. minValue is a Number.'></div> )
           }) );
         minValue.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            minValue = ( <div data-advice='Put your HTML here. minValue is a Number.'></div> );
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
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalProperty = additionalProperty.concat( props.additionalProperty.map( function(result, index){
              return ( <PropertyValue {...result} key={index} /> )
           }) );
         additionalProperty.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          additionalProperty = ( <PropertyValue props={ props.additionalProperty } /> );        }
      }
      var unitText;
      if( props.unitText ){
        if( props.unitText instanceof Array ){
          unitText = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          unitText = unitText.concat( props.unitText.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. unitText is a Text.'></div> )
           }) );
         unitText.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            unitText = ( <div data-advice='Put your HTML here. unitText is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var unitCode;
      if( props.unitCode ){
        if( props.unitCode instanceof Array ){
          unitCode = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          unitCode = unitCode.concat( props.unitCode.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. unitCode is a URL or
Text.'></div> )
           }) );
         unitCode.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            unitCode = ( <div data-advice='Put your HTML here. unitCode is a URL or
Text.'></div> );
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
