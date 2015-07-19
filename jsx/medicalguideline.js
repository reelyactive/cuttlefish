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
          code = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          code = code.concat( props.code.map( function(result, index){
              return ( <MedicalCode {...result} key={index} /> )
           }) );
         code.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          code = ( <MedicalCode props={ props.code } /> );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          description = description.concat( props.description.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. description is a Text.'></div> )
           }) );
         description.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          name = name.concat( props.name.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. name is a Text.'></div> )
           }) );
         name.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var relevantSpecialty;
      if( props.relevantSpecialty ){
        if( props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          relevantSpecialty = relevantSpecialty.concat( props.relevantSpecialty.map( function(result, index){
              return ( <MedicalSpecialty {...result} key={index} /> )
           }) );
         relevantSpecialty.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          relevantSpecialty = ( <MedicalSpecialty props={ props.relevantSpecialty } /> );        }
      }
      var study;
      if( props.study ){
        if( props.study instanceof Array ){
          study = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          study = study.concat( props.study.map( function(result, index){
              return ( <MedicalStudy {...result} key={index} /> )
           }) );
         study.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          study = ( <MedicalStudy props={ props.study } /> );        }
      }
      var evidenceOrigin;
      if( props.evidenceOrigin ){
        if( props.evidenceOrigin instanceof Array ){
          evidenceOrigin = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          evidenceOrigin = evidenceOrigin.concat( props.evidenceOrigin.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. evidenceOrigin is a Text.'></div> )
           }) );
         evidenceOrigin.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            evidenceOrigin = ( <div data-advice='Put your HTML here. evidenceOrigin is a Text.'></div> );
        }
      }
      var guidelineSubject;
      if( props.guidelineSubject ){
        if( props.guidelineSubject instanceof Array ){
          guidelineSubject = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          guidelineSubject = guidelineSubject.concat( props.guidelineSubject.map( function(result, index){
              return ( <MedicalEntity {...result} key={index} /> )
           }) );
         guidelineSubject.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          guidelineSubject = ( <MedicalEntity props={ props.guidelineSubject } /> );        }
      }
      var guideline;
      if( props.guideline ){
        if( props.guideline instanceof Array ){
          guideline = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          guideline = guideline.concat( props.guideline.map( function(result, index){
              return ( <MedicalGuideline {...result} key={index} /> )
           }) );
         guideline.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          guideline = ( <MedicalGuideline props={ props.guideline } /> );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          url = url.concat( props.url.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. url is a URL.'></div> )
           }) );
         url.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sameAs is a URL.'></div> )
           }) );
         sameAs.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var evidenceLevel;
      if( props.evidenceLevel ){
        if( props.evidenceLevel instanceof Array ){
          evidenceLevel = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          evidenceLevel = evidenceLevel.concat( props.evidenceLevel.map( function(result, index){
              return ( <MedicalEvidenceLevel {...result} key={index} /> )
           }) );
         evidenceLevel.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          evidenceLevel = ( <MedicalEvidenceLevel props={ props.evidenceLevel } /> );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( <Action {...result} key={index} /> )
           }) );
         potentialAction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var recognizingAuthority;
      if( props.recognizingAuthority ){
        if( props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          recognizingAuthority = recognizingAuthority.concat( props.recognizingAuthority.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         recognizingAuthority.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          recognizingAuthority = ( <Organization props={ props.recognizingAuthority } /> );        }
      }
      var medicineSystem;
      if( props.medicineSystem ){
        if( props.medicineSystem instanceof Array ){
          medicineSystem = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          medicineSystem = medicineSystem.concat( props.medicineSystem.map( function(result, index){
              return ( <MedicineSystem {...result} key={index} /> )
           }) );
         medicineSystem.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          medicineSystem = ( <MedicineSystem props={ props.medicineSystem } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. additionalType is a URL.'></div> )
           }) );
         additionalType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alternateName is a Text.'></div> )
           }) );
         alternateName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          image = image.concat( props.image.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> )
           }) );
         image.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var guidelineDate;
      if( props.guidelineDate ){
        if( props.guidelineDate instanceof Array ){
          guidelineDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          guidelineDate = guidelineDate.concat( props.guidelineDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. guidelineDate is a Date.'></div> )
           }) );
         guidelineDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
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
