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
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var productSupported;
      if( this.props.productSupported ){
        if( this.props.productSupported instanceof Array ){
          productSupported = [(React.createElement("p", null, "productSupported:") )];
          for( i in this.props.productSupported ){
            productSupported.push( ( React.createElement("div", {class: "productSupported"}) ) );
          }
        } else {
          productSupported = ( React.createElement("div", {class: "productSupported"}, this.props.productSupported) );
        }
      }
      var contactOption;
      if( this.props.contactOption ){
        if( this.props.contactOption instanceof Array ){
          contactOption = [(React.createElement("p", null, "contactOption:") )];
          for( i in this.props.contactOption ){
            contactOption.push( ( React.createElement(ContactPointOption, {props:  this.props.contactOption}) ) );          }
        } else {
          contactOption = ( React.createElement(ContactPointOption, {props:  this.props.contactOption}) );        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [(React.createElement("p", null, "telephone:") )];
          for( i in this.props.telephone ){
            telephone.push( ( React.createElement("div", {class: "telephone"}) ) );
          }
        } else {
          telephone = ( React.createElement("div", {class: "telephone"}, this.props.telephone) );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [(React.createElement("p", null, "faxNumber:") )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( React.createElement("div", {class: "faxNumber"}) ) );
          }
        } else {
          faxNumber = ( React.createElement("div", {class: "faxNumber"}, this.props.faxNumber) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var hoursAvailable;
      if( this.props.hoursAvailable ){
        if( this.props.hoursAvailable instanceof Array ){
          hoursAvailable = [(React.createElement("p", null, "hoursAvailable:") )];
          for( i in this.props.hoursAvailable ){
            hoursAvailable.push( ( React.createElement(OpeningHoursSpecification, {props:  this.props.hoursAvailable}) ) );          }
        } else {
          hoursAvailable = ( React.createElement(OpeningHoursSpecification, {props:  this.props.hoursAvailable}) );        }
      }
      var areaServed;
      if( this.props.areaServed ){
        if( this.props.areaServed instanceof Array ){
          areaServed = [(React.createElement("p", null, "areaServed:") )];
          for( i in this.props.areaServed ){
            areaServed.push( ( React.createElement(AdministrativeArea, {props:  this.props.areaServed}) ) );          }
        } else {
          areaServed = ( React.createElement(AdministrativeArea, {props:  this.props.areaServed}) );        }
      }
      var contactType;
      if( this.props.contactType ){
        if( this.props.contactType instanceof Array ){
          contactType = [(React.createElement("p", null, "contactType:") )];
          for( i in this.props.contactType ){
            contactType.push( ( React.createElement("div", {class: "contactType"}) ) );
          }
        } else {
          contactType = ( React.createElement("div", {class: "contactType"}, this.props.contactType) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [(React.createElement("p", null, "email:") )];
          for( i in this.props.email ){
            email.push( ( React.createElement("div", {class: "email"}) ) );
          }
        } else {
          email = ( React.createElement("div", {class: "email"}, this.props.email) );
        }
      }
      var availableLanguage;
      if( this.props.availableLanguage ){
        if( this.props.availableLanguage instanceof Array ){
          availableLanguage = [(React.createElement("p", null, "availableLanguage:") )];
          for( i in this.props.availableLanguage ){
            availableLanguage.push( ( React.createElement(Language, {props:  this.props.availableLanguage}) ) );          }
        } else {
          availableLanguage = ( React.createElement(Language, {props:  this.props.availableLanguage}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
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
