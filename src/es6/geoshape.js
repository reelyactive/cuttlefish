/* GeoShape - The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class GeoShape extends Component {
    render() {
        let box;
        if (this.props.box) {
            if (this.props.box instanceof Array) {
                box = (
                   <div className='box__container'>
                       <div className='box__header' data-advice='HTML for the *head* of the section'>boxs</div>
                       {this.props.box.map((item, index) => {
                            return (<div className='box' data-advice='Put your HTML here. box is a Text.'><p className="GeoShape-box">box: {this.props.box}</p></div>);
                       })}
                       <div className='box__footer' data-advice='HTML for the *footer* of the section'></div>
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
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Text.'><p className="GeoShape-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='elevation' data-advice='Put your HTML here. elevation is a Number.'><p className="GeoShape-elevation">elevation: {this.props.elevation}</p></div>);
                           }
                       })}
                       <div className='elevation__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let polygon;
        if (this.props.polygon) {
            if (this.props.polygon instanceof Array) {
                polygon = (
                   <div className='polygon__container'>
                       <div className='polygon__header' data-advice='HTML for the *head* of the section'>polygons</div>
                       {this.props.polygon.map((item, index) => {
                            return (<div className='polygon' data-advice='Put your HTML here. polygon is a Text.'><p className="GeoShape-polygon">polygon: {this.props.polygon}</p></div>);
                       })}
                       <div className='polygon__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="GeoShape-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="GeoShape-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="GeoShape-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="GeoShape-image" src={this.props.image} /></div>);
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
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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
                       })}
                       <div className='addressCountry__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="GeoShape-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="GeoShape-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='address__container'>
                       <div className='address__header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="GeoShape-address">address: {this.props.address}</p></div>);
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
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="GeoShape-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
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
                            return (<div className='postalCode' data-advice='Put your HTML here. postalCode is a Text.'><p className="GeoShape-postalCode">postalCode: {this.props.postalCode}</p></div>);
                       })}
                       <div className='postalCode__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="GeoShape-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='circle__container'>
                       <div className='circle__header' data-advice='HTML for the *head* of the section'>circles</div>
                       {this.props.circle.map((item, index) => {
                            return (<div className='circle' data-advice='Put your HTML here. circle is a Text.'><p className="GeoShape-circle">circle: {this.props.circle}</p></div>);
                       })}
                       <div className='circle__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='line__container'>
                       <div className='line__header' data-advice='HTML for the *head* of the section'>lines</div>
                       {this.props.line.map((item, index) => {
                            return (<div className='line' data-advice='Put your HTML here. line is a Text.'><p className="GeoShape-line">line: {this.props.line}</p></div>);
                       })}
                       <div className='line__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="GeoShape-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
   box: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   elevation: React.PropTypes.object,
   polygon: React.PropTypes.object,
   name: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   addressCountry: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   url: React.PropTypes.object,
   address: React.PropTypes.object,
   postalCode: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   circle: React.PropTypes.object,
   line: React.PropTypes.object,
   description: React.PropTypes.object,
};

