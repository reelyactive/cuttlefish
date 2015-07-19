/* Thing > MedicalEntity > MedicalGuideline - Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './medicalcode', './medicalentity', './imageobject', './medicalevidencelevel', './medicinesystem', './creativework', './action', './organization', './medicalstudy', './medicalguideline', './medicalspecialty'], function(React, MedicalCode, MedicalEntity, ImageObject, MedicalEvidenceLevel, MedicineSystem, CreativeWork, Action, Organization, MedicalStudy, MedicalGuideline, MedicalSpecialty){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
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
      var study;
      if( this.props.study ){
        if( this.props.study instanceof Array ){
          study = [(<p>study:</p> )];
          for( i in this.props.study ){
            study.push( ( <MedicalStudy props={ this.props.study } /> ) );          }
        } else {
          study = ( <MedicalStudy props={ this.props.study } /> );        }
      }
      var evidenceOrigin;
      if( this.props.evidenceOrigin ){
        if( this.props.evidenceOrigin instanceof Array ){
          evidenceOrigin = [(<p>evidenceOrigin:</p> )];
          for( i in this.props.evidenceOrigin ){
            evidenceOrigin.push( ( <div class='evidenceOrigin'></div> ) );
          }
        } else {
          evidenceOrigin = ( <div class='evidenceOrigin'>{this.props.evidenceOrigin}</div> );
        }
      }
      var guidelineSubject;
      if( this.props.guidelineSubject ){
        if( this.props.guidelineSubject instanceof Array ){
          guidelineSubject = [(<p>guidelineSubject:</p> )];
          for( i in this.props.guidelineSubject ){
            guidelineSubject.push( ( <MedicalEntity props={ this.props.guidelineSubject } /> ) );          }
        } else {
          guidelineSubject = ( <MedicalEntity props={ this.props.guidelineSubject } /> );        }
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
      var evidenceLevel;
      if( this.props.evidenceLevel ){
        if( this.props.evidenceLevel instanceof Array ){
          evidenceLevel = [(<p>evidenceLevel:</p> )];
          for( i in this.props.evidenceLevel ){
            evidenceLevel.push( ( <MedicalEvidenceLevel props={ this.props.evidenceLevel } /> ) );          }
        } else {
          evidenceLevel = ( <MedicalEvidenceLevel props={ this.props.evidenceLevel } /> );        }
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
      var medicineSystem;
      if( this.props.medicineSystem ){
        if( this.props.medicineSystem instanceof Array ){
          medicineSystem = [(<p>medicineSystem:</p> )];
          for( i in this.props.medicineSystem ){
            medicineSystem.push( ( <MedicineSystem props={ this.props.medicineSystem } /> ) );          }
        } else {
          medicineSystem = ( <MedicineSystem props={ this.props.medicineSystem } /> );        }
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
      var guidelineDate;
      if( this.props.guidelineDate ){
        if( this.props.guidelineDate instanceof Array ){
          guidelineDate = [(<p>guidelineDate:</p> )];
          for( i in this.props.guidelineDate ){
            guidelineDate.push( ( <div class='guidelineDate'></div> ) );
          }
        } else {
          guidelineDate = ( <div class='guidelineDate'>{this.props.guidelineDate}</div> );
        }
      }
      return (<div title='MedicalGuideline' className='MedicalGuideline entity'>
        { code }
        { description }
        { name }
        { relevantSpecialty }
        { study }
        { evidenceOrigin }
        { guidelineSubject }
        { guideline }
        { url }
        { sameAs }
        { evidenceLevel }
        { potentialAction }
        { recognizingAuthority }
        { medicineSystem }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { image }
        { guidelineDate }
     </div>);
    }
  });
});
