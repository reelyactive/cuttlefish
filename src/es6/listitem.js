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
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let nextItem;
        if (this.props.nextItem) {
            if (this.props.nextItem instanceof Array) {
                nextItem = (
                   <div className='nextItem__container'>
                       <div className='nextItem__header' data-advice='HTML for the *head* of the section'>nextItems</div>
                       {this.props.nextItem.map((item, index) => {
                            return (<ListItem key={index} {...this.props.nextItem} />);
                       })};
                       <div className='nextItem__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                nextItem = (<ListItem key={index} {...this.props.nextItem} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ListItem-image" src={this.props.image} /></div>);
                           }
                       })};
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ListItem-image" src={this.props.image} /></div>);
               }
            }
        }

        let item;
        if (this.props.item) {
            if (this.props.item instanceof Array) {
                item = (
                   <div className='item__container'>
                       <div className='item__header' data-advice='HTML for the *head* of the section'>items</div>
                       {this.props.item.map((item, index) => {
                            return (<Thing key={index} {...this.props.item} />);
                       })};
                       <div className='item__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                item = (<Thing key={index} {...this.props.item} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ListItem-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ListItem-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let position;
        if (this.props.position) {
            if (this.props.position instanceof Array) {
                position = (
                   <div className='position__container'>
                       <div className='position__header' data-advice='HTML for the *head* of the section'>positions</div>
                       {this.props.position.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Text.'><p className="ListItem-position">position: {this.props.position}</p></div>);
                           }
                           else if (this.props['@type'] === 'Integer') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Integer.'><p className="ListItem-position">position: {this.props.position}</p></div>);
                           }
                       })};
                       <div className='position__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   position = (<div className='position' data-advice='Put your HTML here. position is a Text.'><p className="ListItem-position">position: {this.props.position}</p></div>);
               }
               else if (this.props['@type'] === 'Integer') {
                   position = (<div className='position' data-advice='Put your HTML here. position is a Integer.'><p className="ListItem-position">position: {this.props.position}</p></div>);
               }
            }
        }

        let previousItem;
        if (this.props.previousItem) {
            if (this.props.previousItem instanceof Array) {
                previousItem = (
                   <div className='previousItem__container'>
                       <div className='previousItem__header' data-advice='HTML for the *head* of the section'>previousItems</div>
                       {this.props.previousItem.map((item, index) => {
                            return (<ListItem key={index} {...this.props.previousItem} />);
                       })};
                       <div className='previousItem__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                previousItem = (<ListItem key={index} {...this.props.previousItem} />);
            }
        }

        return (
            <div className='ListItem'>
                {potentialAction}
                {nextItem}
                {image}
                {item}
                {mainEntityOfPage}
                {position}
                {previousItem}
            </div>
        );
    }
};

ListItem.defaultProps = {
};

ListItem.propTypes = {
   potentialAction: React.propTypes.object,
   nextItem: React.propTypes.object,
   image: React.propTypes.object,
   item: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   position: React.propTypes.object,
   previousItem: React.propTypes.object,
};

