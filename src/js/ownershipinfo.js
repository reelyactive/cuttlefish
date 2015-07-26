/* Thing > Intangible > StructuredValue > OwnershipInfo - A structured value providing information about when a certain organization or person owned a certain product.. Generated automatically by the reactGenerator. */  var OwnershipInfo= React.createClass({displayName: "OwnershipInfo",
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
      var ownedFrom;
      if( props.ownedFrom ){
        if( props.ownedFrom instanceof Array ){
          ownedFrom = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          ownedFrom = ownedFrom.concat( props.ownedFrom.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         ownedFrom.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          ownedFrom = ( React.createElement(DateTime, {props:  props.ownedFrom}) );        }
      }
      var acquiredFrom;
      if( props.acquiredFrom ){
        if( props.acquiredFrom instanceof Array ){
          acquiredFrom = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          acquiredFrom = acquiredFrom.concat( props.acquiredFrom.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. acquiredFrom is a Person or" + ' ' +
"Organization."}) )
           }) );
         acquiredFrom.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            acquiredFrom = ( React.createElement("div", {"data-advice": "Put your HTML here. acquiredFrom is a Person or" + ' ' +
"Organization."}) );
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
      var ownedThrough;
      if( props.ownedThrough ){
        if( props.ownedThrough instanceof Array ){
          ownedThrough = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          ownedThrough = ownedThrough.concat( props.ownedThrough.map( function(result, index){
              return ( React.createElement(DateTime, React.__spread({},  result, {key: index})) )
           }) );
         ownedThrough.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          ownedThrough = ( React.createElement(DateTime, {props:  props.ownedThrough}) );        }
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
      var typeOfGood;
      if( props.typeOfGood ){
        if( props.typeOfGood instanceof Array ){
          typeOfGood = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          typeOfGood = typeOfGood.concat( props.typeOfGood.map( function(result, index){
              return ( React.createElement(Product, React.__spread({},  result, {key: index})) )
           }) );
         typeOfGood.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          typeOfGood = ( React.createElement(Product, {props:  props.typeOfGood}) );        }
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
      return (React.createElement("div", {title: "OwnershipInfo", className: "OwnershipInfo entity"}, 
         potentialAction, 
         description, 
         sameAs, 
         ownedFrom, 
         acquiredFrom, 
         url, 
         ownedThrough, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         image, 
         typeOfGood, 
         name 
     ));
    }
  });
