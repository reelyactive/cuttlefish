/* Thing > Intangible > AlignmentObject - An intangible item that describes an alignment between a learning resource and a node in an educational framework.. Generated automatically by the reactGenerator. */  var AlignmentObject= React.createClass({displayName: "AlignmentObject",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var alignmentType;
      if( props.alignmentType ){
        if( props.alignmentType instanceof Array ){
          alignmentType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alignmentType = alignmentType.concat( props.alignmentType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alignmentType is a Text."}) )
           }) );
         alignmentType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alignmentType = ( React.createElement("div", {"data-advice": "Put your HTML here. alignmentType is a Text."}) );
        }
      }
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
      var educationalFramework;
      if( props.educationalFramework ){
        if( props.educationalFramework instanceof Array ){
          educationalFramework = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          educationalFramework = educationalFramework.concat( props.educationalFramework.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. educationalFramework is a Text."}) )
           }) );
         educationalFramework.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            educationalFramework = ( React.createElement("div", {"data-advice": "Put your HTML here. educationalFramework is a Text."}) );
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
      var targetUrl;
      if( props.targetUrl ){
        if( props.targetUrl instanceof Array ){
          targetUrl = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          targetUrl = targetUrl.concat( props.targetUrl.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. targetUrl is a URL."}) )
           }) );
         targetUrl.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            targetUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. targetUrl is a URL."}) );
        }
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
      var targetName;
      if( props.targetName ){
        if( props.targetName instanceof Array ){
          targetName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          targetName = targetName.concat( props.targetName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. targetName is a Text."}) )
           }) );
         targetName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            targetName = ( React.createElement("div", {"data-advice": "Put your HTML here. targetName is a Text."}) );
        }
      }
      var targetDescription;
      if( props.targetDescription ){
        if( props.targetDescription instanceof Array ){
          targetDescription = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          targetDescription = targetDescription.concat( props.targetDescription.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. targetDescription is a Text."}) )
           }) );
         targetDescription.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            targetDescription = ( React.createElement("div", {"data-advice": "Put your HTML here. targetDescription is a Text."}) );
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
      return (React.createElement("div", {title: "AlignmentObject", className: "AlignmentObject entity"}, 
         alignmentType, 
         potentialAction, 
         description, 
         sameAs, 
         image, 
         educationalFramework, 
         url, 
         targetUrl, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         targetName, 
         targetDescription, 
         name 
     ));
    }
  });
