/* EntryPoint - An entry point, within some Web-based protocol.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import CreativeWork from './creativework.js';
import SoftwareApplication from './softwareapplication.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class EntryPoint extends Component {
    render() {
        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="EntryPoint-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="EntryPoint-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let actionApplication;
        if (this.props.actionApplication) {
            if (this.props.actionApplication instanceof Array) {
                actionApplication = (
                   <div className='actionApplication-container'>
                       <div className='actionApplication-header' data-advice='HTML for the *head* of the section'>actionApplications</div>
                       {this.props.actionApplication.map((item, index) => {
                            return (<SoftwareApplication key={index} {...this.props.actionApplication} />);
                       })};
                       <div className='actionApplication-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                actionApplication = (<SoftwareApplication key={index} {...this.props.actionApplication} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EntryPoint-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EntryPoint-image" src={this.props.image} /></div>);
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

        let actionPlatform;
        if (this.props.actionPlatform) {
            if (this.props.actionPlatform instanceof Array) {
                actionPlatform = (
                   <div className='actionPlatform-container'>
                       <div className='actionPlatform-header' data-advice='HTML for the *head* of the section'>actionPlatforms</div>
                       {this.props.actionPlatform.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a URL.'><a className="EntryPoint-actionPlatform" href={this.props.actionPlatform} target="_blank">actionPlatform</a></div>);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a Text.'><p className="EntryPoint-actionPlatform">actionPlatform: {this.props.actionPlatform}</p></div>);
                           }
                       })};
                       <div className='actionPlatform-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   actionPlatform = (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a URL.'><a className="EntryPoint-actionPlatform" href={this.props.actionPlatform} target="_blank">actionPlatform</a></div>);
               }
               else if (this.props['@type'] === 'Text') {
                   actionPlatform = (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a Text.'><p className="EntryPoint-actionPlatform">actionPlatform: {this.props.actionPlatform}</p></div>);
               }
            }
        }

        return (
            <div className='EntryPoint'>
                {mainEntityOfPage}
                {actionApplication}
                {image}
                {potentialAction}
                {actionPlatform}
            </div>
        );
    }
};

EntryPoint.defaultProps = {
};

EntryPoint.propTypes = {
   mainEntityOfPage: React.propTypes.object,
   actionApplication: React.propTypes.object,
   image: React.propTypes.object,
   potentialAction: React.propTypes.object,
   actionPlatform: React.propTypes.object,
};

