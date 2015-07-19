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
      var study;
      if( props.study ){
        if( props.study instanceof Array ){
          study = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.study ){
            study.push( ( <MedicalStudy {...props.study } /> ) );          }
        } else {
          study = ( <MedicalStudy props={ props.study } /> );        }
      }
      var evidenceOrigin;
      if( props.evidenceOrigin ){
        if( props.evidenceOrigin instanceof Array ){
          evidenceOrigin = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.evidenceOrigin ){
            evidenceOrigin.push( ( <div data-advice='Put your HTML here. evidenceOrigin is a Text.'></div> ) );
          }
        } else {
            evidenceOrigin = ( <div data-advice='Put your HTML here. evidenceOrigin is a Text.'></div> );
        }
      }
      var guidelineSubject;
      if( props.guidelineSubject ){
        if( props.guidelineSubject instanceof Array ){
          guidelineSubject = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.guidelineSubject ){
            guidelineSubject.push( ( <MedicalEntity {...props.guidelineSubject } /> ) );          }
        } else {
          guidelineSubject = ( <MedicalEntity props={ props.guidelineSubject } /> );        }
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
      var evidenceLevel;
      if( props.evidenceLevel ){
        if( props.evidenceLevel instanceof Array ){
          evidenceLevel = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.evidenceLevel ){
            evidenceLevel.push( ( <MedicalEvidenceLevel {...props.evidenceLevel } /> ) );          }
        } else {
          evidenceLevel = ( <MedicalEvidenceLevel props={ props.evidenceLevel } /> );        }
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
      var medicineSystem;
      if( props.medicineSystem ){
        if( props.medicineSystem instanceof Array ){
          medicineSystem = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.medicineSystem ){
            medicineSystem.push( ( <MedicineSystem {...props.medicineSystem } /> ) );          }
        } else {
          medicineSystem = ( <MedicineSystem props={ props.medicineSystem } /> );        }
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
      var guidelineDate;
      if( props.guidelineDate ){
        if( props.guidelineDate instanceof Array ){
          guidelineDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.guidelineDate ){
            guidelineDate.push( ( <div data-advice='Put your HTML here. guidelineDate is a Date.'></div> ) );
          }
        } else {
            guidelineDate = ( <div data-advice='Put your HTML here. guidelineDate is a Date.'></div> );
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
