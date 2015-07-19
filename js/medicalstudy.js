/* Thing > MedicalEntity > MedicalStudy - A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './medicalstudystatus', './medicalcode', './medicalentity', './imageobject', './administrativearea', './medicinesystem', './creativework', './action', './organization', './medicalstudy', './medicalguideline', './medicalspecialty'], function(React, MedicalStudyStatus, MedicalCode, MedicalEntity, ImageObject, AdministrativeArea, MedicineSystem, CreativeWork, Action, Organization, MedicalStudy, MedicalGuideline, MedicalSpecialty){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var status;
      if( props.status ){
        if( props.status instanceof Array ){
          status = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.status ){
            status.push( ( React.createElement(MedicalStudyStatus, React.__spread({},  props.status )) ) );          }
        } else {
          status = ( React.createElement(MedicalStudyStatus, {props:  props.status}) );        }
      }
      var studySubject;
      if( props.studySubject ){
        if( props.studySubject instanceof Array ){
          studySubject = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.studySubject ){
            studySubject.push( ( React.createElement(MedicalEntity, React.__spread({},  props.studySubject )) ) );          }
        } else {
          studySubject = ( React.createElement(MedicalEntity, {props:  props.studySubject}) );        }
      }
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
      var medicineSystem;
      if( props.medicineSystem ){
        if( props.medicineSystem instanceof Array ){
          medicineSystem = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.medicineSystem ){
            medicineSystem.push( ( React.createElement(MedicineSystem, React.__spread({},  props.medicineSystem )) ) );          }
        } else {
          medicineSystem = ( React.createElement(MedicineSystem, {props:  props.medicineSystem}) );        }
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
      var guideline;
      if( props.guideline ){
        if( props.guideline instanceof Array ){
          guideline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.guideline ){
            guideline.push( ( React.createElement(MedicalGuideline, React.__spread({},  props.guideline )) ) );          }
        } else {
          guideline = ( React.createElement(MedicalGuideline, {props:  props.guideline}) );        }
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
      var sponsor;
      if( props.sponsor ){
        if( props.sponsor instanceof Array ){
          sponsor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sponsor ){
            sponsor.push( ( React.createElement(Organization, React.__spread({},  props.sponsor )) ) );          }
        } else {
          sponsor = ( React.createElement(Organization, {props:  props.sponsor}) );        }
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
      var studyLocation;
      if( props.studyLocation ){
        if( props.studyLocation instanceof Array ){
          studyLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.studyLocation ){
            studyLocation.push( ( React.createElement(AdministrativeArea, React.__spread({},  props.studyLocation )) ) );          }
        } else {
          studyLocation = ( React.createElement(AdministrativeArea, {props:  props.studyLocation}) );        }
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
      var outcome;
      if( props.outcome ){
        if( props.outcome instanceof Array ){
          outcome = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.outcome ){
            outcome.push( ( React.createElement("div", {"data-advice": "Put your HTML here. outcome is a Text."}) ) );
          }
        } else {
            outcome = ( React.createElement("div", {"data-advice": "Put your HTML here. outcome is a Text."}) );
        }
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
      var population;
      if( props.population ){
        if( props.population instanceof Array ){
          population = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.population ){
            population.push( ( React.createElement("div", {"data-advice": "Put your HTML here. population is a Text."}) ) );
          }
        } else {
            population = ( React.createElement("div", {"data-advice": "Put your HTML here. population is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "MedicalStudy", className: "MedicalStudy entity"}, 
         status, 
         studySubject, 
         code, 
         description, 
         name, 
         relevantSpecialty, 
         medicineSystem, 
         url, 
         guideline, 
         sameAs, 
         potentialAction, 
         recognizingAuthority, 
         sponsor, 
         image, 
         studyLocation, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         outcome, 
         study, 
         population 
     ));
    }
  });
});
