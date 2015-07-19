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
          status = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          status = status.concat( props.status.map( function(result, index){
              return ( <MedicalStudyStatus {...result} key={index} /> )
           }) );
         status.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          status = ( <MedicalStudyStatus props={ props.status } /> );        }
      }
      var studySubject;
      if( props.studySubject ){
        if( props.studySubject instanceof Array ){
          studySubject = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          studySubject = studySubject.concat( props.studySubject.map( function(result, index){
              return ( <MedicalEntity {...result} key={index} /> )
           }) );
         studySubject.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          studySubject = ( <MedicalEntity props={ props.studySubject } /> );        }
      }
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
      var sponsor;
      if( props.sponsor ){
        if( props.sponsor instanceof Array ){
          sponsor = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sponsor = sponsor.concat( props.sponsor.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         sponsor.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          sponsor = ( <Organization props={ props.sponsor } /> );        }
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
      var studyLocation;
      if( props.studyLocation ){
        if( props.studyLocation instanceof Array ){
          studyLocation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          studyLocation = studyLocation.concat( props.studyLocation.map( function(result, index){
              return ( <AdministrativeArea {...result} key={index} /> )
           }) );
         studyLocation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          studyLocation = ( <AdministrativeArea props={ props.studyLocation } /> );        }
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
      var outcome;
      if( props.outcome ){
        if( props.outcome instanceof Array ){
          outcome = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          outcome = outcome.concat( props.outcome.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. outcome is a Text.'></div> )
           }) );
         outcome.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            outcome = ( <div data-advice='Put your HTML here. outcome is a Text.'></div> );
        }
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
      var population;
      if( props.population ){
        if( props.population instanceof Array ){
          population = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          population = population.concat( props.population.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. population is a Text.'></div> )
           }) );
         population.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
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
