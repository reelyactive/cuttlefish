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

        let elevation;
        if (this.props.elevation) {
            if (this.props.elevation instanceof Array) {
                elevation = (
                   <div className='elevation__container'>
                       <div className='elevation__header' data-advice='HTML for the *head* of the section'>elevations</div>
                       {this.props.elevation.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Text.'><p className="GeoShape-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Number.'><p className="GeoShape-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                       })};
                       <div className='elevation__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   elevation = (<div className='elevation' data-advice='Put your HTML here. elevation is a Text.'><p className="GeoShape-elevation">elevation: {this.props.elevation}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   elevation = (<div className='elevation' data-advice='Put your HTML here. elevation is a Number.'><p className="GeoShape-elevation">elevation: {this.props.elevation}</p></div>);
               }
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="GeoShape-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="GeoShape-image" src={this.props.image} /></div>);
               }
            }
        }

        let addressCountry;
        if (this.props.addressCountry) {
            if (this.props.addressCountry instanceof Array) {
                addressCountry = (
                   <div className='addressCountry__container'>
                       <div className='addressCountry__header' data-advice='HTML for the *head* of the section'>addressCountrys</div>
                       {this.props.addressCountry.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text.'><p className="GeoShape-addressCountry">addressCountry: {this.props.addressCountry}</p></div>);
                           }
                           else if (this.props['@type'] === 'Country') {
                               return (<Country key={index} {...this.props.addressCountry} />);
                           }
                       })};
                       <div className='addressCountry__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   addressCountry = (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text.'><p className="GeoShape-addressCountry">addressCountry: {this.props.addressCountry}</p></div>);
               }
               else if (this.props['@type'] === 'Country') {
                   addressCountry = (<Country key={index} {...this.props.addressCountry} />);
               }
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
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="GeoShape-address">address: {this.props.address}</p></div>);
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
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="GeoShape-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
               }
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="GeoShape-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="GeoShape-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        return (
            <div className='GeoShape'>
                {potentialAction}
                {elevation}
                {image}
                {addressCountry}
                {address}
                {mainEntityOfPage}
            </div>
        );
    }
};

GeoShape.defaultProps = {
};

GeoShape.propTypes = {
   potentialAction: React.propTypes.object,
   elevation: React.propTypes.object,
   image: React.propTypes.object,
   addressCountry: React.propTypes.object,
   address: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
};

