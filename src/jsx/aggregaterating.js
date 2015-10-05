/* Thing > Intangible > Rating > AggregateRating - The average rating based on multiple ratings or reviews.. Generated automatically by the reactGenerator. */  var AggregateRating= React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var reviewCount;
      if( props.reviewCount ){
        if( props.reviewCount instanceof Array ){
          reviewCount = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          reviewCount = reviewCount.concat( props.reviewCount.map( function(result, index){
              return ( <Integer {...result} key={index} /> )
           }) );
         reviewCount.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          reviewCount = ( <Integer props={ props.reviewCount } /> );        }
      }
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
      var bestRating;
      if( props.bestRating ){
        if( props.bestRating instanceof Array ){
          bestRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          bestRating = bestRating.concat( props.bestRating.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. bestRating is a Number or
Text.'></div> )
           }) );
         bestRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            bestRating = ( <div data-advice='Put your HTML here. bestRating is a Number or
Text.'></div> );
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
      var worstRating;
      if( props.worstRating ){
        if( props.worstRating instanceof Array ){
          worstRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          worstRating = worstRating.concat( props.worstRating.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. worstRating is a Number or
Text.'></div> )
           }) );
         worstRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            worstRating = ( <div data-advice='Put your HTML here. worstRating is a Number or
Text.'></div> );
        }
      }
      var ratingCount;
      if( props.ratingCount ){
        if( props.ratingCount instanceof Array ){
          ratingCount = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          ratingCount = ratingCount.concat( props.ratingCount.map( function(result, index){
              return ( <Integer {...result} key={index} /> )
           }) );
         ratingCount.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          ratingCount = ( <Integer props={ props.ratingCount } /> );        }
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
      var itemReviewed;
      if( props.itemReviewed ){
        if( props.itemReviewed instanceof Array ){
          itemReviewed = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          itemReviewed = itemReviewed.concat( props.itemReviewed.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         itemReviewed.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          itemReviewed = ( <Thing props={ props.itemReviewed } /> );        }
      }
      var ratingValue;
      if( props.ratingValue ){
        if( props.ratingValue instanceof Array ){
          ratingValue = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          ratingValue = ratingValue.concat( props.ratingValue.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. ratingValue is a Text.'></div> )
           }) );
         ratingValue.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            ratingValue = ( <div data-advice='Put your HTML here. ratingValue is a Text.'></div> );
        }
      }
      return (<div title='AggregateRating' className='AggregateRating entity'>
        { reviewCount }
        { potentialAction }
        { description }
        { name }
        { sameAs }
        { image }
        { bestRating }
        { url }
        { worstRating }
        { ratingCount }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { itemReviewed }
        { ratingValue }
     </div>);
    }
  });
