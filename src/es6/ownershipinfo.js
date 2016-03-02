/* OwnershipInfo - A structured value providing information about when a certain organization or person owned a certain product.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class OwnershipInfo extends Component {
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

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OwnershipInfo-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OwnershipInfo-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OwnershipInfo-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OwnershipInfo-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let ownedFrom;
        if (this.props.ownedFrom) {
            if (this.props.ownedFrom instanceof Array) {
                ownedFrom = (
                   <div className='ownedFrom__container'>
                       <div className='ownedFrom__header' data-advice='HTML for the *head* of the section'>ownedFroms</div>
                       {this.props.ownedFrom.map((item, index) => {
                            return (<div className='ownedFrom' data-advice='Put your HTML here. ownedFrom is a DateTime.'><time className="OwnershipInfo-ownedFrom">ownedFrom: {this.props.ownedFrom}</time></div>);
                       })}
                       <div className='ownedFrom__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                ownedFrom = (<div className='ownedFrom' data-advice='Put your HTML here. ownedFrom is a DateTime.'><time className="OwnershipInfo-ownedFrom">ownedFrom: {this.props.ownedFrom}</time></div>);
            }
        }

        let acquiredFrom;
        if (this.props.acquiredFrom) {
            if (this.props.acquiredFrom instanceof Array) {
                acquiredFrom = (
                   <div className='acquiredFrom__container'>
                       <div className='acquiredFrom__header' data-advice='HTML for the *head* of the section'>acquiredFroms</div>
                       {this.props.acquiredFrom.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.acquiredFrom} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.acquiredFrom} />);
                           }
                       })}
                       <div className='acquiredFrom__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   acquiredFrom = (<Person key={index} {...this.props.acquiredFrom} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   acquiredFrom = (<Organization key={index} {...this.props.acquiredFrom} />);
               }
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OwnershipInfo-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OwnershipInfo-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let ownedThrough;
        if (this.props.ownedThrough) {
            if (this.props.ownedThrough instanceof Array) {
                ownedThrough = (
                   <div className='ownedThrough__container'>
                       <div className='ownedThrough__header' data-advice='HTML for the *head* of the section'>ownedThroughs</div>
                       {this.props.ownedThrough.map((item, index) => {
                            return (<div className='ownedThrough' data-advice='Put your HTML here. ownedThrough is a DateTime.'><time className="OwnershipInfo-ownedThrough">ownedThrough: {this.props.ownedThrough}</time></div>);
                       })}
                       <div className='ownedThrough__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                ownedThrough = (<div className='ownedThrough' data-advice='Put your HTML here. ownedThrough is a DateTime.'><time className="OwnershipInfo-ownedThrough">ownedThrough: {this.props.ownedThrough}</time></div>);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OwnershipInfo-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OwnershipInfo-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OwnershipInfo-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OwnershipInfo-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OwnershipInfo-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OwnershipInfo-alternateName">alternateName: {this.props.alternateName}</p></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OwnershipInfo-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OwnershipInfo-image" src={this.props.image} /></div>);
               }
            }
        }

        let typeOfGood;
        if (this.props.typeOfGood) {
            if (this.props.typeOfGood instanceof Array) {
                typeOfGood = (
                   <div className='typeOfGood__container'>
                       <div className='typeOfGood__header' data-advice='HTML for the *head* of the section'>typeOfGoods</div>
                       {this.props.typeOfGood.map((item, index) => {
                            return (<Product  {...this.props.typeOfGood} />);
                       })}
                       <div className='typeOfGood__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                typeOfGood = (<Product  {...this.props.typeOfGood} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OwnershipInfo-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OwnershipInfo-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='OwnershipInfo'>
                {potentialAction}
                {description}
                {sameAs}
                {ownedFrom}
                {acquiredFrom}
                {url}
                {ownedThrough}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {image}
                {typeOfGood}
                {name}
            </div>
        );
    }
};

OwnershipInfo.defaultProps = {
};

OwnershipInfo.propTypes = {
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   ownedFrom: React.PropTypes.object,
   acquiredFrom: React.PropTypes.object,
   url: React.PropTypes.object,
   ownedThrough: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   image: React.PropTypes.object,
   typeOfGood: React.PropTypes.object,
   name: React.PropTypes.object,
};

