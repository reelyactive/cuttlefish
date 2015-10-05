/* Thing > Intangible > Enumeration > QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */  var QualitativeValue= React.createClass({displayName: "QualitativeValue",
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
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. valueReference is a Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue."}) )
           }) );
         valueReference.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            valueReference = ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a Enumeration or" + ' ' +
"StructuredValue or" + ' ' +
"PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue."}) );
        }
      }
      var greater;
      if( props.greater ){
        if( props.greater instanceof Array ){
          greater = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          greater = greater.concat( props.greater.map( function(result, index){
              return ( React.createElement(QualitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         greater.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          greater = ( React.createElement(QualitativeValue, {props:  props.greater}) );        }
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
      var lesserOrEqual;
      if( props.lesserOrEqual ){
        if( props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          lesserOrEqual = lesserOrEqual.concat( props.lesserOrEqual.map( function(result, index){
              return ( React.createElement(QualitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         lesserOrEqual.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          lesserOrEqual = ( React.createElement(QualitativeValue, {props:  props.lesserOrEqual}) );        }
      }
      var equal;
      if( props.equal ){
        if( props.equal instanceof Array ){
          equal = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          equal = equal.concat( props.equal.map( function(result, index){
              return ( React.createElement(QualitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         equal.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          equal = ( React.createElement(QualitativeValue, {props:  props.equal}) );        }
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
      var lesser;
      if( props.lesser ){
        if( props.lesser instanceof Array ){
          lesser = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          lesser = lesser.concat( props.lesser.map( function(result, index){
              return ( React.createElement(QualitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         lesser.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          lesser = ( React.createElement(QualitativeValue, {props:  props.lesser}) );        }
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
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          supersededBy = supersededBy.concat( props.supersededBy.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. supersededBy is a Class or" + ' ' +
"Property or" + ' ' +
"Enumeration."}) )
           }) );
         supersededBy.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            supersededBy = ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Class or" + ' ' +
"Property or" + ' ' +
"Enumeration."}) );
        }
      }
      var greaterOrEqual;
      if( props.greaterOrEqual ){
        if( props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          greaterOrEqual = greaterOrEqual.concat( props.greaterOrEqual.map( function(result, index){
              return ( React.createElement(QualitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         greaterOrEqual.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          greaterOrEqual = ( React.createElement(QualitativeValue, {props:  props.greaterOrEqual}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
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
      var nonEqual;
      if( props.nonEqual ){
        if( props.nonEqual instanceof Array ){
          nonEqual = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          nonEqual = nonEqual.concat( props.nonEqual.map( function(result, index){
              return ( React.createElement(QualitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         nonEqual.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          nonEqual = ( React.createElement(QualitativeValue, {props:  props.nonEqual}) );        }
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
      return (React.createElement("div", {title: "QualitativeValue", className: "QualitativeValue entity"}, 
         potentialAction, 
         valueReference, 
         greater, 
         sameAs, 
         lesserOrEqual, 
         equal, 
         name, 
         lesser, 
         url, 
         additionalProperty, 
         supersededBy, 
         greaterOrEqual, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         nonEqual, 
         image, 
         description 
     ));
    }
  });
