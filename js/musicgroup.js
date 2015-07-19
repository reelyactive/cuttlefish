/* Thing > Organization > PerformingGroup > MusicGroup - A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './programmembership', './product', './musicrecording', './person', './brand', './offer', './imageobject', './place', './event', './aggregaterating', './ownershipinfo', './musicalbum', './itemlist', './demand', './action', './organization', './postaladdress', './creativework', './contactpoint', './review'], function(React, QuantitativeValue, ProgramMembership, Product, MusicRecording, Person, Brand, Offer, ImageObject, Place, Event, AggregateRating, OwnershipInfo, MusicAlbum, ItemList, Demand, Action, Organization, PostalAddress, CreativeWork, ContactPoint, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var founder;
      if( props.founder ){
        if( props.founder instanceof Array ){
          founder = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.founder ){
            founder.push( ( React.createElement(Person, React.__spread({},  props.founder )) ) );          }
        } else {
          founder = ( React.createElement(Person, {props:  props.founder}) );        }
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
      var foundingDate;
      if( props.foundingDate ){
        if( props.foundingDate instanceof Array ){
          foundingDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.foundingDate ){
            foundingDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. foundingDate is a Date."}) ) );
          }
        } else {
            foundingDate = ( React.createElement("div", {"data-advice": "Put your HTML here. foundingDate is a Date."}) );
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
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.event ){
            event.push( ( React.createElement(Event, React.__spread({},  props.event )) ) );          }
        } else {
          event = ( React.createElement(Event, {props:  props.event}) );        }
      }
      var album;
      if( props.album ){
        if( props.album instanceof Array ){
          album = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.album ){
            album.push( ( React.createElement(MusicAlbum, React.__spread({},  props.album )) ) );          }
        } else {
          album = ( React.createElement(MusicAlbum, {props:  props.album}) );        }
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
      var taxID;
      if( props.taxID ){
        if( props.taxID instanceof Array ){
          taxID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.taxID ){
            taxID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. taxID is a Text."}) ) );
          }
        } else {
            taxID = ( React.createElement("div", {"data-advice": "Put your HTML here. taxID is a Text."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var member;
      if( props.member ){
        if( props.member instanceof Array ){
          member = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.member ){
            member.push( ( React.createElement("div", {"data-advice": "Put your HTML here. member is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            member = ( React.createElement("div", {"data-advice": "Put your HTML here. member is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var foundingLocation;
      if( props.foundingLocation ){
        if( props.foundingLocation instanceof Array ){
          foundingLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.foundingLocation ){
            foundingLocation.push( ( React.createElement(Place, React.__spread({},  props.foundingLocation )) ) );          }
        } else {
          foundingLocation = ( React.createElement(Place, {props:  props.foundingLocation}) );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.location ){
            location.push( ( React.createElement("div", {"data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) ) );
          }
        } else {
            location = ( React.createElement("div", {"data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) );
        }
      }
      var employee;
      if( props.employee ){
        if( props.employee instanceof Array ){
          employee = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.employee ){
            employee.push( ( React.createElement(Person, React.__spread({},  props.employee )) ) );          }
        } else {
          employee = ( React.createElement(Person, {props:  props.employee}) );        }
      }
      var email;
      if( props.email ){
        if( props.email instanceof Array ){
          email = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.email ){
            email.push( ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) ) );
          }
        } else {
            email = ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) );
        }
      }
      var seeks;
      if( props.seeks ){
        if( props.seeks instanceof Array ){
          seeks = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.seeks ){
            seeks.push( ( React.createElement(Demand, React.__spread({},  props.seeks )) ) );          }
        } else {
          seeks = ( React.createElement(Demand, {props:  props.seeks}) );        }
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
      var numberOfEmployees;
      if( props.numberOfEmployees ){
        if( props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.numberOfEmployees ){
            numberOfEmployees.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.numberOfEmployees )) ) );          }
        } else {
          numberOfEmployees = ( React.createElement(QuantitativeValue, {props:  props.numberOfEmployees}) );        }
      }
      var track;
      if( props.track ){
        if( props.track instanceof Array ){
          track = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.track ){
            track.push( ( React.createElement("div", {"data-advice": "Put your HTML here. track is a ItemList or" + ' ' +
"MusicRecording."}) ) );
          }
        } else {
            track = ( React.createElement("div", {"data-advice": "Put your HTML here. track is a ItemList or" + ' ' +
"MusicRecording."}) );
        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.brand ){
            brand.push( ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) ) );
          }
        } else {
            brand = ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) );
        }
      }
      var owns;
      if( props.owns ){
        if( props.owns instanceof Array ){
          owns = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.owns ){
            owns.push( ( React.createElement("div", {"data-advice": "Put your HTML here. owns is a OwnershipInfo or" + ' ' +
"Product."}) ) );
          }
        } else {
            owns = ( React.createElement("div", {"data-advice": "Put your HTML here. owns is a OwnershipInfo or" + ' ' +
"Product."}) );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.award ){
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
          }
        } else {
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
        }
      }
      var department;
      if( props.department ){
        if( props.department instanceof Array ){
          department = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.department ){
            department.push( ( React.createElement(Organization, React.__spread({},  props.department )) ) );          }
        } else {
          department = ( React.createElement(Organization, {props:  props.department}) );        }
      }
      var dissolutionDate;
      if( props.dissolutionDate ){
        if( props.dissolutionDate instanceof Array ){
          dissolutionDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.dissolutionDate ){
            dissolutionDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dissolutionDate is a Date."}) ) );
          }
        } else {
            dissolutionDate = ( React.createElement("div", {"data-advice": "Put your HTML here. dissolutionDate is a Date."}) );
        }
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
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.address ){
            address.push( ( React.createElement(PostalAddress, React.__spread({},  props.address )) ) );          }
        } else {
          address = ( React.createElement(PostalAddress, {props:  props.address}) );        }
      }
      var duns;
      if( props.duns ){
        if( props.duns instanceof Array ){
          duns = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.duns ){
            duns.push( ( React.createElement("div", {"data-advice": "Put your HTML here. duns is a Text."}) ) );
          }
        } else {
            duns = ( React.createElement("div", {"data-advice": "Put your HTML here. duns is a Text."}) );
        }
      }
      var contactPoint;
      if( props.contactPoint ){
        if( props.contactPoint instanceof Array ){
          contactPoint = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contactPoint ){
            contactPoint.push( ( React.createElement(ContactPoint, React.__spread({},  props.contactPoint )) ) );          }
        } else {
          contactPoint = ( React.createElement(ContactPoint, {props:  props.contactPoint}) );        }
      }
      var makesOffer;
      if( props.makesOffer ){
        if( props.makesOffer instanceof Array ){
          makesOffer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.makesOffer ){
            makesOffer.push( ( React.createElement(Offer, React.__spread({},  props.makesOffer )) ) );          }
        } else {
          makesOffer = ( React.createElement(Offer, {props:  props.makesOffer}) );        }
      }
      var hasPOS;
      if( props.hasPOS ){
        if( props.hasPOS instanceof Array ){
          hasPOS = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.hasPOS ){
            hasPOS.push( ( React.createElement(Place, React.__spread({},  props.hasPOS )) ) );          }
        } else {
          hasPOS = ( React.createElement(Place, {props:  props.hasPOS}) );        }
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
      var naics;
      if( props.naics ){
        if( props.naics instanceof Array ){
          naics = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.naics ){
            naics.push( ( React.createElement("div", {"data-advice": "Put your HTML here. naics is a Text."}) ) );
          }
        } else {
            naics = ( React.createElement("div", {"data-advice": "Put your HTML here. naics is a Text."}) );
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
      var memberOf;
      if( props.memberOf ){
        if( props.memberOf instanceof Array ){
          memberOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.memberOf ){
            memberOf.push( ( React.createElement("div", {"data-advice": "Put your HTML here. memberOf is a Organization or" + ' ' +
"ProgramMembership."}) ) );
          }
        } else {
            memberOf = ( React.createElement("div", {"data-advice": "Put your HTML here. memberOf is a Organization or" + ' ' +
"ProgramMembership."}) );
        }
      }
      var subOrganization;
      if( props.subOrganization ){
        if( props.subOrganization instanceof Array ){
          subOrganization = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.subOrganization ){
            subOrganization.push( ( React.createElement(Organization, React.__spread({},  props.subOrganization )) ) );          }
        } else {
          subOrganization = ( React.createElement(Organization, {props:  props.subOrganization}) );        }
      }
      var legalName;
      if( props.legalName ){
        if( props.legalName instanceof Array ){
          legalName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.legalName ){
            legalName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. legalName is a Text."}) ) );
          }
        } else {
            legalName = ( React.createElement("div", {"data-advice": "Put your HTML here. legalName is a Text."}) );
        }
      }
      var vatID;
      if( props.vatID ){
        if( props.vatID instanceof Array ){
          vatID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.vatID ){
            vatID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. vatID is a Text."}) ) );
          }
        } else {
            vatID = ( React.createElement("div", {"data-advice": "Put your HTML here. vatID is a Text."}) );
        }
      }
      var genre;
      if( props.genre ){
        if( props.genre instanceof Array ){
          genre = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.genre ){
            genre.push( ( React.createElement("div", {"data-advice": "Put your HTML here. genre is a Text."}) ) );
          }
        } else {
            genre = ( React.createElement("div", {"data-advice": "Put your HTML here. genre is a Text."}) );
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
