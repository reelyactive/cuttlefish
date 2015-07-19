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
          openingHoursSpecification = [(<p>openingHoursSpecification:</p> )];
          for( i in this.props.openingHoursSpecification ){
            openingHoursSpecification.push( ( <OpeningHoursSpecification props={ this.props.openingHoursSpecification } /> ) );          }
        } else {
          openingHoursSpecification = ( <OpeningHoursSpecification props={ this.props.openingHoursSpecification } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var photo;
      if( this.props.photo ){
        if( this.props.photo instanceof Array ){
          photo = [(<p>photo:</p> )];
          for( i in this.props.photo ){
            photo.push( ( <div class='photo'></div> ) );
          }
        } else {
          photo = ( <div class='photo'>{this.props.photo}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [(<p>telephone:</p> )];
          for( i in this.props.telephone ){
            telephone.push( ( <div class='telephone'></div> ) );
          }
        } else {
          telephone = ( <div class='telephone'>{this.props.telephone}</div> );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [(<p>faxNumber:</p> )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( <div class='faxNumber'></div> ) );
          }
        } else {
          faxNumber = ( <div class='faxNumber'>{this.props.faxNumber}</div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(<p>aggregateRating:</p> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating props={ this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [(<p>logo:</p> )];
          for( i in this.props.logo ){
            logo.push( ( <div class='logo'></div> ) );
          }
        } else {
          logo = ( <div class='logo'>{this.props.logo}</div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [(<p>event:</p> )];
          for( i in this.props.event ){
            event.push( ( <Event props={ this.props.event } /> ) );          }
        } else {
          event = ( <Event props={ this.props.event } /> );        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [(<p>isicV4:</p> )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( <div class='isicV4'></div> ) );
          }
        } else {
          isicV4 = ( <div class='isicV4'>{this.props.isicV4}</div> );
        }
      }
      var geo;
      if( this.props.geo ){
        if( this.props.geo instanceof Array ){
          geo = [(<p>geo:</p> )];
          for( i in this.props.geo ){
            geo.push( ( <div class='geo'></div> ) );
          }
        } else {
          geo = ( <div class='geo'>{this.props.geo}</div> );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(<p>review:</p> )];
          for( i in this.props.review ){
            review.push( ( <Review props={ this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [(<p>additionalProperty:</p> )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue props={ this.props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ this.props.additionalProperty } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var containedIn;
      if( this.props.containedIn ){
        if( this.props.containedIn instanceof Array ){
          containedIn = [(<p>containedIn:</p> )];
          for( i in this.props.containedIn ){
            containedIn.push( ( <Place props={ this.props.containedIn } /> ) );          }
        } else {
          containedIn = ( <Place props={ this.props.containedIn } /> );        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [(<p>address:</p> )];
          for( i in this.props.address ){
            address.push( ( <PostalAddress props={ this.props.address } /> ) );          }
        } else {
          address = ( <PostalAddress props={ this.props.address } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var hasMap;
      if( this.props.hasMap ){
        if( this.props.hasMap instanceof Array ){
          hasMap = [(<p>hasMap:</p> )];
          for( i in this.props.hasMap ){
            hasMap.push( ( <div class='hasMap'></div> ) );
          }
        } else {
          hasMap = ( <div class='hasMap'>{this.props.hasMap}</div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [(<p>globalLocationNumber:</p> )];
          for( i in this.props.globalLocationNumber ){
            globalLocationNumber.push( ( <div class='globalLocationNumber'></div> ) );
          }
        } else {
          globalLocationNumber = ( <div class='globalLocationNumber'>{this.props.globalLocationNumber}</div> );
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
