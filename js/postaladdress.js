/* Thing > Intangible > StructuredValue > ContactPoint > PostalAddress - The mailing address.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './openinghoursspecification', './product', './language', './country', './imageobject', './administrativearea', './action', './creativework', './contactpointoption'], function(React, OpeningHoursSpecification, Product, Language, Country, ImageObject, AdministrativeArea, Action, CreativeWork, ContactPointOption){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
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
      var addressLocality;
      if( this.props.addressLocality ){
        if( this.props.addressLocality instanceof Array ){
          addressLocality = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.addressLocality ){
            addressLocality.push( ( React.createElement("div", {"data-advice": "Put your HTML here. addressLocality is a Text."}) ) );
          }
        } else {
            addressLocality = ( React.createElement("div", {"data-advice": "Put your HTML here. addressLocality is a Text."}) );
        }
      }
      var contactType;
      if( this.props.contactType ){
        if( this.props.contactType instanceof Array ){
          contactType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.contactType ){
            contactType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contactType is a Text."}) ) );
          }
        } else {
            contactType = ( React.createElement("div", {"data-advice": "Put your HTML here. contactType is a Text."}) );
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
      var availableLanguage;
      if( this.props.availableLanguage ){
        if( this.props.availableLanguage instanceof Array ){
          availableLanguage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.availableLanguage ){
            availableLanguage.push( ( React.createElement(Language, React.__spread({},  this.props.availableLanguage )) ) );          }
        } else {
          availableLanguage = ( React.createElement(Language, {props:  this.props.availableLanguage}) );        }
      }
      var postOfficeBoxNumber;
      if( this.props.postOfficeBoxNumber ){
        if( this.props.postOfficeBoxNumber instanceof Array ){
          postOfficeBoxNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.postOfficeBoxNumber ){
            postOfficeBoxNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. postOfficeBoxNumber is a Text."}) ) );
          }
        } else {
            postOfficeBoxNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. postOfficeBoxNumber is a Text."}) );
        }
      }
      var productSupported;
      if( this.props.productSupported ){
        if( this.props.productSupported instanceof Array ){
          productSupported = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.productSupported ){
            productSupported.push( ( React.createElement("div", {"data-advice": "Put your HTML here. productSupported is a Text or" + ' ' +
"Product."}) ) );
          }
        } else {
            productSupported = ( React.createElement("div", {"data-advice": "Put your HTML here. productSupported is a Text or" + ' ' +
"Product."}) );
        }
      }
      var contactOption;
      if( this.props.contactOption ){
        if( this.props.contactOption instanceof Array ){
          contactOption = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.contactOption ){
            contactOption.push( ( React.createElement(ContactPointOption, React.__spread({},  this.props.contactOption )) ) );          }
        } else {
          contactOption = ( React.createElement(ContactPointOption, {props:  this.props.contactOption}) );        }
      }
      var addressCountry;
      if( this.props.addressCountry ){
        if( this.props.addressCountry instanceof Array ){
          addressCountry = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.addressCountry ){
            addressCountry.push( ( React.createElement(Country, React.__spread({},  this.props.addressCountry )) ) );          }
        } else {
          addressCountry = ( React.createElement(Country, {props:  this.props.addressCountry}) );        }
      }
      var streetAddress;
      if( this.props.streetAddress ){
        if( this.props.streetAddress instanceof Array ){
          streetAddress = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.streetAddress ){
            streetAddress.push( ( React.createElement("div", {"data-advice": "Put your HTML here. streetAddress is a Text."}) ) );
          }
        } else {
            streetAddress = ( React.createElement("div", {"data-advice": "Put your HTML here. streetAddress is a Text."}) );
        }
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
      var postalCode;
      if( this.props.postalCode ){
        if( this.props.postalCode instanceof Array ){
          postalCode = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.postalCode ){
            postalCode.push( ( React.createElement("div", {"data-advice": "Put your HTML here. postalCode is a Text."}) ) );
          }
        } else {
            postalCode = ( React.createElement("div", {"data-advice": "Put your HTML here. postalCode is a Text."}) );
        }
      }
      var hoursAvailable;
      if( this.props.hoursAvailable ){
        if( this.props.hoursAvailable instanceof Array ){
          hoursAvailable = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.hoursAvailable ){
            hoursAvailable.push( ( React.createElement(OpeningHoursSpecification, React.__spread({},  this.props.hoursAvailable )) ) );          }
        } else {
          hoursAvailable = ( React.createElement(OpeningHoursSpecification, {props:  this.props.hoursAvailable}) );        }
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
      var addressRegion;
      if( this.props.addressRegion ){
        if( this.props.addressRegion instanceof Array ){
          addressRegion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.addressRegion ){
            addressRegion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. addressRegion is a Text."}) ) );
          }
        } else {
            addressRegion = ( React.createElement("div", {"data-advice": "Put your HTML here. addressRegion is a Text."}) );
        }
      }
      var areaServed;
      if( this.props.areaServed ){
        if( this.props.areaServed instanceof Array ){
          areaServed = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.areaServed ){
            areaServed.push( ( React.createElement(AdministrativeArea, React.__spread({},  this.props.areaServed )) ) );          }
        } else {
          areaServed = ( React.createElement(AdministrativeArea, {props:  this.props.areaServed}) );        }
      }
      return (React.createElement("div", {title: "PostalAddress", className: "PostalAddress entity"}, 
         sameAs, 
         image, 
         telephone, 
         faxNumber, 
         addressLocality, 
         contactType, 
         additionalType, 
         availableLanguage, 
         postOfficeBoxNumber, 
         productSupported, 
         contactOption, 
         addressCountry, 
         streetAddress, 
         mainEntityOfPage, 
         email, 
         description, 
         postalCode, 
         hoursAvailable, 
         alternateName, 
         potentialAction, 
         name, 
         url, 
         addressRegion, 
         areaServed 
     ));
    }
  });
});
