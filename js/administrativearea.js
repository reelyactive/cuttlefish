/* Thing > Place > AdministrativeArea - A geographical region under the jurisdiction of a particular government.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './map', './geoshape', './openinghoursspecification', './photograph', './review', './imageobject', './propertyvalue', './aggregaterating', './place', './action', './postaladdress', './creativework', './event', './geocoordinates'], function(React, Map, GeoShape, OpeningHoursSpecification, Photograph, Review, ImageObject, PropertyValue, AggregateRating, Place, Action, PostalAddress, CreativeWork, Event, GeoCoordinates){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var openingHoursSpecification;
      if( this.props.openingHoursSpecification ){
        if( this.props.openingHoursSpecification instanceof Array ){
          openingHoursSpecification = [(React.createElement("p", null, "openingHoursSpecification:") )];
          for( i in this.props.openingHoursSpecification ){
            openingHoursSpecification.push( ( React.createElement(OpeningHoursSpecification, {props:  this.props.openingHoursSpecification}) ) );          }
        } else {
          openingHoursSpecification = ( React.createElement(OpeningHoursSpecification, {props:  this.props.openingHoursSpecification}) );        }
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
      var photo;
      if( this.props.photo ){
        if( this.props.photo instanceof Array ){
          photo = [(React.createElement("p", null, "photo:") )];
          for( i in this.props.photo ){
            photo.push( ( React.createElement("div", {class: "photo"}) ) );
          }
        } else {
          photo = ( React.createElement("div", {class: "photo"}, this.props.photo) );
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
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [(React.createElement("p", null, "telephone:") )];
          for( i in this.props.telephone ){
            telephone.push( ( React.createElement("div", {class: "telephone"}) ) );
          }
        } else {
          telephone = ( React.createElement("div", {class: "telephone"}, this.props.telephone) );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [(React.createElement("p", null, "faxNumber:") )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( React.createElement("div", {class: "faxNumber"}) ) );
          }
        } else {
          faxNumber = ( React.createElement("div", {class: "faxNumber"}, this.props.faxNumber) );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(React.createElement("p", null, "aggregateRating:") )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [(React.createElement("p", null, "logo:") )];
          for( i in this.props.logo ){
            logo.push( ( React.createElement("div", {class: "logo"}) ) );
          }
        } else {
          logo = ( React.createElement("div", {class: "logo"}, this.props.logo) );
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
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [(React.createElement("p", null, "event:") )];
          for( i in this.props.event ){
            event.push( ( React.createElement(Event, {props:  this.props.event}) ) );          }
        } else {
          event = ( React.createElement(Event, {props:  this.props.event}) );        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [(React.createElement("p", null, "isicV4:") )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( React.createElement("div", {class: "isicV4"}) ) );
          }
        } else {
          isicV4 = ( React.createElement("div", {class: "isicV4"}, this.props.isicV4) );
        }
      }
      var geo;
      if( this.props.geo ){
        if( this.props.geo instanceof Array ){
          geo = [(React.createElement("p", null, "geo:") )];
          for( i in this.props.geo ){
            geo.push( ( React.createElement("div", {class: "geo"}) ) );
          }
        } else {
          geo = ( React.createElement("div", {class: "geo"}, this.props.geo) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(React.createElement("p", null, "review:") )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [(React.createElement("p", null, "additionalProperty:") )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) );        }
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
      var containedIn;
      if( this.props.containedIn ){
        if( this.props.containedIn instanceof Array ){
          containedIn = [(React.createElement("p", null, "containedIn:") )];
          for( i in this.props.containedIn ){
            containedIn.push( ( React.createElement(Place, {props:  this.props.containedIn}) ) );          }
        } else {
          containedIn = ( React.createElement(Place, {props:  this.props.containedIn}) );        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [(React.createElement("p", null, "address:") )];
          for( i in this.props.address ){
            address.push( ( React.createElement(PostalAddress, {props:  this.props.address}) ) );          }
        } else {
          address = ( React.createElement(PostalAddress, {props:  this.props.address}) );        }
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
      var hasMap;
      if( this.props.hasMap ){
        if( this.props.hasMap instanceof Array ){
          hasMap = [(React.createElement("p", null, "hasMap:") )];
          for( i in this.props.hasMap ){
            hasMap.push( ( React.createElement("div", {class: "hasMap"}) ) );
          }
        } else {
          hasMap = ( React.createElement("div", {class: "hasMap"}, this.props.hasMap) );
        }
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
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [(React.createElement("p", null, "globalLocationNumber:") )];
          for( i in this.props.globalLocationNumber ){
            globalLocationNumber.push( ( React.createElement("div", {class: "globalLocationNumber"}) ) );
          }
        } else {
          globalLocationNumber = ( React.createElement("div", {class: "globalLocationNumber"}, this.props.globalLocationNumber) );
        }
      }
      return (React.createElement("div", {title: "AdministrativeArea", className: "AdministrativeArea entity"}, 
         openingHoursSpecification, 
         sameAs, 
         photo, 
         image, 
         telephone, 
         faxNumber, 
         aggregateRating, 
         logo, 
         additionalType, 
         event, 
         isicV4, 
         geo, 
         review, 
         additionalProperty, 
         mainEntityOfPage, 
         description, 
         containedIn, 
         address, 
         alternateName, 
         hasMap, 
         potentialAction, 
         name, 
         url, 
         globalLocationNumber 
     ));
    }
  });
});
