/* Thing > Place > AdministrativeArea - A geographical region under the jurisdiction of a particular government.. Generated automatically by the reactGenerator. */
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
          openingHoursSpecification = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          openingHoursSpecification = openingHoursSpecification.concat( props.openingHoursSpecification.map( function(result, index){
              return ( <OpeningHoursSpecification {...result} key={index} /> )
           }) );
         openingHoursSpecification.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          openingHoursSpecification = ( <OpeningHoursSpecification props={ props.openingHoursSpecification } /> );        }
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
      var photo;
      if( props.photo ){
        if( props.photo instanceof Array ){
          photo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          photo = photo.concat( props.photo.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. photo is a Photograph or
ImageObject.'></div> )
           }) );
         photo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            photo = ( <div data-advice='Put your HTML here. photo is a Photograph or
ImageObject.'></div> );
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
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          telephone = telephone.concat( props.telephone.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. telephone is a Text.'></div> )
           }) );
         telephone.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            telephone = ( <div data-advice='Put your HTML here. telephone is a Text.'></div> );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          faxNumber = faxNumber.concat( props.faxNumber.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. faxNumber is a Text.'></div> )
           }) );
         faxNumber.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            faxNumber = ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( <AggregateRating {...result} key={index} /> )
           }) );
         aggregateRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          logo = logo.concat( props.logo.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> )
           }) );
         logo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
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
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          event = event.concat( props.event.map( function(result, index){
              return ( <Event {...result} key={index} /> )
           }) );
         event.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          event = ( <Event props={ props.event } /> );        }
      }
      var isicV4;
      if( props.isicV4 ){
        if( props.isicV4 instanceof Array ){
          isicV4 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isicV4 = isicV4.concat( props.isicV4.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. isicV4 is a Text.'></div> )
           }) );
         isicV4.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            isicV4 = ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> );
        }
      }
      var geo;
      if( props.geo ){
        if( props.geo instanceof Array ){
          geo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          geo = geo.concat( props.geo.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. geo is a GeoShape or
GeoCoordinates.'></div> )
           }) );
         geo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            geo = ( <div data-advice='Put your HTML here. geo is a GeoShape or
GeoCoordinates.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          review = review.concat( props.review.map( function(result, index){
              return ( <Review {...result} key={index} /> )
           }) );
         review.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalProperty = additionalProperty.concat( props.additionalProperty.map( function(result, index){
              return ( <PropertyValue {...result} key={index} /> )
           }) );
         additionalProperty.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          additionalProperty = ( <PropertyValue props={ props.additionalProperty } /> );        }
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
      var containedIn;
      if( props.containedIn ){
        if( props.containedIn instanceof Array ){
          containedIn = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          containedIn = containedIn.concat( props.containedIn.map( function(result, index){
              return ( <Place {...result} key={index} /> )
           }) );
         containedIn.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          containedIn = ( <Place props={ props.containedIn } /> );        }
      }
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          address = address.concat( props.address.map( function(result, index){
              return ( <PostalAddress {...result} key={index} /> )
           }) );
         address.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          address = ( <PostalAddress props={ props.address } /> );        }
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
      var hasMap;
      if( props.hasMap ){
        if( props.hasMap instanceof Array ){
          hasMap = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          hasMap = hasMap.concat( props.hasMap.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. hasMap is a URL or
Map.'></div> )
           }) );
         hasMap.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            hasMap = ( <div data-advice='Put your HTML here. hasMap is a URL or
Map.'></div> );
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
      var globalLocationNumber;
      if( props.globalLocationNumber ){
        if( props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          globalLocationNumber = globalLocationNumber.concat( props.globalLocationNumber.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> )
           }) );
         globalLocationNumber.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            globalLocationNumber = ( <div data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> );
        }
      }
      return (<div title='AdministrativeArea' className='AdministrativeArea entity'>
        { openingHoursSpecification }
        { sameAs }
        { photo }
        { image }
        { telephone }
        { faxNumber }
        { aggregateRating }
        { logo }
        { additionalType }
        { event }
        { isicV4 }
        { geo }
        { review }
        { additionalProperty }
        { mainEntityOfPage }
        { description }
        { containedIn }
        { address }
        { alternateName }
        { hasMap }
        { potentialAction }
        { name }
        { url }
        { globalLocationNumber }
     </div>);
    }
  });
});
