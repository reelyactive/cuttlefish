/* Thing > Person - A person (alive, dead, undead, or fictional).. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './distance', './product', './educationalorganization', './offer', './country', './brand', './pricespecification', './quantitativevalue', './programmembership', './person', './ownershipinfo', './place', './imageobject', './demand', './action', './organization', './postaladdress', './creativework', './contactpoint', './event'], function(React, Distance, Product, EducationalOrganization, Offer, Country, Brand, PriceSpecification, QuantitativeValue, ProgramMembership, Person, OwnershipInfo, Place, ImageObject, Demand, Action, Organization, PostalAddress, CreativeWork, ContactPoint, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var sibling;
      if( props.sibling ){
        if( props.sibling instanceof Array ){
          sibling = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sibling ){
            sibling.push( ( React.createElement(Person, React.__spread({},  props.sibling )) ) );          }
        } else {
          sibling = ( React.createElement(Person, {props:  props.sibling}) );        }
      }
      var honorificPrefix;
      if( props.honorificPrefix ){
        if( props.honorificPrefix instanceof Array ){
          honorificPrefix = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.honorificPrefix ){
            honorificPrefix.push( ( React.createElement("div", {"data-advice": "Put your HTML here. honorificPrefix is a Text."}) ) );
          }
        } else {
            honorificPrefix = ( React.createElement("div", {"data-advice": "Put your HTML here. honorificPrefix is a Text."}) );
        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.weight ){
            weight.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.weight )) ) );          }
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  props.weight}) );        }
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
      var relatedTo;
      if( props.relatedTo ){
        if( props.relatedTo instanceof Array ){
          relatedTo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.relatedTo ){
            relatedTo.push( ( React.createElement(Person, React.__spread({},  props.relatedTo )) ) );          }
        } else {
          relatedTo = ( React.createElement(Person, {props:  props.relatedTo}) );        }
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
      var birthDate;
      if( props.birthDate ){
        if( props.birthDate instanceof Array ){
          birthDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.birthDate ){
            birthDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. birthDate is a Date."}) ) );
          }
        } else {
            birthDate = ( React.createElement("div", {"data-advice": "Put your HTML here. birthDate is a Date."}) );
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
      var affiliation;
      if( props.affiliation ){
        if( props.affiliation instanceof Array ){
          affiliation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.affiliation ){
            affiliation.push( ( React.createElement(Organization, React.__spread({},  props.affiliation )) ) );          }
        } else {
          affiliation = ( React.createElement(Organization, {props:  props.affiliation}) );        }
      }
      var additionalName;
      if( props.additionalName ){
        if( props.additionalName instanceof Array ){
          additionalName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalName ){
            additionalName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalName is a Text."}) ) );
          }
        } else {
            additionalName = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalName is a Text."}) );
        }
      }
      var workLocation;
      if( props.workLocation ){
        if( props.workLocation instanceof Array ){
          workLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.workLocation ){
            workLocation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. workLocation is a Place or" + ' ' +
"ContactPoint."}) ) );
          }
        } else {
            workLocation = ( React.createElement("div", {"data-advice": "Put your HTML here. workLocation is a Place or" + ' ' +
"ContactPoint."}) );
        }
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
      var children;
      if( props.children ){
        if( props.children instanceof Array ){
          children = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.children ){
            children.push( ( React.createElement(Person, React.__spread({},  props.children )) ) );          }
        } else {
          children = ( React.createElement(Person, {props:  props.children}) );        }
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
      var spouse;
      if( props.spouse ){
        if( props.spouse instanceof Array ){
          spouse = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.spouse ){
            spouse.push( ( React.createElement(Person, React.__spread({},  props.spouse )) ) );          }
        } else {
          spouse = ( React.createElement(Person, {props:  props.spouse}) );        }
      }
      var worksFor;
      if( props.worksFor ){
        if( props.worksFor instanceof Array ){
          worksFor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.worksFor ){
            worksFor.push( ( React.createElement(Organization, React.__spread({},  props.worksFor )) ) );          }
        } else {
          worksFor = ( React.createElement(Organization, {props:  props.worksFor}) );        }
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
      var honorificSuffix;
      if( props.honorificSuffix ){
        if( props.honorificSuffix instanceof Array ){
          honorificSuffix = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.honorificSuffix ){
            honorificSuffix.push( ( React.createElement("div", {"data-advice": "Put your HTML here. honorificSuffix is a Text."}) ) );
          }
        } else {
            honorificSuffix = ( React.createElement("div", {"data-advice": "Put your HTML here. honorificSuffix is a Text."}) );
        }
      }
      var netWorth;
      if( props.netWorth ){
        if( props.netWorth instanceof Array ){
          netWorth = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.netWorth ){
            netWorth.push( ( React.createElement(PriceSpecification, React.__spread({},  props.netWorth )) ) );          }
        } else {
          netWorth = ( React.createElement(PriceSpecification, {props:  props.netWorth}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var homeLocation;
      if( props.homeLocation ){
        if( props.homeLocation instanceof Array ){
          homeLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.homeLocation ){
            homeLocation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. homeLocation is a Place or" + ' ' +
"ContactPoint."}) ) );
          }
        } else {
            homeLocation = ( React.createElement("div", {"data-advice": "Put your HTML here. homeLocation is a Place or" + ' ' +
"ContactPoint."}) );
        }
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
      var colleague;
      if( props.colleague ){
        if( props.colleague instanceof Array ){
          colleague = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.colleague ){
            colleague.push( ( React.createElement(Person, React.__spread({},  props.colleague )) ) );          }
        } else {
          colleague = ( React.createElement(Person, {props:  props.colleague}) );        }
      }
      var performerIn;
      if( props.performerIn ){
        if( props.performerIn instanceof Array ){
          performerIn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.performerIn ){
            performerIn.push( ( React.createElement(Event, React.__spread({},  props.performerIn )) ) );          }
        } else {
          performerIn = ( React.createElement(Event, {props:  props.performerIn}) );        }
      }
      var birthPlace;
      if( props.birthPlace ){
        if( props.birthPlace instanceof Array ){
          birthPlace = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.birthPlace ){
            birthPlace.push( ( React.createElement(Place, React.__spread({},  props.birthPlace )) ) );          }
        } else {
          birthPlace = ( React.createElement(Place, {props:  props.birthPlace}) );        }
      }
      var knows;
      if( props.knows ){
        if( props.knows instanceof Array ){
          knows = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.knows ){
            knows.push( ( React.createElement(Person, React.__spread({},  props.knows )) ) );          }
        } else {
          knows = ( React.createElement(Person, {props:  props.knows}) );        }
      }
      var parent;
      if( props.parent ){
        if( props.parent instanceof Array ){
          parent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.parent ){
            parent.push( ( React.createElement(Person, React.__spread({},  props.parent )) ) );          }
        } else {
          parent = ( React.createElement(Person, {props:  props.parent}) );        }
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
      var jobTitle;
      if( props.jobTitle ){
        if( props.jobTitle instanceof Array ){
          jobTitle = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.jobTitle ){
            jobTitle.push( ( React.createElement("div", {"data-advice": "Put your HTML here. jobTitle is a Text."}) ) );
          }
        } else {
            jobTitle = ( React.createElement("div", {"data-advice": "Put your HTML here. jobTitle is a Text."}) );
        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.brand ){
            brand.push( ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Organization or" + ' ' +
"Brand."}) ) );
          }
        } else {
            brand = ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Organization or" + ' ' +
"Brand."}) );
        }
      }
      var familyName;
      if( props.familyName ){
        if( props.familyName instanceof Array ){
          familyName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.familyName ){
            familyName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. familyName is a Text."}) ) );
          }
        } else {
            familyName = ( React.createElement("div", {"data-advice": "Put your HTML here. familyName is a Text."}) );
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
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
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
      var nationality;
      if( props.nationality ){
        if( props.nationality instanceof Array ){
          nationality = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.nationality ){
            nationality.push( ( React.createElement(Country, React.__spread({},  props.nationality )) ) );          }
        } else {
          nationality = ( React.createElement(Country, {props:  props.nationality}) );        }
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
      var deathDate;
      if( props.deathDate ){
        if( props.deathDate instanceof Array ){
          deathDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.deathDate ){
            deathDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. deathDate is a Date."}) ) );
          }
        } else {
            deathDate = ( React.createElement("div", {"data-advice": "Put your HTML here. deathDate is a Date."}) );
        }
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
      var gender;
      if( props.gender ){
        if( props.gender instanceof Array ){
          gender = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gender ){
            gender.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gender is a Text."}) ) );
          }
        } else {
            gender = ( React.createElement("div", {"data-advice": "Put your HTML here. gender is a Text."}) );
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
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.height ){
            height.push( ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            height = ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var deathPlace;
      if( props.deathPlace ){
        if( props.deathPlace instanceof Array ){
          deathPlace = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.deathPlace ){
            deathPlace.push( ( React.createElement(Place, React.__spread({},  props.deathPlace )) ) );          }
        } else {
          deathPlace = ( React.createElement(Place, {props:  props.deathPlace}) );        }
      }
      var follows;
      if( props.follows ){
        if( props.follows instanceof Array ){
          follows = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.follows ){
            follows.push( ( React.createElement(Person, React.__spread({},  props.follows )) ) );          }
        } else {
          follows = ( React.createElement(Person, {props:  props.follows}) );        }
      }
      var givenName;
      if( props.givenName ){
        if( props.givenName instanceof Array ){
          givenName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.givenName ){
            givenName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. givenName is a Text."}) ) );
          }
        } else {
            givenName = ( React.createElement("div", {"data-advice": "Put your HTML here. givenName is a Text."}) );
        }
      }
      var alumniOf;
      if( props.alumniOf ){
        if( props.alumniOf instanceof Array ){
          alumniOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alumniOf ){
            alumniOf.push( ( React.createElement(EducationalOrganization, React.__spread({},  props.alumniOf )) ) );          }
        } else {
          alumniOf = ( React.createElement(EducationalOrganization, {props:  props.alumniOf}) );        }
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
