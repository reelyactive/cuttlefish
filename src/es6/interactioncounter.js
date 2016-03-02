/* InteractionCounter - A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class InteractionCounter extends Component {
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="InteractionCounter-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="InteractionCounter-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="InteractionCounter-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="InteractionCounter-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="InteractionCounter-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="InteractionCounter-image" src={this.props.image} /></div>);
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
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="InteractionCounter-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="InteractionCounter-name">name: {this.props.name}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="InteractionCounter-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="InteractionCounter-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let userInteractionCount;
        if (this.props.userInteractionCount) {
            if (this.props.userInteractionCount instanceof Array) {
                userInteractionCount = (
                   <div className='userInteractionCount__container'>
                       <div className='userInteractionCount__header' data-advice='HTML for the *head* of the section'>userInteractionCounts</div>
                       {this.props.userInteractionCount.map((item, index) => {
                            return (<div className='userInteractionCount' data-advice='Put your HTML here. userInteractionCount is a Integer.'><p className="InteractionCounter-userInteractionCount">userInteractionCount: {this.props.userInteractionCount}</p></div>);
                       })}
                       <div className='userInteractionCount__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                userInteractionCount = (<div className='userInteractionCount' data-advice='Put your HTML here. userInteractionCount is a Integer.'><p className="InteractionCounter-userInteractionCount">userInteractionCount: {this.props.userInteractionCount}</p></div>);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="InteractionCounter-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="InteractionCounter-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="InteractionCounter-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="InteractionCounter-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="InteractionCounter-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="InteractionCounter-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let interactionService;
        if (this.props.interactionService) {
            if (this.props.interactionService instanceof Array) {
                interactionService = (
                   <div className='interactionService__container'>
                       <div className='interactionService__header' data-advice='HTML for the *head* of the section'>interactionServices</div>
                       {this.props.interactionService.map((item, index) => {
                           if (this.props['@type'] === 'SoftwareApplication') {
                               return (<SoftwareApplication key={index} {...this.props.interactionService} />);
                           }
                           else if (this.props['@type'] === 'WebSite') {
                               return (<WebSite key={index} {...this.props.interactionService} />);
                           }
                       })}
                       <div className='interactionService__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'SoftwareApplication') {
                   interactionService = (<SoftwareApplication key={index} {...this.props.interactionService} />);
               }
               else if (this.props['@type'] === 'WebSite') {
                   interactionService = (<WebSite key={index} {...this.props.interactionService} />);
               }
            }
        }

        let interactionType;
        if (this.props.interactionType) {
            if (this.props.interactionType instanceof Array) {
                interactionType = (
                   <div className='interactionType__container'>
                       <div className='interactionType__header' data-advice='HTML for the *head* of the section'>interactionTypes</div>
                       {this.props.interactionType.map((item, index) => {
                            return (<Action  {...this.props.interactionType} />);
                       })}
                       <div className='interactionType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                interactionType = (<Action  {...this.props.interactionType} />);
            }
        }

        return (
            <div className='InteractionCounter'>
                {potentialAction}
                {description}
                {sameAs}
                {image}
                {name}
                {url}
                {userInteractionCount}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {interactionService}
                {interactionType}
            </div>
        );
    }
};

InteractionCounter.defaultProps = {
};

InteractionCounter.propTypes = {
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   name: React.PropTypes.object,
   url: React.PropTypes.object,
   userInteractionCount: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   interactionService: React.PropTypes.object,
   interactionType: React.PropTypes.object,
};

