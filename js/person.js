/* Thing > Person - A person (alive, dead, undead, or fictional).. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './distance', './product', './educationalorganization', './offer', './country', './brand', './pricespecification', './quantitativevalue', './programmembership', './person', './ownershipinfo', './place', './imageobject', './demand', './action', './organization', './postaladdress', './creativework', './contactpoint', './event'], function(React, Distance, Product, EducationalOrganization, Offer, Country, Brand, PriceSpecification, QuantitativeValue, ProgramMembership, Person, OwnershipInfo, Place, ImageObject, Demand, Action, Organization, PostalAddress, CreativeWork, ContactPoint, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var sibling;
      if( this.props.sibling ){
        if( this.props.sibling instanceof Array ){
          sibling = [(React.createElement("p", null, "sibling:") )];
          for( i in this.props.sibling ){
            sibling.push( ( React.createElement(Person, {props:  this.props.sibling}) ) );          }
        } else {
          sibling = ( React.createElement(Person, {props:  this.props.sibling}) );        }
      }
      var honorificPrefix;
      if( this.props.honorificPrefix ){
        if( this.props.honorificPrefix instanceof Array ){
          honorificPrefix = [(React.createElement("p", null, "honorificPrefix:") )];
          for( i in this.props.honorificPrefix ){
            honorificPrefix.push( ( React.createElement("div", {class: "honorificPrefix"}) ) );
          }
        } else {
          honorificPrefix = ( React.createElement("div", {class: "honorificPrefix"}, this.props.honorificPrefix) );
        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [(React.createElement("p", null, "weight:") )];
          for( i in this.props.weight ){
            weight.push( ( React.createElement(QuantitativeValue, {props:  this.props.weight}) ) );          }
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  this.props.weight}) );        }
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
      var relatedTo;
      if( this.props.relatedTo ){
        if( this.props.relatedTo instanceof Array ){
          relatedTo = [(React.createElement("p", null, "relatedTo:") )];
          for( i in this.props.relatedTo ){
            relatedTo.push( ( React.createElement(Person, {props:  this.props.relatedTo}) ) );          }
        } else {
          relatedTo = ( React.createElement(Person, {props:  this.props.relatedTo}) );        }
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
      var birthDate;
      if( this.props.birthDate ){
        if( this.props.birthDate instanceof Array ){
          birthDate = [(React.createElement("p", null, "birthDate:") )];
          for( i in this.props.birthDate ){
            birthDate.push( ( React.createElement("div", {class: "birthDate"}) ) );
          }
        } else {
          birthDate = ( React.createElement("div", {class: "birthDate"}, this.props.birthDate) );
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
      var affiliation;
      if( this.props.affiliation ){
        if( this.props.affiliation instanceof Array ){
          affiliation = [(React.createElement("p", null, "affiliation:") )];
          for( i in this.props.affiliation ){
            affiliation.push( ( React.createElement(Organization, {props:  this.props.affiliation}) ) );          }
        } else {
          affiliation = ( React.createElement(Organization, {props:  this.props.affiliation}) );        }
      }
      var additionalName;
      if( this.props.additionalName ){
        if( this.props.additionalName instanceof Array ){
          additionalName = [(React.createElement("p", null, "additionalName:") )];
          for( i in this.props.additionalName ){
            additionalName.push( ( React.createElement("div", {class: "additionalName"}) ) );
          }
        } else {
          additionalName = ( React.createElement("div", {class: "additionalName"}, this.props.additionalName) );
        }
      }
      var workLocation;
      if( this.props.workLocation ){
        if( this.props.workLocation instanceof Array ){
          workLocation = [(React.createElement("p", null, "workLocation:") )];
          for( i in this.props.workLocation ){
            workLocation.push( ( React.createElement("div", {class: "workLocation"}) ) );
          }
        } else {
          workLocation = ( React.createElement("div", {class: "workLocation"}, this.props.workLocation) );
        }
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
      var children;
      if( this.props.children ){
        if( this.props.children instanceof Array ){
          children = [(React.createElement("p", null, "children:") )];
          for( i in this.props.children ){
            children.push( ( React.createElement(Person, {props:  this.props.children}) ) );          }
        } else {
          children = ( React.createElement(Person, {props:  this.props.children}) );        }
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
      var spouse;
      if( this.props.spouse ){
        if( this.props.spouse instanceof Array ){
          spouse = [(React.createElement("p", null, "spouse:") )];
          for( i in this.props.spouse ){
            spouse.push( ( React.createElement(Person, {props:  this.props.spouse}) ) );          }
        } else {
          spouse = ( React.createElement(Person, {props:  this.props.spouse}) );        }
      }
      var worksFor;
      if( this.props.worksFor ){
        if( this.props.worksFor instanceof Array ){
          worksFor = [(React.createElement("p", null, "worksFor:") )];
          for( i in this.props.worksFor ){
            worksFor.push( ( React.createElement(Organization, {props:  this.props.worksFor}) ) );          }
        } else {
          worksFor = ( React.createElement(Organization, {props:  this.props.worksFor}) );        }
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
      var honorificSuffix;
      if( this.props.honorificSuffix ){
        if( this.props.honorificSuffix instanceof Array ){
          honorificSuffix = [(React.createElement("p", null, "honorificSuffix:") )];
          for( i in this.props.honorificSuffix ){
            honorificSuffix.push( ( React.createElement("div", {class: "honorificSuffix"}) ) );
          }
        } else {
          honorificSuffix = ( React.createElement("div", {class: "honorificSuffix"}, this.props.honorificSuffix) );
        }
      }
      var netWorth;
      if( this.props.netWorth ){
        if( this.props.netWorth instanceof Array ){
          netWorth = [(React.createElement("p", null, "netWorth:") )];
          for( i in this.props.netWorth ){
            netWorth.push( ( React.createElement(PriceSpecification, {props:  this.props.netWorth}) ) );          }
        } else {
          netWorth = ( React.createElement(PriceSpecification, {props:  this.props.netWorth}) );        }
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
      var homeLocation;
      if( this.props.homeLocation ){
        if( this.props.homeLocation instanceof Array ){
          homeLocation = [(React.createElement("p", null, "homeLocation:") )];
          for( i in this.props.homeLocation ){
            homeLocation.push( ( React.createElement("div", {class: "homeLocation"}) ) );
          }
        } else {
          homeLocation = ( React.createElement("div", {class: "homeLocation"}, this.props.homeLocation) );
        }
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
      var colleague;
      if( this.props.colleague ){
        if( this.props.colleague instanceof Array ){
          colleague = [(React.createElement("p", null, "colleague:") )];
          for( i in this.props.colleague ){
            colleague.push( ( React.createElement(Person, {props:  this.props.colleague}) ) );          }
        } else {
          colleague = ( React.createElement(Person, {props:  this.props.colleague}) );        }
      }
      var performerIn;
      if( this.props.performerIn ){
        if( this.props.performerIn instanceof Array ){
          performerIn = [(React.createElement("p", null, "performerIn:") )];
          for( i in this.props.performerIn ){
            performerIn.push( ( React.createElement(Event, {props:  this.props.performerIn}) ) );          }
        } else {
          performerIn = ( React.createElement(Event, {props:  this.props.performerIn}) );        }
      }
      var birthPlace;
      if( this.props.birthPlace ){
        if( this.props.birthPlace instanceof Array ){
          birthPlace = [(React.createElement("p", null, "birthPlace:") )];
          for( i in this.props.birthPlace ){
            birthPlace.push( ( React.createElement(Place, {props:  this.props.birthPlace}) ) );          }
        } else {
          birthPlace = ( React.createElement(Place, {props:  this.props.birthPlace}) );        }
      }
      var knows;
      if( this.props.knows ){
        if( this.props.knows instanceof Array ){
          knows = [(React.createElement("p", null, "knows:") )];
          for( i in this.props.knows ){
            knows.push( ( React.createElement(Person, {props:  this.props.knows}) ) );          }
        } else {
          knows = ( React.createElement(Person, {props:  this.props.knows}) );        }
      }
      var parent;
      if( this.props.parent ){
        if( this.props.parent instanceof Array ){
          parent = [(React.createElement("p", null, "parent:") )];
          for( i in this.props.parent ){
            parent.push( ( React.createElement(Person, {props:  this.props.parent}) ) );          }
        } else {
          parent = ( React.createElement(Person, {props:  this.props.parent}) );        }
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
      var jobTitle;
      if( this.props.jobTitle ){
        if( this.props.jobTitle instanceof Array ){
          jobTitle = [(React.createElement("p", null, "jobTitle:") )];
          for( i in this.props.jobTitle ){
            jobTitle.push( ( React.createElement("div", {class: "jobTitle"}) ) );
          }
        } else {
          jobTitle = ( React.createElement("div", {class: "jobTitle"}, this.props.jobTitle) );
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
      var familyName;
      if( this.props.familyName ){
        if( this.props.familyName instanceof Array ){
          familyName = [(React.createElement("p", null, "familyName:") )];
          for( i in this.props.familyName ){
            familyName.push( ( React.createElement("div", {class: "familyName"}) ) );
          }
        } else {
          familyName = ( React.createElement("div", {class: "familyName"}, this.props.familyName) );
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
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
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
      var nationality;
      if( this.props.nationality ){
        if( this.props.nationality instanceof Array ){
          nationality = [(React.createElement("p", null, "nationality:") )];
          for( i in this.props.nationality ){
            nationality.push( ( React.createElement(Country, {props:  this.props.nationality}) ) );          }
        } else {
          nationality = ( React.createElement(Country, {props:  this.props.nationality}) );        }
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
      var deathDate;
      if( this.props.deathDate ){
        if( this.props.deathDate instanceof Array ){
          deathDate = [(React.createElement("p", null, "deathDate:") )];
          for( i in this.props.deathDate ){
            deathDate.push( ( React.createElement("div", {class: "deathDate"}) ) );
          }
        } else {
          deathDate = ( React.createElement("div", {class: "deathDate"}, this.props.deathDate) );
        }
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
      var gender;
      if( this.props.gender ){
        if( this.props.gender instanceof Array ){
          gender = [(React.createElement("p", null, "gender:") )];
          for( i in this.props.gender ){
            gender.push( ( React.createElement("div", {class: "gender"}) ) );
          }
        } else {
          gender = ( React.createElement("div", {class: "gender"}, this.props.gender) );
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
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [(React.createElement("p", null, "height:") )];
          for( i in this.props.height ){
            height.push( ( React.createElement("div", {class: "height"}) ) );
          }
        } else {
          height = ( React.createElement("div", {class: "height"}, this.props.height) );
        }
      }
      var deathPlace;
      if( this.props.deathPlace ){
        if( this.props.deathPlace instanceof Array ){
          deathPlace = [(React.createElement("p", null, "deathPlace:") )];
          for( i in this.props.deathPlace ){
            deathPlace.push( ( React.createElement(Place, {props:  this.props.deathPlace}) ) );          }
        } else {
          deathPlace = ( React.createElement(Place, {props:  this.props.deathPlace}) );        }
      }
      var follows;
      if( this.props.follows ){
        if( this.props.follows instanceof Array ){
          follows = [(React.createElement("p", null, "follows:") )];
          for( i in this.props.follows ){
            follows.push( ( React.createElement(Person, {props:  this.props.follows}) ) );          }
        } else {
          follows = ( React.createElement(Person, {props:  this.props.follows}) );        }
      }
      var givenName;
      if( this.props.givenName ){
        if( this.props.givenName instanceof Array ){
          givenName = [(React.createElement("p", null, "givenName:") )];
          for( i in this.props.givenName ){
            givenName.push( ( React.createElement("div", {class: "givenName"}) ) );
          }
        } else {
          givenName = ( React.createElement("div", {class: "givenName"}, this.props.givenName) );
        }
      }
      var alumniOf;
      if( this.props.alumniOf ){
        if( this.props.alumniOf instanceof Array ){
          alumniOf = [(React.createElement("p", null, "alumniOf:") )];
          for( i in this.props.alumniOf ){
            alumniOf.push( ( React.createElement(EducationalOrganization, {props:  this.props.alumniOf}) ) );          }
        } else {
          alumniOf = ( React.createElement(EducationalOrganization, {props:  this.props.alumniOf}) );        }
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
      return (React.createElement("div", {title: "Person", className: "Person entity"}, 
         sibling, 
         honorificPrefix, 
         weight, 
         sameAs, 
         image, 
         relatedTo, 
         telephone, 
         birthDate, 
         faxNumber, 
         affiliation, 
         additionalName, 
         workLocation, 
         additionalType, 
         children, 
         description, 
         isicV4, 
         spouse, 
         worksFor, 
         taxID, 
         honorificSuffix, 
         netWorth, 
         mainEntityOfPage, 
         homeLocation, 
         email, 
         seeks, 
         colleague, 
         performerIn, 
         birthPlace, 
         knows, 
         parent, 
         memberOf, 
         jobTitle, 
         brand, 
         familyName, 
         award, 
         alternateName, 
         potentialAction, 
         address, 
         duns, 
         nationality, 
         contactPoint, 
         deathDate, 
         makesOffer, 
         hasPOS, 
         owns, 
         name, 
         naics, 
         url, 
         gender, 
         vatID, 
         height, 
         deathPlace, 
         follows, 
         givenName, 
         alumniOf, 
         globalLocationNumber 
     ));
    }
  });
});
