/* Thing > Intangible > Property - A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.. Generated automatically by the reactGenerator. */  var Property= React.createClass({
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
      var inverseOf;
      if( props.inverseOf ){
        if( props.inverseOf instanceof Array ){
          inverseOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          inverseOf = inverseOf.concat( props.inverseOf.map( function(result, index){
              return ( <Property {...result} key={index} /> )
           }) );
         inverseOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          inverseOf = ( <Property props={ props.inverseOf } /> );        }
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
      var rangeIncludes;
      if( props.rangeIncludes ){
        if( props.rangeIncludes instanceof Array ){
          rangeIncludes = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          rangeIncludes = rangeIncludes.concat( props.rangeIncludes.map( function(result, index){
              return ( <Class {...result} key={index} /> )
           }) );
         rangeIncludes.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          rangeIncludes = ( <Class props={ props.rangeIncludes } /> );        }
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
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          supersededBy = supersededBy.concat( props.supersededBy.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. supersededBy is a Class or
Property or
Enumeration.'></div> )
           }) );
         supersededBy.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            supersededBy = ( <div data-advice='Put your HTML here. supersededBy is a Class or
Property or
Enumeration.'></div> );
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
      var domainIncludes;
      if( props.domainIncludes ){
        if( props.domainIncludes instanceof Array ){
          domainIncludes = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          domainIncludes = domainIncludes.concat( props.domainIncludes.map( function(result, index){
              return ( <Class {...result} key={index} /> )
           }) );
         domainIncludes.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          domainIncludes = ( <Class props={ props.domainIncludes } /> );        }
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
      return (<div title='Property' className='Property entity'>
        { potentialAction }
        { description }
        { inverseOf }
        { sameAs }
        { rangeIncludes }
        { image }
        { url }
        { supersededBy }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { domainIncludes }
        { name }
     </div>);
    }
  });
