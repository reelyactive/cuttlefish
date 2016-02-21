/* EducationalOrganization - An educational organization.. Generated automatically by the reactGenerator. */
import QuantitativeValue from './quantitativevalue.js';
import ProgramMembership from './programmembership.js';
import GeoShape from './geoshape.js';
import OfferCatalog from './offercatalog.js';
import AggregateRating from './aggregaterating.js';
import Brand from './brand.js';
import Offer from './offer.js';
import ImageObject from './imageobject.js';
import Event from './event.js';
import Person from './person.js';
import OwnershipInfo from './ownershipinfo.js';
import AdministrativeArea from './administrativearea.js';
import Place from './place.js';
import Demand from './demand.js';
import Action from './action.js';
import Organization from './organization.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import ContactPoint from './contactpoint.js';
import Product from './product.js';
import Review from './review.js';


import React, {
  Component
} from 'react';

export default class EducationalOrganization extends Component {
    render() {
        let founder;
        if (this.props.founder) {
            if (this.props.founder instanceof Array) {
                founder = (
                   <div className='founder-container'>
                       <div className='founder-header' data-advice='HTML for the *head* of the section'>founders</div>
                       {this.props.founder.map((item, index) => {
                            return (<Person key={index} {...this.props.founder} />);
                       })};
                       <div className='founder-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                founder = (<Person key={index} {...this.props.founder} />);
            }
        }

        let parentOrganization;
        if (this.props.parentOrganization) {
            if (this.props.parentOrganization instanceof Array) {
                parentOrganization = (
                   <div className='parentOrganization-container'>
                       <div className='parentOrganization-header' data-advice='HTML for the *head* of the section'>parentOrganizations</div>
                       {this.props.parentOrganization.map((item, index) => {
                            return (<Organization key={index} {...this.props.parentOrganization} />);
                       })};
                       <div className='parentOrganization-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                parentOrganization = (<Organization key={index} {...this.props.parentOrganization} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EducationalOrganization-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EducationalOrganization-image" src={this.props.image} /></div>);
               }
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating-container'>
                       <div className='aggregateRating-header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating key={index} {...this.props.aggregateRating} />);
            }
        }

        let hasOfferCatalog;
        if (this.props.hasOfferCatalog) {
            if (this.props.hasOfferCatalog instanceof Array) {
                hasOfferCatalog = (
                   <div className='hasOfferCatalog-container'>
                       <div className='hasOfferCatalog-header' data-advice='HTML for the *head* of the section'>hasOfferCatalogs</div>
                       {this.props.hasOfferCatalog.map((item, index) => {
                            return (<OfferCatalog key={index} {...this.props.hasOfferCatalog} />);
                       })};
                       <div className='hasOfferCatalog-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hasOfferCatalog = (<OfferCatalog key={index} {...this.props.hasOfferCatalog} />);
            }
        }

        let logo;
        if (this.props.logo) {
            if (this.props.logo instanceof Array) {
                logo = (
                   <div className='logo-container'>
                       <div className='logo-header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="EducationalOrganization-logo" href={this.props.logo} target="_blank">logo</a></div>);
                           }
                           else if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.logo} />);
                           }
                       })};
                       <div className='logo-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='event-container'>
                       <div className='event-header' data-advice='HTML for the *head* of the section'>events</div>
                       {this.props.event.map((item, index) => {
                            return (<Event key={index} {...this.props.event} />);
                       })};
                       <div className='event-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                event = (<Event key={index} {...this.props.event} />);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review-container'>
                       <div className='review-header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review key={index} {...this.props.review} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="EducationalOrganization-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='member-container'>
                       <div className='member-header' data-advice='HTML for the *head* of the section'>members</div>
                       {this.props.member.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.member} />);
                           }
                           else if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.member} />);
                           }
                       })};
                       <div className='member-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='foundingLocation-container'>
                       <div className='foundingLocation-header' data-advice='HTML for the *head* of the section'>foundingLocations</div>
                       {this.props.foundingLocation.map((item, index) => {
                            return (<Place key={index} {...this.props.foundingLocation} />);
                       })};
                       <div className='foundingLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                foundingLocation = (<Place key={index} {...this.props.foundingLocation} />);
            }
        }

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location-container'>
                       <div className='location-header' data-advice='HTML for the *head* of the section'>locations</div>
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
                       })};
                       <div className='location-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='employee-container'>
                       <div className='employee-header' data-advice='HTML for the *head* of the section'>employees</div>
                       {this.props.employee.map((item, index) => {
                            return (<Person key={index} {...this.props.employee} />);
                       })};
                       <div className='employee-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                employee = (<Person key={index} {...this.props.employee} />);
            }
        }

        let seeks;
        if (this.props.seeks) {
            if (this.props.seeks instanceof Array) {
                seeks = (
                   <div className='seeks-container'>
                       <div className='seeks-header' data-advice='HTML for the *head* of the section'>seekss</div>
                       {this.props.seeks.map((item, index) => {
                            return (<Demand key={index} {...this.props.seeks} />);
                       })};
                       <div className='seeks-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                seeks = (<Demand key={index} {...this.props.seeks} />);
            }
        }

        let numberOfEmployees;
        if (this.props.numberOfEmployees) {
            if (this.props.numberOfEmployees instanceof Array) {
                numberOfEmployees = (
                   <div className='numberOfEmployees-container'>
                       <div className='numberOfEmployees-header' data-advice='HTML for the *head* of the section'>numberOfEmployeess</div>
                       {this.props.numberOfEmployees.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.numberOfEmployees} />);
                       })};
                       <div className='numberOfEmployees-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                numberOfEmployees = (<QuantitativeValue key={index} {...this.props.numberOfEmployees} />);
            }
        }

        let brand;
        if (this.props.brand) {
            if (this.props.brand instanceof Array) {
                brand = (
                   <div className='brand-container'>
                       <div className='brand-header' data-advice='HTML for the *head* of the section'>brands</div>
                       {this.props.brand.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.brand} />);
                           }
                           else if (this.props['@type'] === 'Brand') {
                               return (<Brand key={index} {...this.props.brand} />);
                           }
                       })};
                       <div className='brand-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let department;
        if (this.props.department) {
            if (this.props.department instanceof Array) {
                department = (
                   <div className='department-container'>
                       <div className='department-header' data-advice='HTML for the *head* of the section'>departments</div>
                       {this.props.department.map((item, index) => {
                            return (<Organization key={index} {...this.props.department} />);
                       })};
                       <div className='department-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                department = (<Organization key={index} {...this.props.department} />);
            }
        }

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address-container'>
                       <div className='address-header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="EducationalOrganization-address">address: {this.props.address}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.address} />);
                           }
                       })};
                       <div className='address-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let subOrganization;
        if (this.props.subOrganization) {
            if (this.props.subOrganization instanceof Array) {
                subOrganization = (
                   <div className='subOrganization-container'>
                       <div className='subOrganization-header' data-advice='HTML for the *head* of the section'>subOrganizations</div>
                       {this.props.subOrganization.map((item, index) => {
                            return (<Organization key={index} {...this.props.subOrganization} />);
                       })};
                       <div className='subOrganization-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                subOrganization = (<Organization key={index} {...this.props.subOrganization} />);
            }
        }

        let contactPoint;
        if (this.props.contactPoint) {
            if (this.props.contactPoint instanceof Array) {
                contactPoint = (
                   <div className='contactPoint-container'>
                       <div className='contactPoint-header' data-advice='HTML for the *head* of the section'>contactPoints</div>
                       {this.props.contactPoint.map((item, index) => {
                            return (<ContactPoint key={index} {...this.props.contactPoint} />);
                       })};
                       <div className='contactPoint-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contactPoint = (<ContactPoint key={index} {...this.props.contactPoint} />);
            }
        }

        let makesOffer;
        if (this.props.makesOffer) {
            if (this.props.makesOffer instanceof Array) {
                makesOffer = (
                   <div className='makesOffer-container'>
                       <div className='makesOffer-header' data-advice='HTML for the *head* of the section'>makesOffers</div>
                       {this.props.makesOffer.map((item, index) => {
                            return (<Offer key={index} {...this.props.makesOffer} />);
                       })};
                       <div className='makesOffer-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                makesOffer = (<Offer key={index} {...this.props.makesOffer} />);
            }
        }

        let hasPOS;
        if (this.props.hasPOS) {
            if (this.props.hasPOS instanceof Array) {
                hasPOS = (
                   <div className='hasPOS-container'>
                       <div className='hasPOS-header' data-advice='HTML for the *head* of the section'>hasPOSs</div>
                       {this.props.hasPOS.map((item, index) => {
                            return (<Place key={index} {...this.props.hasPOS} />);
                       })};
                       <div className='hasPOS-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hasPOS = (<Place key={index} {...this.props.hasPOS} />);
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

        let memberOf;
        if (this.props.memberOf) {
            if (this.props.memberOf instanceof Array) {
                memberOf = (
                   <div className='memberOf-container'>
                       <div className='memberOf-header' data-advice='HTML for the *head* of the section'>memberOfs</div>
                       {this.props.memberOf.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.memberOf} />);
                           }
                           else if (this.props['@type'] === 'ProgramMembership') {
                               return (<ProgramMembership key={index} {...this.props.memberOf} />);
                           }
                       })};
                       <div className='memberOf-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='alumni-container'>
                       <div className='alumni-header' data-advice='HTML for the *head* of the section'>alumnis</div>
                       {this.props.alumni.map((item, index) => {
                            return (<Person key={index} {...this.props.alumni} />);
                       })};
                       <div className='alumni-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alumni = (<Person key={index} {...this.props.alumni} />);
            }
        }

        let areaServed;
        if (this.props.areaServed) {
            if (this.props.areaServed instanceof Array) {
                areaServed = (
                   <div className='areaServed-container'>
                       <div className='areaServed-header' data-advice='HTML for the *head* of the section'>areaServeds</div>
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
                       })};
                       <div className='areaServed-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let owns;
        if (this.props.owns) {
            if (this.props.owns instanceof Array) {
                owns = (
                   <div className='owns-container'>
                       <div className='owns-header' data-advice='HTML for the *head* of the section'>ownss</div>
                       {this.props.owns.map((item, index) => {
                           if (this.props['@type'] === 'Product') {
                               return (<Product key={index} {...this.props.owns} />);
                           }
                           else if (this.props['@type'] === 'OwnershipInfo') {
                               return (<OwnershipInfo key={index} {...this.props.owns} />);
                           }
                       })};
                       <div className='owns-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        return (
            <div className='EducationalOrganization'>
                {founder}
                {parentOrganization}
                {image}
                {aggregateRating}
                {hasOfferCatalog}
                {logo}
                {event}
                {review}
                {mainEntityOfPage}
                {member}
                {foundingLocation}
                {location}
                {employee}
                {seeks}
                {numberOfEmployees}
                {brand}
                {department}
                {address}
                {subOrganization}
                {contactPoint}
                {makesOffer}
                {hasPOS}
                {potentialAction}
                {memberOf}
                {alumni}
                {areaServed}
                {owns}
            </div>
        );
    }
};

EducationalOrganization.defaultProps = {
};

EducationalOrganization.propTypes = {
   founder: React.propTypes.object,
   parentOrganization: React.propTypes.object,
   image: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   hasOfferCatalog: React.propTypes.object,
   logo: React.propTypes.object,
   event: React.propTypes.object,
   review: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   member: React.propTypes.object,
   foundingLocation: React.propTypes.object,
   location: React.propTypes.object,
   employee: React.propTypes.object,
   seeks: React.propTypes.object,
   numberOfEmployees: React.propTypes.object,
   brand: React.propTypes.object,
   department: React.propTypes.object,
   address: React.propTypes.object,
   subOrganization: React.propTypes.object,
   contactPoint: React.propTypes.object,
   makesOffer: React.propTypes.object,
   hasPOS: React.propTypes.object,
   potentialAction: React.propTypes.object,
   memberOf: React.propTypes.object,
   alumni: React.propTypes.object,
   areaServed: React.propTypes.object,
   owns: React.propTypes.object,
};

