/* Thing > Intangible > StructuredValue > ContactPoint > PostalAddress - The mailing address.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './openinghoursspecification', './product', './language', './country', './imageobject', './administrativearea', './action', './creativework', './contactpointoption'], function(React, OpeningHoursSpecification, Product, Language, Country, ImageObject, AdministrativeArea, Action, CreativeWork, ContactPointOption){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
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
      var addressLocality;
      if( props.addressLocality ){
        if( props.addressLocality instanceof Array ){
          addressLocality = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          addressLocality = addressLocality.concat( props.addressLocality.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. addressLocality is a Text.'></div> )
           }) );
         addressLocality.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            addressLocality = ( <p className='address-locality'>{props.addressLocality}</p> );
        }
      }
      var contactType;
      if( props.contactType ){
        if( props.contactType instanceof Array ){
          contactType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          contactType = contactType.concat( props.contactType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. contactType is a Text.'></div> )
           }) );
         contactType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            contactType = ( <div data-advice='Put your HTML here. contactType is a Text.'></div> );
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
      var availableLanguage;
      if( props.availableLanguage ){
        if( props.availableLanguage instanceof Array ){
          availableLanguage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          availableLanguage = availableLanguage.concat( props.availableLanguage.map( function(result, index){
              return ( <Language {...result} key={index} /> )
           }) );
         availableLanguage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          availableLanguage = ( <Language props={ props.availableLanguage } /> );        }
      }
      var postOfficeBoxNumber;
      if( props.postOfficeBoxNumber ){
        if( props.postOfficeBoxNumber instanceof Array ){
          postOfficeBoxNumber = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          postOfficeBoxNumber = postOfficeBoxNumber.concat( props.postOfficeBoxNumber.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. postOfficeBoxNumber is a Text.'></div> )
           }) );
         postOfficeBoxNumber.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            postOfficeBoxNumber = ( <div data-advice='Put your HTML here. postOfficeBoxNumber is a Text.'></div> );
        }
      }
      var productSupported;
      if( props.productSupported ){
        if( props.productSupported instanceof Array ){
          productSupported = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          productSupported = productSupported.concat( props.productSupported.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. productSupported is a Text or
Product.'></div> )
           }) );
         productSupported.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            productSupported = ( <div data-advice='Put your HTML here. productSupported is a Text or
Product.'></div> );
        }
      }
      var contactOption;
      if( props.contactOption ){
        if( props.contactOption instanceof Array ){
          contactOption = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          contactOption = contactOption.concat( props.contactOption.map( function(result, index){
              return ( <ContactPointOption {...result} key={index} /> )
           }) );
         contactOption.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          contactOption = ( <ContactPointOption props={ props.contactOption } /> );        }
      }
      var addressCountry;
      if( props.addressCountry ){
        if( props.addressCountry instanceof Array ){
          addressCountry = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          addressCountry = addressCountry.concat( props.addressCountry.map( function(result, index){
              return ( <Country {...result} key={index} /> )
           }) );
         addressCountry.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          addressCountry = ( <p className="country">{ props.addressCountry }</p> );        }
      }
      var streetAddress;
      if( props.streetAddress ){
        if( props.streetAddress instanceof Array ){
          streetAddress = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          streetAddress = streetAddress.concat( props.streetAddress.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. streetAddress is a Text.'></div> )
           }) );
         streetAddress.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            streetAddress = ( <p className='street-adress'>{props.streetAdress}</p> );
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
      var postalCode;
      if( props.postalCode ){
        if( props.postalCode instanceof Array ){
          postalCode = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          postalCode = postalCode.concat( props.postalCode.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. postalCode is a Text.'></div> )
           }) );
         postalCode.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            postalCode = ( <p className='postal-code'>{props.postalCode}</p> );
        }
      }
      var hoursAvailable;
      if( props.hoursAvailable ){
        if( props.hoursAvailable instanceof Array ){
          hoursAvailable = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          hoursAvailable = hoursAvailable.concat( props.hoursAvailable.map( function(result, index){
              return ( <OpeningHoursSpecification {...result} key={index} /> )
           }) );
         hoursAvailable.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          hoursAvailable = ( <OpeningHoursSpecification props={ props.hoursAvailable } /> );        }
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
      var addressRegion;
      if( props.addressRegion ){
        if( props.addressRegion instanceof Array ){
          addressRegion = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          addressRegion = addressRegion.concat( props.addressRegion.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. addressRegion is a Text.'></div> )
           }) );
         addressRegion.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            addressRegion = ( <p className='address-region'>{props.adressRegion}</p> );
        }
      }
      var areaServed;
      if( props.areaServed ){
        if( props.areaServed instanceof Array ){
          areaServed = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          areaServed = areaServed.concat( props.areaServed.map( function(result, index){
              return ( <AdministrativeArea {...result} key={index} /> )
           }) );
         areaServed.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          areaServed = ( <AdministrativeArea props={ props.areaServed } /> );        }
      }
      return (<div title='PostalAddress' className='PostalAddress entity'>
        { image }
        { name }
        { alternateName }
        { description }
        { url }
        { email }
        { telephone }
        { faxNumber }
        { contactOption }
        { contactType }
        { additionalType }
        { streetAddress }
        { postalCode }
        { addressLocality }
        { postOfficeBoxNumber }
        { addressRegion }
        { addressCountry }
        { hoursAvailable }
        { availableLanguage }
        { areaServed }
        { productSupported }
        { mainEntityOfPage }
        { potentialAction }
        { sameAs }
     </div>);
    }
  });
});
