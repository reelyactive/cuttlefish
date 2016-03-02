/* AdministrativeArea - A geographical region, typically under the jurisdiction of a particular government.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class AdministrativeArea extends Component {
    render() {
        let openingHoursSpecification;
        if (this.props.openingHoursSpecification) {
            if (this.props.openingHoursSpecification instanceof Array) {
                openingHoursSpecification = (
                   <div className='openingHoursSpecification__container'>
                       <div className='openingHoursSpecification__header' data-advice='HTML for the *head* of the section'>openingHoursSpecifications</div>
                       {this.props.openingHoursSpecification.map((item, index) => {
                            return (<OpeningHoursSpecification  {...this.props.openingHoursSpecification} />);
                       })}
                       <div className='openingHoursSpecification__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AdministrativeArea-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='photo__container'>
                       <div className='photo__header' data-advice='HTML for the *head* of the section'>photos</div>
                       {this.props.photo.map((item, index) => {
                           if (this.props['@type'] === 'Photograph') {
                               return (<Photograph key={index} {...this.props.photo} />);
                           }
                           else if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.photo} />);
                           }
                       })}
                       <div className='photo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Photograph') {
                   photo = (<Photograph key={index} {...this.props.photo} />);
               }
               else if (this.props['@type'] === 'ImageObject') {
                   photo = (<ImageObject key={index} {...this.props.photo} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="AdministrativeArea-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="AdministrativeArea-image" src={this.props.image} /></div>);
               }
            }
        }

        let telephone;
        if (this.props.telephone) {
            if (this.props.telephone instanceof Array) {
                telephone = (
                   <div className='telephone__container'>
                       <div className='telephone__header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                            return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="AdministrativeArea-telephone">telephone: {this.props.telephone}</p></div>);
                       })}
                       <div className='telephone__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='faxNumber__container'>
                       <div className='faxNumber__header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                            return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="AdministrativeArea-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })}
                       <div className='faxNumber__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating  {...this.props.aggregateRating} />);
                       })}
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='containsPlace__container'>
                       <div className='containsPlace__header' data-advice='HTML for the *head* of the section'>containsPlaces</div>
                       {this.props.containsPlace.map((item, index) => {
                            return (<Place  {...this.props.containsPlace} />);
                       })}
                       <div className='containsPlace__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='logo__container'>
                       <div className='logo__header' data-advice='HTML for the *head* of the section'>logos</div>
                       {this.props.logo.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.logo} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="AdministrativeArea-logo" href={this.props.logo} target="_blank">logo</a></div>);
                           }
                       })}
                       <div className='logo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   logo = (<ImageObject key={index} {...this.props.logo} />);
               }
               else if (this.props['@type'] === 'URL') {
                   logo = (<div className='logo' data-advice='Put your HTML here. logo is a URL.'><a className="AdministrativeArea-logo" href={this.props.logo} target="_blank">logo</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AdministrativeArea-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='event__container'>
                       <div className='event__header' data-advice='HTML for the *head* of the section'>events</div>
                       {this.props.event.map((item, index) => {
                            return (<Event  {...this.props.event} />);
                       })}
                       <div className='event__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='isicV4__container'>
                       <div className='isicV4__header' data-advice='HTML for the *head* of the section'>isicV4s</div>
                       {this.props.isicV4.map((item, index) => {
                            return (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="AdministrativeArea-isicV4">isicV4: {this.props.isicV4}</p></div>);
                       })}
                       <div className='isicV4__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='geo__container'>
                       <div className='geo__header' data-advice='HTML for the *head* of the section'>geos</div>
                       {this.props.geo.map((item, index) => {
                           if (this.props['@type'] === 'GeoCoordinates') {
                               return (<GeoCoordinates key={index} {...this.props.geo} />);
                           }
                           else if (this.props['@type'] === 'GeoShape') {
                               return (<GeoShape key={index} {...this.props.geo} />);
                           }
                       })}
                       <div className='geo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'GeoCoordinates') {
                   geo = (<GeoCoordinates key={index} {...this.props.geo} />);
               }
               else if (this.props['@type'] === 'GeoShape') {
                   geo = (<GeoShape key={index} {...this.props.geo} />);
               }
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review  {...this.props.review} />);
                       })}
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='additionalProperty__container'>
                       <div className='additionalProperty__header' data-advice='HTML for the *head* of the section'>additionalPropertys</div>
                       {this.props.additionalProperty.map((item, index) => {
                            return (<PropertyValue  {...this.props.additionalProperty} />);
                       })}
                       <div className='additionalProperty__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="AdministrativeArea-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="AdministrativeArea-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AdministrativeArea-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='containedInPlace__container'>
                       <div className='containedInPlace__header' data-advice='HTML for the *head* of the section'>containedInPlaces</div>
                       {this.props.containedInPlace.map((item, index) => {
                            return (<Place  {...this.props.containedInPlace} />);
                       })}
                       <div className='containedInPlace__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='address__container'>
                       <div className='address__header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="AdministrativeArea-address">address: {this.props.address}</p></div>);
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
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="AdministrativeArea-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
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
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AdministrativeArea-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='hasMap__container'>
                       <div className='hasMap__header' data-advice='HTML for the *head* of the section'>hasMaps</div>
                       {this.props.hasMap.map((item, index) => {
                           if (this.props['@type'] === 'Map') {
                               return (<Map key={index} {...this.props.hasMap} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='hasMap' data-advice='Put your HTML here. hasMap is a URL.'><a className="AdministrativeArea-hasMap" href={this.props.hasMap} target="_blank">hasMap</a></div>);
                           }
                       })}
                       <div className='hasMap__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Map') {
                   hasMap = (<Map key={index} {...this.props.hasMap} />);
               }
               else if (this.props['@type'] === 'URL') {
                   hasMap = (<div className='hasMap' data-advice='Put your HTML here. hasMap is a URL.'><a className="AdministrativeArea-hasMap" href={this.props.hasMap} target="_blank">hasMap</a></div>);
               }
            }
        }

        let branchCode;
        if (this.props.branchCode) {
            if (this.props.branchCode instanceof Array) {
                branchCode = (
                   <div className='branchCode__container'>
                       <div className='branchCode__header' data-advice='HTML for the *head* of the section'>branchCodes</div>
                       {this.props.branchCode.map((item, index) => {
                            return (<div className='branchCode' data-advice='Put your HTML here. branchCode is a Text.'><p className="AdministrativeArea-branchCode">branchCode: {this.props.branchCode}</p></div>);
                       })}
                       <div className='branchCode__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AdministrativeArea-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AdministrativeArea-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='globalLocationNumber__container'>
                       <div className='globalLocationNumber__header' data-advice='HTML for the *head* of the section'>globalLocationNumbers</div>
                       {this.props.globalLocationNumber.map((item, index) => {
                            return (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="AdministrativeArea-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
                       })}
                       <div className='globalLocationNumber__footer' data-advice='HTML for the *footer* of the section'></div>
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
   openingHoursSpecification: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   photo: React.PropTypes.object,
   image: React.PropTypes.object,
   telephone: React.PropTypes.object,
   faxNumber: React.PropTypes.object,
   aggregateRating: React.PropTypes.object,
   containsPlace: React.PropTypes.object,
   logo: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   event: React.PropTypes.object,
   isicV4: React.PropTypes.object,
   geo: React.PropTypes.object,
   review: React.PropTypes.object,
   additionalProperty: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   description: React.PropTypes.object,
   containedInPlace: React.PropTypes.object,
   address: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   hasMap: React.PropTypes.object,
   branchCode: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   name: React.PropTypes.object,
   url: React.PropTypes.object,
   globalLocationNumber: React.PropTypes.object,
};

