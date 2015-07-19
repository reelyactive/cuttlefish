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
          dayOfWeek = [(React.createElement("p", null, "dayOfWeek:") )];
          for( i in this.props.dayOfWeek ){
            dayOfWeek.push( ( React.createElement(DayOfWeek, {props:  this.props.dayOfWeek}) ) );          }
        } else {
          dayOfWeek = ( React.createElement(DayOfWeek, {props:  this.props.dayOfWeek}) );        }
      }
      var closes;
      if( this.props.closes ){
        if( this.props.closes instanceof Array ){
          closes = [(React.createElement("p", null, "closes:") )];
          for( i in this.props.closes ){
            closes.push( ( React.createElement(Time, {props:  this.props.closes}) ) );          }
        } else {
          closes = ( React.createElement(Time, {props:  this.props.closes}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [(React.createElement("p", null, "validThrough:") )];
          for( i in this.props.validThrough ){
            validThrough.push( ( React.createElement(DateTime, {props:  this.props.validThrough}) ) );          }
        } else {
          validThrough = ( React.createElement(DateTime, {props:  this.props.validThrough}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [(React.createElement("p", null, "validFrom:") )];
          for( i in this.props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, {props:  this.props.validFrom}) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  this.props.validFrom}) );        }
      }
      var opens;
      if( this.props.opens ){
        if( this.props.opens instanceof Array ){
          opens = [(React.createElement("p", null, "opens:") )];
          for( i in this.props.opens ){
            opens.push( ( React.createElement(Time, {props:  this.props.opens}) ) );          }
        } else {
          opens = ( React.createElement(Time, {props:  this.props.opens}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
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
