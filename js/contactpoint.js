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
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var productSupported;
      if( props.productSupported ){
        if( props.productSupported instanceof Array ){
          productSupported = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.productSupported ){
            productSupported.push( ( React.createElement("div", {"data-advice": "Put your HTML here. productSupported is a Text or" + ' ' +
"Product."}) ) );
          }
        } else {
            productSupported = ( React.createElement("div", {"data-advice": "Put your HTML here. productSupported is a Text or" + ' ' +
"Product."}) );
        }
      }
      var contactOption;
      if( props.contactOption ){
        if( props.contactOption instanceof Array ){
          contactOption = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contactOption ){
            contactOption.push( ( React.createElement(ContactPointOption, React.__spread({},  props.contactOption )) ) );          }
        } else {
          contactOption = ( React.createElement(ContactPointOption, {props:  props.contactOption}) );        }
      }
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.telephone ){
            telephone.push( ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) ) );
          }
        } else {
            telephone = ( React.createElement("div", {"data-advice": "Put your HTML here. telephone is a Text."}) );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.faxNumber ){
            faxNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) ) );
          }
        } else {
            faxNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. faxNumber is a Text."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var hoursAvailable;
      if( props.hoursAvailable ){
        if( props.hoursAvailable instanceof Array ){
          hoursAvailable = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.hoursAvailable ){
            hoursAvailable.push( ( React.createElement(OpeningHoursSpecification, React.__spread({},  props.hoursAvailable )) ) );          }
        } else {
          hoursAvailable = ( React.createElement(OpeningHoursSpecification, {props:  props.hoursAvailable}) );        }
      }
      var areaServed;
      if( props.areaServed ){
        if( props.areaServed instanceof Array ){
          areaServed = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.areaServed ){
            areaServed.push( ( React.createElement(AdministrativeArea, React.__spread({},  props.areaServed )) ) );          }
        } else {
          areaServed = ( React.createElement(AdministrativeArea, {props:  props.areaServed}) );        }
      }
      var contactType;
      if( props.contactType ){
        if( props.contactType instanceof Array ){
          contactType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contactType ){
            contactType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contactType is a Text."}) ) );
          }
        } else {
            contactType = ( React.createElement("div", {"data-advice": "Put your HTML here. contactType is a Text."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var email;
      if( props.email ){
        if( props.email instanceof Array ){
          email = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.email ){
            email.push( ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) ) );
          }
        } else {
            email = ( React.createElement("div", {"data-advice": "Put your HTML here. email is a Text."}) );
        }
      }
      var availableLanguage;
      if( props.availableLanguage ){
        if( props.availableLanguage instanceof Array ){
          availableLanguage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.availableLanguage ){
            availableLanguage.push( ( React.createElement(Language, React.__spread({},  props.availableLanguage )) ) );          }
        } else {
          availableLanguage = ( React.createElement(Language, {props:  props.availableLanguage}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
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
