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
          openingHoursSpecification = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.openingHoursSpecification ){
            openingHoursSpecification.push( ( <OpeningHoursSpecification {...this.props.openingHoursSpecification } /> ) );          }
        } else {
          openingHoursSpecification = ( <OpeningHoursSpecification props={ this.props.openingHoursSpecification } /> );        }
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
      var photo;
      if( this.props.photo ){
        if( this.props.photo instanceof Array ){
          photo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.photo ){
            photo.push( ( <div data-advice='Put your HTML here. photo is a Photograph or
ImageObject.'></div> ) );
          }
        } else {
            photo = ( <div data-advice='Put your HTML here. photo is a Photograph or
ImageObject.'></div> );
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
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.telephone ){
            telephone.push( ( <div data-advice='Put your HTML here. telephone is a Text.'></div> ) );
          }
        } else {
            telephone = ( <div data-advice='Put your HTML here. telephone is a Text.'></div> );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> ) );
          }
        } else {
            faxNumber = ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.logo ){
            logo.push( ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> ) );
          }
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
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
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.event ){
            event.push( ( <Event {...this.props.event } /> ) );          }
        } else {
          event = ( <Event props={ this.props.event } /> );        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> ) );
          }
        } else {
            isicV4 = ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> );
        }
      }
      var geo;
      if( this.props.geo ){
        if( this.props.geo instanceof Array ){
          geo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.geo ){
            geo.push( ( <div data-advice='Put your HTML here. geo is a GeoShape or
GeoCoordinates.'></div> ) );
          }
        } else {
            geo = ( <div data-advice='Put your HTML here. geo is a GeoShape or
GeoCoordinates.'></div> );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.review ){
            review.push( ( <Review {...this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue {...this.props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ this.props.additionalProperty } /> );        }
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
      var containedIn;
      if( this.props.containedIn ){
        if( this.props.containedIn instanceof Array ){
          containedIn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.containedIn ){
            containedIn.push( ( <Place {...this.props.containedIn } /> ) );          }
        } else {
          containedIn = ( <Place props={ this.props.containedIn } /> );        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.address ){
            address.push( ( <PostalAddress {...this.props.address } /> ) );          }
        } else {
          address = ( <PostalAddress props={ this.props.address } /> );        }
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
      var hasMap;
      if( this.props.hasMap ){
        if( this.props.hasMap instanceof Array ){
          hasMap = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.hasMap ){
            hasMap.push( ( <div data-advice='Put your HTML here. hasMap is a URL or
Map.'></div> ) );
          }
        } else {
            hasMap = ( <div data-advice='Put your HTML here. hasMap is a URL or
Map.'></div> );
        }
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
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.globalLocationNumber ){
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
