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
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
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
                inverseOf = (<Property key={index} {...this.props.inverseOf} />);
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
                rangeIncludes = (<Class key={index} {...this.props.rangeIncludes} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Property-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Property-image" src={this.props.image} /></div>);
               }
            }
        }

        let supersededBy;
        if (this.props.supersededBy) {
            if (this.props.supersededBy instanceof Array) {
                supersededBy = (
                   <div className='supersededBy-container'>
                       <div className='supersededBy-header' data-advice='HTML for the *head* of the section'>supersededBys</div>
                       {this.props.supersededBy.map((item, index) => {
                           if (this.props['@type'] === 'Class') {
                               return (<Class key={index} {...this.props.supersededBy} />);
                           }
                           else if (this.props['@type'] === 'Property') {
                               return (<Property key={index} {...this.props.supersededBy} />);
                           }
                           else if (this.props['@type'] === 'Enumeration') {
                               return (<Enumeration key={index} {...this.props.supersededBy} />);
                           }
                       })};
                       <div className='supersededBy-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Class') {
                   supersededBy = (<Class key={index} {...this.props.supersededBy} />);
               }
               else if (this.props['@type'] === 'Property') {
                   supersededBy = (<Property key={index} {...this.props.supersededBy} />);
               }
               else if (this.props['@type'] === 'Enumeration') {
                   supersededBy = (<Enumeration key={index} {...this.props.supersededBy} />);
               }
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Property-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Property-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
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
                domainIncludes = (<Class key={index} {...this.props.domainIncludes} />);
            }
        }

        return (
            <div className='Property'>
                {potentialAction}
                {inverseOf}
                {rangeIncludes}
                {image}
                {supersededBy}
                {mainEntityOfPage}
                {domainIncludes}
            </div>
        );
    }
};

Property.defaultProps = {
};

Property.propTypes = {
   potentialAction: React.propTypes.object,
   inverseOf: React.propTypes.object,
   rangeIncludes: React.propTypes.object,
   image: React.propTypes.object,
   supersededBy: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   domainIncludes: React.propTypes.object,
};

