/* Thing > Place > AdministrativeArea > Country - A country.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './map', './geoshape', './openinghoursspecification', './photograph', './review', './imageobject', './propertyvalue', './aggregaterating', './place', './action', './postaladdress', './creativework', './event', './geocoordinates'], function(React, Map, GeoShape, OpeningHoursSpecification, Photograph, Review, ImageObject, PropertyValue, AggregateRating, Place, Action, PostalAddress, CreativeWork, Event, GeoCoordinates){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var openingHoursSpecification;
      if( props.openingHoursSpecification ){
        if( props.openingHoursSpecification instanceof Array ){
          openingHoursSpecification = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.openingHoursSpecification ){
            openingHoursSpecification.push( ( React.createElement(OpeningHoursSpecification, React.__spread({},  props.openingHoursSpecification )) ) );          }
        } else {
          openingHoursSpecification = ( React.createElement(OpeningHoursSpecification, {props:  props.openingHoursSpecification}) );        }
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
      var photo;
      if( props.photo ){
        if( props.photo instanceof Array ){
          photo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.photo ){
            photo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. photo is a Photograph or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            photo = ( React.createElement("div", {"data-advice": "Put your HTML here. photo is a Photograph or" + ' ' +
"ImageObject."}) );
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
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.telephone ){
            telephone.push( ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) ) );
          }
        } else {
            telephone = ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.faxNumber ){
            faxNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) ) );
          }
        } else {
            faxNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, React.__spread({},  props.aggregateRating )) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.logo ){
            logo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            logo = ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) );
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
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.event ){
            event.push( ( React.createElement(Event, React.__spread({},  props.event )) ) );          }
        } else {
          event = ( React.createElement(Event, {props:  props.event}) );        }
      }
      var isicV4;
      if( props.isicV4 ){
        if( props.isicV4 instanceof Array ){
          isicV4 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isicV4 ){
            isicV4.push( ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) ) );
          }
        } else {
            isicV4 = ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) );
        }
      }
      var geo;
      if( props.geo ){
        if( props.geo instanceof Array ){
          geo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.geo ){
            geo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. geo is a GeoShape or" + ' ' +
"GeoCoordinates."}) ) );
          }
        } else {
            geo = ( React.createElement("div", {"data-advice": "Put your HTML here. geo is a GeoShape or" + ' ' +
"GeoCoordinates."}) );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.review ){
            review.push( ( React.createElement(Review, React.__spread({},  props.review )) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, React.__spread({},  props.additionalProperty )) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  props.additionalProperty}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
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
      var containedIn;
      if( props.containedIn ){
        if( props.containedIn instanceof Array ){
          containedIn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.containedIn ){
            containedIn.push( ( React.createElement(Place, React.__spread({},  props.containedIn )) ) );          }
        } else {
          containedIn = ( React.createElement(Place, {props:  props.containedIn}) );        }
      }
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.address ){
            address.push( ( React.createElement(PostalAddress, React.__spread({},  props.address )) ) );          }
        } else {
          address = ( React.createElement(PostalAddress, {props:  props.address}) );        }
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
      var hasMap;
      if( props.hasMap ){
        if( props.hasMap instanceof Array ){
          hasMap = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.hasMap ){
            hasMap.push( ( React.createElement("div", {"data-advice": "Put your HTML here. hasMap is a Map or" + ' ' +
"URL."}) ) );
          }
        } else {
            hasMap = ( React.createElement("div", {"data-advice": "Put your HTML here. hasMap is a Map or" + ' ' +
"URL."}) );
        }
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
      var globalLocationNumber;
      if( props.globalLocationNumber ){
        if( props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.globalLocationNumber ){
            globalLocationNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) ) );
          }
        } else {
            globalLocationNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "Country", className: "Country entity"}, 
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
