/* Organization - An organization such as a school, NGO, corporation, club, etc.. Generated automatically by the reactGenerator. */
import QuantitativeValue from './quantitativevalue.js';
import ProgramMembership from './programmembership.js';
import GeoShape from './geoshape.js';
import OfferCatalog from './offercatalog.js';
import Person from './person.js';
import Brand from './brand.js';
import Offer from './offer.js';
import ImageObject from './imageobject.js';
import Event from './event.js';
import AggregateRating from './aggregaterating.js';
import OwnershipInfo from './ownershipinfo.js';
import AdministrativeArea from './administrativearea.js';
import Place from './place.js';
import Demand from './demand.js';
import Action from './action.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import ContactPoint from './contactpoint.js';
import Product from './product.js';
import Review from './review.js';


import React, {
  Component
} from 'react';

export default class Organization extends Component {
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
                founder = (<Person  {...this.props.founder} />);
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
                parentOrganization = (<Organization  {...this.props.parentOrganization} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Organization-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Organization-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Organization-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Organization-image" src={this.props.image} /></div>);
            }
        }

        let foundingDate;
        if (this.props.foundingDate) {
            if (this.props.foundingDate instanceof Array) {
                foundingDate = (
                   <div className='foundingDate-container'>
                       <div className='foundingDate-header' data-advice='HTML for the *head* of the section'>foundingDates</div>
                       {this.props.foundingDate.map((item, index) => {
                           return (<div className='foundingDate' data-advice='Put your HTML here. foundingDate is a Date.'><time className="Organization-foundingDate">foundingDate: {this.props.foundingDate}</time></div>);
                       })};
                       <div className='foundingDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                foundingDate = (<div className='foundingDate' data-advice='Put your HTML here. foundingDate is a Date.'><time className="Organization-foundingDate">foundingDate: {this.props.foundingDate}</time></div>);
            }
        }

        let telephone;
        if (this.props.telephone) {
            if (this.props.telephone instanceof Array) {
                telephone = (
                   <div className='telephone-container'>
                       <div className='telephone-header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                           return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="Organization-telephone">telephone: {this.props.telephone}</p></div>);
                       })};
                       <div className='telephone-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                telephone = (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="Organization-telephone">telephone: {this.props.telephone}</p></div>);
            }
        }

        let faxNumber;
        if (this.props.faxNumber) {
            if (this.props.faxNumber instanceof Array) {
                faxNumber = (
                   <div className='faxNumber-container'>
                       <div className='faxNumber-header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                           return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="Organization-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })};
                       <div className='faxNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                faxNumber = (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="Organization-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
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
                aggregateRating = (<AggregateRating  {...this.props.aggregateRating} />);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Organization-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Organization-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
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
                hasOfferCatalog = (<OfferCatalog  {...this.props.hasOfferCatalog} />);
            }
        }

        let logo;
        if (this.props.logo) {
            if (this.props.logo instanceof Array) {
                logo = (
                   <div className='logo-container'>
                       <div className='logo-header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           return (<div className='logo' data-advice='Put your HTML here. logo is a ImageObject or URL.'><div className="Organization-logo">logo: {this.props.logo}</div></div>);
                       })};
                       <div className='logo-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                logo = (<div className='logo' data-advice='Put your HTML here. logo is a ImageObject or URL.'><div className="Organization-logo">logo: {this.props.logo}</div></div>);
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
                event = (<Event  {...this.props.event} />);
            }
        }

        let isicV4;
        if (this.props.isicV4) {
            if (this.props.isicV4 instanceof Array) {
                isicV4 = (
                   <div className='isicV4-container'>
                       <div className='isicV4-header' data-advice='HTML for the *head* of the section'>isicV4s</div>
                       {this.props.isicV4.map((item, index) => {
                           return (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="Organization-isicV4">isicV4: {this.props.isicV4}</p></div>);
                       })};
                       <div className='isicV4-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isicV4 = (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="Organization-isicV4">isicV4: {this.props.isicV4}</p></div>);
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
                review = (<Review  {...this.props.review} />);
            }
        }

        let taxID;
        if (this.props.taxID) {
            if (this.props.taxID instanceof Array) {
                taxID = (
                   <div className='taxID-container'>
                       <div className='taxID-header' data-advice='HTML for the *head* of the section'>taxIDs</div>
                       {this.props.taxID.map((item, index) => {
                           return (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="Organization-taxID">taxID: {this.props.taxID}</p></div>);
                       })};
                       <div className='taxID-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                taxID = (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="Organization-taxID">taxID: {this.props.taxID}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="Organization-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="Organization-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let member;
        if (this.props.member) {
            if (this.props.member instanceof Array) {
                member = (
                   <div className='member-container'>
                       <div className='member-header' data-advice='HTML for the *head* of the section'>members</div>
                       {this.props.member.map((item, index) => {
                           return (<div className='member' data-advice='Put your HTML here. member is a Person or Organization.'><div className="Organization-member">member: {this.props.member}</div></div>);
                       })};
                       <div className='member-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                member = (<div className='member' data-advice='Put your HTML here. member is a Person or Organization.'><div className="Organization-member">member: {this.props.member}</div></div>);
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
                foundingLocation = (<Place  {...this.props.foundingLocation} />);
            }
        }

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location-container'>
                       <div className='location-header' data-advice='HTML for the *head* of the section'>locations</div>
                       {this.props.location.map((item, index) => {
                           return (<div className='location' data-advice='Put your HTML here. location is a Place or Text or PostalAddress.'><div className="Organization-location">location: {this.props.location}</div></div>);
                       })};
                       <div className='location-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                location = (<div className='location' data-advice='Put your HTML here. location is a Place or Text or PostalAddress.'><div className="Organization-location">location: {this.props.location}</div></div>);
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
                employee = (<Person  {...this.props.employee} />);
            }
        }

        let email;
        if (this.props.email) {
            if (this.props.email instanceof Array) {
                email = (
                   <div className='email-container'>
                       <div className='email-header' data-advice='HTML for the *head* of the section'>emails</div>
                       {this.props.email.map((item, index) => {
                           return (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="Organization-email">email: {this.props.email}</p></div>);
                       })};
                       <div className='email-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                email = (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="Organization-email">email: {this.props.email}</p></div>);
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
                seeks = (<Demand  {...this.props.seeks} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Organization-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Organization-description">description: {this.props.description}</p></div>);
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
                numberOfEmployees = (<QuantitativeValue  {...this.props.numberOfEmployees} />);
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
                subOrganization = (<Organization  {...this.props.subOrganization} />);
            }
        }

        let brand;
        if (this.props.brand) {
            if (this.props.brand instanceof Array) {
                brand = (
                   <div className='brand-container'>
                       <div className='brand-header' data-advice='HTML for the *head* of the section'>brands</div>
                       {this.props.brand.map((item, index) => {
                           return (<div className='brand' data-advice='Put your HTML here. brand is a Organization or Brand.'><div className="Organization-brand">brand: {this.props.brand}</div></div>);
                       })};
                       <div className='brand-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                brand = (<div className='brand' data-advice='Put your HTML here. brand is a Organization or Brand.'><div className="Organization-brand">brand: {this.props.brand}</div></div>);
            }
        }

        let owns;
        if (this.props.owns) {
            if (this.props.owns instanceof Array) {
                owns = (
                   <div className='owns-container'>
                       <div className='owns-header' data-advice='HTML for the *head* of the section'>ownss</div>
                       {this.props.owns.map((item, index) => {
                           return (<div className='owns' data-advice='Put your HTML here. owns is a Product or OwnershipInfo.'><div className="Organization-owns">owns: {this.props.owns}</div></div>);
                       })};
                       <div className='owns-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                owns = (<div className='owns' data-advice='Put your HTML here. owns is a Product or OwnershipInfo.'><div className="Organization-owns">owns: {this.props.owns}</div></div>);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award-container'>
                       <div className='award-header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                           return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Organization-award">award: {this.props.award}</p></div>);
                       })};
                       <div className='award-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Organization-award">award: {this.props.award}</p></div>);
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
                department = (<Organization  {...this.props.department} />);
            }
        }

        let dissolutionDate;
        if (this.props.dissolutionDate) {
            if (this.props.dissolutionDate instanceof Array) {
                dissolutionDate = (
                   <div className='dissolutionDate-container'>
                       <div className='dissolutionDate-header' data-advice='HTML for the *head* of the section'>dissolutionDates</div>
                       {this.props.dissolutionDate.map((item, index) => {
                           return (<div className='dissolutionDate' data-advice='Put your HTML here. dissolutionDate is a Date.'><time className="Organization-dissolutionDate">dissolutionDate: {this.props.dissolutionDate}</time></div>);
                       })};
                       <div className='dissolutionDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dissolutionDate = (<div className='dissolutionDate' data-advice='Put your HTML here. dissolutionDate is a Date.'><time className="Organization-dissolutionDate">dissolutionDate: {this.props.dissolutionDate}</time></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Organization-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Organization-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address-container'>
                       <div className='address-header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           return (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="Organization-address">address: {this.props.address}</div></div>);
                       })};
                       <div className='address-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                address = (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="Organization-address">address: {this.props.address}</div></div>);
            }
        }

        let duns;
        if (this.props.duns) {
            if (this.props.duns instanceof Array) {
                duns = (
                   <div className='duns-container'>
                       <div className='duns-header' data-advice='HTML for the *head* of the section'>dunss</div>
                       {this.props.duns.map((item, index) => {
                           return (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="Organization-duns">duns: {this.props.duns}</p></div>);
                       })};
                       <div className='duns-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                duns = (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="Organization-duns">duns: {this.props.duns}</p></div>);
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
                contactPoint = (<ContactPoint  {...this.props.contactPoint} />);
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
                makesOffer = (<Offer  {...this.props.makesOffer} />);
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
                hasPOS = (<Place  {...this.props.hasPOS} />);
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
                potentialAction = (<Action  {...this.props.potentialAction} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Organization-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Organization-name">name: {this.props.name}</p></div>);
            }
        }

        let naics;
        if (this.props.naics) {
            if (this.props.naics instanceof Array) {
                naics = (
                   <div className='naics-container'>
                       <div className='naics-header' data-advice='HTML for the *head* of the section'>naicss</div>
                       {this.props.naics.map((item, index) => {
                           return (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="Organization-naics">naics: {this.props.naics}</p></div>);
                       })};
                       <div className='naics-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                naics = (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="Organization-naics">naics: {this.props.naics}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Organization-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Organization-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let memberOf;
        if (this.props.memberOf) {
            if (this.props.memberOf instanceof Array) {
                memberOf = (
                   <div className='memberOf-container'>
                       <div className='memberOf-header' data-advice='HTML for the *head* of the section'>memberOfs</div>
                       {this.props.memberOf.map((item, index) => {
                           return (<div className='memberOf' data-advice='Put your HTML here. memberOf is a Organization or ProgramMembership.'><div className="Organization-memberOf">memberOf: {this.props.memberOf}</div></div>);
                       })};
                       <div className='memberOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                memberOf = (<div className='memberOf' data-advice='Put your HTML here. memberOf is a Organization or ProgramMembership.'><div className="Organization-memberOf">memberOf: {this.props.memberOf}</div></div>);
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
                alumni = (<Person  {...this.props.alumni} />);
            }
        }

        let areaServed;
        if (this.props.areaServed) {
            if (this.props.areaServed instanceof Array) {
                areaServed = (
                   <div className='areaServed-container'>
                       <div className='areaServed-header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a AdministrativeArea or Place or Text or GeoShape.'><div className="Organization-areaServed">areaServed: {this.props.areaServed}</div></div>);
                       })};
                       <div className='areaServed-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a AdministrativeArea or Place or Text or GeoShape.'><div className="Organization-areaServed">areaServed: {this.props.areaServed}</div></div>);
            }
        }

        let legalName;
        if (this.props.legalName) {
            if (this.props.legalName instanceof Array) {
                legalName = (
                   <div className='legalName-container'>
                       <div className='legalName-header' data-advice='HTML for the *head* of the section'>legalNames</div>
                       {this.props.legalName.map((item, index) => {
                           return (<div className='legalName' data-advice='Put your HTML here. legalName is a Text.'><p className="Organization-legalName">legalName: {this.props.legalName}</p></div>);
                       })};
                       <div className='legalName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                legalName = (<div className='legalName' data-advice='Put your HTML here. legalName is a Text.'><p className="Organization-legalName">legalName: {this.props.legalName}</p></div>);
            }
        }

        let vatID;
        if (this.props.vatID) {
            if (this.props.vatID instanceof Array) {
                vatID = (
                   <div className='vatID-container'>
                       <div className='vatID-header' data-advice='HTML for the *head* of the section'>vatIDs</div>
                       {this.props.vatID.map((item, index) => {
                           return (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="Organization-vatID">vatID: {this.props.vatID}</p></div>);
                       })};
                       <div className='vatID-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                vatID = (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="Organization-vatID">vatID: {this.props.vatID}</p></div>);
            }
        }

        let globalLocationNumber;
        if (this.props.globalLocationNumber) {
            if (this.props.globalLocationNumber instanceof Array) {
                globalLocationNumber = (
                   <div className='globalLocationNumber-container'>
                       <div className='globalLocationNumber-header' data-advice='HTML for the *head* of the section'>globalLocationNumbers</div>
                       {this.props.globalLocationNumber.map((item, index) => {
                           return (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="Organization-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
                       })};
                       <div className='globalLocationNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                globalLocationNumber = (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="Organization-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
            }
        }

        return (
            <div className='Organization'>
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

Organization.defaultProps = {
};

Organization.propTypes = {
   founder: React.propTypes.object,
   parentOrganization: React.propTypes.object,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   foundingDate: React.propTypes.string,
   telephone: React.propTypes.string,
   faxNumber: React.propTypes.string,
   aggregateRating: React.propTypes.object,
   additionalType: React.propTypes.string,
   hasOfferCatalog: React.propTypes.object,
   logo: React.propTypes.object,
   event: React.propTypes.object,
   isicV4: React.propTypes.string,
   review: React.propTypes.object,
   taxID: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   member: React.propTypes.object,
   foundingLocation: React.propTypes.object,
   location: React.propTypes.object,
   employee: React.propTypes.object,
   email: React.propTypes.string,
   seeks: React.propTypes.object,
   description: React.propTypes.string,
   numberOfEmployees: React.propTypes.object,
   subOrganization: React.propTypes.object,
   brand: React.propTypes.object,
   owns: React.propTypes.object,
   award: React.propTypes.string,
   department: React.propTypes.object,
   dissolutionDate: React.propTypes.string,
   alternateName: React.propTypes.string,
   address: React.propTypes.object,
   duns: React.propTypes.string,
   contactPoint: React.propTypes.object,
   makesOffer: React.propTypes.object,
   hasPOS: React.propTypes.object,
   potentialAction: React.propTypes.object,
   name: React.propTypes.string,
   naics: React.propTypes.string,
   url: React.propTypes.string,
   memberOf: React.propTypes.object,
   alumni: React.propTypes.object,
   areaServed: React.propTypes.object,
   legalName: React.propTypes.string,
   vatID: React.propTypes.string,
   globalLocationNumber: React.propTypes.string,
};

