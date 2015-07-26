/* Thing > MedicalEntity > MedicalGuideline - Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.. Generated automatically by the reactGenerator. */  var MedicalGuideline= React.createClass({displayName: "MedicalGuideline",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
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
      var evidenceOrigin;
      if( props.evidenceOrigin ){
        if( props.evidenceOrigin instanceof Array ){
          evidenceOrigin = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          evidenceOrigin = evidenceOrigin.concat( props.evidenceOrigin.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. evidenceOrigin is a Text."}) )
           }) );
         evidenceOrigin.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            evidenceOrigin = ( React.createElement("div", {"data-advice": "Put your HTML here. evidenceOrigin is a Text."}) );
        }
      }
      var guidelineSubject;
      if( props.guidelineSubject ){
        if( props.guidelineSubject instanceof Array ){
          guidelineSubject = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          guidelineSubject = guidelineSubject.concat( props.guidelineSubject.map( function(result, index){
              return ( React.createElement(MedicalEntity, React.__spread({},  result, {key: index})) )
           }) );
         guidelineSubject.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          guidelineSubject = ( React.createElement(MedicalEntity, {props:  props.guidelineSubject}) );        }
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
      var evidenceLevel;
      if( props.evidenceLevel ){
        if( props.evidenceLevel instanceof Array ){
          evidenceLevel = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          evidenceLevel = evidenceLevel.concat( props.evidenceLevel.map( function(result, index){
              return ( React.createElement(MedicalEvidenceLevel, React.__spread({},  result, {key: index})) )
           }) );
         evidenceLevel.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          evidenceLevel = ( React.createElement(MedicalEvidenceLevel, {props:  props.evidenceLevel}) );        }
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
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
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
      var guidelineDate;
      if( props.guidelineDate ){
        if( props.guidelineDate instanceof Array ){
          guidelineDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          guidelineDate = guidelineDate.concat( props.guidelineDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. guidelineDate is a Date."}) )
           }) );
         guidelineDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
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
