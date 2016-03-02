/* MedicalStudy - A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.. Generated automatically by the reactGenerator. */
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
                            return (<MedicalStudyStatus  {...this.props.status} />);
                       })}
                       <div className='status__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                status = (<MedicalStudyStatus  {...this.props.status} />);
            }
        }

        let studySubject;
        if (this.props.studySubject) {
            if (this.props.studySubject instanceof Array) {
                studySubject = (
                   <div className='studySubject__container'>
                       <div className='studySubject__header' data-advice='HTML for the *head* of the section'>studySubjects</div>
                       {this.props.studySubject.map((item, index) => {
                            return (<MedicalEntity  {...this.props.studySubject} />);
                       })}
                       <div className='studySubject__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                studySubject = (<MedicalEntity  {...this.props.studySubject} />);
            }
        }

        let code;
        if (this.props.code) {
            if (this.props.code instanceof Array) {
                code = (
                   <div className='code__container'>
                       <div className='code__header' data-advice='HTML for the *head* of the section'>codes</div>
                       {this.props.code.map((item, index) => {
                            return (<MedicalCode  {...this.props.code} />);
                       })}
                       <div className='code__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                code = (<MedicalCode  {...this.props.code} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="MedicalStudy-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="MedicalStudy-description">description: {this.props.description}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="MedicalStudy-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="MedicalStudy-name">name: {this.props.name}</p></div>);
            }
        }

        let relevantSpecialty;
        if (this.props.relevantSpecialty) {
            if (this.props.relevantSpecialty instanceof Array) {
                relevantSpecialty = (
                   <div className='relevantSpecialty__container'>
                       <div className='relevantSpecialty__header' data-advice='HTML for the *head* of the section'>relevantSpecialtys</div>
                       {this.props.relevantSpecialty.map((item, index) => {
                            return (<MedicalSpecialty  {...this.props.relevantSpecialty} />);
                       })}
                       <div className='relevantSpecialty__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                relevantSpecialty = (<MedicalSpecialty  {...this.props.relevantSpecialty} />);
            }
        }

        let medicineSystem;
        if (this.props.medicineSystem) {
            if (this.props.medicineSystem instanceof Array) {
                medicineSystem = (
                   <div className='medicineSystem__container'>
                       <div className='medicineSystem__header' data-advice='HTML for the *head* of the section'>medicineSystems</div>
                       {this.props.medicineSystem.map((item, index) => {
                            return (<MedicineSystem  {...this.props.medicineSystem} />);
                       })}
                       <div className='medicineSystem__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                medicineSystem = (<MedicineSystem  {...this.props.medicineSystem} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="MedicalStudy-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="MedicalStudy-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let guideline;
        if (this.props.guideline) {
            if (this.props.guideline instanceof Array) {
                guideline = (
                   <div className='guideline__container'>
                       <div className='guideline__header' data-advice='HTML for the *head* of the section'>guidelines</div>
                       {this.props.guideline.map((item, index) => {
                            return (<MedicalGuideline  {...this.props.guideline} />);
                       })}
                       <div className='guideline__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                guideline = (<MedicalGuideline  {...this.props.guideline} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="MedicalStudy-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="MedicalStudy-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action  {...this.props.potentialAction} />);
                       })}
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                potentialAction = (<Action  {...this.props.potentialAction} />);
            }
        }

        let recognizingAuthority;
        if (this.props.recognizingAuthority) {
            if (this.props.recognizingAuthority instanceof Array) {
                recognizingAuthority = (
                   <div className='recognizingAuthority__container'>
                       <div className='recognizingAuthority__header' data-advice='HTML for the *head* of the section'>recognizingAuthoritys</div>
                       {this.props.recognizingAuthority.map((item, index) => {
                            return (<Organization  {...this.props.recognizingAuthority} />);
                       })}
                       <div className='recognizingAuthority__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                recognizingAuthority = (<Organization  {...this.props.recognizingAuthority} />);
            }
        }

        let sponsor;
        if (this.props.sponsor) {
            if (this.props.sponsor instanceof Array) {
                sponsor = (
                   <div className='sponsor__container'>
                       <div className='sponsor__header' data-advice='HTML for the *head* of the section'>sponsors</div>
                       {this.props.sponsor.map((item, index) => {
                            return (<Organization  {...this.props.sponsor} />);
                       })}
                       <div className='sponsor__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sponsor = (<Organization  {...this.props.sponsor} />);
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
                       })}
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let studyLocation;
        if (this.props.studyLocation) {
            if (this.props.studyLocation instanceof Array) {
                studyLocation = (
                   <div className='studyLocation__container'>
                       <div className='studyLocation__header' data-advice='HTML for the *head* of the section'>studyLocations</div>
                       {this.props.studyLocation.map((item, index) => {
                            return (<AdministrativeArea  {...this.props.studyLocation} />);
                       })}
                       <div className='studyLocation__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                studyLocation = (<AdministrativeArea  {...this.props.studyLocation} />);
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
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="MedicalStudy-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="MedicalStudy-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="MedicalStudy-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="MedicalStudy-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let outcome;
        if (this.props.outcome) {
            if (this.props.outcome instanceof Array) {
                outcome = (
                   <div className='outcome__container'>
                       <div className='outcome__header' data-advice='HTML for the *head* of the section'>outcomes</div>
                       {this.props.outcome.map((item, index) => {
                            return (<div className='outcome' data-advice='Put your HTML here. outcome is a Text.'><p className="MedicalStudy-outcome">outcome: {this.props.outcome}</p></div>);
                       })}
                       <div className='outcome__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                outcome = (<div className='outcome' data-advice='Put your HTML here. outcome is a Text.'><p className="MedicalStudy-outcome">outcome: {this.props.outcome}</p></div>);
            }
        }

        let study;
        if (this.props.study) {
            if (this.props.study instanceof Array) {
                study = (
                   <div className='study__container'>
                       <div className='study__header' data-advice='HTML for the *head* of the section'>studys</div>
                       {this.props.study.map((item, index) => {
                            return (<MedicalStudy  {...this.props.study} />);
                       })}
                       <div className='study__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                study = (<MedicalStudy  {...this.props.study} />);
            }
        }

        let population;
        if (this.props.population) {
            if (this.props.population instanceof Array) {
                population = (
                   <div className='population__container'>
                       <div className='population__header' data-advice='HTML for the *head* of the section'>populations</div>
                       {this.props.population.map((item, index) => {
                            return (<div className='population' data-advice='Put your HTML here. population is a Text.'><p className="MedicalStudy-population">population: {this.props.population}</p></div>);
                       })}
                       <div className='population__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                population = (<div className='population' data-advice='Put your HTML here. population is a Text.'><p className="MedicalStudy-population">population: {this.props.population}</p></div>);
            }
        }

        return (
            <div className='MedicalStudy'>
                {status}
                {studySubject}
                {code}
                {description}
                {name}
                {relevantSpecialty}
                {medicineSystem}
                {url}
                {guideline}
                {sameAs}
                {potentialAction}
                {recognizingAuthority}
                {sponsor}
                {image}
                {studyLocation}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {outcome}
                {study}
                {population}
            </div>
        );
    }
};

MedicalStudy.defaultProps = {
};

MedicalStudy.propTypes = {
   status: React.PropTypes.object,
   studySubject: React.PropTypes.object,
   code: React.PropTypes.object,
   description: React.PropTypes.object,
   name: React.PropTypes.object,
   relevantSpecialty: React.PropTypes.object,
   medicineSystem: React.PropTypes.object,
   url: React.PropTypes.object,
   guideline: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   recognizingAuthority: React.PropTypes.object,
   sponsor: React.PropTypes.object,
   image: React.PropTypes.object,
   studyLocation: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   outcome: React.PropTypes.object,
   study: React.PropTypes.object,
   population: React.PropTypes.object,
};

