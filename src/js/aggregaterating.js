/* Thing > Intangible > Rating > AggregateRating - The average rating based on multiple ratings or reviews.. Generated automatically by the reactGenerator. */  var AggregateRating= React.createClass({displayName: "AggregateRating",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var reviewCount;
      if( props.reviewCount ){
        if( props.reviewCount instanceof Array ){
          reviewCount = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          reviewCount = reviewCount.concat( props.reviewCount.map( function(result, index){
              return ( React.createElement(Integer, React.__spread({},  result, {key: index})) )
           }) );
         reviewCount.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          reviewCount = ( React.createElement(Integer, {props:  props.reviewCount}) );        }
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
      var bestRating;
      if( props.bestRating ){
        if( props.bestRating instanceof Array ){
          bestRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          bestRating = bestRating.concat( props.bestRating.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. bestRating is a Number or" + ' ' +
"Text."}) )
           }) );
         bestRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            bestRating = ( React.createElement("div", {"data-advice": "Put your HTML here. bestRating is a Number or" + ' ' +
"Text."}) );
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
      var worstRating;
      if( props.worstRating ){
        if( props.worstRating instanceof Array ){
          worstRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          worstRating = worstRating.concat( props.worstRating.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. worstRating is a Number or" + ' ' +
"Text."}) )
           }) );
         worstRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            worstRating = ( React.createElement("div", {"data-advice": "Put your HTML here. worstRating is a Number or" + ' ' +
"Text."}) );
        }
      }
      var ratingCount;
      if( props.ratingCount ){
        if( props.ratingCount instanceof Array ){
          ratingCount = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          ratingCount = ratingCount.concat( props.ratingCount.map( function(result, index){
              return ( React.createElement(Integer, React.__spread({},  result, {key: index})) )
           }) );
         ratingCount.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          ratingCount = ( React.createElement(Integer, {props:  props.ratingCount}) );        }
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
      var itemReviewed;
      if( props.itemReviewed ){
        if( props.itemReviewed instanceof Array ){
          itemReviewed = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          itemReviewed = itemReviewed.concat( props.itemReviewed.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         itemReviewed.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          itemReviewed = ( React.createElement(Thing, {props:  props.itemReviewed}) );        }
      }
      var ratingValue;
      if( props.ratingValue ){
        if( props.ratingValue instanceof Array ){
          ratingValue = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          ratingValue = ratingValue.concat( props.ratingValue.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. ratingValue is a Text."}) )
           }) );
         ratingValue.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            ratingValue = ( React.createElement("div", {"data-advice": "Put your HTML here. ratingValue is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "AggregateRating", className: "AggregateRating entity"}, 
         reviewCount, 
         potentialAction, 
         description, 
         name, 
         sameAs, 
         image, 
         bestRating, 
         url, 
         worstRating, 
         ratingCount, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         itemReviewed, 
         ratingValue 
     ));
    }
  });
