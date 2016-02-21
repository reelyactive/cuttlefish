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
                weight = (<QuantitativeValue key={index} {...this.props.weight} />);
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
                follows = (<Person key={index} {...this.props.follows} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Person-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Person-image" src={this.props.image} /></div>);
               }
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
                relatedTo = (<Person key={index} {...this.props.relatedTo} />);
            }
        }

        let height;
        if (this.props.height) {
            if (this.props.height instanceof Array) {
                height = (
                   <div className='height-container'>
                       <div className='height-header' data-advice='HTML for the *head* of the section'>heights</div>
                       {this.props.height.map((item, index) => {
                           if (this.props['@type'] === 'Distance') {
                               return (<Distance key={index} {...this.props.height} />);
                           }
                           else if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.height} />);
                           }
                       })};
                       <div className='height-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Distance') {
                   height = (<Distance key={index} {...this.props.height} />);
               }
               else if (this.props['@type'] === 'QuantitativeValue') {
                   height = (<QuantitativeValue key={index} {...this.props.height} />);
               }
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
                affiliation = (<Organization key={index} {...this.props.affiliation} />);
            }
        }

        let workLocation;
        if (this.props.workLocation) {
            if (this.props.workLocation instanceof Array) {
                workLocation = (
                   <div className='workLocation-container'>
                       <div className='workLocation-header' data-advice='HTML for the *head* of the section'>workLocations</div>
                       {this.props.workLocation.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.workLocation} />);
                           }
                           else if (this.props['@type'] === 'ContactPoint') {
                               return (<ContactPoint key={index} {...this.props.workLocation} />);
                           }
                       })};
                       <div className='workLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   workLocation = (<Place key={index} {...this.props.workLocation} />);
               }
               else if (this.props['@type'] === 'ContactPoint') {
                   workLocation = (<ContactPoint key={index} {...this.props.workLocation} />);
               }
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
                children = (<Person key={index} {...this.props.children} />);
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
                performerIn = (<Event key={index} {...this.props.performerIn} />);
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
                worksFor = (<Organization key={index} {...this.props.worksFor} />);
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
                netWorth = (<PriceSpecification key={index} {...this.props.netWorth} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Person-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Person-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let homeLocation;
        if (this.props.homeLocation) {
            if (this.props.homeLocation instanceof Array) {
                homeLocation = (
                   <div className='homeLocation-container'>
                       <div className='homeLocation-header' data-advice='HTML for the *head* of the section'>homeLocations</div>
                       {this.props.homeLocation.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.homeLocation} />);
                           }
                           else if (this.props['@type'] === 'ContactPoint') {
                               return (<ContactPoint key={index} {...this.props.homeLocation} />);
                           }
                       })};
                       <div className='homeLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   homeLocation = (<Place key={index} {...this.props.homeLocation} />);
               }
               else if (this.props['@type'] === 'ContactPoint') {
                   homeLocation = (<ContactPoint key={index} {...this.props.homeLocation} />);
               }
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
                colleague = (<Person key={index} {...this.props.colleague} />);
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
                birthPlace = (<Place key={index} {...this.props.birthPlace} />);
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
                knows = (<Person key={index} {...this.props.knows} />);
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
                parent = (<Person key={index} {...this.props.parent} />);
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

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address-container'>
                       <div className='address-header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="Person-address">address: {this.props.address}</p></div>);
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
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="Person-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
               }
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
                nationality = (<Country key={index} {...this.props.nationality} />);
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
                spouse = (<Person key={index} {...this.props.spouse} />);
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
                sibling = (<Person key={index} {...this.props.sibling} />);
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
                deathPlace = (<Place key={index} {...this.props.deathPlace} />);
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

        let alumniOf;
        if (this.props.alumniOf) {
            if (this.props.alumniOf instanceof Array) {
                alumniOf = (
                   <div className='alumniOf-container'>
                       <div className='alumniOf-header' data-advice='HTML for the *head* of the section'>alumniOfs</div>
                       {this.props.alumniOf.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.alumniOf} />);
                           }
                           else if (this.props['@type'] === 'EducationalOrganization') {
                               return (<EducationalOrganization key={index} {...this.props.alumniOf} />);
                           }
                       })};
                       <div className='alumniOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   alumniOf = (<Organization key={index} {...this.props.alumniOf} />);
               }
               else if (this.props['@type'] === 'EducationalOrganization') {
                   alumniOf = (<EducationalOrganization key={index} {...this.props.alumniOf} />);
               }
            }
        }

        return (
            <div className='Person'>
                {weight}
                {follows}
                {image}
                {relatedTo}
                {height}
                {affiliation}
                {workLocation}
                {hasOfferCatalog}
                {children}
                {performerIn}
                {worksFor}
                {netWorth}
                {mainEntityOfPage}
                {homeLocation}
                {seeks}
                {colleague}
                {birthPlace}
                {knows}
                {parent}
                {brand}
                {address}
                {nationality}
                {contactPoint}
                {spouse}
                {makesOffer}
                {hasPOS}
                {potentialAction}
                {sibling}
                {memberOf}
                {deathPlace}
                {owns}
                {alumniOf}
            </div>
        );
    }
};

Person.defaultProps = {
};

Person.propTypes = {
   weight: React.propTypes.object,
   follows: React.propTypes.object,
   image: React.propTypes.object,
   relatedTo: React.propTypes.object,
   height: React.propTypes.object,
   affiliation: React.propTypes.object,
   workLocation: React.propTypes.object,
   hasOfferCatalog: React.propTypes.object,
   children: React.propTypes.object,
   performerIn: React.propTypes.object,
   worksFor: React.propTypes.object,
   netWorth: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   homeLocation: React.propTypes.object,
   seeks: React.propTypes.object,
   colleague: React.propTypes.object,
   birthPlace: React.propTypes.object,
   knows: React.propTypes.object,
   parent: React.propTypes.object,
   brand: React.propTypes.object,
   address: React.propTypes.object,
   nationality: React.propTypes.object,
   contactPoint: React.propTypes.object,
   spouse: React.propTypes.object,
   makesOffer: React.propTypes.object,
   hasPOS: React.propTypes.object,
   potentialAction: React.propTypes.object,
   sibling: React.propTypes.object,
   memberOf: React.propTypes.object,
   deathPlace: React.propTypes.object,
   owns: React.propTypes.object,
   alumniOf: React.propTypes.object,
};

