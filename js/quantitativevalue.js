/* Thing > Intangible > StructuredValue > QuantitativeValue - A point value or interval for product characteristics and other purposes.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './boolean', './action', './propertyvalue', './creativework', './imageobject'], function(React, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, Boolean, Action, PropertyValue, CreativeWork, ImageObject){
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
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var valueReference;
      if( props.valueReference ){
        if( props.valueReference instanceof Array ){
          valueReference = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          valueReference = valueReference.concat( props.valueReference.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. valueReference is a PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue."}) )
           }) );
         valueReference.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            valueReference = ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue."}) );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var maxValue;
      if( props.maxValue ){
        if( props.maxValue instanceof Array ){
          maxValue = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          maxValue = maxValue.concat( props.maxValue.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. maxValue is a Number."}) )
           }) );
         maxValue.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            maxValue = ( React.createElement("div", {"data-advice": "Put your HTML here. maxValue is a Number."}) );
        }
      }
      var value;
      if( props.value ){
        if( props.value instanceof Array ){
          value = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          value = value.concat( props.value.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. value is a Boolean or" + ' ' +
"Text or" + ' ' +
"Number or" + ' ' +
"StructuredValue."}) )
           }) );
         value.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            value = ( React.createElement("div", {"data-advice": "Put your HTML here. value is a Boolean or" + ' ' +
"Text or" + ' ' +
"Number or" + ' ' +
"StructuredValue."}) );
        }
      }
      var minValue;
      if( props.minValue ){
        if( props.minValue instanceof Array ){
          minValue = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          minValue = minValue.concat( props.minValue.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. minValue is a Number."}) )
           }) );
         minValue.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            minValue = ( React.createElement("div", {"data-advice": "Put your HTML here. minValue is a Number."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalProperty = additionalProperty.concat( props.additionalProperty.map( function(result, index){
              return ( React.createElement(PropertyValue, React.__spread({},  result, {key: index})) )
           }) );
         additionalProperty.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  props.additionalProperty}) );        }
      }
      var unitText;
      if( props.unitText ){
        if( props.unitText instanceof Array ){
          unitText = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          unitText = unitText.concat( props.unitText.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. unitText is a Text."}) )
           }) );
         unitText.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            unitText = ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var unitCode;
      if( props.unitCode ){
        if( props.unitCode instanceof Array ){
          unitCode = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          unitCode = unitCode.concat( props.unitCode.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. unitCode is a URL or" + ' ' +
"Text."}) )
           }) );
         unitCode.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            unitCode = ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a URL or" + ' ' +
"Text."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "QuantitativeValue", className: "QuantitativeValue entity"}, 
         potentialAction, 
         valueReference, 
         description, 
         sameAs, 
         image, 
         maxValue, 
         value, 
         minValue, 
         additionalType, 
         url, 
         additionalProperty, 
         unitText, 
         mainEntityOfPage, 
         unitCode, 
         alternateName, 
         name 
     ));
    }
  });
});
