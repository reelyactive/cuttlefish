/* EntryPoint - An entry point, within some Web-based protocol.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class EntryPoint extends Component {
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

        let contentType;
        if (this.props.contentType) {
            if (this.props.contentType instanceof Array) {
                contentType = (
                   <div className='contentType__container'>
                       <div className='contentType__header' data-advice='HTML for the *head* of the section'>contentTypes</div>
                       {this.props.contentType.map((item, index) => {
                            return (<div className='contentType' data-advice='Put your HTML here. contentType is a Text.'><p className="EntryPoint-contentType">contentType: {this.props.contentType}</p></div>);
                       })}
                       <div className='contentType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='actionPlatform__container'>
                       <div className='actionPlatform__header' data-advice='HTML for the *head* of the section'>actionPlatforms</div>
                       {this.props.actionPlatform.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a URL.'><a className="EntryPoint-actionPlatform" href={this.props.actionPlatform} target="_blank">actionPlatform</a></div>);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='actionPlatform' data-advice='Put your HTML here. actionPlatform is a Text.'><p className="EntryPoint-actionPlatform">actionPlatform: {this.props.actionPlatform}</p></div>);
                           }
                       })}
                       <div className='actionPlatform__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="EntryPoint-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='actionApplication__container'>
                       <div className='actionApplication__header' data-advice='HTML for the *head* of the section'>actionApplications</div>
                       {this.props.actionApplication.map((item, index) => {
                            return (<SoftwareApplication  {...this.props.actionApplication} />);
                       })}
                       <div className='actionApplication__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EntryPoint-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="EntryPoint-image" src={this.props.image} /></div>);
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
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="EntryPoint-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='httpMethod__container'>
                       <div className='httpMethod__header' data-advice='HTML for the *head* of the section'>httpMethods</div>
                       {this.props.httpMethod.map((item, index) => {
                            return (<div className='httpMethod' data-advice='Put your HTML here. httpMethod is a Text.'><p className="EntryPoint-httpMethod">httpMethod: {this.props.httpMethod}</p></div>);
                       })}
                       <div className='httpMethod__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="EntryPoint-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='urlTemplate__container'>
                       <div className='urlTemplate__header' data-advice='HTML for the *head* of the section'>urlTemplates</div>
                       {this.props.urlTemplate.map((item, index) => {
                            return (<div className='urlTemplate' data-advice='Put your HTML here. urlTemplate is a Text.'><p className="EntryPoint-urlTemplate">urlTemplate: {this.props.urlTemplate}</p></div>);
                       })}
                       <div className='urlTemplate__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="EntryPoint-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="EntryPoint-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="EntryPoint-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="EntryPoint-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='encodingType__container'>
                       <div className='encodingType__header' data-advice='HTML for the *head* of the section'>encodingTypes</div>
                       {this.props.encodingType.map((item, index) => {
                            return (<div className='encodingType' data-advice='Put your HTML here. encodingType is a Text.'><p className="EntryPoint-encodingType">encodingType: {this.props.encodingType}</p></div>);
                       })}
                       <div className='encodingType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="EntryPoint-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
   potentialAction: React.PropTypes.object,
   contentType: React.PropTypes.object,
   actionPlatform: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   actionApplication: React.PropTypes.object,
   image: React.PropTypes.object,
   name: React.PropTypes.object,
   httpMethod: React.PropTypes.object,
   url: React.PropTypes.object,
   urlTemplate: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   encodingType: React.PropTypes.object,
   description: React.PropTypes.object,
};

