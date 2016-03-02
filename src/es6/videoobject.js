/* VideoObject - A video file.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class VideoObject extends Component {
    render() {
        let educationalUse;
        if (this.props.educationalUse) {
            if (this.props.educationalUse instanceof Array) {
                educationalUse = (
                   <div className='educationalUse__container'>
                       <div className='educationalUse__header' data-advice='HTML for the *head* of the section'>educationalUses</div>
                       {this.props.educationalUse.map((item, index) => {
                            return (<div className='educationalUse' data-advice='Put your HTML here. educationalUse is a Text.'><p className="VideoObject-educationalUse">educationalUse: {this.props.educationalUse}</p></div>);
                       })}
                       <div className='educationalUse__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                educationalUse = (<div className='educationalUse' data-advice='Put your HTML here. educationalUse is a Text.'><p className="VideoObject-educationalUse">educationalUse: {this.props.educationalUse}</p></div>);
            }
        }

        let producer;
        if (this.props.producer) {
            if (this.props.producer instanceof Array) {
                producer = (
                   <div className='producer__container'>
                       <div className='producer__header' data-advice='HTML for the *head* of the section'>producers</div>
                       {this.props.producer.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.producer} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.producer} />);
                           }
                       })}
                       <div className='producer__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   producer = (<Person key={index} {...this.props.producer} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   producer = (<Organization key={index} {...this.props.producer} />);
               }
            }
        }

        let text;
        if (this.props.text) {
            if (this.props.text instanceof Array) {
                text = (
                   <div className='text__container'>
                       <div className='text__header' data-advice='HTML for the *head* of the section'>texts</div>
                       {this.props.text.map((item, index) => {
                            return (<div className='text' data-advice='Put your HTML here. text is a Text.'><p className="VideoObject-text">text: {this.props.text}</p></div>);
                       })}
                       <div className='text__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                text = (<div className='text' data-advice='Put your HTML here. text is a Text.'><p className="VideoObject-text">text: {this.props.text}</p></div>);
            }
        }

        let datePublished;
        if (this.props.datePublished) {
            if (this.props.datePublished instanceof Array) {
                datePublished = (
                   <div className='datePublished__container'>
                       <div className='datePublished__header' data-advice='HTML for the *head* of the section'>datePublisheds</div>
                       {this.props.datePublished.map((item, index) => {
                            return (<div className='datePublished' data-advice='Put your HTML here. datePublished is a Date.'><time className="VideoObject-datePublished">datePublished: {this.props.datePublished}</time></div>);
                       })}
                       <div className='datePublished__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                datePublished = (<div className='datePublished' data-advice='Put your HTML here. datePublished is a Date.'><time className="VideoObject-datePublished">datePublished: {this.props.datePublished}</time></div>);
            }
        }

        let alternativeHeadline;
        if (this.props.alternativeHeadline) {
            if (this.props.alternativeHeadline instanceof Array) {
                alternativeHeadline = (
                   <div className='alternativeHeadline__container'>
                       <div className='alternativeHeadline__header' data-advice='HTML for the *head* of the section'>alternativeHeadlines</div>
                       {this.props.alternativeHeadline.map((item, index) => {
                            return (<div className='alternativeHeadline' data-advice='Put your HTML here. alternativeHeadline is a Text.'><p className="VideoObject-alternativeHeadline">alternativeHeadline: {this.props.alternativeHeadline}</p></div>);
                       })}
                       <div className='alternativeHeadline__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternativeHeadline = (<div className='alternativeHeadline' data-advice='Put your HTML here. alternativeHeadline is a Text.'><p className="VideoObject-alternativeHeadline">alternativeHeadline: {this.props.alternativeHeadline}</p></div>);
            }
        }

        let accountablePerson;
        if (this.props.accountablePerson) {
            if (this.props.accountablePerson instanceof Array) {
                accountablePerson = (
                   <div className='accountablePerson__container'>
                       <div className='accountablePerson__header' data-advice='HTML for the *head* of the section'>accountablePersons</div>
                       {this.props.accountablePerson.map((item, index) => {
                            return (<Person  {...this.props.accountablePerson} />);
                       })}
                       <div className='accountablePerson__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                accountablePerson = (<Person  {...this.props.accountablePerson} />);
            }
        }

        let keywords;
        if (this.props.keywords) {
            if (this.props.keywords instanceof Array) {
                keywords = (
                   <div className='keywords__container'>
                       <div className='keywords__header' data-advice='HTML for the *head* of the section'>keywordss</div>
                       {this.props.keywords.map((item, index) => {
                            return (<div className='keywords' data-advice='Put your HTML here. keywords is a Text.'><p className="VideoObject-keywords">keywords: {this.props.keywords}</p></div>);
                       })}
                       <div className='keywords__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                keywords = (<div className='keywords' data-advice='Put your HTML here. keywords is a Text.'><p className="VideoObject-keywords">keywords: {this.props.keywords}</p></div>);
            }
        }

        let headline;
        if (this.props.headline) {
            if (this.props.headline instanceof Array) {
                headline = (
                   <div className='headline__container'>
                       <div className='headline__header' data-advice='HTML for the *head* of the section'>headlines</div>
                       {this.props.headline.map((item, index) => {
                            return (<div className='headline' data-advice='Put your HTML here. headline is a Text.'><p className="VideoObject-headline">headline: {this.props.headline}</p></div>);
                       })}
                       <div className='headline__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                headline = (<div className='headline' data-advice='Put your HTML here. headline is a Text.'><p className="VideoObject-headline">headline: {this.props.headline}</p></div>);
            }
        }

        let character;
        if (this.props.character) {
            if (this.props.character instanceof Array) {
                character = (
                   <div className='character__container'>
                       <div className='character__header' data-advice='HTML for the *head* of the section'>characters</div>
                       {this.props.character.map((item, index) => {
                            return (<Person  {...this.props.character} />);
                       })}
                       <div className='character__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                character = (<Person  {...this.props.character} />);
            }
        }

        let contentRating;
        if (this.props.contentRating) {
            if (this.props.contentRating instanceof Array) {
                contentRating = (
                   <div className='contentRating__container'>
                       <div className='contentRating__header' data-advice='HTML for the *head* of the section'>contentRatings</div>
                       {this.props.contentRating.map((item, index) => {
                            return (<div className='contentRating' data-advice='Put your HTML here. contentRating is a Text.'><p className="VideoObject-contentRating">contentRating: {this.props.contentRating}</p></div>);
                       })}
                       <div className='contentRating__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                contentRating = (<div className='contentRating' data-advice='Put your HTML here. contentRating is a Text.'><p className="VideoObject-contentRating">contentRating: {this.props.contentRating}</p></div>);
            }
        }

        let associatedArticle;
        if (this.props.associatedArticle) {
            if (this.props.associatedArticle instanceof Array) {
                associatedArticle = (
                   <div className='associatedArticle__container'>
                       <div className='associatedArticle__header' data-advice='HTML for the *head* of the section'>associatedArticles</div>
                       {this.props.associatedArticle.map((item, index) => {
                            return (<NewsArticle  {...this.props.associatedArticle} />);
                       })}
                       <div className='associatedArticle__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                associatedArticle = (<NewsArticle  {...this.props.associatedArticle} />);
            }
        }

        let offers;
        if (this.props.offers) {
            if (this.props.offers instanceof Array) {
                offers = (
                   <div className='offers__container'>
                       <div className='offers__header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                            return (<Offer  {...this.props.offers} />);
                       })}
                       <div className='offers__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                offers = (<Offer  {...this.props.offers} />);
            }
        }

        let publishingPrinciples;
        if (this.props.publishingPrinciples) {
            if (this.props.publishingPrinciples instanceof Array) {
                publishingPrinciples = (
                   <div className='publishingPrinciples__container'>
                       <div className='publishingPrinciples__header' data-advice='HTML for the *head* of the section'>publishingPrincipless</div>
                       {this.props.publishingPrinciples.map((item, index) => {
                            return (<div className='publishingPrinciples' data-advice='Put your HTML here. publishingPrinciples is a URL.'><a className="VideoObject-publishingPrinciples" href={this.props.publishingPrinciples} target="_blank">publishingPrinciples</a></div>);
                       })}
                       <div className='publishingPrinciples__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                publishingPrinciples = (<div className='publishingPrinciples' data-advice='Put your HTML here. publishingPrinciples is a URL.'><a className="VideoObject-publishingPrinciples" href={this.props.publishingPrinciples} target="_blank">publishingPrinciples</a></div>);
            }
        }

        let embedUrl;
        if (this.props.embedUrl) {
            if (this.props.embedUrl instanceof Array) {
                embedUrl = (
                   <div className='embedUrl__container'>
                       <div className='embedUrl__header' data-advice='HTML for the *head* of the section'>embedUrls</div>
                       {this.props.embedUrl.map((item, index) => {
                            return (<div className='embedUrl' data-advice='Put your HTML here. embedUrl is a URL.'><a className="VideoObject-embedUrl" href={this.props.embedUrl} target="_blank">embedUrl</a></div>);
                       })}
                       <div className='embedUrl__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                embedUrl = (<div className='embedUrl' data-advice='Put your HTML here. embedUrl is a URL.'><a className="VideoObject-embedUrl" href={this.props.embedUrl} target="_blank">embedUrl</a></div>);
            }
        }

        let dateCreated;
        if (this.props.dateCreated) {
            if (this.props.dateCreated instanceof Array) {
                dateCreated = (
                   <div className='dateCreated__container'>
                       <div className='dateCreated__header' data-advice='HTML for the *head* of the section'>dateCreateds</div>
                       {this.props.dateCreated.map((item, index) => {
                           if (this.props['@type'] === 'Date') {
                               return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date.'><time className="VideoObject-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
                           }
                           else if (this.props['@type'] === 'DateTime') {
                               return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime.'><time className="VideoObject-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
                           }
                       })}
                       <div className='dateCreated__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Date') {
                   dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date.'><time className="VideoObject-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
               }
               else if (this.props['@type'] === 'DateTime') {
                   dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime.'><time className="VideoObject-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
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
                            return (<Action  {...this.props.potentialAction} />);
                       })}
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                potentialAction = (<Action  {...this.props.potentialAction} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="VideoObject-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="VideoObject-name">name: {this.props.name}</p></div>);
            }
        }

        let associatedMedia;
        if (this.props.associatedMedia) {
            if (this.props.associatedMedia instanceof Array) {
                associatedMedia = (
                   <div className='associatedMedia__container'>
                       <div className='associatedMedia__header' data-advice='HTML for the *head* of the section'>associatedMedias</div>
                       {this.props.associatedMedia.map((item, index) => {
                            return (<MediaObject  {...this.props.associatedMedia} />);
                       })}
                       <div className='associatedMedia__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                associatedMedia = (<MediaObject  {...this.props.associatedMedia} />);
            }
        }

        let audience;
        if (this.props.audience) {
            if (this.props.audience instanceof Array) {
                audience = (
                   <div className='audience__container'>
                       <div className='audience__header' data-advice='HTML for the *head* of the section'>audiences</div>
                       {this.props.audience.map((item, index) => {
                            return (<Audience  {...this.props.audience} />);
                       })}
                       <div className='audience__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                audience = (<Audience  {...this.props.audience} />);
            }
        }

        let accessibilityControl;
        if (this.props.accessibilityControl) {
            if (this.props.accessibilityControl instanceof Array) {
                accessibilityControl = (
                   <div className='accessibilityControl__container'>
                       <div className='accessibilityControl__header' data-advice='HTML for the *head* of the section'>accessibilityControls</div>
                       {this.props.accessibilityControl.map((item, index) => {
                            return (<div className='accessibilityControl' data-advice='Put your HTML here. accessibilityControl is a Text.'><p className="VideoObject-accessibilityControl">accessibilityControl: {this.props.accessibilityControl}</p></div>);
                       })}
                       <div className='accessibilityControl__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                accessibilityControl = (<div className='accessibilityControl' data-advice='Put your HTML here. accessibilityControl is a Text.'><p className="VideoObject-accessibilityControl">accessibilityControl: {this.props.accessibilityControl}</p></div>);
            }
        }

        let copyrightYear;
        if (this.props.copyrightYear) {
            if (this.props.copyrightYear instanceof Array) {
                copyrightYear = (
                   <div className='copyrightYear__container'>
                       <div className='copyrightYear__header' data-advice='HTML for the *head* of the section'>copyrightYears</div>
                       {this.props.copyrightYear.map((item, index) => {
                            return (<div className='copyrightYear' data-advice='Put your HTML here. copyrightYear is a Number.'><p className="VideoObject-copyrightYear">copyrightYear: {this.props.copyrightYear}</p></div>);
                       })}
                       <div className='copyrightYear__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                copyrightYear = (<div className='copyrightYear' data-advice='Put your HTML here. copyrightYear is a Number.'><p className="VideoObject-copyrightYear">copyrightYear: {this.props.copyrightYear}</p></div>);
            }
        }

        let videoQuality;
        if (this.props.videoQuality) {
            if (this.props.videoQuality instanceof Array) {
                videoQuality = (
                   <div className='videoQuality__container'>
                       <div className='videoQuality__header' data-advice='HTML for the *head* of the section'>videoQualitys</div>
                       {this.props.videoQuality.map((item, index) => {
                            return (<div className='videoQuality' data-advice='Put your HTML here. videoQuality is a Text.'><p className="VideoObject-videoQuality">videoQuality: {this.props.videoQuality}</p></div>);
                       })}
                       <div className='videoQuality__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                videoQuality = (<div className='videoQuality' data-advice='Put your HTML here. videoQuality is a Text.'><p className="VideoObject-videoQuality">videoQuality: {this.props.videoQuality}</p></div>);
            }
        }

        let encodesCreativeWork;
        if (this.props.encodesCreativeWork) {
            if (this.props.encodesCreativeWork instanceof Array) {
                encodesCreativeWork = (
                   <div className='encodesCreativeWork__container'>
                       <div className='encodesCreativeWork__header' data-advice='HTML for the *head* of the section'>encodesCreativeWorks</div>
                       {this.props.encodesCreativeWork.map((item, index) => {
                            return (<CreativeWork  {...this.props.encodesCreativeWork} />);
                       })}
                       <div className='encodesCreativeWork__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                encodesCreativeWork = (<CreativeWork  {...this.props.encodesCreativeWork} />);
            }
        }

        let creator;
        if (this.props.creator) {
            if (this.props.creator instanceof Array) {
                creator = (
                   <div className='creator__container'>
                       <div className='creator__header' data-advice='HTML for the *head* of the section'>creators</div>
                       {this.props.creator.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.creator} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.creator} />);
                           }
                       })}
                       <div className='creator__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   creator = (<Person key={index} {...this.props.creator} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   creator = (<Organization key={index} {...this.props.creator} />);
               }
            }
        }

        let musicBy;
        if (this.props.musicBy) {
            if (this.props.musicBy instanceof Array) {
                musicBy = (
                   <div className='musicBy__container'>
                       <div className='musicBy__header' data-advice='HTML for the *head* of the section'>musicBys</div>
                       {this.props.musicBy.map((item, index) => {
                           if (this.props['@type'] === 'MusicGroup') {
                               return (<MusicGroup key={index} {...this.props.musicBy} />);
                           }
                           else if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.musicBy} />);
                           }
                       })}
                       <div className='musicBy__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'MusicGroup') {
                   musicBy = (<MusicGroup key={index} {...this.props.musicBy} />);
               }
               else if (this.props['@type'] === 'Person') {
                   musicBy = (<Person key={index} {...this.props.musicBy} />);
               }
            }
        }

        let commentCount;
        if (this.props.commentCount) {
            if (this.props.commentCount instanceof Array) {
                commentCount = (
                   <div className='commentCount__container'>
                       <div className='commentCount__header' data-advice='HTML for the *head* of the section'>commentCounts</div>
                       {this.props.commentCount.map((item, index) => {
                            return (<div className='commentCount' data-advice='Put your HTML here. commentCount is a Integer.'><p className="VideoObject-commentCount">commentCount: {this.props.commentCount}</p></div>);
                       })}
                       <div className='commentCount__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                commentCount = (<div className='commentCount' data-advice='Put your HTML here. commentCount is a Integer.'><p className="VideoObject-commentCount">commentCount: {this.props.commentCount}</p></div>);
            }
        }

        let video;
        if (this.props.video) {
            if (this.props.video instanceof Array) {
                video = (
                   <div className='video__container'>
                       <div className='video__header' data-advice='HTML for the *head* of the section'>videos</div>
                       {this.props.video.map((item, index) => {
                            return (<VideoObject  {...this.props.video} />);
                       })}
                       <div className='video__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                video = (<VideoObject  {...this.props.video} />);
            }
        }

        let typicalAgeRange;
        if (this.props.typicalAgeRange) {
            if (this.props.typicalAgeRange instanceof Array) {
                typicalAgeRange = (
                   <div className='typicalAgeRange__container'>
                       <div className='typicalAgeRange__header' data-advice='HTML for the *head* of the section'>typicalAgeRanges</div>
                       {this.props.typicalAgeRange.map((item, index) => {
                            return (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="VideoObject-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
                       })}
                       <div className='typicalAgeRange__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                typicalAgeRange = (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="VideoObject-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
            }
        }

        let duration;
        if (this.props.duration) {
            if (this.props.duration instanceof Array) {
                duration = (
                   <div className='duration__container'>
                       <div className='duration__header' data-advice='HTML for the *head* of the section'>durations</div>
                       {this.props.duration.map((item, index) => {
                            return (<Duration  {...this.props.duration} />);
                       })}
                       <div className='duration__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                duration = (<Duration  {...this.props.duration} />);
            }
        }

        let fileFormat;
        if (this.props.fileFormat) {
            if (this.props.fileFormat instanceof Array) {
                fileFormat = (
                   <div className='fileFormat__container'>
                       <div className='fileFormat__header' data-advice='HTML for the *head* of the section'>fileFormats</div>
                       {this.props.fileFormat.map((item, index) => {
                            return (<div className='fileFormat' data-advice='Put your HTML here. fileFormat is a Text.'><p className="VideoObject-fileFormat">fileFormat: {this.props.fileFormat}</p></div>);
                       })}
                       <div className='fileFormat__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                fileFormat = (<div className='fileFormat' data-advice='Put your HTML here. fileFormat is a Text.'><p className="VideoObject-fileFormat">fileFormat: {this.props.fileFormat}</p></div>);
            }
        }

        let discussionUrl;
        if (this.props.discussionUrl) {
            if (this.props.discussionUrl instanceof Array) {
                discussionUrl = (
                   <div className='discussionUrl__container'>
                       <div className='discussionUrl__header' data-advice='HTML for the *head* of the section'>discussionUrls</div>
                       {this.props.discussionUrl.map((item, index) => {
                            return (<div className='discussionUrl' data-advice='Put your HTML here. discussionUrl is a URL.'><a className="VideoObject-discussionUrl" href={this.props.discussionUrl} target="_blank">discussionUrl</a></div>);
                       })}
                       <div className='discussionUrl__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                discussionUrl = (<div className='discussionUrl' data-advice='Put your HTML here. discussionUrl is a URL.'><a className="VideoObject-discussionUrl" href={this.props.discussionUrl} target="_blank">discussionUrl</a></div>);
            }
        }

        let productionCompany;
        if (this.props.productionCompany) {
            if (this.props.productionCompany instanceof Array) {
                productionCompany = (
                   <div className='productionCompany__container'>
                       <div className='productionCompany__header' data-advice='HTML for the *head* of the section'>productionCompanys</div>
                       {this.props.productionCompany.map((item, index) => {
                            return (<Organization  {...this.props.productionCompany} />);
                       })}
                       <div className='productionCompany__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                productionCompany = (<Organization  {...this.props.productionCompany} />);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review__container'>
                       <div className='review__header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review  {...this.props.review} />);
                       })}
                       <div className='review__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                review = (<Review  {...this.props.review} />);
            }
        }

        let isFamilyFriendly;
        if (this.props.isFamilyFriendly) {
            if (this.props.isFamilyFriendly instanceof Array) {
                isFamilyFriendly = (
                   <div className='isFamilyFriendly__container'>
                       <div className='isFamilyFriendly__header' data-advice='HTML for the *head* of the section'>isFamilyFriendlys</div>
                       {this.props.isFamilyFriendly.map((item, index) => {
                            return (<div className='isFamilyFriendly' data-advice='Put your HTML here. isFamilyFriendly is a Boolean.'><div className="VideoObject-isFamilyFriendly">isFamilyFriendly: {this.props.isFamilyFriendly}</div></div>);
                       })}
                       <div className='isFamilyFriendly__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isFamilyFriendly = (<div className='isFamilyFriendly' data-advice='Put your HTML here. isFamilyFriendly is a Boolean.'><div className="VideoObject-isFamilyFriendly">isFamilyFriendly: {this.props.isFamilyFriendly}</div></div>);
            }
        }

        let version;
        if (this.props.version) {
            if (this.props.version instanceof Array) {
                version = (
                   <div className='version__container'>
                       <div className='version__header' data-advice='HTML for the *head* of the section'>versions</div>
                       {this.props.version.map((item, index) => {
                            return (<div className='version' data-advice='Put your HTML here. version is a Number.'><p className="VideoObject-version">version: {this.props.version}</p></div>);
                       })}
                       <div className='version__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                version = (<div className='version' data-advice='Put your HTML here. version is a Number.'><p className="VideoObject-version">version: {this.props.version}</p></div>);
            }
        }

        let locationCreated;
        if (this.props.locationCreated) {
            if (this.props.locationCreated instanceof Array) {
                locationCreated = (
                   <div className='locationCreated__container'>
                       <div className='locationCreated__header' data-advice='HTML for the *head* of the section'>locationCreateds</div>
                       {this.props.locationCreated.map((item, index) => {
                            return (<Place  {...this.props.locationCreated} />);
                       })}
                       <div className='locationCreated__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                locationCreated = (<Place  {...this.props.locationCreated} />);
            }
        }

        let provider;
        if (this.props.provider) {
            if (this.props.provider instanceof Array) {
                provider = (
                   <div className='provider__container'>
                       <div className='provider__header' data-advice='HTML for the *head* of the section'>providers</div>
                       {this.props.provider.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.provider} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.provider} />);
                           }
                       })}
                       <div className='provider__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   provider = (<Person key={index} {...this.props.provider} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   provider = (<Organization key={index} {...this.props.provider} />);
               }
            }
        }

        let isPartOf;
        if (this.props.isPartOf) {
            if (this.props.isPartOf instanceof Array) {
                isPartOf = (
                   <div className='isPartOf__container'>
                       <div className='isPartOf__header' data-advice='HTML for the *head* of the section'>isPartOfs</div>
                       {this.props.isPartOf.map((item, index) => {
                            return (<CreativeWork  {...this.props.isPartOf} />);
                       })}
                       <div className='isPartOf__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isPartOf = (<CreativeWork  {...this.props.isPartOf} />);
            }
        }

        let accessibilityHazard;
        if (this.props.accessibilityHazard) {
            if (this.props.accessibilityHazard instanceof Array) {
                accessibilityHazard = (
                   <div className='accessibilityHazard__container'>
                       <div className='accessibilityHazard__header' data-advice='HTML for the *head* of the section'>accessibilityHazards</div>
                       {this.props.accessibilityHazard.map((item, index) => {
                            return (<div className='accessibilityHazard' data-advice='Put your HTML here. accessibilityHazard is a Text.'><p className="VideoObject-accessibilityHazard">accessibilityHazard: {this.props.accessibilityHazard}</p></div>);
                       })}
                       <div className='accessibilityHazard__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                accessibilityHazard = (<div className='accessibilityHazard' data-advice='Put your HTML here. accessibilityHazard is a Text.'><p className="VideoObject-accessibilityHazard">accessibilityHazard: {this.props.accessibilityHazard}</p></div>);
            }
        }

        let thumbnail;
        if (this.props.thumbnail) {
            if (this.props.thumbnail instanceof Array) {
                thumbnail = (
                   <div className='thumbnail__container'>
                       <div className='thumbnail__header' data-advice='HTML for the *head* of the section'>thumbnails</div>
                       {this.props.thumbnail.map((item, index) => {
                            return (<ImageObject  {...this.props.thumbnail} />);
                       })}
                       <div className='thumbnail__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                thumbnail = (<ImageObject  {...this.props.thumbnail} />);
            }
        }

        let contentSize;
        if (this.props.contentSize) {
            if (this.props.contentSize instanceof Array) {
                contentSize = (
                   <div className='contentSize__container'>
                       <div className='contentSize__header' data-advice='HTML for the *head* of the section'>contentSizes</div>
                       {this.props.contentSize.map((item, index) => {
                            return (<div className='contentSize' data-advice='Put your HTML here. contentSize is a Text.'><p className="VideoObject-contentSize">contentSize: {this.props.contentSize}</p></div>);
                       })}
                       <div className='contentSize__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                contentSize = (<div className='contentSize' data-advice='Put your HTML here. contentSize is a Text.'><p className="VideoObject-contentSize">contentSize: {this.props.contentSize}</p></div>);
            }
        }

        let contentUrl;
        if (this.props.contentUrl) {
            if (this.props.contentUrl instanceof Array) {
                contentUrl = (
                   <div className='contentUrl__container'>
                       <div className='contentUrl__header' data-advice='HTML for the *head* of the section'>contentUrls</div>
                       {this.props.contentUrl.map((item, index) => {
                            return (<div className='contentUrl' data-advice='Put your HTML here. contentUrl is a URL.'><a className="VideoObject-contentUrl" href={this.props.contentUrl} target="_blank">contentUrl</a></div>);
                       })}
                       <div className='contentUrl__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                contentUrl = (<div className='contentUrl' data-advice='Put your HTML here. contentUrl is a URL.'><a className="VideoObject-contentUrl" href={this.props.contentUrl} target="_blank">contentUrl</a></div>);
            }
        }

        let educationalAlignment;
        if (this.props.educationalAlignment) {
            if (this.props.educationalAlignment instanceof Array) {
                educationalAlignment = (
                   <div className='educationalAlignment__container'>
                       <div className='educationalAlignment__header' data-advice='HTML for the *head* of the section'>educationalAlignments</div>
                       {this.props.educationalAlignment.map((item, index) => {
                            return (<AlignmentObject  {...this.props.educationalAlignment} />);
                       })}
                       <div className='educationalAlignment__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                educationalAlignment = (<AlignmentObject  {...this.props.educationalAlignment} />);
            }
        }

        let genre;
        if (this.props.genre) {
            if (this.props.genre instanceof Array) {
                genre = (
                   <div className='genre__container'>
                       <div className='genre__header' data-advice='HTML for the *head* of the section'>genres</div>
                       {this.props.genre.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='genre' data-advice='Put your HTML here. genre is a Text.'><p className="VideoObject-genre">genre: {this.props.genre}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='genre' data-advice='Put your HTML here. genre is a URL.'><a className="VideoObject-genre" href={this.props.genre} target="_blank">genre</a></div>);
                           }
                       })}
                       <div className='genre__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   genre = (<div className='genre' data-advice='Put your HTML here. genre is a Text.'><p className="VideoObject-genre">genre: {this.props.genre}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   genre = (<div className='genre' data-advice='Put your HTML here. genre is a URL.'><a className="VideoObject-genre" href={this.props.genre} target="_blank">genre</a></div>);
               }
            }
        }

        let bitrate;
        if (this.props.bitrate) {
            if (this.props.bitrate instanceof Array) {
                bitrate = (
                   <div className='bitrate__container'>
                       <div className='bitrate__header' data-advice='HTML for the *head* of the section'>bitrates</div>
                       {this.props.bitrate.map((item, index) => {
                            return (<div className='bitrate' data-advice='Put your HTML here. bitrate is a Text.'><p className="VideoObject-bitrate">bitrate: {this.props.bitrate}</p></div>);
                       })}
                       <div className='bitrate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                bitrate = (<div className='bitrate' data-advice='Put your HTML here. bitrate is a Text.'><p className="VideoObject-bitrate">bitrate: {this.props.bitrate}</p></div>);
            }
        }

        let publisher;
        if (this.props.publisher) {
            if (this.props.publisher instanceof Array) {
                publisher = (
                   <div className='publisher__container'>
                       <div className='publisher__header' data-advice='HTML for the *head* of the section'>publishers</div>
                       {this.props.publisher.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.publisher} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.publisher} />);
                           }
                       })}
                       <div className='publisher__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   publisher = (<Person key={index} {...this.props.publisher} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   publisher = (<Organization key={index} {...this.props.publisher} />);
               }
            }
        }

        let about;
        if (this.props.about) {
            if (this.props.about instanceof Array) {
                about = (
                   <div className='about__container'>
                       <div className='about__header' data-advice='HTML for the *head* of the section'>abouts</div>
                       {this.props.about.map((item, index) => {
                            return (<Thing  {...this.props.about} />);
                       })}
                       <div className='about__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                about = (<Thing  {...this.props.about} />);
            }
        }

        let translator;
        if (this.props.translator) {
            if (this.props.translator instanceof Array) {
                translator = (
                   <div className='translator__container'>
                       <div className='translator__header' data-advice='HTML for the *head* of the section'>translators</div>
                       {this.props.translator.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.translator} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.translator} />);
                           }
                       })}
                       <div className='translator__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   translator = (<Person key={index} {...this.props.translator} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   translator = (<Organization key={index} {...this.props.translator} />);
               }
            }
        }

        let license;
        if (this.props.license) {
            if (this.props.license instanceof Array) {
                license = (
                   <div className='license__container'>
                       <div className='license__header' data-advice='HTML for the *head* of the section'>licenses</div>
                       {this.props.license.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='license' data-advice='Put your HTML here. license is a URL.'><a className="VideoObject-license" href={this.props.license} target="_blank">license</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.license} />);
                           }
                       })}
                       <div className='license__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   license = (<div className='license' data-advice='Put your HTML here. license is a URL.'><a className="VideoObject-license" href={this.props.license} target="_blank">license</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   license = (<CreativeWork key={index} {...this.props.license} />);
               }
            }
        }

        let workExample;
        if (this.props.workExample) {
            if (this.props.workExample instanceof Array) {
                workExample = (
                   <div className='workExample__container'>
                       <div className='workExample__header' data-advice='HTML for the *head* of the section'>workExamples</div>
                       {this.props.workExample.map((item, index) => {
                            return (<CreativeWork  {...this.props.workExample} />);
                       })}
                       <div className='workExample__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                workExample = (<CreativeWork  {...this.props.workExample} />);
            }
        }

        let encodingFormat;
        if (this.props.encodingFormat) {
            if (this.props.encodingFormat instanceof Array) {
                encodingFormat = (
                   <div className='encodingFormat__container'>
                       <div className='encodingFormat__header' data-advice='HTML for the *head* of the section'>encodingFormats</div>
                       {this.props.encodingFormat.map((item, index) => {
                            return (<div className='encodingFormat' data-advice='Put your HTML here. encodingFormat is a Text.'><p className="VideoObject-encodingFormat">encodingFormat: {this.props.encodingFormat}</p></div>);
                       })}
                       <div className='encodingFormat__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                encodingFormat = (<div className='encodingFormat' data-advice='Put your HTML here. encodingFormat is a Text.'><p className="VideoObject-encodingFormat">encodingFormat: {this.props.encodingFormat}</p></div>);
            }
        }

        let caption;
        if (this.props.caption) {
            if (this.props.caption instanceof Array) {
                caption = (
                   <div className='caption__container'>
                       <div className='caption__header' data-advice='HTML for the *head* of the section'>captions</div>
                       {this.props.caption.map((item, index) => {
                            return (<div className='caption' data-advice='Put your HTML here. caption is a Text.'><p className="VideoObject-caption">caption: {this.props.caption}</p></div>);
                       })}
                       <div className='caption__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                caption = (<div className='caption' data-advice='Put your HTML here. caption is a Text.'><p className="VideoObject-caption">caption: {this.props.caption}</p></div>);
            }
        }

        let mentions;
        if (this.props.mentions) {
            if (this.props.mentions instanceof Array) {
                mentions = (
                   <div className='mentions__container'>
                       <div className='mentions__header' data-advice='HTML for the *head* of the section'>mentionss</div>
                       {this.props.mentions.map((item, index) => {
                            return (<Thing  {...this.props.mentions} />);
                       })}
                       <div className='mentions__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                mentions = (<Thing  {...this.props.mentions} />);
            }
        }

        let comment;
        if (this.props.comment) {
            if (this.props.comment instanceof Array) {
                comment = (
                   <div className='comment__container'>
                       <div className='comment__header' data-advice='HTML for the *head* of the section'>comments</div>
                       {this.props.comment.map((item, index) => {
                            return (<Comment  {...this.props.comment} />);
                       })}
                       <div className='comment__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                comment = (<Comment  {...this.props.comment} />);
            }
        }

        let isBasedOnUrl;
        if (this.props.isBasedOnUrl) {
            if (this.props.isBasedOnUrl instanceof Array) {
                isBasedOnUrl = (
                   <div className='isBasedOnUrl__container'>
                       <div className='isBasedOnUrl__header' data-advice='HTML for the *head* of the section'>isBasedOnUrls</div>
                       {this.props.isBasedOnUrl.map((item, index) => {
                            return (<div className='isBasedOnUrl' data-advice='Put your HTML here. isBasedOnUrl is a URL.'><a className="VideoObject-isBasedOnUrl" href={this.props.isBasedOnUrl} target="_blank">isBasedOnUrl</a></div>);
                       })}
                       <div className='isBasedOnUrl__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isBasedOnUrl = (<div className='isBasedOnUrl' data-advice='Put your HTML here. isBasedOnUrl is a URL.'><a className="VideoObject-isBasedOnUrl" href={this.props.isBasedOnUrl} target="_blank">isBasedOnUrl</a></div>);
            }
        }

        let encoding;
        if (this.props.encoding) {
            if (this.props.encoding instanceof Array) {
                encoding = (
                   <div className='encoding__container'>
                       <div className='encoding__header' data-advice='HTML for the *head* of the section'>encodings</div>
                       {this.props.encoding.map((item, index) => {
                            return (<MediaObject  {...this.props.encoding} />);
                       })}
                       <div className='encoding__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                encoding = (<MediaObject  {...this.props.encoding} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="VideoObject-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="VideoObject-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="VideoObject-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="VideoObject-image" src={this.props.image} /></div>);
               }
            }
        }

        let height;
        if (this.props.height) {
            if (this.props.height instanceof Array) {
                height = (
                   <div className='height__container'>
                       <div className='height__header' data-advice='HTML for the *head* of the section'>heights</div>
                       {this.props.height.map((item, index) => {
                           if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.height} />);
                           }
                           else if (this.props['@type'] === 'Distance') {
                               return (<Distance key={index} {...this.props.height} />);
                           }
                       })}
                       <div className='height__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'QuantitativeValue') {
                   height = (<QuantitativeValue key={index} {...this.props.height} />);
               }
               else if (this.props['@type'] === 'Distance') {
                   height = (<Distance key={index} {...this.props.height} />);
               }
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating__container'>
                       <div className='aggregateRating__header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating  {...this.props.aggregateRating} />);
                       })}
                       <div className='aggregateRating__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating  {...this.props.aggregateRating} />);
            }
        }

        let contributor;
        if (this.props.contributor) {
            if (this.props.contributor instanceof Array) {
                contributor = (
                   <div className='contributor__container'>
                       <div className='contributor__header' data-advice='HTML for the *head* of the section'>contributors</div>
                       {this.props.contributor.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.contributor} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.contributor} />);
                           }
                       })}
                       <div className='contributor__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   contributor = (<Person key={index} {...this.props.contributor} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   contributor = (<Organization key={index} {...this.props.contributor} />);
               }
            }
        }

        let thumbnailUrl;
        if (this.props.thumbnailUrl) {
            if (this.props.thumbnailUrl instanceof Array) {
                thumbnailUrl = (
                   <div className='thumbnailUrl__container'>
                       <div className='thumbnailUrl__header' data-advice='HTML for the *head* of the section'>thumbnailUrls</div>
                       {this.props.thumbnailUrl.map((item, index) => {
                            return (<div className='thumbnailUrl' data-advice='Put your HTML here. thumbnailUrl is a URL.'><a className="VideoObject-thumbnailUrl" href={this.props.thumbnailUrl} target="_blank">thumbnailUrl</a></div>);
                       })}
                       <div className='thumbnailUrl__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                thumbnailUrl = (<div className='thumbnailUrl' data-advice='Put your HTML here. thumbnailUrl is a URL.'><a className="VideoObject-thumbnailUrl" href={this.props.thumbnailUrl} target="_blank">thumbnailUrl</a></div>);
            }
        }

        let mainEntity;
        if (this.props.mainEntity) {
            if (this.props.mainEntity instanceof Array) {
                mainEntity = (
                   <div className='mainEntity__container'>
                       <div className='mainEntity__header' data-advice='HTML for the *head* of the section'>mainEntitys</div>
                       {this.props.mainEntity.map((item, index) => {
                            return (<Thing  {...this.props.mainEntity} />);
                       })}
                       <div className='mainEntity__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                mainEntity = (<Thing  {...this.props.mainEntity} />);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="VideoObject-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="VideoObject-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let accessibilityFeature;
        if (this.props.accessibilityFeature) {
            if (this.props.accessibilityFeature instanceof Array) {
                accessibilityFeature = (
                   <div className='accessibilityFeature__container'>
                       <div className='accessibilityFeature__header' data-advice='HTML for the *head* of the section'>accessibilityFeatures</div>
                       {this.props.accessibilityFeature.map((item, index) => {
                            return (<div className='accessibilityFeature' data-advice='Put your HTML here. accessibilityFeature is a Text.'><p className="VideoObject-accessibilityFeature">accessibilityFeature: {this.props.accessibilityFeature}</p></div>);
                       })}
                       <div className='accessibilityFeature__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                accessibilityFeature = (<div className='accessibilityFeature' data-advice='Put your HTML here. accessibilityFeature is a Text.'><p className="VideoObject-accessibilityFeature">accessibilityFeature: {this.props.accessibilityFeature}</p></div>);
            }
        }

        let interactivityType;
        if (this.props.interactivityType) {
            if (this.props.interactivityType instanceof Array) {
                interactivityType = (
                   <div className='interactivityType__container'>
                       <div className='interactivityType__header' data-advice='HTML for the *head* of the section'>interactivityTypes</div>
                       {this.props.interactivityType.map((item, index) => {
                            return (<div className='interactivityType' data-advice='Put your HTML here. interactivityType is a Text.'><p className="VideoObject-interactivityType">interactivityType: {this.props.interactivityType}</p></div>);
                       })}
                       <div className='interactivityType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                interactivityType = (<div className='interactivityType' data-advice='Put your HTML here. interactivityType is a Text.'><p className="VideoObject-interactivityType">interactivityType: {this.props.interactivityType}</p></div>);
            }
        }

        let publication;
        if (this.props.publication) {
            if (this.props.publication instanceof Array) {
                publication = (
                   <div className='publication__container'>
                       <div className='publication__header' data-advice='HTML for the *head* of the section'>publications</div>
                       {this.props.publication.map((item, index) => {
                            return (<PublicationEvent  {...this.props.publication} />);
                       })}
                       <div className='publication__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                publication = (<PublicationEvent  {...this.props.publication} />);
            }
        }

        let width;
        if (this.props.width) {
            if (this.props.width instanceof Array) {
                width = (
                   <div className='width__container'>
                       <div className='width__header' data-advice='HTML for the *head* of the section'>widths</div>
                       {this.props.width.map((item, index) => {
                           if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.width} />);
                           }
                           else if (this.props['@type'] === 'Distance') {
                               return (<Distance key={index} {...this.props.width} />);
                           }
                       })}
                       <div className='width__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'QuantitativeValue') {
                   width = (<QuantitativeValue key={index} {...this.props.width} />);
               }
               else if (this.props['@type'] === 'Distance') {
                   width = (<Distance key={index} {...this.props.width} />);
               }
            }
        }

        let requiresSubscription;
        if (this.props.requiresSubscription) {
            if (this.props.requiresSubscription instanceof Array) {
                requiresSubscription = (
                   <div className='requiresSubscription__container'>
                       <div className='requiresSubscription__header' data-advice='HTML for the *head* of the section'>requiresSubscriptions</div>
                       {this.props.requiresSubscription.map((item, index) => {
                            return (<div className='requiresSubscription' data-advice='Put your HTML here. requiresSubscription is a Boolean.'><div className="VideoObject-requiresSubscription">requiresSubscription: {this.props.requiresSubscription}</div></div>);
                       })}
                       <div className='requiresSubscription__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                requiresSubscription = (<div className='requiresSubscription' data-advice='Put your HTML here. requiresSubscription is a Boolean.'><div className="VideoObject-requiresSubscription">requiresSubscription: {this.props.requiresSubscription}</div></div>);
            }
        }

        let editor;
        if (this.props.editor) {
            if (this.props.editor instanceof Array) {
                editor = (
                   <div className='editor__container'>
                       <div className='editor__header' data-advice='HTML for the *head* of the section'>editors</div>
                       {this.props.editor.map((item, index) => {
                            return (<Person  {...this.props.editor} />);
                       })}
                       <div className='editor__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                editor = (<Person  {...this.props.editor} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="VideoObject-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="VideoObject-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let recordedAt;
        if (this.props.recordedAt) {
            if (this.props.recordedAt instanceof Array) {
                recordedAt = (
                   <div className='recordedAt__container'>
                       <div className='recordedAt__header' data-advice='HTML for the *head* of the section'>recordedAts</div>
                       {this.props.recordedAt.map((item, index) => {
                            return (<Event  {...this.props.recordedAt} />);
                       })}
                       <div className='recordedAt__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                recordedAt = (<Event  {...this.props.recordedAt} />);
            }
        }

        let hasPart;
        if (this.props.hasPart) {
            if (this.props.hasPart instanceof Array) {
                hasPart = (
                   <div className='hasPart__container'>
                       <div className='hasPart__header' data-advice='HTML for the *head* of the section'>hasParts</div>
                       {this.props.hasPart.map((item, index) => {
                            return (<CreativeWork  {...this.props.hasPart} />);
                       })}
                       <div className='hasPart__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                hasPart = (<CreativeWork  {...this.props.hasPart} />);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award__container'>
                       <div className='award__header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                            return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="VideoObject-award">award: {this.props.award}</p></div>);
                       })}
                       <div className='award__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="VideoObject-award">award: {this.props.award}</p></div>);
            }
        }

        let exampleOfWork;
        if (this.props.exampleOfWork) {
            if (this.props.exampleOfWork instanceof Array) {
                exampleOfWork = (
                   <div className='exampleOfWork__container'>
                       <div className='exampleOfWork__header' data-advice='HTML for the *head* of the section'>exampleOfWorks</div>
                       {this.props.exampleOfWork.map((item, index) => {
                            return (<CreativeWork  {...this.props.exampleOfWork} />);
                       })}
                       <div className='exampleOfWork__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                exampleOfWork = (<CreativeWork  {...this.props.exampleOfWork} />);
            }
        }

        let copyrightHolder;
        if (this.props.copyrightHolder) {
            if (this.props.copyrightHolder instanceof Array) {
                copyrightHolder = (
                   <div className='copyrightHolder__container'>
                       <div className='copyrightHolder__header' data-advice='HTML for the *head* of the section'>copyrightHolders</div>
                       {this.props.copyrightHolder.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.copyrightHolder} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.copyrightHolder} />);
                           }
                       })}
                       <div className='copyrightHolder__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   copyrightHolder = (<Person key={index} {...this.props.copyrightHolder} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   copyrightHolder = (<Organization key={index} {...this.props.copyrightHolder} />);
               }
            }
        }

        let accessibilityAPI;
        if (this.props.accessibilityAPI) {
            if (this.props.accessibilityAPI instanceof Array) {
                accessibilityAPI = (
                   <div className='accessibilityAPI__container'>
                       <div className='accessibilityAPI__header' data-advice='HTML for the *head* of the section'>accessibilityAPIs</div>
                       {this.props.accessibilityAPI.map((item, index) => {
                            return (<div className='accessibilityAPI' data-advice='Put your HTML here. accessibilityAPI is a Text.'><p className="VideoObject-accessibilityAPI">accessibilityAPI: {this.props.accessibilityAPI}</p></div>);
                       })}
                       <div className='accessibilityAPI__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                accessibilityAPI = (<div className='accessibilityAPI' data-advice='Put your HTML here. accessibilityAPI is a Text.'><p className="VideoObject-accessibilityAPI">accessibilityAPI: {this.props.accessibilityAPI}</p></div>);
            }
        }

        let learningResourceType;
        if (this.props.learningResourceType) {
            if (this.props.learningResourceType instanceof Array) {
                learningResourceType = (
                   <div className='learningResourceType__container'>
                       <div className='learningResourceType__header' data-advice='HTML for the *head* of the section'>learningResourceTypes</div>
                       {this.props.learningResourceType.map((item, index) => {
                            return (<div className='learningResourceType' data-advice='Put your HTML here. learningResourceType is a Text.'><p className="VideoObject-learningResourceType">learningResourceType: {this.props.learningResourceType}</p></div>);
                       })}
                       <div className='learningResourceType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                learningResourceType = (<div className='learningResourceType' data-advice='Put your HTML here. learningResourceType is a Text.'><p className="VideoObject-learningResourceType">learningResourceType: {this.props.learningResourceType}</p></div>);
            }
        }

        let sourceOrganization;
        if (this.props.sourceOrganization) {
            if (this.props.sourceOrganization instanceof Array) {
                sourceOrganization = (
                   <div className='sourceOrganization__container'>
                       <div className='sourceOrganization__header' data-advice='HTML for the *head* of the section'>sourceOrganizations</div>
                       {this.props.sourceOrganization.map((item, index) => {
                            return (<Organization  {...this.props.sourceOrganization} />);
                       })}
                       <div className='sourceOrganization__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sourceOrganization = (<Organization  {...this.props.sourceOrganization} />);
            }
        }

        let videoFrameSize;
        if (this.props.videoFrameSize) {
            if (this.props.videoFrameSize instanceof Array) {
                videoFrameSize = (
                   <div className='videoFrameSize__container'>
                       <div className='videoFrameSize__header' data-advice='HTML for the *head* of the section'>videoFrameSizes</div>
                       {this.props.videoFrameSize.map((item, index) => {
                            return (<div className='videoFrameSize' data-advice='Put your HTML here. videoFrameSize is a Text.'><p className="VideoObject-videoFrameSize">videoFrameSize: {this.props.videoFrameSize}</p></div>);
                       })}
                       <div className='videoFrameSize__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                videoFrameSize = (<div className='videoFrameSize' data-advice='Put your HTML here. videoFrameSize is a Text.'><p className="VideoObject-videoFrameSize">videoFrameSize: {this.props.videoFrameSize}</p></div>);
            }
        }

        let regionsAllowed;
        if (this.props.regionsAllowed) {
            if (this.props.regionsAllowed instanceof Array) {
                regionsAllowed = (
                   <div className='regionsAllowed__container'>
                       <div className='regionsAllowed__header' data-advice='HTML for the *head* of the section'>regionsAlloweds</div>
                       {this.props.regionsAllowed.map((item, index) => {
                            return (<Place  {...this.props.regionsAllowed} />);
                       })}
                       <div className='regionsAllowed__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                regionsAllowed = (<Place  {...this.props.regionsAllowed} />);
            }
        }

        let inLanguage;
        if (this.props.inLanguage) {
            if (this.props.inLanguage instanceof Array) {
                inLanguage = (
                   <div className='inLanguage__container'>
                       <div className='inLanguage__header' data-advice='HTML for the *head* of the section'>inLanguages</div>
                       {this.props.inLanguage.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text.'><p className="VideoObject-inLanguage">inLanguage: {this.props.inLanguage}</p></div>);
                           }
                           else if (this.props['@type'] === 'Language') {
                               return (<Language key={index} {...this.props.inLanguage} />);
                           }
                       })}
                       <div className='inLanguage__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   inLanguage = (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text.'><p className="VideoObject-inLanguage">inLanguage: {this.props.inLanguage}</p></div>);
               }
               else if (this.props['@type'] === 'Language') {
                   inLanguage = (<Language key={index} {...this.props.inLanguage} />);
               }
            }
        }

        let citation;
        if (this.props.citation) {
            if (this.props.citation instanceof Array) {
                citation = (
                   <div className='citation__container'>
                       <div className='citation__header' data-advice='HTML for the *head* of the section'>citations</div>
                       {this.props.citation.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='citation' data-advice='Put your HTML here. citation is a Text.'><p className="VideoObject-citation">citation: {this.props.citation}</p></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.citation} />);
                           }
                       })}
                       <div className='citation__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   citation = (<div className='citation' data-advice='Put your HTML here. citation is a Text.'><p className="VideoObject-citation">citation: {this.props.citation}</p></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   citation = (<CreativeWork key={index} {...this.props.citation} />);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="VideoObject-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="VideoObject-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let author;
        if (this.props.author) {
            if (this.props.author instanceof Array) {
                author = (
                   <div className='author__container'>
                       <div className='author__header' data-advice='HTML for the *head* of the section'>authors</div>
                       {this.props.author.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.author} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.author} />);
                           }
                       })}
                       <div className='author__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   author = (<Person key={index} {...this.props.author} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   author = (<Organization key={index} {...this.props.author} />);
               }
            }
        }

        let actor;
        if (this.props.actor) {
            if (this.props.actor instanceof Array) {
                actor = (
                   <div className='actor__container'>
                       <div className='actor__header' data-advice='HTML for the *head* of the section'>actors</div>
                       {this.props.actor.map((item, index) => {
                            return (<Person  {...this.props.actor} />);
                       })}
                       <div className='actor__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                actor = (<Person  {...this.props.actor} />);
            }
        }

        let dateModified;
        if (this.props.dateModified) {
            if (this.props.dateModified instanceof Array) {
                dateModified = (
                   <div className='dateModified__container'>
                       <div className='dateModified__header' data-advice='HTML for the *head* of the section'>dateModifieds</div>
                       {this.props.dateModified.map((item, index) => {
                           if (this.props['@type'] === 'Date') {
                               return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date.'><time className="VideoObject-dateModified">dateModified: {this.props.dateModified}</time></div>);
                           }
                           else if (this.props['@type'] === 'DateTime') {
                               return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime.'><time className="VideoObject-dateModified">dateModified: {this.props.dateModified}</time></div>);
                           }
                       })}
                       <div className='dateModified__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Date') {
                   dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date.'><time className="VideoObject-dateModified">dateModified: {this.props.dateModified}</time></div>);
               }
               else if (this.props['@type'] === 'DateTime') {
                   dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime.'><time className="VideoObject-dateModified">dateModified: {this.props.dateModified}</time></div>);
               }
            }
        }

        let interactionStatistic;
        if (this.props.interactionStatistic) {
            if (this.props.interactionStatistic instanceof Array) {
                interactionStatistic = (
                   <div className='interactionStatistic__container'>
                       <div className='interactionStatistic__header' data-advice='HTML for the *head* of the section'>interactionStatistics</div>
                       {this.props.interactionStatistic.map((item, index) => {
                            return (<InteractionCounter  {...this.props.interactionStatistic} />);
                       })}
                       <div className='interactionStatistic__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                interactionStatistic = (<InteractionCounter  {...this.props.interactionStatistic} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="VideoObject-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="VideoObject-description">description: {this.props.description}</p></div>);
            }
        }

        let expires;
        if (this.props.expires) {
            if (this.props.expires instanceof Array) {
                expires = (
                   <div className='expires__container'>
                       <div className='expires__header' data-advice='HTML for the *head* of the section'>expiress</div>
                       {this.props.expires.map((item, index) => {
                            return (<div className='expires' data-advice='Put your HTML here. expires is a Date.'><time className="VideoObject-expires">expires: {this.props.expires}</time></div>);
                       })}
                       <div className='expires__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                expires = (<div className='expires' data-advice='Put your HTML here. expires is a Date.'><time className="VideoObject-expires">expires: {this.props.expires}</time></div>);
            }
        }

        let releasedEvent;
        if (this.props.releasedEvent) {
            if (this.props.releasedEvent instanceof Array) {
                releasedEvent = (
                   <div className='releasedEvent__container'>
                       <div className='releasedEvent__header' data-advice='HTML for the *head* of the section'>releasedEvents</div>
                       {this.props.releasedEvent.map((item, index) => {
                            return (<PublicationEvent  {...this.props.releasedEvent} />);
                       })}
                       <div className='releasedEvent__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                releasedEvent = (<PublicationEvent  {...this.props.releasedEvent} />);
            }
        }

        let director;
        if (this.props.director) {
            if (this.props.director instanceof Array) {
                director = (
                   <div className='director__container'>
                       <div className='director__header' data-advice='HTML for the *head* of the section'>directors</div>
                       {this.props.director.map((item, index) => {
                            return (<Person  {...this.props.director} />);
                       })}
                       <div className='director__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                director = (<Person  {...this.props.director} />);
            }
        }

        let uploadDate;
        if (this.props.uploadDate) {
            if (this.props.uploadDate instanceof Array) {
                uploadDate = (
                   <div className='uploadDate__container'>
                       <div className='uploadDate__header' data-advice='HTML for the *head* of the section'>uploadDates</div>
                       {this.props.uploadDate.map((item, index) => {
                            return (<div className='uploadDate' data-advice='Put your HTML here. uploadDate is a Date.'><time className="VideoObject-uploadDate">uploadDate: {this.props.uploadDate}</time></div>);
                       })}
                       <div className='uploadDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                uploadDate = (<div className='uploadDate' data-advice='Put your HTML here. uploadDate is a Date.'><time className="VideoObject-uploadDate">uploadDate: {this.props.uploadDate}</time></div>);
            }
        }

        let schemaVersion;
        if (this.props.schemaVersion) {
            if (this.props.schemaVersion instanceof Array) {
                schemaVersion = (
                   <div className='schemaVersion__container'>
                       <div className='schemaVersion__header' data-advice='HTML for the *head* of the section'>schemaVersions</div>
                       {this.props.schemaVersion.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a Text.'><p className="VideoObject-schemaVersion">schemaVersion: {this.props.schemaVersion}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a URL.'><a className="VideoObject-schemaVersion" href={this.props.schemaVersion} target="_blank">schemaVersion</a></div>);
                           }
                       })}
                       <div className='schemaVersion__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   schemaVersion = (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a Text.'><p className="VideoObject-schemaVersion">schemaVersion: {this.props.schemaVersion}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   schemaVersion = (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a URL.'><a className="VideoObject-schemaVersion" href={this.props.schemaVersion} target="_blank">schemaVersion</a></div>);
               }
            }
        }

        let transcript;
        if (this.props.transcript) {
            if (this.props.transcript instanceof Array) {
                transcript = (
                   <div className='transcript__container'>
                       <div className='transcript__header' data-advice='HTML for the *head* of the section'>transcripts</div>
                       {this.props.transcript.map((item, index) => {
                            return (<div className='transcript' data-advice='Put your HTML here. transcript is a Text.'><p className="VideoObject-transcript">transcript: {this.props.transcript}</p></div>);
                       })}
                       <div className='transcript__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                transcript = (<div className='transcript' data-advice='Put your HTML here. transcript is a Text.'><p className="VideoObject-transcript">transcript: {this.props.transcript}</p></div>);
            }
        }

        let contentLocation;
        if (this.props.contentLocation) {
            if (this.props.contentLocation instanceof Array) {
                contentLocation = (
                   <div className='contentLocation__container'>
                       <div className='contentLocation__header' data-advice='HTML for the *head* of the section'>contentLocations</div>
                       {this.props.contentLocation.map((item, index) => {
                            return (<Place  {...this.props.contentLocation} />);
                       })}
                       <div className='contentLocation__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                contentLocation = (<Place  {...this.props.contentLocation} />);
            }
        }

        let timeRequired;
        if (this.props.timeRequired) {
            if (this.props.timeRequired instanceof Array) {
                timeRequired = (
                   <div className='timeRequired__container'>
                       <div className='timeRequired__header' data-advice='HTML for the *head* of the section'>timeRequireds</div>
                       {this.props.timeRequired.map((item, index) => {
                            return (<Duration  {...this.props.timeRequired} />);
                       })}
                       <div className='timeRequired__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                timeRequired = (<Duration  {...this.props.timeRequired} />);
            }
        }

        let playerType;
        if (this.props.playerType) {
            if (this.props.playerType instanceof Array) {
                playerType = (
                   <div className='playerType__container'>
                       <div className='playerType__header' data-advice='HTML for the *head* of the section'>playerTypes</div>
                       {this.props.playerType.map((item, index) => {
                            return (<div className='playerType' data-advice='Put your HTML here. playerType is a Text.'><p className="VideoObject-playerType">playerType: {this.props.playerType}</p></div>);
                       })}
                       <div className='playerType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                playerType = (<div className='playerType' data-advice='Put your HTML here. playerType is a Text.'><p className="VideoObject-playerType">playerType: {this.props.playerType}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="VideoObject-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="VideoObject-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let position;
        if (this.props.position) {
            if (this.props.position instanceof Array) {
                position = (
                   <div className='position__container'>
                       <div className='position__header' data-advice='HTML for the *head* of the section'>positions</div>
                       {this.props.position.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Text.'><p className="VideoObject-position">position: {this.props.position}</p></div>);
                           }
                           else if (this.props['@type'] === 'Integer') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Integer.'><p className="VideoObject-position">position: {this.props.position}</p></div>);
                           }
                       })}
                       <div className='position__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   position = (<div className='position' data-advice='Put your HTML here. position is a Text.'><p className="VideoObject-position">position: {this.props.position}</p></div>);
               }
               else if (this.props['@type'] === 'Integer') {
                   position = (<div className='position' data-advice='Put your HTML here. position is a Integer.'><p className="VideoObject-position">position: {this.props.position}</p></div>);
               }
            }
        }

        let audio;
        if (this.props.audio) {
            if (this.props.audio instanceof Array) {
                audio = (
                   <div className='audio__container'>
                       <div className='audio__header' data-advice='HTML for the *head* of the section'>audios</div>
                       {this.props.audio.map((item, index) => {
                            return (<AudioObject  {...this.props.audio} />);
                       })}
                       <div className='audio__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                audio = (<AudioObject  {...this.props.audio} />);
            }
        }

        return (
            <div className='VideoObject'>
                {educationalUse}
                {producer}
                {text}
                {datePublished}
                {alternativeHeadline}
                {accountablePerson}
                {keywords}
                {headline}
                {character}
                {contentRating}
                {associatedArticle}
                {offers}
                {publishingPrinciples}
                {embedUrl}
                {dateCreated}
                {potentialAction}
                {name}
                {associatedMedia}
                {audience}
                {accessibilityControl}
                {copyrightYear}
                {videoQuality}
                {encodesCreativeWork}
                {creator}
                {musicBy}
                {commentCount}
                {video}
                {typicalAgeRange}
                {duration}
                {fileFormat}
                {discussionUrl}
                {productionCompany}
                {review}
                {isFamilyFriendly}
                {version}
                {locationCreated}
                {provider}
                {isPartOf}
                {accessibilityHazard}
                {thumbnail}
                {contentSize}
                {contentUrl}
                {educationalAlignment}
                {genre}
                {bitrate}
                {publisher}
                {about}
                {translator}
                {license}
                {workExample}
                {encodingFormat}
                {caption}
                {mentions}
                {comment}
                {isBasedOnUrl}
                {encoding}
                {sameAs}
                {image}
                {height}
                {aggregateRating}
                {contributor}
                {thumbnailUrl}
                {mainEntity}
                {alternateName}
                {accessibilityFeature}
                {interactivityType}
                {publication}
                {width}
                {requiresSubscription}
                {editor}
                {mainEntityOfPage}
                {recordedAt}
                {hasPart}
                {award}
                {exampleOfWork}
                {copyrightHolder}
                {accessibilityAPI}
                {learningResourceType}
                {sourceOrganization}
                {videoFrameSize}
                {regionsAllowed}
                {inLanguage}
                {citation}
                {additionalType}
                {author}
                {actor}
                {dateModified}
                {interactionStatistic}
                {description}
                {expires}
                {releasedEvent}
                {director}
                {uploadDate}
                {schemaVersion}
                {transcript}
                {contentLocation}
                {timeRequired}
                {playerType}
                {url}
                {position}
                {audio}
            </div>
        );
    }
};

VideoObject.defaultProps = {
};

VideoObject.propTypes = {
   educationalUse: React.PropTypes.object,
   producer: React.PropTypes.object,
   text: React.PropTypes.object,
   datePublished: React.PropTypes.object,
   alternativeHeadline: React.PropTypes.object,
   accountablePerson: React.PropTypes.object,
   keywords: React.PropTypes.object,
   headline: React.PropTypes.object,
   character: React.PropTypes.object,
   contentRating: React.PropTypes.object,
   associatedArticle: React.PropTypes.object,
   offers: React.PropTypes.object,
   publishingPrinciples: React.PropTypes.object,
   embedUrl: React.PropTypes.object,
   dateCreated: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   name: React.PropTypes.object,
   associatedMedia: React.PropTypes.object,
   audience: React.PropTypes.object,
   accessibilityControl: React.PropTypes.object,
   copyrightYear: React.PropTypes.object,
   videoQuality: React.PropTypes.object,
   encodesCreativeWork: React.PropTypes.object,
   creator: React.PropTypes.object,
   musicBy: React.PropTypes.object,
   commentCount: React.PropTypes.object,
   video: React.PropTypes.object,
   typicalAgeRange: React.PropTypes.object,
   duration: React.PropTypes.object,
   fileFormat: React.PropTypes.object,
   discussionUrl: React.PropTypes.object,
   productionCompany: React.PropTypes.object,
   review: React.PropTypes.object,
   isFamilyFriendly: React.PropTypes.object,
   version: React.PropTypes.object,
   locationCreated: React.PropTypes.object,
   provider: React.PropTypes.object,
   isPartOf: React.PropTypes.object,
   accessibilityHazard: React.PropTypes.object,
   thumbnail: React.PropTypes.object,
   contentSize: React.PropTypes.object,
   contentUrl: React.PropTypes.object,
   educationalAlignment: React.PropTypes.object,
   genre: React.PropTypes.object,
   bitrate: React.PropTypes.object,
   publisher: React.PropTypes.object,
   about: React.PropTypes.object,
   translator: React.PropTypes.object,
   license: React.PropTypes.object,
   workExample: React.PropTypes.object,
   encodingFormat: React.PropTypes.object,
   caption: React.PropTypes.object,
   mentions: React.PropTypes.object,
   comment: React.PropTypes.object,
   isBasedOnUrl: React.PropTypes.object,
   encoding: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   height: React.PropTypes.object,
   aggregateRating: React.PropTypes.object,
   contributor: React.PropTypes.object,
   thumbnailUrl: React.PropTypes.object,
   mainEntity: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   accessibilityFeature: React.PropTypes.object,
   interactivityType: React.PropTypes.object,
   publication: React.PropTypes.object,
   width: React.PropTypes.object,
   requiresSubscription: React.PropTypes.object,
   editor: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   recordedAt: React.PropTypes.object,
   hasPart: React.PropTypes.object,
   award: React.PropTypes.object,
   exampleOfWork: React.PropTypes.object,
   copyrightHolder: React.PropTypes.object,
   accessibilityAPI: React.PropTypes.object,
   learningResourceType: React.PropTypes.object,
   sourceOrganization: React.PropTypes.object,
   videoFrameSize: React.PropTypes.object,
   regionsAllowed: React.PropTypes.object,
   inLanguage: React.PropTypes.object,
   citation: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   author: React.PropTypes.object,
   actor: React.PropTypes.object,
   dateModified: React.PropTypes.object,
   interactionStatistic: React.PropTypes.object,
   description: React.PropTypes.object,
   expires: React.PropTypes.object,
   releasedEvent: React.PropTypes.object,
   director: React.PropTypes.object,
   uploadDate: React.PropTypes.object,
   schemaVersion: React.PropTypes.object,
   transcript: React.PropTypes.object,
   contentLocation: React.PropTypes.object,
   timeRequired: React.PropTypes.object,
   playerType: React.PropTypes.object,
   url: React.PropTypes.object,
   position: React.PropTypes.object,
   audio: React.PropTypes.object,
};

