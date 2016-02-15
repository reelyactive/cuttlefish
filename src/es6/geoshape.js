/* GeoShape - The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Country from './country.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class GeoShape extends Component {
    render() {
        let box;
        if (this.props.box) {
            if (this.props.box instanceof Array) {
                box = (
                   <div className='box-container'>
                       <div className='box-header' data-advice='HTML for the *head* of the section'>boxs</div>
                       {this.props.box.map((item, index) => {
                           return (<div className='box' data-advice='Put your HTML here. box is a Text.'><p className="GeoShape-box">box: {this.props.box}</p></div>);
                       })};
                       <div className='box-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                box = (<div className='box' data-advice='Put your HTML here. box is a Text.'><p className="GeoShape-box">box: {this.props.box}</p></div>);
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

        let elevation;
        if (this.props.elevation) {
            if (this.props.elevation instanceof Array) {
                elevation = (
                   <div className='elevation-container'>
                       <div className='elevation-header' data-advice='HTML for the *head* of the section'>elevations</div>
                       {this.props.elevation.map((item, index) => {
                           return (<div className='elevation' data-advice='Put your HTML here. elevation is a Text or Number.'><div className="GeoShape-elevation">elevation: {this.props.elevation}</div></div>);
                       })};
                       <div className='elevation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                elevation = (<div className='elevation' data-advice='Put your HTML here. elevation is a Text or Number.'><div className="GeoShape-elevation">elevation: {this.props.elevation}</div></div>);
            }
        }

        let polygon;
        if (this.props.polygon) {
            if (this.props.polygon instanceof Array) {
                polygon = (
                   <div className='polygon-container'>
                       <div className='polygon-header' data-advice='HTML for the *head* of the section'>polygons</div>
                       {this.props.polygon.map((item, index) => {
                           return (<div className='polygon' data-advice='Put your HTML here. polygon is a Text.'><p className="GeoShape-polygon">polygon: {this.props.polygon}</p></div>);
                       })};
                       <div className='polygon-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                polygon = (<div className='polygon' data-advice='Put your HTML here. polygon is a Text.'><p className="GeoShape-polygon">polygon: {this.props.polygon}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="GeoShape-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="GeoShape-name">name: {this.props.name}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="GeoShape-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="GeoShape-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="GeoShape-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="GeoShape-image" src={this.props.image} /></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="GeoShape-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="GeoShape-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let addressCountry;
        if (this.props.addressCountry) {
            if (this.props.addressCountry instanceof Array) {
                addressCountry = (
                   <div className='addressCountry-container'>
                       <div className='addressCountry-header' data-advice='HTML for the *head* of the section'>addressCountrys</div>
                       {this.props.addressCountry.map((item, index) => {
                           return (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text or Country.'><div className="GeoShape-addressCountry">addressCountry: {this.props.addressCountry}</div></div>);
                       })};
                       <div className='addressCountry-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                addressCountry = (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text or Country.'><div className="GeoShape-addressCountry">addressCountry: {this.props.addressCountry}</div></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="GeoShape-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="GeoShape-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="GeoShape-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="GeoShape-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address-container'>
                       <div className='address-header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           return (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="GeoShape-address">address: {this.props.address}</div></div>);
                       })};
                       <div className='address-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                address = (<div className='address' data-advice='Put your HTML here. address is a Text or PostalAddress.'><div className="GeoShape-address">address: {this.props.address}</div></div>);
            }
        }

        let postalCode;
        if (this.props.postalCode) {
            if (this.props.postalCode instanceof Array) {
                postalCode = (
                   <div className='postalCode-container'>
                       <div className='postalCode-header' data-advice='HTML for the *head* of the section'>postalCodes</div>
                       {this.props.postalCode.map((item, index) => {
                           return (<div className='postalCode' data-advice='Put your HTML here. postalCode is a Text.'><p className="GeoShape-postalCode">postalCode: {this.props.postalCode}</p></div>);
                       })};
                       <div className='postalCode-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                postalCode = (<div className='postalCode' data-advice='Put your HTML here. postalCode is a Text.'><p className="GeoShape-postalCode">postalCode: {this.props.postalCode}</p></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="GeoShape-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="GeoShape-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let circle;
        if (this.props.circle) {
            if (this.props.circle instanceof Array) {
                circle = (
                   <div className='circle-container'>
                       <div className='circle-header' data-advice='HTML for the *head* of the section'>circles</div>
                       {this.props.circle.map((item, index) => {
                           return (<div className='circle' data-advice='Put your HTML here. circle is a Text.'><p className="GeoShape-circle">circle: {this.props.circle}</p></div>);
                       })};
                       <div className='circle-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                circle = (<div className='circle' data-advice='Put your HTML here. circle is a Text.'><p className="GeoShape-circle">circle: {this.props.circle}</p></div>);
            }
        }

        let line;
        if (this.props.line) {
            if (this.props.line instanceof Array) {
                line = (
                   <div className='line-container'>
                       <div className='line-header' data-advice='HTML for the *head* of the section'>lines</div>
                       {this.props.line.map((item, index) => {
                           return (<div className='line' data-advice='Put your HTML here. line is a Text.'><p className="GeoShape-line">line: {this.props.line}</p></div>);
                       })};
                       <div className='line-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                line = (<div className='line' data-advice='Put your HTML here. line is a Text.'><p className="GeoShape-line">line: {this.props.line}</p></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="GeoShape-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="GeoShape-description">description: {this.props.description}</p></div>);
            }
        }

        return (
            <div className='GeoShape'>
                {box}
                {potentialAction}
                {elevation}
                {polygon}
                {name}
                {sameAs}
                {image}
                {mainEntityOfPage}
                {addressCountry}
                {alternateName}
                {url}
                {address}
                {postalCode}
                {additionalType}
                {circle}
                {line}
                {description}
            </div>
        );
    }
};

GeoShape.defaultProps = {
};

GeoShape.propTypes = {
   box: React.propTypes.string,
   potentialAction: React.propTypes.object,
   elevation: React.propTypes.object,
   polygon: React.propTypes.string,
   name: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   addressCountry: React.propTypes.object,
   alternateName: React.propTypes.string,
   url: React.propTypes.string,
   address: React.propTypes.object,
   postalCode: React.propTypes.string,
   additionalType: React.propTypes.string,
   circle: React.propTypes.string,
   line: React.propTypes.string,
   description: React.propTypes.string,
};

