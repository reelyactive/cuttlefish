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
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [(<p>telephone:</p> )];
          for( i in this.props.telephone ){
            telephone.push( ( <div class='telephone'></div> ) );
          }
        } else {
          telephone = ( <div class='telephone'>{this.props.telephone}</div> );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [(<p>faxNumber:</p> )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( <div class='faxNumber'></div> ) );
          }
        } else {
          faxNumber = ( <div class='faxNumber'>{this.props.faxNumber}</div> );
        }
      }
      var addressLocality;
      if( this.props.addressLocality ){
        if( this.props.addressLocality instanceof Array ){
          addressLocality = [(<p>addressLocality:</p> )];
          for( i in this.props.addressLocality ){
            addressLocality.push( ( <div class='addressLocality'></div> ) );
          }
        } else {
          addressLocality = ( <div class='addressLocality'>{this.props.addressLocality}</div> );
        }
      }
      var contactType;
      if( this.props.contactType ){
        if( this.props.contactType instanceof Array ){
          contactType = [(<p>contactType:</p> )];
          for( i in this.props.contactType ){
            contactType.push( ( <div class='contactType'></div> ) );
          }
        } else {
          contactType = ( <div class='contactType'>{this.props.contactType}</div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var availableLanguage;
      if( this.props.availableLanguage ){
        if( this.props.availableLanguage instanceof Array ){
          availableLanguage = [(<p>availableLanguage:</p> )];
          for( i in this.props.availableLanguage ){
            availableLanguage.push( ( <Language props={ this.props.availableLanguage } /> ) );          }
        } else {
          availableLanguage = ( <Language props={ this.props.availableLanguage } /> );        }
      }
      var postOfficeBoxNumber;
      if( this.props.postOfficeBoxNumber ){
        if( this.props.postOfficeBoxNumber instanceof Array ){
          postOfficeBoxNumber = [(<p>postOfficeBoxNumber:</p> )];
          for( i in this.props.postOfficeBoxNumber ){
            postOfficeBoxNumber.push( ( <div class='postOfficeBoxNumber'></div> ) );
          }
        } else {
          postOfficeBoxNumber = ( <div class='postOfficeBoxNumber'>{this.props.postOfficeBoxNumber}</div> );
        }
      }
      var productSupported;
      if( this.props.productSupported ){
        if( this.props.productSupported instanceof Array ){
          productSupported = [(<p>productSupported:</p> )];
          for( i in this.props.productSupported ){
            productSupported.push( ( <div class='productSupported'></div> ) );
          }
        } else {
          productSupported = ( <div class='productSupported'>{this.props.productSupported}</div> );
        }
      }
      var contactOption;
      if( this.props.contactOption ){
        if( this.props.contactOption instanceof Array ){
          contactOption = [(<p>contactOption:</p> )];
          for( i in this.props.contactOption ){
            contactOption.push( ( <ContactPointOption props={ this.props.contactOption } /> ) );          }
        } else {
          contactOption = ( <ContactPointOption props={ this.props.contactOption } /> );        }
      }
      var addressCountry;
      if( this.props.addressCountry ){
        if( this.props.addressCountry instanceof Array ){
          addressCountry = [(<p>addressCountry:</p> )];
          for( i in this.props.addressCountry ){
            addressCountry.push( ( <Country props={ this.props.addressCountry } /> ) );          }
        } else {
          addressCountry = ( <Country props={ this.props.addressCountry } /> );        }
      }
      var streetAddress;
      if( this.props.streetAddress ){
        if( this.props.streetAddress instanceof Array ){
          streetAddress = [(<p>streetAddress:</p> )];
          for( i in this.props.streetAddress ){
            streetAddress.push( ( <div class='streetAddress'></div> ) );
          }
        } else {
          streetAddress = ( <div class='streetAddress'>{this.props.streetAddress}</div> );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [(<p>email:</p> )];
          for( i in this.props.email ){
            email.push( ( <div class='email'></div> ) );
          }
        } else {
          email = ( <div class='email'>{this.props.email}</div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var postalCode;
      if( this.props.postalCode ){
        if( this.props.postalCode instanceof Array ){
          postalCode = [(<p>postalCode:</p> )];
          for( i in this.props.postalCode ){
            postalCode.push( ( <div class='postalCode'></div> ) );
          }
        } else {
          postalCode = ( <div class='postalCode'>{this.props.postalCode}</div> );
        }
      }
      var hoursAvailable;
      if( this.props.hoursAvailable ){
        if( this.props.hoursAvailable instanceof Array ){
          hoursAvailable = [(<p>hoursAvailable:</p> )];
          for( i in this.props.hoursAvailable ){
            hoursAvailable.push( ( <OpeningHoursSpecification props={ this.props.hoursAvailable } /> ) );          }
        } else {
          hoursAvailable = ( <OpeningHoursSpecification props={ this.props.hoursAvailable } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var addressRegion;
      if( this.props.addressRegion ){
        if( this.props.addressRegion instanceof Array ){
          addressRegion = [(<p>addressRegion:</p> )];
          for( i in this.props.addressRegion ){
            addressRegion.push( ( <div class='addressRegion'></div> ) );
          }
        } else {
          addressRegion = ( <div class='addressRegion'>{this.props.addressRegion}</div> );
        }
      }
      var areaServed;
      if( this.props.areaServed ){
        if( this.props.areaServed instanceof Array ){
          areaServed = [(<p>areaServed:</p> )];
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
