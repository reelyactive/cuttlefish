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
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                       })};
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>;
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
                       })};
                       <div className='interactionService__footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let interactionType;
        if (this.props.interactionType) {
            if (this.props.interactionType instanceof Array) {
                interactionType = (
                   <div className='interactionType__container'>
                       <div className='interactionType__header' data-advice='HTML for the *head* of the section'>interactionTypes</div>
                       {this.props.interactionType.map((item, index) => {
                            return (<Action key={index} {...this.props.interactionType} />);
                       })};
                       <div className='interactionType__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                interactionType = (<Action key={index} {...this.props.interactionType} />);
            }
        }

        return (
            <div className='InteractionCounter'>
                {mainEntityOfPage}
                {image}
                {interactionService}
                {potentialAction}
                {interactionType}
            </div>
        );
    }
};

InteractionCounter.defaultProps = {
};

InteractionCounter.propTypes = {
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   interactionService: React.propTypes.object,
   potentialAction: React.propTypes.object,
   interactionType: React.propTypes.object,
};

