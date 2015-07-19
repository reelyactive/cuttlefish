/* Thing > Intangible > Enumeration > Specialty > MedicalSpecialty - Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.. Generated automatically by the reactGenerator. */
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
          code = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.code ){
            code.push( ( <MedicalCode {...props.code } /> ) );          }
        } else {
          code = ( <MedicalCode props={ props.code } /> );        }
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
      var relevantSpecialty;
      if( props.relevantSpecialty ){
        if( props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.relevantSpecialty ){
            relevantSpecialty.push( ( <MedicalSpecialty {...props.relevantSpecialty } /> ) );          }
        } else {
          relevantSpecialty = ( <MedicalSpecialty props={ props.relevantSpecialty } /> );        }
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
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.supersededBy ){
            supersededBy.push( ( <div data-advice='Put your HTML here. supersededBy is a Property or
Enumeration or
Class.'></div> ) );
          }
        } else {
            supersededBy = ( <div data-advice='Put your HTML here. supersededBy is a Property or
Enumeration or
Class.'></div> );
        }
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
      var study;
      if( props.study ){
        if( props.study instanceof Array ){
          study = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.study ){
            study.push( ( <MedicalStudy {...props.study } /> ) );          }
        } else {
          study = ( <MedicalStudy props={ props.study } /> );        }
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
      return (<div title='MedicalSpecialty' className='MedicalSpecialty entity'>
        { code }
        { potentialAction }
        { description }
        { relevantSpecialty }
        { sameAs }
        { image }
        { guideline }
        { url }
        { supersededBy }
        { recognizingAuthority }
        { medicineSystem }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { study }
        { name }
     </div>);
    }
  });
});
