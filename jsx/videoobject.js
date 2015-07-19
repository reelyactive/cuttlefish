/* Thing > CreativeWork > MediaObject > VideoObject - A video file.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './quantitativevalue', './offer', './imageobject', './aggregaterating', './newsarticle', './integer', './creativework', './review', './audioobject', './distance', './language', './thing', './publicationevent', './place', './action', './organization', './comment', './person', './audience', './boolean', './musicgroup', './duration', './event'], function(React, AlignmentObject, VideoObject, MediaObject, QuantitativeValue, Offer, ImageObject, AggregateRating, NewsArticle, Integer, CreativeWork, Review, AudioObject, Distance, Language, Thing, PublicationEvent, Place, Action, Organization, Comment, Person, Audience, Boolean, MusicGroup, Duration, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var educationalUse;
      if( this.props.educationalUse ){
        if( this.props.educationalUse instanceof Array ){
          educationalUse = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.educationalUse ){
            educationalUse.push( ( <div data-advice='Put your HTML here. educationalUse is a Text.'></div> ) );
          }
        } else {
            educationalUse = ( <div data-advice='Put your HTML here. educationalUse is a Text.'></div> );
        }
      }
      var producer;
      if( this.props.producer ){
        if( this.props.producer instanceof Array ){
          producer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.producer ){
            producer.push( ( <div data-advice='Put your HTML here. producer is a Person or
Organization.'></div> ) );
          }
        } else {
            producer = ( <div data-advice='Put your HTML here. producer is a Person or
Organization.'></div> );
        }
      }
      var text;
      if( this.props.text ){
        if( this.props.text instanceof Array ){
          text = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.text ){
            text.push( ( <div data-advice='Put your HTML here. text is a Text.'></div> ) );
          }
        } else {
            text = ( <div data-advice='Put your HTML here. text is a Text.'></div> );
        }
      }
      var datePublished;
      if( this.props.datePublished ){
        if( this.props.datePublished instanceof Array ){
          datePublished = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.datePublished ){
            datePublished.push( ( <div data-advice='Put your HTML here. datePublished is a Date.'></div> ) );
          }
        } else {
            datePublished = ( <div data-advice='Put your HTML here. datePublished is a Date.'></div> );
        }
      }
      var alternativeHeadline;
      if( this.props.alternativeHeadline ){
        if( this.props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternativeHeadline ){
            alternativeHeadline.push( ( <div data-advice='Put your HTML here. alternativeHeadline is a Text.'></div> ) );
          }
        } else {
            alternativeHeadline = ( <div data-advice='Put your HTML here. alternativeHeadline is a Text.'></div> );
        }
      }
      var accountablePerson;
      if( this.props.accountablePerson ){
        if( this.props.accountablePerson instanceof Array ){
          accountablePerson = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.accountablePerson ){
            accountablePerson.push( ( <Person {...this.props.accountablePerson } /> ) );          }
        } else {
          accountablePerson = ( <Person props={ this.props.accountablePerson } /> );        }
      }
      var keywords;
      if( this.props.keywords ){
        if( this.props.keywords instanceof Array ){
          keywords = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.keywords ){
            keywords.push( ( <div data-advice='Put your HTML here. keywords is a Text.'></div> ) );
          }
        } else {
            keywords = ( <div data-advice='Put your HTML here. keywords is a Text.'></div> );
        }
      }
      var headline;
      if( this.props.headline ){
        if( this.props.headline instanceof Array ){
          headline = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.headline ){
            headline.push( ( <div data-advice='Put your HTML here. headline is a Text.'></div> ) );
          }
        } else {
            headline = ( <div data-advice='Put your HTML here. headline is a Text.'></div> );
        }
      }
      var character;
      if( this.props.character ){
        if( this.props.character instanceof Array ){
          character = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.character ){
            character.push( ( <Person {...this.props.character } /> ) );          }
        } else {
          character = ( <Person props={ this.props.character } /> );        }
      }
      var contentRating;
      if( this.props.contentRating ){
        if( this.props.contentRating instanceof Array ){
          contentRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contentRating ){
            contentRating.push( ( <div data-advice='Put your HTML here. contentRating is a Text.'></div> ) );
          }
        } else {
            contentRating = ( <div data-advice='Put your HTML here. contentRating is a Text.'></div> );
        }
      }
      var associatedArticle;
      if( this.props.associatedArticle ){
        if( this.props.associatedArticle instanceof Array ){
          associatedArticle = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.associatedArticle ){
            associatedArticle.push( ( <NewsArticle {...this.props.associatedArticle } /> ) );          }
        } else {
          associatedArticle = ( <NewsArticle props={ this.props.associatedArticle } /> );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.offers ){
            offers.push( ( <Offer {...this.props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ this.props.offers } /> );        }
      }
      var publishingPrinciples;
      if( this.props.publishingPrinciples ){
        if( this.props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.publishingPrinciples ){
            publishingPrinciples.push( ( <div data-advice='Put your HTML here. publishingPrinciples is a URL.'></div> ) );
          }
        } else {
            publishingPrinciples = ( <div data-advice='Put your HTML here. publishingPrinciples is a URL.'></div> );
        }
      }
      var embedUrl;
      if( this.props.embedUrl ){
        if( this.props.embedUrl instanceof Array ){
          embedUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.embedUrl ){
            embedUrl.push( ( <div data-advice='Put your HTML here. embedUrl is a URL.'></div> ) );
          }
        } else {
            embedUrl = ( <div data-advice='Put your HTML here. embedUrl is a URL.'></div> );
        }
      }
      var dateCreated;
      if( this.props.dateCreated ){
        if( this.props.dateCreated instanceof Array ){
          dateCreated = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.dateCreated ){
            dateCreated.push( ( <div data-advice='Put your HTML here. dateCreated is a Date.'></div> ) );
          }
        } else {
            dateCreated = ( <div data-advice='Put your HTML here. dateCreated is a Date.'></div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var associatedMedia;
      if( this.props.associatedMedia ){
        if( this.props.associatedMedia instanceof Array ){
          associatedMedia = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.associatedMedia ){
            associatedMedia.push( ( <MediaObject {...this.props.associatedMedia } /> ) );          }
        } else {
          associatedMedia = ( <MediaObject props={ this.props.associatedMedia } /> );        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.audience ){
            audience.push( ( <Audience {...this.props.audience } /> ) );          }
        } else {
          audience = ( <Audience props={ this.props.audience } /> );        }
      }
      var accessibilityControl;
      if( this.props.accessibilityControl ){
        if( this.props.accessibilityControl instanceof Array ){
          accessibilityControl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.accessibilityControl ){
            accessibilityControl.push( ( <div data-advice='Put your HTML here. accessibilityControl is a Text.'></div> ) );
          }
        } else {
            accessibilityControl = ( <div data-advice='Put your HTML here. accessibilityControl is a Text.'></div> );
        }
      }
      var copyrightYear;
      if( this.props.copyrightYear ){
        if( this.props.copyrightYear instanceof Array ){
          copyrightYear = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.copyrightYear ){
            copyrightYear.push( ( <div data-advice='Put your HTML here. copyrightYear is a Number.'></div> ) );
          }
        } else {
            copyrightYear = ( <div data-advice='Put your HTML here. copyrightYear is a Number.'></div> );
        }
      }
      var videoQuality;
      if( this.props.videoQuality ){
        if( this.props.videoQuality instanceof Array ){
          videoQuality = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.videoQuality ){
            videoQuality.push( ( <div data-advice='Put your HTML here. videoQuality is a Text.'></div> ) );
          }
        } else {
            videoQuality = ( <div data-advice='Put your HTML here. videoQuality is a Text.'></div> );
        }
      }
      var encodesCreativeWork;
      if( this.props.encodesCreativeWork ){
        if( this.props.encodesCreativeWork instanceof Array ){
          encodesCreativeWork = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.encodesCreativeWork ){
            encodesCreativeWork.push( ( <CreativeWork {...this.props.encodesCreativeWork } /> ) );          }
        } else {
          encodesCreativeWork = ( <CreativeWork props={ this.props.encodesCreativeWork } /> );        }
      }
      var creator;
      if( this.props.creator ){
        if( this.props.creator instanceof Array ){
          creator = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.creator ){
            creator.push( ( <div data-advice='Put your HTML here. creator is a Person or
Organization.'></div> ) );
          }
        } else {
            creator = ( <div data-advice='Put your HTML here. creator is a Person or
Organization.'></div> );
        }
      }
      var musicBy;
      if( this.props.musicBy ){
        if( this.props.musicBy instanceof Array ){
          musicBy = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.musicBy ){
            musicBy.push( ( <div data-advice='Put your HTML here. musicBy is a MusicGroup or
Person.'></div> ) );
          }
        } else {
            musicBy = ( <div data-advice='Put your HTML here. musicBy is a MusicGroup or
Person.'></div> );
        }
      }
      var commentCount;
      if( this.props.commentCount ){
        if( this.props.commentCount instanceof Array ){
          commentCount = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.commentCount ){
            commentCount.push( ( <Integer {...this.props.commentCount } /> ) );          }
        } else {
          commentCount = ( <Integer props={ this.props.commentCount } /> );        }
      }
      var video;
      if( this.props.video ){
        if( this.props.video instanceof Array ){
          video = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.video ){
            video.push( ( <VideoObject {...this.props.video } /> ) );          }
        } else {
          video = ( <VideoObject props={ this.props.video } /> );        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> ) );
          }
        } else {
            typicalAgeRange = ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> );
        }
      }
      var duration;
      if( this.props.duration ){
        if( this.props.duration instanceof Array ){
          duration = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.duration ){
            duration.push( ( <Duration {...this.props.duration } /> ) );          }
        } else {
          duration = ( <Duration props={ this.props.duration } /> );        }
      }
      var discussionUrl;
      if( this.props.discussionUrl ){
        if( this.props.discussionUrl instanceof Array ){
          discussionUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.discussionUrl ){
            discussionUrl.push( ( <div data-advice='Put your HTML here. discussionUrl is a URL.'></div> ) );
          }
        } else {
            discussionUrl = ( <div data-advice='Put your HTML here. discussionUrl is a URL.'></div> );
        }
      }
      var productionCompany;
      if( this.props.productionCompany ){
        if( this.props.productionCompany instanceof Array ){
          productionCompany = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.productionCompany ){
            productionCompany.push( ( <Organization {...this.props.productionCompany } /> ) );          }
        } else {
          productionCompany = ( <Organization props={ this.props.productionCompany } /> );        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.review ){
            review.push( ( <Review {...this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var isFamilyFriendly;
      if( this.props.isFamilyFriendly ){
        if( this.props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isFamilyFriendly ){
            isFamilyFriendly.push( ( <Boolean {...this.props.isFamilyFriendly } /> ) );          }
        } else {
          isFamilyFriendly = ( <Boolean props={ this.props.isFamilyFriendly } /> );        }
      }
      var version;
      if( this.props.version ){
        if( this.props.version instanceof Array ){
          version = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.version ){
            version.push( ( <div data-advice='Put your HTML here. version is a Number.'></div> ) );
          }
        } else {
            version = ( <div data-advice='Put your HTML here. version is a Number.'></div> );
        }
      }
      var provider;
      if( this.props.provider ){
        if( this.props.provider instanceof Array ){
          provider = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.provider ){
            provider.push( ( <div data-advice='Put your HTML here. provider is a Person or
Organization.'></div> ) );
          }
        } else {
            provider = ( <div data-advice='Put your HTML here. provider is a Person or
Organization.'></div> );
        }
      }
      var isPartOf;
      if( this.props.isPartOf ){
        if( this.props.isPartOf instanceof Array ){
          isPartOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isPartOf ){
            isPartOf.push( ( <CreativeWork {...this.props.isPartOf } /> ) );          }
        } else {
          isPartOf = ( <CreativeWork props={ this.props.isPartOf } /> );        }
      }
      var accessibilityHazard;
      if( this.props.accessibilityHazard ){
        if( this.props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.accessibilityHazard ){
            accessibilityHazard.push( ( <div data-advice='Put your HTML here. accessibilityHazard is a Text.'></div> ) );
          }
        } else {
            accessibilityHazard = ( <div data-advice='Put your HTML here. accessibilityHazard is a Text.'></div> );
        }
      }
      var thumbnail;
      if( this.props.thumbnail ){
        if( this.props.thumbnail instanceof Array ){
          thumbnail = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.thumbnail ){
            thumbnail.push( ( <ImageObject {...this.props.thumbnail } /> ) );          }
        } else {
          thumbnail = ( <ImageObject props={ this.props.thumbnail } /> );        }
      }
      var contentSize;
      if( this.props.contentSize ){
        if( this.props.contentSize instanceof Array ){
          contentSize = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contentSize ){
            contentSize.push( ( <div data-advice='Put your HTML here. contentSize is a Text.'></div> ) );
          }
        } else {
            contentSize = ( <div data-advice='Put your HTML here. contentSize is a Text.'></div> );
        }
      }
      var contentUrl;
      if( this.props.contentUrl ){
        if( this.props.contentUrl instanceof Array ){
          contentUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contentUrl ){
            contentUrl.push( ( <div data-advice='Put your HTML here. contentUrl is a URL.'></div> ) );
          }
        } else {
            contentUrl = ( <div data-advice='Put your HTML here. contentUrl is a URL.'></div> );
        }
      }
      var educationalAlignment;
      if( this.props.educationalAlignment ){
        if( this.props.educationalAlignment instanceof Array ){
          educationalAlignment = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.educationalAlignment ){
            educationalAlignment.push( ( <AlignmentObject {...this.props.educationalAlignment } /> ) );          }
        } else {
          educationalAlignment = ( <AlignmentObject props={ this.props.educationalAlignment } /> );        }
      }
      var genre;
      if( this.props.genre ){
        if( this.props.genre instanceof Array ){
          genre = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.genre ){
            genre.push( ( <div data-advice='Put your HTML here. genre is a Text.'></div> ) );
          }
        } else {
            genre = ( <div data-advice='Put your HTML here. genre is a Text.'></div> );
        }
      }
      var bitrate;
      if( this.props.bitrate ){
        if( this.props.bitrate instanceof Array ){
          bitrate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.bitrate ){
            bitrate.push( ( <div data-advice='Put your HTML here. bitrate is a Text.'></div> ) );
          }
        } else {
            bitrate = ( <div data-advice='Put your HTML here. bitrate is a Text.'></div> );
        }
      }
      var director;
      if( this.props.director ){
        if( this.props.director instanceof Array ){
          director = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.director ){
            director.push( ( <Person {...this.props.director } /> ) );          }
        } else {
          director = ( <Person props={ this.props.director } /> );        }
      }
      var about;
      if( this.props.about ){
        if( this.props.about instanceof Array ){
          about = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.about ){
            about.push( ( <Thing {...this.props.about } /> ) );          }
        } else {
          about = ( <Thing props={ this.props.about } /> );        }
      }
      var license;
      if( this.props.license ){
        if( this.props.license instanceof Array ){
          license = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.license ){
            license.push( ( <div data-advice='Put your HTML here. license is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            license = ( <div data-advice='Put your HTML here. license is a URL or
CreativeWork.'></div> );
        }
      }
      var workExample;
      if( this.props.workExample ){
        if( this.props.workExample instanceof Array ){
          workExample = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.workExample ){
            workExample.push( ( <CreativeWork {...this.props.workExample } /> ) );          }
        } else {
          workExample = ( <CreativeWork props={ this.props.workExample } /> );        }
      }
      var encodingFormat;
      if( this.props.encodingFormat ){
        if( this.props.encodingFormat instanceof Array ){
          encodingFormat = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.encodingFormat ){
            encodingFormat.push( ( <div data-advice='Put your HTML here. encodingFormat is a Text.'></div> ) );
          }
        } else {
            encodingFormat = ( <div data-advice='Put your HTML here. encodingFormat is a Text.'></div> );
        }
      }
      var caption;
      if( this.props.caption ){
        if( this.props.caption instanceof Array ){
          caption = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.caption ){
            caption.push( ( <div data-advice='Put your HTML here. caption is a Text.'></div> ) );
          }
        } else {
            caption = ( <div data-advice='Put your HTML here. caption is a Text.'></div> );
        }
      }
      var mentions;
      if( this.props.mentions ){
        if( this.props.mentions instanceof Array ){
          mentions = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mentions ){
            mentions.push( ( <Thing {...this.props.mentions } /> ) );          }
        } else {
          mentions = ( <Thing props={ this.props.mentions } /> );        }
      }
      var comment;
      if( this.props.comment ){
        if( this.props.comment instanceof Array ){
          comment = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.comment ){
            comment.push( ( <Comment {...this.props.comment } /> ) );          }
        } else {
          comment = ( <Comment props={ this.props.comment } /> );        }
      }
      var isBasedOnUrl;
      if( this.props.isBasedOnUrl ){
        if( this.props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isBasedOnUrl ){
            isBasedOnUrl.push( ( <div data-advice='Put your HTML here. isBasedOnUrl is a URL.'></div> ) );
          }
        } else {
            isBasedOnUrl = ( <div data-advice='Put your HTML here. isBasedOnUrl is a URL.'></div> );
        }
      }
      var encoding;
      if( this.props.encoding ){
        if( this.props.encoding instanceof Array ){
          encoding = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.encoding ){
            encoding.push( ( <MediaObject {...this.props.encoding } /> ) );          }
        } else {
          encoding = ( <MediaObject props={ this.props.encoding } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.height ){
            height.push( ( <div data-advice='Put your HTML here. height is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            height = ( <div data-advice='Put your HTML here. height is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var contributor;
      if( this.props.contributor ){
        if( this.props.contributor instanceof Array ){
          contributor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contributor ){
            contributor.push( ( <div data-advice='Put your HTML here. contributor is a Person or
Organization.'></div> ) );
          }
        } else {
            contributor = ( <div data-advice='Put your HTML here. contributor is a Person or
Organization.'></div> );
        }
      }
      var thumbnailUrl;
      if( this.props.thumbnailUrl ){
        if( this.props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.thumbnailUrl ){
            thumbnailUrl.push( ( <div data-advice='Put your HTML here. thumbnailUrl is a URL.'></div> ) );
          }
        } else {
            thumbnailUrl = ( <div data-advice='Put your HTML here. thumbnailUrl is a URL.'></div> );
        }
      }
      var mainEntity;
      if( this.props.mainEntity ){
        if( this.props.mainEntity instanceof Array ){
          mainEntity = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntity ){
            mainEntity.push( ( <Thing {...this.props.mainEntity } /> ) );          }
        } else {
          mainEntity = ( <Thing props={ this.props.mainEntity } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var accessibilityFeature;
      if( this.props.accessibilityFeature ){
        if( this.props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.accessibilityFeature ){
            accessibilityFeature.push( ( <div data-advice='Put your HTML here. accessibilityFeature is a Text.'></div> ) );
          }
        } else {
            accessibilityFeature = ( <div data-advice='Put your HTML here. accessibilityFeature is a Text.'></div> );
        }
      }
      var interactivityType;
      if( this.props.interactivityType ){
        if( this.props.interactivityType instanceof Array ){
          interactivityType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.interactivityType ){
            interactivityType.push( ( <div data-advice='Put your HTML here. interactivityType is a Text.'></div> ) );
          }
        } else {
            interactivityType = ( <div data-advice='Put your HTML here. interactivityType is a Text.'></div> );
        }
      }
      var publication;
      if( this.props.publication ){
        if( this.props.publication instanceof Array ){
          publication = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.publication ){
            publication.push( ( <PublicationEvent {...this.props.publication } /> ) );          }
        } else {
          publication = ( <PublicationEvent props={ this.props.publication } /> );        }
      }
      var width;
      if( this.props.width ){
        if( this.props.width instanceof Array ){
          width = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.width ){
            width.push( ( <div data-advice='Put your HTML here. width is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            width = ( <div data-advice='Put your HTML here. width is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var requiresSubscription;
      if( this.props.requiresSubscription ){
        if( this.props.requiresSubscription instanceof Array ){
          requiresSubscription = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.requiresSubscription ){
            requiresSubscription.push( ( <Boolean {...this.props.requiresSubscription } /> ) );          }
        } else {
          requiresSubscription = ( <Boolean props={ this.props.requiresSubscription } /> );        }
      }
      var editor;
      if( this.props.editor ){
        if( this.props.editor instanceof Array ){
          editor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.editor ){
            editor.push( ( <Person {...this.props.editor } /> ) );          }
        } else {
          editor = ( <Person props={ this.props.editor } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var recordedAt;
      if( this.props.recordedAt ){
        if( this.props.recordedAt instanceof Array ){
          recordedAt = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.recordedAt ){
            recordedAt.push( ( <Event {...this.props.recordedAt } /> ) );          }
        } else {
          recordedAt = ( <Event props={ this.props.recordedAt } /> );        }
      }
      var publisher;
      if( this.props.publisher ){
        if( this.props.publisher instanceof Array ){
          publisher = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.publisher ){
            publisher.push( ( <Organization {...this.props.publisher } /> ) );          }
        } else {
          publisher = ( <Organization props={ this.props.publisher } /> );        }
      }
      var hasPart;
      if( this.props.hasPart ){
        if( this.props.hasPart instanceof Array ){
          hasPart = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.hasPart ){
            hasPart.push( ( <CreativeWork {...this.props.hasPart } /> ) );          }
        } else {
          hasPart = ( <CreativeWork props={ this.props.hasPart } /> );        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var exampleOfWork;
      if( this.props.exampleOfWork ){
        if( this.props.exampleOfWork instanceof Array ){
          exampleOfWork = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.exampleOfWork ){
            exampleOfWork.push( ( <CreativeWork {...this.props.exampleOfWork } /> ) );          }
        } else {
          exampleOfWork = ( <CreativeWork props={ this.props.exampleOfWork } /> );        }
      }
      var copyrightHolder;
      if( this.props.copyrightHolder ){
        if( this.props.copyrightHolder instanceof Array ){
          copyrightHolder = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.copyrightHolder ){
            copyrightHolder.push( ( <div data-advice='Put your HTML here. copyrightHolder is a Person or
Organization.'></div> ) );
          }
        } else {
            copyrightHolder = ( <div data-advice='Put your HTML here. copyrightHolder is a Person or
Organization.'></div> );
        }
      }
      var accessibilityAPI;
      if( this.props.accessibilityAPI ){
        if( this.props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.accessibilityAPI ){
            accessibilityAPI.push( ( <div data-advice='Put your HTML here. accessibilityAPI is a Text.'></div> ) );
          }
        } else {
            accessibilityAPI = ( <div data-advice='Put your HTML here. accessibilityAPI is a Text.'></div> );
        }
      }
      var learningResourceType;
      if( this.props.learningResourceType ){
        if( this.props.learningResourceType instanceof Array ){
          learningResourceType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.learningResourceType ){
            learningResourceType.push( ( <div data-advice='Put your HTML here. learningResourceType is a Text.'></div> ) );
          }
        } else {
            learningResourceType = ( <div data-advice='Put your HTML here. learningResourceType is a Text.'></div> );
        }
      }
      var sourceOrganization;
      if( this.props.sourceOrganization ){
        if( this.props.sourceOrganization instanceof Array ){
          sourceOrganization = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sourceOrganization ){
            sourceOrganization.push( ( <Organization {...this.props.sourceOrganization } /> ) );          }
        } else {
          sourceOrganization = ( <Organization props={ this.props.sourceOrganization } /> );        }
      }
      var videoFrameSize;
      if( this.props.videoFrameSize ){
        if( this.props.videoFrameSize instanceof Array ){
          videoFrameSize = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.videoFrameSize ){
            videoFrameSize.push( ( <div data-advice='Put your HTML here. videoFrameSize is a Text.'></div> ) );
          }
        } else {
            videoFrameSize = ( <div data-advice='Put your HTML here. videoFrameSize is a Text.'></div> );
        }
      }
      var regionsAllowed;
      if( this.props.regionsAllowed ){
        if( this.props.regionsAllowed instanceof Array ){
          regionsAllowed = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.regionsAllowed ){
            regionsAllowed.push( ( <Place {...this.props.regionsAllowed } /> ) );          }
        } else {
          regionsAllowed = ( <Place props={ this.props.regionsAllowed } /> );        }
      }
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> ) );
          }
        } else {
            inLanguage = ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> );
        }
      }
      var citation;
      if( this.props.citation ){
        if( this.props.citation instanceof Array ){
          citation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.citation ){
            citation.push( ( <div data-advice='Put your HTML here. citation is a Text or
CreativeWork.'></div> ) );
          }
        } else {
            citation = ( <div data-advice='Put your HTML here. citation is a Text or
CreativeWork.'></div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var author;
      if( this.props.author ){
        if( this.props.author instanceof Array ){
          author = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.author ){
            author.push( ( <div data-advice='Put your HTML here. author is a Person or
Organization.'></div> ) );
          }
        } else {
            author = ( <div data-advice='Put your HTML here. author is a Person or
Organization.'></div> );
        }
      }
      var actor;
      if( this.props.actor ){
        if( this.props.actor instanceof Array ){
          actor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.actor ){
            actor.push( ( <Person {...this.props.actor } /> ) );          }
        } else {
          actor = ( <Person props={ this.props.actor } /> );        }
      }
      var dateModified;
      if( this.props.dateModified ){
        if( this.props.dateModified instanceof Array ){
          dateModified = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.dateModified ){
            dateModified.push( ( <div data-advice='Put your HTML here. dateModified is a Date.'></div> ) );
          }
        } else {
            dateModified = ( <div data-advice='Put your HTML here. dateModified is a Date.'></div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var expires;
      if( this.props.expires ){
        if( this.props.expires instanceof Array ){
          expires = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.expires ){
            expires.push( ( <div data-advice='Put your HTML here. expires is a Date.'></div> ) );
          }
        } else {
            expires = ( <div data-advice='Put your HTML here. expires is a Date.'></div> );
        }
      }
      var releasedEvent;
      if( this.props.releasedEvent ){
        if( this.props.releasedEvent instanceof Array ){
          releasedEvent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.releasedEvent ){
            releasedEvent.push( ( <PublicationEvent {...this.props.releasedEvent } /> ) );          }
        } else {
          releasedEvent = ( <PublicationEvent props={ this.props.releasedEvent } /> );        }
      }
      var translator;
      if( this.props.translator ){
        if( this.props.translator instanceof Array ){
          translator = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.translator ){
            translator.push( ( <div data-advice='Put your HTML here. translator is a Person or
Organization.'></div> ) );
          }
        } else {
            translator = ( <div data-advice='Put your HTML here. translator is a Person or
Organization.'></div> );
        }
      }
      var uploadDate;
      if( this.props.uploadDate ){
        if( this.props.uploadDate instanceof Array ){
          uploadDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.uploadDate ){
            uploadDate.push( ( <div data-advice='Put your HTML here. uploadDate is a Date.'></div> ) );
          }
        } else {
            uploadDate = ( <div data-advice='Put your HTML here. uploadDate is a Date.'></div> );
        }
      }
      var schemaVersion;
      if( this.props.schemaVersion ){
        if( this.props.schemaVersion instanceof Array ){
          schemaVersion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.schemaVersion ){
            schemaVersion.push( ( <div data-advice='Put your HTML here. schemaVersion is a URL or
Text.'></div> ) );
          }
        } else {
            schemaVersion = ( <div data-advice='Put your HTML here. schemaVersion is a URL or
Text.'></div> );
        }
      }
      var transcript;
      if( this.props.transcript ){
        if( this.props.transcript instanceof Array ){
          transcript = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.transcript ){
            transcript.push( ( <div data-advice='Put your HTML here. transcript is a Text.'></div> ) );
          }
        } else {
            transcript = ( <div data-advice='Put your HTML here. transcript is a Text.'></div> );
        }
      }
      var contentLocation;
      if( this.props.contentLocation ){
        if( this.props.contentLocation instanceof Array ){
          contentLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contentLocation ){
            contentLocation.push( ( <Place {...this.props.contentLocation } /> ) );          }
        } else {
          contentLocation = ( <Place props={ this.props.contentLocation } /> );        }
      }
      var timeRequired;
      if( this.props.timeRequired ){
        if( this.props.timeRequired instanceof Array ){
          timeRequired = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.timeRequired ){
            timeRequired.push( ( <Duration {...this.props.timeRequired } /> ) );          }
        } else {
          timeRequired = ( <Duration props={ this.props.timeRequired } /> );        }
      }
      var playerType;
      if( this.props.playerType ){
        if( this.props.playerType instanceof Array ){
          playerType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.playerType ){
            playerType.push( ( <div data-advice='Put your HTML here. playerType is a Text.'></div> ) );
          }
        } else {
            playerType = ( <div data-advice='Put your HTML here. playerType is a Text.'></div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var position;
      if( this.props.position ){
        if( this.props.position instanceof Array ){
          position = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.position ){
            position.push( ( <div data-advice='Put your HTML here. position is a Text or
Integer.'></div> ) );
          }
        } else {
            position = ( <div data-advice='Put your HTML here. position is a Text or
Integer.'></div> );
        }
      }
      var audio;
      if( this.props.audio ){
        if( this.props.audio instanceof Array ){
          audio = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.audio ){
            audio.push( ( <AudioObject {...this.props.audio } /> ) );          }
        } else {
          audio = ( <AudioObject props={ this.props.audio } /> );        }
      }
      return (<div title='VideoObject' className='VideoObject entity'>
        { educationalUse }
        { producer }
        { text }
        { datePublished }
        { alternativeHeadline }
        { accountablePerson }
        { keywords }
        { headline }
        { character }
        { contentRating }
        { associatedArticle }
        { offers }
        { publishingPrinciples }
        { embedUrl }
        { dateCreated }
        { potentialAction }
        { name }
        { associatedMedia }
        { audience }
        { accessibilityControl }
        { copyrightYear }
        { videoQuality }
        { encodesCreativeWork }
        { creator }
        { musicBy }
        { commentCount }
        { video }
        { typicalAgeRange }
        { duration }
        { discussionUrl }
        { productionCompany }
        { review }
        { isFamilyFriendly }
        { version }
        { provider }
        { isPartOf }
        { accessibilityHazard }
        { thumbnail }
        { contentSize }
        { contentUrl }
        { educationalAlignment }
        { genre }
        { bitrate }
        { director }
        { about }
        { license }
        { workExample }
        { encodingFormat }
        { caption }
        { mentions }
        { comment }
        { isBasedOnUrl }
        { encoding }
        { sameAs }
        { image }
        { height }
        { aggregateRating }
        { contributor }
        { thumbnailUrl }
        { mainEntity }
        { alternateName }
        { accessibilityFeature }
        { interactivityType }
        { publication }
        { width }
        { requiresSubscription }
        { editor }
        { mainEntityOfPage }
        { recordedAt }
        { publisher }
        { hasPart }
        { award }
        { exampleOfWork }
        { copyrightHolder }
        { accessibilityAPI }
        { learningResourceType }
        { sourceOrganization }
        { videoFrameSize }
        { regionsAllowed }
        { inLanguage }
        { citation }
        { additionalType }
        { author }
        { actor }
        { dateModified }
        { description }
        { expires }
        { releasedEvent }
        { translator }
        { uploadDate }
        { schemaVersion }
        { transcript }
        { contentLocation }
        { timeRequired }
        { playerType }
        { url }
        { position }
        { audio }
     </div>);
    }
  });
});
