/* OpeningHoursSpecification - A structured value providing information about the opening hours of a place or a certain service inside a place.. Generated automatically by the reactGenerator. */
import DayOfWeek from './dayofweek.js';
import Action from './action.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';
import Time from './time.js';


import React, {
  Component
} from 'react';

export default class OpeningHoursSpecification extends Component {
    render() {
        let dayOfWeek;
        if (this.props.dayOfWeek) {
            if (this.props.dayOfWeek instanceof Array) {
                dayOfWeek = (
                   <div className='dayOfWeek-container'>
                       <div className='dayOfWeek-header' data-advice='HTML for the *head* of the section'>dayOfWeeks</div>
                       {this.props.dayOfWeek.map((item, index) => {
                            return (<DayOfWeek key={index} {...this.props.dayOfWeek} />);
                       })};
                       <div className='dayOfWeek-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dayOfWeek = (<DayOfWeek key={index} {...this.props.dayOfWeek} />);
            }
        }

        let closes;
        if (this.props.closes) {
            if (this.props.closes instanceof Array) {
                closes = (
                   <div className='closes-container'>
                       <div className='closes-header' data-advice='HTML for the *head* of the section'>closess</div>
                       {this.props.closes.map((item, index) => {
                            return (<Time key={index} {...this.props.closes} />);
                       })};
                       <div className='closes-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                closes = (<Time key={index} {...this.props.closes} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OpeningHoursSpecification-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OpeningHoursSpecification-image" src={this.props.image} /></div>);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OpeningHoursSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OpeningHoursSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let opens;
        if (this.props.opens) {
            if (this.props.opens instanceof Array) {
                opens = (
                   <div className='opens-container'>
                       <div className='opens-header' data-advice='HTML for the *head* of the section'>openss</div>
                       {this.props.opens.map((item, index) => {
                            return (<Time key={index} {...this.props.opens} />);
                       })};
                       <div className='opens-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                opens = (<Time key={index} {...this.props.opens} />);
            }
        }

        return (
            <div className='OpeningHoursSpecification'>
                {dayOfWeek}
                {closes}
                {potentialAction}
                {image}
                {mainEntityOfPage}
                {opens}
            </div>
        );
    }
};

OpeningHoursSpecification.defaultProps = {
};

OpeningHoursSpecification.propTypes = {
   dayOfWeek: React.propTypes.object,
   closes: React.propTypes.object,
   potentialAction: React.propTypes.object,
   image: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   opens: React.propTypes.object,
};

