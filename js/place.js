/* Thing > Place - Entities that have a somewhat fixed, physical extension.. Generated automatically by the reactGenerator. */
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
          openingHoursSpecification = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.openingHoursSpecification ){
            openingHoursSpecification.push( ( React.createElement(OpeningHoursSpecification, React.__spread({},  this.props.openingHoursSpecification )) ) );          }
        } else {
          openingHoursSpecification = ( React.createElement(OpeningHoursSpecification, {props:  this.props.openingHoursSpecification}) );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var photo;
      if( this.props.photo ){
        if( this.props.photo instanceof Array ){
          photo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.photo ){
            photo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. photo is a Photograph or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            photo = ( React.createElement("div", {"data-advice": "Put your HTML here. photo is a Photograph or" + ' ' +
"ImageObject."}) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.telephone ){
            telephone.push( ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) ) );
          }
        } else {
            telephone = ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) ) );
          }
        } else {
            faxNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, React.__spread({},  this.props.aggregateRating )) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.logo ){
            logo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            logo = ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.event ){
            event.push( ( React.createElement(Event, React.__spread({},  this.props.event )) ) );          }
        } else {
          event = ( React.createElement(Event, {props:  this.props.event}) );        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) ) );
          }
        } else {
            isicV4 = ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) );
        }
      }
      var geo;
      if( this.props.geo ){
        if( this.props.geo instanceof Array ){
          geo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.geo ){
            geo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. geo is a GeoShape or" + ' ' +
"GeoCoordinates."}) ) );
          }
        } else {
            geo = ( React.createElement("div", {"data-advice": "Put your HTML here. geo is a GeoShape or" + ' ' +
"GeoCoordinates."}) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, React.__spread({},  this.props.review )) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, React.__spread({},  this.props.additionalProperty )) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var containedIn;
      if( this.props.containedIn ){
        if( this.props.containedIn instanceof Array ){
          containedIn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.containedIn ){
            containedIn.push( ( React.createElement(Place, React.__spread({},  this.props.containedIn )) ) );          }
        } else {
          containedIn = ( React.createElement(Place, {props:  this.props.containedIn}) );        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.address ){
            address.push( ( React.createElement(PostalAddress, React.__spread({},  this.props.address )) ) );          }
        } else {
          address = ( React.createElement(PostalAddress, {props:  this.props.address}) );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var hasMap;
      if( this.props.hasMap ){
        if( this.props.hasMap instanceof Array ){
          hasMap = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.hasMap ){
            hasMap.push( ( React.createElement("div", {"data-advice": "Put your HTML here. hasMap is a URL or" + ' ' +
"Map."}) ) );
          }
        } else {
            hasMap = ( React.createElement("div", {"data-advice": "Put your HTML here. hasMap is a URL or" + ' ' +
"Map."}) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  this.props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.globalLocationNumber ){
            globalLocationNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) ) );
          }
        } else {
            globalLocationNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "Place", className: "Place entity"}, 
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
