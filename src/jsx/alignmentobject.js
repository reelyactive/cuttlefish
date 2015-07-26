/* Thing > Intangible > AlignmentObject - An intangible item that describes an alignment between a learning resource and a node in an educational framework.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var alignmentType;
      if( props.alignmentType ){
        if( props.alignmentType instanceof Array ){
          alignmentType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alignmentType = alignmentType.concat( props.alignmentType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alignmentType is a Text.'></div> )
           }) );
         alignmentType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alignmentType = ( <div data-advice='Put your HTML here. alignmentType is a Text.'></div> );
        }
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
      var educationalFramework;
      if( props.educationalFramework ){
        if( props.educationalFramework instanceof Array ){
          educationalFramework = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          educationalFramework = educationalFramework.concat( props.educationalFramework.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. educationalFramework is a Text.'></div> )
           }) );
         educationalFramework.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            educationalFramework = ( <div data-advice='Put your HTML here. educationalFramework is a Text.'></div> );
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
      var targetUrl;
      if( props.targetUrl ){
        if( props.targetUrl instanceof Array ){
          targetUrl = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          targetUrl = targetUrl.concat( props.targetUrl.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. targetUrl is a URL.'></div> )
           }) );
         targetUrl.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            targetUrl = ( <div data-advice='Put your HTML here. targetUrl is a URL.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
      var targetName;
      if( props.targetName ){
        if( props.targetName instanceof Array ){
          targetName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          targetName = targetName.concat( props.targetName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. targetName is a Text.'></div> )
           }) );
         targetName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            targetName = ( <div data-advice='Put your HTML here. targetName is a Text.'></div> );
        }
      }
      var targetDescription;
      if( props.targetDescription ){
        if( props.targetDescription instanceof Array ){
          targetDescription = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          targetDescription = targetDescription.concat( props.targetDescription.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. targetDescription is a Text.'></div> )
           }) );
         targetDescription.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            targetDescription = ( <div data-advice='Put your HTML here. targetDescription is a Text.'></div> );
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
      return (<div title='AlignmentObject' className='AlignmentObject entity'>
        { alignmentType }
        { potentialAction }
        { description }
        { sameAs }
        { image }
        { educationalFramework }
        { url }
        { targetUrl }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { targetName }
        { targetDescription }
        { name }
     </div>);
    }
  });
});
