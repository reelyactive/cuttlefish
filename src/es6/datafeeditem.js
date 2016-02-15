/* DataFeedItem - A single item within a larger data feed.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Thing from './thing.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class DataFeedItem extends Component {
    render() {
        let dateDeleted;
        if (this.props.dateDeleted) {
            if (this.props.dateDeleted instanceof Array) {
                dateDeleted = (
                   <div className='dateDeleted-container'>
                       <div className='dateDeleted-header' data-advice='HTML for the *head* of the section'>dateDeleteds</div>
                       {this.props.dateDeleted.map((item, index) => {
                           return (<div className='dateDeleted' data-advice='Put your HTML here. dateDeleted is a DateTime.'><time className="DataFeedItem-dateDeleted">dateDeleted: {this.props.dateDeleted}</time></div>);
                       })};
                       <div className='dateDeleted-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dateDeleted = (<div className='dateDeleted' data-advice='Put your HTML here. dateDeleted is a DateTime.'><time className="DataFeedItem-dateDeleted">dateDeleted: {this.props.dateDeleted}</time></div>);
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="DataFeedItem-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="DataFeedItem-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="DataFeedItem-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="DataFeedItem-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="DataFeedItem-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="DataFeedItem-image" src={this.props.image} /></div>);
            }
        }

        let dateCreated;
        if (this.props.dateCreated) {
            if (this.props.dateCreated instanceof Array) {
                dateCreated = (
                   <div className='dateCreated-container'>
                       <div className='dateCreated-header' data-advice='HTML for the *head* of the section'>dateCreateds</div>
                       {this.props.dateCreated.map((item, index) => {
                           return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime or Date.'><div className="DataFeedItem-dateCreated">dateCreated: {this.props.dateCreated}</div></div>);
                       })};
                       <div className='dateCreated-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime or Date.'><div className="DataFeedItem-dateCreated">dateCreated: {this.props.dateCreated}</div></div>);
            }
        }

        let item;
        if (this.props.item) {
            if (this.props.item instanceof Array) {
                item = (
                   <div className='item-container'>
                       <div className='item-header' data-advice='HTML for the *head* of the section'>items</div>
                       {this.props.item.map((item, index) => {
                           return (<Thing key={index} {...this.props.item} />);
                       })};
                       <div className='item-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                item = (<Thing  {...this.props.item} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="DataFeedItem-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="DataFeedItem-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="DataFeedItem-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="DataFeedItem-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="DataFeedItem-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="DataFeedItem-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="DataFeedItem-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="DataFeedItem-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let dateModified;
        if (this.props.dateModified) {
            if (this.props.dateModified instanceof Array) {
                dateModified = (
                   <div className='dateModified-container'>
                       <div className='dateModified-header' data-advice='HTML for the *head* of the section'>dateModifieds</div>
                       {this.props.dateModified.map((item, index) => {
                           return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime or Date.'><div className="DataFeedItem-dateModified">dateModified: {this.props.dateModified}</div></div>);
                       })};
                       <div className='dateModified-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime or Date.'><div className="DataFeedItem-dateModified">dateModified: {this.props.dateModified}</div></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="DataFeedItem-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="DataFeedItem-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='DataFeedItem'>
                {dateDeleted}
                {potentialAction}
                {description}
                {sameAs}
                {image}
                {dateCreated}
                {item}
                {url}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {dateModified}
                {name}
            </div>
        );
    }
};

DataFeedItem.defaultProps = {
};

DataFeedItem.propTypes = {
   dateDeleted: React.propTypes.string,
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   dateCreated: React.propTypes.object,
   item: React.propTypes.object,
   url: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   dateModified: React.propTypes.object,
   name: React.propTypes.string,
};

