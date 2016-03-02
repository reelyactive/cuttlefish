/* MedicalCode - A code for a medical entity.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class MedicalCode extends Component {
    render() {
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="MedicalCode-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="MedicalCode-description">description: {this.props.description}</p></div>);
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

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="MedicalCode-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="MedicalCode-url" href={this.props.url} target="_blank">url</a></div>);
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="MedicalCode-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="MedicalCode-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="MedicalCode-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="MedicalCode-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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

        let codeValue;
        if (this.props.codeValue) {
            if (this.props.codeValue instanceof Array) {
                codeValue = (
                   <div className='codeValue__container'>
                       <div className='codeValue__header' data-advice='HTML for the *head* of the section'>codeValues</div>
                       {this.props.codeValue.map((item, index) => {
                            return (<div className='codeValue' data-advice='Put your HTML here. codeValue is a Text.'><p className="MedicalCode-codeValue">codeValue: {this.props.codeValue}</p></div>);
                       })}
                       <div className='codeValue__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                codeValue = (<div className='codeValue' data-advice='Put your HTML here. codeValue is a Text.'><p className="MedicalCode-codeValue">codeValue: {this.props.codeValue}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MedicalCode-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MedicalCode-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let codingSystem;
        if (this.props.codingSystem) {
            if (this.props.codingSystem instanceof Array) {
                codingSystem = (
                   <div className='codingSystem__container'>
                       <div className='codingSystem__header' data-advice='HTML for the *head* of the section'>codingSystems</div>
                       {this.props.codingSystem.map((item, index) => {
                            return (<div className='codingSystem' data-advice='Put your HTML here. codingSystem is a Text.'><p className="MedicalCode-codingSystem">codingSystem: {this.props.codingSystem}</p></div>);
                       })}
                       <div className='codingSystem__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                codingSystem = (<div className='codingSystem' data-advice='Put your HTML here. codingSystem is a Text.'><p className="MedicalCode-codingSystem">codingSystem: {this.props.codingSystem}</p></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="MedicalCode-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="MedicalCode-alternateName">alternateName: {this.props.alternateName}</p></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MedicalCode-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MedicalCode-image" src={this.props.image} /></div>);
               }
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="MedicalCode-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="MedicalCode-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='MedicalCode'>
                {code}
                {description}
                {relevantSpecialty}
                {study}
                {url}
                {guideline}
                {additionalType}
                {sameAs}
                {potentialAction}
                {recognizingAuthority}
                {medicineSystem}
                {codeValue}
                {mainEntityOfPage}
                {codingSystem}
                {alternateName}
                {image}
                {name}
            </div>
        );
    }
};

MedicalCode.defaultProps = {
};

MedicalCode.propTypes = {
   code: React.PropTypes.object,
   description: React.PropTypes.object,
   relevantSpecialty: React.PropTypes.object,
   study: React.PropTypes.object,
   url: React.PropTypes.object,
   guideline: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   recognizingAuthority: React.PropTypes.object,
   medicineSystem: React.PropTypes.object,
   codeValue: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   codingSystem: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   image: React.PropTypes.object,
   name: React.PropTypes.object,
};

