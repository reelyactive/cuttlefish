/* Thing > MedicalEntity > MedicalGuideline - Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './medicalcode', './medicalentity', './imageobject', './medicalevidencelevel', './medicinesystem', './creativework', './action', './organization', './medicalstudy', './medicalguideline', './medicalspecialty'], function(React, MedicalCode, MedicalEntity, ImageObject, MedicalEvidenceLevel, MedicineSystem, CreativeWork, Action, Organization, MedicalStudy, MedicalGuideline, MedicalSpecialty){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var code;
      if( props.code ){
        if( props.code instanceof Array ){
          code = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.code ){
            code.push( ( React.createElement(MedicalCode, React.__spread({},  props.code )) ) );          }
        } else {
          code = ( React.createElement(MedicalCode, {props:  props.code}) );        }
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
      var relevantSpecialty;
      if( props.relevantSpecialty ){
        if( props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.relevantSpecialty ){
            relevantSpecialty.push( ( React.createElement(MedicalSpecialty, React.__spread({},  props.relevantSpecialty )) ) );          }
        } else {
          relevantSpecialty = ( React.createElement(MedicalSpecialty, {props:  props.relevantSpecialty}) );        }
      }
      var study;
      if( props.study ){
        if( props.study instanceof Array ){
          study = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.study ){
            study.push( ( React.createElement(MedicalStudy, React.__spread({},  props.study )) ) );          }
        } else {
          study = ( React.createElement(MedicalStudy, {props:  props.study}) );        }
      }
      var evidenceOrigin;
      if( props.evidenceOrigin ){
        if( props.evidenceOrigin instanceof Array ){
          evidenceOrigin = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.evidenceOrigin ){
            evidenceOrigin.push( ( React.createElement("div", {"data-advice": "Put your HTML here. evidenceOrigin is a Text."}) ) );
          }
        } else {
            evidenceOrigin = ( React.createElement("div", {"data-advice": "Put your HTML here. evidenceOrigin is a Text."}) );
        }
      }
      var guidelineSubject;
      if( props.guidelineSubject ){
        if( props.guidelineSubject instanceof Array ){
          guidelineSubject = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.guidelineSubject ){
            guidelineSubject.push( ( React.createElement(MedicalEntity, React.__spread({},  props.guidelineSubject )) ) );          }
        } else {
          guidelineSubject = ( React.createElement(MedicalEntity, {props:  props.guidelineSubject}) );        }
      }
      var guideline;
      if( props.guideline ){
        if( props.guideline instanceof Array ){
          guideline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.guideline ){
            guideline.push( ( React.createElement(MedicalGuideline, React.__spread({},  props.guideline )) ) );          }
        } else {
          guideline = ( React.createElement(MedicalGuideline, {props:  props.guideline}) );        }
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
      var evidenceLevel;
      if( props.evidenceLevel ){
        if( props.evidenceLevel instanceof Array ){
          evidenceLevel = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.evidenceLevel ){
            evidenceLevel.push( ( React.createElement(MedicalEvidenceLevel, React.__spread({},  props.evidenceLevel )) ) );          }
        } else {
          evidenceLevel = ( React.createElement(MedicalEvidenceLevel, {props:  props.evidenceLevel}) );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var recognizingAuthority;
      if( props.recognizingAuthority ){
        if( props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.recognizingAuthority ){
            recognizingAuthority.push( ( React.createElement(Organization, React.__spread({},  props.recognizingAuthority )) ) );          }
        } else {
          recognizingAuthority = ( React.createElement(Organization, {props:  props.recognizingAuthority}) );        }
      }
      var medicineSystem;
      if( props.medicineSystem ){
        if( props.medicineSystem instanceof Array ){
          medicineSystem = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.medicineSystem ){
            medicineSystem.push( ( React.createElement(MedicineSystem, React.__spread({},  props.medicineSystem )) ) );          }
        } else {
          medicineSystem = ( React.createElement(MedicineSystem, {props:  props.medicineSystem}) );        }
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
      var guidelineDate;
      if( props.guidelineDate ){
        if( props.guidelineDate instanceof Array ){
          guidelineDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.guidelineDate ){
            guidelineDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. guidelineDate is a Date."}) ) );
          }
        } else {
            guidelineDate = ( React.createElement("div", {"data-advice": "Put your HTML here. guidelineDate is a Date."}) );
        }
      }
      return (React.createElement("div", {title: "MedicalGuideline", className: "MedicalGuideline entity"}, 
         code, 
         description, 
         name, 
         relevantSpecialty, 
         study, 
         evidenceOrigin, 
         guidelineSubject, 
         guideline, 
         url, 
         sameAs, 
         evidenceLevel, 
         potentialAction, 
         recognizingAuthority, 
         medicineSystem, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         image, 
         guidelineDate 
     ));
    }
  });
});
