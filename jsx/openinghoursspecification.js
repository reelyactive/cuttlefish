/* Thing > Intangible > StructuredValue > OpeningHoursSpecification - A structured value providing information about the opening hours of a place or a certain service inside a place.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './dayofweek', './imageobject', './datetime', './time', './action', './creativework'], function(React, DayOfWeek, ImageObject, DateTime, Time, Action, CreativeWork){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var dayOfWeek;
      if( this.props.dayOfWeek ){
        if( this.props.dayOfWeek instanceof Array ){
          dayOfWeek = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.dayOfWeek ){
            dayOfWeek.push( ( <DayOfWeek {...this.props.dayOfWeek } /> ) );          }
        } else {
          dayOfWeek = ( <DayOfWeek props={ this.props.dayOfWeek } /> );        }
      }
      var closes;
      if( this.props.closes ){
        if( this.props.closes instanceof Array ){
          closes = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.closes ){
            closes.push( ( <Time {...this.props.closes } /> ) );          }
        } else {
          closes = ( <Time props={ this.props.closes } /> );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.validThrough ){
            validThrough.push( ( <DateTime {...this.props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ this.props.validThrough } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.validFrom ){
            validFrom.push( ( <DateTime {...this.props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ this.props.validFrom } /> );        }
      }
      var opens;
      if( this.props.opens ){
        if( this.props.opens instanceof Array ){
          opens = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.opens ){
            opens.push( ( <Time {...this.props.opens } /> ) );          }
        } else {
          opens = ( <Time props={ this.props.opens } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
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
