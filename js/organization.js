/* Thing > Organization - An organization such as a school, NGO, corporation, club, etc.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './programmembership', './product', './person', './brand', './offer', './imageobject', './event', './aggregaterating', './ownershipinfo', './place', './demand', './action', './organization', './postaladdress', './creativework', './contactpoint', './review'], function(React, QuantitativeValue, ProgramMembership, Product, Person, Brand, Offer, ImageObject, Event, AggregateRating, OwnershipInfo, Place, Demand, Action, Organization, PostalAddress, CreativeWork, ContactPoint, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var founder;
      if( this.props.founder ){
        if( this.props.founder instanceof Array ){
          founder = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.founder ){
            founder.push( ( React.createElement(Person, {props:  this.props.founder}) ) );          }
        } else {
          founder = ( React.createElement(Person, {props:  this.props.founder}) );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
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
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var foundingDate;
      if( this.props.foundingDate ){
        if( this.props.foundingDate instanceof Array ){
          foundingDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.foundingDate ){
            foundingDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. foundingDate is a Date."}) ) );
          }
        } else {
            foundingDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. foundingDate is a Date."}) ) );
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
            telephone.push( ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) ) );
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
            faxNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) ) );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
        }
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
            logo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.event ){
            event.push( ( React.createElement(Event, {props:  this.props.event}) ) );          }
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
            isicV4.push( ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) ) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var taxID;
      if( this.props.taxID ){
        if( this.props.taxID instanceof Array ){
          taxID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.taxID ){
            taxID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. taxID is a Text."}) ) );
          }
        } else {
            taxID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. taxID is a Text."}) ) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
        }
      }
      var member;
      if( this.props.member ){
        if( this.props.member instanceof Array ){
          member = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.member ){
            member.push( ( React.createElement("div", {"data-advice": "Put your HTML here. member is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            member.push( ( React.createElement("div", {"data-advice": "Put your HTML here. member is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var foundingLocation;
      if( this.props.foundingLocation ){
        if( this.props.foundingLocation instanceof Array ){
          foundingLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.foundingLocation ){
            foundingLocation.push( ( React.createElement(Place, {props:  this.props.foundingLocation}) ) );          }
        } else {
          foundingLocation = ( React.createElement(Place, {props:  this.props.foundingLocation}) );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.location ){
            location.push( ( React.createElement("div", {"data-advice": "Put your HTML here. location is a Place or" + ' ' +
"PostalAddress."}) ) );
          }
        } else {
            location.push( ( React.createElement("div", {"data-advice": "Put your HTML here. location is a Place or" + ' ' +
"PostalAddress."}) ) );
        }
      }
      var employee;
      if( this.props.employee ){
        if( this.props.employee instanceof Array ){
          employee = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.employee ){
            employee.push( ( React.createElement(Person, {props:  this.props.employee}) ) );          }
        } else {
          employee = ( React.createElement(Person, {props:  this.props.employee}) );        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.email ){
            email.push( ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) ) );
          }
        } else {
            email.push( ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) ) );
        }
      }
      var seeks;
      if( this.props.seeks ){
        if( this.props.seeks instanceof Array ){
          seeks = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.seeks ){
            seeks.push( ( React.createElement(Demand, {props:  this.props.seeks}) ) );          }
        } else {
          seeks = ( React.createElement(Demand, {props:  this.props.seeks}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
        }
      }
      var numberOfEmployees;
      if( this.props.numberOfEmployees ){
        if( this.props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.numberOfEmployees ){
            numberOfEmployees.push( ( React.createElement(QuantitativeValue, {props:  this.props.numberOfEmployees}) ) );          }
        } else {
          numberOfEmployees = ( React.createElement(QuantitativeValue, {props:  this.props.numberOfEmployees}) );        }
      }
      var subOrganization;
      if( this.props.subOrganization ){
        if( this.props.subOrganization instanceof Array ){
          subOrganization = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.subOrganization ){
            subOrganization.push( ( React.createElement(Organization, {props:  this.props.subOrganization}) ) );          }
        } else {
          subOrganization = ( React.createElement(Organization, {props:  this.props.subOrganization}) );        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.brand ){
            brand.push( ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Organization or" + ' ' +
"Brand."}) ) );
          }
        } else {
            brand.push( ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Organization or" + ' ' +
"Brand."}) ) );
        }
      }
      var owns;
      if( this.props.owns ){
        if( this.props.owns instanceof Array ){
          owns = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.owns ){
            owns.push( ( React.createElement("div", {"data-advice": "Put your HTML here. owns is a OwnershipInfo or" + ' ' +
"Product."}) ) );
          }
        } else {
            owns.push( ( React.createElement("div", {"data-advice": "Put your HTML here. owns is a OwnershipInfo or" + ' ' +
"Product."}) ) );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.award ){
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
          }
        } else {
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
        }
      }
      var department;
      if( this.props.department ){
        if( this.props.department instanceof Array ){
          department = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.department ){
            department.push( ( React.createElement(Organization, {props:  this.props.department}) ) );          }
        } else {
          department = ( React.createElement(Organization, {props:  this.props.department}) );        }
      }
      var dissolutionDate;
      if( this.props.dissolutionDate ){
        if( this.props.dissolutionDate instanceof Array ){
          dissolutionDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.dissolutionDate ){
            dissolutionDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dissolutionDate is a Date."}) ) );
          }
        } else {
            dissolutionDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dissolutionDate is a Date."}) ) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.address ){
            address.push( ( React.createElement(PostalAddress, {props:  this.props.address}) ) );          }
        } else {
          address = ( React.createElement(PostalAddress, {props:  this.props.address}) );        }
      }
      var duns;
      if( this.props.duns ){
        if( this.props.duns instanceof Array ){
          duns = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.duns ){
            duns.push( ( React.createElement("div", {"data-advice": "Put your HTML here. duns is a Text."}) ) );
          }
        } else {
            duns.push( ( React.createElement("div", {"data-advice": "Put your HTML here. duns is a Text."}) ) );
        }
      }
      var contactPoint;
      if( this.props.contactPoint ){
        if( this.props.contactPoint instanceof Array ){
          contactPoint = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.contactPoint ){
            contactPoint.push( ( React.createElement(ContactPoint, {props:  this.props.contactPoint}) ) );          }
        } else {
          contactPoint = ( React.createElement(ContactPoint, {props:  this.props.contactPoint}) );        }
      }
      var makesOffer;
      if( this.props.makesOffer ){
        if( this.props.makesOffer instanceof Array ){
          makesOffer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.makesOffer ){
            makesOffer.push( ( React.createElement(Offer, {props:  this.props.makesOffer}) ) );          }
        } else {
          makesOffer = ( React.createElement(Offer, {props:  this.props.makesOffer}) );        }
      }
      var hasPOS;
      if( this.props.hasPOS ){
        if( this.props.hasPOS instanceof Array ){
          hasPOS = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.hasPOS ){
            hasPOS.push( ( React.createElement(Place, {props:  this.props.hasPOS}) ) );          }
        } else {
          hasPOS = ( React.createElement(Place, {props:  this.props.hasPOS}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
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
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      var naics;
      if( this.props.naics ){
        if( this.props.naics instanceof Array ){
          naics = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.naics ){
            naics.push( ( React.createElement("div", {"data-advice": "Put your HTML here. naics is a Text."}) ) );
          }
        } else {
            naics.push( ( React.createElement("div", {"data-advice": "Put your HTML here. naics is a Text."}) ) );
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
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var memberOf;
      if( this.props.memberOf ){
        if( this.props.memberOf instanceof Array ){
          memberOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.memberOf ){
            memberOf.push( ( React.createElement("div", {"data-advice": "Put your HTML here. memberOf is a Organization or" + ' ' +
"ProgramMembership."}) ) );
          }
        } else {
            memberOf.push( ( React.createElement("div", {"data-advice": "Put your HTML here. memberOf is a Organization or" + ' ' +
"ProgramMembership."}) ) );
        }
      }
      var legalName;
      if( this.props.legalName ){
        if( this.props.legalName instanceof Array ){
          legalName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.legalName ){
            legalName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. legalName is a Text."}) ) );
          }
        } else {
            legalName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. legalName is a Text."}) ) );
        }
      }
      var vatID;
      if( this.props.vatID ){
        if( this.props.vatID instanceof Array ){
          vatID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.vatID ){
            vatID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. vatID is a Text."}) ) );
          }
        } else {
            vatID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. vatID is a Text."}) ) );
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
            globalLocationNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) ) );
        }
      }
      return (React.createElement("div", {title: "Organization", className: "Organization entity"}, 
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
         isicV4, 
         review, 
         taxID, 
         mainEntityOfPage, 
         member, 
         foundingLocation, 
         location, 
         employee, 
         email, 
         seeks, 
         description, 
         numberOfEmployees, 
         subOrganization, 
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
         legalName, 
         vatID, 
         globalLocationNumber 
     ));
    }
  });
});
