/* ItemList - A list of items of any sort\u2014for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class ItemList extends Component {
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ItemList-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ItemList-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ItemList-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ItemList-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ItemList-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ItemList-image" src={this.props.image} /></div>);
               }
            }
        }

        let itemListOrder;
        if (this.props.itemListOrder) {
            if (this.props.itemListOrder instanceof Array) {
                itemListOrder = (
                   <div className='itemListOrder__container'>
                       <div className='itemListOrder__header' data-advice='HTML for the *head* of the section'>itemListOrders</div>
                       {this.props.itemListOrder.map((item, index) => {
                           if (this.props['@type'] === 'ItemListOrderType') {
                               return (<ItemListOrderType key={index} {...this.props.itemListOrder} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='itemListOrder' data-advice='Put your HTML here. itemListOrder is a Text.'><p className="ItemList-itemListOrder">itemListOrder: {this.props.itemListOrder}</p></div>);
                           }
                       })}
                       <div className='itemListOrder__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ItemListOrderType') {
                   itemListOrder = (<ItemListOrderType key={index} {...this.props.itemListOrder} />);
               }
               else if (this.props['@type'] === 'Text') {
                   itemListOrder = (<div className='itemListOrder' data-advice='Put your HTML here. itemListOrder is a Text.'><p className="ItemList-itemListOrder">itemListOrder: {this.props.itemListOrder}</p></div>);
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
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ItemList-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ItemList-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let numberOfItems;
        if (this.props.numberOfItems) {
            if (this.props.numberOfItems instanceof Array) {
                numberOfItems = (
                   <div className='numberOfItems__container'>
                       <div className='numberOfItems__header' data-advice='HTML for the *head* of the section'>numberOfItemss</div>
                       {this.props.numberOfItems.map((item, index) => {
                            return (<div className='numberOfItems' data-advice='Put your HTML here. numberOfItems is a Integer.'><p className="ItemList-numberOfItems">numberOfItems: {this.props.numberOfItems}</p></div>);
                       })}
                       <div className='numberOfItems__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                numberOfItems = (<div className='numberOfItems' data-advice='Put your HTML here. numberOfItems is a Integer.'><p className="ItemList-numberOfItems">numberOfItems: {this.props.numberOfItems}</p></div>);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ItemList-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ItemList-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ItemList-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ItemList-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ItemList-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ItemList-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let itemListElement;
        if (this.props.itemListElement) {
            if (this.props.itemListElement instanceof Array) {
                itemListElement = (
                   <div className='itemListElement__container'>
                       <div className='itemListElement__header' data-advice='HTML for the *head* of the section'>itemListElements</div>
                       {this.props.itemListElement.map((item, index) => {
                           if (this.props['@type'] === 'ListItem') {
                               return (<ListItem key={index} {...this.props.itemListElement} />);
                           }
                           else if (this.props['@type'] === 'Thing') {
                               return (<Thing key={index} {...this.props.itemListElement} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='itemListElement' data-advice='Put your HTML here. itemListElement is a Text.'><p className="ItemList-itemListElement">itemListElement: {this.props.itemListElement}</p></div>);
                           }
                       })}
                       <div className='itemListElement__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ListItem') {
                   itemListElement = (<ListItem key={index} {...this.props.itemListElement} />);
               }
               else if (this.props['@type'] === 'Thing') {
                   itemListElement = (<Thing key={index} {...this.props.itemListElement} />);
               }
               else if (this.props['@type'] === 'Text') {
                   itemListElement = (<div className='itemListElement' data-advice='Put your HTML here. itemListElement is a Text.'><p className="ItemList-itemListElement">itemListElement: {this.props.itemListElement}</p></div>);
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
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ItemList-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ItemList-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='ItemList'>
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

ItemList.defaultProps = {
};

ItemList.propTypes = {
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   itemListOrder: React.PropTypes.object,
   url: React.PropTypes.object,
   numberOfItems: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   itemListElement: React.PropTypes.object,
   name: React.PropTypes.object,
};

