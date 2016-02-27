/* MedicalStudy - A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.. Generated automatically by the reactGenerator. */
import MedicalStudyStatus from './medicalstudystatus.js';
import MedicalCode from './medicalcode.js';
import MedicalEntity from './medicalentity.js';
import ImageObject from './imageobject.js';
import AdministrativeArea from './administrativearea.js';
import MedicineSystem from './medicinesystem.js';
import CreativeWork from './creativework.js';
import Action from './action.js';
import Organization from './organization.js';
import MedicalGuideline from './medicalguideline.js';
import MedicalSpecialty from './medicalspecialty.js';


import React, {
  Component
} from 'react';

export default class MedicalStudy extends Component {
    render() {
        let status;
        if (this.props.status) {
            if (this.props.status instanceof Array) {
                status = (
                   <div className='status__container'>
                       <div className='status__header' data-advice='HTML for the *head* of the section'>statuss</div>
                       {this.props.status.map((item, index) => {
                            return (<MedicalStudyStatus key={index} {...this.props.status} />);
                       })};
                       <div className='status__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                status = (<MedicalStudyStatus key={index} {...this.props.status} />);
            }
        }

        let studySubject;
        if (this.props.studySubject) {
            if (this.props.studySubject instanceof Array) {
                studySubject = (
                   <div className='studySubject__container'>
                       <div className='studySubject__header' data-advice='HTML for the *head* of the section'>studySubjects</div>
                       {this.props.studySubject.map((item, index) => {
                            return (<MedicalEntity key={index} {...this.props.studySubject} />);
                       })};
                       <div className='studySubject__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                studySubject = (<MedicalEntity key={index} {...this.props.studySubject} />);
            }
        }

        let code;
        if (this.props.code) {
            if (this.props.code instanceof Array) {
                code = (
                   <div className='code__container'>
                       <div className='code__header' data-advice='HTML for the *head* of the section'>codes</div>
                       {this.props.code.map((item, index) => {
                            return (<MedicalCode key={index} {...this.props.code} />);
                       })};
                       <div className='code__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                code = (<MedicalCode key={index} {...this.props.code} />);
            }
        }

        let relevantSpecialty;
        if (this.props.relevantSpecialty) {
            if (this.props.relevantSpecialty instanceof Array) {
                relevantSpecialty = (
                   <div className='relevantSpecialty__container'>
                       <div className='relevantSpecialty__header' data-advice='HTML for the *head* of the section'>relevantSpecialtys</div>
                       {this.props.relevantSpecialty.map((item, index) => {
                            return (<MedicalSpecialty key={index} {...this.props.relevantSpecialty} />);
                       })};
                       <div className='relevantSpecialty__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='study__container'>
                       <div className='study__header' data-advice='HTML for the *head* of the section'>studys</div>
                       {this.props.study.map((item, index) => {
                            return (<MedicalStudy key={index} {...this.props.study} />);
                       })};
                       <div className='study__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='guideline__container'>
                       <div className='guideline__header' data-advice='HTML for the *head* of the section'>guidelines</div>
                       {this.props.guideline.map((item, index) => {
                            return (<MedicalGuideline key={index} {...this.props.guideline} />);
                       })};
                       <div className='guideline__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                guideline = (<MedicalGuideline key={index} {...this.props.guideline} />);
            }
        }

        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let recognizingAuthority;
        if (this.props.recognizingAuthority) {
            if (this.props.recognizingAuthority instanceof Array) {
                recognizingAuthority = (
                   <div className='recognizingAuthority__container'>
                       <div className='recognizingAuthority__header' data-advice='HTML for the *head* of the section'>recognizingAuthoritys</div>
                       {this.props.recognizingAuthority.map((item, index) => {
                            return (<Organization key={index} {...this.props.recognizingAuthority} />);
                       })};
                       <div className='recognizingAuthority__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                recognizingAuthority = (<Organization key={index} {...this.props.recognizingAuthority} />);
            }
        }

        let sponsor;
        if (this.props.sponsor) {
            if (this.props.sponsor instanceof Array) {
                sponsor = (
                   <div className='sponsor__container'>
                       <div className='sponsor__header' data-advice='HTML for the *head* of the section'>sponsors</div>
                       {this.props.sponsor.map((item, index) => {
                            return (<Organization key={index} {...this.props.sponsor} />);
                       })};
                       <div className='sponsor__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sponsor = (<Organization key={index} {...this.props.sponsor} />);
            }
        }

        let studyLocation;
        if (this.props.studyLocation) {
            if (this.props.studyLocation instanceof Array) {
                studyLocation = (
                   <div className='studyLocation__container'>
                       <div className='studyLocation__header' data-advice='HTML for the *head* of the section'>studyLocations</div>
                       {this.props.studyLocation.map((item, index) => {
                            return (<AdministrativeArea key={index} {...this.props.studyLocation} />);
                       })};
                       <div className='studyLocation__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                studyLocation = (<AdministrativeArea key={index} {...this.props.studyLocation} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MedicalStudy-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MedicalStudy-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MedicalStudy-image" src={this.props.image} /></div>);
                           }
                       })};
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MedicalStudy-image" src={this.props.image} /></div>);
               }
            }
        }

        let medicineSystem;
        if (this.props.medicineSystem) {
            if (this.props.medicineSystem instanceof Array) {
                medicineSystem = (
                   <div className='medicineSystem__container'>
                       <div className='medicineSystem__header' data-advice='HTML for the *head* of the section'>medicineSystems</div>
                       {this.props.medicineSystem.map((item, index) => {
                            return (<MedicineSystem key={index} {...this.props.medicineSystem} />);
                       })};
                       <div className='medicineSystem__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                medicineSystem = (<MedicineSystem key={index} {...this.props.medicineSystem} />);
            }
        }

        return (
            <div className='MedicalStudy'>
                {status}
                {studySubject}
                {code}
                {relevantSpecialty}
                {study}
                {guideline}
                {potentialAction}
                {recognizingAuthority}
                {sponsor}
                {studyLocation}
                {mainEntityOfPage}
                {image}
                {medicineSystem}
            </div>
        );
    }
};

MedicalStudy.defaultProps = {
};

MedicalStudy.propTypes = {
   status: React.propTypes.object,
   studySubject: React.propTypes.object,
   code: React.propTypes.object,
   relevantSpecialty: React.propTypes.object,
   study: React.propTypes.object,
   guideline: React.propTypes.object,
   potentialAction: React.propTypes.object,
   recognizingAuthority: React.propTypes.object,
   sponsor: React.propTypes.object,
   studyLocation: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   medicineSystem: React.propTypes.object,
};

