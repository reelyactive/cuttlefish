/* AlignmentObject - An intangible item that describes an alignment between a learning resource and a node in an educational framework.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class AlignmentObject extends Component {
    render() {
        let alignmentType;
        if (this.props.alignmentType) {
            if (this.props.alignmentType instanceof Array) {
                alignmentType = (
                   <div className='alignmentType-container'>
                       <div className='alignmentType-header' data-advice='HTML for the *head* of the section'>alignmentTypes</div>
                       {this.props.alignmentType.map((item, index) => {
                           return (<div className='alignmentType' data-advice='Put your HTML here. alignmentType is a Text.'><p className="AlignmentObject-alignmentType">alignmentType: {this.props.alignmentType}</p></div>);
                       })};
                       <div className='alignmentType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alignmentType = (<div className='alignmentType' data-advice='Put your HTML here. alignmentType is a Text.'><p className="AlignmentObject-alignmentType">alignmentType: {this.props.alignmentType}</p></div>);
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AlignmentObject-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AlignmentObject-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AlignmentObject-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AlignmentObject-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="AlignmentObject-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="AlignmentObject-image" src={this.props.image} /></div>);
            }
        }

        let educationalFramework;
        if (this.props.educationalFramework) {
            if (this.props.educationalFramework instanceof Array) {
                educationalFramework = (
                   <div className='educationalFramework-container'>
                       <div className='educationalFramework-header' data-advice='HTML for the *head* of the section'>educationalFrameworks</div>
                       {this.props.educationalFramework.map((item, index) => {
                           return (<div className='educationalFramework' data-advice='Put your HTML here. educationalFramework is a Text.'><p className="AlignmentObject-educationalFramework">educationalFramework: {this.props.educationalFramework}</p></div>);
                       })};
                       <div className='educationalFramework-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                educationalFramework = (<div className='educationalFramework' data-advice='Put your HTML here. educationalFramework is a Text.'><p className="AlignmentObject-educationalFramework">educationalFramework: {this.props.educationalFramework}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AlignmentObject-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AlignmentObject-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let targetUrl;
        if (this.props.targetUrl) {
            if (this.props.targetUrl instanceof Array) {
                targetUrl = (
                   <div className='targetUrl-container'>
                       <div className='targetUrl-header' data-advice='HTML for the *head* of the section'>targetUrls</div>
                       {this.props.targetUrl.map((item, index) => {
                           return (<div className='targetUrl' data-advice='Put your HTML here. targetUrl is a URL.'><a className="AlignmentObject-targetUrl" href={this.props.targetUrl} target="_blank">targetUrl</a></div>);
                       })};
                       <div className='targetUrl-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                targetUrl = (<div className='targetUrl' data-advice='Put your HTML here. targetUrl is a URL.'><a className="AlignmentObject-targetUrl" href={this.props.targetUrl} target="_blank">targetUrl</a></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="AlignmentObject-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="AlignmentObject-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AlignmentObject-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AlignmentObject-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AlignmentObject-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AlignmentObject-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let targetName;
        if (this.props.targetName) {
            if (this.props.targetName instanceof Array) {
                targetName = (
                   <div className='targetName-container'>
                       <div className='targetName-header' data-advice='HTML for the *head* of the section'>targetNames</div>
                       {this.props.targetName.map((item, index) => {
                           return (<div className='targetName' data-advice='Put your HTML here. targetName is a Text.'><p className="AlignmentObject-targetName">targetName: {this.props.targetName}</p></div>);
                       })};
                       <div className='targetName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                targetName = (<div className='targetName' data-advice='Put your HTML here. targetName is a Text.'><p className="AlignmentObject-targetName">targetName: {this.props.targetName}</p></div>);
            }
        }

        let targetDescription;
        if (this.props.targetDescription) {
            if (this.props.targetDescription instanceof Array) {
                targetDescription = (
                   <div className='targetDescription-container'>
                       <div className='targetDescription-header' data-advice='HTML for the *head* of the section'>targetDescriptions</div>
                       {this.props.targetDescription.map((item, index) => {
                           return (<div className='targetDescription' data-advice='Put your HTML here. targetDescription is a Text.'><p className="AlignmentObject-targetDescription">targetDescription: {this.props.targetDescription}</p></div>);
                       })};
                       <div className='targetDescription-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                targetDescription = (<div className='targetDescription' data-advice='Put your HTML here. targetDescription is a Text.'><p className="AlignmentObject-targetDescription">targetDescription: {this.props.targetDescription}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AlignmentObject-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AlignmentObject-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='AlignmentObject'>
                {alignmentType}
                {potentialAction}
                {description}
                {sameAs}
                {image}
                {educationalFramework}
                {url}
                {targetUrl}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {targetName}
                {targetDescription}
                {name}
            </div>
        );
    }
};

AlignmentObject.defaultProps = {
};

AlignmentObject.propTypes = {
   alignmentType: React.propTypes.string,
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   educationalFramework: React.propTypes.string,
   url: React.propTypes.string,
   targetUrl: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   targetName: React.propTypes.string,
   targetDescription: React.propTypes.string,
   name: React.propTypes.string,
};

