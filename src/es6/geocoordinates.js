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
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let elevation;
        if (this.props.elevation) {
            if (this.props.elevation instanceof Array) {
                elevation = (
                   <div className='elevation-container'>
                       <div className='elevation-header' data-advice='HTML for the *head* of the section'>elevations</div>
                       {this.props.elevation.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Text.'><p className="GeoCoordinates-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Number.'><p className="GeoCoordinates-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                       })};
                       <div className='elevation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   elevation = (<div className='elevation' data-advice='Put your HTML here. elevation is a Text.'><p className="GeoCoordinates-elevation">elevation: {this.props.elevation}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   elevation = (<div className='elevation' data-advice='Put your HTML here. elevation is a Number.'><p className="GeoCoordinates-elevation">elevation: {this.props.elevation}</p></div>);
               }
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="GeoCoordinates-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="GeoCoordinates-image" src={this.props.image} /></div>);
               }
            }
        }

        let longitude;
        if (this.props.longitude) {
            if (this.props.longitude instanceof Array) {
                longitude = (
                   <div className='longitude-container'>
                       <div className='longitude-header' data-advice='HTML for the *head* of the section'>longitudes</div>
                       {this.props.longitude.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='longitude' data-advice='Put your HTML here. longitude is a Text.'><p className="GeoCoordinates-longitude">longitude: {this.props.longitude}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='longitude' data-advice='Put your HTML here. longitude is a Number.'><p className="GeoCoordinates-longitude">longitude: {this.props.longitude}</p></div>);
                           }
                       })};
                       <div className='longitude-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   longitude = (<div className='longitude' data-advice='Put your HTML here. longitude is a Text.'><p className="GeoCoordinates-longitude">longitude: {this.props.longitude}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   longitude = (<div className='longitude' data-advice='Put your HTML here. longitude is a Number.'><p className="GeoCoordinates-longitude">longitude: {this.props.longitude}</p></div>);
               }
            }
        }

        let addressCountry;
        if (this.props.addressCountry) {
            if (this.props.addressCountry instanceof Array) {
                addressCountry = (
                   <div className='addressCountry-container'>
                       <div className='addressCountry-header' data-advice='HTML for the *head* of the section'>addressCountrys</div>
                       {this.props.addressCountry.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text.'><p className="GeoCoordinates-addressCountry">addressCountry: {this.props.addressCountry}</p></div>);
                           }
                           else if (this.props['@type'] === 'Country') {
                               return (<Country key={index} {...this.props.addressCountry} />);
                           }
                       })};
                       <div className='addressCountry-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   addressCountry = (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text.'><p className="GeoCoordinates-addressCountry">addressCountry: {this.props.addressCountry}</p></div>);
               }
               else if (this.props['@type'] === 'Country') {
                   addressCountry = (<Country key={index} {...this.props.addressCountry} />);
               }
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="GeoCoordinates-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="GeoCoordinates-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="GeoCoordinates-address">address: {this.props.address}</p></div>);
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
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="GeoCoordinates-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
               }
            }
        }

        let latitude;
        if (this.props.latitude) {
            if (this.props.latitude instanceof Array) {
                latitude = (
                   <div className='latitude-container'>
                       <div className='latitude-header' data-advice='HTML for the *head* of the section'>latitudes</div>
                       {this.props.latitude.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='latitude' data-advice='Put your HTML here. latitude is a Text.'><p className="GeoCoordinates-latitude">latitude: {this.props.latitude}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='latitude' data-advice='Put your HTML here. latitude is a Number.'><p className="GeoCoordinates-latitude">latitude: {this.props.latitude}</p></div>);
                           }
                       })};
                       <div className='latitude-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   latitude = (<div className='latitude' data-advice='Put your HTML here. latitude is a Text.'><p className="GeoCoordinates-latitude">latitude: {this.props.latitude}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   latitude = (<div className='latitude' data-advice='Put your HTML here. latitude is a Number.'><p className="GeoCoordinates-latitude">latitude: {this.props.latitude}</p></div>);
               }
            }
        }

        return (
            <div className='GeoCoordinates'>
                {potentialAction}
                {elevation}
                {image}
                {longitude}
                {addressCountry}
                {mainEntityOfPage}
                {address}
                {latitude}
            </div>
        );
    }
};

GeoCoordinates.defaultProps = {
};

GeoCoordinates.propTypes = {
   potentialAction: React.propTypes.object,
   elevation: React.propTypes.object,
   image: React.propTypes.object,
   longitude: React.propTypes.object,
   addressCountry: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   address: React.propTypes.object,
   latitude: React.propTypes.object,
};

