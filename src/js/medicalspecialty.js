/* Thing > Intangible > Enumeration > MedicalSpecialty - Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './medicalcode', './imageobject', './enumeration', './medicalguideline', './medicalstudy', './medicinesystem', './action', './organization', './property', './creativework', './class', './medicalspecialty'], function(React, MedicalCode, ImageObject, Enumeration, MedicalGuideline, MedicalStudy, MedicineSystem, Action, Organization, Property, CreativeWork, Class, MedicalSpecialty){
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
          code = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          code = code.concat( props.code.map( function(result, index){
              return ( React.createElement(MedicalCode, React.__spread({},  result, {key: index})) )
           }) );
         code.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          code = ( React.createElement(MedicalCode, {props:  props.code}) );        }
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
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          supersededBy = supersededBy.concat( props.supersededBy.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. supersededBy is a Enumeration or" + ' ' +
"Class or" + ' ' +
"Property."}) )
           }) );
         supersededBy.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            supersededBy = ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Enumeration or" + ' ' +
"Class or" + ' ' +
"Property."}) );
        }
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
      return (React.createElement("div", {title: "MedicalSpecialty", className: "MedicalSpecialty entity"}, 
         code, 
         potentialAction, 
         description, 
         relevantSpecialty, 
         sameAs, 
         image, 
         guideline, 
         url, 
         supersededBy, 
         recognizingAuthority, 
         medicineSystem, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         study, 
         name 
     ));
    }
  });
});
