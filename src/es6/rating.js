/* Rating - A rating is an evaluation on a numeric scale, such as 1 to 5 stars.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';


import React, {
  Component
} from 'react';

export default class Rating extends Component {
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
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Rating-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Rating-description">description: {this.props.description}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Rating-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Rating-name">name: {this.props.name}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Rating-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Rating-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Rating-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Rating-image" src={this.props.image} /></div>);
            }
        }

        let bestRating;
        if (this.props.bestRating) {
            if (this.props.bestRating instanceof Array) {
                bestRating = (
                   <div className='bestRating-container'>
                       <div className='bestRating-header' data-advice='HTML for the *head* of the section'>bestRatings</div>
                       {this.props.bestRating.map((item, index) => {
                           return (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Text or Number.'><div className="Rating-bestRating">bestRating: {this.props.bestRating}</div></div>);
                       })};
                       <div className='bestRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                bestRating = (<div className='bestRating' data-advice='Put your HTML here. bestRating is a Text or Number.'><div className="Rating-bestRating">bestRating: {this.props.bestRating}</div></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Rating-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Rating-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let worstRating;
        if (this.props.worstRating) {
            if (this.props.worstRating instanceof Array) {
                worstRating = (
                   <div className='worstRating-container'>
                       <div className='worstRating-header' data-advice='HTML for the *head* of the section'>worstRatings</div>
                       {this.props.worstRating.map((item, index) => {
                           return (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Text or Number.'><div className="Rating-worstRating">worstRating: {this.props.worstRating}</div></div>);
                       })};
                       <div className='worstRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                worstRating = (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Text or Number.'><div className="Rating-worstRating">worstRating: {this.props.worstRating}</div></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Rating-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Rating-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Rating-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Rating-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Rating-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Rating-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let ratingValue;
        if (this.props.ratingValue) {
            if (this.props.ratingValue instanceof Array) {
                ratingValue = (
                   <div className='ratingValue-container'>
                       <div className='ratingValue-header' data-advice='HTML for the *head* of the section'>ratingValues</div>
                       {this.props.ratingValue.map((item, index) => {
                           return (<div className='ratingValue' data-advice='Put your HTML here. ratingValue is a Text.'><p className="Rating-ratingValue">ratingValue: {this.props.ratingValue}</p></div>);
                       })};
                       <div className='ratingValue-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                ratingValue = (<div className='ratingValue' data-advice='Put your HTML here. ratingValue is a Text.'><p className="Rating-ratingValue">ratingValue: {this.props.ratingValue}</p></div>);
            }
        }

        return (
            <div className='Rating'>
                {potentialAction}
                {description}
                {name}
                {sameAs}
                {image}
                {bestRating}
                {url}
                {worstRating}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {ratingValue}
            </div>
        );
    }
};

Rating.defaultProps = {
};

Rating.propTypes = {
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   name: React.propTypes.string,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   bestRating: React.propTypes.object,
   url: React.propTypes.string,
   worstRating: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   ratingValue: React.propTypes.string,
};

