/* Thing > Intangible > Enumeration > MedicalEvidenceLevel - Level of evidence for a medical guideline. Enumerated type.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './medicalcode', './imageobject', './enumeration', './medicalguideline', './medicalstudy', './medicinesystem', './action', './organization', './property', './creativework', './class', './medicalspecialty'], function(React, MedicalCode, ImageObject, Enumeration, MedicalGuideline, MedicalStudy, MedicineSystem, Action, Organization, Property, CreativeWork, Class, MedicalSpecialty){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var code;
      if( this.props.code ){
        if( this.props.code instanceof Array ){
          code = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.code ){
            code.push( ( <MedicalCode {...this.props.code } /> ) );          }
        } else {
          code = ( <MedicalCode props={ this.props.code } /> );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var relevantSpecialty;
      if( this.props.relevantSpecialty ){
        if( this.props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.relevantSpecialty ){
            relevantSpecialty.push( ( <MedicalSpecialty {...this.props.relevantSpecialty } /> ) );          }
        } else {
          relevantSpecialty = ( <MedicalSpecialty props={ this.props.relevantSpecialty } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var guideline;
      if( this.props.guideline ){
        if( this.props.guideline instanceof Array ){
          guideline = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.guideline ){
            guideline.push( ( <MedicalGuideline {...this.props.guideline } /> ) );          }
        } else {
          guideline = ( <MedicalGuideline props={ this.props.guideline } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var supersededBy;
      if( this.props.supersededBy ){
        if( this.props.supersededBy instanceof Array ){
          supersededBy = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.supersededBy ){
            supersededBy.push( ( <div data-advice='Put your HTML here. supersededBy is a Enumeration or
Class or
Property.'></div> ) );
          }
        } else {
            supersededBy = ( <div data-advice='Put your HTML here. supersededBy is a Enumeration or
Class or
Property.'></div> );
        }
      }
      var recognizingAuthority;
      if( this.props.recognizingAuthority ){
        if( this.props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.recognizingAuthority ){
            recognizingAuthority.push( ( <Organization {...this.props.recognizingAuthority } /> ) );          }
        } else {
          recognizingAuthority = ( <Organization props={ this.props.recognizingAuthority } /> );        }
      }
      var medicineSystem;
      if( this.props.medicineSystem ){
        if( this.props.medicineSystem instanceof Array ){
          medicineSystem = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.medicineSystem ){
            medicineSystem.push( ( <MedicineSystem {...this.props.medicineSystem } /> ) );          }
        } else {
          medicineSystem = ( <MedicineSystem props={ this.props.medicineSystem } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var study;
      if( this.props.study ){
        if( this.props.study instanceof Array ){
          study = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.study ){
            study.push( ( <MedicalStudy {...this.props.study } /> ) );          }
        } else {
          study = ( <MedicalStudy props={ this.props.study } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      return (<div title='MedicalEvidenceLevel' className='MedicalEvidenceLevel entity'>
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
