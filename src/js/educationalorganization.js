/* Thing > Organization > EducationalOrganization - An educational organization.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './programmembership', './product', './aggregaterating', './brand', './offer', './imageobject', './event', './person', './ownershipinfo', './place', './demand', './action', './organization', './contactpoint', './creativework', './postaladdress', './review'], function(React, QuantitativeValue, ProgramMembership, Product, AggregateRating, Brand, Offer, ImageObject, Event, Person, OwnershipInfo, Place, Demand, Action, Organization, ContactPoint, CreativeWork, PostalAddress, Review){
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
          founder = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          founder = founder.concat( props.founder.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         founder.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          founder = ( React.createElement(Person, {props:  props.founder}) );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var foundingDate;
      if( props.foundingDate ){
        if( props.foundingDate instanceof Array ){
          foundingDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          foundingDate = foundingDate.concat( props.foundingDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. foundingDate is a Date."}) )
           }) );
         foundingDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            foundingDate = ( React.createElement("div", {"data-advice": "Put your HTML here. foundingDate is a Date."}) );
        }
      }
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          telephone = telephone.concat( props.telephone.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. telephone is a Text."}) )
           }) );
         telephone.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            telephone = ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          faxNumber = faxNumber.concat( props.faxNumber.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. faxNumber is a Text."}) )
           }) );
         faxNumber.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            faxNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( React.createElement(AggregateRating, React.__spread({},  result, {key: index})) )
           }) );
         aggregateRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          logo = logo.concat( props.logo.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         logo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            logo = ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          event = event.concat( props.event.map( function(result, index){
              return ( React.createElement(Event, React.__spread({},  result, {key: index})) )
           }) );
         event.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          event = ( React.createElement(Event, {props:  props.event}) );        }
      }
      var isicV4;
      if( props.isicV4 ){
        if( props.isicV4 instanceof Array ){
          isicV4 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isicV4 = isicV4.concat( props.isicV4.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. isicV4 is a Text."}) )
           }) );
         isicV4.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            isicV4 = ( React.createElement("div", {"data-advice": "Put your HTML here. isicV4 is a Text."}) );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          review = review.concat( props.review.map( function(result, index){
              return ( React.createElement(Review, React.__spread({},  result, {key: index})) )
           }) );
         review.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var taxID;
      if( props.taxID ){
        if( props.taxID instanceof Array ){
          taxID = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          taxID = taxID.concat( props.taxID.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. taxID is a Text."}) )
           }) );
         taxID.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            taxID = ( React.createElement("div", {"data-advice": "Put your HTML here. taxID is a Text."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var member;
      if( props.member ){
        if( props.member instanceof Array ){
          member = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          member = member.concat( props.member.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. member is a Person or" + ' ' +
"Organization."}) )
           }) );
         member.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            member = ( React.createElement("div", {"data-advice": "Put your HTML here. member is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var foundingLocation;
      if( props.foundingLocation ){
        if( props.foundingLocation instanceof Array ){
          foundingLocation = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          foundingLocation = foundingLocation.concat( props.foundingLocation.map( function(result, index){
              return ( React.createElement(Place, React.__spread({},  result, {key: index})) )
           }) );
         foundingLocation.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          foundingLocation = ( React.createElement(Place, {props:  props.foundingLocation}) );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          location = location.concat( props.location.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) )
           }) );
         location.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            location = ( React.createElement("div", {"data-advice": "Put your HTML here. location is a PostalAddress or" + ' ' +
"Place."}) );
        }
      }
      var employee;
      if( props.employee ){
        if( props.employee instanceof Array ){
          employee = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          employee = employee.concat( props.employee.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         employee.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          employee = ( React.createElement(Person, {props:  props.employee}) );        }
      }
      var email;
      if( props.email ){
        if( props.email instanceof Array ){
          email = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          email = email.concat( props.email.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. email is a Text."}) )
           }) );
         email.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            email = ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) );
        }
      }
      var seeks;
      if( props.seeks ){
        if( props.seeks instanceof Array ){
          seeks = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          seeks = seeks.concat( props.seeks.map( function(result, index){
              return ( React.createElement(Demand, React.__spread({},  result, {key: index})) )
           }) );
         seeks.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          seeks = ( React.createElement(Demand, {props:  props.seeks}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var numberOfEmployees;
      if( props.numberOfEmployees ){
        if( props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          numberOfEmployees = numberOfEmployees.concat( props.numberOfEmployees.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         numberOfEmployees.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          numberOfEmployees = ( React.createElement(QuantitativeValue, {props:  props.numberOfEmployees}) );        }
      }
      var subOrganization;
      if( props.subOrganization ){
        if( props.subOrganization instanceof Array ){
          subOrganization = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          subOrganization = subOrganization.concat( props.subOrganization.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         subOrganization.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          subOrganization = ( React.createElement(Organization, {props:  props.subOrganization}) );        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          brand = brand.concat( props.brand.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) )
           }) );
         brand.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            brand = ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) );
        }
      }
      var owns;
      if( props.owns ){
        if( props.owns instanceof Array ){
          owns = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          owns = owns.concat( props.owns.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. owns is a OwnershipInfo or" + ' ' +
"Product."}) )
           }) );
         owns.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            owns = ( React.createElement("div", {"data-advice": "Put your HTML here. owns is a OwnershipInfo or" + ' ' +
"Product."}) );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          award = award.concat( props.award.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. award is a Text."}) )
           }) );
         award.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
        }
      }
      var department;
      if( props.department ){
        if( props.department instanceof Array ){
          department = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          department = department.concat( props.department.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         department.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          department = ( React.createElement(Organization, {props:  props.department}) );        }
      }
      var dissolutionDate;
      if( props.dissolutionDate ){
        if( props.dissolutionDate instanceof Array ){
          dissolutionDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          dissolutionDate = dissolutionDate.concat( props.dissolutionDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. dissolutionDate is a Date."}) )
           }) );
         dissolutionDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            dissolutionDate = ( React.createElement("div", {"data-advice": "Put your HTML here. dissolutionDate is a Date."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          address = address.concat( props.address.map( function(result, index){
              return ( React.createElement(PostalAddress, React.__spread({},  result, {key: index})) )
           }) );
         address.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          address = ( React.createElement(PostalAddress, {props:  props.address}) );        }
      }
      var duns;
      if( props.duns ){
        if( props.duns instanceof Array ){
          duns = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          duns = duns.concat( props.duns.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. duns is a Text."}) )
           }) );
         duns.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            duns = ( React.createElement("div", {"data-advice": "Put your HTML here. duns is a Text."}) );
        }
      }
      var contactPoint;
      if( props.contactPoint ){
        if( props.contactPoint instanceof Array ){
          contactPoint = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          contactPoint = contactPoint.concat( props.contactPoint.map( function(result, index){
              return ( React.createElement(ContactPoint, React.__spread({},  result, {key: index})) )
           }) );
         contactPoint.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          contactPoint = ( React.createElement(ContactPoint, {props:  props.contactPoint}) );        }
      }
      var makesOffer;
      if( props.makesOffer ){
        if( props.makesOffer instanceof Array ){
          makesOffer = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          makesOffer = makesOffer.concat( props.makesOffer.map( function(result, index){
              return ( React.createElement(Offer, React.__spread({},  result, {key: index})) )
           }) );
         makesOffer.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          makesOffer = ( React.createElement(Offer, {props:  props.makesOffer}) );        }
      }
      var hasPOS;
      if( props.hasPOS ){
        if( props.hasPOS instanceof Array ){
          hasPOS = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          hasPOS = hasPOS.concat( props.hasPOS.map( function(result, index){
              return ( React.createElement(Place, React.__spread({},  result, {key: index})) )
           }) );
         hasPOS.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          hasPOS = ( React.createElement(Place, {props:  props.hasPOS}) );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var naics;
      if( props.naics ){
        if( props.naics instanceof Array ){
          naics = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          naics = naics.concat( props.naics.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. naics is a Text."}) )
           }) );
         naics.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            naics = ( React.createElement("div", {"data-advice": "Put your HTML here. naics is a Text."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var memberOf;
      if( props.memberOf ){
        if( props.memberOf instanceof Array ){
          memberOf = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          memberOf = memberOf.concat( props.memberOf.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. memberOf is a Organization or" + ' ' +
"ProgramMembership."}) )
           }) );
         memberOf.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            memberOf = ( React.createElement("div", {"data-advice": "Put your HTML here. memberOf is a Organization or" + ' ' +
"ProgramMembership."}) );
        }
      }
      var alumni;
      if( props.alumni ){
        if( props.alumni instanceof Array ){
          alumni = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alumni = alumni.concat( props.alumni.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         alumni.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          alumni = ( React.createElement(Person, {props:  props.alumni}) );        }
      }
      var legalName;
      if( props.legalName ){
        if( props.legalName instanceof Array ){
          legalName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          legalName = legalName.concat( props.legalName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. legalName is a Text."}) )
           }) );
         legalName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            legalName = ( React.createElement("div", {"data-advice": "Put your HTML here. legalName is a Text."}) );
        }
      }
      var vatID;
      if( props.vatID ){
        if( props.vatID instanceof Array ){
          vatID = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          vatID = vatID.concat( props.vatID.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. vatID is a Text."}) )
           }) );
         vatID.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            vatID = ( React.createElement("div", {"data-advice": "Put your HTML here. vatID is a Text."}) );
        }
      }
      var globalLocationNumber;
      if( props.globalLocationNumber ){
        if( props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          globalLocationNumber = globalLocationNumber.concat( props.globalLocationNumber.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. globalLocationNumber is a Text."}) )
           }) );
         globalLocationNumber.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            globalLocationNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. globalLocationNumber is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "EducationalOrganization", className: "EducationalOrganization entity"}, 
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
         alumni, 
         legalName, 
         vatID, 
         globalLocationNumber 
     ));
    }
  });
});
