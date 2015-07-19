/* Thing > CreativeWork > MediaObject - An image, video, or audio object embedded in a web page. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './quantitativevalue', './offer', './imageobject', './aggregaterating', './newsarticle', './integer', './creativework', './review', './audioobject', './distance', './language', './person', './publicationevent', './place', './action', './organization', './comment', './thing', './audience', './boolean', './duration', './event'], function(React, AlignmentObject, VideoObject, MediaObject, QuantitativeValue, Offer, ImageObject, AggregateRating, NewsArticle, Integer, CreativeWork, Review, AudioObject, Distance, Language, Person, PublicationEvent, Place, Action, Organization, Comment, Thing, Audience, Boolean, Duration, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var educationalUse;
      if( props.educationalUse ){
        if( props.educationalUse instanceof Array ){
          educationalUse = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.educationalUse ){
            educationalUse.push( ( <div data-advice='Put your HTML here. educationalUse is a Text.'></div> ) );
          }
        } else {
            educationalUse = ( <div data-advice='Put your HTML here. educationalUse is a Text.'></div> );
        }
      }
      var producer;
      if( props.producer ){
        if( props.producer instanceof Array ){
          producer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.producer ){
            producer.push( ( <div data-advice='Put your HTML here. producer is a Organization or
Person.'></div> ) );
          }
        } else {
            producer = ( <div data-advice='Put your HTML here. producer is a Organization or
Person.'></div> );
        }
      }
      var text;
      if( props.text ){
        if( props.text instanceof Array ){
          text = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.text ){
            text.push( ( <div data-advice='Put your HTML here. text is a Text.'></div> ) );
          }
        } else {
            text = ( <div data-advice='Put your HTML here. text is a Text.'></div> );
        }
      }
      var datePublished;
      if( props.datePublished ){
        if( props.datePublished instanceof Array ){
          datePublished = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.datePublished ){
            datePublished.push( ( <div data-advice='Put your HTML here. datePublished is a Date.'></div> ) );
          }
        } else {
            datePublished = ( <div data-advice='Put your HTML here. datePublished is a Date.'></div> );
        }
      }
      var alternativeHeadline;
      if( props.alternativeHeadline ){
        if( props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternativeHeadline ){
            alternativeHeadline.push( ( <div data-advice='Put your HTML here. alternativeHeadline is a Text.'></div> ) );
          }
        } else {
            alternativeHeadline = ( <div data-advice='Put your HTML here. alternativeHeadline is a Text.'></div> );
        }
      }
      var accountablePerson;
      if( props.accountablePerson ){
        if( props.accountablePerson instanceof Array ){
          accountablePerson = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.accountablePerson ){
            accountablePerson.push( ( <Person {...props.accountablePerson } /> ) );          }
        } else {
          accountablePerson = ( <Person props={ props.accountablePerson } /> );        }
      }
      var keywords;
      if( props.keywords ){
        if( props.keywords instanceof Array ){
          keywords = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.keywords ){
            keywords.push( ( <div data-advice='Put your HTML here. keywords is a Text.'></div> ) );
          }
        } else {
            keywords = ( <div data-advice='Put your HTML here. keywords is a Text.'></div> );
        }
      }
      var headline;
      if( props.headline ){
        if( props.headline instanceof Array ){
          headline = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.headline ){
            headline.push( ( <div data-advice='Put your HTML here. headline is a Text.'></div> ) );
          }
        } else {
            headline = ( <div data-advice='Put your HTML here. headline is a Text.'></div> );
        }
      }
      var character;
      if( props.character ){
        if( props.character instanceof Array ){
          character = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.character ){
            character.push( ( <Person {...props.character } /> ) );          }
        } else {
          character = ( <Person props={ props.character } /> );        }
      }
      var contentRating;
      if( props.contentRating ){
        if( props.contentRating instanceof Array ){
          contentRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contentRating ){
            contentRating.push( ( <div data-advice='Put your HTML here. contentRating is a Text.'></div> ) );
          }
        } else {
            contentRating = ( <div data-advice='Put your HTML here. contentRating is a Text.'></div> );
        }
      }
      var associatedArticle;
      if( props.associatedArticle ){
        if( props.associatedArticle instanceof Array ){
          associatedArticle = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.associatedArticle ){
            associatedArticle.push( ( <NewsArticle {...props.associatedArticle } /> ) );          }
        } else {
          associatedArticle = ( <NewsArticle props={ props.associatedArticle } /> );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.offers ){
            offers.push( ( <Offer {...props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ props.offers } /> );        }
      }
      var publishingPrinciples;
      if( props.publishingPrinciples ){
        if( props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.publishingPrinciples ){
            publishingPrinciples.push( ( <div data-advice='Put your HTML here. publishingPrinciples is a URL.'></div> ) );
          }
        } else {
            publishingPrinciples = ( <div data-advice='Put your HTML here. publishingPrinciples is a URL.'></div> );
        }
      }
      var embedUrl;
      if( props.embedUrl ){
        if( props.embedUrl instanceof Array ){
          embedUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.embedUrl ){
            embedUrl.push( ( <div data-advice='Put your HTML here. embedUrl is a URL.'></div> ) );
          }
        } else {
            embedUrl = ( <div data-advice='Put your HTML here. embedUrl is a URL.'></div> );
        }
      }
      var dateCreated;
      if( props.dateCreated ){
        if( props.dateCreated instanceof Array ){
          dateCreated = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.dateCreated ){
            dateCreated.push( ( <div data-advice='Put your HTML here. dateCreated is a Date.'></div> ) );
          }
        } else {
            dateCreated = ( <div data-advice='Put your HTML here. dateCreated is a Date.'></div> );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var associatedMedia;
      if( props.associatedMedia ){
        if( props.associatedMedia instanceof Array ){
          associatedMedia = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.associatedMedia ){
            associatedMedia.push( ( <MediaObject {...props.associatedMedia } /> ) );          }
        } else {
          associatedMedia = ( <MediaObject props={ props.associatedMedia } /> );        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.audience ){
            audience.push( ( <Audience {...props.audience } /> ) );          }
        } else {
          audience = ( <Audience props={ props.audience } /> );        }
      }
      var accessibilityControl;
      if( props.accessibilityControl ){
        if( props.accessibilityControl instanceof Array ){
          accessibilityControl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.accessibilityControl ){
            accessibilityControl.push( ( <div data-advice='Put your HTML here. accessibilityControl is a Text.'></div> ) );
          }
        } else {
            accessibilityControl = ( <div data-advice='Put your HTML here. accessibilityControl is a Text.'></div> );
        }
      }
      var copyrightYear;
      if( props.copyrightYear ){
        if( props.copyrightYear instanceof Array ){
          copyrightYear = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.copyrightYear ){
            copyrightYear.push( ( <div data-advice='Put your HTML here. copyrightYear is a Number.'></div> ) );
          }
        } else {
            copyrightYear = ( <div data-advice='Put your HTML here. copyrightYear is a Number.'></div> );
        }
      }
      var encodesCreativeWork;
      if( props.encodesCreativeWork ){
        if( props.encodesCreativeWork instanceof Array ){
          encodesCreativeWork = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.encodesCreativeWork ){
            encodesCreativeWork.push( ( <CreativeWork {...props.encodesCreativeWork } /> ) );          }
        } else {
          encodesCreativeWork = ( <CreativeWork props={ props.encodesCreativeWork } /> );        }
      }
      var creator;
      if( props.creator ){
        if( props.creator instanceof Array ){
          creator = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.creator ){
            creator.push( ( <div data-advice='Put your HTML here. creator is a Organization or
Person.'></div> ) );
          }
        } else {
            creator = ( <div data-advice='Put your HTML here. creator is a Organization or
Person.'></div> );
        }
      }
      var commentCount;
      if( props.commentCount ){
        if( props.commentCount instanceof Array ){
          commentCount = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.commentCount ){
            commentCount.push( ( <Integer {...props.commentCount } /> ) );          }
        } else {
          commentCount = ( <Integer props={ props.commentCount } /> );        }
      }
      var video;
      if( props.video ){
        if( props.video instanceof Array ){
          video = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.video ){
            video.push( ( <VideoObject {...props.video } /> ) );          }
        } else {
          video = ( <VideoObject props={ props.video } /> );        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.typicalAgeRange ){
            typicalAgeRange.push( ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> ) );
          }
        } else {
            typicalAgeRange = ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> );
        }
      }
      var duration;
      if( props.duration ){
        if( props.duration instanceof Array ){
          duration = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.duration ){
            duration.push( ( <Duration {...props.duration } /> ) );          }
        } else {
          duration = ( <Duration props={ props.duration } /> );        }
      }
      var discussionUrl;
      if( props.discussionUrl ){
        if( props.discussionUrl instanceof Array ){
          discussionUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.discussionUrl ){
            discussionUrl.push( ( <div data-advice='Put your HTML here. discussionUrl is a URL.'></div> ) );
          }
        } else {
            discussionUrl = ( <div data-advice='Put your HTML here. discussionUrl is a URL.'></div> );
        }
      }
      var productionCompany;
      if( props.productionCompany ){
        if( props.productionCompany instanceof Array ){
          productionCompany = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.productionCompany ){
            productionCompany.push( ( <Organization {...props.productionCompany } /> ) );          }
        } else {
          productionCompany = ( <Organization props={ props.productionCompany } /> );        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.review ){
            review.push( ( <Review {...props.review } /> ) );          }
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var isFamilyFriendly;
      if( props.isFamilyFriendly ){
        if( props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isFamilyFriendly ){
            isFamilyFriendly.push( ( <Boolean {...props.isFamilyFriendly } /> ) );          }
        } else {
          isFamilyFriendly = ( <Boolean props={ props.isFamilyFriendly } /> );        }
      }
      var version;
      if( props.version ){
        if( props.version instanceof Array ){
          version = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.version ){
            version.push( ( <div data-advice='Put your HTML here. version is a Number.'></div> ) );
          }
        } else {
            version = ( <div data-advice='Put your HTML here. version is a Number.'></div> );
        }
      }
      var provider;
      if( props.provider ){
        if( props.provider instanceof Array ){
          provider = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.provider ){
            provider.push( ( <div data-advice='Put your HTML here. provider is a Organization or
Person.'></div> ) );
          }
        } else {
            provider = ( <div data-advice='Put your HTML here. provider is a Organization or
Person.'></div> );
        }
      }
      var isPartOf;
      if( props.isPartOf ){
        if( props.isPartOf instanceof Array ){
          isPartOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isPartOf ){
            isPartOf.push( ( <CreativeWork {...props.isPartOf } /> ) );          }
        } else {
          isPartOf = ( <CreativeWork props={ props.isPartOf } /> );        }
      }
      var accessibilityHazard;
      if( props.accessibilityHazard ){
        if( props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.accessibilityHazard ){
            accessibilityHazard.push( ( <div data-advice='Put your HTML here. accessibilityHazard is a Text.'></div> ) );
          }
        } else {
            accessibilityHazard = ( <div data-advice='Put your HTML here. accessibilityHazard is a Text.'></div> );
        }
      }
      var contentSize;
      if( props.contentSize ){
        if( props.contentSize instanceof Array ){
          contentSize = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contentSize ){
            contentSize.push( ( <div data-advice='Put your HTML here. contentSize is a Text.'></div> ) );
          }
        } else {
            contentSize = ( <div data-advice='Put your HTML here. contentSize is a Text.'></div> );
        }
      }
      var contentUrl;
      if( props.contentUrl ){
        if( props.contentUrl instanceof Array ){
          contentUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contentUrl ){
            contentUrl.push( ( <div data-advice='Put your HTML here. contentUrl is a URL.'></div> ) );
          }
        } else {
            contentUrl = ( <div data-advice='Put your HTML here. contentUrl is a URL.'></div> );
        }
      }
      var educationalAlignment;
      if( props.educationalAlignment ){
        if( props.educationalAlignment instanceof Array ){
          educationalAlignment = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.educationalAlignment ){
            educationalAlignment.push( ( <AlignmentObject {...props.educationalAlignment } /> ) );          }
        } else {
          educationalAlignment = ( <AlignmentObject props={ props.educationalAlignment } /> );        }
      }
      var genre;
      if( props.genre ){
        if( props.genre instanceof Array ){
          genre = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.genre ){
            genre.push( ( <div data-advice='Put your HTML here. genre is a Text.'></div> ) );
          }
        } else {
            genre = ( <div data-advice='Put your HTML here. genre is a Text.'></div> );
        }
      }
      var bitrate;
      if( props.bitrate ){
        if( props.bitrate instanceof Array ){
          bitrate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.bitrate ){
            bitrate.push( ( <div data-advice='Put your HTML here. bitrate is a Text.'></div> ) );
          }
        } else {
            bitrate = ( <div data-advice='Put your HTML here. bitrate is a Text.'></div> );
        }
      }
      var publisher;
      if( props.publisher ){
        if( props.publisher instanceof Array ){
          publisher = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.publisher ){
            publisher.push( ( <Organization {...props.publisher } /> ) );          }
        } else {
          publisher = ( <Organization props={ props.publisher } /> );        }
      }
      var about;
      if( props.about ){
        if( props.about instanceof Array ){
          about = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.about ){
            about.push( ( <Thing {...props.about } /> ) );          }
        } else {
          about = ( <Thing props={ props.about } /> );        }
      }
      var license;
      if( props.license ){
        if( props.license instanceof Array ){
          license = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.license ){
            license.push( ( <div data-advice='Put your HTML here. license is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            license = ( <div data-advice='Put your HTML here. license is a CreativeWork or
URL.'></div> );
        }
      }
      var workExample;
      if( props.workExample ){
        if( props.workExample instanceof Array ){
          workExample = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.workExample ){
            workExample.push( ( <CreativeWork {...props.workExample } /> ) );          }
        } else {
          workExample = ( <CreativeWork props={ props.workExample } /> );        }
      }
      var encodingFormat;
      if( props.encodingFormat ){
        if( props.encodingFormat instanceof Array ){
          encodingFormat = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.encodingFormat ){
            encodingFormat.push( ( <div data-advice='Put your HTML here. encodingFormat is a Text.'></div> ) );
          }
        } else {
            encodingFormat = ( <div data-advice='Put your HTML here. encodingFormat is a Text.'></div> );
        }
      }
      var mentions;
      if( props.mentions ){
        if( props.mentions instanceof Array ){
          mentions = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mentions ){
            mentions.push( ( <Thing {...props.mentions } /> ) );          }
        } else {
          mentions = ( <Thing props={ props.mentions } /> );        }
      }
      var comment;
      if( props.comment ){
        if( props.comment instanceof Array ){
          comment = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.comment ){
            comment.push( ( <Comment {...props.comment } /> ) );          }
        } else {
          comment = ( <Comment props={ props.comment } /> );        }
      }
      var isBasedOnUrl;
      if( props.isBasedOnUrl ){
        if( props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isBasedOnUrl ){
            isBasedOnUrl.push( ( <div data-advice='Put your HTML here. isBasedOnUrl is a URL.'></div> ) );
          }
        } else {
            isBasedOnUrl = ( <div data-advice='Put your HTML here. isBasedOnUrl is a URL.'></div> );
        }
      }
      var encoding;
      if( props.encoding ){
        if( props.encoding instanceof Array ){
          encoding = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.encoding ){
            encoding.push( ( <MediaObject {...props.encoding } /> ) );          }
        } else {
          encoding = ( <MediaObject props={ props.encoding } /> );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.height ){
            height.push( ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> ) );
          }
        } else {
            height = ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var contributor;
      if( props.contributor ){
        if( props.contributor instanceof Array ){
          contributor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contributor ){
            contributor.push( ( <div data-advice='Put your HTML here. contributor is a Organization or
Person.'></div> ) );
          }
        } else {
            contributor = ( <div data-advice='Put your HTML here. contributor is a Organization or
Person.'></div> );
        }
      }
      var thumbnailUrl;
      if( props.thumbnailUrl ){
        if( props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.thumbnailUrl ){
            thumbnailUrl.push( ( <div data-advice='Put your HTML here. thumbnailUrl is a URL.'></div> ) );
          }
        } else {
            thumbnailUrl = ( <div data-advice='Put your HTML here. thumbnailUrl is a URL.'></div> );
        }
      }
      var mainEntity;
      if( props.mainEntity ){
        if( props.mainEntity instanceof Array ){
          mainEntity = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntity ){
            mainEntity.push( ( <Thing {...props.mainEntity } /> ) );          }
        } else {
          mainEntity = ( <Thing props={ props.mainEntity } /> );        }
      }
      var schemaVersion;
      if( props.schemaVersion ){
        if( props.schemaVersion instanceof Array ){
          schemaVersion = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.schemaVersion ){
            schemaVersion.push( ( <div data-advice='Put your HTML here. schemaVersion is a Text or
URL.'></div> ) );
          }
        } else {
            schemaVersion = ( <div data-advice='Put your HTML here. schemaVersion is a Text or
URL.'></div> );
        }
      }
      var accessibilityFeature;
      if( props.accessibilityFeature ){
        if( props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.accessibilityFeature ){
            accessibilityFeature.push( ( <div data-advice='Put your HTML here. accessibilityFeature is a Text.'></div> ) );
          }
        } else {
            accessibilityFeature = ( <div data-advice='Put your HTML here. accessibilityFeature is a Text.'></div> );
        }
      }
      var interactivityType;
      if( props.interactivityType ){
        if( props.interactivityType instanceof Array ){
          interactivityType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.interactivityType ){
            interactivityType.push( ( <div data-advice='Put your HTML here. interactivityType is a Text.'></div> ) );
          }
        } else {
            interactivityType = ( <div data-advice='Put your HTML here. interactivityType is a Text.'></div> );
        }
      }
      var publication;
      if( props.publication ){
        if( props.publication instanceof Array ){
          publication = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.publication ){
            publication.push( ( <PublicationEvent {...props.publication } /> ) );          }
        } else {
          publication = ( <PublicationEvent props={ props.publication } /> );        }
      }
      var width;
      if( props.width ){
        if( props.width instanceof Array ){
          width = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.width ){
            width.push( ( <div data-advice='Put your HTML here. width is a Distance or
QuantitativeValue.'></div> ) );
          }
        } else {
            width = ( <div data-advice='Put your HTML here. width is a Distance or
QuantitativeValue.'></div> );
        }
      }
      var requiresSubscription;
      if( props.requiresSubscription ){
        if( props.requiresSubscription instanceof Array ){
          requiresSubscription = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.requiresSubscription ){
            requiresSubscription.push( ( <Boolean {...props.requiresSubscription } /> ) );          }
        } else {
          requiresSubscription = ( <Boolean props={ props.requiresSubscription } /> );        }
      }
      var editor;
      if( props.editor ){
        if( props.editor instanceof Array ){
          editor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.editor ){
            editor.push( ( <Person {...props.editor } /> ) );          }
        } else {
          editor = ( <Person props={ props.editor } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var recordedAt;
      if( props.recordedAt ){
        if( props.recordedAt instanceof Array ){
          recordedAt = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.recordedAt ){
            recordedAt.push( ( <Event {...props.recordedAt } /> ) );          }
        } else {
          recordedAt = ( <Event props={ props.recordedAt } /> );        }
      }
      var hasPart;
      if( props.hasPart ){
        if( props.hasPart instanceof Array ){
          hasPart = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.hasPart ){
            hasPart.push( ( <CreativeWork {...props.hasPart } /> ) );          }
        } else {
          hasPart = ( <CreativeWork props={ props.hasPart } /> );        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var exampleOfWork;
      if( props.exampleOfWork ){
        if( props.exampleOfWork instanceof Array ){
          exampleOfWork = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.exampleOfWork ){
            exampleOfWork.push( ( <CreativeWork {...props.exampleOfWork } /> ) );          }
        } else {
          exampleOfWork = ( <CreativeWork props={ props.exampleOfWork } /> );        }
      }
      var copyrightHolder;
      if( props.copyrightHolder ){
        if( props.copyrightHolder instanceof Array ){
          copyrightHolder = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.copyrightHolder ){
            copyrightHolder.push( ( <div data-advice='Put your HTML here. copyrightHolder is a Organization or
Person.'></div> ) );
          }
        } else {
            copyrightHolder = ( <div data-advice='Put your HTML here. copyrightHolder is a Organization or
Person.'></div> );
        }
      }
      var accessibilityAPI;
      if( props.accessibilityAPI ){
        if( props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.accessibilityAPI ){
            accessibilityAPI.push( ( <div data-advice='Put your HTML here. accessibilityAPI is a Text.'></div> ) );
          }
        } else {
            accessibilityAPI = ( <div data-advice='Put your HTML here. accessibilityAPI is a Text.'></div> );
        }
      }
      var learningResourceType;
      if( props.learningResourceType ){
        if( props.learningResourceType instanceof Array ){
          learningResourceType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.learningResourceType ){
            learningResourceType.push( ( <div data-advice='Put your HTML here. learningResourceType is a Text.'></div> ) );
          }
        } else {
            learningResourceType = ( <div data-advice='Put your HTML here. learningResourceType is a Text.'></div> );
        }
      }
      var sourceOrganization;
      if( props.sourceOrganization ){
        if( props.sourceOrganization instanceof Array ){
          sourceOrganization = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sourceOrganization ){
            sourceOrganization.push( ( <Organization {...props.sourceOrganization } /> ) );          }
        } else {
          sourceOrganization = ( <Organization props={ props.sourceOrganization } /> );        }
      }
      var regionsAllowed;
      if( props.regionsAllowed ){
        if( props.regionsAllowed instanceof Array ){
          regionsAllowed = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.regionsAllowed ){
            regionsAllowed.push( ( <Place {...props.regionsAllowed } /> ) );          }
        } else {
          regionsAllowed = ( <Place props={ props.regionsAllowed } /> );        }
      }
      var inLanguage;
      if( props.inLanguage ){
        if( props.inLanguage instanceof Array ){
          inLanguage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.inLanguage ){
            inLanguage.push( ( <div data-advice='Put your HTML here. inLanguage is a Text or
Language.'></div> ) );
          }
        } else {
            inLanguage = ( <div data-advice='Put your HTML here. inLanguage is a Text or
Language.'></div> );
        }
      }
      var citation;
      if( props.citation ){
        if( props.citation instanceof Array ){
          citation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.citation ){
            citation.push( ( <div data-advice='Put your HTML here. citation is a Text or
CreativeWork.'></div> ) );
          }
        } else {
            citation = ( <div data-advice='Put your HTML here. citation is a Text or
CreativeWork.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var author;
      if( props.author ){
        if( props.author instanceof Array ){
          author = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.author ){
            author.push( ( <div data-advice='Put your HTML here. author is a Organization or
Person.'></div> ) );
          }
        } else {
            author = ( <div data-advice='Put your HTML here. author is a Organization or
Person.'></div> );
        }
      }
      var dateModified;
      if( props.dateModified ){
        if( props.dateModified instanceof Array ){
          dateModified = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.dateModified ){
            dateModified.push( ( <div data-advice='Put your HTML here. dateModified is a Date.'></div> ) );
          }
        } else {
            dateModified = ( <div data-advice='Put your HTML here. dateModified is a Date.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var expires;
      if( props.expires ){
        if( props.expires instanceof Array ){
          expires = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.expires ){
            expires.push( ( <div data-advice='Put your HTML here. expires is a Date.'></div> ) );
          }
        } else {
            expires = ( <div data-advice='Put your HTML here. expires is a Date.'></div> );
        }
      }
      var releasedEvent;
      if( props.releasedEvent ){
        if( props.releasedEvent instanceof Array ){
          releasedEvent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.releasedEvent ){
            releasedEvent.push( ( <PublicationEvent {...props.releasedEvent } /> ) );          }
        } else {
          releasedEvent = ( <PublicationEvent props={ props.releasedEvent } /> );        }
      }
      var translator;
      if( props.translator ){
        if( props.translator instanceof Array ){
          translator = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.translator ){
            translator.push( ( <div data-advice='Put your HTML here. translator is a Organization or
Person.'></div> ) );
          }
        } else {
            translator = ( <div data-advice='Put your HTML here. translator is a Organization or
Person.'></div> );
        }
      }
      var uploadDate;
      if( props.uploadDate ){
        if( props.uploadDate instanceof Array ){
          uploadDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.uploadDate ){
            uploadDate.push( ( <div data-advice='Put your HTML here. uploadDate is a Date.'></div> ) );
          }
        } else {
            uploadDate = ( <div data-advice='Put your HTML here. uploadDate is a Date.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var contentLocation;
      if( props.contentLocation ){
        if( props.contentLocation instanceof Array ){
          contentLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contentLocation ){
            contentLocation.push( ( <Place {...props.contentLocation } /> ) );          }
        } else {
          contentLocation = ( <Place props={ props.contentLocation } /> );        }
      }
      var timeRequired;
      if( props.timeRequired ){
        if( props.timeRequired instanceof Array ){
          timeRequired = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.timeRequired ){
            timeRequired.push( ( <Duration {...props.timeRequired } /> ) );          }
        } else {
          timeRequired = ( <Duration props={ props.timeRequired } /> );        }
      }
      var playerType;
      if( props.playerType ){
        if( props.playerType instanceof Array ){
          playerType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.playerType ){
            playerType.push( ( <div data-advice='Put your HTML here. playerType is a Text.'></div> ) );
          }
        } else {
            playerType = ( <div data-advice='Put your HTML here. playerType is a Text.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var position;
      if( props.position ){
        if( props.position instanceof Array ){
          position = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.position ){
            position.push( ( <div data-advice='Put your HTML here. position is a Text or
Integer.'></div> ) );
          }
        } else {
            position = ( <div data-advice='Put your HTML here. position is a Text or
Integer.'></div> );
        }
      }
      var audio;
      if( props.audio ){
        if( props.audio instanceof Array ){
          audio = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.audio ){
            audio.push( ( <AudioObject {...props.audio } /> ) );          }
        } else {
          audio = ( <AudioObject props={ props.audio } /> );        }
      }
      return (<div title='MediaObject' className='MediaObject entity'>
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
        { encodesCreativeWork }
        { creator }
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
        { contentSize }
        { contentUrl }
        { educationalAlignment }
        { genre }
        { bitrate }
        { publisher }
        { about }
        { license }
        { workExample }
        { encodingFormat }
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
        { schemaVersion }
        { accessibilityFeature }
        { interactivityType }
        { publication }
        { width }
        { requiresSubscription }
        { editor }
        { mainEntityOfPage }
        { recordedAt }
        { hasPart }
        { award }
        { exampleOfWork }
        { copyrightHolder }
        { accessibilityAPI }
        { learningResourceType }
        { sourceOrganization }
        { regionsAllowed }
        { inLanguage }
        { citation }
        { additionalType }
        { author }
        { dateModified }
        { description }
        { expires }
        { releasedEvent }
        { translator }
        { uploadDate }
        { alternateName }
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
