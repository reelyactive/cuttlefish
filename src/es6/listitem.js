/* ListItem - An list item, e.g. a step in a checklist or how-to description.. Generated automatically by the reactGenerator. */
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ListItem-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='nextItem__container'>
                       <div className='nextItem__header' data-advice='HTML for the *head* of the section'>nextItems</div>
                       {this.props.nextItem.map((item, index) => {
                            return (<ListItem  {...this.props.nextItem} />);
                       })}
                       <div className='nextItem__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ListItem-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ListItem-image" src={this.props.image} /></div>);
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
                            return (<Thing  {...this.props.item} />);
                       })}
                       <div className='item__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ListItem-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='position__container'>
                       <div className='position__header' data-advice='HTML for the *head* of the section'>positions</div>
                       {this.props.position.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Text.'><p className="ListItem-position">position: {this.props.position}</p></div>);
                           }
                           else if (this.props['@type'] === 'Integer') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Integer.'><p className="ListItem-position">position: {this.props.position}</p></div>);
                           }
                       })}
                       <div className='position__footer' data-advice='HTML for the *footer* of the section'></div>
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
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ListItem-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ListItem-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='previousItem__container'>
                       <div className='previousItem__header' data-advice='HTML for the *head* of the section'>previousItems</div>
                       {this.props.previousItem.map((item, index) => {
                            return (<ListItem  {...this.props.previousItem} />);
                       })}
                       <div className='previousItem__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ListItem-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   nextItem: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   item: React.PropTypes.object,
   url: React.PropTypes.object,
   position: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   previousItem: React.PropTypes.object,
   name: React.PropTypes.object,
};

