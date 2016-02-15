/* Person - A person (alive, dead, undead, or fictional).. Generated automatically by the reactGenerator. */
import Distance from './distance.js';
import Product from './product.js';
import EducationalOrganization from './educationalorganization.js';
import Offer from './offer.js';
import Country from './country.js';
import Brand from './brand.js';
import PriceSpecification from './pricespecification.js';
import QuantitativeValue from './quantitativevalue.js';
import ProgramMembership from './programmembership.js';
import OwnershipInfo from './ownershipinfo.js';
import OfferCatalog from './offercatalog.js';
import Place from './place.js';
import ImageObject from './imageobject.js';
import Demand from './demand.js';
import Action from './action.js';
import Organization from './organization.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import ContactPoint from './contactpoint.js';
import Event from './event.js';


import React, {
  Component
} from 'react';

export default class Person extends Component {
    render() {
        let sibling;
        if (this.props.sibling) {
            if (this.props.sibling instanceof Array) {
                sibling = (
                   <div className='sibling-container'>
                       <div className='sibling-header' data-advice='HTML for the *head* of the section'>siblings</div>
                       {this.props.sibling.map((item, index) => {
                           return (<Person key={index} {...this.props.sibling} />);
                       })};
                       <div className='sibling-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sibling = (<Person  {...this.props.sibling} />);
            }
        }

        let honorificPrefix;
        if (this.props.honorificPrefix) {
            if (this.props.honorificPrefix instanceof Array) {
                honorificPrefix = (
                   <div className='honorificPrefix-container'>
                       <div className='honorificPrefix-header' data-advice='HTML for the *head* of the section'>honorificPrefixs</div>
                       {this.props.honorificPrefix.map((item, index) => {
                           return (<div className='honorificPrefix' data-advice='Put your HTML here. honorificPrefix is a Text.'><p className="Person-honorificPrefix">honorificPrefix: {this.props.honorificPrefix}</p></div>);
                       })};
                       <div className='honorificPrefix-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                honorificPrefix = (<div className='honorificPrefix' data-advice='Put your HTML here. honorificPrefix is a Text.'><p className="Person-honorificPrefix">honorificPrefix: {this.props.honorificPrefix}</p></div>);
            }
        }

        let weight;
        if (this.props.weight) {
            if (this.props.weight instanceof Array) {
                weight = (
                   <div className='weight-container'>
                       <div className='weight-header' data-advice='HTML for the *head* of the section'>weights</div>
                       {this.props.weight.map((item, index) => {
                           return (<QuantitativeValue key={index} {...this.props.weight} />);
                       })};
                       <div className='weight-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                weight = (<QuantitativeValue  {...this.props.weight} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Person-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Person-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Person-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Person-image" src={this.props.image} /></div>);
            }
        }

        let relatedTo;
        if (this.props.relatedTo) {
            if (this.props.relatedTo instanceof Array) {
                relatedTo = (
                   <div className='relatedTo-container'>
                       <div className='relatedTo-header' data-advice='HTML for the *head* of the section'>relatedTos</div>
                       {this.props.relatedTo.map((item, index) => {
                           return (<Person key={index} {...this.props.relatedTo} />);
                       })};
                       <div className='relatedTo-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                relatedTo = (<Person  {...this.props.relatedTo} />);
            }
        }

        let telephone;
        if (this.props.telephone) {
            if (this.props.telephone instanceof Array) {
                telephone = (
                   <div className='telephone-container'>
                       <div className='telephone-header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                           return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="Person-telephone">telephone: {this.props.telephone}</p></div>);
                       })};
                       <div className='telephone-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                telephone = (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="Person-telephone">telephone: {this.props.telephone}</p></div>);
            }
        }

        let birthDate;
        if (this.props.birthDate) {
            if (this.props.birthDate instanceof Array) {
                birthDate = (
                   <div className='birthDate-container'>
                       <div className='birthDate-header' data-advice='HTML for the *head* of the section'>birthDates</div>
                       {this.props.birthDate.map((item, index) => {
                           return (<div className='birthDate' data-advice='Put your HTML here. birthDate is a Date.'><time className="Person-birthDate">birthDate: {this.props.birthDate}</time></div>);
                       })};
                       <div className='birthDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                birthDate = (<div className='birthDate' data-advice='Put your HTML here. birthDate is a Date.'><time className="Person-birthDate">birthDate: {this.props.birthDate}</time></div>);
            }
        }

        let faxNumber;
        if (this.props.faxNumber) {
            if (this.props.faxNumber instanceof Array) {
                faxNumber = (
                   <div className='faxNumber-container'>
                       <div className='faxNumber-header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                           return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="Person-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })};
                       <div className='faxNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                faxNumber = (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="Person-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
            }
        }

        let affiliation;
        if (this.props.affiliation) {
            if (this.props.affiliation instanceof Array) {
                affiliation = (
                   <div className='affiliation-container'>
                       <div className='affiliation-header' data-advice='HTML for the *head* of the section'>affiliations</div>
                       {this.props.affiliation.map((item, index) => {
                           return (<Organization key={index} {...this.props.affiliation} />);
                       })};
                       <div className='affiliation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                affiliation = (<Organization  {...this.props.affiliation} />);
            }
        }

        let additionalName;
        if (this.props.additionalName) {
            if (this.props.additionalName instanceof Array) {
                additionalName = (
                   <div className='additionalName-container'>
                       <div className='additionalName-header' data-advice='HTML for the *head* of the section'>additionalNames</div>
                       {this.props.additionalName.map((item, index) => {
                           return (<div className='additionalName' data-advice='Put your HTML here. additionalName is a Text.'><p className="Person-additionalName">additionalName: {this.props.additionalName}</p></div>);
                       })};
                       <div className='additionalName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalName = (<div className='additionalName' data-advice='Put your HTML here. additionalName is a Text.'><p className="Person-additionalName">additionalName: {this.props.additionalName}</p></div>);
            }
        }

        let workLocation;
        if (this.props.workLocation) {
            if (this.props.workLocation instanceof Array) {
                workLocation = (
                   <div className='workLocation-container'>
                       <div className='workLocation-header' data-advice='HTML for the *head* of the section'>workLocations</div>
                       {this.props.workLocation.map((item, index) => {
                           return (<div className='workLocation' data-advice='Put your HTML here. workLocation is a Place or ContactPoint.'><div className="Person-workLocation">workLocation: {this.props.workLocation}</div></div>);
                       })};
                       <div className='workLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                workLocation = (<div className='workLocation' data-advice='Put your HTML here. workLocation is a Place or ContactPoint.'><div className="Person-workLocation">workLocation: {this.props.workLocation}</div></div>);
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Person-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Person-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let children;
        if (this.props.children) {
            if (this.props.children instanceof Array) {
                children = (
                   <div className='children-container'>
                       <div className='children-header' data-advice='HTML for the *head* of the section'>childrens</div>
                       {this.props.children.map((item, index) => {
                           return (<Person key={index} {...this.props.children} />);
                       })};
                       <div className='children-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                children = (<Person  {...this.props.children} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Person-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Person-description">description: {this.props.description}</p></div>);
            }
        }

        let isicV4;
        if (this.props.isicV4) {
            if (this.props.isicV4 instanceof Array) {
                isicV4 = (
                   <div className='isicV4-container'>
                       <div className='isicV4-header' data-advice='HTML for the *head* of the section'>isicV4s</div>
                       {this.props.isicV4.map((item, index) => {
                           return (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="Person-isicV4">isicV4: {this.props.isicV4}</p></div>);
                       })};
                       <div className='isicV4-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isicV4 = (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="Person-isicV4">isicV4: {this.props.isicV4}</p></div>);
            }
        }

        let spouse;
        if (this.props.spouse) {
            if (this.props.spouse instanceof Array) {
                spouse = (
                   <div className='spouse-container'>
                       <div className='spouse-header' data-advice='HTML for the *head* of the section'>spouses</div>
                       {this.props.spouse.map((item, index) => {
                           return (<Person key={index} {...this.props.spouse} />);
                       })};
                       <div className='spouse-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                spouse = (<Person  {...this.props.spouse} />);
            }
        }

        let worksFor;
        if (this.props.worksFor) {
            if (this.props.worksFor instanceof Array) {
                worksFor = (
                   <div className='worksFor-container'>
                       <div className='worksFor-header' data-advice='HTML for the *head* of the section'>worksFors</div>
                       {this.props.worksFor.map((item, index) => {
                           return (<Organization key={index} {...this.props.worksFor} />);
                       })};
                       <div className='worksFor-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                worksFor = (<Organization  {...this.props.worksFor} />);
            }
        }

        let taxID;
        if (this.props.taxID) {
            if (this.props.taxID instanceof Array) {
                taxID = (
                   <div className='taxID-container'>
                       <div className='taxID-header' data-advice='HTML for the *head* of the section'>taxIDs</div>
                       {this.props.taxID.map((item, index) => {
                           return (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="Person-taxID">taxID: {this.props.taxID}</p></div>);
                       })};
                       <div className='taxID-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                taxID = (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="Person-taxID">taxID: {this.props.taxID}</p></div>);
            }
        }

        let honorificSuffix;
        if (this.props.honorificSuffix) {
            if (this.props.honorificSuffix instanceof Array) {
                honorificSuffix = (
                   <div className='honorificSuffix-container'>
                       <div className='honorificSuffix-header' data-advice='HTML for the *head* of the section'>honorificSuffixs</div>
                       {this.props.honorificSuffix.map((item, index) => {
                           return (<div className='honorificSuffix' data-advice='Put your HTML here. honorificSuffix is a Text.'><p className="Person-honorificSuffix">honorificSuffix: {this.props.honorificSuffix}</p></div>);
                       })};
                       <div className='honorificSuffix-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                honorificSuffix = (<div className='honorificSuffix' data-advice='Put your HTML here. honorificSuffix is a Text.'><p className="Person-honorificSuffix">honorificSuffix: {this.props.honorificSuffix}</p></div>);
            }
        }

        let netWorth;
        if (this.props.netWorth) {
            if (this.props.netWorth instanceof Array) {
                netWorth = (
                   <div className='netWorth-container'>
                       <div className='netWorth-header' data-advice='HTML for the *head* of the section'>netWorths</div>
                       {this.props.netWorth.map((item, index) => {
                           return (<PriceSpecification key={index} {...this.props.netWorth} />);
                       })};
                       <div className='netWorth-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                netWorth = (<PriceSpecification  {...this.props.netWorth} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="Person-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="Person-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let homeLocation;
        if (this.props.homeLocation) {
            if (this.props.homeLocation instanceof Array) {
                homeLocation = (
                   <div className='homeLocation-container'>
                       <div className='homeLocation-header' data-advice='HTML for the *head* of the section'>homeLocations</div>
                       {this.props.homeLocation.map((item, index) => {
                           return (<div className='homeLocation' data-advice='Put your HTML here. homeLocation is a Place or ContactPoint.'><div className="Person-homeLocation">homeLocation: {this.props.homeLocation}</div></div>);
                       })};
                       <div className='homeLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                homeLocation = (<div className='homeLocation' data-advice='Put your HTML here. homeLocation is a Place or ContactPoint.'><div className="Person-homeLocation">homeLocation: {this.props.homeLocation}</div></div>);
            }
        }

        let email;
        if (this.props.email) {
            if (this.props.email instanceof Array) {
                email = (
                   <div className='email-container'>
                       <div className='email-header' data-advice='HTML for the *head* of the section'>emails</div>
                       {this.props.email.map((item, index) => {
                           return (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="Person-email">email: {this.props.email}</p></div>);
                       })};
                       <div className='email-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                email = (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="Person-email">email: {this.props.email}</p></div>);
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

        let colleague;
        if (this.props.colleague) {
            if (this.props.colleague instanceof Array) {
                colleague = (
                   <div className='colleague-container'>
                       <div className='colleague-header' data-advice='HTML for the *head* of the section'>colleagues</div>
                       {this.props.colleague.map((item, index) => {
                           return (<Person key={index} {...this.props.colleague} />);
                       })};
                       <div className='colleague-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                colleague = (<Person  {...this.props.colleague} />);
            }
        }

        let performerIn;
        if (this.props.performerIn) {
            if (this.props.performerIn instanceof Array) {
                performerIn = (
                   <div className='performerIn-container'>
                       <div className='performerIn-header' data-advice='HTML for the *head* of the section'>performerIns</div>
                       {this.props.performerIn.map((item, index) => {
                           return (<Event key={index} {...this.props.performerIn} />);
                       })};
                       <div className='performerIn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                performerIn = (<Event  {...this.props.performerIn} />);
            }
        }

        let birthPlace;
        if (this.props.birthPlace) {
            if (this.props.birthPlace instanceof Array) {
                birthPlace = (
                   <div className='birthPlace-container'>
                       <div className='birthPlace-header' data-advice='HTML for the *head* of the section'>birthPlaces</div>
                       {this.props.birthPlace.map((item, index) => {
                           return (<Place key={index} {...this.props.birthPlace} />);
                       })};
                       <div className='birthPlace-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                birthPlace = (<Place  {...this.props.birthPlace} />);
            }
        }

        let knows;
        if (this.props.knows) {
            if (this.props.knows instanceof Array) {
                knows = (
                   <div className='knows-container'>
                       <div className='knows-header' data-advice='HTML for the *head* of the section'>knowss</div>
                       {this.props.knows.map((item, index) => {
                           return (<Person key={index} {...this.props.knows} />);
                       })};
                       <div className='knows-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                knows = (<Person  {...this.props.knows} />);
            }
        }

        let parent;
        if (this.props.parent) {
            if (this.props.parent instanceof Array) {
                parent = (
                   <div className='parent-container'>
                       <div className='parent-header' data-advice='HTML for the *head* of the section'>parents</div>
                       {this.props.parent.map((item, index) => {
                           return (<Person key={index} {...this.props.parent} />);
                       })};
                       <div className='parent-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                parent = (<Person  {...this.props.parent} />);
            }
        }

        let memberOf;
        if (this.props.memberOf) {
            if (this.props.memberOf instanceof Array) {
                memberOf = (
                   <div className='memberOf-container'>
                       <div className='memberOf-header' data-advice='HTML for the *head* of the section'>memberOfs</div>
                       {this.props.memberOf.map((item, index) => {
                           return (<div className='memberOf' data-advice='Put your HTML here. memberOf is a Organization or ProgramMembership.'><div className="Person-memberOf">memberOf: {this.props.memberOf}</div></div>);
                       })};
                       <div className='memberOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                memberOf = (<div className='memberOf' data-advice='Put your HTML here. memberOf is a Organization or ProgramMembership.'><div className="Person-memberOf">memberOf: {this.props.memberOf}</div></div>);
            }
        }

        let jobTitle;
        if (this.props.jobTitle) {
            if (this.props.jobTitle instanceof Array) {
                jobTitle = (
                   <div className='jobTitle-container'>
                       <div className='jobTitle-header' data-advice='HTML for the *head* of the section'>jobTitles</div>
                       {this.props.jobTitle.map((item, index) => {
                           return (<div className='jobTitle' data-advice='Put your HTML here. jobTitle is a Text.'><p className="Person-jobTitle">jobTitle: {this.props.jobTitle}</p></div>);
                       })};
                       <div className='jobTitle-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                jobTitle = (<div className='jobTitle' data-advice='Put your HTML here. jobTitle is a Text.'><p className="Person-jobTitle">jobTitle: {this.props.jobTitle}</p></div>);
            }
        }

        let brand;
        if (this.props.brand) {
            if (this.props.brand instanceof Array) {
                brand = (
                   <div className='brand-container'>
                       <div className='brand-header' data-advice='HTML for the *head* of the section'>brands</div>
                       {this.props.brand.map((item, index) => {
                           return (<div className='brand' data-advice='Put your HTML here. brand is a Organization or Brand.'><div className="Person-brand">brand: {this.props.brand}</div></div>);
                       })};
                       <div className='brand-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                brand = (<div className='brand' data-advice='Put your HTML here. brand is a Organization or Brand.'><div className="Person-brand">brand: {this.props.brand}</div></div>);
            }
        }

        let familyName;
        if (this.props.familyName) {
            if (this.props.familyName instanceof Array) {
                familyName = (
                   <div className='familyName-container'>
                       <div className='familyName-header' data-advice='HTML for the *head* of the section'>familyNames</div>
                       {this.props.familyName.map((item, index) => {
                           return (<div className='familyName' data-advice='Put your HTML here. familyName is a Text.'><p className="Person-familyName">familyName: {this.props.familyName}</p></div>);
                       })};
                       <div className='familyName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                familyName = (<div className='familyName' data-advice='Put your HTML here. familyName is a Text.'><p className="Person-familyName">familyName: {this.props.familyName}</p></div>);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award-container'>
                       <div className='award-header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                           return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Person-award">award: {this.props.award}</p></div>);
                       })};
                       <div className='award-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Person-award">award: {this.props.award}</p></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Person-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Person-alternateName">alternateName: {this.props.alternateName}</p></div>);
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

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address-container'>
                       <div className='address-header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           return (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="Person-address">address: {this.props.address}</div></div>);
                       })};
                       <div className='address-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                address = (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="Person-address">address: {this.props.address}</div></div>);
            }
        }

        let duns;
        if (this.props.duns) {
            if (this.props.duns instanceof Array) {
                duns = (
                   <div className='duns-container'>
                       <div className='duns-header' data-advice='HTML for the *head* of the section'>dunss</div>
                       {this.props.duns.map((item, index) => {
                           return (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="Person-duns">duns: {this.props.duns}</p></div>);
                       })};
                       <div className='duns-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                duns = (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="Person-duns">duns: {this.props.duns}</p></div>);
            }
        }

        let nationality;
        if (this.props.nationality) {
            if (this.props.nationality instanceof Array) {
                nationality = (
                   <div className='nationality-container'>
                       <div className='nationality-header' data-advice='HTML for the *head* of the section'>nationalitys</div>
                       {this.props.nationality.map((item, index) => {
                           return (<Country key={index} {...this.props.nationality} />);
                       })};
                       <div className='nationality-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                nationality = (<Country  {...this.props.nationality} />);
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

        let deathDate;
        if (this.props.deathDate) {
            if (this.props.deathDate instanceof Array) {
                deathDate = (
                   <div className='deathDate-container'>
                       <div className='deathDate-header' data-advice='HTML for the *head* of the section'>deathDates</div>
                       {this.props.deathDate.map((item, index) => {
                           return (<div className='deathDate' data-advice='Put your HTML here. deathDate is a Date.'><time className="Person-deathDate">deathDate: {this.props.deathDate}</time></div>);
                       })};
                       <div className='deathDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                deathDate = (<div className='deathDate' data-advice='Put your HTML here. deathDate is a Date.'><time className="Person-deathDate">deathDate: {this.props.deathDate}</time></div>);
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

        let owns;
        if (this.props.owns) {
            if (this.props.owns instanceof Array) {
                owns = (
                   <div className='owns-container'>
                       <div className='owns-header' data-advice='HTML for the *head* of the section'>ownss</div>
                       {this.props.owns.map((item, index) => {
                           return (<div className='owns' data-advice='Put your HTML here. owns is a Product or OwnershipInfo.'><div className="Person-owns">owns: {this.props.owns}</div></div>);
                       })};
                       <div className='owns-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                owns = (<div className='owns' data-advice='Put your HTML here. owns is a Product or OwnershipInfo.'><div className="Person-owns">owns: {this.props.owns}</div></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Person-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Person-name">name: {this.props.name}</p></div>);
            }
        }

        let naics;
        if (this.props.naics) {
            if (this.props.naics instanceof Array) {
                naics = (
                   <div className='naics-container'>
                       <div className='naics-header' data-advice='HTML for the *head* of the section'>naicss</div>
                       {this.props.naics.map((item, index) => {
                           return (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="Person-naics">naics: {this.props.naics}</p></div>);
                       })};
                       <div className='naics-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                naics = (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="Person-naics">naics: {this.props.naics}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Person-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Person-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let gender;
        if (this.props.gender) {
            if (this.props.gender instanceof Array) {
                gender = (
                   <div className='gender-container'>
                       <div className='gender-header' data-advice='HTML for the *head* of the section'>genders</div>
                       {this.props.gender.map((item, index) => {
                           return (<div className='gender' data-advice='Put your HTML here. gender is a Text.'><p className="Person-gender">gender: {this.props.gender}</p></div>);
                       })};
                       <div className='gender-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                gender = (<div className='gender' data-advice='Put your HTML here. gender is a Text.'><p className="Person-gender">gender: {this.props.gender}</p></div>);
            }
        }

        let vatID;
        if (this.props.vatID) {
            if (this.props.vatID instanceof Array) {
                vatID = (
                   <div className='vatID-container'>
                       <div className='vatID-header' data-advice='HTML for the *head* of the section'>vatIDs</div>
                       {this.props.vatID.map((item, index) => {
                           return (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="Person-vatID">vatID: {this.props.vatID}</p></div>);
                       })};
                       <div className='vatID-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                vatID = (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="Person-vatID">vatID: {this.props.vatID}</p></div>);
            }
        }

        let height;
        if (this.props.height) {
            if (this.props.height instanceof Array) {
                height = (
                   <div className='height-container'>
                       <div className='height-header' data-advice='HTML for the *head* of the section'>heights</div>
                       {this.props.height.map((item, index) => {
                           return (<div className='height' data-advice='Put your HTML here. height is a Distance or QuantitativeValue.'><div className="Person-height">height: {this.props.height}</div></div>);
                       })};
                       <div className='height-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                height = (<div className='height' data-advice='Put your HTML here. height is a Distance or QuantitativeValue.'><div className="Person-height">height: {this.props.height}</div></div>);
            }
        }

        let deathPlace;
        if (this.props.deathPlace) {
            if (this.props.deathPlace instanceof Array) {
                deathPlace = (
                   <div className='deathPlace-container'>
                       <div className='deathPlace-header' data-advice='HTML for the *head* of the section'>deathPlaces</div>
                       {this.props.deathPlace.map((item, index) => {
                           return (<Place key={index} {...this.props.deathPlace} />);
                       })};
                       <div className='deathPlace-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                deathPlace = (<Place  {...this.props.deathPlace} />);
            }
        }

        let follows;
        if (this.props.follows) {
            if (this.props.follows instanceof Array) {
                follows = (
                   <div className='follows-container'>
                       <div className='follows-header' data-advice='HTML for the *head* of the section'>followss</div>
                       {this.props.follows.map((item, index) => {
                           return (<Person key={index} {...this.props.follows} />);
                       })};
                       <div className='follows-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                follows = (<Person  {...this.props.follows} />);
            }
        }

        let givenName;
        if (this.props.givenName) {
            if (this.props.givenName instanceof Array) {
                givenName = (
                   <div className='givenName-container'>
                       <div className='givenName-header' data-advice='HTML for the *head* of the section'>givenNames</div>
                       {this.props.givenName.map((item, index) => {
                           return (<div className='givenName' data-advice='Put your HTML here. givenName is a Text.'><p className="Person-givenName">givenName: {this.props.givenName}</p></div>);
                       })};
                       <div className='givenName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                givenName = (<div className='givenName' data-advice='Put your HTML here. givenName is a Text.'><p className="Person-givenName">givenName: {this.props.givenName}</p></div>);
            }
        }

        let alumniOf;
        if (this.props.alumniOf) {
            if (this.props.alumniOf instanceof Array) {
                alumniOf = (
                   <div className='alumniOf-container'>
                       <div className='alumniOf-header' data-advice='HTML for the *head* of the section'>alumniOfs</div>
                       {this.props.alumniOf.map((item, index) => {
                           return (<div className='alumniOf' data-advice='Put your HTML here. alumniOf is a Organization or EducationalOrganization.'><div className="Person-alumniOf">alumniOf: {this.props.alumniOf}</div></div>);
                       })};
                       <div className='alumniOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alumniOf = (<div className='alumniOf' data-advice='Put your HTML here. alumniOf is a Organization or EducationalOrganization.'><div className="Person-alumniOf">alumniOf: {this.props.alumniOf}</div></div>);
            }
        }

        let globalLocationNumber;
        if (this.props.globalLocationNumber) {
            if (this.props.globalLocationNumber instanceof Array) {
                globalLocationNumber = (
                   <div className='globalLocationNumber-container'>
                       <div className='globalLocationNumber-header' data-advice='HTML for the *head* of the section'>globalLocationNumbers</div>
                       {this.props.globalLocationNumber.map((item, index) => {
                           return (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="Person-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
                       })};
                       <div className='globalLocationNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                globalLocationNumber = (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="Person-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
            }
        }

        return (
            <div className='Person'>
                {sibling}
                {honorificPrefix}
                {weight}
                {sameAs}
                {image}
                {relatedTo}
                {telephone}
                {birthDate}
                {faxNumber}
                {affiliation}
                {additionalName}
                {workLocation}
                {hasOfferCatalog}
                {additionalType}
                {children}
                {description}
                {isicV4}
                {spouse}
                {worksFor}
                {taxID}
                {honorificSuffix}
                {netWorth}
                {mainEntityOfPage}
                {homeLocation}
                {email}
                {seeks}
                {colleague}
                {performerIn}
                {birthPlace}
                {knows}
                {parent}
                {memberOf}
                {jobTitle}
                {brand}
                {familyName}
                {award}
                {alternateName}
                {potentialAction}
                {address}
                {duns}
                {nationality}
                {contactPoint}
                {deathDate}
                {makesOffer}
                {hasPOS}
                {owns}
                {name}
                {naics}
                {url}
                {gender}
                {vatID}
                {height}
                {deathPlace}
                {follows}
                {givenName}
                {alumniOf}
                {globalLocationNumber}
            </div>
        );
    }
};

Person.defaultProps = {
};

Person.propTypes = {
   sibling: React.propTypes.object,
   honorificPrefix: React.propTypes.string,
   weight: React.propTypes.object,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   relatedTo: React.propTypes.object,
   telephone: React.propTypes.string,
   birthDate: React.propTypes.string,
   faxNumber: React.propTypes.string,
   affiliation: React.propTypes.object,
   additionalName: React.propTypes.string,
   workLocation: React.propTypes.object,
   hasOfferCatalog: React.propTypes.object,
   additionalType: React.propTypes.string,
   children: React.propTypes.object,
   description: React.propTypes.string,
   isicV4: React.propTypes.string,
   spouse: React.propTypes.object,
   worksFor: React.propTypes.object,
   taxID: React.propTypes.string,
   honorificSuffix: React.propTypes.string,
   netWorth: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   homeLocation: React.propTypes.object,
   email: React.propTypes.string,
   seeks: React.propTypes.object,
   colleague: React.propTypes.object,
   performerIn: React.propTypes.object,
   birthPlace: React.propTypes.object,
   knows: React.propTypes.object,
   parent: React.propTypes.object,
   memberOf: React.propTypes.object,
   jobTitle: React.propTypes.string,
   brand: React.propTypes.object,
   familyName: React.propTypes.string,
   award: React.propTypes.string,
   alternateName: React.propTypes.string,
   potentialAction: React.propTypes.object,
   address: React.propTypes.object,
   duns: React.propTypes.string,
   nationality: React.propTypes.object,
   contactPoint: React.propTypes.object,
   deathDate: React.propTypes.string,
   makesOffer: React.propTypes.object,
   hasPOS: React.propTypes.object,
   owns: React.propTypes.object,
   name: React.propTypes.string,
   naics: React.propTypes.string,
   url: React.propTypes.string,
   gender: React.propTypes.string,
   vatID: React.propTypes.string,
   height: React.propTypes.object,
   deathPlace: React.propTypes.object,
   follows: React.propTypes.object,
   givenName: React.propTypes.string,
   alumniOf: React.propTypes.object,
   globalLocationNumber: React.propTypes.string,
};

