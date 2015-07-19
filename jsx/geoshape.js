/* Thing > Intangible > StructuredValue > GeoShape - The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var box;
      if( props.box ){
        if( props.box instanceof Array ){
          box = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          box = box.concat( props.box.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. box is a Text.'></div> )
           }) );
         box.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            box = ( <div data-advice='Put your HTML here. box is a Text.'></div> );
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
      var elevation;
      if( props.elevation ){
        if( props.elevation instanceof Array ){
          elevation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          elevation = elevation.concat( props.elevation.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. elevation is a Text or
Number.'></div> )
           }) );
         elevation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            elevation = ( <div data-advice='Put your HTML here. elevation is a Text or
Number.'></div> );
        }
      }
      var polygon;
      if( props.polygon ){
        if( props.polygon instanceof Array ){
          polygon = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          polygon = polygon.concat( props.polygon.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. polygon is a Text.'></div> )
           }) );
         polygon.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            polygon = ( <div data-advice='Put your HTML here. polygon is a Text.'></div> );
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
      var circle;
      if( props.circle ){
        if( props.circle instanceof Array ){
          circle = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          circle = circle.concat( props.circle.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. circle is a Text.'></div> )
           }) );
         circle.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            circle = ( <div data-advice='Put your HTML here. circle is a Text.'></div> );
        }
      }
      var line;
      if( props.line ){
        if( props.line instanceof Array ){
          line = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          line = line.concat( props.line.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. line is a Text.'></div> )
           }) );
         line.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            line = ( <div data-advice='Put your HTML here. line is a Text.'></div> );
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
      return (<div title='GeoShape' className='GeoShape entity'>
        { box }
        { potentialAction }
        { elevation }
        { polygon }
        { sameAs }
        { image }
        { name }
        { alternateName }
        { url }
        { mainEntityOfPage }
        { additionalType }
        { circle }
        { line }
        { description }
     </div>);
    }
  });
});
