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
          sibling = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sibling ){
            sibling.push( ( <Person {...props.sibling } /> ) );          }
        } else {
          sibling = ( <Person props={ props.sibling } /> );        }
      }
      var honorificPrefix;
      if( props.honorificPrefix ){
        if( props.honorificPrefix instanceof Array ){
          honorificPrefix = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.honorificPrefix ){
            honorificPrefix.push( ( <div data-advice='Put your HTML here. honorificPrefix is a Text.'></div> ) );
          }
        } else {
            honorificPrefix = ( <div data-advice='Put your HTML here. honorificPrefix is a Text.'></div> );
        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.weight ){
            weight.push( ( <QuantitativeValue {...props.weight } /> ) );          }
        } else {
          weight = ( <QuantitativeValue props={ props.weight } /> );        }
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
      var relatedTo;
      if( props.relatedTo ){
        if( props.relatedTo instanceof Array ){
          relatedTo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.relatedTo ){
            relatedTo.push( ( <Person {...props.relatedTo } /> ) );          }
        } else {
          relatedTo = ( <Person props={ props.relatedTo } /> );        }
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
      var birthDate;
      if( props.birthDate ){
        if( props.birthDate instanceof Array ){
          birthDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.birthDate ){
            birthDate.push( ( <div data-advice='Put your HTML here. birthDate is a Date.'></div> ) );
          }
        } else {
            birthDate = ( <div data-advice='Put your HTML here. birthDate is a Date.'></div> );
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
      var affiliation;
      if( props.affiliation ){
        if( props.affiliation instanceof Array ){
          affiliation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.affiliation ){
            affiliation.push( ( <Organization {...props.affiliation } /> ) );          }
        } else {
          affiliation = ( <Organization props={ props.affiliation } /> );        }
      }
      var additionalName;
      if( props.additionalName ){
        if( props.additionalName instanceof Array ){
          additionalName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalName ){
            additionalName.push( ( <div data-advice='Put your HTML here. additionalName is a Text.'></div> ) );
          }
        } else {
            additionalName = ( <div data-advice='Put your HTML here. additionalName is a Text.'></div> );
        }
      }
      var workLocation;
      if( props.workLocation ){
        if( props.workLocation instanceof Array ){
          workLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.workLocation ){
            workLocation.push( ( <div data-advice='Put your HTML here. workLocation is a Place or
ContactPoint.'></div> ) );
          }
        } else {
            workLocation = ( <div data-advice='Put your HTML here. workLocation is a Place or
ContactPoint.'></div> );
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
      var children;
      if( props.children ){
        if( props.children instanceof Array ){
          children = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.children ){
            children.push( ( <Person {...props.children } /> ) );          }
        } else {
          children = ( <Person props={ props.children } /> );        }
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
      var spouse;
      if( props.spouse ){
        if( props.spouse instanceof Array ){
          spouse = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.spouse ){
            spouse.push( ( <Person {...props.spouse } /> ) );          }
        } else {
          spouse = ( <Person props={ props.spouse } /> );        }
      }
      var worksFor;
      if( props.worksFor ){
        if( props.worksFor instanceof Array ){
          worksFor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.worksFor ){
            worksFor.push( ( <Organization {...props.worksFor } /> ) );          }
        } else {
          worksFor = ( <Organization props={ props.worksFor } /> );        }
      }
      var taxID;
      if( props.taxID ){
        if( props.taxID instanceof Array ){
          taxID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.taxID ){
            taxID.push( ( <div data-advice='Put your HTML here. taxID is a Text.'></div> ) );
          }
        } else {
            taxID = ( <div data-advice='Put your HTML here. taxID is a Text.'></div> );
        }
      }
      var honorificSuffix;
      if( props.honorificSuffix ){
        if( props.honorificSuffix instanceof Array ){
          honorificSuffix = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.honorificSuffix ){
            honorificSuffix.push( ( <div data-advice='Put your HTML here. honorificSuffix is a Text.'></div> ) );
          }
        } else {
            honorificSuffix = ( <div data-advice='Put your HTML here. honorificSuffix is a Text.'></div> );
        }
      }
      var netWorth;
      if( props.netWorth ){
        if( props.netWorth instanceof Array ){
          netWorth = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.netWorth ){
            netWorth.push( ( <PriceSpecification {...props.netWorth } /> ) );          }
        } else {
          netWorth = ( <PriceSpecification props={ props.netWorth } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var homeLocation;
      if( props.homeLocation ){
        if( props.homeLocation instanceof Array ){
          homeLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.homeLocation ){
            homeLocation.push( ( <div data-advice='Put your HTML here. homeLocation is a Place or
ContactPoint.'></div> ) );
          }
        } else {
            homeLocation = ( <div data-advice='Put your HTML here. homeLocation is a Place or
ContactPoint.'></div> );
        }
      }
      var email;
      if( props.email ){
        if( props.email instanceof Array ){
          email = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.email ){
            email.push( ( <div data-advice='Put your HTML here. email is a Text.'></div> ) );
          }
        } else {
            email = ( <div data-advice='Put your HTML here. email is a Text.'></div> );
        }
      }
      var seeks;
      if( props.seeks ){
        if( props.seeks instanceof Array ){
          seeks = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.seeks ){
            seeks.push( ( <Demand {...props.seeks } /> ) );          }
        } else {
          seeks = ( <Demand props={ props.seeks } /> );        }
      }
      var colleague;
      if( props.colleague ){
        if( props.colleague instanceof Array ){
          colleague = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.colleague ){
            colleague.push( ( <Person {...props.colleague } /> ) );          }
        } else {
          colleague = ( <Person props={ props.colleague } /> );        }
      }
      var performerIn;
      if( props.performerIn ){
        if( props.performerIn instanceof Array ){
          performerIn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.performerIn ){
            performerIn.push( ( <Event {...props.performerIn } /> ) );          }
        } else {
          performerIn = ( <Event props={ props.performerIn } /> );        }
      }
      var birthPlace;
      if( props.birthPlace ){
        if( props.birthPlace instanceof Array ){
          birthPlace = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.birthPlace ){
            birthPlace.push( ( <Place {...props.birthPlace } /> ) );          }
        } else {
          birthPlace = ( <Place props={ props.birthPlace } /> );        }
      }
      var knows;
      if( props.knows ){
        if( props.knows instanceof Array ){
          knows = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.knows ){
            knows.push( ( <Person {...props.knows } /> ) );          }
        } else {
          knows = ( <Person props={ props.knows } /> );        }
      }
      var parent;
      if( props.parent ){
        if( props.parent instanceof Array ){
          parent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.parent ){
            parent.push( ( <Person {...props.parent } /> ) );          }
        } else {
          parent = ( <Person props={ props.parent } /> );        }
      }
      var memberOf;
      if( props.memberOf ){
        if( props.memberOf instanceof Array ){
          memberOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.memberOf ){
            memberOf.push( ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> ) );
          }
        } else {
            memberOf = ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> );
        }
      }
      var jobTitle;
      if( props.jobTitle ){
        if( props.jobTitle instanceof Array ){
          jobTitle = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.jobTitle ){
            jobTitle.push( ( <div data-advice='Put your HTML here. jobTitle is a Text.'></div> ) );
          }
        } else {
            jobTitle = ( <div data-advice='Put your HTML here. jobTitle is a Text.'></div> );
        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.brand ){
            brand.push( ( <div data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> ) );
          }
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> );
        }
      }
      var familyName;
      if( props.familyName ){
        if( props.familyName instanceof Array ){
          familyName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.familyName ){
            familyName.push( ( <div data-advice='Put your HTML here. familyName is a Text.'></div> ) );
          }
        } else {
            familyName = ( <div data-advice='Put your HTML here. familyName is a Text.'></div> );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
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
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
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
      var duns;
      if( props.duns ){
        if( props.duns instanceof Array ){
          duns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.duns ){
            duns.push( ( <div data-advice='Put your HTML here. duns is a Text.'></div> ) );
          }
        } else {
            duns = ( <div data-advice='Put your HTML here. duns is a Text.'></div> );
        }
      }
      var nationality;
      if( props.nationality ){
        if( props.nationality instanceof Array ){
          nationality = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.nationality ){
            nationality.push( ( <Country {...props.nationality } /> ) );          }
        } else {
          nationality = ( <Country props={ props.nationality } /> );        }
      }
      var contactPoint;
      if( props.contactPoint ){
        if( props.contactPoint instanceof Array ){
          contactPoint = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contactPoint ){
            contactPoint.push( ( <ContactPoint {...props.contactPoint } /> ) );          }
        } else {
          contactPoint = ( <ContactPoint props={ props.contactPoint } /> );        }
      }
      var deathDate;
      if( props.deathDate ){
        if( props.deathDate instanceof Array ){
          deathDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.deathDate ){
            deathDate.push( ( <div data-advice='Put your HTML here. deathDate is a Date.'></div> ) );
          }
        } else {
            deathDate = ( <div data-advice='Put your HTML here. deathDate is a Date.'></div> );
        }
      }
      var makesOffer;
      if( props.makesOffer ){
        if( props.makesOffer instanceof Array ){
          makesOffer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.makesOffer ){
            makesOffer.push( ( <Offer {...props.makesOffer } /> ) );          }
        } else {
          makesOffer = ( <Offer props={ props.makesOffer } /> );        }
      }
      var hasPOS;
      if( props.hasPOS ){
        if( props.hasPOS instanceof Array ){
          hasPOS = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.hasPOS ){
            hasPOS.push( ( <Place {...props.hasPOS } /> ) );          }
        } else {
          hasPOS = ( <Place props={ props.hasPOS } /> );        }
      }
      var owns;
      if( props.owns ){
        if( props.owns instanceof Array ){
          owns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.owns ){
            owns.push( ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> ) );
          }
        } else {
            owns = ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> );
        }
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
      var naics;
      if( props.naics ){
        if( props.naics instanceof Array ){
          naics = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.naics ){
            naics.push( ( <div data-advice='Put your HTML here. naics is a Text.'></div> ) );
          }
        } else {
            naics = ( <div data-advice='Put your HTML here. naics is a Text.'></div> );
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
      var gender;
      if( props.gender ){
        if( props.gender instanceof Array ){
          gender = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gender ){
            gender.push( ( <div data-advice='Put your HTML here. gender is a Text.'></div> ) );
          }
        } else {
            gender = ( <div data-advice='Put your HTML here. gender is a Text.'></div> );
        }
      }
      var vatID;
      if( props.vatID ){
        if( props.vatID instanceof Array ){
          vatID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.vatID ){
            vatID.push( ( <div data-advice='Put your HTML here. vatID is a Text.'></div> ) );
          }
        } else {
            vatID = ( <div data-advice='Put your HTML here. vatID is a Text.'></div> );
        }
      }
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.height ){
            height.push( ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> ) );
          }
        } else {
            height = ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> );
        }
      }
      var deathPlace;
      if( props.deathPlace ){
        if( props.deathPlace instanceof Array ){
          deathPlace = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.deathPlace ){
            deathPlace.push( ( <Place {...props.deathPlace } /> ) );          }
        } else {
          deathPlace = ( <Place props={ props.deathPlace } /> );        }
      }
      var follows;
      if( props.follows ){
        if( props.follows instanceof Array ){
          follows = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.follows ){
            follows.push( ( <Person {...props.follows } /> ) );          }
        } else {
          follows = ( <Person props={ props.follows } /> );        }
      }
      var givenName;
      if( props.givenName ){
        if( props.givenName instanceof Array ){
          givenName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.givenName ){
            givenName.push( ( <div data-advice='Put your HTML here. givenName is a Text.'></div> ) );
          }
        } else {
            givenName = ( <div data-advice='Put your HTML here. givenName is a Text.'></div> );
        }
      }
      var alumniOf;
      if( props.alumniOf ){
        if( props.alumniOf instanceof Array ){
          alumniOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alumniOf ){
            alumniOf.push( ( <EducationalOrganization {...props.alumniOf } /> ) );          }
        } else {
          alumniOf = ( <EducationalOrganization props={ props.alumniOf } /> );        }
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
