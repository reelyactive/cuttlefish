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
          dayOfWeek = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.dayOfWeek ){
            dayOfWeek.push( ( <DayOfWeek {...props.dayOfWeek } /> ) );          }
        } else {
          dayOfWeek = ( <DayOfWeek props={ props.dayOfWeek } /> );        }
      }
      var closes;
      if( props.closes ){
        if( props.closes instanceof Array ){
          closes = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.closes ){
            closes.push( ( <Time {...props.closes } /> ) );          }
        } else {
          closes = ( <Time props={ props.closes } /> );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var validThrough;
      if( props.validThrough ){
        if( props.validThrough instanceof Array ){
          validThrough = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.validThrough ){
            validThrough.push( ( <DateTime {...props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ props.validThrough } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var validFrom;
      if( props.validFrom ){
        if( props.validFrom instanceof Array ){
          validFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.validFrom ){
            validFrom.push( ( <DateTime {...props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ props.validFrom } /> );        }
      }
      var opens;
      if( props.opens ){
        if( props.opens instanceof Array ){
          opens = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.opens ){
            opens.push( ( <Time {...props.opens } /> ) );          }
        } else {
          opens = ( <Time props={ props.opens } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
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
