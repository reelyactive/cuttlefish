/* DayOfWeek - The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
Commonly used values:

http://purl.org/goodrelations/v1#Monday
http://purl.org/goodrelations/v1#Tuesday
http://purl.org/goodrelations/v1#Wednesday
http://purl.org/goodrelations/v1#Thursday
http://purl.org/goodrelations/v1#Friday
http://purl.org/goodrelations/v1#Saturday
http://purl.org/goodrelations/v1#Sunday
http://purl.org/goodrelations/v1#PublicHolidays. Generated automatically by the reactGenerator. */
import ImageObject from './imageobject.js';
import Enumeration from './enumeration.js';
import Action from './action.js';
import Property from './property.js';
import CreativeWork from './creativework.js';
import Class from './class.js';


import React, {
  Component
} from 'react';

export default class DayOfWeek extends Component {
    render() {
        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="DayOfWeek-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="DayOfWeek-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="DayOfWeek-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="DayOfWeek-image" src={this.props.image} /></div>);
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

        return (
            <div className='DayOfWeek'>
                {mainEntityOfPage}
                {image}
                {supersededBy}
                {potentialAction}
            </div>
        );
    }
};

DayOfWeek.defaultProps = {
};

DayOfWeek.propTypes = {
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   supersededBy: React.propTypes.object,
   potentialAction: React.propTypes.object,
};

