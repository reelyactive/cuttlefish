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
          sibling = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sibling ){
            sibling.push( ( <Person props={ this.props.sibling } /> ) );          }
        } else {
          sibling = ( <Person props={ this.props.sibling } /> );        }
      }
      var honorificPrefix;
      if( this.props.honorificPrefix ){
        if( this.props.honorificPrefix instanceof Array ){
          honorificPrefix = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.honorificPrefix ){
            honorificPrefix.push( ( <div data-advice='Put your HTML here. honorificPrefix is a Text.'></div> ) );
          }
        } else {
            honorificPrefix.push( ( <div data-advice='Put your HTML here. honorificPrefix is a Text.'></div> ) );
        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.weight ){
            weight.push( ( <QuantitativeValue props={ this.props.weight } /> ) );          }
        } else {
          weight = ( <QuantitativeValue props={ this.props.weight } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
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
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
        }
      }
      var relatedTo;
      if( this.props.relatedTo ){
        if( this.props.relatedTo instanceof Array ){
          relatedTo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.relatedTo ){
            relatedTo.push( ( <Person props={ this.props.relatedTo } /> ) );          }
        } else {
          relatedTo = ( <Person props={ this.props.relatedTo } /> );        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.telephone ){
            telephone.push( ( <div data-advice='Put your HTML here. telephone is a Text.'></div> ) );
          }
        } else {
            telephone.push( ( <div data-advice='Put your HTML here. telephone is a Text.'></div> ) );
        }
      }
      var birthDate;
      if( this.props.birthDate ){
        if( this.props.birthDate instanceof Array ){
          birthDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.birthDate ){
            birthDate.push( ( <div data-advice='Put your HTML here. birthDate is a Date.'></div> ) );
          }
        } else {
            birthDate.push( ( <div data-advice='Put your HTML here. birthDate is a Date.'></div> ) );
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
            faxNumber.push( ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> ) );
        }
      }
      var affiliation;
      if( this.props.affiliation ){
        if( this.props.affiliation instanceof Array ){
          affiliation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.affiliation ){
            affiliation.push( ( <Organization props={ this.props.affiliation } /> ) );          }
        } else {
          affiliation = ( <Organization props={ this.props.affiliation } /> );        }
      }
      var additionalName;
      if( this.props.additionalName ){
        if( this.props.additionalName instanceof Array ){
          additionalName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalName ){
            additionalName.push( ( <div data-advice='Put your HTML here. additionalName is a Text.'></div> ) );
          }
        } else {
            additionalName.push( ( <div data-advice='Put your HTML here. additionalName is a Text.'></div> ) );
        }
      }
      var workLocation;
      if( this.props.workLocation ){
        if( this.props.workLocation instanceof Array ){
          workLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.workLocation ){
            workLocation.push( ( <div data-advice='Put your HTML here. workLocation is a Place or
ContactPoint.'></div> ) );
          }
        } else {
            workLocation.push( ( <div data-advice='Put your HTML here. workLocation is a Place or
ContactPoint.'></div> ) );
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
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
        }
      }
      var children;
      if( this.props.children ){
        if( this.props.children instanceof Array ){
          children = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.children ){
            children.push( ( <Person props={ this.props.children } /> ) );          }
        } else {
          children = ( <Person props={ this.props.children } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> ) );
          }
        } else {
            isicV4.push( ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> ) );
        }
      }
      var spouse;
      if( this.props.spouse ){
        if( this.props.spouse instanceof Array ){
          spouse = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.spouse ){
            spouse.push( ( <Person props={ this.props.spouse } /> ) );          }
        } else {
          spouse = ( <Person props={ this.props.spouse } /> );        }
      }
      var worksFor;
      if( this.props.worksFor ){
        if( this.props.worksFor instanceof Array ){
          worksFor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.worksFor ){
            worksFor.push( ( <Organization props={ this.props.worksFor } /> ) );          }
        } else {
          worksFor = ( <Organization props={ this.props.worksFor } /> );        }
      }
      var taxID;
      if( this.props.taxID ){
        if( this.props.taxID instanceof Array ){
          taxID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.taxID ){
            taxID.push( ( <div data-advice='Put your HTML here. taxID is a Text.'></div> ) );
          }
        } else {
            taxID.push( ( <div data-advice='Put your HTML here. taxID is a Text.'></div> ) );
        }
      }
      var honorificSuffix;
      if( this.props.honorificSuffix ){
        if( this.props.honorificSuffix instanceof Array ){
          honorificSuffix = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.honorificSuffix ){
            honorificSuffix.push( ( <div data-advice='Put your HTML here. honorificSuffix is a Text.'></div> ) );
          }
        } else {
            honorificSuffix.push( ( <div data-advice='Put your HTML here. honorificSuffix is a Text.'></div> ) );
        }
      }
      var netWorth;
      if( this.props.netWorth ){
        if( this.props.netWorth instanceof Array ){
          netWorth = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.netWorth ){
            netWorth.push( ( <PriceSpecification props={ this.props.netWorth } /> ) );          }
        } else {
          netWorth = ( <PriceSpecification props={ this.props.netWorth } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
        }
      }
      var homeLocation;
      if( this.props.homeLocation ){
        if( this.props.homeLocation instanceof Array ){
          homeLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.homeLocation ){
            homeLocation.push( ( <div data-advice='Put your HTML here. homeLocation is a Place or
ContactPoint.'></div> ) );
          }
        } else {
            homeLocation.push( ( <div data-advice='Put your HTML here. homeLocation is a Place or
ContactPoint.'></div> ) );
        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.email ){
            email.push( ( <div data-advice='Put your HTML here. email is a Text.'></div> ) );
          }
        } else {
            email.push( ( <div data-advice='Put your HTML here. email is a Text.'></div> ) );
        }
      }
      var seeks;
      if( this.props.seeks ){
        if( this.props.seeks instanceof Array ){
          seeks = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.seeks ){
            seeks.push( ( <Demand props={ this.props.seeks } /> ) );          }
        } else {
          seeks = ( <Demand props={ this.props.seeks } /> );        }
      }
      var colleague;
      if( this.props.colleague ){
        if( this.props.colleague instanceof Array ){
          colleague = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.colleague ){
            colleague.push( ( <Person props={ this.props.colleague } /> ) );          }
        } else {
          colleague = ( <Person props={ this.props.colleague } /> );        }
      }
      var performerIn;
      if( this.props.performerIn ){
        if( this.props.performerIn instanceof Array ){
          performerIn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.performerIn ){
            performerIn.push( ( <Event props={ this.props.performerIn } /> ) );          }
        } else {
          performerIn = ( <Event props={ this.props.performerIn } /> );        }
      }
      var birthPlace;
      if( this.props.birthPlace ){
        if( this.props.birthPlace instanceof Array ){
          birthPlace = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.birthPlace ){
            birthPlace.push( ( <Place props={ this.props.birthPlace } /> ) );          }
        } else {
          birthPlace = ( <Place props={ this.props.birthPlace } /> );        }
      }
      var knows;
      if( this.props.knows ){
        if( this.props.knows instanceof Array ){
          knows = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.knows ){
            knows.push( ( <Person props={ this.props.knows } /> ) );          }
        } else {
          knows = ( <Person props={ this.props.knows } /> );        }
      }
      var parent;
      if( this.props.parent ){
        if( this.props.parent instanceof Array ){
          parent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.parent ){
            parent.push( ( <Person props={ this.props.parent } /> ) );          }
        } else {
          parent = ( <Person props={ this.props.parent } /> );        }
      }
      var memberOf;
      if( this.props.memberOf ){
        if( this.props.memberOf instanceof Array ){
          memberOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.memberOf ){
            memberOf.push( ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> ) );
          }
        } else {
            memberOf.push( ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> ) );
        }
      }
      var jobTitle;
      if( this.props.jobTitle ){
        if( this.props.jobTitle instanceof Array ){
          jobTitle = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.jobTitle ){
            jobTitle.push( ( <div data-advice='Put your HTML here. jobTitle is a Text.'></div> ) );
          }
        } else {
            jobTitle.push( ( <div data-advice='Put your HTML here. jobTitle is a Text.'></div> ) );
        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.brand ){
            brand.push( ( <div data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> ) );
          }
        } else {
            brand.push( ( <div data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> ) );
        }
      }
      var familyName;
      if( this.props.familyName ){
        if( this.props.familyName instanceof Array ){
          familyName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.familyName ){
            familyName.push( ( <div data-advice='Put your HTML here. familyName is a Text.'></div> ) );
          }
        } else {
            familyName.push( ( <div data-advice='Put your HTML here. familyName is a Text.'></div> ) );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.address ){
            address.push( ( <PostalAddress props={ this.props.address } /> ) );          }
        } else {
          address = ( <PostalAddress props={ this.props.address } /> );        }
      }
      var duns;
      if( this.props.duns ){
        if( this.props.duns instanceof Array ){
          duns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.duns ){
            duns.push( ( <div data-advice='Put your HTML here. duns is a Text.'></div> ) );
          }
        } else {
            duns.push( ( <div data-advice='Put your HTML here. duns is a Text.'></div> ) );
        }
      }
      var nationality;
      if( this.props.nationality ){
        if( this.props.nationality instanceof Array ){
          nationality = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.nationality ){
            nationality.push( ( <Country props={ this.props.nationality } /> ) );          }
        } else {
          nationality = ( <Country props={ this.props.nationality } /> );        }
      }
      var contactPoint;
      if( this.props.contactPoint ){
        if( this.props.contactPoint instanceof Array ){
          contactPoint = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contactPoint ){
            contactPoint.push( ( <ContactPoint props={ this.props.contactPoint } /> ) );          }
        } else {
          contactPoint = ( <ContactPoint props={ this.props.contactPoint } /> );        }
      }
      var deathDate;
      if( this.props.deathDate ){
        if( this.props.deathDate instanceof Array ){
          deathDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.deathDate ){
            deathDate.push( ( <div data-advice='Put your HTML here. deathDate is a Date.'></div> ) );
          }
        } else {
            deathDate.push( ( <div data-advice='Put your HTML here. deathDate is a Date.'></div> ) );
        }
      }
      var makesOffer;
      if( this.props.makesOffer ){
        if( this.props.makesOffer instanceof Array ){
          makesOffer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.makesOffer ){
            makesOffer.push( ( <Offer props={ this.props.makesOffer } /> ) );          }
        } else {
          makesOffer = ( <Offer props={ this.props.makesOffer } /> );        }
      }
      var hasPOS;
      if( this.props.hasPOS ){
        if( this.props.hasPOS instanceof Array ){
          hasPOS = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.hasPOS ){
            hasPOS.push( ( <Place props={ this.props.hasPOS } /> ) );          }
        } else {
          hasPOS = ( <Place props={ this.props.hasPOS } /> );        }
      }
      var owns;
      if( this.props.owns ){
        if( this.props.owns instanceof Array ){
          owns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.owns ){
            owns.push( ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> ) );
          }
        } else {
            owns.push( ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> ) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
        }
      }
      var naics;
      if( this.props.naics ){
        if( this.props.naics instanceof Array ){
          naics = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.naics ){
            naics.push( ( <div data-advice='Put your HTML here. naics is a Text.'></div> ) );
          }
        } else {
            naics.push( ( <div data-advice='Put your HTML here. naics is a Text.'></div> ) );
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
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
        }
      }
      var gender;
      if( this.props.gender ){
        if( this.props.gender instanceof Array ){
          gender = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gender ){
            gender.push( ( <div data-advice='Put your HTML here. gender is a Text.'></div> ) );
          }
        } else {
            gender.push( ( <div data-advice='Put your HTML here. gender is a Text.'></div> ) );
        }
      }
      var vatID;
      if( this.props.vatID ){
        if( this.props.vatID instanceof Array ){
          vatID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.vatID ){
            vatID.push( ( <div data-advice='Put your HTML here. vatID is a Text.'></div> ) );
          }
        } else {
            vatID.push( ( <div data-advice='Put your HTML here. vatID is a Text.'></div> ) );
        }
      }
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.height ){
            height.push( ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> ) );
          }
        } else {
            height.push( ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> ) );
        }
      }
      var deathPlace;
      if( this.props.deathPlace ){
        if( this.props.deathPlace instanceof Array ){
          deathPlace = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.deathPlace ){
            deathPlace.push( ( <Place props={ this.props.deathPlace } /> ) );          }
        } else {
          deathPlace = ( <Place props={ this.props.deathPlace } /> );        }
      }
      var follows;
      if( this.props.follows ){
        if( this.props.follows instanceof Array ){
          follows = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.follows ){
            follows.push( ( <Person props={ this.props.follows } /> ) );          }
        } else {
          follows = ( <Person props={ this.props.follows } /> );        }
      }
      var givenName;
      if( this.props.givenName ){
        if( this.props.givenName instanceof Array ){
          givenName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.givenName ){
            givenName.push( ( <div data-advice='Put your HTML here. givenName is a Text.'></div> ) );
          }
        } else {
            givenName.push( ( <div data-advice='Put your HTML here. givenName is a Text.'></div> ) );
        }
      }
      var alumniOf;
      if( this.props.alumniOf ){
        if( this.props.alumniOf instanceof Array ){
          alumniOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alumniOf ){
            alumniOf.push( ( <EducationalOrganization props={ this.props.alumniOf } /> ) );          }
        } else {
          alumniOf = ( <EducationalOrganization props={ this.props.alumniOf } /> );        }
      }
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.globalLocationNumber ){
            globalLocationNumber.push( ( <div data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> ) );
          }
        } else {
            globalLocationNumber.push( ( <div data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> ) );
        }
      }
      return (<div title='Person' className='Person entity'>
        { sibling }
        { honorificPrefix }
        { weight }
        { sameAs }
        { image }
        { relatedTo }
        { telephone }
        { birthDate }
        { faxNumber }
        { affiliation }
        { additionalName }
        { workLocation }
        { additionalType }
        { children }
        { description }
        { isicV4 }
        { spouse }
        { worksFor }
        { taxID }
        { honorificSuffix }
        { netWorth }
        { mainEntityOfPage }
        { homeLocation }
        { email }
        { seeks }
        { colleague }
        { performerIn }
        { birthPlace }
        { knows }
        { parent }
        { memberOf }
        { jobTitle }
        { brand }
        { familyName }
        { award }
        { alternateName }
        { potentialAction }
        { address }
        { duns }
        { nationality }
        { contactPoint }
        { deathDate }
        { makesOffer }
        { hasPOS }
        { owns }
        { name }
        { naics }
        { url }
        { gender }
        { vatID }
        { height }
        { deathPlace }
        { follows }
        { givenName }
        { alumniOf }
        { globalLocationNumber }
     </div>);
    }
  });
});
