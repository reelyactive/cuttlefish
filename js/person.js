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
          sibling = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sibling ){
            sibling.push( ( React.createElement(Person, React.__spread({},  this.props.sibling )) ) );          }
        } else {
          sibling = ( React.createElement(Person, {props:  this.props.sibling}) );        }
      }
      var honorificPrefix;
      if( this.props.honorificPrefix ){
        if( this.props.honorificPrefix instanceof Array ){
          honorificPrefix = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.honorificPrefix ){
            honorificPrefix.push( ( React.createElement("div", {"data-advice": "Put your HTML here. honorificPrefix is a Text."}) ) );
          }
        } else {
            honorificPrefix = ( React.createElement("div", {"data-advice": "Put your HTML here. honorificPrefix is a Text."}) );
        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.weight ){
            weight.push( ( React.createElement(QuantitativeValue, React.__spread({},  this.props.weight )) ) );          }
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  this.props.weight}) );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
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
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var relatedTo;
      if( this.props.relatedTo ){
        if( this.props.relatedTo instanceof Array ){
          relatedTo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.relatedTo ){
            relatedTo.push( ( React.createElement(Person, React.__spread({},  this.props.relatedTo )) ) );          }
        } else {
          relatedTo = ( React.createElement(Person, {props:  this.props.relatedTo}) );        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.telephone ){
            telephone.push( ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) ) );
          }
        } else {
            telephone = ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) );
        }
      }
      var birthDate;
      if( this.props.birthDate ){
        if( this.props.birthDate instanceof Array ){
          birthDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.birthDate ){
            birthDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. birthDate is a Date."}) ) );
          }
        } else {
            birthDate = ( React.createElement("div", {"data-advice": "Put your HTML here. birthDate is a Date."}) );
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
            faxNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) );
        }
      }
      var affiliation;
      if( this.props.affiliation ){
        if( this.props.affiliation instanceof Array ){
          affiliation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.affiliation ){
            affiliation.push( ( React.createElement(Organization, React.__spread({},  this.props.affiliation )) ) );          }
        } else {
          affiliation = ( React.createElement(Organization, {props:  this.props.affiliation}) );        }
      }
      var additionalName;
      if( this.props.additionalName ){
        if( this.props.additionalName instanceof Array ){
          additionalName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalName ){
            additionalName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalName is a Text."}) ) );
          }
        } else {
            additionalName = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalName is a Text."}) );
        }
      }
      var workLocation;
      if( this.props.workLocation ){
        if( this.props.workLocation instanceof Array ){
          workLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.workLocation ){
            workLocation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. workLocation is a ContactPoint or" + ' ' +
"Place."}) ) );
          }
        } else {
            workLocation = ( React.createElement("div", {"data-advice": "Put your HTML here. workLocation is a ContactPoint or" + ' ' +
"Place."}) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var children;
      if( this.props.children ){
        if( this.props.children instanceof Array ){
          children = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.children ){
            children.push( ( React.createElement(Person, React.__spread({},  this.props.children )) ) );          }
        } else {
          children = ( React.createElement(Person, {props:  this.props.children}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) ) );
          }
        } else {
            isicV4 = ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) );
        }
      }
      var spouse;
      if( this.props.spouse ){
        if( this.props.spouse instanceof Array ){
          spouse = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.spouse ){
            spouse.push( ( React.createElement(Person, React.__spread({},  this.props.spouse )) ) );          }
        } else {
          spouse = ( React.createElement(Person, {props:  this.props.spouse}) );        }
      }
      var worksFor;
      if( this.props.worksFor ){
        if( this.props.worksFor instanceof Array ){
          worksFor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.worksFor ){
            worksFor.push( ( React.createElement(Organization, React.__spread({},  this.props.worksFor )) ) );          }
        } else {
          worksFor = ( React.createElement(Organization, {props:  this.props.worksFor}) );        }
      }
      var taxID;
      if( this.props.taxID ){
        if( this.props.taxID instanceof Array ){
          taxID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.taxID ){
            taxID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. taxID is a Text."}) ) );
          }
        } else {
            taxID = ( React.createElement("div", {"data-advice": "Put your HTML here. taxID is a Text."}) );
        }
      }
      var honorificSuffix;
      if( this.props.honorificSuffix ){
        if( this.props.honorificSuffix instanceof Array ){
          honorificSuffix = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.honorificSuffix ){
            honorificSuffix.push( ( React.createElement("div", {"data-advice": "Put your HTML here. honorificSuffix is a Text."}) ) );
          }
        } else {
            honorificSuffix = ( React.createElement("div", {"data-advice": "Put your HTML here. honorificSuffix is a Text."}) );
        }
      }
      var netWorth;
      if( this.props.netWorth ){
        if( this.props.netWorth instanceof Array ){
          netWorth = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.netWorth ){
            netWorth.push( ( React.createElement(PriceSpecification, React.__spread({},  this.props.netWorth )) ) );          }
        } else {
          netWorth = ( React.createElement(PriceSpecification, {props:  this.props.netWorth}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var homeLocation;
      if( this.props.homeLocation ){
        if( this.props.homeLocation instanceof Array ){
          homeLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.homeLocation ){
            homeLocation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. homeLocation is a ContactPoint or" + ' ' +
"Place."}) ) );
          }
        } else {
            homeLocation = ( React.createElement("div", {"data-advice": "Put your HTML here. homeLocation is a ContactPoint or" + ' ' +
"Place."}) );
        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.email ){
            email.push( ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) ) );
          }
        } else {
            email = ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) );
        }
      }
      var seeks;
      if( this.props.seeks ){
        if( this.props.seeks instanceof Array ){
          seeks = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.seeks ){
            seeks.push( ( React.createElement(Demand, React.__spread({},  this.props.seeks )) ) );          }
        } else {
          seeks = ( React.createElement(Demand, {props:  this.props.seeks}) );        }
      }
      var colleague;
      if( this.props.colleague ){
        if( this.props.colleague instanceof Array ){
          colleague = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.colleague ){
            colleague.push( ( React.createElement(Person, React.__spread({},  this.props.colleague )) ) );          }
        } else {
          colleague = ( React.createElement(Person, {props:  this.props.colleague}) );        }
      }
      var performerIn;
      if( this.props.performerIn ){
        if( this.props.performerIn instanceof Array ){
          performerIn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.performerIn ){
            performerIn.push( ( React.createElement(Event, React.__spread({},  this.props.performerIn )) ) );          }
        } else {
          performerIn = ( React.createElement(Event, {props:  this.props.performerIn}) );        }
      }
      var birthPlace;
      if( this.props.birthPlace ){
        if( this.props.birthPlace instanceof Array ){
          birthPlace = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.birthPlace ){
            birthPlace.push( ( React.createElement(Place, React.__spread({},  this.props.birthPlace )) ) );          }
        } else {
          birthPlace = ( React.createElement(Place, {props:  this.props.birthPlace}) );        }
      }
      var knows;
      if( this.props.knows ){
        if( this.props.knows instanceof Array ){
          knows = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.knows ){
            knows.push( ( React.createElement(Person, React.__spread({},  this.props.knows )) ) );          }
        } else {
          knows = ( React.createElement(Person, {props:  this.props.knows}) );        }
      }
      var parent;
      if( this.props.parent ){
        if( this.props.parent instanceof Array ){
          parent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.parent ){
            parent.push( ( React.createElement(Person, React.__spread({},  this.props.parent )) ) );          }
        } else {
          parent = ( React.createElement(Person, {props:  this.props.parent}) );        }
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
            memberOf = ( React.createElement("div", {"data-advice": "Put your HTML here. memberOf is a Organization or" + ' ' +
"ProgramMembership."}) );
        }
      }
      var jobTitle;
      if( this.props.jobTitle ){
        if( this.props.jobTitle instanceof Array ){
          jobTitle = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.jobTitle ){
            jobTitle.push( ( React.createElement("div", {"data-advice": "Put your HTML here. jobTitle is a Text."}) ) );
          }
        } else {
            jobTitle = ( React.createElement("div", {"data-advice": "Put your HTML here. jobTitle is a Text."}) );
        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.brand ){
            brand.push( ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) ) );
          }
        } else {
            brand = ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) );
        }
      }
      var familyName;
      if( this.props.familyName ){
        if( this.props.familyName instanceof Array ){
          familyName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.familyName ){
            familyName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. familyName is a Text."}) ) );
          }
        } else {
            familyName = ( React.createElement("div", {"data-advice": "Put your HTML here. familyName is a Text."}) );
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
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
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
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  this.props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.address ){
            address.push( ( React.createElement(PostalAddress, React.__spread({},  this.props.address )) ) );          }
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
            duns = ( React.createElement("div", {"data-advice": "Put your HTML here. duns is a Text."}) );
        }
      }
      var nationality;
      if( this.props.nationality ){
        if( this.props.nationality instanceof Array ){
          nationality = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.nationality ){
            nationality.push( ( React.createElement(Country, React.__spread({},  this.props.nationality )) ) );          }
        } else {
          nationality = ( React.createElement(Country, {props:  this.props.nationality}) );        }
      }
      var contactPoint;
      if( this.props.contactPoint ){
        if( this.props.contactPoint instanceof Array ){
          contactPoint = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.contactPoint ){
            contactPoint.push( ( React.createElement(ContactPoint, React.__spread({},  this.props.contactPoint )) ) );          }
        } else {
          contactPoint = ( React.createElement(ContactPoint, {props:  this.props.contactPoint}) );        }
      }
      var deathDate;
      if( this.props.deathDate ){
        if( this.props.deathDate instanceof Array ){
          deathDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.deathDate ){
            deathDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. deathDate is a Date."}) ) );
          }
        } else {
            deathDate = ( React.createElement("div", {"data-advice": "Put your HTML here. deathDate is a Date."}) );
        }
      }
      var makesOffer;
      if( this.props.makesOffer ){
        if( this.props.makesOffer instanceof Array ){
          makesOffer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.makesOffer ){
            makesOffer.push( ( React.createElement(Offer, React.__spread({},  this.props.makesOffer )) ) );          }
        } else {
          makesOffer = ( React.createElement(Offer, {props:  this.props.makesOffer}) );        }
      }
      var hasPOS;
      if( this.props.hasPOS ){
        if( this.props.hasPOS instanceof Array ){
          hasPOS = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.hasPOS ){
            hasPOS.push( ( React.createElement(Place, React.__spread({},  this.props.hasPOS )) ) );          }
        } else {
          hasPOS = ( React.createElement(Place, {props:  this.props.hasPOS}) );        }
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
            owns = ( React.createElement("div", {"data-advice": "Put your HTML here. owns is a OwnershipInfo or" + ' ' +
"Product."}) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
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
            naics = ( React.createElement("div", {"data-advice": "Put your HTML here. naics is a Text."}) );
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
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var gender;
      if( this.props.gender ){
        if( this.props.gender instanceof Array ){
          gender = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gender ){
            gender.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gender is a Text."}) ) );
          }
        } else {
            gender = ( React.createElement("div", {"data-advice": "Put your HTML here. gender is a Text."}) );
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
            vatID = ( React.createElement("div", {"data-advice": "Put your HTML here. vatID is a Text."}) );
        }
      }
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.height ){
            height.push( ( React.createElement("div", {"data-advice": "Put your HTML here. height is a QuantitativeValue or" + ' ' +
"Distance."}) ) );
          }
        } else {
            height = ( React.createElement("div", {"data-advice": "Put your HTML here. height is a QuantitativeValue or" + ' ' +
"Distance."}) );
        }
      }
      var deathPlace;
      if( this.props.deathPlace ){
        if( this.props.deathPlace instanceof Array ){
          deathPlace = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.deathPlace ){
            deathPlace.push( ( React.createElement(Place, React.__spread({},  this.props.deathPlace )) ) );          }
        } else {
          deathPlace = ( React.createElement(Place, {props:  this.props.deathPlace}) );        }
      }
      var follows;
      if( this.props.follows ){
        if( this.props.follows instanceof Array ){
          follows = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.follows ){
            follows.push( ( React.createElement(Person, React.__spread({},  this.props.follows )) ) );          }
        } else {
          follows = ( React.createElement(Person, {props:  this.props.follows}) );        }
      }
      var givenName;
      if( this.props.givenName ){
        if( this.props.givenName instanceof Array ){
          givenName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.givenName ){
            givenName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. givenName is a Text."}) ) );
          }
        } else {
            givenName = ( React.createElement("div", {"data-advice": "Put your HTML here. givenName is a Text."}) );
        }
      }
      var alumniOf;
      if( this.props.alumniOf ){
        if( this.props.alumniOf instanceof Array ){
          alumniOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alumniOf ){
            alumniOf.push( ( React.createElement(EducationalOrganization, React.__spread({},  this.props.alumniOf )) ) );          }
        } else {
          alumniOf = ( React.createElement(EducationalOrganization, {props:  this.props.alumniOf}) );        }
      }
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.globalLocationNumber ){
            globalLocationNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) ) );
          }
        } else {
            globalLocationNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) );
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
