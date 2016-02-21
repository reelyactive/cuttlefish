/* MedicalStudyStatus - The status of a medical study. Enumerated type.. Generated automatically by the reactGenerator. */
import MedicalCode from './medicalcode.js';
import ImageObject from './imageobject.js';
import Enumeration from './enumeration.js';
import MedicalGuideline from './medicalguideline.js';
import MedicineSystem from './medicinesystem.js';
import CreativeWork from './creativework.js';
import Action from './action.js';
import Organization from './organization.js';
import Property from './property.js';
import MedicalStudy from './medicalstudy.js';
import Class from './class.js';
import MedicalSpecialty from './medicalspecialty.js';


import React, {
  Component
} from 'react';

export default class MedicalStudyStatus extends Component {
    render() {
        let code;
        if (this.props.code) {
            if (this.props.code instanceof Array) {
                code = (
                   <div className='code-container'>
                       <div className='code-header' data-advice='HTML for the *head* of the section'>codes</div>
                       {this.props.code.map((item, index) => {
                            return (<MedicalCode key={index} {...this.props.code} />);
                       })};
                       <div className='code-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                code = (<MedicalCode key={index} {...this.props.code} />);
            }
        }

        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction-container'>
                       <div className='potentialAction-header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let relevantSpecialty;
        if (this.props.relevantSpecialty) {
            if (this.props.relevantSpecialty instanceof Array) {
                relevantSpecialty = (
                   <div className='relevantSpecialty-container'>
                       <div className='relevantSpecialty-header' data-advice='HTML for the *head* of the section'>relevantSpecialtys</div>
                       {this.props.relevantSpecialty.map((item, index) => {
                            return (<MedicalSpecialty key={index} {...this.props.relevantSpecialty} />);
                       })};
                       <div className='relevantSpecialty-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                relevantSpecialty = (<MedicalSpecialty key={index} {...this.props.relevantSpecialty} />);
            }
        }

        let study;
        if (this.props.study) {
            if (this.props.study instanceof Array) {
                study = (
                   <div className='study-container'>
                       <div className='study-header' data-advice='HTML for the *head* of the section'>studys</div>
                       {this.props.study.map((item, index) => {
                            return (<MedicalStudy key={index} {...this.props.study} />);
                       })};
                       <div className='study-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                study = (<MedicalStudy key={index} {...this.props.study} />);
            }
        }

        let guideline;
        if (this.props.guideline) {
            if (this.props.guideline instanceof Array) {
                guideline = (
                   <div className='guideline-container'>
                       <div className='guideline-header' data-advice='HTML for the *head* of the section'>guidelines</div>
                       {this.props.guideline.map((item, index) => {
                            return (<MedicalGuideline key={index} {...this.props.guideline} />);
                       })};
                       <div className='guideline-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                guideline = (<MedicalGuideline key={index} {...this.props.guideline} />);
            }
        }

        let supersededBy;
        if (this.props.supersededBy) {
            if (this.props.supersededBy instanceof Array) {
                supersededBy = (
                   <div className='supersededBy-container'>
                       <div className='supersededBy-header' data-advice='HTML for the *head* of the section'>supersededBys</div>
                       {this.props.supersededBy.map((item, index) => {
                           if (this.props['@type'] === 'Enumeration') {
                               return (<Enumeration key={index} {...this.props.supersededBy} />);
                           }
                           else if (this.props['@type'] === 'Class') {
                               return (<Class key={index} {...this.props.supersededBy} />);
                           }
                           else if (this.props['@type'] === 'Property') {
                               return (<Property key={index} {...this.props.supersededBy} />);
                           }
                       })};
                       <div className='supersededBy-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Enumeration') {
                   supersededBy = (<Enumeration key={index} {...this.props.supersededBy} />);
               }
               else if (this.props['@type'] === 'Class') {
                   supersededBy = (<Class key={index} {...this.props.supersededBy} />);
               }
               else if (this.props['@type'] === 'Property') {
                   supersededBy = (<Property key={index} {...this.props.supersededBy} />);
               }
            }
        }

        let recognizingAuthority;
        if (this.props.recognizingAuthority) {
            if (this.props.recognizingAuthority instanceof Array) {
                recognizingAuthority = (
                   <div className='recognizingAuthority-container'>
                       <div className='recognizingAuthority-header' data-advice='HTML for the *head* of the section'>recognizingAuthoritys</div>
                       {this.props.recognizingAuthority.map((item, index) => {
                            return (<Organization key={index} {...this.props.recognizingAuthority} />);
                       })};
                       <div className='recognizingAuthority-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                recognizingAuthority = (<Organization key={index} {...this.props.recognizingAuthority} />);
            }
        }

        let medicineSystem;
        if (this.props.medicineSystem) {
            if (this.props.medicineSystem instanceof Array) {
                medicineSystem = (
                   <div className='medicineSystem-container'>
                       <div className='medicineSystem-header' data-advice='HTML for the *head* of the section'>medicineSystems</div>
                       {this.props.medicineSystem.map((item, index) => {
                            return (<MedicineSystem key={index} {...this.props.medicineSystem} />);
                       })};
                       <div className='medicineSystem-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                medicineSystem = (<MedicineSystem key={index} {...this.props.medicineSystem} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MedicalStudyStatus-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MedicalStudyStatus-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MedicalStudyStatus-image" src={this.props.image} /></div>);
                           }
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MedicalStudyStatus-image" src={this.props.image} /></div>);
               }
            }
        }

        return (
            <div className='MedicalStudyStatus'>
                {code}
                {potentialAction}
                {relevantSpecialty}
                {study}
                {guideline}
                {supersededBy}
                {recognizingAuthority}
                {medicineSystem}
                {mainEntityOfPage}
                {image}
            </div>
        );
    }
};

MedicalStudyStatus.defaultProps = {
};

MedicalStudyStatus.propTypes = {
   code: React.propTypes.object,
   potentialAction: React.propTypes.object,
   relevantSpecialty: React.propTypes.object,
   study: React.propTypes.object,
   guideline: React.propTypes.object,
   supersededBy: React.propTypes.object,
   recognizingAuthority: React.propTypes.object,
   medicineSystem: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
};

