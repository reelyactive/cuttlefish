/* GeoCoordinates - The geographic coordinates of a place or event.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Country from './country.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class GeoCoordinates extends Component {
    render() {
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

        let elevation;
        if (this.props.elevation) {
            if (this.props.elevation instanceof Array) {
                elevation = (
                   <div className='elevation-container'>
                       <div className='elevation-header' data-advice='HTML for the *head* of the section'>elevations</div>
                       {this.props.elevation.map((item, index) => {
                           return (<div className='elevation' data-advice='Put your HTML here. elevation is a Text or Number.'><div className="GeoCoordinates-elevation">elevation: {this.props.elevation}</div></div>);
                       })};
                       <div className='elevation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                elevation = (<div className='elevation' data-advice='Put your HTML here. elevation is a Text or Number.'><div className="GeoCoordinates-elevation">elevation: {this.props.elevation}</div></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="GeoCoordinates-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="GeoCoordinates-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="GeoCoordinates-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="GeoCoordinates-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="GeoCoordinates-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="GeoCoordinates-image" src={this.props.image} /></div>);
            }
        }

        let longitude;
        if (this.props.longitude) {
            if (this.props.longitude instanceof Array) {
                longitude = (
                   <div className='longitude-container'>
                       <div className='longitude-header' data-advice='HTML for the *head* of the section'>longitudes</div>
                       {this.props.longitude.map((item, index) => {
                           return (<div className='longitude' data-advice='Put your HTML here. longitude is a Text or Number.'><div className="GeoCoordinates-longitude">longitude: {this.props.longitude}</div></div>);
                       })};
                       <div className='longitude-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                longitude = (<div className='longitude' data-advice='Put your HTML here. longitude is a Text or Number.'><div className="GeoCoordinates-longitude">longitude: {this.props.longitude}</div></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="GeoCoordinates-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="GeoCoordinates-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let addressCountry;
        if (this.props.addressCountry) {
            if (this.props.addressCountry instanceof Array) {
                addressCountry = (
                   <div className='addressCountry-container'>
                       <div className='addressCountry-header' data-advice='HTML for the *head* of the section'>addressCountrys</div>
                       {this.props.addressCountry.map((item, index) => {
                           return (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text or Country.'><div className="GeoCoordinates-addressCountry">addressCountry: {this.props.addressCountry}</div></div>);
                       })};
                       <div className='addressCountry-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                addressCountry = (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text or Country.'><div className="GeoCoordinates-addressCountry">addressCountry: {this.props.addressCountry}</div></div>);
            }
        }

        let postalCode;
        if (this.props.postalCode) {
            if (this.props.postalCode instanceof Array) {
                postalCode = (
                   <div className='postalCode-container'>
                       <div className='postalCode-header' data-advice='HTML for the *head* of the section'>postalCodes</div>
                       {this.props.postalCode.map((item, index) => {
                           return (<div className='postalCode' data-advice='Put your HTML here. postalCode is a Text.'><p className="GeoCoordinates-postalCode">postalCode: {this.props.postalCode}</p></div>);
                       })};
                       <div className='postalCode-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                postalCode = (<div className='postalCode' data-advice='Put your HTML here. postalCode is a Text.'><p className="GeoCoordinates-postalCode">postalCode: {this.props.postalCode}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="GeoCoordinates-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="GeoCoordinates-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address-container'>
                       <div className='address-header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           return (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="GeoCoordinates-address">address: {this.props.address}</div></div>);
                       })};
                       <div className='address-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                address = (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="GeoCoordinates-address">address: {this.props.address}</div></div>);
            }
        }

        let latitude;
        if (this.props.latitude) {
            if (this.props.latitude instanceof Array) {
                latitude = (
                   <div className='latitude-container'>
                       <div className='latitude-header' data-advice='HTML for the *head* of the section'>latitudes</div>
                       {this.props.latitude.map((item, index) => {
                           return (<div className='latitude' data-advice='Put your HTML here. latitude is a Text or Number.'><div className="GeoCoordinates-latitude">latitude: {this.props.latitude}</div></div>);
                       })};
                       <div className='latitude-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                latitude = (<div className='latitude' data-advice='Put your HTML here. latitude is a Text or Number.'><div className="GeoCoordinates-latitude">latitude: {this.props.latitude}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="GeoCoordinates-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="GeoCoordinates-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="GeoCoordinates-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="GeoCoordinates-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="GeoCoordinates-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="GeoCoordinates-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='GeoCoordinates'>
                {potentialAction}
                {elevation}
                {description}
                {sameAs}
                {image}
                {longitude}
                {mainEntityOfPage}
                {addressCountry}
                {postalCode}
                {url}
                {address}
                {latitude}
                {additionalType}
                {alternateName}
                {name}
            </div>
        );
    }
};

GeoCoordinates.defaultProps = {
};

GeoCoordinates.propTypes = {
   potentialAction: React.propTypes.object,
   elevation: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   longitude: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   addressCountry: React.propTypes.object,
   postalCode: React.propTypes.string,
   url: React.propTypes.string,
   address: React.propTypes.object,
   latitude: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   name: React.propTypes.string,
};

