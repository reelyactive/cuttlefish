/* DataFeedItem - A single item within a larger data feed.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class DataFeedItem extends Component {
    render() {
        let dateDeleted;
        if (this.props.dateDeleted) {
            if (this.props.dateDeleted instanceof Array) {
                dateDeleted = (
                   <div className='dateDeleted__container'>
                       <div className='dateDeleted__header' data-advice='HTML for the *head* of the section'>dateDeleteds</div>
                       {this.props.dateDeleted.map((item, index) => {
                            return (<div className='dateDeleted' data-advice='Put your HTML here. dateDeleted is a DateTime.'><time className="DataFeedItem-dateDeleted">dateDeleted: {this.props.dateDeleted}</time></div>);
                       })}
                       <div className='dateDeleted__footer' data-advice='HTML for the *footer* of the section'></div>
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="DataFeedItem-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="DataFeedItem-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="DataFeedItem-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="DataFeedItem-image" src={this.props.image} /></div>);
               }
            }
        }

        let dateCreated;
        if (this.props.dateCreated) {
            if (this.props.dateCreated instanceof Array) {
                dateCreated = (
                   <div className='dateCreated__container'>
                       <div className='dateCreated__header' data-advice='HTML for the *head* of the section'>dateCreateds</div>
                       {this.props.dateCreated.map((item, index) => {
                           if (this.props['@type'] === 'DateTime') {
                               return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime.'><time className="DataFeedItem-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
                           }
                           else if (this.props['@type'] === 'Date') {
                               return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date.'><time className="DataFeedItem-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
                           }
                       })}
                       <div className='dateCreated__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'DateTime') {
                   dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime.'><time className="DataFeedItem-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
               }
               else if (this.props['@type'] === 'Date') {
                   dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date.'><time className="DataFeedItem-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
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
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="DataFeedItem-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="DataFeedItem-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="DataFeedItem-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="DataFeedItem-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="DataFeedItem-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='dateModified__container'>
                       <div className='dateModified__header' data-advice='HTML for the *head* of the section'>dateModifieds</div>
                       {this.props.dateModified.map((item, index) => {
                           if (this.props['@type'] === 'DateTime') {
                               return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime.'><time className="DataFeedItem-dateModified">dateModified: {this.props.dateModified}</time></div>);
                           }
                           else if (this.props['@type'] === 'Date') {
                               return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date.'><time className="DataFeedItem-dateModified">dateModified: {this.props.dateModified}</time></div>);
                           }
                       })}
                       <div className='dateModified__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'DateTime') {
                   dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime.'><time className="DataFeedItem-dateModified">dateModified: {this.props.dateModified}</time></div>);
               }
               else if (this.props['@type'] === 'Date') {
                   dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date.'><time className="DataFeedItem-dateModified">dateModified: {this.props.dateModified}</time></div>);
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
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="DataFeedItem-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
   dateDeleted: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   dateCreated: React.PropTypes.object,
   item: React.PropTypes.object,
   url: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   dateModified: React.PropTypes.object,
   name: React.PropTypes.object,
};

