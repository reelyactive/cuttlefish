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
          status = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          status = status.concat( props.status.map( function(result, index){
              return ( React.createElement(MedicalStudyStatus, React.__spread({},  result, {key: index})) )
           }) );
         status.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          status = ( React.createElement(MedicalStudyStatus, {props:  props.status}) );        }
      }
      var studySubject;
      if( props.studySubject ){
        if( props.studySubject instanceof Array ){
          studySubject = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          studySubject = studySubject.concat( props.studySubject.map( function(result, index){
              return ( React.createElement(MedicalEntity, React.__spread({},  result, {key: index})) )
           }) );
         studySubject.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          studySubject = ( React.createElement(MedicalEntity, {props:  props.studySubject}) );        }
      }
      var code;
      if( props.code ){
        if( props.code instanceof Array ){
          code = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          code = code.concat( props.code.map( function(result, index){
              return ( React.createElement(MedicalCode, React.__spread({},  result, {key: index})) )
           }) );
         code.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          code = ( React.createElement(MedicalCode, {props:  props.code}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var relevantSpecialty;
      if( props.relevantSpecialty ){
        if( props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          relevantSpecialty = relevantSpecialty.concat( props.relevantSpecialty.map( function(result, index){
              return ( React.createElement(MedicalSpecialty, React.__spread({},  result, {key: index})) )
           }) );
         relevantSpecialty.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          relevantSpecialty = ( React.createElement(MedicalSpecialty, {props:  props.relevantSpecialty}) );        }
      }
      var medicineSystem;
      if( props.medicineSystem ){
        if( props.medicineSystem instanceof Array ){
          medicineSystem = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          medicineSystem = medicineSystem.concat( props.medicineSystem.map( function(result, index){
              return ( React.createElement(MedicineSystem, React.__spread({},  result, {key: index})) )
           }) );
         medicineSystem.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          medicineSystem = ( React.createElement(MedicineSystem, {props:  props.medicineSystem}) );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var guideline;
      if( props.guideline ){
        if( props.guideline instanceof Array ){
          guideline = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          guideline = guideline.concat( props.guideline.map( function(result, index){
              return ( React.createElement(MedicalGuideline, React.__spread({},  result, {key: index})) )
           }) );
         guideline.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          guideline = ( React.createElement(MedicalGuideline, {props:  props.guideline}) );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var recognizingAuthority;
      if( props.recognizingAuthority ){
        if( props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          recognizingAuthority = recognizingAuthority.concat( props.recognizingAuthority.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         recognizingAuthority.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          recognizingAuthority = ( React.createElement(Organization, {props:  props.recognizingAuthority}) );        }
      }
      var sponsor;
      if( props.sponsor ){
        if( props.sponsor instanceof Array ){
          sponsor = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sponsor = sponsor.concat( props.sponsor.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         sponsor.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          sponsor = ( React.createElement(Organization, {props:  props.sponsor}) );        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var studyLocation;
      if( props.studyLocation ){
        if( props.studyLocation instanceof Array ){
          studyLocation = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          studyLocation = studyLocation.concat( props.studyLocation.map( function(result, index){
              return ( React.createElement(AdministrativeArea, React.__spread({},  result, {key: index})) )
           }) );
         studyLocation.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          studyLocation = ( React.createElement(AdministrativeArea, {props:  props.studyLocation}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var outcome;
      if( props.outcome ){
        if( props.outcome instanceof Array ){
          outcome = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          outcome = outcome.concat( props.outcome.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. outcome is a Text."}) )
           }) );
         outcome.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            outcome = ( React.createElement("div", {"data-advice": "Put your HTML here. outcome is a Text."}) );
        }
      }
      var study;
      if( props.study ){
        if( props.study instanceof Array ){
          study = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          study = study.concat( props.study.map( function(result, index){
              return ( React.createElement(MedicalStudy, React.__spread({},  result, {key: index})) )
           }) );
         study.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          study = ( React.createElement(MedicalStudy, {props:  props.study}) );        }
      }
      var population;
      if( props.population ){
        if( props.population instanceof Array ){
          population = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          population = population.concat( props.population.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. population is a Text."}) )
           }) );
         population.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
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
