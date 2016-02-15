/* OfferCatalog - An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.. Generated automatically by the reactGenerator. */
import ImageObject from './imageobject.js';
import Thing from './thing.js';
import ListItem from './listitem.js';
import Action from './action.js';
import ItemListOrderType from './itemlistordertype.js';
import CreativeWork from './creativework.js';


import React, {
  Component
} from 'react';

export default class OfferCatalog extends Component {
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

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OfferCatalog-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OfferCatalog-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OfferCatalog-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OfferCatalog-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="OfferCatalog-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="OfferCatalog-image" src={this.props.image} /></div>);
            }
        }

        let itemListOrder;
        if (this.props.itemListOrder) {
            if (this.props.itemListOrder instanceof Array) {
                itemListOrder = (
                   <div className='itemListOrder-container'>
                       <div className='itemListOrder-header' data-advice='HTML for the *head* of the section'>itemListOrders</div>
                       {this.props.itemListOrder.map((item, index) => {
                           return (<div className='itemListOrder' data-advice='Put your HTML here. itemListOrder is a ItemListOrderType or Text.'><div className="OfferCatalog-itemListOrder">itemListOrder: {this.props.itemListOrder}</div></div>);
                       })};
                       <div className='itemListOrder-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                itemListOrder = (<div className='itemListOrder' data-advice='Put your HTML here. itemListOrder is a ItemListOrderType or Text.'><div className="OfferCatalog-itemListOrder">itemListOrder: {this.props.itemListOrder}</div></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OfferCatalog-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OfferCatalog-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let numberOfItems;
        if (this.props.numberOfItems) {
            if (this.props.numberOfItems instanceof Array) {
                numberOfItems = (
                   <div className='numberOfItems-container'>
                       <div className='numberOfItems-header' data-advice='HTML for the *head* of the section'>numberOfItemss</div>
                       {this.props.numberOfItems.map((item, index) => {
                           return (<div className='numberOfItems' data-advice='Put your HTML here. numberOfItems is a Integer.'><p className="OfferCatalog-numberOfItems">numberOfItems: {this.props.numberOfItems}</p></div>);
                       })};
                       <div className='numberOfItems-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                numberOfItems = (<div className='numberOfItems' data-advice='Put your HTML here. numberOfItems is a Integer.'><p className="OfferCatalog-numberOfItems">numberOfItems: {this.props.numberOfItems}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="OfferCatalog-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="OfferCatalog-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OfferCatalog-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OfferCatalog-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OfferCatalog-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OfferCatalog-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let itemListElement;
        if (this.props.itemListElement) {
            if (this.props.itemListElement instanceof Array) {
                itemListElement = (
                   <div className='itemListElement-container'>
                       <div className='itemListElement-header' data-advice='HTML for the *head* of the section'>itemListElements</div>
                       {this.props.itemListElement.map((item, index) => {
                           return (<div className='itemListElement' data-advice='Put your HTML here. itemListElement is a Thing or Text or ListItem.'><div className="OfferCatalog-itemListElement">itemListElement: {this.props.itemListElement}</div></div>);
                       })};
                       <div className='itemListElement-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                itemListElement = (<div className='itemListElement' data-advice='Put your HTML here. itemListElement is a Thing or Text or ListItem.'><div className="OfferCatalog-itemListElement">itemListElement: {this.props.itemListElement}</div></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OfferCatalog-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OfferCatalog-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='OfferCatalog'>
                {potentialAction}
                {description}
                {sameAs}
                {image}
                {itemListOrder}
                {url}
                {numberOfItems}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {itemListElement}
                {name}
            </div>
        );
    }
};

OfferCatalog.defaultProps = {
};

OfferCatalog.propTypes = {
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   itemListOrder: React.propTypes.object,
   url: React.propTypes.string,
   numberOfItems: React.propTypes.number,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   itemListElement: React.propTypes.object,
   name: React.propTypes.string,
};

