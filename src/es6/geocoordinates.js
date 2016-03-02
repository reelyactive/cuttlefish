/* GeoCoordinates - The geographic coordinates of a place or event.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class GeoCoordinates extends Component {
    render() {
        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action  {...this.props.potentialAction} />);
                       })}
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='elevation__container'>
                       <div className='elevation__header' data-advice='HTML for the *head* of the section'>elevations</div>
                       {this.props.elevation.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Text.'><p className="GeoCoordinates-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Number.'><p className="GeoCoordinates-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                       })}
                       <div className='elevation__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="GeoCoordinates-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="GeoCoordinates-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="GeoCoordinates-image" src={this.props.image} /></div>);
                           }
                       })}
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='longitude__container'>
                       <div className='longitude__header' data-advice='HTML for the *head* of the section'>longitudes</div>
                       {this.props.longitude.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='longitude' data-advice='Put your HTML here. longitude is a Text.'><p className="GeoCoordinates-longitude">longitude: {this.props.longitude}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='longitude' data-advice='Put your HTML here. longitude is a Number.'><p className="GeoCoordinates-longitude">longitude: {this.props.longitude}</p></div>);
                           }
                       })}
                       <div className='longitude__footer' data-advice='HTML for the *footer* of the section'></div>
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="GeoCoordinates-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let addressCountry;
        if (this.props.addressCountry) {
            if (this.props.addressCountry instanceof Array) {
                addressCountry = (
                   <div className='addressCountry__container'>
                       <div className='addressCountry__header' data-advice='HTML for the *head* of the section'>addressCountrys</div>
                       {this.props.addressCountry.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='addressCountry' data-advice='Put your HTML here. addressCountry is a Text.'><p className="GeoCoordinates-addressCountry">addressCountry: {this.props.addressCountry}</p></div>);
                           }
                           else if (this.props['@type'] === 'Country') {
                               return (<Country key={index} {...this.props.addressCountry} />);
                           }
                       })}
                       <div className='addressCountry__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let postalCode;
        if (this.props.postalCode) {
            if (this.props.postalCode instanceof Array) {
                postalCode = (
                   <div className='postalCode__container'>
                       <div className='postalCode__header' data-advice='HTML for the *head* of the section'>postalCodes</div>
                       {this.props.postalCode.map((item, index) => {
                            return (<div className='postalCode' data-advice='Put your HTML here. postalCode is a Text.'><p className="GeoCoordinates-postalCode">postalCode: {this.props.postalCode}</p></div>);
                       })}
                       <div className='postalCode__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="GeoCoordinates-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='address__container'>
                       <div className='address__header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="GeoCoordinates-address">address: {this.props.address}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.address} />);
                           }
                       })}
                       <div className='address__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='latitude__container'>
                       <div className='latitude__header' data-advice='HTML for the *head* of the section'>latitudes</div>
                       {this.props.latitude.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='latitude' data-advice='Put your HTML here. latitude is a Text.'><p className="GeoCoordinates-latitude">latitude: {this.props.latitude}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='latitude' data-advice='Put your HTML here. latitude is a Number.'><p className="GeoCoordinates-latitude">latitude: {this.props.latitude}</p></div>);
                           }
                       })}
                       <div className='latitude__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="GeoCoordinates-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="GeoCoordinates-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="GeoCoordinates-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
   potentialAction: React.PropTypes.object,
   elevation: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   longitude: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   addressCountry: React.PropTypes.object,
   postalCode: React.PropTypes.object,
   url: React.PropTypes.object,
   address: React.PropTypes.object,
   latitude: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   name: React.PropTypes.object,
};

