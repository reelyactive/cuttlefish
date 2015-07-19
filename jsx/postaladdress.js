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
      var addressLocality;
      if( this.props.addressLocality ){
        if( this.props.addressLocality instanceof Array ){
          addressLocality = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.addressLocality ){
            addressLocality.push( ( <div data-advice='Put your HTML here. addressLocality is a Text.'></div> ) );
          }
        } else {
            addressLocality.push( ( <div data-advice='Put your HTML here. addressLocality is a Text.'></div> ) );
        }
      }
      var contactType;
      if( this.props.contactType ){
        if( this.props.contactType instanceof Array ){
          contactType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contactType ){
            contactType.push( ( <div data-advice='Put your HTML here. contactType is a Text.'></div> ) );
          }
        } else {
            contactType.push( ( <div data-advice='Put your HTML here. contactType is a Text.'></div> ) );
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
      var availableLanguage;
      if( this.props.availableLanguage ){
        if( this.props.availableLanguage instanceof Array ){
          availableLanguage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.availableLanguage ){
            availableLanguage.push( ( <Language props={ this.props.availableLanguage } /> ) );          }
        } else {
          availableLanguage = ( <Language props={ this.props.availableLanguage } /> );        }
      }
      var postOfficeBoxNumber;
      if( this.props.postOfficeBoxNumber ){
        if( this.props.postOfficeBoxNumber instanceof Array ){
          postOfficeBoxNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.postOfficeBoxNumber ){
            postOfficeBoxNumber.push( ( <div data-advice='Put your HTML here. postOfficeBoxNumber is a Text.'></div> ) );
          }
        } else {
            postOfficeBoxNumber.push( ( <div data-advice='Put your HTML here. postOfficeBoxNumber is a Text.'></div> ) );
        }
      }
      var productSupported;
      if( this.props.productSupported ){
        if( this.props.productSupported instanceof Array ){
          productSupported = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.productSupported ){
            productSupported.push( ( <div data-advice='Put your HTML here. productSupported is a Text or
Product.'></div> ) );
          }
        } else {
            productSupported.push( ( <div data-advice='Put your HTML here. productSupported is a Text or
Product.'></div> ) );
        }
      }
      var contactOption;
      if( this.props.contactOption ){
        if( this.props.contactOption instanceof Array ){
          contactOption = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contactOption ){
            contactOption.push( ( <ContactPointOption props={ this.props.contactOption } /> ) );          }
        } else {
          contactOption = ( <ContactPointOption props={ this.props.contactOption } /> );        }
      }
      var addressCountry;
      if( this.props.addressCountry ){
        if( this.props.addressCountry instanceof Array ){
          addressCountry = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.addressCountry ){
            addressCountry.push( ( <Country props={ this.props.addressCountry } /> ) );          }
        } else {
          addressCountry = ( <Country props={ this.props.addressCountry } /> );        }
      }
      var streetAddress;
      if( this.props.streetAddress ){
        if( this.props.streetAddress instanceof Array ){
          streetAddress = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.streetAddress ){
            streetAddress.push( ( <div data-advice='Put your HTML here. streetAddress is a Text.'></div> ) );
          }
        } else {
            streetAddress.push( ( <div data-advice='Put your HTML here. streetAddress is a Text.'></div> ) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
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
      var postalCode;
      if( this.props.postalCode ){
        if( this.props.postalCode instanceof Array ){
          postalCode = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.postalCode ){
            postalCode.push( ( <div data-advice='Put your HTML here. postalCode is a Text.'></div> ) );
          }
        } else {
            postalCode.push( ( <div data-advice='Put your HTML here. postalCode is a Text.'></div> ) );
        }
      }
      var hoursAvailable;
      if( this.props.hoursAvailable ){
        if( this.props.hoursAvailable instanceof Array ){
          hoursAvailable = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.hoursAvailable ){
            hoursAvailable.push( ( <OpeningHoursSpecification props={ this.props.hoursAvailable } /> ) );          }
        } else {
          hoursAvailable = ( <OpeningHoursSpecification props={ this.props.hoursAvailable } /> );        }
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
      var addressRegion;
      if( this.props.addressRegion ){
        if( this.props.addressRegion instanceof Array ){
          addressRegion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.addressRegion ){
            addressRegion.push( ( <div data-advice='Put your HTML here. addressRegion is a Text.'></div> ) );
          }
        } else {
            addressRegion.push( ( <div data-advice='Put your HTML here. addressRegion is a Text.'></div> ) );
        }
      }
      var areaServed;
      if( this.props.areaServed ){
        if( this.props.areaServed instanceof Array ){
          areaServed = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.areaServed ){
            areaServed.push( ( <AdministrativeArea props={ this.props.areaServed } /> ) );          }
        } else {
          areaServed = ( <AdministrativeArea props={ this.props.areaServed } /> );        }
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
