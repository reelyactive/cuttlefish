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
          status = [(<p>status:</p> )];
          for( i in this.props.status ){
            status.push( ( <MedicalStudyStatus props={ this.props.status } /> ) );          }
        } else {
          status = ( <MedicalStudyStatus props={ this.props.status } /> );        }
      }
      var studySubject;
      if( this.props.studySubject ){
        if( this.props.studySubject instanceof Array ){
          studySubject = [(<p>studySubject:</p> )];
          for( i in this.props.studySubject ){
            studySubject.push( ( <MedicalEntity props={ this.props.studySubject } /> ) );          }
        } else {
          studySubject = ( <MedicalEntity props={ this.props.studySubject } /> );        }
      }
      var code;
      if( this.props.code ){
        if( this.props.code instanceof Array ){
          code = [(<p>code:</p> )];
          for( i in this.props.code ){
            code.push( ( <MedicalCode props={ this.props.code } /> ) );          }
        } else {
          code = ( <MedicalCode props={ this.props.code } /> );        }
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
      var relevantSpecialty;
      if( this.props.relevantSpecialty ){
        if( this.props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [(<p>relevantSpecialty:</p> )];
          for( i in this.props.relevantSpecialty ){
            relevantSpecialty.push( ( <MedicalSpecialty props={ this.props.relevantSpecialty } /> ) );          }
        } else {
          relevantSpecialty = ( <MedicalSpecialty props={ this.props.relevantSpecialty } /> );        }
      }
      var medicineSystem;
      if( this.props.medicineSystem ){
        if( this.props.medicineSystem instanceof Array ){
          medicineSystem = [(<p>medicineSystem:</p> )];
          for( i in this.props.medicineSystem ){
            medicineSystem.push( ( <MedicineSystem props={ this.props.medicineSystem } /> ) );          }
        } else {
          medicineSystem = ( <MedicineSystem props={ this.props.medicineSystem } /> );        }
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
      var guideline;
      if( this.props.guideline ){
        if( this.props.guideline instanceof Array ){
          guideline = [(<p>guideline:</p> )];
          for( i in this.props.guideline ){
            guideline.push( ( <MedicalGuideline props={ this.props.guideline } /> ) );          }
        } else {
          guideline = ( <MedicalGuideline props={ this.props.guideline } /> );        }
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
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var recognizingAuthority;
      if( this.props.recognizingAuthority ){
        if( this.props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [(<p>recognizingAuthority:</p> )];
          for( i in this.props.recognizingAuthority ){
            recognizingAuthority.push( ( <Organization props={ this.props.recognizingAuthority } /> ) );          }
        } else {
          recognizingAuthority = ( <Organization props={ this.props.recognizingAuthority } /> );        }
      }
      var sponsor;
      if( this.props.sponsor ){
        if( this.props.sponsor instanceof Array ){
          sponsor = [(<p>sponsor:</p> )];
          for( i in this.props.sponsor ){
            sponsor.push( ( <Organization props={ this.props.sponsor } /> ) );          }
        } else {
          sponsor = ( <Organization props={ this.props.sponsor } /> );        }
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
      var studyLocation;
      if( this.props.studyLocation ){
        if( this.props.studyLocation instanceof Array ){
          studyLocation = [(<p>studyLocation:</p> )];
          for( i in this.props.studyLocation ){
            studyLocation.push( ( <AdministrativeArea props={ this.props.studyLocation } /> ) );          }
        } else {
          studyLocation = ( <AdministrativeArea props={ this.props.studyLocation } /> );        }
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
      var outcome;
      if( this.props.outcome ){
        if( this.props.outcome instanceof Array ){
          outcome = [(<p>outcome:</p> )];
          for( i in this.props.outcome ){
            outcome.push( ( <div class='outcome'></div> ) );
          }
        } else {
          outcome = ( <div class='outcome'>{this.props.outcome}</div> );
        }
      }
      var study;
      if( this.props.study ){
        if( this.props.study instanceof Array ){
          study = [(<p>study:</p> )];
          for( i in this.props.study ){
            study.push( ( <MedicalStudy props={ this.props.study } /> ) );          }
        } else {
          study = ( <MedicalStudy props={ this.props.study } /> );        }
      }
      var population;
      if( this.props.population ){
        if( this.props.population instanceof Array ){
          population = [(<p>population:</p> )];
          for( i in this.props.population ){
            population.push( ( <div class='population'></div> ) );
          }
        } else {
          population = ( <div class='population'>{this.props.population}</div> );
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
