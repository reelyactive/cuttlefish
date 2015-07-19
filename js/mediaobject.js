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
          educationalUse = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.educationalUse ){
            educationalUse.push( ( React.createElement("div", {"data-advice": "Put your HTML here. educationalUse is a Text."}) ) );
          }
        } else {
            educationalUse = ( React.createElement("div", {"data-advice": "Put your HTML here. educationalUse is a Text."}) );
        }
      }
      var producer;
      if( props.producer ){
        if( props.producer instanceof Array ){
          producer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.producer ){
            producer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. producer is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            producer = ( React.createElement("div", {"data-advice": "Put your HTML here. producer is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var text;
      if( props.text ){
        if( props.text instanceof Array ){
          text = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.text ){
            text.push( ( React.createElement("div", {"data-advice": "Put your HTML here. text is a Text."}) ) );
          }
        } else {
            text = ( React.createElement("div", {"data-advice": "Put your HTML here. text is a Text."}) );
        }
      }
      var datePublished;
      if( props.datePublished ){
        if( props.datePublished instanceof Array ){
          datePublished = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.datePublished ){
            datePublished.push( ( React.createElement("div", {"data-advice": "Put your HTML here. datePublished is a Date."}) ) );
          }
        } else {
            datePublished = ( React.createElement("div", {"data-advice": "Put your HTML here. datePublished is a Date."}) );
        }
      }
      var alternativeHeadline;
      if( props.alternativeHeadline ){
        if( props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternativeHeadline ){
            alternativeHeadline.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternativeHeadline is a Text."}) ) );
          }
        } else {
            alternativeHeadline = ( React.createElement("div", {"data-advice": "Put your HTML here. alternativeHeadline is a Text."}) );
        }
      }
      var accountablePerson;
      if( props.accountablePerson ){
        if( props.accountablePerson instanceof Array ){
          accountablePerson = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.accountablePerson ){
            accountablePerson.push( ( React.createElement(Person, React.__spread({},  props.accountablePerson )) ) );          }
        } else {
          accountablePerson = ( React.createElement(Person, {props:  props.accountablePerson}) );        }
      }
      var keywords;
      if( props.keywords ){
        if( props.keywords instanceof Array ){
          keywords = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.keywords ){
            keywords.push( ( React.createElement("div", {"data-advice": "Put your HTML here. keywords is a Text."}) ) );
          }
        } else {
            keywords = ( React.createElement("div", {"data-advice": "Put your HTML here. keywords is a Text."}) );
        }
      }
      var headline;
      if( props.headline ){
        if( props.headline instanceof Array ){
          headline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.headline ){
            headline.push( ( React.createElement("div", {"data-advice": "Put your HTML here. headline is a Text."}) ) );
          }
        } else {
            headline = ( React.createElement("div", {"data-advice": "Put your HTML here. headline is a Text."}) );
        }
      }
      var character;
      if( props.character ){
        if( props.character instanceof Array ){
          character = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.character ){
            character.push( ( React.createElement(Person, React.__spread({},  props.character )) ) );          }
        } else {
          character = ( React.createElement(Person, {props:  props.character}) );        }
      }
      var contentRating;
      if( props.contentRating ){
        if( props.contentRating instanceof Array ){
          contentRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contentRating ){
            contentRating.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contentRating is a Text."}) ) );
          }
        } else {
            contentRating = ( React.createElement("div", {"data-advice": "Put your HTML here. contentRating is a Text."}) );
        }
      }
      var associatedArticle;
      if( props.associatedArticle ){
        if( props.associatedArticle instanceof Array ){
          associatedArticle = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.associatedArticle ){
            associatedArticle.push( ( React.createElement(NewsArticle, React.__spread({},  props.associatedArticle )) ) );          }
        } else {
          associatedArticle = ( React.createElement(NewsArticle, {props:  props.associatedArticle}) );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.offers ){
            offers.push( ( React.createElement(Offer, React.__spread({},  props.offers )) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  props.offers}) );        }
      }
      var publishingPrinciples;
      if( props.publishingPrinciples ){
        if( props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.publishingPrinciples ){
            publishingPrinciples.push( ( React.createElement("div", {"data-advice": "Put your HTML here. publishingPrinciples is a URL."}) ) );
          }
        } else {
            publishingPrinciples = ( React.createElement("div", {"data-advice": "Put your HTML here. publishingPrinciples is a URL."}) );
        }
      }
      var embedUrl;
      if( props.embedUrl ){
        if( props.embedUrl instanceof Array ){
          embedUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.embedUrl ){
            embedUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. embedUrl is a URL."}) ) );
          }
        } else {
            embedUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. embedUrl is a URL."}) );
        }
      }
      var dateCreated;
      if( props.dateCreated ){
        if( props.dateCreated instanceof Array ){
          dateCreated = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.dateCreated ){
            dateCreated.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dateCreated is a Date."}) ) );
          }
        } else {
            dateCreated = ( React.createElement("div", {"data-advice": "Put your HTML here. dateCreated is a Date."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var associatedMedia;
      if( props.associatedMedia ){
        if( props.associatedMedia instanceof Array ){
          associatedMedia = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.associatedMedia ){
            associatedMedia.push( ( React.createElement(MediaObject, React.__spread({},  props.associatedMedia )) ) );          }
        } else {
          associatedMedia = ( React.createElement(MediaObject, {props:  props.associatedMedia}) );        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.audience ){
            audience.push( ( React.createElement(Audience, React.__spread({},  props.audience )) ) );          }
        } else {
          audience = ( React.createElement(Audience, {props:  props.audience}) );        }
      }
      var accessibilityControl;
      if( props.accessibilityControl ){
        if( props.accessibilityControl instanceof Array ){
          accessibilityControl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.accessibilityControl ){
            accessibilityControl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityControl is a Text."}) ) );
          }
        } else {
            accessibilityControl = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityControl is a Text."}) );
        }
      }
      var copyrightYear;
      if( props.copyrightYear ){
        if( props.copyrightYear instanceof Array ){
          copyrightYear = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.copyrightYear ){
            copyrightYear.push( ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightYear is a Number."}) ) );
          }
        } else {
            copyrightYear = ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightYear is a Number."}) );
        }
      }
      var encodesCreativeWork;
      if( props.encodesCreativeWork ){
        if( props.encodesCreativeWork instanceof Array ){
          encodesCreativeWork = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.encodesCreativeWork ){
            encodesCreativeWork.push( ( React.createElement(CreativeWork, React.__spread({},  props.encodesCreativeWork )) ) );          }
        } else {
          encodesCreativeWork = ( React.createElement(CreativeWork, {props:  props.encodesCreativeWork}) );        }
      }
      var creator;
      if( props.creator ){
        if( props.creator instanceof Array ){
          creator = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.creator ){
            creator.push( ( React.createElement("div", {"data-advice": "Put your HTML here. creator is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            creator = ( React.createElement("div", {"data-advice": "Put your HTML here. creator is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var commentCount;
      if( props.commentCount ){
        if( props.commentCount instanceof Array ){
          commentCount = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.commentCount ){
            commentCount.push( ( React.createElement(Integer, React.__spread({},  props.commentCount )) ) );          }
        } else {
          commentCount = ( React.createElement(Integer, {props:  props.commentCount}) );        }
      }
      var video;
      if( props.video ){
        if( props.video instanceof Array ){
          video = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.video ){
            video.push( ( React.createElement(VideoObject, React.__spread({},  props.video )) ) );          }
        } else {
          video = ( React.createElement(VideoObject, {props:  props.video}) );        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.typicalAgeRange ){
            typicalAgeRange.push( ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) ) );
          }
        } else {
            typicalAgeRange = ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) );
        }
      }
      var duration;
      if( props.duration ){
        if( props.duration instanceof Array ){
          duration = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.duration ){
            duration.push( ( React.createElement(Duration, React.__spread({},  props.duration )) ) );          }
        } else {
          duration = ( React.createElement(Duration, {props:  props.duration}) );        }
      }
      var discussionUrl;
      if( props.discussionUrl ){
        if( props.discussionUrl instanceof Array ){
          discussionUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.discussionUrl ){
            discussionUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. discussionUrl is a URL."}) ) );
          }
        } else {
            discussionUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. discussionUrl is a URL."}) );
        }
      }
      var productionCompany;
      if( props.productionCompany ){
        if( props.productionCompany instanceof Array ){
          productionCompany = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.productionCompany ){
            productionCompany.push( ( React.createElement(Organization, React.__spread({},  props.productionCompany )) ) );          }
        } else {
          productionCompany = ( React.createElement(Organization, {props:  props.productionCompany}) );        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.review ){
            review.push( ( React.createElement(Review, React.__spread({},  props.review )) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var isFamilyFriendly;
      if( props.isFamilyFriendly ){
        if( props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isFamilyFriendly ){
            isFamilyFriendly.push( ( React.createElement(Boolean, React.__spread({},  props.isFamilyFriendly )) ) );          }
        } else {
          isFamilyFriendly = ( React.createElement(Boolean, {props:  props.isFamilyFriendly}) );        }
      }
      var version;
      if( props.version ){
        if( props.version instanceof Array ){
          version = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.version ){
            version.push( ( React.createElement("div", {"data-advice": "Put your HTML here. version is a Number."}) ) );
          }
        } else {
            version = ( React.createElement("div", {"data-advice": "Put your HTML here. version is a Number."}) );
        }
      }
      var provider;
      if( props.provider ){
        if( props.provider instanceof Array ){
          provider = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.provider ){
            provider.push( ( React.createElement("div", {"data-advice": "Put your HTML here. provider is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            provider = ( React.createElement("div", {"data-advice": "Put your HTML here. provider is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var isPartOf;
      if( props.isPartOf ){
        if( props.isPartOf instanceof Array ){
          isPartOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isPartOf ){
            isPartOf.push( ( React.createElement(CreativeWork, React.__spread({},  props.isPartOf )) ) );          }
        } else {
          isPartOf = ( React.createElement(CreativeWork, {props:  props.isPartOf}) );        }
      }
      var accessibilityHazard;
      if( props.accessibilityHazard ){
        if( props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.accessibilityHazard ){
            accessibilityHazard.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityHazard is a Text."}) ) );
          }
        } else {
            accessibilityHazard = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityHazard is a Text."}) );
        }
      }
      var contentSize;
      if( props.contentSize ){
        if( props.contentSize instanceof Array ){
          contentSize = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contentSize ){
            contentSize.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contentSize is a Text."}) ) );
          }
        } else {
            contentSize = ( React.createElement("div", {"data-advice": "Put your HTML here. contentSize is a Text."}) );
        }
      }
      var contentUrl;
      if( props.contentUrl ){
        if( props.contentUrl instanceof Array ){
          contentUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contentUrl ){
            contentUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contentUrl is a URL."}) ) );
          }
        } else {
            contentUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. contentUrl is a URL."}) );
        }
      }
      var educationalAlignment;
      if( props.educationalAlignment ){
        if( props.educationalAlignment instanceof Array ){
          educationalAlignment = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.educationalAlignment ){
            educationalAlignment.push( ( React.createElement(AlignmentObject, React.__spread({},  props.educationalAlignment )) ) );          }
        } else {
          educationalAlignment = ( React.createElement(AlignmentObject, {props:  props.educationalAlignment}) );        }
      }
      var genre;
      if( props.genre ){
        if( props.genre instanceof Array ){
          genre = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.genre ){
            genre.push( ( React.createElement("div", {"data-advice": "Put your HTML here. genre is a Text."}) ) );
          }
        } else {
            genre = ( React.createElement("div", {"data-advice": "Put your HTML here. genre is a Text."}) );
        }
      }
      var bitrate;
      if( props.bitrate ){
        if( props.bitrate instanceof Array ){
          bitrate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.bitrate ){
            bitrate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. bitrate is a Text."}) ) );
          }
        } else {
            bitrate = ( React.createElement("div", {"data-advice": "Put your HTML here. bitrate is a Text."}) );
        }
      }
      var publisher;
      if( props.publisher ){
        if( props.publisher instanceof Array ){
          publisher = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.publisher ){
            publisher.push( ( React.createElement(Organization, React.__spread({},  props.publisher )) ) );          }
        } else {
          publisher = ( React.createElement(Organization, {props:  props.publisher}) );        }
      }
      var about;
      if( props.about ){
        if( props.about instanceof Array ){
          about = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.about ){
            about.push( ( React.createElement(Thing, React.__spread({},  props.about )) ) );          }
        } else {
          about = ( React.createElement(Thing, {props:  props.about}) );        }
      }
      var license;
      if( props.license ){
        if( props.license instanceof Array ){
          license = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.license ){
            license.push( ( React.createElement("div", {"data-advice": "Put your HTML here. license is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            license = ( React.createElement("div", {"data-advice": "Put your HTML here. license is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var workExample;
      if( props.workExample ){
        if( props.workExample instanceof Array ){
          workExample = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.workExample ){
            workExample.push( ( React.createElement(CreativeWork, React.__spread({},  props.workExample )) ) );          }
        } else {
          workExample = ( React.createElement(CreativeWork, {props:  props.workExample}) );        }
      }
      var encodingFormat;
      if( props.encodingFormat ){
        if( props.encodingFormat instanceof Array ){
          encodingFormat = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.encodingFormat ){
            encodingFormat.push( ( React.createElement("div", {"data-advice": "Put your HTML here. encodingFormat is a Text."}) ) );
          }
        } else {
            encodingFormat = ( React.createElement("div", {"data-advice": "Put your HTML here. encodingFormat is a Text."}) );
        }
      }
      var mentions;
      if( props.mentions ){
        if( props.mentions instanceof Array ){
          mentions = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mentions ){
            mentions.push( ( React.createElement(Thing, React.__spread({},  props.mentions )) ) );          }
        } else {
          mentions = ( React.createElement(Thing, {props:  props.mentions}) );        }
      }
      var comment;
      if( props.comment ){
        if( props.comment instanceof Array ){
          comment = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.comment ){
            comment.push( ( React.createElement(Comment, React.__spread({},  props.comment )) ) );          }
        } else {
          comment = ( React.createElement(Comment, {props:  props.comment}) );        }
      }
      var isBasedOnUrl;
      if( props.isBasedOnUrl ){
        if( props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isBasedOnUrl ){
            isBasedOnUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. isBasedOnUrl is a URL."}) ) );
          }
        } else {
            isBasedOnUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. isBasedOnUrl is a URL."}) );
        }
      }
      var encoding;
      if( props.encoding ){
        if( props.encoding instanceof Array ){
          encoding = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.encoding ){
            encoding.push( ( React.createElement(MediaObject, React.__spread({},  props.encoding )) ) );          }
        } else {
          encoding = ( React.createElement(MediaObject, {props:  props.encoding}) );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.height ){
            height.push( ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            height = ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, React.__spread({},  props.aggregateRating )) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var contributor;
      if( props.contributor ){
        if( props.contributor instanceof Array ){
          contributor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contributor ){
            contributor.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contributor is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            contributor = ( React.createElement("div", {"data-advice": "Put your HTML here. contributor is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var thumbnailUrl;
      if( props.thumbnailUrl ){
        if( props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.thumbnailUrl ){
            thumbnailUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. thumbnailUrl is a URL."}) ) );
          }
        } else {
            thumbnailUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. thumbnailUrl is a URL."}) );
        }
      }
      var mainEntity;
      if( props.mainEntity ){
        if( props.mainEntity instanceof Array ){
          mainEntity = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntity ){
            mainEntity.push( ( React.createElement(Thing, React.__spread({},  props.mainEntity )) ) );          }
        } else {
          mainEntity = ( React.createElement(Thing, {props:  props.mainEntity}) );        }
      }
      var schemaVersion;
      if( props.schemaVersion ){
        if( props.schemaVersion instanceof Array ){
          schemaVersion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.schemaVersion ){
            schemaVersion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. schemaVersion is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            schemaVersion = ( React.createElement("div", {"data-advice": "Put your HTML here. schemaVersion is a Text or" + ' ' +
"URL."}) );
        }
      }
      var accessibilityFeature;
      if( props.accessibilityFeature ){
        if( props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.accessibilityFeature ){
            accessibilityFeature.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityFeature is a Text."}) ) );
          }
        } else {
            accessibilityFeature = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityFeature is a Text."}) );
        }
      }
      var interactivityType;
      if( props.interactivityType ){
        if( props.interactivityType instanceof Array ){
          interactivityType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.interactivityType ){
            interactivityType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. interactivityType is a Text."}) ) );
          }
        } else {
            interactivityType = ( React.createElement("div", {"data-advice": "Put your HTML here. interactivityType is a Text."}) );
        }
      }
      var publication;
      if( props.publication ){
        if( props.publication instanceof Array ){
          publication = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.publication ){
            publication.push( ( React.createElement(PublicationEvent, React.__spread({},  props.publication )) ) );          }
        } else {
          publication = ( React.createElement(PublicationEvent, {props:  props.publication}) );        }
      }
      var width;
      if( props.width ){
        if( props.width instanceof Array ){
          width = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.width ){
            width.push( ( React.createElement("div", {"data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            width = ( React.createElement("div", {"data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var requiresSubscription;
      if( props.requiresSubscription ){
        if( props.requiresSubscription instanceof Array ){
          requiresSubscription = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.requiresSubscription ){
            requiresSubscription.push( ( React.createElement(Boolean, React.__spread({},  props.requiresSubscription )) ) );          }
        } else {
          requiresSubscription = ( React.createElement(Boolean, {props:  props.requiresSubscription}) );        }
      }
      var editor;
      if( props.editor ){
        if( props.editor instanceof Array ){
          editor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.editor ){
            editor.push( ( React.createElement(Person, React.__spread({},  props.editor )) ) );          }
        } else {
          editor = ( React.createElement(Person, {props:  props.editor}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var recordedAt;
      if( props.recordedAt ){
        if( props.recordedAt instanceof Array ){
          recordedAt = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.recordedAt ){
            recordedAt.push( ( React.createElement(Event, React.__spread({},  props.recordedAt )) ) );          }
        } else {
          recordedAt = ( React.createElement(Event, {props:  props.recordedAt}) );        }
      }
      var hasPart;
      if( props.hasPart ){
        if( props.hasPart instanceof Array ){
          hasPart = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.hasPart ){
            hasPart.push( ( React.createElement(CreativeWork, React.__spread({},  props.hasPart )) ) );          }
        } else {
          hasPart = ( React.createElement(CreativeWork, {props:  props.hasPart}) );        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.award ){
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
          }
        } else {
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
        }
      }
      var exampleOfWork;
      if( props.exampleOfWork ){
        if( props.exampleOfWork instanceof Array ){
          exampleOfWork = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.exampleOfWork ){
            exampleOfWork.push( ( React.createElement(CreativeWork, React.__spread({},  props.exampleOfWork )) ) );          }
        } else {
          exampleOfWork = ( React.createElement(CreativeWork, {props:  props.exampleOfWork}) );        }
      }
      var copyrightHolder;
      if( props.copyrightHolder ){
        if( props.copyrightHolder instanceof Array ){
          copyrightHolder = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.copyrightHolder ){
            copyrightHolder.push( ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightHolder is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            copyrightHolder = ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightHolder is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var accessibilityAPI;
      if( props.accessibilityAPI ){
        if( props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.accessibilityAPI ){
            accessibilityAPI.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityAPI is a Text."}) ) );
          }
        } else {
            accessibilityAPI = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityAPI is a Text."}) );
        }
      }
      var learningResourceType;
      if( props.learningResourceType ){
        if( props.learningResourceType instanceof Array ){
          learningResourceType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.learningResourceType ){
            learningResourceType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. learningResourceType is a Text."}) ) );
          }
        } else {
            learningResourceType = ( React.createElement("div", {"data-advice": "Put your HTML here. learningResourceType is a Text."}) );
        }
      }
      var sourceOrganization;
      if( props.sourceOrganization ){
        if( props.sourceOrganization instanceof Array ){
          sourceOrganization = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sourceOrganization ){
            sourceOrganization.push( ( React.createElement(Organization, React.__spread({},  props.sourceOrganization )) ) );          }
        } else {
          sourceOrganization = ( React.createElement(Organization, {props:  props.sourceOrganization}) );        }
      }
      var regionsAllowed;
      if( props.regionsAllowed ){
        if( props.regionsAllowed instanceof Array ){
          regionsAllowed = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.regionsAllowed ){
            regionsAllowed.push( ( React.createElement(Place, React.__spread({},  props.regionsAllowed )) ) );          }
        } else {
          regionsAllowed = ( React.createElement(Place, {props:  props.regionsAllowed}) );        }
      }
      var inLanguage;
      if( props.inLanguage ){
        if( props.inLanguage instanceof Array ){
          inLanguage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.inLanguage ){
            inLanguage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Text or" + ' ' +
"Language."}) ) );
          }
        } else {
            inLanguage = ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Text or" + ' ' +
"Language."}) );
        }
      }
      var citation;
      if( props.citation ){
        if( props.citation instanceof Array ){
          citation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.citation ){
            citation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. citation is a Text or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            citation = ( React.createElement("div", {"data-advice": "Put your HTML here. citation is a Text or" + ' ' +
"CreativeWork."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var author;
      if( props.author ){
        if( props.author instanceof Array ){
          author = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.author ){
            author.push( ( React.createElement("div", {"data-advice": "Put your HTML here. author is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            author = ( React.createElement("div", {"data-advice": "Put your HTML here. author is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var dateModified;
      if( props.dateModified ){
        if( props.dateModified instanceof Array ){
          dateModified = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.dateModified ){
            dateModified.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dateModified is a Date."}) ) );
          }
        } else {
            dateModified = ( React.createElement("div", {"data-advice": "Put your HTML here. dateModified is a Date."}) );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var expires;
      if( props.expires ){
        if( props.expires instanceof Array ){
          expires = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.expires ){
            expires.push( ( React.createElement("div", {"data-advice": "Put your HTML here. expires is a Date."}) ) );
          }
        } else {
            expires = ( React.createElement("div", {"data-advice": "Put your HTML here. expires is a Date."}) );
        }
      }
      var releasedEvent;
      if( props.releasedEvent ){
        if( props.releasedEvent instanceof Array ){
          releasedEvent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.releasedEvent ){
            releasedEvent.push( ( React.createElement(PublicationEvent, React.__spread({},  props.releasedEvent )) ) );          }
        } else {
          releasedEvent = ( React.createElement(PublicationEvent, {props:  props.releasedEvent}) );        }
      }
      var translator;
      if( props.translator ){
        if( props.translator instanceof Array ){
          translator = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.translator ){
            translator.push( ( React.createElement("div", {"data-advice": "Put your HTML here. translator is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            translator = ( React.createElement("div", {"data-advice": "Put your HTML here. translator is a Organization or" + ' ' +
"Person."}) );
        }
      }
      var uploadDate;
      if( props.uploadDate ){
        if( props.uploadDate instanceof Array ){
          uploadDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.uploadDate ){
            uploadDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. uploadDate is a Date."}) ) );
          }
        } else {
            uploadDate = ( React.createElement("div", {"data-advice": "Put your HTML here. uploadDate is a Date."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var contentLocation;
      if( props.contentLocation ){
        if( props.contentLocation instanceof Array ){
          contentLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contentLocation ){
            contentLocation.push( ( React.createElement(Place, React.__spread({},  props.contentLocation )) ) );          }
        } else {
          contentLocation = ( React.createElement(Place, {props:  props.contentLocation}) );        }
      }
      var timeRequired;
      if( props.timeRequired ){
        if( props.timeRequired instanceof Array ){
          timeRequired = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.timeRequired ){
            timeRequired.push( ( React.createElement(Duration, React.__spread({},  props.timeRequired )) ) );          }
        } else {
          timeRequired = ( React.createElement(Duration, {props:  props.timeRequired}) );        }
      }
      var playerType;
      if( props.playerType ){
        if( props.playerType instanceof Array ){
          playerType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.playerType ){
            playerType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. playerType is a Text."}) ) );
          }
        } else {
            playerType = ( React.createElement("div", {"data-advice": "Put your HTML here. playerType is a Text."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var position;
      if( props.position ){
        if( props.position instanceof Array ){
          position = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.position ){
            position.push( ( React.createElement("div", {"data-advice": "Put your HTML here. position is a Text or" + ' ' +
"Integer."}) ) );
          }
        } else {
            position = ( React.createElement("div", {"data-advice": "Put your HTML here. position is a Text or" + ' ' +
"Integer."}) );
        }
      }
      var audio;
      if( props.audio ){
        if( props.audio instanceof Array ){
          audio = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.audio ){
            audio.push( ( React.createElement(AudioObject, React.__spread({},  props.audio )) ) );          }
        } else {
          audio = ( React.createElement(AudioObject, {props:  props.audio}) );        }
      }
      return (React.createElement("div", {title: "MediaObject", className: "MediaObject entity"}, 
         educationalUse, 
         producer, 
         text, 
         datePublished, 
         alternativeHeadline, 
         accountablePerson, 
         keywords, 
         headline, 
         character, 
         contentRating, 
         associatedArticle, 
         offers, 
         publishingPrinciples, 
         embedUrl, 
         dateCreated, 
         potentialAction, 
         name, 
         associatedMedia, 
         audience, 
         accessibilityControl, 
         copyrightYear, 
         encodesCreativeWork, 
         creator, 
         commentCount, 
         video, 
         typicalAgeRange, 
         duration, 
         discussionUrl, 
         productionCompany, 
         review, 
         isFamilyFriendly, 
         version, 
         provider, 
         isPartOf, 
         accessibilityHazard, 
         contentSize, 
         contentUrl, 
         educationalAlignment, 
         genre, 
         bitrate, 
         publisher, 
         about, 
         license, 
         workExample, 
         encodingFormat, 
         mentions, 
         comment, 
         isBasedOnUrl, 
         encoding, 
         sameAs, 
         image, 
         height, 
         aggregateRating, 
         contributor, 
         thumbnailUrl, 
         mainEntity, 
         schemaVersion, 
         accessibilityFeature, 
         interactivityType, 
         publication, 
         width, 
         requiresSubscription, 
         editor, 
         mainEntityOfPage, 
         recordedAt, 
         hasPart, 
         award, 
         exampleOfWork, 
         copyrightHolder, 
         accessibilityAPI, 
         learningResourceType, 
         sourceOrganization, 
         regionsAllowed, 
         inLanguage, 
         citation, 
         additionalType, 
         author, 
         dateModified, 
         description, 
         expires, 
         releasedEvent, 
         translator, 
         uploadDate, 
         alternateName, 
         contentLocation, 
         timeRequired, 
         playerType, 
         url, 
         position, 
         audio 
     ));
    }
  });
});
