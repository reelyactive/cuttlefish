/* PriceSpecification - A structured value representing a monetary amount. Typically, only the subclasses of this type are used for markup.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class PriceSpecification extends Component {
    render() {
        let validFrom;
        if (this.props.validFrom) {
            if (this.props.validFrom instanceof Array) {
                validFrom = (
                   <div className='validFrom__container'>
                       <div className='validFrom__header' data-advice='HTML for the *head* of the section'>validFroms</div>
                       {this.props.validFrom.map((item, index) => {
                            return (<div className='validFrom' data-advice='Put your HTML here. validFrom is a DateTime.'><time className="PriceSpecification-validFrom">validFrom: {this.props.validFrom}</time></div>);
                       })}
                       <div className='validFrom__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                validFrom = (<div className='validFrom' data-advice='Put your HTML here. validFrom is a DateTime.'><time className="PriceSpecification-validFrom">validFrom: {this.props.validFrom}</time></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="PriceSpecification-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="PriceSpecification-description">description: {this.props.description}</p></div>);
            }
        }

        let priceCurrency;
        if (this.props.priceCurrency) {
            if (this.props.priceCurrency instanceof Array) {
                priceCurrency = (
                   <div className='priceCurrency__container'>
                       <div className='priceCurrency__header' data-advice='HTML for the *head* of the section'>priceCurrencys</div>
                       {this.props.priceCurrency.map((item, index) => {
                            return (<div className='priceCurrency' data-advice='Put your HTML here. priceCurrency is a Text.'><p className="PriceSpecification-priceCurrency">priceCurrency: {this.props.priceCurrency}</p></div>);
                       })}
                       <div className='priceCurrency__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                priceCurrency = (<div className='priceCurrency' data-advice='Put your HTML here. priceCurrency is a Text.'><p className="PriceSpecification-priceCurrency">priceCurrency: {this.props.priceCurrency}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="PriceSpecification-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="PriceSpecification-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let price;
        if (this.props.price) {
            if (this.props.price instanceof Array) {
                price = (
                   <div className='price__container'>
                       <div className='price__header' data-advice='HTML for the *head* of the section'>prices</div>
                       {this.props.price.map((item, index) => {
                           if (this.props['@type'] === 'Number') {
                               return (<div className='price' data-advice='Put your HTML here. price is a Number.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='price' data-advice='Put your HTML here. price is a Text.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
                           }
                       })}
                       <div className='price__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Number') {
                   price = (<div className='price' data-advice='Put your HTML here. price is a Number.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
               }
               else if (this.props['@type'] === 'Text') {
                   price = (<div className='price' data-advice='Put your HTML here. price is a Text.'><p className="PriceSpecification-price">price: {this.props.price}</p></div>);
               }
            }
        }

        let maxPrice;
        if (this.props.maxPrice) {
            if (this.props.maxPrice instanceof Array) {
                maxPrice = (
                   <div className='maxPrice__container'>
                       <div className='maxPrice__header' data-advice='HTML for the *head* of the section'>maxPrices</div>
                       {this.props.maxPrice.map((item, index) => {
                            return (<div className='maxPrice' data-advice='Put your HTML here. maxPrice is a Number.'><p className="PriceSpecification-maxPrice">maxPrice: {this.props.maxPrice}</p></div>);
                       })}
                       <div className='maxPrice__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                maxPrice = (<div className='maxPrice' data-advice='Put your HTML here. maxPrice is a Number.'><p className="PriceSpecification-maxPrice">maxPrice: {this.props.maxPrice}</p></div>);
            }
        }

        let eligibleTransactionVolume;
        if (this.props.eligibleTransactionVolume) {
            if (this.props.eligibleTransactionVolume instanceof Array) {
                eligibleTransactionVolume = (
                   <div className='eligibleTransactionVolume__container'>
                       <div className='eligibleTransactionVolume__header' data-advice='HTML for the *head* of the section'>eligibleTransactionVolumes</div>
                       {this.props.eligibleTransactionVolume.map((item, index) => {
                            return (<PriceSpecification  {...this.props.eligibleTransactionVolume} />);
                       })}
                       <div className='eligibleTransactionVolume__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                eligibleTransactionVolume = (<PriceSpecification  {...this.props.eligibleTransactionVolume} />);
            }
        }

        let valueAddedTaxIncluded;
        if (this.props.valueAddedTaxIncluded) {
            if (this.props.valueAddedTaxIncluded instanceof Array) {
                valueAddedTaxIncluded = (
                   <div className='valueAddedTaxIncluded__container'>
                       <div className='valueAddedTaxIncluded__header' data-advice='HTML for the *head* of the section'>valueAddedTaxIncludeds</div>
                       {this.props.valueAddedTaxIncluded.map((item, index) => {
                            return (<div className='valueAddedTaxIncluded' data-advice='Put your HTML here. valueAddedTaxIncluded is a Boolean.'><div className="PriceSpecification-valueAddedTaxIncluded">valueAddedTaxIncluded: {this.props.valueAddedTaxIncluded}</div></div>);
                       })}
                       <div className='valueAddedTaxIncluded__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                valueAddedTaxIncluded = (<div className='valueAddedTaxIncluded' data-advice='Put your HTML here. valueAddedTaxIncluded is a Boolean.'><div className="PriceSpecification-valueAddedTaxIncluded">valueAddedTaxIncluded: {this.props.valueAddedTaxIncluded}</div></div>);
            }
        }

        let eligibleQuantity;
        if (this.props.eligibleQuantity) {
            if (this.props.eligibleQuantity instanceof Array) {
                eligibleQuantity = (
                   <div className='eligibleQuantity__container'>
                       <div className='eligibleQuantity__header' data-advice='HTML for the *head* of the section'>eligibleQuantitys</div>
                       {this.props.eligibleQuantity.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.eligibleQuantity} />);
                       })}
                       <div className='eligibleQuantity__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                eligibleQuantity = (<QuantitativeValue  {...this.props.eligibleQuantity} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="PriceSpecification-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="PriceSpecification-url" href={this.props.url} target="_blank">url</a></div>);
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

        let validThrough;
        if (this.props.validThrough) {
            if (this.props.validThrough instanceof Array) {
                validThrough = (
                   <div className='validThrough__container'>
                       <div className='validThrough__header' data-advice='HTML for the *head* of the section'>validThroughs</div>
                       {this.props.validThrough.map((item, index) => {
                            return (<div className='validThrough' data-advice='Put your HTML here. validThrough is a DateTime.'><time className="PriceSpecification-validThrough">validThrough: {this.props.validThrough}</time></div>);
                       })}
                       <div className='validThrough__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                validThrough = (<div className='validThrough' data-advice='Put your HTML here. validThrough is a DateTime.'><time className="PriceSpecification-validThrough">validThrough: {this.props.validThrough}</time></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="PriceSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="PriceSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="PriceSpecification-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="PriceSpecification-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="PriceSpecification-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="PriceSpecification-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let minPrice;
        if (this.props.minPrice) {
            if (this.props.minPrice instanceof Array) {
                minPrice = (
                   <div className='minPrice__container'>
                       <div className='minPrice__header' data-advice='HTML for the *head* of the section'>minPrices</div>
                       {this.props.minPrice.map((item, index) => {
                            return (<div className='minPrice' data-advice='Put your HTML here. minPrice is a Number.'><p className="PriceSpecification-minPrice">minPrice: {this.props.minPrice}</p></div>);
                       })}
                       <div className='minPrice__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                minPrice = (<div className='minPrice' data-advice='Put your HTML here. minPrice is a Number.'><p className="PriceSpecification-minPrice">minPrice: {this.props.minPrice}</p></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="PriceSpecification-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="PriceSpecification-image" src={this.props.image} /></div>);
               }
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="PriceSpecification-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="PriceSpecification-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='PriceSpecification'>
                {validFrom}
                {description}
                {priceCurrency}
                {sameAs}
                {price}
                {maxPrice}
                {eligibleTransactionVolume}
                {valueAddedTaxIncluded}
                {eligibleQuantity}
                {url}
                {potentialAction}
                {validThrough}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {minPrice}
                {image}
                {name}
            </div>
        );
    }
};

PriceSpecification.defaultProps = {
};

PriceSpecification.propTypes = {
   validFrom: React.PropTypes.object,
   description: React.PropTypes.object,
   priceCurrency: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   price: React.PropTypes.object,
   maxPrice: React.PropTypes.object,
   eligibleTransactionVolume: React.PropTypes.object,
   valueAddedTaxIncluded: React.PropTypes.object,
   eligibleQuantity: React.PropTypes.object,
   url: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   validThrough: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   minPrice: React.PropTypes.object,
   image: React.PropTypes.object,
   name: React.PropTypes.object,
};

