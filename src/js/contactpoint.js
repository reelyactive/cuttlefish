/* Thing > Intangible > StructuredValue > ContactPoint - A contact point\u2014for example, a Customer Complaints department.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './openinghoursspecification', './product', './language', './imageobject', './administrativearea', './action', './creativework', './contactpointoption'], function(React, OpeningHoursSpecification, Product, Language, ImageObject, AdministrativeArea, Action, CreativeWork, ContactPointOption){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
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
      var productSupported;
      if( props.productSupported ){
        if( props.productSupported instanceof Array ){
          productSupported = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          productSupported = productSupported.concat( props.productSupported.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. productSupported is a Text or" + ' ' +
"Product."}) )
           }) );
         productSupported.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            productSupported = ( React.createElement("div", {"data-advice": "Put your HTML here. productSupported is a Text or" + ' ' +
"Product."}) );
        }
      }
      var contactOption;
      if( props.contactOption ){
        if( props.contactOption instanceof Array ){
          contactOption = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          contactOption = contactOption.concat( props.contactOption.map( function(result, index){
              return ( React.createElement(ContactPointOption, React.__spread({},  result, {key: index})) )
           }) );
         contactOption.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          contactOption = ( React.createElement(ContactPointOption, {props:  props.contactOption}) );        }
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
      var hoursAvailable;
      if( props.hoursAvailable ){
        if( props.hoursAvailable instanceof Array ){
          hoursAvailable = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          hoursAvailable = hoursAvailable.concat( props.hoursAvailable.map( function(result, index){
              return ( React.createElement(OpeningHoursSpecification, React.__spread({},  result, {key: index})) )
           }) );
         hoursAvailable.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          hoursAvailable = ( React.createElement(OpeningHoursSpecification, {props:  props.hoursAvailable}) );        }
      }
      var areaServed;
      if( props.areaServed ){
        if( props.areaServed instanceof Array ){
          areaServed = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          areaServed = areaServed.concat( props.areaServed.map( function(result, index){
              return ( React.createElement(AdministrativeArea, React.__spread({},  result, {key: index})) )
           }) );
         areaServed.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          areaServed = ( React.createElement(AdministrativeArea, {props:  props.areaServed}) );        }
      }
      var contactType;
      if( props.contactType ){
        if( props.contactType instanceof Array ){
          contactType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          contactType = contactType.concat( props.contactType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. contactType is a Text."}) )
           }) );
         contactType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            contactType = ( React.createElement("div", {"data-advice": "Put your HTML here. contactType is a Text."}) );
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
      var availableLanguage;
      if( props.availableLanguage ){
        if( props.availableLanguage instanceof Array ){
          availableLanguage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          availableLanguage = availableLanguage.concat( props.availableLanguage.map( function(result, index){
              return ( React.createElement(Language, React.__spread({},  result, {key: index})) )
           }) );
         availableLanguage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          availableLanguage = ( React.createElement(Language, {props:  props.availableLanguage}) );        }
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
      return (React.createElement("div", {title: "ContactPoint", className: "ContactPoint entity"}, 
         potentialAction, 
         description, 
         sameAs, 
         productSupported, 
         contactOption, 
         telephone, 
         faxNumber, 
         url, 
         hoursAvailable, 
         areaServed, 
         contactType, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         image, 
         email, 
         availableLanguage, 
         name 
     ));
    }
  });
});
