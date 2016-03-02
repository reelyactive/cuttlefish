/* AlignmentObject - An intangible item that describes an alignment between a learning resource and a node in an educational framework.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class AlignmentObject extends Component {
    render() {
        let alignmentType;
        if (this.props.alignmentType) {
            if (this.props.alignmentType instanceof Array) {
                alignmentType = (
                   <div className='alignmentType__container'>
                       <div className='alignmentType__header' data-advice='HTML for the *head* of the section'>alignmentTypes</div>
                       {this.props.alignmentType.map((item, index) => {
                            return (<div className='alignmentType' data-advice='Put your HTML here. alignmentType is a Text.'><p className="AlignmentObject-alignmentType">alignmentType: {this.props.alignmentType}</p></div>);
                       })}
                       <div className='alignmentType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AlignmentObject-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AlignmentObject-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="AlignmentObject-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="AlignmentObject-image" src={this.props.image} /></div>);
               }
            }
        }

        let educationalFramework;
        if (this.props.educationalFramework) {
            if (this.props.educationalFramework instanceof Array) {
                educationalFramework = (
                   <div className='educationalFramework__container'>
                       <div className='educationalFramework__header' data-advice='HTML for the *head* of the section'>educationalFrameworks</div>
                       {this.props.educationalFramework.map((item, index) => {
                            return (<div className='educationalFramework' data-advice='Put your HTML here. educationalFramework is a Text.'><p className="AlignmentObject-educationalFramework">educationalFramework: {this.props.educationalFramework}</p></div>);
                       })}
                       <div className='educationalFramework__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AlignmentObject-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='targetUrl__container'>
                       <div className='targetUrl__header' data-advice='HTML for the *head* of the section'>targetUrls</div>
                       {this.props.targetUrl.map((item, index) => {
                            return (<div className='targetUrl' data-advice='Put your HTML here. targetUrl is a URL.'><a className="AlignmentObject-targetUrl" href={this.props.targetUrl} target="_blank">targetUrl</a></div>);
                       })}
                       <div className='targetUrl__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="AlignmentObject-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="AlignmentObject-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AlignmentObject-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AlignmentObject-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='targetName__container'>
                       <div className='targetName__header' data-advice='HTML for the *head* of the section'>targetNames</div>
                       {this.props.targetName.map((item, index) => {
                            return (<div className='targetName' data-advice='Put your HTML here. targetName is a Text.'><p className="AlignmentObject-targetName">targetName: {this.props.targetName}</p></div>);
                       })}
                       <div className='targetName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='targetDescription__container'>
                       <div className='targetDescription__header' data-advice='HTML for the *head* of the section'>targetDescriptions</div>
                       {this.props.targetDescription.map((item, index) => {
                            return (<div className='targetDescription' data-advice='Put your HTML here. targetDescription is a Text.'><p className="AlignmentObject-targetDescription">targetDescription: {this.props.targetDescription}</p></div>);
                       })}
                       <div className='targetDescription__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AlignmentObject-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
   alignmentType: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   educationalFramework: React.PropTypes.object,
   url: React.PropTypes.object,
   targetUrl: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   targetName: React.PropTypes.object,
   targetDescription: React.PropTypes.object,
   name: React.PropTypes.object,
};

