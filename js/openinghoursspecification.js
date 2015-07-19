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
          dayOfWeek = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.dayOfWeek ){
            dayOfWeek.push( ( React.createElement(DayOfWeek, React.__spread({},  props.dayOfWeek )) ) );          }
        } else {
          dayOfWeek = ( React.createElement(DayOfWeek, {props:  props.dayOfWeek}) );        }
      }
      var closes;
      if( props.closes ){
        if( props.closes instanceof Array ){
          closes = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.closes ){
            closes.push( ( React.createElement(Time, React.__spread({},  props.closes )) ) );          }
        } else {
          closes = ( React.createElement(Time, {props:  props.closes}) );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var validThrough;
      if( props.validThrough ){
        if( props.validThrough instanceof Array ){
          validThrough = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.validThrough ){
            validThrough.push( ( React.createElement(DateTime, React.__spread({},  props.validThrough )) ) );          }
        } else {
          validThrough = ( React.createElement(DateTime, {props:  props.validThrough}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var validFrom;
      if( props.validFrom ){
        if( props.validFrom instanceof Array ){
          validFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, React.__spread({},  props.validFrom )) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  props.validFrom}) );        }
      }
      var opens;
      if( props.opens ){
        if( props.opens instanceof Array ){
          opens = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.opens ){
            opens.push( ( React.createElement(Time, React.__spread({},  props.opens )) ) );          }
        } else {
          opens = ( React.createElement(Time, {props:  props.opens}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "OpeningHoursSpecification", className: "OpeningHoursSpecification entity"}, 
         dayOfWeek, 
         closes, 
         potentialAction, 
         description, 
         sameAs, 
         image, 
         url, 
         validThrough, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         validFrom, 
         opens, 
         name 
     ));
    }
  });
});
