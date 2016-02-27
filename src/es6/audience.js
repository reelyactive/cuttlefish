/* Audience - Intended audience for an item, i.e. the group for whom the item was created.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import AdministrativeArea from './administrativearea.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class Audience extends Component {
    render() {
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Audience-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Audience-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Audience-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Audience-image" src={this.props.image} /></div>);
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

        let geographicArea;
        if (this.props.geographicArea) {
            if (this.props.geographicArea instanceof Array) {
                geographicArea = (
                   <div className='geographicArea__container'>
                       <div className='geographicArea__header' data-advice='HTML for the *head* of the section'>geographicAreas</div>
                       {this.props.geographicArea.map((item, index) => {
                            return (<AdministrativeArea key={index} {...this.props.geographicArea} />);
                       })};
                       <div className='geographicArea__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                geographicArea = (<AdministrativeArea key={index} {...this.props.geographicArea} />);
            }
        }

        return (
            <div className='Audience'>
                {mainEntityOfPage}
                {image}
                {potentialAction}
                {geographicArea}
            </div>
        );
    }
};

Audience.defaultProps = {
};

Audience.propTypes = {
   mainEntityOfPage: React.propTypes.object,
   image: React.propTypes.object,
   potentialAction: React.propTypes.object,
   geographicArea: React.propTypes.object,
};

