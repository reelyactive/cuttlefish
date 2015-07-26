/* Thing > Intangible > EntryPoint - An entry point, within some Web-based protocol.. Generated automatically by the reactGenerator. */  var EntryPoint= React.createClass({
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
      var contentType;
      if( props.contentType ){
        if( props.contentType instanceof Array ){
          contentType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          contentType = contentType.concat( props.contentType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. contentType is a Text.'></div> )
           }) );
         contentType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            contentType = ( <div data-advice='Put your HTML here. contentType is a Text.'></div> );
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
      var actionApplication;
      if( props.actionApplication ){
        if( props.actionApplication instanceof Array ){
          actionApplication = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          actionApplication = actionApplication.concat( props.actionApplication.map( function(result, index){
              return ( <SoftwareApplication {...result} key={index} /> )
           }) );
         actionApplication.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          actionApplication = ( <SoftwareApplication props={ props.actionApplication } /> );        }
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
      var httpMethod;
      if( props.httpMethod ){
        if( props.httpMethod instanceof Array ){
          httpMethod = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          httpMethod = httpMethod.concat( props.httpMethod.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. httpMethod is a Text.'></div> )
           }) );
         httpMethod.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            httpMethod = ( <div data-advice='Put your HTML here. httpMethod is a Text.'></div> );
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
      var urlTemplate;
      if( props.urlTemplate ){
        if( props.urlTemplate instanceof Array ){
          urlTemplate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          urlTemplate = urlTemplate.concat( props.urlTemplate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. urlTemplate is a Text.'></div> )
           }) );
         urlTemplate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            urlTemplate = ( <div data-advice='Put your HTML here. urlTemplate is a Text.'></div> );
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
      var encodingType;
      if( props.encodingType ){
        if( props.encodingType instanceof Array ){
          encodingType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          encodingType = encodingType.concat( props.encodingType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. encodingType is a Text.'></div> )
           }) );
         encodingType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            encodingType = ( <div data-advice='Put your HTML here. encodingType is a Text.'></div> );
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
      return (<div title='EntryPoint' className='EntryPoint entity'>
        { potentialAction }
        { contentType }
        { description }
        { sameAs }
        { actionApplication }
        { image }
        { httpMethod }
        { url }
        { urlTemplate }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { encodingType }
        { name }
     </div>);
    }
  });
