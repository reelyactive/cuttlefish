/* InteractionCounter - A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.. Generated automatically by the reactGenerator. */
import WebSite from './website.js';
import Action from './action.js';
import SoftwareApplication from './softwareapplication.js';
import ImageObject from './imageobject.js';
import CreativeWork from './creativework.js';


import React, {
  Component
} from 'react';

export default class InteractionCounter extends Component {
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="InteractionCounter-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="InteractionCounter-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="InteractionCounter-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="InteractionCounter-image" src={this.props.image} /></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="InteractionCounter-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="InteractionCounter-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='userInteractionCount-container'>
                       <div className='userInteractionCount-header' data-advice='HTML for the *head* of the section'>userInteractionCounts</div>
                       {this.props.userInteractionCount.map((item, index) => {
                           return (<div className='userInteractionCount' data-advice='Put your HTML here. userInteractionCount is a Integer.'><p className="InteractionCounter-userInteractionCount">userInteractionCount: {this.props.userInteractionCount}</p></div>);
                       })};
                       <div className='userInteractionCount-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="InteractionCounter-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="InteractionCounter-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="InteractionCounter-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="InteractionCounter-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='interactionService-container'>
                       <div className='interactionService-header' data-advice='HTML for the *head* of the section'>interactionServices</div>
                       {this.props.interactionService.map((item, index) => {
                           return (<div className='interactionService' data-advice='Put your HTML here. interactionService is a SoftwareApplication or WebSite.'><div className="InteractionCounter-interactionService">interactionService: {this.props.interactionService}</div></div>);
                       })};
                       <div className='interactionService-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                interactionService = (<div className='interactionService' data-advice='Put your HTML here. interactionService is a SoftwareApplication or WebSite.'><div className="InteractionCounter-interactionService">interactionService: {this.props.interactionService}</div></div>);
            }
        }

        let interactionType;
        if (this.props.interactionType) {
            if (this.props.interactionType instanceof Array) {
                interactionType = (
                   <div className='interactionType-container'>
                       <div className='interactionType-header' data-advice='HTML for the *head* of the section'>interactionTypes</div>
                       {this.props.interactionType.map((item, index) => {
                           return (<Action key={index} {...this.props.interactionType} />);
                       })};
                       <div className='interactionType-footer' data-advice='HTML for the *footer* of the section'></div>;
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
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   name: React.propTypes.string,
   url: React.propTypes.string,
   userInteractionCount: React.propTypes.number,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   interactionService: React.propTypes.object,
   interactionType: React.propTypes.object,
};

