/* MusicGroup - A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.. Generated automatically by the reactGenerator. */
import GeoShape from './geoshape.js';
import OfferCatalog from './offercatalog.js';
import Review from './review.js';
import QuantitativeValue from './quantitativevalue.js';
import ImageObject from './imageobject.js';
import AdministrativeArea from './administrativearea.js';
import Product from './product.js';
import Offer from './offer.js';
import Brand from './brand.js';
import ProgramMembership from './programmembership.js';
import AggregateRating from './aggregaterating.js';
import Demand from './demand.js';
import CreativeWork from './creativework.js';
import MusicRecording from './musicrecording.js';
import Person from './person.js';
import MusicAlbum from './musicalbum.js';
import ItemList from './itemlist.js';
import Action from './action.js';
import Organization from './organization.js';
import PostalAddress from './postaladdress.js';
import OwnershipInfo from './ownershipinfo.js';
import Place from './place.js';
import ContactPoint from './contactpoint.js';
import Event from './event.js';


import React, {
  Component
} from 'react';

export default class MusicGroup extends Component {
    render() {
        let subOrganization;
        if (this.props.subOrganization) {
            if (this.props.subOrganization instanceof Array) {
                subOrganization = (
                   <div className='subOrganization__container'>
                       <div className='subOrganization__header' data-advice='HTML for the *head* of the section'>subOrganizations</div>
                       {this.props.subOrganization.map((item, index) => {
                            return (<Organization key={index} {...this.props.subOrganization} />);
                       })};
                       <div className='subOrganization__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                subOrganization = (<Organization key={index} {...this.props.subOrganization} />);
            }
        }

        let founder;
        if (this.props.founder) {
            if (this.props.founder instanceof Array) {
                founder = (
                   <div className='founder__container'>
                       <div className='founder__header' data-advice='HTML for the *head* of the section'>founders</div>
                       {this.props.founder.map((item, index) => {
                            return (<Person key={index} {...this.props.founder} />);
                       })};
                       <div className='founder__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='parentOrganization__container'>
                       <div className='parentOrganization__header' data-advice='HTML for the *head* of the section'>parentOrganizations</div>
                       {this.props.parentOrganization.map((item, index) => {
                            return (<Organization key={index} {...this.props.parentOrganization} />);
                       })};
                       <div className='parentOrganization__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MusicGroup-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="MusicGroup-image" src={this.props.image} /></div>);
               }
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='hasOfferCatalog__container'>
                       <div className='hasOfferCatalog__header' data-advice='HTML for the *head* of the section'>hasOfferCatalogs</div>
                       {this.props.hasOfferCatalog.map((item, index) => {
                            return (<OfferCatalog key={index} {...this.props.hasOfferCatalog} />);
                       })};
                       <div className='hasOfferCatalog__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='logo__container'>
                       <div className='logo__header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.logo} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="MusicGroup-logo" href={this.props.logo} target="_blank">logo</a></div>);
                           }
                       })};
                       <div className='logo__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   logo = (<ImageObject key={index} {...this.props.logo} />);
               }
               else if (this.props['@type'] === 'URL') {
                   logo = (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="MusicGroup-logo" href={this.props.logo} target="_blank">logo</a></div>);
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
                            return (<Event key={index} {...this.props.event} />);
                       })};
                       <div className='event__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                event = (<Event key={index} {...this.props.event} />);
            }
        }

        let album;
        if (this.props.album) {
            if (this.props.album instanceof Array) {
                album = (
                   <div className='album__container'>
                       <div className='album__header' data-advice='HTML for the *head* of the section'>albums</div>
                       {this.props.album.map((item, index) => {
                            return (<MusicAlbum key={index} {...this.props.album} />);
                       })};
                       <div className='album__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                album = (<MusicAlbum key={index} {...this.props.album} />);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MusicGroup-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="MusicGroup-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.member} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.member} />);
                           }
                       })};
                       <div className='member__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   member = (<Person key={index} {...this.props.member} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   member = (<Organization key={index} {...this.props.member} />);
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
                            return (<Place key={index} {...this.props.foundingLocation} />);
                       })};
                       <div className='foundingLocation__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='location__container'>
                       <div className='location__header' data-advice='HTML for the *head* of the section'>locations</div>
                       {this.props.location.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.location} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="MusicGroup-location">location: {this.props.location}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.location} />);
                           }
                       })};
                       <div className='location__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   location = (<Place key={index} {...this.props.location} />);
               }
               else if (this.props['@type'] === 'Text') {
                   location = (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="MusicGroup-location">location: {this.props.location}</p></div>);
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
                            return (<Person key={index} {...this.props.employee} />);
                       })};
                       <div className='employee__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='seeks__container'>
                       <div className='seeks__header' data-advice='HTML for the *head* of the section'>seekss</div>
                       {this.props.seeks.map((item, index) => {
                            return (<Demand key={index} {...this.props.seeks} />);
                       })};
                       <div className='seeks__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='numberOfEmployees__container'>
                       <div className='numberOfEmployees__header' data-advice='HTML for the *head* of the section'>numberOfEmployeess</div>
                       {this.props.numberOfEmployees.map((item, index) => {
                            return (<QuantitativeValue key={index} {...this.props.numberOfEmployees} />);
                       })};
                       <div className='numberOfEmployees__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                numberOfEmployees = (<QuantitativeValue key={index} {...this.props.numberOfEmployees} />);
            }
        }

        let track;
        if (this.props.track) {
            if (this.props.track instanceof Array) {
                track = (
                   <div className='track__container'>
                       <div className='track__header' data-advice='HTML for the *head* of the section'>tracks</div>
                       {this.props.track.map((item, index) => {
                           if (this.props['@type'] === 'ItemList') {
                               return (<ItemList key={index} {...this.props.track} />);
                           }
                           else if (this.props['@type'] === 'MusicRecording') {
                               return (<MusicRecording key={index} {...this.props.track} />);
                           }
                       })};
                       <div className='track__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ItemList') {
                   track = (<ItemList key={index} {...this.props.track} />);
               }
               else if (this.props['@type'] === 'MusicRecording') {
                   track = (<MusicRecording key={index} {...this.props.track} />);
               }
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
                       })};
                       <div className='brand__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='department__container'>
                       <div className='department__header' data-advice='HTML for the *head* of the section'>departments</div>
                       {this.props.department.map((item, index) => {
                            return (<Organization key={index} {...this.props.department} />);
                       })};
                       <div className='department__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='address__container'>
                       <div className='address__header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="MusicGroup-address">address: {this.props.address}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.address} />);
                           }
                       })};
                       <div className='address__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="MusicGroup-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
               }
            }
        }

        let genre;
        if (this.props.genre) {
            if (this.props.genre instanceof Array) {
                genre = (
                   <div className='genre__container'>
                       <div className='genre__header' data-advice='HTML for the *head* of the section'>genres</div>
                       {this.props.genre.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='genre' data-advice='Put your HTML here. genre is a Text.'><p className="MusicGroup-genre">genre: {this.props.genre}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='genre' data-advice='Put your HTML here. genre is a URL.'><a className="MusicGroup-genre" href={this.props.genre} target="_blank">genre</a></div>);
                           }
                       })};
                       <div className='genre__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   genre = (<div className='genre' data-advice='Put your HTML here. genre is a Text.'><p className="MusicGroup-genre">genre: {this.props.genre}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   genre = (<div className='genre' data-advice='Put your HTML here. genre is a URL.'><a className="MusicGroup-genre" href={this.props.genre} target="_blank">genre</a></div>);
               }
            }
        }

        let contactPoint;
        if (this.props.contactPoint) {
            if (this.props.contactPoint instanceof Array) {
                contactPoint = (
                   <div className='contactPoint__container'>
                       <div className='contactPoint__header' data-advice='HTML for the *head* of the section'>contactPoints</div>
                       {this.props.contactPoint.map((item, index) => {
                            return (<ContactPoint key={index} {...this.props.contactPoint} />);
                       })};
                       <div className='contactPoint__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='makesOffer__container'>
                       <div className='makesOffer__header' data-advice='HTML for the *head* of the section'>makesOffers</div>
                       {this.props.makesOffer.map((item, index) => {
                            return (<Offer key={index} {...this.props.makesOffer} />);
                       })};
                       <div className='makesOffer__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='hasPOS__container'>
                       <div className='hasPOS__header' data-advice='HTML for the *head* of the section'>hasPOSs</div>
                       {this.props.hasPOS.map((item, index) => {
                            return (<Place key={index} {...this.props.hasPOS} />);
                       })};
                       <div className='hasPOS__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                       })};
                       <div className='memberOf__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                            return (<Person key={index} {...this.props.alumni} />);
                       })};
                       <div className='alumni__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='areaServed__container'>
                       <div className='areaServed__header' data-advice='HTML for the *head* of the section'>areaServeds</div>
                       {this.props.areaServed.map((item, index) => {
                           if (this.props['@type'] === 'AdministrativeArea') {
                               return (<AdministrativeArea key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.areaServed} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="MusicGroup-areaServed">areaServed: {this.props.areaServed}</p></div>);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.areaServed} />);
                           }
                       })};
                       <div className='areaServed__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'AdministrativeArea') {
                   areaServed = (<AdministrativeArea key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Place') {
                   areaServed = (<Place key={index} {...this.props.areaServed} />);
               }
               else if (this.props['@type'] === 'Text') {
                   areaServed = (<div className='areaServed' data-advice='Put your HTML here. areaServed is a Text.'><p className="MusicGroup-areaServed">areaServed: {this.props.areaServed}</p></div>);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   areaServed = (<GeoShape key={index} {...this.props.areaServed} />);
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
                       })};
                       <div className='owns__footer' data-advice='HTML for the *footer* of the section'></div>;
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
            <div className='MusicGroup'>
                {subOrganization}
                {founder}
                {parentOrganization}
                {image}
                {aggregateRating}
                {hasOfferCatalog}
                {logo}
                {event}
                {album}
                {review}
                {mainEntityOfPage}
                {member}
                {foundingLocation}
                {location}
                {employee}
                {seeks}
                {numberOfEmployees}
                {track}
                {brand}
                {department}
                {address}
                {genre}
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

MusicGroup.defaultProps = {
};

MusicGroup.propTypes = {
   subOrganization: React.propTypes.object,
   founder: React.propTypes.object,
   parentOrganization: React.propTypes.object,
   image: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   hasOfferCatalog: React.propTypes.object,
   logo: React.propTypes.object,
   event: React.propTypes.object,
   album: React.propTypes.object,
   review: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   member: React.propTypes.object,
   foundingLocation: React.propTypes.object,
   location: React.propTypes.object,
   employee: React.propTypes.object,
   seeks: React.propTypes.object,
   numberOfEmployees: React.propTypes.object,
   track: React.propTypes.object,
   brand: React.propTypes.object,
   department: React.propTypes.object,
   address: React.propTypes.object,
   genre: React.propTypes.object,
   contactPoint: React.propTypes.object,
   makesOffer: React.propTypes.object,
   hasPOS: React.propTypes.object,
   potentialAction: React.propTypes.object,
   memberOf: React.propTypes.object,
   alumni: React.propTypes.object,
   areaServed: React.propTypes.object,
   owns: React.propTypes.object,
};

