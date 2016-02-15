/* ListItem - An list item, e.g. a step in a checklist or how-to description.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Thing from './thing.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class ListItem extends Component {
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ListItem-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ListItem-description">description: {this.props.description}</p></div>);
            }
        }

        let nextItem;
        if (this.props.nextItem) {
            if (this.props.nextItem instanceof Array) {
                nextItem = (
                   <div className='nextItem-container'>
                       <div className='nextItem-header' data-advice='HTML for the *head* of the section'>nextItems</div>
                       {this.props.nextItem.map((item, index) => {
                           return (<ListItem key={index} {...this.props.nextItem} />);
                       })};
                       <div className='nextItem-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                nextItem = (<ListItem  {...this.props.nextItem} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ListItem-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ListItem-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ListItem-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ListItem-image" src={this.props.image} /></div>);
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
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ListItem-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ListItem-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let position;
        if (this.props.position) {
            if (this.props.position instanceof Array) {
                position = (
                   <div className='position-container'>
                       <div className='position-header' data-advice='HTML for the *head* of the section'>positions</div>
                       {this.props.position.map((item, index) => {
                           return (<div className='position' data-advice='Put your HTML here. position is a Text or Integer.'><div className="ListItem-position">position: {this.props.position}</div></div>);
                       })};
                       <div className='position-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                position = (<div className='position' data-advice='Put your HTML here. position is a Text or Integer.'><div className="ListItem-position">position: {this.props.position}</div></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="ListItem-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="ListItem-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ListItem-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ListItem-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ListItem-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ListItem-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let previousItem;
        if (this.props.previousItem) {
            if (this.props.previousItem instanceof Array) {
                previousItem = (
                   <div className='previousItem-container'>
                       <div className='previousItem-header' data-advice='HTML for the *head* of the section'>previousItems</div>
                       {this.props.previousItem.map((item, index) => {
                           return (<ListItem key={index} {...this.props.previousItem} />);
                       })};
                       <div className='previousItem-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                previousItem = (<ListItem  {...this.props.previousItem} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ListItem-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ListItem-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='ListItem'>
                {potentialAction}
                {description}
                {nextItem}
                {sameAs}
                {image}
                {item}
                {url}
                {position}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {previousItem}
                {name}
            </div>
        );
    }
};

ListItem.defaultProps = {
};

ListItem.propTypes = {
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   nextItem: React.propTypes.object,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   item: React.propTypes.object,
   url: React.propTypes.string,
   position: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   previousItem: React.propTypes.object,
   name: React.propTypes.string,
};

