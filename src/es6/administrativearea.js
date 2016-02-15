/* AdministrativeArea - A geographical region, typically under the jurisdiction of a particular government.. Generated automatically by the reactGenerator. */
import Map from './map.js';
import GeoShape from './geoshape.js';
import OpeningHoursSpecification from './openinghoursspecification.js';
import Photograph from './photograph.js';
import Review from './review.js';
import ImageObject from './imageobject.js';
import PropertyValue from './propertyvalue.js';
import AggregateRating from './aggregaterating.js';
import Place from './place.js';
import Action from './action.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import Event from './event.js';
import GeoCoordinates from './geocoordinates.js';


import React, {
  Component
} from 'react';

export default class AdministrativeArea extends Component {
    render() {
        let openingHoursSpecification;
        if (this.props.openingHoursSpecification) {
            if (this.props.openingHoursSpecification instanceof Array) {
                openingHoursSpecification = (
                   <div className='openingHoursSpecification-container'>
                       <div className='openingHoursSpecification-header' data-advice='HTML for the *head* of the section'>openingHoursSpecifications</div>
                       {this.props.openingHoursSpecification.map((item, index) => {
                           return (<OpeningHoursSpecification key={index} {...this.props.openingHoursSpecification} />);
                       })};
                       <div className='openingHoursSpecification-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                openingHoursSpecification = (<OpeningHoursSpecification  {...this.props.openingHoursSpecification} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AdministrativeArea-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AdministrativeArea-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let photo;
        if (this.props.photo) {
            if (this.props.photo instanceof Array) {
                photo = (
                   <div className='photo-container'>
                       <div className='photo-header' data-advice='HTML for the *head* of the section'>photos</div>
                       {this.props.photo.map((item, index) => {
                           return (<div className='photo' data-advice='Put your HTML here. photo is a Photograph or ImageObject.'><div className="AdministrativeArea-photo">photo: {this.props.photo}</div></div>);
                       })};
                       <div className='photo-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                photo = (<div className='photo' data-advice='Put your HTML here. photo is a Photograph or ImageObject.'><div className="AdministrativeArea-photo">photo: {this.props.photo}</div></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="AdministrativeArea-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="AdministrativeArea-image" src={this.props.image} /></div>);
            }
        }

        let telephone;
        if (this.props.telephone) {
            if (this.props.telephone instanceof Array) {
                telephone = (
                   <div className='telephone-container'>
                       <div className='telephone-header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                           return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="AdministrativeArea-telephone">telephone: {this.props.telephone}</p></div>);
                       })};
                       <div className='telephone-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                telephone = (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="AdministrativeArea-telephone">telephone: {this.props.telephone}</p></div>);
            }
        }

        let faxNumber;
        if (this.props.faxNumber) {
            if (this.props.faxNumber instanceof Array) {
                faxNumber = (
                   <div className='faxNumber-container'>
                       <div className='faxNumber-header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                           return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="AdministrativeArea-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })};
                       <div className='faxNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                faxNumber = (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="AdministrativeArea-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
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

        let containsPlace;
        if (this.props.containsPlace) {
            if (this.props.containsPlace instanceof Array) {
                containsPlace = (
                   <div className='containsPlace-container'>
                       <div className='containsPlace-header' data-advice='HTML for the *head* of the section'>containsPlaces</div>
                       {this.props.containsPlace.map((item, index) => {
                           return (<Place key={index} {...this.props.containsPlace} />);
                       })};
                       <div className='containsPlace-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                containsPlace = (<Place  {...this.props.containsPlace} />);
            }
        }

        let logo;
        if (this.props.logo) {
            if (this.props.logo instanceof Array) {
                logo = (
                   <div className='logo-container'>
                       <div className='logo-header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           return (<div className='logo' data-advice='Put your HTML here. logo is a ImageObject or URL.'><div className="AdministrativeArea-logo">logo: {this.props.logo}</div></div>);
                       })};
                       <div className='logo-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                logo = (<div className='logo' data-advice='Put your HTML here. logo is a ImageObject or URL.'><div className="AdministrativeArea-logo">logo: {this.props.logo}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AdministrativeArea-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AdministrativeArea-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
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
                           return (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="AdministrativeArea-isicV4">isicV4: {this.props.isicV4}</p></div>);
                       })};
                       <div className='isicV4-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isicV4 = (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="AdministrativeArea-isicV4">isicV4: {this.props.isicV4}</p></div>);
            }
        }

        let geo;
        if (this.props.geo) {
            if (this.props.geo instanceof Array) {
                geo = (
                   <div className='geo-container'>
                       <div className='geo-header' data-advice='HTML for the *head* of the section'>geos</div>
                       {this.props.geo.map((item, index) => {
                           return (<div className='geo' data-advice='Put your HTML here. geo is a GeoCoordinates or GeoShape.'><div className="AdministrativeArea-geo">geo: {this.props.geo}</div></div>);
                       })};
                       <div className='geo-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                geo = (<div className='geo' data-advice='Put your HTML here. geo is a GeoCoordinates or GeoShape.'><div className="AdministrativeArea-geo">geo: {this.props.geo}</div></div>);
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

        let additionalProperty;
        if (this.props.additionalProperty) {
            if (this.props.additionalProperty instanceof Array) {
                additionalProperty = (
                   <div className='additionalProperty-container'>
                       <div className='additionalProperty-header' data-advice='HTML for the *head* of the section'>additionalPropertys</div>
                       {this.props.additionalProperty.map((item, index) => {
                           return (<PropertyValue key={index} {...this.props.additionalProperty} />);
                       })};
                       <div className='additionalProperty-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalProperty = (<PropertyValue  {...this.props.additionalProperty} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="AdministrativeArea-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="AdministrativeArea-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AdministrativeArea-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AdministrativeArea-description">description: {this.props.description}</p></div>);
            }
        }

        let containedInPlace;
        if (this.props.containedInPlace) {
            if (this.props.containedInPlace instanceof Array) {
                containedInPlace = (
                   <div className='containedInPlace-container'>
                       <div className='containedInPlace-header' data-advice='HTML for the *head* of the section'>containedInPlaces</div>
                       {this.props.containedInPlace.map((item, index) => {
                           return (<Place key={index} {...this.props.containedInPlace} />);
                       })};
                       <div className='containedInPlace-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                containedInPlace = (<Place  {...this.props.containedInPlace} />);
            }
        }

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address-container'>
                       <div className='address-header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           return (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="AdministrativeArea-address">address: {this.props.address}</div></div>);
                       })};
                       <div className='address-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                address = (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="AdministrativeArea-address">address: {this.props.address}</div></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AdministrativeArea-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AdministrativeArea-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let hasMap;
        if (this.props.hasMap) {
            if (this.props.hasMap instanceof Array) {
                hasMap = (
                   <div className='hasMap-container'>
                       <div className='hasMap-header' data-advice='HTML for the *head* of the section'>hasMaps</div>
                       {this.props.hasMap.map((item, index) => {
                           return (<div className='hasMap' data-advice='Put your HTML here. hasMap is a Map or URL.'><div className="AdministrativeArea-hasMap">hasMap: {this.props.hasMap}</div></div>);
                       })};
                       <div className='hasMap-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hasMap = (<div className='hasMap' data-advice='Put your HTML here. hasMap is a Map or URL.'><div className="AdministrativeArea-hasMap">hasMap: {this.props.hasMap}</div></div>);
            }
        }

        let branchCode;
        if (this.props.branchCode) {
            if (this.props.branchCode instanceof Array) {
                branchCode = (
                   <div className='branchCode-container'>
                       <div className='branchCode-header' data-advice='HTML for the *head* of the section'>branchCodes</div>
                       {this.props.branchCode.map((item, index) => {
                           return (<div className='branchCode' data-advice='Put your HTML here. branchCode is a Text.'><p className="AdministrativeArea-branchCode">branchCode: {this.props.branchCode}</p></div>);
                       })};
                       <div className='branchCode-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                branchCode = (<div className='branchCode' data-advice='Put your HTML here. branchCode is a Text.'><p className="AdministrativeArea-branchCode">branchCode: {this.props.branchCode}</p></div>);
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
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AdministrativeArea-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AdministrativeArea-name">name: {this.props.name}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AdministrativeArea-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AdministrativeArea-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let globalLocationNumber;
        if (this.props.globalLocationNumber) {
            if (this.props.globalLocationNumber instanceof Array) {
                globalLocationNumber = (
                   <div className='globalLocationNumber-container'>
                       <div className='globalLocationNumber-header' data-advice='HTML for the *head* of the section'>globalLocationNumbers</div>
                       {this.props.globalLocationNumber.map((item, index) => {
                           return (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="AdministrativeArea-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
                       })};
                       <div className='globalLocationNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                globalLocationNumber = (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="AdministrativeArea-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
            }
        }

        return (
            <div className='AdministrativeArea'>
                {openingHoursSpecification}
                {sameAs}
                {photo}
                {image}
                {telephone}
                {faxNumber}
                {aggregateRating}
                {containsPlace}
                {logo}
                {additionalType}
                {event}
                {isicV4}
                {geo}
                {review}
                {additionalProperty}
                {mainEntityOfPage}
                {description}
                {containedInPlace}
                {address}
                {alternateName}
                {hasMap}
                {branchCode}
                {potentialAction}
                {name}
                {url}
                {globalLocationNumber}
            </div>
        );
    }
};

AdministrativeArea.defaultProps = {
};

AdministrativeArea.propTypes = {
   openingHoursSpecification: React.propTypes.object,
   sameAs: React.propTypes.string,
   photo: React.propTypes.object,
   image: React.propTypes.object,
   telephone: React.propTypes.string,
   faxNumber: React.propTypes.string,
   aggregateRating: React.propTypes.object,
   containsPlace: React.propTypes.object,
   logo: React.propTypes.object,
   additionalType: React.propTypes.string,
   event: React.propTypes.object,
   isicV4: React.propTypes.string,
   geo: React.propTypes.object,
   review: React.propTypes.object,
   additionalProperty: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   description: React.propTypes.string,
   containedInPlace: React.propTypes.object,
   address: React.propTypes.object,
   alternateName: React.propTypes.string,
   hasMap: React.propTypes.object,
   branchCode: React.propTypes.string,
   potentialAction: React.propTypes.object,
   name: React.propTypes.string,
   url: React.propTypes.string,
   globalLocationNumber: React.propTypes.string,
};

