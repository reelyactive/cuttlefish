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

        let contentType;
        if (this.props.contentType) {
            if (this.props.contentType instanceof Array) {
                contentType = (
                   <div className='contentType-container'>
                       <div className='contentType-header' data-advice='HTML for the *head* of the section'>contentTypes</div>
                       {this.props.contentType.map((item, index) => {
                           return (<div className='contentType' data-advice='Put your HTML here. contentType is a Text.'><p className="EntryPoint-contentType">contentType: {this.props.contentType}</p></div>);
                       })};
                       <div className='contentType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contentType = (<div className='contentType' data-advice='Put your HTML here. contentType is a Text.'><p className="EntryPoint-contentType">contentType: {this.props.contentType}</p></div>);
            }
        }

        let actionPlatform;
        if (this.props.actionPlatform) {
            if (this.props.actionPlatform instanceof Array) {
                actionPlatform = (
                   <div className='actionPlatform-container'>
                       <div className='actionPlatform-header' data-advice='HTML for the *head* of the section'>actionPlatforms</div>
                       {this.props.actionPlatform.map((item, index) => {
                           return (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a URL or Text.'><div className="EntryPoint-actionPlatform">actionPlatform: {this.props.actionPlatform}</div></div>);
                       })};
                       <div className='actionPlatform-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                actionPlatform = (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a URL or Text.'><div className="EntryPoint-actionPlatform">actionPlatform: {this.props.actionPlatform}</div></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="EntryPoint-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="EntryPoint-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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
                actionApplication = (<SoftwareApplication  {...this.props.actionApplication} />);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="EntryPoint-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="EntryPoint-image" src={this.props.image} /></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="EntryPoint-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="EntryPoint-name">name: {this.props.name}</p></div>);
            }
        }

        let httpMethod;
        if (this.props.httpMethod) {
            if (this.props.httpMethod instanceof Array) {
                httpMethod = (
                   <div className='httpMethod-container'>
                       <div className='httpMethod-header' data-advice='HTML for the *head* of the section'>httpMethods</div>
                       {this.props.httpMethod.map((item, index) => {
                           return (<div className='httpMethod' data-advice='Put your HTML here. httpMethod is a Text.'><p className="EntryPoint-httpMethod">httpMethod: {this.props.httpMethod}</p></div>);
                       })};
                       <div className='httpMethod-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                httpMethod = (<div className='httpMethod' data-advice='Put your HTML here. httpMethod is a Text.'><p className="EntryPoint-httpMethod">httpMethod: {this.props.httpMethod}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="EntryPoint-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="EntryPoint-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let urlTemplate;
        if (this.props.urlTemplate) {
            if (this.props.urlTemplate instanceof Array) {
                urlTemplate = (
                   <div className='urlTemplate-container'>
                       <div className='urlTemplate-header' data-advice='HTML for the *head* of the section'>urlTemplates</div>
                       {this.props.urlTemplate.map((item, index) => {
                           return (<div className='urlTemplate' data-advice='Put your HTML here. urlTemplate is a Text.'><p className="EntryPoint-urlTemplate">urlTemplate: {this.props.urlTemplate}</p></div>);
                       })};
                       <div className='urlTemplate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                urlTemplate = (<div className='urlTemplate' data-advice='Put your HTML here. urlTemplate is a Text.'><p className="EntryPoint-urlTemplate">urlTemplate: {this.props.urlTemplate}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="EntryPoint-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="EntryPoint-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="EntryPoint-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="EntryPoint-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="EntryPoint-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="EntryPoint-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let encodingType;
        if (this.props.encodingType) {
            if (this.props.encodingType instanceof Array) {
                encodingType = (
                   <div className='encodingType-container'>
                       <div className='encodingType-header' data-advice='HTML for the *head* of the section'>encodingTypes</div>
                       {this.props.encodingType.map((item, index) => {
                           return (<div className='encodingType' data-advice='Put your HTML here. encodingType is a Text.'><p className="EntryPoint-encodingType">encodingType: {this.props.encodingType}</p></div>);
                       })};
                       <div className='encodingType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                encodingType = (<div className='encodingType' data-advice='Put your HTML here. encodingType is a Text.'><p className="EntryPoint-encodingType">encodingType: {this.props.encodingType}</p></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="EntryPoint-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="EntryPoint-description">description: {this.props.description}</p></div>);
            }
        }

        return (
            <div className='EntryPoint'>
                {potentialAction}
                {contentType}
                {actionPlatform}
                {sameAs}
                {actionApplication}
                {image}
                {name}
                {httpMethod}
                {url}
                {urlTemplate}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {encodingType}
                {description}
            </div>
        );
    }
};

EntryPoint.defaultProps = {
};

EntryPoint.propTypes = {
   potentialAction: React.propTypes.object,
   contentType: React.propTypes.string,
   actionPlatform: React.propTypes.object,
   sameAs: React.propTypes.string,
   actionApplication: React.propTypes.object,
   image: React.propTypes.object,
   name: React.propTypes.string,
   httpMethod: React.propTypes.string,
   url: React.propTypes.string,
   urlTemplate: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   encodingType: React.propTypes.string,
   description: React.propTypes.string,
};

