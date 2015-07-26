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
          sibling = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sibling = sibling.concat( props.sibling.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         sibling.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          sibling = ( <Person props={ props.sibling } /> );        }
      }
      var honorificPrefix;
      if( props.honorificPrefix ){
        if( props.honorificPrefix instanceof Array ){
          honorificPrefix = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          honorificPrefix = honorificPrefix.concat( props.honorificPrefix.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. honorificPrefix is a Text.'></div> )
           }) );
         honorificPrefix.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            honorificPrefix = ( <div data-advice='Put your HTML here. honorificPrefix is a Text.'></div> );
        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          weight = weight.concat( props.weight.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         weight.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          weight = ( <QuantitativeValue props={ props.weight } /> );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sameAs is a URL.'></div> )
           }) );
         sameAs.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          image = image.concat( props.image.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> )
           }) );
         image.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var relatedTo;
      if( props.relatedTo ){
        if( props.relatedTo instanceof Array ){
          relatedTo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          relatedTo = relatedTo.concat( props.relatedTo.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         relatedTo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          relatedTo = ( <Person props={ props.relatedTo } /> );        }
      }
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          telephone = telephone.concat( props.telephone.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. telephone is a Text.'></div> )
           }) );
         telephone.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            telephone = ( <div data-advice='Put your HTML here. telephone is a Text.'></div> );
        }
      }
      var birthDate;
      if( props.birthDate ){
        if( props.birthDate instanceof Array ){
          birthDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          birthDate = birthDate.concat( props.birthDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. birthDate is a Date.'></div> )
           }) );
         birthDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            birthDate = ( <div data-advice='Put your HTML here. birthDate is a Date.'></div> );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          faxNumber = faxNumber.concat( props.faxNumber.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. faxNumber is a Text.'></div> )
           }) );
         faxNumber.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            faxNumber = ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> );
        }
      }
      var affiliation;
      if( props.affiliation ){
        if( props.affiliation instanceof Array ){
          affiliation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          affiliation = affiliation.concat( props.affiliation.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         affiliation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          affiliation = ( <Organization props={ props.affiliation } /> );        }
      }
      var additionalName;
      if( props.additionalName ){
        if( props.additionalName instanceof Array ){
          additionalName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalName = additionalName.concat( props.additionalName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. additionalName is a Text.'></div> )
           }) );
         additionalName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            additionalName = ( <div data-advice='Put your HTML here. additionalName is a Text.'></div> );
        }
      }
      var workLocation;
      if( props.workLocation ){
        if( props.workLocation instanceof Array ){
          workLocation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          workLocation = workLocation.concat( props.workLocation.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. workLocation is a Place or
ContactPoint.'></div> )
           }) );
         workLocation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            workLocation = ( <div data-advice='Put your HTML here. workLocation is a Place or
ContactPoint.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. additionalType is a URL.'></div> )
           }) );
         additionalType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var children;
      if( props.children ){
        if( props.children instanceof Array ){
          children = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          children = children.concat( props.children.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         children.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          children = ( <Person props={ props.children } /> );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          description = description.concat( props.description.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. description is a Text.'></div> )
           }) );
         description.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var isicV4;
      if( props.isicV4 ){
        if( props.isicV4 instanceof Array ){
          isicV4 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isicV4 = isicV4.concat( props.isicV4.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. isicV4 is a Text.'></div> )
           }) );
         isicV4.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            isicV4 = ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> );
        }
      }
      var spouse;
      if( props.spouse ){
        if( props.spouse instanceof Array ){
          spouse = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          spouse = spouse.concat( props.spouse.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         spouse.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          spouse = ( <Person props={ props.spouse } /> );        }
      }
      var worksFor;
      if( props.worksFor ){
        if( props.worksFor instanceof Array ){
          worksFor = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          worksFor = worksFor.concat( props.worksFor.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         worksFor.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          worksFor = ( <Organization props={ props.worksFor } /> );        }
      }
      var taxID;
      if( props.taxID ){
        if( props.taxID instanceof Array ){
          taxID = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          taxID = taxID.concat( props.taxID.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. taxID is a Text.'></div> )
           }) );
         taxID.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            taxID = ( <div data-advice='Put your HTML here. taxID is a Text.'></div> );
        }
      }
      var honorificSuffix;
      if( props.honorificSuffix ){
        if( props.honorificSuffix instanceof Array ){
          honorificSuffix = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          honorificSuffix = honorificSuffix.concat( props.honorificSuffix.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. honorificSuffix is a Text.'></div> )
           }) );
         honorificSuffix.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            honorificSuffix = ( <div data-advice='Put your HTML here. honorificSuffix is a Text.'></div> );
        }
      }
      var netWorth;
      if( props.netWorth ){
        if( props.netWorth instanceof Array ){
          netWorth = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          netWorth = netWorth.concat( props.netWorth.map( function(result, index){
              return ( <PriceSpecification {...result} key={index} /> )
           }) );
         netWorth.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          netWorth = ( <PriceSpecification props={ props.netWorth } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var homeLocation;
      if( props.homeLocation ){
        if( props.homeLocation instanceof Array ){
          homeLocation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          homeLocation = homeLocation.concat( props.homeLocation.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. homeLocation is a Place or
ContactPoint.'></div> )
           }) );
         homeLocation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            homeLocation = ( <div data-advice='Put your HTML here. homeLocation is a Place or
ContactPoint.'></div> );
        }
      }
      var email;
      if( props.email ){
        if( props.email instanceof Array ){
          email = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          email = email.concat( props.email.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. email is a Text.'></div> )
           }) );
         email.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            email = ( <div data-advice='Put your HTML here. email is a Text.'></div> );
        }
      }
      var seeks;
      if( props.seeks ){
        if( props.seeks instanceof Array ){
          seeks = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          seeks = seeks.concat( props.seeks.map( function(result, index){
              return ( <Demand {...result} key={index} /> )
           }) );
         seeks.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          seeks = ( <Demand props={ props.seeks } /> );        }
      }
      var colleague;
      if( props.colleague ){
        if( props.colleague instanceof Array ){
          colleague = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          colleague = colleague.concat( props.colleague.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         colleague.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          colleague = ( <Person props={ props.colleague } /> );        }
      }
      var performerIn;
      if( props.performerIn ){
        if( props.performerIn instanceof Array ){
          performerIn = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          performerIn = performerIn.concat( props.performerIn.map( function(result, index){
              return ( <Event {...result} key={index} /> )
           }) );
         performerIn.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          performerIn = ( <Event props={ props.performerIn } /> );        }
      }
      var birthPlace;
      if( props.birthPlace ){
        if( props.birthPlace instanceof Array ){
          birthPlace = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          birthPlace = birthPlace.concat( props.birthPlace.map( function(result, index){
              return ( <Place {...result} key={index} /> )
           }) );
         birthPlace.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          birthPlace = ( <Place props={ props.birthPlace } /> );        }
      }
      var knows;
      if( props.knows ){
        if( props.knows instanceof Array ){
          knows = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          knows = knows.concat( props.knows.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         knows.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          knows = ( <Person props={ props.knows } /> );        }
      }
      var parent;
      if( props.parent ){
        if( props.parent instanceof Array ){
          parent = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          parent = parent.concat( props.parent.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         parent.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          parent = ( <Person props={ props.parent } /> );        }
      }
      var memberOf;
      if( props.memberOf ){
        if( props.memberOf instanceof Array ){
          memberOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          memberOf = memberOf.concat( props.memberOf.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> )
           }) );
         memberOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            memberOf = ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> );
        }
      }
      var jobTitle;
      if( props.jobTitle ){
        if( props.jobTitle instanceof Array ){
          jobTitle = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          jobTitle = jobTitle.concat( props.jobTitle.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. jobTitle is a Text.'></div> )
           }) );
         jobTitle.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            jobTitle = ( <div data-advice='Put your HTML here. jobTitle is a Text.'></div> );
        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          brand = brand.concat( props.brand.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> )
           }) );
         brand.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> );
        }
      }
      var familyName;
      if( props.familyName ){
        if( props.familyName instanceof Array ){
          familyName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          familyName = familyName.concat( props.familyName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. familyName is a Text.'></div> )
           }) );
         familyName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            familyName = ( <div data-advice='Put your HTML here. familyName is a Text.'></div> );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          award = award.concat( props.award.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. award is a Text.'></div> )
           }) );
         award.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alternateName is a Text.'></div> )
           }) );
         alternateName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( <Action {...result} key={index} /> )
           }) );
         potentialAction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          address = address.concat( props.address.map( function(result, index){
              return ( <PostalAddress {...result} key={index} /> )
           }) );
         address.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          address = ( <PostalAddress props={ props.address } /> );        }
      }
      var duns;
      if( props.duns ){
        if( props.duns instanceof Array ){
          duns = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          duns = duns.concat( props.duns.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. duns is a Text.'></div> )
           }) );
         duns.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            duns = ( <div data-advice='Put your HTML here. duns is a Text.'></div> );
        }
      }
      var nationality;
      if( props.nationality ){
        if( props.nationality instanceof Array ){
          nationality = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          nationality = nationality.concat( props.nationality.map( function(result, index){
              return ( <Country {...result} key={index} /> )
           }) );
         nationality.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          nationality = ( <Country props={ props.nationality } /> );        }
      }
      var contactPoint;
      if( props.contactPoint ){
        if( props.contactPoint instanceof Array ){
          contactPoint = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          contactPoint = contactPoint.concat( props.contactPoint.map( function(result, index){
              return ( <ContactPoint {...result} key={index} /> )
           }) );
         contactPoint.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          contactPoint = ( <ContactPoint props={ props.contactPoint } /> );        }
      }
      var deathDate;
      if( props.deathDate ){
        if( props.deathDate instanceof Array ){
          deathDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          deathDate = deathDate.concat( props.deathDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. deathDate is a Date.'></div> )
           }) );
         deathDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            deathDate = ( <div data-advice='Put your HTML here. deathDate is a Date.'></div> );
        }
      }
      var makesOffer;
      if( props.makesOffer ){
        if( props.makesOffer instanceof Array ){
          makesOffer = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          makesOffer = makesOffer.concat( props.makesOffer.map( function(result, index){
              return ( <Offer {...result} key={index} /> )
           }) );
         makesOffer.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          makesOffer = ( <Offer props={ props.makesOffer } /> );        }
      }
      var hasPOS;
      if( props.hasPOS ){
        if( props.hasPOS instanceof Array ){
          hasPOS = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          hasPOS = hasPOS.concat( props.hasPOS.map( function(result, index){
              return ( <Place {...result} key={index} /> )
           }) );
         hasPOS.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          hasPOS = ( <Place props={ props.hasPOS } /> );        }
      }
      var owns;
      if( props.owns ){
        if( props.owns instanceof Array ){
          owns = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          owns = owns.concat( props.owns.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> )
           }) );
         owns.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            owns = ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          name = name.concat( props.name.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. name is a Text.'></div> )
           }) );
         name.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var naics;
      if( props.naics ){
        if( props.naics instanceof Array ){
          naics = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          naics = naics.concat( props.naics.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. naics is a Text.'></div> )
           }) );
         naics.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            naics = ( <div data-advice='Put your HTML here. naics is a Text.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          url = url.concat( props.url.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. url is a URL.'></div> )
           }) );
         url.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var gender;
      if( props.gender ){
        if( props.gender instanceof Array ){
          gender = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gender = gender.concat( props.gender.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gender is a Text.'></div> )
           }) );
         gender.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gender = ( <div data-advice='Put your HTML here. gender is a Text.'></div> );
        }
      }
      var vatID;
      if( props.vatID ){
        if( props.vatID instanceof Array ){
          vatID = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          vatID = vatID.concat( props.vatID.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. vatID is a Text.'></div> )
           }) );
         vatID.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            vatID = ( <div data-advice='Put your HTML here. vatID is a Text.'></div> );
        }
      }
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          height = height.concat( props.height.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> )
           }) );
         height.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            height = ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> );
        }
      }
      var deathPlace;
      if( props.deathPlace ){
        if( props.deathPlace instanceof Array ){
          deathPlace = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          deathPlace = deathPlace.concat( props.deathPlace.map( function(result, index){
              return ( <Place {...result} key={index} /> )
           }) );
         deathPlace.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          deathPlace = ( <Place props={ props.deathPlace } /> );        }
      }
      var follows;
      if( props.follows ){
        if( props.follows instanceof Array ){
          follows = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          follows = follows.concat( props.follows.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         follows.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          follows = ( <Person props={ props.follows } /> );        }
      }
      var givenName;
      if( props.givenName ){
        if( props.givenName instanceof Array ){
          givenName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          givenName = givenName.concat( props.givenName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. givenName is a Text.'></div> )
           }) );
         givenName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            givenName = ( <div data-advice='Put your HTML here. givenName is a Text.'></div> );
        }
      }
      var alumniOf;
      if( props.alumniOf ){
        if( props.alumniOf instanceof Array ){
          alumniOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alumniOf = alumniOf.concat( props.alumniOf.map( function(result, index){
              return ( <EducationalOrganization {...result} key={index} /> )
           }) );
         alumniOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          alumniOf = ( <EducationalOrganization props={ props.alumniOf } /> );        }
      }
      var globalLocationNumber;
      if( props.globalLocationNumber ){
        if( props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          globalLocationNumber = globalLocationNumber.concat( props.globalLocationNumber.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> )
           }) );
         globalLocationNumber.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
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
