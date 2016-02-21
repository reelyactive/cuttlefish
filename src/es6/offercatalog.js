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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OfferCatalog-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OfferCatalog-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OfferCatalog-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OfferCatalog-image" src={this.props.image} /></div>);
               }
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
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let itemListElement;
        if (this.props.itemListElement) {
            if (this.props.itemListElement instanceof Array) {
                itemListElement = (
                   <div className='itemListElement-container'>
                       <div className='itemListElement-header' data-advice='HTML for the *head* of the section'>itemListElements</div>
                       {this.props.itemListElement.map((item, index) => {
                           if (this.props['@type'] === 'Thing') {
                               return (<Thing key={index} {...this.props.itemListElement} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='itemListElement' data-advice='Put your HTML here. itemListElement is a Text.'><p className="OfferCatalog-itemListElement">itemListElement: {this.props.itemListElement}</p></div>);
                           }
                           else if (this.props['@type'] === 'ListItem') {
                               return (<ListItem key={index} {...this.props.itemListElement} />);
                           }
                       })};
                       <div className='itemListElement-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Thing') {
                   itemListElement = (<Thing key={index} {...this.props.itemListElement} />);
               }
               else if (this.props['@type'] === 'Text') {
                   itemListElement = (<div className='itemListElement' data-advice='Put your HTML here. itemListElement is a Text.'><p className="OfferCatalog-itemListElement">itemListElement: {this.props.itemListElement}</p></div>);
               }
               else if (this.props['@type'] === 'ListItem') {
                   itemListElement = (<ListItem key={index} {...this.props.itemListElement} />);
               }
            }
        }

        let itemListOrder;
        if (this.props.itemListOrder) {
            if (this.props.itemListOrder instanceof Array) {
                itemListOrder = (
                   <div className='itemListOrder-container'>
                       <div className='itemListOrder-header' data-advice='HTML for the *head* of the section'>itemListOrders</div>
                       {this.props.itemListOrder.map((item, index) => {
                           if (this.props['@type'] === 'ItemListOrderType') {
                               return (<ItemListOrderType key={index} {...this.props.itemListOrder} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='itemListOrder' data-advice='Put your HTML here. itemListOrder is a Text.'><p className="OfferCatalog-itemListOrder">itemListOrder: {this.props.itemListOrder}</p></div>);
                           }
                       })};
                       <div className='itemListOrder-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ItemListOrderType') {
                   itemListOrder = (<ItemListOrderType key={index} {...this.props.itemListOrder} />);
               }
               else if (this.props['@type'] === 'Text') {
                   itemListOrder = (<div className='itemListOrder' data-advice='Put your HTML here. itemListOrder is a Text.'><p className="OfferCatalog-itemListOrder">itemListOrder: {this.props.itemListOrder}</p></div>);
               }
            }
        }

        return (
            <div className='OfferCatalog'>
                {mainEntityOfPage}
                {image}
                {potentialAction}
                {itemListElement}
                {itemListOrder}
            </div>
        );
    }
};

OfferCatalog.defaultProps = {
};

OfferCatalog.propTypes = {
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   potentialAction: React.propTypes.object,
   itemListElement: React.propTypes.object,
   itemListOrder: React.propTypes.object,
};

