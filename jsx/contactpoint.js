/* Thing > Intangible > StructuredValue > ContactPoint - A contact point\u2014for example, a Customer Complaints department.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './openinghoursspecification', './product', './language', './imageobject', './administrativearea', './action', './creativework', './contactpointoption'], function(React, OpeningHoursSpecification, Product, Language, ImageObject, AdministrativeArea, Action, CreativeWork, ContactPointOption){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
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
      var hoursAvailable;
      if( this.props.hoursAvailable ){
        if( this.props.hoursAvailable instanceof Array ){
          hoursAvailable = [(<p>hoursAvailable:</p> )];
          for( i in this.props.hoursAvailable ){
            hoursAvailable.push( ( <OpeningHoursSpecification props={ this.props.hoursAvailable } /> ) );          }
        } else {
          hoursAvailable = ( <OpeningHoursSpecification props={ this.props.hoursAvailable } /> );        }
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
      var availableLanguage;
      if( this.props.availableLanguage ){
        if( this.props.availableLanguage instanceof Array ){
          availableLanguage = [(<p>availableLanguage:</p> )];
          for( i in this.props.availableLanguage ){
            availableLanguage.push( ( <Language props={ this.props.availableLanguage } /> ) );          }
        } else {
          availableLanguage = ( <Language props={ this.props.availableLanguage } /> );        }
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
      return (<div title='ContactPoint' className='ContactPoint entity'>
        { potentialAction }
        { description }
        { sameAs }
        { productSupported }
        { contactOption }
        { telephone }
        { faxNumber }
        { url }
        { hoursAvailable }
        { areaServed }
        { contactType }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { image }
        { email }
        { availableLanguage }
        { name }
     </div>);
    }
  });
});
