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
          openingHoursSpecification = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          openingHoursSpecification = openingHoursSpecification.concat( props.openingHoursSpecification.map( function(result, index){
              return ( React.createElement(OpeningHoursSpecification, React.__spread({},  result, {key: index})) )
           }) );
         openingHoursSpecification.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          openingHoursSpecification = ( React.createElement(OpeningHoursSpecification, {props:  props.openingHoursSpecification}) );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var photo;
      if( props.photo ){
        if( props.photo instanceof Array ){
          photo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          photo = photo.concat( props.photo.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. photo is a Photograph or" + ' ' +
"ImageObject."}) )
           }) );
         photo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            photo = ( React.createElement("div", {"data-advice": "Put your HTML here. photo is a Photograph or" + ' ' +
"ImageObject."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          telephone = telephone.concat( props.telephone.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. telephone is a Text."}) )
           }) );
         telephone.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            telephone = ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          faxNumber = faxNumber.concat( props.faxNumber.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. faxNumber is a Text."}) )
           }) );
         faxNumber.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            faxNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( React.createElement(AggregateRating, React.__spread({},  result, {key: index})) )
           }) );
         aggregateRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          logo = logo.concat( props.logo.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         logo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            logo = ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          event = event.concat( props.event.map( function(result, index){
              return ( React.createElement(Event, React.__spread({},  result, {key: index})) )
           }) );
         event.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          event = ( React.createElement(Event, {props:  props.event}) );        }
      }
      var isicV4;
      if( props.isicV4 ){
        if( props.isicV4 instanceof Array ){
          isicV4 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isicV4 = isicV4.concat( props.isicV4.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. isicV4 is a Text."}) )
           }) );
         isicV4.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            isicV4 = ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) );
        }
      }
      var geo;
      if( props.geo ){
        if( props.geo instanceof Array ){
          geo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          geo = geo.concat( props.geo.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. geo is a GeoShape or" + ' ' +
"GeoCoordinates."}) )
           }) );
         geo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            geo = ( React.createElement("div", {"data-advice": "Put your HTML here. geo is a GeoShape or" + ' ' +
"GeoCoordinates."}) );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          review = review.concat( props.review.map( function(result, index){
              return ( React.createElement(Review, React.__spread({},  result, {key: index})) )
           }) );
         review.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalProperty = additionalProperty.concat( props.additionalProperty.map( function(result, index){
              return ( React.createElement(PropertyValue, React.__spread({},  result, {key: index})) )
           }) );
         additionalProperty.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  props.additionalProperty}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var containedIn;
      if( props.containedIn ){
        if( props.containedIn instanceof Array ){
          containedIn = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          containedIn = containedIn.concat( props.containedIn.map( function(result, index){
              return ( React.createElement(Place, React.__spread({},  result, {key: index})) )
           }) );
         containedIn.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          containedIn = ( React.createElement(Place, {props:  props.containedIn}) );        }
      }
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          address = address.concat( props.address.map( function(result, index){
              return ( React.createElement(PostalAddress, React.__spread({},  result, {key: index})) )
           }) );
         address.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          address = ( React.createElement(PostalAddress, {props:  props.address}) );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var hasMap;
      if( props.hasMap ){
        if( props.hasMap instanceof Array ){
          hasMap = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          hasMap = hasMap.concat( props.hasMap.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. hasMap is a URL or" + ' ' +
"Map."}) )
           }) );
         hasMap.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            hasMap = ( React.createElement("div", {"data-advice": "Put your HTML here. hasMap is a URL or" + ' ' +
"Map."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var globalLocationNumber;
      if( props.globalLocationNumber ){
        if( props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          globalLocationNumber = globalLocationNumber.concat( props.globalLocationNumber.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. globalLocationNumber is a Text."}) )
           }) );
         globalLocationNumber.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
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
