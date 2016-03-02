/* AggregateRating - The average rating based on multiple ratings or reviews.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class AggregateRating extends Component {
    render() {
        let reviewCount;
        if (this.props.reviewCount) {
            if (this.props.reviewCount instanceof Array) {
                reviewCount = (
                   <div className='reviewCount__container'>
                       <div className='reviewCount__header' data-advice='HTML for the *head* of the section'>reviewCounts</div>
                       {this.props.reviewCount.map((item, index) => {
                            return (<div className='reviewCount' data-advice='Put your HTML here. reviewCount is a Integer.'><p className="AggregateRating-reviewCount">reviewCount: {this.props.reviewCount}</p></div>);
                       })}
                       <div className='reviewCount__footer' data-advice='HTML for the *footer* of the section'></div>
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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="AggregateRating-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="AggregateRating-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="AggregateRating-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="AggregateRating-image" src={this.props.image} /></div>);
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
                       })}
                       <div className='bestRating__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="AggregateRating-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='worstRating__container'>
                       <div className='worstRating__header' data-advice='HTML for the *head* of the section'>worstRatings</div>
                       {this.props.worstRating.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Text.'><p className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</p></div>);
                           }
                           else if (this.props['@type'] === 'Number') {
                               return (<div className='worstRating' data-advice='Put your HTML here. worstRating is a Number.'><p className="AggregateRating-worstRating">worstRating: {this.props.worstRating}</p></div>);
                           }
                       })}
                       <div className='worstRating__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let ratingCount;
        if (this.props.ratingCount) {
            if (this.props.ratingCount instanceof Array) {
                ratingCount = (
                   <div className='ratingCount__container'>
                       <div className='ratingCount__header' data-advice='HTML for the *head* of the section'>ratingCounts</div>
                       {this.props.ratingCount.map((item, index) => {
                            return (<div className='ratingCount' data-advice='Put your HTML here. ratingCount is a Integer.'><p className="AggregateRating-ratingCount">ratingCount: {this.props.ratingCount}</p></div>);
                       })}
                       <div className='ratingCount__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="AggregateRating-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="AggregateRating-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="AggregateRating-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='itemReviewed__container'>
                       <div className='itemReviewed__header' data-advice='HTML for the *head* of the section'>itemRevieweds</div>
                       {this.props.itemReviewed.map((item, index) => {
                            return (<Thing  {...this.props.itemReviewed} />);
                       })}
                       <div className='itemReviewed__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='ratingValue__container'>
                       <div className='ratingValue__header' data-advice='HTML for the *head* of the section'>ratingValues</div>
                       {this.props.ratingValue.map((item, index) => {
                            return (<div className='ratingValue' data-advice='Put your HTML here. ratingValue is a Text.'><p className="AggregateRating-ratingValue">ratingValue: {this.props.ratingValue}</p></div>);
                       })}
                       <div className='ratingValue__footer' data-advice='HTML for the *footer* of the section'></div>
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
   reviewCount: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   name: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   bestRating: React.PropTypes.object,
   url: React.PropTypes.object,
   worstRating: React.PropTypes.object,
   ratingCount: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   itemReviewed: React.PropTypes.object,
   ratingValue: React.PropTypes.object,
};

