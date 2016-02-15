/* Property - A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.. Generated automatically by the reactGenerator. */
import ImageObject from './imageobject.js';
import Enumeration from './enumeration.js';
import Action from './action.js';
import CreativeWork from './creativework.js';
import Class from './class.js';


import React, {
  Component
} from 'react';

export default class Property extends Component {
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Property-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Property-description">description: {this.props.description}</p></div>);
            }
        }

        let inverseOf;
        if (this.props.inverseOf) {
            if (this.props.inverseOf instanceof Array) {
                inverseOf = (
                   <div className='inverseOf-container'>
                       <div className='inverseOf-header' data-advice='HTML for the *head* of the section'>inverseOfs</div>
                       {this.props.inverseOf.map((item, index) => {
                           return (<Property key={index} {...this.props.inverseOf} />);
                       })};
                       <div className='inverseOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                inverseOf = (<Property  {...this.props.inverseOf} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Property-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Property-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let rangeIncludes;
        if (this.props.rangeIncludes) {
            if (this.props.rangeIncludes instanceof Array) {
                rangeIncludes = (
                   <div className='rangeIncludes-container'>
                       <div className='rangeIncludes-header' data-advice='HTML for the *head* of the section'>rangeIncludess</div>
                       {this.props.rangeIncludes.map((item, index) => {
                           return (<Class key={index} {...this.props.rangeIncludes} />);
                       })};
                       <div className='rangeIncludes-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                rangeIncludes = (<Class  {...this.props.rangeIncludes} />);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Property-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Property-image" src={this.props.image} /></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Property-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Property-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let supersededBy;
        if (this.props.supersededBy) {
            if (this.props.supersededBy instanceof Array) {
                supersededBy = (
                   <div className='supersededBy-container'>
                       <div className='supersededBy-header' data-advice='HTML for the *head* of the section'>supersededBys</div>
                       {this.props.supersededBy.map((item, index) => {
                           return (<div className='supersededBy' data-advice='Put your HTML here. supersededBy is a Class or Property or Enumeration.'><div className="Property-supersededBy">supersededBy: {this.props.supersededBy}</div></div>);
                       })};
                       <div className='supersededBy-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                supersededBy = (<div className='supersededBy' data-advice='Put your HTML here. supersededBy is a Class or Property or Enumeration.'><div className="Property-supersededBy">supersededBy: {this.props.supersededBy}</div></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Property-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Property-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Property-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Property-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Property-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Property-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let domainIncludes;
        if (this.props.domainIncludes) {
            if (this.props.domainIncludes instanceof Array) {
                domainIncludes = (
                   <div className='domainIncludes-container'>
                       <div className='domainIncludes-header' data-advice='HTML for the *head* of the section'>domainIncludess</div>
                       {this.props.domainIncludes.map((item, index) => {
                           return (<Class key={index} {...this.props.domainIncludes} />);
                       })};
                       <div className='domainIncludes-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                domainIncludes = (<Class  {...this.props.domainIncludes} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Property-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Property-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='Property'>
                {potentialAction}
                {description}
                {inverseOf}
                {sameAs}
                {rangeIncludes}
                {image}
                {url}
                {supersededBy}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {domainIncludes}
                {name}
            </div>
        );
    }
};

Property.defaultProps = {
};

Property.propTypes = {
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   inverseOf: React.propTypes.object,
   sameAs: React.propTypes.string,
   rangeIncludes: React.propTypes.object,
   image: React.propTypes.object,
   url: React.propTypes.string,
   supersededBy: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   domainIncludes: React.propTypes.object,
   name: React.propTypes.string,
};

