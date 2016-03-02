/* EducationalOrganization - An educational organization.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class EducationalOrganization extends Component {
    render() {
        let founder;
        if (this.props.founder) {
            if (this.props.founder instanceof Array) {
                founder = (
                   <div className='founder__container'>
                       <div className='founder__header' data-advice='HTML for the *head* of the section'>founders</div>
                       {this.props.founder.map((item, index) => {
                            return (<Person  {...this.props.founder} />);
                       })}
                       <div className='founder__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                founder = (<Person  {...this.props.founder} />);
            }
        }

        let parentOrganization;
        if (this.props.parentOrganization) {
            if (this.props.parentOrganization instanceof Array) {
                parentOrganization = (
                   <div className='parentOrganization__container'>
                       <div className='parentOrganization__header' data-advice='HTML for the *head* of the section'>parentOrganizations</div>
                       {this.props.parentOrganization.map((item, index) => {
                            return (<Organization  {...this.props.parentOrganization} />);
                       })}
                       <div className='parentOrganization__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                parentOrganization = (<Organization  {...this.props.parentOrganization} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="EducationalOrganization-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="EducationalOrganization-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EducationalOrganization-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EducationalOrganization-image" src={this.props.image} /></div>);
               }
            }
        }

        let foundingDate;
        if (this.props.foundingDate) {
            if (this.props.foundingDate instanceof Array) {
                foundingDate = (
                   <div className='foundingDate__container'>
                       <div className='foundingDate__header' data-advice='HTML for the *head* of the section'>foundingDates</div>
                       {this.props.foundingDate.map((item, index) => {
                            return (<div className='foundingDate' data-advice='Put your HTML here. foundingDate is a Date.'><time className="EducationalOrganization-foundingDate">foundingDate: {this.props.foundingDate}</time></div>);
                       })}
                       <div className='foundingDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                foundingDate = (<div className='foundingDate' data-advice='Put your HTML here. foundingDate is a Date.'><time className="EducationalOrganization-foundingDate">foundingDate: {this.props.foundingDate}</time></div>);
            }
        }

        let telephone;
        if (this.props.telephone) {
            if (this.props.telephone instanceof Array) {
                telephone = (
                   <div className='telephone__container'>
                       <div className='telephone__header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                            return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="EducationalOrganization-telephone">telephone: {this.props.telephone}</p></div>);
                       })}
                       <div className='telephone__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                telephone = (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="EducationalOrganization-telephone">telephone: {this.props.telephone}</p></div>);
            }
        }

        let faxNumber;
        if (this.props.faxNumber) {
            if (this.props.faxNumber instanceof Array) {
                faxNumber = (
                   <div className='faxNumber__container'>
                       <div className='faxNumber__header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                            return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="EducationalOrganization-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })}
                       <div className='faxNumber__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                faxNumber = (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="EducationalOrganization-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating  {...this.props.aggregateRating} />);
                       })}
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating  {...this.props.aggregateRating} />);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="EducationalOrganization-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="EducationalOrganization-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let hasOfferCatalog;
        if (this.props.hasOfferCatalog) {
            if (this.props.hasOfferCatalog instanceof Array) {
                hasOfferCatalog = (
                   <div className='hasOfferCatalog__container'>
                       <div className='hasOfferCatalog__header' data-advice='HTML for the *head* of the section'>hasOfferCatalogs</div>
                       {this.props.hasOfferCatalog.map((item, index) => {
                            return (<OfferCatalog  {...this.props.hasOfferCatalog} />);
                       })}
                       <div className='hasOfferCatalog__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                hasOfferCatalog = (<OfferCatalog  {...this.props.hasOfferCatalog} />);
            }
        }

        let logo;
        if (this.props.logo) {
            if (this.props.logo instanceof Array) {
                logo = (
                   <div className='logo__container'>
                       <div className='logo__header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="EducationalOrganization-logo" href={this.props.logo} target="_blank">logo</a></div>);
                           }
                           else if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.logo} />);
                           }
                       })}
                       <div className='logo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   logo = (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="EducationalOrganization-logo" href={this.props.logo} target="_blank">logo</a></div>);
               }
               else if (this.props['@type'] === 'ImageObject') {
                   logo = (<ImageObject key={index} {...this.props.logo} />);
               }
            }
        }

        let event;
        if (this.props.event) {
            if (this.props.event instanceof Array) {
                event = (
                   <div className='event__container'>
                       <div className='event__header' data-advice='HTML for the *head* of the section'>events</div>
                       {this.props.event.map((item, index) => {
                            return (<Event  {...this.props.event} />);
                       })}
                       <div className='event__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                event = (<Event  {...this.props.event} />);
            }
        }

        let isicV4;
        if (this.props.isicV4) {
            if (this.props.isicV4 instanceof Array) {
                isicV4 = (
                   <div className='isicV4__container'>
                       <div className='isicV4__header' data-advice='HTML for the *head* of the section'>isicV4s</div>
                       {this.props.isicV4.map((item, index) => {
                            return (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="EducationalOrganization-isicV4">isicV4: {this.props.isicV4}</p></div>);
                       })}
                       <div className='isicV4__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isicV4 = (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="EducationalOrganization-isicV4">isicV4: {this.props.isicV4}</p></div>);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review  {...this.props.review} />);
                       })}
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                review = (<Review  {...this.props.review} />);
            }
        }

        let taxID;
        if (this.props.taxID) {
            if (this.props.taxID instanceof Array) {
                taxID = (
                   <div className='taxID__container'>
                       <div className='taxID__header' data-advice='HTML for the *head* of the section'>taxIDs</div>
                       {this.props.taxID.map((item, index) => {
                            return (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="EducationalOrganization-taxID">taxID: {this.props.taxID}</p></div>);
                       })}
                       <div className='taxID__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                taxID = (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="EducationalOrganization-taxID">taxID: {this.props.taxID}</p></div>);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="EducationalOrganization-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="EducationalOrganization-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let member;
        if (this.props.member) {
            if (this.props.member instanceof Array) {
                member = (
                   <div className='member__container'>
                       <div className='member__header' data-advice='HTML for the *head* of the section'>members</div>
                       {this.props.member.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.member} />);
                           }
                           else if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.member} />);
                           }
                       })}
                       <div className='member__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   member = (<Organization key={index} {...this.props.member} />);
               }
               else if (this.props['@type'] === 'Person') {
                   member = (<Person key={index} {...this.props.member} />);
               }
            }
        }

        let foundingLocation;
        if (this.props.foundingLocation) {
            if (this.props.foundingLocation instanceof Array) {
                foundingLocation = (
                   <div className='foundingLocation__container'>
                       <div className='foundingLocation__header' data-advice='HTML for the *head* of the section'>foundingLocations</div>
                       {this.props.foundingLocation.map((item, index) => {
                            return (<Place  {...this.props.foundingLocation} />);
                       })}
                       <div className='foundingLocation__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                foundingLocation = (<Place  {...this.props.foundingLocation} />);
            }
        }

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location__container'>
                       <div className='location__header' data-advice='HTML for the *head* of the section'>locations</div>
                       {this.props.location.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.location} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="EducationalOrganization-location">location: {this.props.location}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.location} />);
                           }
                       })}
                       <div className='location__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   location = (<Place key={index} {...this.props.location} />);
               }
               else if (this.props['@type'] === 'Text') {
                   location = (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="EducationalOrganization-location">location: {this.props.location}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   location = (<PostalAddress key={index} {...this.props.location} />);
               }
            }
        }

        let employee;
        if (this.props.employee) {
            if (this.props.employee instanceof Array) {
                employee = (
                   <div className='employee__container'>
                       <div className='employee__header' data-advice='HTML for the *head* of the section'>employees</div>
                       {this.props.employee.map((item, index) => {
                            return (<Person  {...this.props.employee} />);
                       })}
                       <div className='employee__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                employee = (<Person  {...this.props.employee} />);
            }
        }

        let email;
        if (this.props.email) {
            if (this.props.email instanceof Array) {
                email = (
                   <div className='email__container'>
                       <div className='email__header' data-advice='HTML for the *head* of the section'>emails</div>
                       {this.props.email.map((item, index) => {
                            return (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="EducationalOrganization-email">email: {this.props.email}</p></div>);
                       })}
                       <div className='email__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                email = (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="EducationalOrganization-email">email: {this.props.email}</p></div>);
            }
        }

        let seeks;
        if (this.props.seeks) {
            if (this.props.seeks instanceof Array) {
                seeks = (
                   <div className='seeks__container'>
                       <div className='seeks__header' data-advice='HTML for the *head* of the section'>seekss</div>
                       {this.props.seeks.map((item, index) => {
                            return (<Demand  {...this.props.seeks} />);
                       })}
                       <div className='seeks__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                seeks = (<Demand  {...this.props.seeks} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="EducationalOrganization-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="EducationalOrganization-description">description: {this.props.description}</p></div>);
            }
        }

        let numberOfEmployees;
        if (this.props.numberOfEmployees) {
            if (this.props.numberOfEmployees instanceof Array) {
                numberOfEmployees = (
                   <div className='numberOfEmployees__container'>
                       <div className='numberOfEmployees__header' data-advice='HTML for the *head* of the section'>numberOfEmployeess</div>
                       {this.props.numberOfEmployees.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.numberOfEmployees} />);
                       })}
                       <div className='numberOfEmployees__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                numberOfEmployees = (<QuantitativeValue  {...this.props.numberOfEmployees} />);
            }
        }

        let subOrganization;
        if (this.props.subOrganization) {
            if (this.props.subOrganization instanceof Array) {
                subOrganization = (
                   <div className='subOrganization__container'>
                       <div className='subOrganization__header' data-advice='HTML for the *head* of the section'>subOrganizations</div>
                       {this.props.subOrganization.map((item, index) => {
                            return (<Organization  {...this.props.subOrganization} />);
                       })}
                       <div className='subOrganization__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                subOrganization = (<Organization  {...this.props.subOrganization} />);
            }
        }

        let brand;
        if (this.props.brand) {
            if (this.props.brand instanceof Array) {
                brand = (
                   <div className='brand__container'>
                       <div className='brand__header' data-advice='HTML for the *head* of the section'>brands</div>
                       {this.props.brand.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.brand} />);
                           }
                           else if (this.props['@type'] === 'Brand') {
                               return (<Brand key={index} {...this.props.brand} />);
                           }
                       })}
                       <div className='brand__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   brand = (<Organization key={index} {...this.props.brand} />);
               }
               else if (this.props['@type'] === 'Brand') {
                   brand = (<Brand key={index} {...this.props.brand} />);
               }
            }
        }

        let owns;
        if (this.props.owns) {
            if (this.props.owns instanceof Array) {
                owns = (
                   <div className='owns__container'>
                       <div className='owns__header' data-advice='HTML for the *head* of the section'>ownss</div>
                       {this.props.owns.map((item, index) => {
                           if (this.props['@type'] === 'Product') {
                               return (<Product key={index} {...this.props.owns} />);
                           }
                           else if (this.props['@type'] === 'OwnershipInfo') {
                               return (<OwnershipInfo key={index} {...this.props.owns} />);
                           }
                       })}
                       <div className='owns__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Product') {
                   owns = (<Product key={index} {...this.props.owns} />);
               }
               else if (this.props['@type'] === 'OwnershipInfo') {
                   owns = (<OwnershipInfo key={index} {...this.props.owns} />);
               }
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award__container'>
                       <div className='award__header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                            return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="EducationalOrganization-award">award: {this.props.award}</p></div>);
                       })}
                       <div className='award__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="EducationalOrganization-award">award: {this.props.award}</p></div>);
            }
        }

        let department;
        if (this.props.department) {
            if (this.props.department instanceof Array) {
                department = (
                   <div className='department__container'>
                       <div className='department__header' data-advice='HTML for the *head* of the section'>departments</div>
                       {this.props.department.map((item, index) => {
                            return (<Organization  {...this.props.department} />);
                       })}
                       <div className='department__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                department = (<Organization  {...this.props.department} />);
            }
        }

        let dissolutionDate;
        if (this.props.dissolutionDate) {
            if (this.props.dissolutionDate instanceof Array) {
                dissolutionDate = (
                   <div className='dissolutionDate__container'>
                       <div className='dissolutionDate__header' data-advice='HTML for the *head* of the section'>dissolutionDates</div>
                       {this.props.dissolutionDate.map((item, index) => {
                            return (<div className='dissolutionDate' data-advice='Put your HTML here. dissolutionDate is a Date.'><time className="EducationalOrganization-dissolutionDate">dissolutionDate: {this.props.dissolutionDate}</time></div>);
                       })}
                       <div className='dissolutionDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                dissolutionDate = (<div className='dissolutionDate' data-advice='Put your HTML here. dissolutionDate is a Date.'><time className="EducationalOrganization-dissolutionDate">dissolutionDate: {this.props.dissolutionDate}</time></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="EducationalOrganization-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="EducationalOrganization-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address__container'>
                       <div className='address__header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="EducationalOrganization-address">address: {this.props.address}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.address} />);
                           }
                       })}
                       <div className='address__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="EducationalOrganization-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
               }
            }
        }

        let duns;
        if (this.props.duns) {
            if (this.props.duns instanceof Array) {
                duns = (
                   <div className='duns__container'>
                       <div className='duns__header' data-advice='HTML for the *head* of the section'>dunss</div>
                       {this.props.duns.map((item, index) => {
                            return (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="EducationalOrganization-duns">duns: {this.props.duns}</p></div>);
                       })}
                       <div className='duns__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                duns = (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="EducationalOrganization-duns">duns: {this.props.duns}</p></div>);
            }
        }

        let contactPoint;
        if (this.props.contactPoint) {
            if (this.props.contactPoint instanceof Array) {
                contactPoint = (
                   <div className='contactPoint__container'>
                       <div className='contactPoint__header' data-advice='HTML for the *head* of the section'>contactPoints</div>
                       {this.props.contactPoint.map((item, index) => {
                            return (<ContactPoint  {...this.props.contactPoint} />);
                       })}
                       <div className='contactPoint__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                contactPoint = (<ContactPoint  {...this.props.contactPoint} />);
            }
        }

        let makesOffer;
        if (this.props.makesOffer) {
            if (this.props.makesOffer instanceof Array) {
                makesOffer = (
                   <div className='makesOffer__container'>
                       <div className='makesOffer__header' data-advice='HTML for the *head* of the section'>makesOffers</div>
                       {this.props.makesOffer.map((item, index) => {
                            return (<Offer  {...this.props.makesOffer} />);
                       })}
                       <div className='makesOffer__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                makesOffer = (<Offer  {...this.props.makesOffer} />);
            }
        }

        let hasPOS;
        if (this.props.hasPOS) {
            if (this.props.hasPOS instanceof Array) {
                hasPOS = (
                   <div className='hasPOS__container'>
                       <div className='hasPOS__header' data-advice='HTML for the *head* of the section'>hasPOSs</div>
                       {this.props.hasPOS.map((item, index) => {
                            return (<Place  {...this.props.hasPOS} />);
                       })}
                       <div className='hasPOS__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                hasPOS = (<Place  {...this.props.hasPOS} />);
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

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="EducationalOrganization-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="EducationalOrganization-name">name: {this.props.name}</p></div>);
            }
        }

        let naics;
        if (this.props.naics) {
            if (this.props.naics instanceof Array) {
                naics = (
                   <div className='naics__container'>
                       <div className='naics__header' data-advice='HTML for the *head* of the section'>naicss</div>
                       {this.props.naics.map((item, index) => {
                            return (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="EducationalOrganization-naics">naics: {this.props.naics}</p></div>);
                       })}
                       <div className='naics__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                naics = (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="EducationalOrganization-naics">naics: {this.props.naics}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="EducationalOrganization-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="EducationalOrganization-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let memberOf;
        if (this.props.memberOf) {
            if (this.props.memberOf instanceof Array) {
                memberOf = (
                   <div className='memberOf__container'>
                       <div className='memberOf__header' data-advice='HTML for the *head* of the section'>memberOfs</div>
                       {this.props.memberOf.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.memberOf} />);
                           }
                           else if (this.props['@type'] === 'ProgramMembership') {
                               return (<ProgramMembership key={index} {...this.props.memberOf} />);
                           }
                       })}
                       <div className='memberOf__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   memberOf = (<Organization key={index} {...this.props.memberOf} />);
               }
               else if (this.props['@type'] === 'ProgramMembership') {
                   memberOf = (<ProgramMembership key={index} {...this.props.memberOf} />);
               }
            }
        }

        let alumni;
        if (this.props.alumni) {
            if (this.props.alumni instanceof Array) {
                alumni = (
                   <div className='alumni__container'>
                       <div className='alumni__header' data-advice='HTML for the *head* of the section'>alumnis</div>
                       {this.props.alumni.map((item, index) => {
                            return (<Person  {...this.props.alumni} />);
                       })}
                       <div className='alumni__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alumni = (<Person  {...this.props.alumni} />);
            }
        }

        let areaServed;
        if (this.props.areaServed) {
            if (this.props.areaServed instanceof Array) {
                areaServed = (
                   <div className='areaServed__container'>
                       <div className='areaServed__header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           if (this.props['@type'] === 'AdministrativeArea') {
                               return (<AdministrativeArea key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="EducationalOrganization-areaServed">areaServed: {this.props.areaServed}</p></div>);
                           }
                       })}
                       <div className='areaServed__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'AdministrativeArea') {
                   areaServed = (<AdministrativeArea key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Place') {
                   areaServed = (<Place key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   areaServed = (<GeoShape key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Text') {
                   areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="EducationalOrganization-areaServed">areaServed: {this.props.areaServed}</p></div>);
               }
            }
        }

        let legalName;
        if (this.props.legalName) {
            if (this.props.legalName instanceof Array) {
                legalName = (
                   <div className='legalName__container'>
                       <div className='legalName__header' data-advice='HTML for the *head* of the section'>legalNames</div>
                       {this.props.legalName.map((item, index) => {
                            return (<div className='legalName' data-advice='Put your HTML here. legalName is a Text.'><p className="EducationalOrganization-legalName">legalName: {this.props.legalName}</p></div>);
                       })}
                       <div className='legalName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                legalName = (<div className='legalName' data-advice='Put your HTML here. legalName is a Text.'><p className="EducationalOrganization-legalName">legalName: {this.props.legalName}</p></div>);
            }
        }

        let vatID;
        if (this.props.vatID) {
            if (this.props.vatID instanceof Array) {
                vatID = (
                   <div className='vatID__container'>
                       <div className='vatID__header' data-advice='HTML for the *head* of the section'>vatIDs</div>
                       {this.props.vatID.map((item, index) => {
                            return (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="EducationalOrganization-vatID">vatID: {this.props.vatID}</p></div>);
                       })}
                       <div className='vatID__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                vatID = (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="EducationalOrganization-vatID">vatID: {this.props.vatID}</p></div>);
            }
        }

        let globalLocationNumber;
        if (this.props.globalLocationNumber) {
            if (this.props.globalLocationNumber instanceof Array) {
                globalLocationNumber = (
                   <div className='globalLocationNumber__container'>
                       <div className='globalLocationNumber__header' data-advice='HTML for the *head* of the section'>globalLocationNumbers</div>
                       {this.props.globalLocationNumber.map((item, index) => {
                            return (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="EducationalOrganization-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
                       })}
                       <div className='globalLocationNumber__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                globalLocationNumber = (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="EducationalOrganization-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
            }
        }

        return (
            <div className='EducationalOrganization'>
                {founder}
                {parentOrganization}
                {sameAs}
                {image}
                {foundingDate}
                {telephone}
                {faxNumber}
                {aggregateRating}
                {additionalType}
                {hasOfferCatalog}
                {logo}
                {event}
                {isicV4}
                {review}
                {taxID}
                {mainEntityOfPage}
                {member}
                {foundingLocation}
                {location}
                {employee}
                {email}
                {seeks}
                {description}
                {numberOfEmployees}
                {subOrganization}
                {brand}
                {owns}
                {award}
                {department}
                {dissolutionDate}
                {alternateName}
                {address}
                {duns}
                {contactPoint}
                {makesOffer}
                {hasPOS}
                {potentialAction}
                {name}
                {naics}
                {url}
                {memberOf}
                {alumni}
                {areaServed}
                {legalName}
                {vatID}
                {globalLocationNumber}
            </div>
        );
    }
};

EducationalOrganization.defaultProps = {
};

EducationalOrganization.propTypes = {
   founder: React.PropTypes.object,
   parentOrganization: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   foundingDate: React.PropTypes.object,
   telephone: React.PropTypes.object,
   faxNumber: React.PropTypes.object,
   aggregateRating: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   hasOfferCatalog: React.PropTypes.object,
   logo: React.PropTypes.object,
   event: React.PropTypes.object,
   isicV4: React.PropTypes.object,
   review: React.PropTypes.object,
   taxID: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   member: React.PropTypes.object,
   foundingLocation: React.PropTypes.object,
   location: React.PropTypes.object,
   employee: React.PropTypes.object,
   email: React.PropTypes.object,
   seeks: React.PropTypes.object,
   description: React.PropTypes.object,
   numberOfEmployees: React.PropTypes.object,
   subOrganization: React.PropTypes.object,
   brand: React.PropTypes.object,
   owns: React.PropTypes.object,
   award: React.PropTypes.object,
   department: React.PropTypes.object,
   dissolutionDate: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   address: React.PropTypes.object,
   duns: React.PropTypes.object,
   contactPoint: React.PropTypes.object,
   makesOffer: React.PropTypes.object,
   hasPOS: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   name: React.PropTypes.object,
   naics: React.PropTypes.object,
   url: React.PropTypes.object,
   memberOf: React.PropTypes.object,
   alumni: React.PropTypes.object,
   areaServed: React.PropTypes.object,
   legalName: React.PropTypes.object,
   vatID: React.PropTypes.object,
   globalLocationNumber: React.PropTypes.object,
};

