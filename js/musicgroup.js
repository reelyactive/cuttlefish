/* Thing > Organization > PerformingGroup > MusicGroup - A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './quantitativevalue', './programmembership', './product', './musicrecording', './person', './brand', './offer', './imageobject', './place', './event', './aggregaterating', './ownershipinfo', './musicalbum', './itemlist', './demand', './action', './organization', './postaladdress', './creativework', './contactpoint', './review'], function(React, QuantitativeValue, ProgramMembership, Product, MusicRecording, Person, Brand, Offer, ImageObject, Place, Event, AggregateRating, OwnershipInfo, MusicAlbum, ItemList, Demand, Action, Organization, PostalAddress, CreativeWork, ContactPoint, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var founder;
      if( this.props.founder ){
        if( this.props.founder instanceof Array ){
          founder = [(React.createElement("p", null, "founder:") )];
          for( i in this.props.founder ){
            founder.push( ( React.createElement(Person, {props:  this.props.founder}) ) );          }
        } else {
          founder = ( React.createElement(Person, {props:  this.props.founder}) );        }
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
      var foundingDate;
      if( this.props.foundingDate ){
        if( this.props.foundingDate instanceof Array ){
          foundingDate = [(React.createElement("p", null, "foundingDate:") )];
          for( i in this.props.foundingDate ){
            foundingDate.push( ( React.createElement("div", {class: "foundingDate"}) ) );
          }
        } else {
          foundingDate = ( React.createElement("div", {class: "foundingDate"}, this.props.foundingDate) );
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
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [(React.createElement("p", null, "event:") )];
          for( i in this.props.event ){
            event.push( ( React.createElement(Event, {props:  this.props.event}) ) );          }
        } else {
          event = ( React.createElement(Event, {props:  this.props.event}) );        }
      }
      var album;
      if( this.props.album ){
        if( this.props.album instanceof Array ){
          album = [(React.createElement("p", null, "album:") )];
          for( i in this.props.album ){
            album.push( ( React.createElement(MusicAlbum, {props:  this.props.album}) ) );          }
        } else {
          album = ( React.createElement(MusicAlbum, {props:  this.props.album}) );        }
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
      var taxID;
      if( this.props.taxID ){
        if( this.props.taxID instanceof Array ){
          taxID = [(React.createElement("p", null, "taxID:") )];
          for( i in this.props.taxID ){
            taxID.push( ( React.createElement("div", {class: "taxID"}) ) );
          }
        } else {
          taxID = ( React.createElement("div", {class: "taxID"}, this.props.taxID) );
        }
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
      var member;
      if( this.props.member ){
        if( this.props.member instanceof Array ){
          member = [(React.createElement("p", null, "member:") )];
          for( i in this.props.member ){
            member.push( ( React.createElement("div", {class: "member"}) ) );
          }
        } else {
          member = ( React.createElement("div", {class: "member"}, this.props.member) );
        }
      }
      var foundingLocation;
      if( this.props.foundingLocation ){
        if( this.props.foundingLocation instanceof Array ){
          foundingLocation = [(React.createElement("p", null, "foundingLocation:") )];
          for( i in this.props.foundingLocation ){
            foundingLocation.push( ( React.createElement(Place, {props:  this.props.foundingLocation}) ) );          }
        } else {
          foundingLocation = ( React.createElement(Place, {props:  this.props.foundingLocation}) );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [(React.createElement("p", null, "location:") )];
          for( i in this.props.location ){
            location.push( ( React.createElement("div", {class: "location"}) ) );
          }
        } else {
          location = ( React.createElement("div", {class: "location"}, this.props.location) );
        }
      }
      var employee;
      if( this.props.employee ){
        if( this.props.employee instanceof Array ){
          employee = [(React.createElement("p", null, "employee:") )];
          for( i in this.props.employee ){
            employee.push( ( React.createElement(Person, {props:  this.props.employee}) ) );          }
        } else {
          employee = ( React.createElement(Person, {props:  this.props.employee}) );        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [(React.createElement("p", null, "email:") )];
          for( i in this.props.email ){
            email.push( ( React.createElement("div", {class: "email"}) ) );
          }
        } else {
          email = ( React.createElement("div", {class: "email"}, this.props.email) );
        }
      }
      var seeks;
      if( this.props.seeks ){
        if( this.props.seeks instanceof Array ){
          seeks = [(React.createElement("p", null, "seeks:") )];
          for( i in this.props.seeks ){
            seeks.push( ( React.createElement(Demand, {props:  this.props.seeks}) ) );          }
        } else {
          seeks = ( React.createElement(Demand, {props:  this.props.seeks}) );        }
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
      var numberOfEmployees;
      if( this.props.numberOfEmployees ){
        if( this.props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [(React.createElement("p", null, "numberOfEmployees:") )];
          for( i in this.props.numberOfEmployees ){
            numberOfEmployees.push( ( React.createElement(QuantitativeValue, {props:  this.props.numberOfEmployees}) ) );          }
        } else {
          numberOfEmployees = ( React.createElement(QuantitativeValue, {props:  this.props.numberOfEmployees}) );        }
      }
      var track;
      if( this.props.track ){
        if( this.props.track instanceof Array ){
          track = [(React.createElement("p", null, "track:") )];
          for( i in this.props.track ){
            track.push( ( React.createElement("div", {class: "track"}) ) );
          }
        } else {
          track = ( React.createElement("div", {class: "track"}, this.props.track) );
        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [(React.createElement("p", null, "brand:") )];
          for( i in this.props.brand ){
            brand.push( ( React.createElement("div", {class: "brand"}) ) );
          }
        } else {
          brand = ( React.createElement("div", {class: "brand"}, this.props.brand) );
        }
      }
      var owns;
      if( this.props.owns ){
        if( this.props.owns instanceof Array ){
          owns = [(React.createElement("p", null, "owns:") )];
          for( i in this.props.owns ){
            owns.push( ( React.createElement("div", {class: "owns"}) ) );
          }
        } else {
          owns = ( React.createElement("div", {class: "owns"}, this.props.owns) );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [(React.createElement("p", null, "award:") )];
          for( i in this.props.award ){
            award.push( ( React.createElement("div", {class: "award"}) ) );
          }
        } else {
          award = ( React.createElement("div", {class: "award"}, this.props.award) );
        }
      }
      var department;
      if( this.props.department ){
        if( this.props.department instanceof Array ){
          department = [(React.createElement("p", null, "department:") )];
          for( i in this.props.department ){
            department.push( ( React.createElement(Organization, {props:  this.props.department}) ) );          }
        } else {
          department = ( React.createElement(Organization, {props:  this.props.department}) );        }
      }
      var dissolutionDate;
      if( this.props.dissolutionDate ){
        if( this.props.dissolutionDate instanceof Array ){
          dissolutionDate = [(React.createElement("p", null, "dissolutionDate:") )];
          for( i in this.props.dissolutionDate ){
            dissolutionDate.push( ( React.createElement("div", {class: "dissolutionDate"}) ) );
          }
        } else {
          dissolutionDate = ( React.createElement("div", {class: "dissolutionDate"}, this.props.dissolutionDate) );
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
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [(React.createElement("p", null, "address:") )];
          for( i in this.props.address ){
            address.push( ( React.createElement(PostalAddress, {props:  this.props.address}) ) );          }
        } else {
          address = ( React.createElement(PostalAddress, {props:  this.props.address}) );        }
      }
      var duns;
      if( this.props.duns ){
        if( this.props.duns instanceof Array ){
          duns = [(React.createElement("p", null, "duns:") )];
          for( i in this.props.duns ){
            duns.push( ( React.createElement("div", {class: "duns"}) ) );
          }
        } else {
          duns = ( React.createElement("div", {class: "duns"}, this.props.duns) );
        }
      }
      var contactPoint;
      if( this.props.contactPoint ){
        if( this.props.contactPoint instanceof Array ){
          contactPoint = [(React.createElement("p", null, "contactPoint:") )];
          for( i in this.props.contactPoint ){
            contactPoint.push( ( React.createElement(ContactPoint, {props:  this.props.contactPoint}) ) );          }
        } else {
          contactPoint = ( React.createElement(ContactPoint, {props:  this.props.contactPoint}) );        }
      }
      var makesOffer;
      if( this.props.makesOffer ){
        if( this.props.makesOffer instanceof Array ){
          makesOffer = [(React.createElement("p", null, "makesOffer:") )];
          for( i in this.props.makesOffer ){
            makesOffer.push( ( React.createElement(Offer, {props:  this.props.makesOffer}) ) );          }
        } else {
          makesOffer = ( React.createElement(Offer, {props:  this.props.makesOffer}) );        }
      }
      var hasPOS;
      if( this.props.hasPOS ){
        if( this.props.hasPOS instanceof Array ){
          hasPOS = [(React.createElement("p", null, "hasPOS:") )];
          for( i in this.props.hasPOS ){
            hasPOS.push( ( React.createElement(Place, {props:  this.props.hasPOS}) ) );          }
        } else {
          hasPOS = ( React.createElement(Place, {props:  this.props.hasPOS}) );        }
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
      var naics;
      if( this.props.naics ){
        if( this.props.naics instanceof Array ){
          naics = [(React.createElement("p", null, "naics:") )];
          for( i in this.props.naics ){
            naics.push( ( React.createElement("div", {class: "naics"}) ) );
          }
        } else {
          naics = ( React.createElement("div", {class: "naics"}, this.props.naics) );
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
      var memberOf;
      if( this.props.memberOf ){
        if( this.props.memberOf instanceof Array ){
          memberOf = [(React.createElement("p", null, "memberOf:") )];
          for( i in this.props.memberOf ){
            memberOf.push( ( React.createElement("div", {class: "memberOf"}) ) );
          }
        } else {
          memberOf = ( React.createElement("div", {class: "memberOf"}, this.props.memberOf) );
        }
      }
      var subOrganization;
      if( this.props.subOrganization ){
        if( this.props.subOrganization instanceof Array ){
          subOrganization = [(React.createElement("p", null, "subOrganization:") )];
          for( i in this.props.subOrganization ){
            subOrganization.push( ( React.createElement(Organization, {props:  this.props.subOrganization}) ) );          }
        } else {
          subOrganization = ( React.createElement(Organization, {props:  this.props.subOrganization}) );        }
      }
      var legalName;
      if( this.props.legalName ){
        if( this.props.legalName instanceof Array ){
          legalName = [(React.createElement("p", null, "legalName:") )];
          for( i in this.props.legalName ){
            legalName.push( ( React.createElement("div", {class: "legalName"}) ) );
          }
        } else {
          legalName = ( React.createElement("div", {class: "legalName"}, this.props.legalName) );
        }
      }
      var vatID;
      if( this.props.vatID ){
        if( this.props.vatID instanceof Array ){
          vatID = [(React.createElement("p", null, "vatID:") )];
          for( i in this.props.vatID ){
            vatID.push( ( React.createElement("div", {class: "vatID"}) ) );
          }
        } else {
          vatID = ( React.createElement("div", {class: "vatID"}, this.props.vatID) );
        }
      }
      var genre;
      if( this.props.genre ){
        if( this.props.genre instanceof Array ){
          genre = [(React.createElement("p", null, "genre:") )];
          for( i in this.props.genre ){
            genre.push( ( React.createElement("div", {class: "genre"}) ) );
          }
        } else {
          genre = ( React.createElement("div", {class: "genre"}, this.props.genre) );
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
      return (React.createElement("div", {title: "MusicGroup", className: "MusicGroup entity"}, 
         founder, 
         sameAs, 
         image, 
         foundingDate, 
         telephone, 
         faxNumber, 
         aggregateRating, 
         additionalType, 
         logo, 
         event, 
         album, 
         review, 
         taxID, 
         mainEntityOfPage, 
         member, 
         foundingLocation, 
         location, 
         employee, 
         email, 
         seeks, 
         isicV4, 
         description, 
         numberOfEmployees, 
         track, 
         brand, 
         owns, 
         award, 
         department, 
         dissolutionDate, 
         alternateName, 
         address, 
         duns, 
         contactPoint, 
         makesOffer, 
         hasPOS, 
         potentialAction, 
         name, 
         naics, 
         url, 
         memberOf, 
         subOrganization, 
         legalName, 
         vatID, 
         genre, 
         globalLocationNumber 
     ));
    }
  });
});
