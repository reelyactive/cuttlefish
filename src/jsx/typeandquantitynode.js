/* Thing > Intangible > StructuredValue > TypeAndQuantityNode - A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.. Generated automatically by the reactGenerator. */  var TypeAndQuantityNode= React.createClass({
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
      var businessFunction;
      if( props.businessFunction ){
        if( props.businessFunction instanceof Array ){
          businessFunction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          businessFunction = businessFunction.concat( props.businessFunction.map( function(result, index){
              return ( <BusinessFunction {...result} key={index} /> )
           }) );
         businessFunction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          businessFunction = ( <BusinessFunction props={ props.businessFunction } /> );        }
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
      var amountOfThisGood;
      if( props.amountOfThisGood ){
        if( props.amountOfThisGood instanceof Array ){
          amountOfThisGood = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          amountOfThisGood = amountOfThisGood.concat( props.amountOfThisGood.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. amountOfThisGood is a Number.'></div> )
           }) );
         amountOfThisGood.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            amountOfThisGood = ( <div data-advice='Put your HTML here. amountOfThisGood is a Number.'></div> );
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
      var typeOfGood;
      if( props.typeOfGood ){
        if( props.typeOfGood instanceof Array ){
          typeOfGood = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          typeOfGood = typeOfGood.concat( props.typeOfGood.map( function(result, index){
              return ( <Product {...result} key={index} /> )
           }) );
         typeOfGood.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          typeOfGood = ( <Product props={ props.typeOfGood } /> );        }
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
      return (<div title='TypeAndQuantityNode' className='TypeAndQuantityNode entity'>
        { potentialAction }
        { description }
        { sameAs }
        { businessFunction }
        { unitText }
        { url }
        { amountOfThisGood }
        { unitCode }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { image }
        { typeOfGood }
        { name }
     </div>);
    }
  });
