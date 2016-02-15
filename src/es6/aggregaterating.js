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
        let reviewCount;
        if (this.props.reviewCount) {
            if (this.props.reviewCount instanceof Array) {
                reviewCount = (
                   <div className='reviewCount-container'>
                       <div className='reviewCount-header' data-advice='HTML for the *head* of the section'>reviewCounts</div>
                       {this.props.reviewCount.map((item, index) => {
                           return (<div className='reviewCount' data-advice='Put your HTML here. reviewCount is a Integer.'><p className="AggregateRating-reviewCount">reviewCount: {this.props.reviewCount}</p></div>);
                       })};
                       <div className='reviewCount-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                reviewCount = (<div className='reviewCount' data-advice='Put your HTML here. reviewCount is a Integer.'><p className="AggregateRating-reviewCount">reviewCount: {this.props.reviewCount}</p></div>);
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AggregateRating-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AggregateRating-description">description: {this.props.description}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AggregateRating-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AggregateRating-name">name: {this.props.name}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AggregateRating-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AggregateRating-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="AggregateRating-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="AggregateRating-image" src={this.props.image} /></div>);
            }
        }

        let bestRating;
        if (this.props.bestRating) {
            if (this.props.bestRating instanceof Array) {
                bestRating = (
                   <div className='bestRating-container'>
                       <div className='bestRating-header' data-advice='HTML for the *head* of the section'>bestRatings</div>
                       {this.props.bestRating.map((item, index) => {
                           return (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Text or Number.'><div className="AggregateRating-bestRating">bestRating: {this.props.bestRating}</div></div>);
                       })};
                       <div className='bestRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                bestRating = (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Text or Number.'><div className="AggregateRating-bestRating">bestRating: {this.props.bestRating}</div></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AggregateRating-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AggregateRating-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let worstRating;
        if (this.props.worstRating) {
            if (this.props.worstRating instanceof Array) {
                worstRating = (
                   <div className='worstRating-container'>
                       <div className='worstRating-header' data-advice='HTML for the *head* of the section'>worstRatings</div>
                       {this.props.worstRating.map((item, index) => {
                           return (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Text or Number.'><div className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</div></div>);
                       })};
                       <div className='worstRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                worstRating = (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Text or Number.'><div className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</div></div>);
            }
        }

        let ratingCount;
        if (this.props.ratingCount) {
            if (this.props.ratingCount instanceof Array) {
                ratingCount = (
                   <div className='ratingCount-container'>
                       <div className='ratingCount-header' data-advice='HTML for the *head* of the section'>ratingCounts</div>
                       {this.props.ratingCount.map((item, index) => {
                           return (<div className='ratingCount' data-advice='Put your HTML here. ratingCount is a Integer.'><p className="AggregateRating-ratingCount">ratingCount: {this.props.ratingCount}</p></div>);
                       })};
                       <div className='ratingCount-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                ratingCount = (<div className='ratingCount' data-advice='Put your HTML here. ratingCount is a Integer.'><p className="AggregateRating-ratingCount">ratingCount: {this.props.ratingCount}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="AggregateRating-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="AggregateRating-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AggregateRating-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AggregateRating-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AggregateRating-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AggregateRating-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let itemReviewed;
        if (this.props.itemReviewed) {
            if (this.props.itemReviewed instanceof Array) {
                itemReviewed = (
                   <div className='itemReviewed-container'>
                       <div className='itemReviewed-header' data-advice='HTML for the *head* of the section'>itemRevieweds</div>
                       {this.props.itemReviewed.map((item, index) => {
                           return (<Thing key={index} {...this.props.itemReviewed} />);
                       })};
                       <div className='itemReviewed-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                itemReviewed = (<Thing  {...this.props.itemReviewed} />);
            }
        }

        let ratingValue;
        if (this.props.ratingValue) {
            if (this.props.ratingValue instanceof Array) {
                ratingValue = (
                   <div className='ratingValue-container'>
                       <div className='ratingValue-header' data-advice='HTML for the *head* of the section'>ratingValues</div>
                       {this.props.ratingValue.map((item, index) => {
                           return (<div className='ratingValue' data-advice='Put your HTML here. ratingValue is a Text.'><p className="AggregateRating-ratingValue">ratingValue: {this.props.ratingValue}</p></div>);
                       })};
                       <div className='ratingValue-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                ratingValue = (<div className='ratingValue' data-advice='Put your HTML here. ratingValue is a Text.'><p className="AggregateRating-ratingValue">ratingValue: {this.props.ratingValue}</p></div>);
            }
        }

        return (
            <div className='AggregateRating'>
                {reviewCount}
                {potentialAction}
                {description}
                {name}
                {sameAs}
                {image}
                {bestRating}
                {url}
                {worstRating}
                {ratingCount}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {itemReviewed}
                {ratingValue}
            </div>
        );
    }
};

AggregateRating.defaultProps = {
};

AggregateRating.propTypes = {
   reviewCount: React.propTypes.number,
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   name: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   bestRating: React.propTypes.object,
   url: React.propTypes.string,
   worstRating: React.propTypes.object,
   ratingCount: React.propTypes.number,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   itemReviewed: React.propTypes.object,
   ratingValue: React.propTypes.string,
};

