/* Thing > MedicalEntity > MedicalStudy - A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './medicalstudystatus', './medicalcode', './medicalentity', './imageobject', './administrativearea', './medicinesystem', './creativework', './action', './organization', './medicalstudy', './medicalguideline', './medicalspecialty'], function(React, MedicalStudyStatus, MedicalCode, MedicalEntity, ImageObject, AdministrativeArea, MedicineSystem, CreativeWork, Action, Organization, MedicalStudy, MedicalGuideline, MedicalSpecialty){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var status;
      if( this.props.status ){
        if( this.props.status instanceof Array ){
          status = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.status ){
            status.push( ( React.createElement(MedicalStudyStatus, {props:  this.props.status}) ) );          }
        } else {
          status = ( React.createElement(MedicalStudyStatus, {props:  this.props.status}) );        }
      }
      var studySubject;
      if( this.props.studySubject ){
        if( this.props.studySubject instanceof Array ){
          studySubject = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.studySubject ){
            studySubject.push( ( React.createElement(MedicalEntity, {props:  this.props.studySubject}) ) );          }
        } else {
          studySubject = ( React.createElement(MedicalEntity, {props:  this.props.studySubject}) );        }
      }
      var code;
      if( this.props.code ){
        if( this.props.code instanceof Array ){
          code = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.code ){
            code.push( ( React.createElement(MedicalCode, {props:  this.props.code}) ) );          }
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
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
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
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      var relevantSpecialty;
      if( this.props.relevantSpecialty ){
        if( this.props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.relevantSpecialty ){
            relevantSpecialty.push( ( React.createElement(MedicalSpecialty, {props:  this.props.relevantSpecialty}) ) );          }
        } else {
          relevantSpecialty = ( React.createElement(MedicalSpecialty, {props:  this.props.relevantSpecialty}) );        }
      }
      var medicineSystem;
      if( this.props.medicineSystem ){
        if( this.props.medicineSystem instanceof Array ){
          medicineSystem = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.medicineSystem ){
            medicineSystem.push( ( React.createElement(MedicineSystem, {props:  this.props.medicineSystem}) ) );          }
        } else {
          medicineSystem = ( React.createElement(MedicineSystem, {props:  this.props.medicineSystem}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var guideline;
      if( this.props.guideline ){
        if( this.props.guideline instanceof Array ){
          guideline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.guideline ){
            guideline.push( ( React.createElement(MedicalGuideline, {props:  this.props.guideline}) ) );          }
        } else {
          guideline = ( React.createElement(MedicalGuideline, {props:  this.props.guideline}) );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var recognizingAuthority;
      if( this.props.recognizingAuthority ){
        if( this.props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.recognizingAuthority ){
            recognizingAuthority.push( ( React.createElement(Organization, {props:  this.props.recognizingAuthority}) ) );          }
        } else {
          recognizingAuthority = ( React.createElement(Organization, {props:  this.props.recognizingAuthority}) );        }
      }
      var sponsor;
      if( this.props.sponsor ){
        if( this.props.sponsor instanceof Array ){
          sponsor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sponsor ){
            sponsor.push( ( React.createElement(Organization, {props:  this.props.sponsor}) ) );          }
        } else {
          sponsor = ( React.createElement(Organization, {props:  this.props.sponsor}) );        }
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
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var studyLocation;
      if( this.props.studyLocation ){
        if( this.props.studyLocation instanceof Array ){
          studyLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.studyLocation ){
            studyLocation.push( ( React.createElement(AdministrativeArea, {props:  this.props.studyLocation}) ) );          }
        } else {
          studyLocation = ( React.createElement(AdministrativeArea, {props:  this.props.studyLocation}) );        }
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
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
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
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
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
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
        }
      }
      var outcome;
      if( this.props.outcome ){
        if( this.props.outcome instanceof Array ){
          outcome = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.outcome ){
            outcome.push( ( React.createElement("div", {"data-advice": "Put your HTML here. outcome is a Text."}) ) );
          }
        } else {
            outcome.push( ( React.createElement("div", {"data-advice": "Put your HTML here. outcome is a Text."}) ) );
        }
      }
      var study;
      if( this.props.study ){
        if( this.props.study instanceof Array ){
          study = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.study ){
            study.push( ( React.createElement(MedicalStudy, {props:  this.props.study}) ) );          }
        } else {
          study = ( React.createElement(MedicalStudy, {props:  this.props.study}) );        }
      }
      var population;
      if( this.props.population ){
        if( this.props.population instanceof Array ){
          population = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.population ){
            population.push( ( React.createElement("div", {"data-advice": "Put your HTML here. population is a Text."}) ) );
          }
        } else {
            population.push( ( React.createElement("div", {"data-advice": "Put your HTML here. population is a Text."}) ) );
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
