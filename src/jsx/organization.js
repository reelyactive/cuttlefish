/* Thing > Organization - An organization such as a school, NGO, corporation, club, etc.. Generated automatically by the reactGenerator. */  var Organization= React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var founder;
      if( props.founder ){
        if( props.founder instanceof Array ){
          founder = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          founder = founder.concat( props.founder.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         founder.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          founder = ( <Person props={ props.founder } /> );        }
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
      var foundingDate;
      if( props.foundingDate ){
        if( props.foundingDate instanceof Array ){
          foundingDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          foundingDate = foundingDate.concat( props.foundingDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. foundingDate is a Date.'></div> )
           }) );
         foundingDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            foundingDate = ( <div data-advice='Put your HTML here. foundingDate is a Date.'></div> );
        }
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
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( <AggregateRating {...result} key={index} /> )
           }) );
         aggregateRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
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
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          logo = logo.concat( props.logo.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> )
           }) );
         logo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
        }
      }
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          event = event.concat( props.event.map( function(result, index){
              return ( <Event {...result} key={index} /> )
           }) );
         event.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          event = ( <Event props={ props.event } /> );        }
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
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          review = review.concat( props.review.map( function(result, index){
              return ( <Review {...result} key={index} /> )
           }) );
         review.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          review = ( <Review props={ props.review } /> );        }
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
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var member;
      if( props.member ){
        if( props.member instanceof Array ){
          member = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          member = member.concat( props.member.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. member is a Person or
Organization.'></div> )
           }) );
         member.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            member = ( <div data-advice='Put your HTML here. member is a Person or
Organization.'></div> );
        }
      }
      var foundingLocation;
      if( props.foundingLocation ){
        if( props.foundingLocation instanceof Array ){
          foundingLocation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          foundingLocation = foundingLocation.concat( props.foundingLocation.map( function(result, index){
              return ( <Place {...result} key={index} /> )
           }) );
         foundingLocation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          foundingLocation = ( <Place props={ props.foundingLocation } /> );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          location = location.concat( props.location.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> )
           }) );
         location.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            location = ( <div data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> );
        }
      }
      var employee;
      if( props.employee ){
        if( props.employee instanceof Array ){
          employee = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          employee = employee.concat( props.employee.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         employee.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          employee = ( <Person props={ props.employee } /> );        }
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
      var numberOfEmployees;
      if( props.numberOfEmployees ){
        if( props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          numberOfEmployees = numberOfEmployees.concat( props.numberOfEmployees.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         numberOfEmployees.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          numberOfEmployees = ( <QuantitativeValue props={ props.numberOfEmployees } /> );        }
      }
      var subOrganization;
      if( props.subOrganization ){
        if( props.subOrganization instanceof Array ){
          subOrganization = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          subOrganization = subOrganization.concat( props.subOrganization.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         subOrganization.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          subOrganization = ( <Organization props={ props.subOrganization } /> );        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          brand = brand.concat( props.brand.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> )
           }) );
         brand.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> );
        }
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
      var department;
      if( props.department ){
        if( props.department instanceof Array ){
          department = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          department = department.concat( props.department.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         department.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          department = ( <Organization props={ props.department } /> );        }
      }
      var dissolutionDate;
      if( props.dissolutionDate ){
        if( props.dissolutionDate instanceof Array ){
          dissolutionDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          dissolutionDate = dissolutionDate.concat( props.dissolutionDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. dissolutionDate is a Date.'></div> )
           }) );
         dissolutionDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            dissolutionDate = ( <div data-advice='Put your HTML here. dissolutionDate is a Date.'></div> );
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
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          name = name.concat( props.name.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. name is a Text.'></div> )
           }) );
         name.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            name = ( <span>{props.name}</span> );
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
      var legalName;
      if( props.legalName ){
        if( props.legalName instanceof Array ){
          legalName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          legalName = legalName.concat( props.legalName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. legalName is a Text.'></div> )
           }) );
         legalName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            legalName = ( <div data-advice='Put your HTML here. legalName is a Text.'></div> );
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
      return (<div title='Organization' className='Organization entity'>
        { image }
        { logo }
        { name }
        { alternateName }
        { legalName }
        { description }
        { founder }
        { foundingDate }
        { foundingLocation }
        { dissolutionDate }
        { contactPoint }
        { email }
        { url }
        { telephone }
        { faxNumber }
        { department }
        { address }
        { location }
        { globalLocationNumber }
        { subOrganization }
        { aggregateRating }
        { review }
        { duns }
        { isicV4 }
        { naics }
        { taxID }
        { owns }
        { seeks }
        { event }
        { brand }
        { award }
        { numberOfEmployees }
        { employee }
        { member }
        { makesOffer }
        { hasPOS }
        { potentialAction }
        { memberOf }
        { mainEntityOfPage }
        { additionalType }
        { sameAs }
        { vatID }
     </div>);
    }
  });
