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
          status = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.status ){
            status.push( ( <MedicalStudyStatus {...props.status } /> ) );          }
        } else {
          status = ( <MedicalStudyStatus props={ props.status } /> );        }
      }
      var studySubject;
      if( props.studySubject ){
        if( props.studySubject instanceof Array ){
          studySubject = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.studySubject ){
            studySubject.push( ( <MedicalEntity {...props.studySubject } /> ) );          }
        } else {
          studySubject = ( <MedicalEntity props={ props.studySubject } /> );        }
      }
      var code;
      if( props.code ){
        if( props.code instanceof Array ){
          code = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.code ){
            code.push( ( <MedicalCode {...props.code } /> ) );          }
        } else {
          code = ( <MedicalCode props={ props.code } /> );        }
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
      var relevantSpecialty;
      if( props.relevantSpecialty ){
        if( props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.relevantSpecialty ){
            relevantSpecialty.push( ( <MedicalSpecialty {...props.relevantSpecialty } /> ) );          }
        } else {
          relevantSpecialty = ( <MedicalSpecialty props={ props.relevantSpecialty } /> );        }
      }
      var medicineSystem;
      if( props.medicineSystem ){
        if( props.medicineSystem instanceof Array ){
          medicineSystem = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.medicineSystem ){
            medicineSystem.push( ( <MedicineSystem {...props.medicineSystem } /> ) );          }
        } else {
          medicineSystem = ( <MedicineSystem props={ props.medicineSystem } /> );        }
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
      var guideline;
      if( props.guideline ){
        if( props.guideline instanceof Array ){
          guideline = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.guideline ){
            guideline.push( ( <MedicalGuideline {...props.guideline } /> ) );          }
        } else {
          guideline = ( <MedicalGuideline props={ props.guideline } /> );        }
      }
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
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var recognizingAuthority;
      if( props.recognizingAuthority ){
        if( props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.recognizingAuthority ){
            recognizingAuthority.push( ( <Organization {...props.recognizingAuthority } /> ) );          }
        } else {
          recognizingAuthority = ( <Organization props={ props.recognizingAuthority } /> );        }
      }
      var sponsor;
      if( props.sponsor ){
        if( props.sponsor instanceof Array ){
          sponsor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sponsor ){
            sponsor.push( ( <Organization {...props.sponsor } /> ) );          }
        } else {
          sponsor = ( <Organization props={ props.sponsor } /> );        }
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
      var studyLocation;
      if( props.studyLocation ){
        if( props.studyLocation instanceof Array ){
          studyLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.studyLocation ){
            studyLocation.push( ( <AdministrativeArea {...props.studyLocation } /> ) );          }
        } else {
          studyLocation = ( <AdministrativeArea props={ props.studyLocation } /> );        }
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
      var outcome;
      if( props.outcome ){
        if( props.outcome instanceof Array ){
          outcome = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.outcome ){
            outcome.push( ( <div data-advice='Put your HTML here. outcome is a Text.'></div> ) );
          }
        } else {
            outcome = ( <div data-advice='Put your HTML here. outcome is a Text.'></div> );
        }
      }
      var study;
      if( props.study ){
        if( props.study instanceof Array ){
          study = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.study ){
            study.push( ( <MedicalStudy {...props.study } /> ) );          }
        } else {
          study = ( <MedicalStudy props={ props.study } /> );        }
      }
      var population;
      if( props.population ){
        if( props.population instanceof Array ){
          population = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.population ){
            population.push( ( <div data-advice='Put your HTML here. population is a Text.'></div> ) );
          }
        } else {
            population = ( <div data-advice='Put your HTML here. population is a Text.'></div> );
        }
      }
      return (<div title='MedicalStudy' className='MedicalStudy entity'>
        { status }
        { studySubject }
        { code }
        { description }
        { name }
        { relevantSpecialty }
        { medicineSystem }
        { url }
        { guideline }
        { sameAs }
        { potentialAction }
        { recognizingAuthority }
        { sponsor }
        { image }
        { studyLocation }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { outcome }
        { study }
        { population }
     </div>);
    }
  });
});
