/* Thing > Place - Entities that have a somewhat fixed, physical extension.. Generated automatically by the reactGenerator. */
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
          openingHoursSpecification = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.openingHoursSpecification ){
            openingHoursSpecification.push( ( <OpeningHoursSpecification {...props.openingHoursSpecification } /> ) );          }
        } else {
          openingHoursSpecification = ( <OpeningHoursSpecification props={ props.openingHoursSpecification } /> );        }
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
      var photo;
      if( props.photo ){
        if( props.photo instanceof Array ){
          photo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.photo ){
            photo.push( ( <div data-advice='Put your HTML here. photo is a Photograph or
ImageObject.'></div> ) );
          }
        } else {
            photo = ( <div data-advice='Put your HTML here. photo is a Photograph or
ImageObject.'></div> );
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
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.telephone ){
            telephone.push( ( <div data-advice='Put your HTML here. telephone is a Text.'></div> ) );
          }
        } else {
            telephone = ( <div data-advice='Put your HTML here. telephone is a Text.'></div> );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.faxNumber ){
            faxNumber.push( ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> ) );
          }
        } else {
            faxNumber = ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.logo ){
            logo.push( ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> ) );
          }
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
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
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.event ){
            event.push( ( <Event {...props.event } /> ) );          }
        } else {
          event = ( <Event props={ props.event } /> );        }
      }
      var isicV4;
      if( props.isicV4 ){
        if( props.isicV4 instanceof Array ){
          isicV4 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isicV4 ){
            isicV4.push( ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> ) );
          }
        } else {
            isicV4 = ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> );
        }
      }
      var geo;
      if( props.geo ){
        if( props.geo instanceof Array ){
          geo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.geo ){
            geo.push( ( <div data-advice='Put your HTML here. geo is a GeoShape or
GeoCoordinates.'></div> ) );
          }
        } else {
            geo = ( <div data-advice='Put your HTML here. geo is a GeoShape or
GeoCoordinates.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.review ){
            review.push( ( <Review {...props.review } /> ) );          }
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue {...props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ props.additionalProperty } /> );        }
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
      var containedIn;
      if( props.containedIn ){
        if( props.containedIn instanceof Array ){
          containedIn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.containedIn ){
            containedIn.push( ( <Place {...props.containedIn } /> ) );          }
        } else {
          containedIn = ( <Place props={ props.containedIn } /> );        }
      }
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.address ){
            address.push( ( <PostalAddress {...props.address } /> ) );          }
        } else {
          address = ( <PostalAddress props={ props.address } /> );        }
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
      var hasMap;
      if( props.hasMap ){
        if( props.hasMap instanceof Array ){
          hasMap = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.hasMap ){
            hasMap.push( ( <div data-advice='Put your HTML here. hasMap is a URL or
Map.'></div> ) );
          }
        } else {
            hasMap = ( <div data-advice='Put your HTML here. hasMap is a URL or
Map.'></div> );
        }
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
      var globalLocationNumber;
      if( props.globalLocationNumber ){
        if( props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.globalLocationNumber ){
            globalLocationNumber.push( ( <div data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> ) );
          }
        } else {
            globalLocationNumber = ( <div data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> );
        }
      }
      return (<div title='Place' className='Place entity'>
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
