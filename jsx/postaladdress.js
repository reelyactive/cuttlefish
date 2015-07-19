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
      var addressLocality;
      if( props.addressLocality ){
        if( props.addressLocality instanceof Array ){
          addressLocality = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.addressLocality ){
            addressLocality.push( ( <div data-advice='Put your HTML here. addressLocality is a Text.'></div> ) );
          }
        } else {
            addressLocality = ( <div data-advice='Put your HTML here. addressLocality is a Text.'></div> );
        }
      }
      var contactType;
      if( props.contactType ){
        if( props.contactType instanceof Array ){
          contactType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contactType ){
            contactType.push( ( <div data-advice='Put your HTML here. contactType is a Text.'></div> ) );
          }
        } else {
            contactType = ( <div data-advice='Put your HTML here. contactType is a Text.'></div> );
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
      var availableLanguage;
      if( props.availableLanguage ){
        if( props.availableLanguage instanceof Array ){
          availableLanguage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.availableLanguage ){
            availableLanguage.push( ( <Language {...props.availableLanguage } /> ) );          }
        } else {
          availableLanguage = ( <Language props={ props.availableLanguage } /> );        }
      }
      var postOfficeBoxNumber;
      if( props.postOfficeBoxNumber ){
        if( props.postOfficeBoxNumber instanceof Array ){
          postOfficeBoxNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.postOfficeBoxNumber ){
            postOfficeBoxNumber.push( ( <div data-advice='Put your HTML here. postOfficeBoxNumber is a Text.'></div> ) );
          }
        } else {
            postOfficeBoxNumber = ( <div data-advice='Put your HTML here. postOfficeBoxNumber is a Text.'></div> );
        }
      }
      var productSupported;
      if( props.productSupported ){
        if( props.productSupported instanceof Array ){
          productSupported = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.productSupported ){
            productSupported.push( ( <div data-advice='Put your HTML here. productSupported is a Text or
Product.'></div> ) );
          }
        } else {
            productSupported = ( <div data-advice='Put your HTML here. productSupported is a Text or
Product.'></div> );
        }
      }
      var contactOption;
      if( props.contactOption ){
        if( props.contactOption instanceof Array ){
          contactOption = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contactOption ){
            contactOption.push( ( <ContactPointOption {...props.contactOption } /> ) );          }
        } else {
          contactOption = ( <ContactPointOption props={ props.contactOption } /> );        }
      }
      var addressCountry;
      if( props.addressCountry ){
        if( props.addressCountry instanceof Array ){
          addressCountry = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.addressCountry ){
            addressCountry.push( ( <Country {...props.addressCountry } /> ) );          }
        } else {
          addressCountry = ( <Country props={ props.addressCountry } /> );        }
      }
      var streetAddress;
      if( props.streetAddress ){
        if( props.streetAddress instanceof Array ){
          streetAddress = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.streetAddress ){
            streetAddress.push( ( <div data-advice='Put your HTML here. streetAddress is a Text.'></div> ) );
          }
        } else {
            streetAddress = ( <div data-advice='Put your HTML here. streetAddress is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
      var postalCode;
      if( props.postalCode ){
        if( props.postalCode instanceof Array ){
          postalCode = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.postalCode ){
            postalCode.push( ( <div data-advice='Put your HTML here. postalCode is a Text.'></div> ) );
          }
        } else {
            postalCode = ( <div data-advice='Put your HTML here. postalCode is a Text.'></div> );
        }
      }
      var hoursAvailable;
      if( props.hoursAvailable ){
        if( props.hoursAvailable instanceof Array ){
          hoursAvailable = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.hoursAvailable ){
            hoursAvailable.push( ( <OpeningHoursSpecification {...props.hoursAvailable } /> ) );          }
        } else {
          hoursAvailable = ( <OpeningHoursSpecification props={ props.hoursAvailable } /> );        }
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
      var addressRegion;
      if( props.addressRegion ){
        if( props.addressRegion instanceof Array ){
          addressRegion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.addressRegion ){
            addressRegion.push( ( <div data-advice='Put your HTML here. addressRegion is a Text.'></div> ) );
          }
        } else {
            addressRegion = ( <div data-advice='Put your HTML here. addressRegion is a Text.'></div> );
        }
      }
      var areaServed;
      if( props.areaServed ){
        if( props.areaServed instanceof Array ){
          areaServed = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.areaServed ){
            areaServed.push( ( <AdministrativeArea {...props.areaServed } /> ) );          }
        } else {
          areaServed = ( <AdministrativeArea props={ props.areaServed } /> );        }
      }
      return (<div title='PostalAddress' className='PostalAddress entity'>
        { sameAs }
        { image }
        { telephone }
        { faxNumber }
        { addressLocality }
        { contactType }
        { additionalType }
        { availableLanguage }
        { postOfficeBoxNumber }
        { productSupported }
        { contactOption }
        { addressCountry }
        { streetAddress }
        { mainEntityOfPage }
        { email }
        { description }
        { postalCode }
        { hoursAvailable }
        { alternateName }
        { potentialAction }
        { name }
        { url }
        { addressRegion }
        { areaServed }
     </div>);
    }
  });
});
