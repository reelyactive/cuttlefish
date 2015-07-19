/* Thing > MedicalEntity > MedicalIntangible > MedicalCode - A code for a medical entity.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './medicalcode', './imageobject', './medicinesystem', './creativework', './action', './organization', './medicalstudy', './medicalguideline', './medicalspecialty'], function(React, MedicalCode, ImageObject, MedicineSystem, CreativeWork, Action, Organization, MedicalStudy, MedicalGuideline, MedicalSpecialty){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var code;
      if( this.props.code ){
        if( this.props.code instanceof Array ){
          code = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.code ){
            code.push( ( React.createElement(MedicalCode, React.__spread({},  this.props.code )) ) );          }
        } else {
          code = ( React.createElement(MedicalCode, {props:  this.props.code}) );        }
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
      var relevantSpecialty;
      if( this.props.relevantSpecialty ){
        if( this.props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.relevantSpecialty ){
            relevantSpecialty.push( ( React.createElement(MedicalSpecialty, React.__spread({},  this.props.relevantSpecialty )) ) );          }
        } else {
          relevantSpecialty = ( React.createElement(MedicalSpecialty, {props:  this.props.relevantSpecialty}) );        }
      }
      var study;
      if( this.props.study ){
        if( this.props.study instanceof Array ){
          study = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.study ){
            study.push( ( React.createElement(MedicalStudy, React.__spread({},  this.props.study )) ) );          }
        } else {
          study = ( React.createElement(MedicalStudy, {props:  this.props.study}) );        }
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
      var guideline;
      if( this.props.guideline ){
        if( this.props.guideline instanceof Array ){
          guideline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.guideline ){
            guideline.push( ( React.createElement(MedicalGuideline, React.__spread({},  this.props.guideline )) ) );          }
        } else {
          guideline = ( React.createElement(MedicalGuideline, {props:  this.props.guideline}) );        }
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
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  this.props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var recognizingAuthority;
      if( this.props.recognizingAuthority ){
        if( this.props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.recognizingAuthority ){
            recognizingAuthority.push( ( React.createElement(Organization, React.__spread({},  this.props.recognizingAuthority )) ) );          }
        } else {
          recognizingAuthority = ( React.createElement(Organization, {props:  this.props.recognizingAuthority}) );        }
      }
      var medicineSystem;
      if( this.props.medicineSystem ){
        if( this.props.medicineSystem instanceof Array ){
          medicineSystem = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.medicineSystem ){
            medicineSystem.push( ( React.createElement(MedicineSystem, React.__spread({},  this.props.medicineSystem )) ) );          }
        } else {
          medicineSystem = ( React.createElement(MedicineSystem, {props:  this.props.medicineSystem}) );        }
      }
      var codeValue;
      if( this.props.codeValue ){
        if( this.props.codeValue instanceof Array ){
          codeValue = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.codeValue ){
            codeValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. codeValue is a Text."}) ) );
          }
        } else {
            codeValue = ( React.createElement("div", {"data-advice": "Put your HTML here. codeValue is a Text."}) );
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
      var codingSystem;
      if( this.props.codingSystem ){
        if( this.props.codingSystem instanceof Array ){
          codingSystem = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.codingSystem ){
            codingSystem.push( ( React.createElement("div", {"data-advice": "Put your HTML here. codingSystem is a Text."}) ) );
          }
        } else {
            codingSystem = ( React.createElement("div", {"data-advice": "Put your HTML here. codingSystem is a Text."}) );
        }
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
      return (React.createElement("div", {title: "MedicalCode", className: "MedicalCode entity"}, 
         code, 
         description, 
         relevantSpecialty, 
         study, 
         url, 
         guideline, 
         additionalType, 
         sameAs, 
         potentialAction, 
         recognizingAuthority, 
         medicineSystem, 
         codeValue, 
         mainEntityOfPage, 
         codingSystem, 
         alternateName, 
         image, 
         name 
     ));
    }
  });
});
