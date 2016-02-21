/* SoftwareApplication - A software application.. Generated automatically by the reactGenerator. */
import AlignmentObject from './alignmentobject.js';
import VideoObject from './videoobject.js';
import MediaObject from './mediaobject.js';
import DataFeed from './datafeed.js';
import Offer from './offer.js';
import ImageObject from './imageobject.js';
import AggregateRating from './aggregaterating.js';
import CreativeWork from './creativework.js';
import Review from './review.js';
import AudioObject from './audioobject.js';
import Language from './language.js';
import Thing from './thing.js';
import PublicationEvent from './publicationevent.js';
import Place from './place.js';
import InteractionCounter from './interactioncounter.js';
import Action from './action.js';
import Organization from './organization.js';
import Comment from './comment.js';
import Person from './person.js';
import Audience from './audience.js';
import Duration from './duration.js';
import Event from './event.js';


import React, {
  Component
} from 'react';

export default class SoftwareApplication extends Component {
    render() {
        let comment;
        if (this.props.comment) {
            if (this.props.comment instanceof Array) {
                comment = (
                   <div className='comment-container'>
                       <div className='comment-header' data-advice='HTML for the *head* of the section'>comments</div>
                       {this.props.comment.map((item, index) => {
                            return (<Comment key={index} {...this.props.comment} />);
                       })};
                       <div className='comment-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                comment = (<Comment key={index} {...this.props.comment} />);
            }
        }

        let inLanguage;
        if (this.props.inLanguage) {
            if (this.props.inLanguage instanceof Array) {
                inLanguage = (
                   <div className='inLanguage-container'>
                       <div className='inLanguage-header' data-advice='HTML for the *head* of the section'>inLanguages</div>
                       {this.props.inLanguage.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text.'><p className="SoftwareApplication-inLanguage">inLanguage: {this.props.inLanguage}</p></div>);
                           }
                           else if (this.props['@type'] === 'Language') {
                               return (<Language key={index} {...this.props.inLanguage} />);
                           }
                       })};
                       <div className='inLanguage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   inLanguage = (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text.'><p className="SoftwareApplication-inLanguage">inLanguage: {this.props.inLanguage}</p></div>);
               }
               else if (this.props['@type'] === 'Language') {
                   inLanguage = (<Language key={index} {...this.props.inLanguage} />);
               }
            }
        }

        let producer;
        if (this.props.producer) {
            if (this.props.producer instanceof Array) {
                producer = (
                   <div className='producer-container'>
                       <div className='producer-header' data-advice='HTML for the *head* of the section'>producers</div>
                       {this.props.producer.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.producer} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.producer} />);
                           }
                       })};
                       <div className='producer-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let creator;
        if (this.props.creator) {
            if (this.props.creator instanceof Array) {
                creator = (
                   <div className='creator-container'>
                       <div className='creator-header' data-advice='HTML for the *head* of the section'>creators</div>
                       {this.props.creator.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.creator} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.creator} />);
                           }
                       })};
                       <div className='creator-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="SoftwareApplication-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="SoftwareApplication-image" src={this.props.image} /></div>);
               }
            }
        }

        let citation;
        if (this.props.citation) {
            if (this.props.citation instanceof Array) {
                citation = (
                   <div className='citation-container'>
                       <div className='citation-header' data-advice='HTML for the *head* of the section'>citations</div>
                       {this.props.citation.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='citation' data-advice='Put your HTML here. citation is a Text.'><p className="SoftwareApplication-citation">citation: {this.props.citation}</p></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.citation} />);
                           }
                       })};
                       <div className='citation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   citation = (<div className='citation' data-advice='Put your HTML here. citation is a Text.'><p className="SoftwareApplication-citation">citation: {this.props.citation}</p></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   citation = (<CreativeWork key={index} {...this.props.citation} />);
               }
            }
        }

        let memoryRequirements;
        if (this.props.memoryRequirements) {
            if (this.props.memoryRequirements instanceof Array) {
                memoryRequirements = (
                   <div className='memoryRequirements-container'>
                       <div className='memoryRequirements-header' data-advice='HTML for the *head* of the section'>memoryRequirementss</div>
                       {this.props.memoryRequirements.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='memoryRequirements' data-advice='Put your HTML here. memoryRequirements is a Text.'><p className="SoftwareApplication-memoryRequirements">memoryRequirements: {this.props.memoryRequirements}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='memoryRequirements' data-advice='Put your HTML here. memoryRequirements is a URL.'><a className="SoftwareApplication-memoryRequirements" href={this.props.memoryRequirements} target="_blank">memoryRequirements</a></div>);
                           }
                       })};
                       <div className='memoryRequirements-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   memoryRequirements = (<div className='memoryRequirements' data-advice='Put your HTML here. memoryRequirements is a Text.'><p className="SoftwareApplication-memoryRequirements">memoryRequirements: {this.props.memoryRequirements}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   memoryRequirements = (<div className='memoryRequirements' data-advice='Put your HTML here. memoryRequirements is a URL.'><a className="SoftwareApplication-memoryRequirements" href={this.props.memoryRequirements} target="_blank">memoryRequirements</a></div>);
               }
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating-container'>
                       <div className='aggregateRating-header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                            return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating key={index} {...this.props.aggregateRating} />);
            }
        }

        let accountablePerson;
        if (this.props.accountablePerson) {
            if (this.props.accountablePerson instanceof Array) {
                accountablePerson = (
                   <div className='accountablePerson-container'>
                       <div className='accountablePerson-header' data-advice='HTML for the *head* of the section'>accountablePersons</div>
                       {this.props.accountablePerson.map((item, index) => {
                            return (<Person key={index} {...this.props.accountablePerson} />);
                       })};
                       <div className='accountablePerson-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                accountablePerson = (<Person key={index} {...this.props.accountablePerson} />);
            }
        }

        let video;
        if (this.props.video) {
            if (this.props.video instanceof Array) {
                video = (
                   <div className='video-container'>
                       <div className='video-header' data-advice='HTML for the *head* of the section'>videos</div>
                       {this.props.video.map((item, index) => {
                            return (<VideoObject key={index} {...this.props.video} />);
                       })};
                       <div className='video-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                video = (<VideoObject key={index} {...this.props.video} />);
            }
        }

        let featureList;
        if (this.props.featureList) {
            if (this.props.featureList instanceof Array) {
                featureList = (
                   <div className='featureList-container'>
                       <div className='featureList-header' data-advice='HTML for the *head* of the section'>featureLists</div>
                       {this.props.featureList.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='featureList' data-advice='Put your HTML here. featureList is a Text.'><p className="SoftwareApplication-featureList">featureList: {this.props.featureList}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='featureList' data-advice='Put your HTML here. featureList is a URL.'><a className="SoftwareApplication-featureList" href={this.props.featureList} target="_blank">featureList</a></div>);
                           }
                       })};
                       <div className='featureList-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   featureList = (<div className='featureList' data-advice='Put your HTML here. featureList is a Text.'><p className="SoftwareApplication-featureList">featureList: {this.props.featureList}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   featureList = (<div className='featureList' data-advice='Put your HTML here. featureList is a URL.'><a className="SoftwareApplication-featureList" href={this.props.featureList} target="_blank">featureList</a></div>);
               }
            }
        }

        let contributor;
        if (this.props.contributor) {
            if (this.props.contributor instanceof Array) {
                contributor = (
                   <div className='contributor-container'>
                       <div className='contributor-header' data-advice='HTML for the *head* of the section'>contributors</div>
                       {this.props.contributor.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.contributor} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.contributor} />);
                           }
                       })};
                       <div className='contributor-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let applicationSubCategory;
        if (this.props.applicationSubCategory) {
            if (this.props.applicationSubCategory instanceof Array) {
                applicationSubCategory = (
                   <div className='applicationSubCategory-container'>
                       <div className='applicationSubCategory-header' data-advice='HTML for the *head* of the section'>applicationSubCategorys</div>
                       {this.props.applicationSubCategory.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='applicationSubCategory' data-advice='Put your HTML here. applicationSubCategory is a Text.'><p className="SoftwareApplication-applicationSubCategory">applicationSubCategory: {this.props.applicationSubCategory}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='applicationSubCategory' data-advice='Put your HTML here. applicationSubCategory is a URL.'><a className="SoftwareApplication-applicationSubCategory" href={this.props.applicationSubCategory} target="_blank">applicationSubCategory</a></div>);
                           }
                       })};
                       <div className='applicationSubCategory-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   applicationSubCategory = (<div className='applicationSubCategory' data-advice='Put your HTML here. applicationSubCategory is a Text.'><p className="SoftwareApplication-applicationSubCategory">applicationSubCategory: {this.props.applicationSubCategory}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   applicationSubCategory = (<div className='applicationSubCategory' data-advice='Put your HTML here. applicationSubCategory is a URL.'><a className="SoftwareApplication-applicationSubCategory" href={this.props.applicationSubCategory} target="_blank">applicationSubCategory</a></div>);
               }
            }
        }

        let mainEntity;
        if (this.props.mainEntity) {
            if (this.props.mainEntity instanceof Array) {
                mainEntity = (
                   <div className='mainEntity-container'>
                       <div className='mainEntity-header' data-advice='HTML for the *head* of the section'>mainEntitys</div>
                       {this.props.mainEntity.map((item, index) => {
                            return (<Thing key={index} {...this.props.mainEntity} />);
                       })};
                       <div className='mainEntity-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntity = (<Thing key={index} {...this.props.mainEntity} />);
            }
        }

        let softwareHelp;
        if (this.props.softwareHelp) {
            if (this.props.softwareHelp instanceof Array) {
                softwareHelp = (
                   <div className='softwareHelp-container'>
                       <div className='softwareHelp-header' data-advice='HTML for the *head* of the section'>softwareHelps</div>
                       {this.props.softwareHelp.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.softwareHelp} />);
                       })};
                       <div className='softwareHelp-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                softwareHelp = (<CreativeWork key={index} {...this.props.softwareHelp} />);
            }
        }

        let publication;
        if (this.props.publication) {
            if (this.props.publication instanceof Array) {
                publication = (
                   <div className='publication-container'>
                       <div className='publication-header' data-advice='HTML for the *head* of the section'>publications</div>
                       {this.props.publication.map((item, index) => {
                            return (<PublicationEvent key={index} {...this.props.publication} />);
                       })};
                       <div className='publication-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                publication = (<PublicationEvent key={index} {...this.props.publication} />);
            }
        }

        let author;
        if (this.props.author) {
            if (this.props.author instanceof Array) {
                author = (
                   <div className='author-container'>
                       <div className='author-header' data-advice='HTML for the *head* of the section'>authors</div>
                       {this.props.author.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.author} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.author} />);
                           }
                       })};
                       <div className='author-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review-container'>
                       <div className='review-header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                            return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review key={index} {...this.props.review} />);
            }
        }

        let encoding;
        if (this.props.encoding) {
            if (this.props.encoding instanceof Array) {
                encoding = (
                   <div className='encoding-container'>
                       <div className='encoding-header' data-advice='HTML for the *head* of the section'>encodings</div>
                       {this.props.encoding.map((item, index) => {
                            return (<MediaObject key={index} {...this.props.encoding} />);
                       })};
                       <div className='encoding-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                encoding = (<MediaObject key={index} {...this.props.encoding} />);
            }
        }

        let character;
        if (this.props.character) {
            if (this.props.character instanceof Array) {
                character = (
                   <div className='character-container'>
                       <div className='character-header' data-advice='HTML for the *head* of the section'>characters</div>
                       {this.props.character.map((item, index) => {
                            return (<Person key={index} {...this.props.character} />);
                       })};
                       <div className='character-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                character = (<Person key={index} {...this.props.character} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="SoftwareApplication-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="SoftwareApplication-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let applicationCategory;
        if (this.props.applicationCategory) {
            if (this.props.applicationCategory instanceof Array) {
                applicationCategory = (
                   <div className='applicationCategory-container'>
                       <div className='applicationCategory-header' data-advice='HTML for the *head* of the section'>applicationCategorys</div>
                       {this.props.applicationCategory.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='applicationCategory' data-advice='Put your HTML here. applicationCategory is a Text.'><p className="SoftwareApplication-applicationCategory">applicationCategory: {this.props.applicationCategory}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='applicationCategory' data-advice='Put your HTML here. applicationCategory is a URL.'><a className="SoftwareApplication-applicationCategory" href={this.props.applicationCategory} target="_blank">applicationCategory</a></div>);
                           }
                       })};
                       <div className='applicationCategory-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   applicationCategory = (<div className='applicationCategory' data-advice='Put your HTML here. applicationCategory is a Text.'><p className="SoftwareApplication-applicationCategory">applicationCategory: {this.props.applicationCategory}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   applicationCategory = (<div className='applicationCategory' data-advice='Put your HTML here. applicationCategory is a URL.'><a className="SoftwareApplication-applicationCategory" href={this.props.applicationCategory} target="_blank">applicationCategory</a></div>);
               }
            }
        }

        let exampleOfWork;
        if (this.props.exampleOfWork) {
            if (this.props.exampleOfWork instanceof Array) {
                exampleOfWork = (
                   <div className='exampleOfWork-container'>
                       <div className='exampleOfWork-header' data-advice='HTML for the *head* of the section'>exampleOfWorks</div>
                       {this.props.exampleOfWork.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.exampleOfWork} />);
                       })};
                       <div className='exampleOfWork-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                exampleOfWork = (<CreativeWork key={index} {...this.props.exampleOfWork} />);
            }
        }

        let locationCreated;
        if (this.props.locationCreated) {
            if (this.props.locationCreated instanceof Array) {
                locationCreated = (
                   <div className='locationCreated-container'>
                       <div className='locationCreated-header' data-advice='HTML for the *head* of the section'>locationCreateds</div>
                       {this.props.locationCreated.map((item, index) => {
                            return (<Place key={index} {...this.props.locationCreated} />);
                       })};
                       <div className='locationCreated-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                locationCreated = (<Place key={index} {...this.props.locationCreated} />);
            }
        }

        let editor;
        if (this.props.editor) {
            if (this.props.editor instanceof Array) {
                editor = (
                   <div className='editor-container'>
                       <div className='editor-header' data-advice='HTML for the *head* of the section'>editors</div>
                       {this.props.editor.map((item, index) => {
                            return (<Person key={index} {...this.props.editor} />);
                       })};
                       <div className='editor-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                editor = (<Person key={index} {...this.props.editor} />);
            }
        }

        let provider;
        if (this.props.provider) {
            if (this.props.provider instanceof Array) {
                provider = (
                   <div className='provider-container'>
                       <div className='provider-header' data-advice='HTML for the *head* of the section'>providers</div>
                       {this.props.provider.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.provider} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.provider} />);
                           }
                       })};
                       <div className='provider-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='isPartOf-container'>
                       <div className='isPartOf-header' data-advice='HTML for the *head* of the section'>isPartOfs</div>
                       {this.props.isPartOf.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.isPartOf} />);
                       })};
                       <div className='isPartOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isPartOf = (<CreativeWork key={index} {...this.props.isPartOf} />);
            }
        }

        let recordedAt;
        if (this.props.recordedAt) {
            if (this.props.recordedAt instanceof Array) {
                recordedAt = (
                   <div className='recordedAt-container'>
                       <div className='recordedAt-header' data-advice='HTML for the *head* of the section'>recordedAts</div>
                       {this.props.recordedAt.map((item, index) => {
                            return (<Event key={index} {...this.props.recordedAt} />);
                       })};
                       <div className='recordedAt-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                recordedAt = (<Event key={index} {...this.props.recordedAt} />);
            }
        }

        let dateModified;
        if (this.props.dateModified) {
            if (this.props.dateModified instanceof Array) {
                dateModified = (
                   <div className='dateModified-container'>
                       <div className='dateModified-header' data-advice='HTML for the *head* of the section'>dateModifieds</div>
                       {this.props.dateModified.map((item, index) => {
                           if (this.props['@type'] === 'Date') {
                               return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date.'><time className="SoftwareApplication-dateModified">dateModified: {this.props.dateModified}</time></div>);
                           }
                           else if (this.props['@type'] === 'DateTime') {
                               return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime.'><time className="SoftwareApplication-dateModified">dateModified: {this.props.dateModified}</time></div>);
                           }
                       })};
                       <div className='dateModified-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Date') {
                   dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date.'><time className="SoftwareApplication-dateModified">dateModified: {this.props.dateModified}</time></div>);
               }
               else if (this.props['@type'] === 'DateTime') {
                   dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a DateTime.'><time className="SoftwareApplication-dateModified">dateModified: {this.props.dateModified}</time></div>);
               }
            }
        }

        let softwareRequirements;
        if (this.props.softwareRequirements) {
            if (this.props.softwareRequirements instanceof Array) {
                softwareRequirements = (
                   <div className='softwareRequirements-container'>
                       <div className='softwareRequirements-header' data-advice='HTML for the *head* of the section'>softwareRequirementss</div>
                       {this.props.softwareRequirements.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='softwareRequirements' data-advice='Put your HTML here. softwareRequirements is a Text.'><p className="SoftwareApplication-softwareRequirements">softwareRequirements: {this.props.softwareRequirements}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='softwareRequirements' data-advice='Put your HTML here. softwareRequirements is a URL.'><a className="SoftwareApplication-softwareRequirements" href={this.props.softwareRequirements} target="_blank">softwareRequirements</a></div>);
                           }
                       })};
                       <div className='softwareRequirements-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   softwareRequirements = (<div className='softwareRequirements' data-advice='Put your HTML here. softwareRequirements is a Text.'><p className="SoftwareApplication-softwareRequirements">softwareRequirements: {this.props.softwareRequirements}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   softwareRequirements = (<div className='softwareRequirements' data-advice='Put your HTML here. softwareRequirements is a URL.'><a className="SoftwareApplication-softwareRequirements" href={this.props.softwareRequirements} target="_blank">softwareRequirements</a></div>);
               }
            }
        }

        let timeRequired;
        if (this.props.timeRequired) {
            if (this.props.timeRequired instanceof Array) {
                timeRequired = (
                   <div className='timeRequired-container'>
                       <div className='timeRequired-header' data-advice='HTML for the *head* of the section'>timeRequireds</div>
                       {this.props.timeRequired.map((item, index) => {
                            return (<Duration key={index} {...this.props.timeRequired} />);
                       })};
                       <div className='timeRequired-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                timeRequired = (<Duration key={index} {...this.props.timeRequired} />);
            }
        }

        let interactionStatistic;
        if (this.props.interactionStatistic) {
            if (this.props.interactionStatistic instanceof Array) {
                interactionStatistic = (
                   <div className='interactionStatistic-container'>
                       <div className='interactionStatistic-header' data-advice='HTML for the *head* of the section'>interactionStatistics</div>
                       {this.props.interactionStatistic.map((item, index) => {
                            return (<InteractionCounter key={index} {...this.props.interactionStatistic} />);
                       })};
                       <div className='interactionStatistic-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                interactionStatistic = (<InteractionCounter key={index} {...this.props.interactionStatistic} />);
            }
        }

        let screenshot;
        if (this.props.screenshot) {
            if (this.props.screenshot instanceof Array) {
                screenshot = (
                   <div className='screenshot-container'>
                       <div className='screenshot-header' data-advice='HTML for the *head* of the section'>screenshots</div>
                       {this.props.screenshot.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.screenshot} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='screenshot' data-advice='Put your HTML here. screenshot is a URL.'><a className="SoftwareApplication-screenshot" href={this.props.screenshot} target="_blank">screenshot</a></div>);
                           }
                       })};
                       <div className='screenshot-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   screenshot = (<ImageObject key={index} {...this.props.screenshot} />);
               }
               else if (this.props['@type'] === 'URL') {
                   screenshot = (<div className='screenshot' data-advice='Put your HTML here. screenshot is a URL.'><a className="SoftwareApplication-screenshot" href={this.props.screenshot} target="_blank">screenshot</a></div>);
               }
            }
        }

        let educationalAlignment;
        if (this.props.educationalAlignment) {
            if (this.props.educationalAlignment instanceof Array) {
                educationalAlignment = (
                   <div className='educationalAlignment-container'>
                       <div className='educationalAlignment-header' data-advice='HTML for the *head* of the section'>educationalAlignments</div>
                       {this.props.educationalAlignment.map((item, index) => {
                            return (<AlignmentObject key={index} {...this.props.educationalAlignment} />);
                       })};
                       <div className='educationalAlignment-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                educationalAlignment = (<AlignmentObject key={index} {...this.props.educationalAlignment} />);
            }
        }

        let releaseNotes;
        if (this.props.releaseNotes) {
            if (this.props.releaseNotes instanceof Array) {
                releaseNotes = (
                   <div className='releaseNotes-container'>
                       <div className='releaseNotes-header' data-advice='HTML for the *head* of the section'>releaseNotess</div>
                       {this.props.releaseNotes.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='releaseNotes' data-advice='Put your HTML here. releaseNotes is a Text.'><p className="SoftwareApplication-releaseNotes">releaseNotes: {this.props.releaseNotes}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='releaseNotes' data-advice='Put your HTML here. releaseNotes is a URL.'><a className="SoftwareApplication-releaseNotes" href={this.props.releaseNotes} target="_blank">releaseNotes</a></div>);
                           }
                       })};
                       <div className='releaseNotes-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   releaseNotes = (<div className='releaseNotes' data-advice='Put your HTML here. releaseNotes is a Text.'><p className="SoftwareApplication-releaseNotes">releaseNotes: {this.props.releaseNotes}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   releaseNotes = (<div className='releaseNotes' data-advice='Put your HTML here. releaseNotes is a URL.'><a className="SoftwareApplication-releaseNotes" href={this.props.releaseNotes} target="_blank">releaseNotes</a></div>);
               }
            }
        }

        let releasedEvent;
        if (this.props.releasedEvent) {
            if (this.props.releasedEvent instanceof Array) {
                releasedEvent = (
                   <div className='releasedEvent-container'>
                       <div className='releasedEvent-header' data-advice='HTML for the *head* of the section'>releasedEvents</div>
                       {this.props.releasedEvent.map((item, index) => {
                            return (<PublicationEvent key={index} {...this.props.releasedEvent} />);
                       })};
                       <div className='releasedEvent-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                releasedEvent = (<PublicationEvent key={index} {...this.props.releasedEvent} />);
            }
        }

        let dateCreated;
        if (this.props.dateCreated) {
            if (this.props.dateCreated instanceof Array) {
                dateCreated = (
                   <div className='dateCreated-container'>
                       <div className='dateCreated-header' data-advice='HTML for the *head* of the section'>dateCreateds</div>
                       {this.props.dateCreated.map((item, index) => {
                           if (this.props['@type'] === 'Date') {
                               return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date.'><time className="SoftwareApplication-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
                           }
                           else if (this.props['@type'] === 'DateTime') {
                               return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime.'><time className="SoftwareApplication-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
                           }
                       })};
                       <div className='dateCreated-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Date') {
                   dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date.'><time className="SoftwareApplication-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
               }
               else if (this.props['@type'] === 'DateTime') {
                   dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a DateTime.'><time className="SoftwareApplication-dateCreated">dateCreated: {this.props.dateCreated}</time></div>);
               }
            }
        }

        let translator;
        if (this.props.translator) {
            if (this.props.translator instanceof Array) {
                translator = (
                   <div className='translator-container'>
                       <div className='translator-header' data-advice='HTML for the *head* of the section'>translators</div>
                       {this.props.translator.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.translator} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.translator} />);
                           }
                       })};
                       <div className='translator-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let offers;
        if (this.props.offers) {
            if (this.props.offers instanceof Array) {
                offers = (
                   <div className='offers-container'>
                       <div className='offers-header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                            return (<Offer key={index} {...this.props.offers} />);
                       })};
                       <div className='offers-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                offers = (<Offer key={index} {...this.props.offers} />);
            }
        }

        let softwareAddOn;
        if (this.props.softwareAddOn) {
            if (this.props.softwareAddOn instanceof Array) {
                softwareAddOn = (
                   <div className='softwareAddOn-container'>
                       <div className='softwareAddOn-header' data-advice='HTML for the *head* of the section'>softwareAddOns</div>
                       {this.props.softwareAddOn.map((item, index) => {
                            return (<SoftwareApplication key={index} {...this.props.softwareAddOn} />);
                       })};
                       <div className='softwareAddOn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                softwareAddOn = (<SoftwareApplication key={index} {...this.props.softwareAddOn} />);
            }
        }

        let storageRequirements;
        if (this.props.storageRequirements) {
            if (this.props.storageRequirements instanceof Array) {
                storageRequirements = (
                   <div className='storageRequirements-container'>
                       <div className='storageRequirements-header' data-advice='HTML for the *head* of the section'>storageRequirementss</div>
                       {this.props.storageRequirements.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='storageRequirements' data-advice='Put your HTML here. storageRequirements is a Text.'><p className="SoftwareApplication-storageRequirements">storageRequirements: {this.props.storageRequirements}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='storageRequirements' data-advice='Put your HTML here. storageRequirements is a URL.'><a className="SoftwareApplication-storageRequirements" href={this.props.storageRequirements} target="_blank">storageRequirements</a></div>);
                           }
                       })};
                       <div className='storageRequirements-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   storageRequirements = (<div className='storageRequirements' data-advice='Put your HTML here. storageRequirements is a Text.'><p className="SoftwareApplication-storageRequirements">storageRequirements: {this.props.storageRequirements}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   storageRequirements = (<div className='storageRequirements' data-advice='Put your HTML here. storageRequirements is a URL.'><a className="SoftwareApplication-storageRequirements" href={this.props.storageRequirements} target="_blank">storageRequirements</a></div>);
               }
            }
        }

        let position;
        if (this.props.position) {
            if (this.props.position instanceof Array) {
                position = (
                   <div className='position-container'>
                       <div className='position-header' data-advice='HTML for the *head* of the section'>positions</div>
                       {this.props.position.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Text.'><p className="SoftwareApplication-position">position: {this.props.position}</p></div>);
                           }
                           else if (this.props['@type'] === 'Integer') {
                               return (<div className='position' data-advice='Put your HTML here. position is a Integer.'><p className="SoftwareApplication-position">position: {this.props.position}</p></div>);
                           }
                       })};
                       <div className='position-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   position = (<div className='position' data-advice='Put your HTML here. position is a Text.'><p className="SoftwareApplication-position">position: {this.props.position}</p></div>);
               }
               else if (this.props['@type'] === 'Integer') {
                   position = (<div className='position' data-advice='Put your HTML here. position is a Integer.'><p className="SoftwareApplication-position">position: {this.props.position}</p></div>);
               }
            }
        }

        let genre;
        if (this.props.genre) {
            if (this.props.genre instanceof Array) {
                genre = (
                   <div className='genre-container'>
                       <div className='genre-header' data-advice='HTML for the *head* of the section'>genres</div>
                       {this.props.genre.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='genre' data-advice='Put your HTML here. genre is a Text.'><p className="SoftwareApplication-genre">genre: {this.props.genre}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='genre' data-advice='Put your HTML here. genre is a URL.'><a className="SoftwareApplication-genre" href={this.props.genre} target="_blank">genre</a></div>);
                           }
                       })};
                       <div className='genre-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   genre = (<div className='genre' data-advice='Put your HTML here. genre is a Text.'><p className="SoftwareApplication-genre">genre: {this.props.genre}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   genre = (<div className='genre' data-advice='Put your HTML here. genre is a URL.'><a className="SoftwareApplication-genre" href={this.props.genre} target="_blank">genre</a></div>);
               }
            }
        }

        let schemaVersion;
        if (this.props.schemaVersion) {
            if (this.props.schemaVersion instanceof Array) {
                schemaVersion = (
                   <div className='schemaVersion-container'>
                       <div className='schemaVersion-header' data-advice='HTML for the *head* of the section'>schemaVersions</div>
                       {this.props.schemaVersion.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a Text.'><p className="SoftwareApplication-schemaVersion">schemaVersion: {this.props.schemaVersion}</p></div>);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a URL.'><a className="SoftwareApplication-schemaVersion" href={this.props.schemaVersion} target="_blank">schemaVersion</a></div>);
                           }
                       })};
                       <div className='schemaVersion-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   schemaVersion = (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a Text.'><p className="SoftwareApplication-schemaVersion">schemaVersion: {this.props.schemaVersion}</p></div>);
               }
               else if (this.props['@type'] === 'URL') {
                   schemaVersion = (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a URL.'><a className="SoftwareApplication-schemaVersion" href={this.props.schemaVersion} target="_blank">schemaVersion</a></div>);
               }
            }
        }

        let contentLocation;
        if (this.props.contentLocation) {
            if (this.props.contentLocation instanceof Array) {
                contentLocation = (
                   <div className='contentLocation-container'>
                       <div className='contentLocation-header' data-advice='HTML for the *head* of the section'>contentLocations</div>
                       {this.props.contentLocation.map((item, index) => {
                            return (<Place key={index} {...this.props.contentLocation} />);
                       })};
                       <div className='contentLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contentLocation = (<Place key={index} {...this.props.contentLocation} />);
            }
        }

        let hasPart;
        if (this.props.hasPart) {
            if (this.props.hasPart instanceof Array) {
                hasPart = (
                   <div className='hasPart-container'>
                       <div className='hasPart-header' data-advice='HTML for the *head* of the section'>hasParts</div>
                       {this.props.hasPart.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.hasPart} />);
                       })};
                       <div className='hasPart-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hasPart = (<CreativeWork key={index} {...this.props.hasPart} />);
            }
        }

        let publisher;
        if (this.props.publisher) {
            if (this.props.publisher instanceof Array) {
                publisher = (
                   <div className='publisher-container'>
                       <div className='publisher-header' data-advice='HTML for the *head* of the section'>publishers</div>
                       {this.props.publisher.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.publisher} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.publisher} />);
                           }
                       })};
                       <div className='publisher-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='about-container'>
                       <div className='about-header' data-advice='HTML for the *head* of the section'>abouts</div>
                       {this.props.about.map((item, index) => {
                            return (<Thing key={index} {...this.props.about} />);
                       })};
                       <div className='about-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                about = (<Thing key={index} {...this.props.about} />);
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

        let license;
        if (this.props.license) {
            if (this.props.license instanceof Array) {
                license = (
                   <div className='license-container'>
                       <div className='license-header' data-advice='HTML for the *head* of the section'>licenses</div>
                       {this.props.license.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='license' data-advice='Put your HTML here. license is a URL.'><a className="SoftwareApplication-license" href={this.props.license} target="_blank">license</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.license} />);
                           }
                       })};
                       <div className='license-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   license = (<div className='license' data-advice='Put your HTML here. license is a URL.'><a className="SoftwareApplication-license" href={this.props.license} target="_blank">license</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   license = (<CreativeWork key={index} {...this.props.license} />);
               }
            }
        }

        let associatedMedia;
        if (this.props.associatedMedia) {
            if (this.props.associatedMedia instanceof Array) {
                associatedMedia = (
                   <div className='associatedMedia-container'>
                       <div className='associatedMedia-header' data-advice='HTML for the *head* of the section'>associatedMedias</div>
                       {this.props.associatedMedia.map((item, index) => {
                            return (<MediaObject key={index} {...this.props.associatedMedia} />);
                       })};
                       <div className='associatedMedia-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                associatedMedia = (<MediaObject key={index} {...this.props.associatedMedia} />);
            }
        }

        let workExample;
        if (this.props.workExample) {
            if (this.props.workExample instanceof Array) {
                workExample = (
                   <div className='workExample-container'>
                       <div className='workExample-header' data-advice='HTML for the *head* of the section'>workExamples</div>
                       {this.props.workExample.map((item, index) => {
                            return (<CreativeWork key={index} {...this.props.workExample} />);
                       })};
                       <div className='workExample-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                workExample = (<CreativeWork key={index} {...this.props.workExample} />);
            }
        }

        let copyrightHolder;
        if (this.props.copyrightHolder) {
            if (this.props.copyrightHolder instanceof Array) {
                copyrightHolder = (
                   <div className='copyrightHolder-container'>
                       <div className='copyrightHolder-header' data-advice='HTML for the *head* of the section'>copyrightHolders</div>
                       {this.props.copyrightHolder.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.copyrightHolder} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.copyrightHolder} />);
                           }
                       })};
                       <div className='copyrightHolder-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let audience;
        if (this.props.audience) {
            if (this.props.audience instanceof Array) {
                audience = (
                   <div className='audience-container'>
                       <div className='audience-header' data-advice='HTML for the *head* of the section'>audiences</div>
                       {this.props.audience.map((item, index) => {
                            return (<Audience key={index} {...this.props.audience} />);
                       })};
                       <div className='audience-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                audience = (<Audience key={index} {...this.props.audience} />);
            }
        }

        let supportingData;
        if (this.props.supportingData) {
            if (this.props.supportingData instanceof Array) {
                supportingData = (
                   <div className='supportingData-container'>
                       <div className='supportingData-header' data-advice='HTML for the *head* of the section'>supportingDatas</div>
                       {this.props.supportingData.map((item, index) => {
                            return (<DataFeed key={index} {...this.props.supportingData} />);
                       })};
                       <div className='supportingData-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                supportingData = (<DataFeed key={index} {...this.props.supportingData} />);
            }
        }

        let mentions;
        if (this.props.mentions) {
            if (this.props.mentions instanceof Array) {
                mentions = (
                   <div className='mentions-container'>
                       <div className='mentions-header' data-advice='HTML for the *head* of the section'>mentionss</div>
                       {this.props.mentions.map((item, index) => {
                            return (<Thing key={index} {...this.props.mentions} />);
                       })};
                       <div className='mentions-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mentions = (<Thing key={index} {...this.props.mentions} />);
            }
        }

        let audio;
        if (this.props.audio) {
            if (this.props.audio instanceof Array) {
                audio = (
                   <div className='audio-container'>
                       <div className='audio-header' data-advice='HTML for the *head* of the section'>audios</div>
                       {this.props.audio.map((item, index) => {
                            return (<AudioObject key={index} {...this.props.audio} />);
                       })};
                       <div className='audio-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                audio = (<AudioObject key={index} {...this.props.audio} />);
            }
        }

        let sourceOrganization;
        if (this.props.sourceOrganization) {
            if (this.props.sourceOrganization instanceof Array) {
                sourceOrganization = (
                   <div className='sourceOrganization-container'>
                       <div className='sourceOrganization-header' data-advice='HTML for the *head* of the section'>sourceOrganizations</div>
                       {this.props.sourceOrganization.map((item, index) => {
                            return (<Organization key={index} {...this.props.sourceOrganization} />);
                       })};
                       <div className='sourceOrganization-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sourceOrganization = (<Organization key={index} {...this.props.sourceOrganization} />);
            }
        }

        return (
            <div className='SoftwareApplication'>
                {comment}
                {inLanguage}
                {producer}
                {creator}
                {image}
                {citation}
                {memoryRequirements}
                {aggregateRating}
                {accountablePerson}
                {video}
                {featureList}
                {contributor}
                {applicationSubCategory}
                {mainEntity}
                {softwareHelp}
                {publication}
                {author}
                {review}
                {encoding}
                {character}
                {mainEntityOfPage}
                {applicationCategory}
                {exampleOfWork}
                {locationCreated}
                {editor}
                {provider}
                {isPartOf}
                {recordedAt}
                {dateModified}
                {softwareRequirements}
                {timeRequired}
                {interactionStatistic}
                {screenshot}
                {educationalAlignment}
                {releaseNotes}
                {releasedEvent}
                {dateCreated}
                {translator}
                {offers}
                {softwareAddOn}
                {storageRequirements}
                {position}
                {genre}
                {schemaVersion}
                {contentLocation}
                {hasPart}
                {publisher}
                {about}
                {potentialAction}
                {license}
                {associatedMedia}
                {workExample}
                {copyrightHolder}
                {audience}
                {supportingData}
                {mentions}
                {audio}
                {sourceOrganization}
            </div>
        );
    }
};

SoftwareApplication.defaultProps = {
};

SoftwareApplication.propTypes = {
   comment: React.propTypes.object,
   inLanguage: React.propTypes.object,
   producer: React.propTypes.object,
   creator: React.propTypes.object,
   image: React.propTypes.object,
   citation: React.propTypes.object,
   memoryRequirements: React.propTypes.object,
   aggregateRating: React.propTypes.object,
   accountablePerson: React.propTypes.object,
   video: React.propTypes.object,
   featureList: React.propTypes.object,
   contributor: React.propTypes.object,
   applicationSubCategory: React.propTypes.object,
   mainEntity: React.propTypes.object,
   softwareHelp: React.propTypes.object,
   publication: React.propTypes.object,
   author: React.propTypes.object,
   review: React.propTypes.object,
   encoding: React.propTypes.object,
   character: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   applicationCategory: React.propTypes.object,
   exampleOfWork: React.propTypes.object,
   locationCreated: React.propTypes.object,
   editor: React.propTypes.object,
   provider: React.propTypes.object,
   isPartOf: React.propTypes.object,
   recordedAt: React.propTypes.object,
   dateModified: React.propTypes.object,
   softwareRequirements: React.propTypes.object,
   timeRequired: React.propTypes.object,
   interactionStatistic: React.propTypes.object,
   screenshot: React.propTypes.object,
   educationalAlignment: React.propTypes.object,
   releaseNotes: React.propTypes.object,
   releasedEvent: React.propTypes.object,
   dateCreated: React.propTypes.object,
   translator: React.propTypes.object,
   offers: React.propTypes.object,
   softwareAddOn: React.propTypes.object,
   storageRequirements: React.propTypes.object,
   position: React.propTypes.object,
   genre: React.propTypes.object,
   schemaVersion: React.propTypes.object,
   contentLocation: React.propTypes.object,
   hasPart: React.propTypes.object,
   publisher: React.propTypes.object,
   about: React.propTypes.object,
   potentialAction: React.propTypes.object,
   license: React.propTypes.object,
   associatedMedia: React.propTypes.object,
   workExample: React.propTypes.object,
   copyrightHolder: React.propTypes.object,
   audience: React.propTypes.object,
   supportingData: React.propTypes.object,
   mentions: React.propTypes.object,
   audio: React.propTypes.object,
   sourceOrganization: React.propTypes.object,
};

