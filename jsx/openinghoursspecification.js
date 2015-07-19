/* Thing > Intangible > StructuredValue > OpeningHoursSpecification - A structured value providing information about the opening hours of a place or a certain service inside a place.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './dayofweek', './imageobject', './datetime', './time', './action', './creativework'], function(React, DayOfWeek, ImageObject, DateTime, Time, Action, CreativeWork){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var dayOfWeek;
      if( props.dayOfWeek ){
        if( props.dayOfWeek instanceof Array ){
          dayOfWeek = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          dayOfWeek = dayOfWeek.concat( props.dayOfWeek.map( function(result, index){
              return ( <DayOfWeek {...result} key={index} /> )
           }) );
         dayOfWeek.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          dayOfWeek = ( <DayOfWeek props={ props.dayOfWeek } /> );        }
      }
      var closes;
      if( props.closes ){
        if( props.closes instanceof Array ){
          closes = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          closes = closes.concat( props.closes.map( function(result, index){
              return ( <Time {...result} key={index} /> )
           }) );
         closes.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          closes = ( <Time props={ props.closes } /> );        }
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
      var validThrough;
      if( props.validThrough ){
        if( props.validThrough instanceof Array ){
          validThrough = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          validThrough = validThrough.concat( props.validThrough.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         validThrough.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          validThrough = ( <DateTime props={ props.validThrough } /> );        }
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
      var validFrom;
      if( props.validFrom ){
        if( props.validFrom instanceof Array ){
          validFrom = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          validFrom = validFrom.concat( props.validFrom.map( function(result, index){
              return ( <DateTime {...result} key={index} /> )
           }) );
         validFrom.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          validFrom = ( <DateTime props={ props.validFrom } /> );        }
      }
      var opens;
      if( props.opens ){
        if( props.opens instanceof Array ){
          opens = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          opens = opens.concat( props.opens.map( function(result, index){
              return ( <Time {...result} key={index} /> )
           }) );
         opens.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          opens = ( <Time props={ props.opens } /> );        }
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
      return (<div title='OpeningHoursSpecification' className='OpeningHoursSpecification entity'>
        { dayOfWeek }
        { closes }
        { potentialAction }
        { description }
        { sameAs }
        { image }
        { url }
        { validThrough }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { validFrom }
        { opens }
        { name }
     </div>);
    }
  });
});
