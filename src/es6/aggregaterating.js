/* AggregateRating - The average rating based on multiple ratings or reviews.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Thing from './thing.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class AggregateRating extends Component {
    render() {
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="AggregateRating-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="AggregateRating-image" src={this.props.image} /></div>);
               }
            }
        }

        let bestRating;
        if (this.props.bestRating) {
            if (this.props.bestRating instanceof Array) {
                bestRating = (
                   <div className='bestRating__container'>
                       <div className='bestRating__header' data-advice='HTML for the *head* of the section'>bestRatings</div>
                       {this.props.bestRating.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Text.'><p className="AggregateRating-bestRating">bestRating: {this.props.bestRating}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Number.'><p className="AggregateRating-bestRating">bestRating: {this.props.bestRating}</p></div>);
                           }
                       })};
                       <div className='bestRating__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   bestRating = (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Text.'><p className="AggregateRating-bestRating">bestRating: {this.props.bestRating}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   bestRating = (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Number.'><p className="AggregateRating-bestRating">bestRating: {this.props.bestRating}</p></div>);
               }
            }
        }

        let worstRating;
        if (this.props.worstRating) {
            if (this.props.worstRating instanceof Array) {
                worstRating = (
                   <div className='worstRating__container'>
                       <div className='worstRating__header' data-advice='HTML for the *head* of the section'>worstRatings</div>
                       {this.props.worstRating.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Text.'><p className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Number.'><p className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</p></div>);
                           }
                       })};
                       <div className='worstRating__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   worstRating = (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Text.'><p className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</p></div>);
               }
               else if (this.props['@type'] === 'Number') {
                   worstRating = (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Number.'><p className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</p></div>);
               }
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="AggregateRating-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="AggregateRating-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let itemReviewed;
        if (this.props.itemReviewed) {
            if (this.props.itemReviewed instanceof Array) {
                itemReviewed = (
                   <div className='itemReviewed__container'>
                       <div className='itemReviewed__header' data-advice='HTML for the *head* of the section'>itemRevieweds</div>
                       {this.props.itemReviewed.map((item, index) => {
                            return (<Thing key={index} {...this.props.itemReviewed} />);
                       })};
                       <div className='itemReviewed__footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                itemReviewed = (<Thing key={index} {...this.props.itemReviewed} />);
            }
        }

        return (
            <div className='AggregateRating'>
                {potentialAction}
                {image}
                {bestRating}
                {worstRating}
                {mainEntityOfPage}
                {itemReviewed}
            </div>
        );
    }
};

AggregateRating.defaultProps = {
};

AggregateRating.propTypes = {
   potentialAction: React.propTypes.object,
   image: React.propTypes.object,
   bestRating: React.propTypes.object,
   worstRating: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   itemReviewed: React.propTypes.object,
};

