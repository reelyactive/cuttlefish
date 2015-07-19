/* Thing > Person - A person (alive, dead, undead, or fictional).. Generated automatically by the reactGenerator. */  var Person= React.createClass({displayName: "Person",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var sibling;
      if( props.sibling ){
        if( props.sibling instanceof Array ){
          sibling = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sibling = sibling.concat( props.sibling.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         sibling.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          sibling = ( React.createElement(Person, {props:  props.sibling}) );        }
      }
      var honorificPrefix;
      if( props.honorificPrefix ){
        if( props.honorificPrefix instanceof Array ){
          honorificPrefix = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          honorificPrefix = honorificPrefix.concat( props.honorificPrefix.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. honorificPrefix is a Text."}) )
           }) );
         honorificPrefix.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            honorificPrefix = ( React.createElement("div", {"data-advice": "Put your HTML here. honorificPrefix is a Text."}) );
        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          weight = weight.concat( props.weight.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         weight.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  props.weight}) );        }
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
          image = [ (React.createElement("p", {key: "header"}, "Images:")) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("img", {key: index, src: result, className: "image"}) )
           }) );
        } else {
          image = ( React.createElement("img", {src: props.image, class: "image"}) );
        }
      }
      var relatedTo;
      if( props.relatedTo ){
        if( props.relatedTo instanceof Array ){
          relatedTo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          relatedTo = relatedTo.concat( props.relatedTo.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         relatedTo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          relatedTo = ( React.createElement(Person, {props:  props.relatedTo}) );        }
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
      var birthDate;
      if( props.birthDate ){
        if( props.birthDate instanceof Array ){
          birthDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          birthDate = birthDate.concat( props.birthDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. birthDate is a Date."}) )
           }) );
         birthDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            birthDate = ( React.createElement("div", {"data-advice": "Put your HTML here. birthDate is a Date."}) );
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
      var affiliation;
      if( props.affiliation ){
        if( props.affiliation instanceof Array ){
          affiliation = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          affiliation = affiliation.concat( props.affiliation.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         affiliation.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          affiliation = ( React.createElement(Organization, {props:  props.affiliation}) );        }
      }
      var additionalName;
      if( props.additionalName ){
        if( props.additionalName instanceof Array ){
          additionalName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalName = additionalName.concat( props.additionalName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalName is a Text."}) )
           }) );
         additionalName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalName = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalName is a Text."}) );
        }
      }
      var workLocation;
      if( props.workLocation ){
        if( props.workLocation instanceof Array ){
          workLocation = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          workLocation = workLocation.concat( props.workLocation.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. workLocation is a Place or" + ' ' +
"ContactPoint."}) )
           }) );
         workLocation.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            workLocation = ( React.createElement("div", {"data-advice": "Put your HTML here. workLocation is a Place or" + ' ' +
"ContactPoint."}) );
        }
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
      var children;
      if( props.children ){
        if( props.children instanceof Array ){
          children = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          children = children.concat( props.children.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         children.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          children = ( React.createElement(Person, {props:  props.children}) );        }
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
      var spouse;
      if( props.spouse ){
        if( props.spouse instanceof Array ){
          spouse = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          spouse = spouse.concat( props.spouse.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         spouse.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          spouse = ( React.createElement(Person, {props:  props.spouse}) );        }
      }
      var worksFor;
      if( props.worksFor ){
        if( props.worksFor instanceof Array ){
          worksFor = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          worksFor = worksFor.concat( props.worksFor.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         worksFor.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          worksFor = ( React.createElement(Organization, {props:  props.worksFor}) );        }
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
      var honorificSuffix;
      if( props.honorificSuffix ){
        if( props.honorificSuffix instanceof Array ){
          honorificSuffix = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          honorificSuffix = honorificSuffix.concat( props.honorificSuffix.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. honorificSuffix is a Text."}) )
           }) );
         honorificSuffix.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            honorificSuffix = ( React.createElement("div", {"data-advice": "Put your HTML here. honorificSuffix is a Text."}) );
        }
      }
      var netWorth;
      if( props.netWorth ){
        if( props.netWorth instanceof Array ){
          netWorth = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          netWorth = netWorth.concat( props.netWorth.map( function(result, index){
              return ( React.createElement(PriceSpecification, React.__spread({},  result, {key: index})) )
           }) );
         netWorth.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          netWorth = ( React.createElement(PriceSpecification, {props:  props.netWorth}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var homeLocation;
      if( props.homeLocation ){
        if( props.homeLocation instanceof Array ){
          homeLocation = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          homeLocation = homeLocation.concat( props.homeLocation.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. homeLocation is a Place or" + ' ' +
"ContactPoint."}) )
           }) );
         homeLocation.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            homeLocation = ( React.createElement("div", {"data-advice": "Put your HTML here. homeLocation is a Place or" + ' ' +
"ContactPoint."}) );
        }
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
      var colleague;
      if( props.colleague ){
        if( props.colleague instanceof Array ){
          colleague = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          colleague = colleague.concat( props.colleague.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         colleague.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          colleague = ( React.createElement(Person, {props:  props.colleague}) );        }
      }
      var performerIn;
      if( props.performerIn ){
        if( props.performerIn instanceof Array ){
          performerIn = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          performerIn = performerIn.concat( props.performerIn.map( function(result, index){
              return ( React.createElement(Event, React.__spread({},  result, {key: index})) )
           }) );
         performerIn.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          performerIn = ( React.createElement(Event, {props:  props.performerIn}) );        }
      }
      var birthPlace;
      if( props.birthPlace ){
        if( props.birthPlace instanceof Array ){
          birthPlace = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          birthPlace = birthPlace.concat( props.birthPlace.map( function(result, index){
              return ( React.createElement(Place, React.__spread({},  result, {key: index})) )
           }) );
         birthPlace.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          birthPlace = ( React.createElement(Place, {props:  props.birthPlace}) );        }
      }
      var knows;
      if( props.knows ){
        if( props.knows instanceof Array ){
          knows = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          knows = knows.concat( props.knows.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         knows.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          knows = ( React.createElement(Person, {props:  props.knows}) );        }
      }
      var parent;
      if( props.parent ){
        if( props.parent instanceof Array ){
          parent = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          parent = parent.concat( props.parent.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         parent.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          parent = ( React.createElement(Person, {props:  props.parent}) );        }
      }
      var memberOf;
      if( props.memberOf ){
        if( props.memberOf instanceof Array ){
          memberOf = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          memberOf = memberOf.concat( props.memberOf.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. memberOf is a ProgramMembership or" + ' ' +
"Organization."}) )
           }) );
         memberOf.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            memberOf = ( React.createElement("div", {"data-advice": "Put your HTML here. memberOf is a ProgramMembership or" + ' ' +
"Organization."}) );
        }
      }
      var jobTitle;
      if( props.jobTitle ){
        if( props.jobTitle instanceof Array ){
          jobTitle = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          jobTitle = jobTitle.concat( props.jobTitle.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. jobTitle is a Text."}) )
           }) );
         jobTitle.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            jobTitle = ( React.createElement("div", {"data-advice": "Put your HTML here. jobTitle is a Text."}) );
        }
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
      var familyName;
      if( props.familyName ){
        if( props.familyName instanceof Array ){
          familyName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          familyName = familyName.concat( props.familyName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. familyName is a Text."}) )
           }) );
         familyName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          familyName = ( React.createElement("div", {class: "familyName"}, "Last Name: ", props.familyName) );
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
      var nationality;
      if( props.nationality ){
        if( props.nationality instanceof Array ){
          nationality = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          nationality = nationality.concat( props.nationality.map( function(result, index){
              return ( React.createElement(Country, React.__spread({},  result, {key: index})) )
           }) );
         nationality.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          nationality = ( React.createElement(Country, {props:  props.nationality}) );        }
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
      var deathDate;
      if( props.deathDate ){
        if( props.deathDate instanceof Array ){
          deathDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          deathDate = deathDate.concat( props.deathDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. deathDate is a Date."}) )
           }) );
         deathDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            deathDate = ( React.createElement("div", {"data-advice": "Put your HTML here. deathDate is a Date."}) );
        }
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
      var owns;
      if( props.owns ){
        if( props.owns instanceof Array ){
          owns = [ (React.createElement("p", {key: "header"}, "Owns:")) ]
          owns = owns.concat( props.owns.map( function(result, index){
              return ( React.createElement(Product, {key: index, props: result, className: "owns"}) )
           }) );
        } else {
          owns = ( React.createElement(Product, React.__spread({},  props.owns, {className: "owns"})) );
        }
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
          name = ( React.createElement("div", {class: "name"}, "Name :", props.name) );
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
          url = [ (React.createElement("p", {key: "header"}, "Urls:")) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("a", {key: index, href: result, target: "_blank"}, result) )
           }) );
        } else {
          url = ( React.createElement("a", {href: props.url, target: "_blank"}, props.url) );
        }
      }
      var gender;
      if( props.gender ){
        if( props.gender instanceof Array ){
          gender = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gender = gender.concat( props.gender.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gender is a Text."}) )
           }) );
         gender.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          gender = ( React.createElement("div", {class: "gender"}, "Gender: ", props.gender) );
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
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          height = height.concat( props.height.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) )
           }) );
         height.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            height = ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var deathPlace;
      if( props.deathPlace ){
        if( props.deathPlace instanceof Array ){
          deathPlace = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          deathPlace = deathPlace.concat( props.deathPlace.map( function(result, index){
              return ( React.createElement(Place, React.__spread({},  result, {key: index})) )
           }) );
         deathPlace.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          deathPlace = ( React.createElement(Place, {props:  props.deathPlace}) );        }
      }
      var follows;
      if( props.follows ){
        if( props.follows instanceof Array ){
          follows = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          follows = follows.concat( props.follows.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         follows.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          follows = ( React.createElement(Person, {props:  props.follows}) );        }
      }
      var givenName;
      if( props.givenName ){
        if( props.givenName instanceof Array ){
          givenName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          givenName = givenName.concat( props.givenName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. givenName is a Text."}) )
           }) );
         givenName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          givenName = ( React.createElement("div", {class: "givenName"}, "Given name: ", props.givenName) );
        }
      }
      var alumniOf;
      if( props.alumniOf ){
        if( props.alumniOf instanceof Array ){
          alumniOf = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alumniOf = alumniOf.concat( props.alumniOf.map( function(result, index){
              return ( React.createElement(EducationalOrganization, React.__spread({},  result, {key: index})) )
           }) );
         alumniOf.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          alumniOf = ( React.createElement(EducationalOrganization, {props:  props.alumniOf}) );        }
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
         givenName, 
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
         alumniOf, 
         globalLocationNumber 
     ));
    }
  });
