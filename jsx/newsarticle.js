/* Thing > CreativeWork > Article > NewsArticle - A news article.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './offer', './imageobject', './aggregaterating', './integer', './creativework', './review', './audioobject', './language', './person', './publicationevent', './place', './action', './organization', './comment', './thing', './audience', './boolean', './duration', './event'], function(React, AlignmentObject, VideoObject, MediaObject, Offer, ImageObject, AggregateRating, Integer, CreativeWork, Review, AudioObject, Language, Person, PublicationEvent, Place, Action, Organization, Comment, Thing, Audience, Boolean, Duration, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var comment;
      if( props.comment ){
        if( props.comment instanceof Array ){
          comment = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.comment ){
            comment.push( ( <Comment {...props.comment } /> ) );          }
        } else {
          comment = ( <Comment props={ props.comment } /> );        }
      }
      var articleBody;
      if( props.articleBody ){
        if( props.articleBody instanceof Array ){
          articleBody = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.articleBody ){
            articleBody.push( ( <div data-advice='Put your HTML here. articleBody is a Text.'></div> ) );
          }
        } else {
            articleBody = ( <div data-advice='Put your HTML here. articleBody is a Text.'></div> );
        }
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
      var pageEnd;
      if( props.pageEnd ){
        if( props.pageEnd instanceof Array ){
          pageEnd = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.pageEnd ){
            pageEnd.push( ( <div data-advice='Put your HTML here. pageEnd is a Text or
Integer.'></div> ) );
          }
        } else {
            pageEnd = ( <div data-advice='Put your HTML here. pageEnd is a Text or
Integer.'></div> );
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
      var associatedMedia;
      if( props.associatedMedia ){
        if( props.associatedMedia instanceof Array ){
          associatedMedia = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.associatedMedia ){
            associatedMedia.push( ( <MediaObject {...props.associatedMedia } /> ) );          }
        } else {
          associatedMedia = ( <MediaObject props={ props.associatedMedia } /> );        }
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
      var video;
      if( props.video ){
        if( props.video instanceof Array ){
          video = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.video ){
            video.push( ( <VideoObject {...props.video } /> ) );          }
        } else {
          video = ( <VideoObject props={ props.video } /> );        }
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
      var articleSection;
      if( props.articleSection ){
        if( props.articleSection instanceof Array ){
          articleSection = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.articleSection ){
            articleSection.push( ( <div data-advice='Put your HTML here. articleSection is a Text.'></div> ) );
          }
        } else {
            articleSection = ( <div data-advice='Put your HTML here. articleSection is a Text.'></div> );
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
      var dateline;
      if( props.dateline ){
        if( props.dateline instanceof Array ){
          dateline = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.dateline ){
            dateline.push( ( <div data-advice='Put your HTML here. dateline is a Text.'></div> ) );
          }
        } else {
            dateline = ( <div data-advice='Put your HTML here. dateline is a Text.'></div> );
        }
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
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.review ){
            review.push( ( <Review {...props.review } /> ) );          }
        } else {
          review = ( <Review props={ props.review } /> );        }
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
      var exampleOfWork;
      if( props.exampleOfWork ){
        if( props.exampleOfWork instanceof Array ){
          exampleOfWork = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.exampleOfWork ){
            exampleOfWork.push( ( <CreativeWork {...props.exampleOfWork } /> ) );          }
        } else {
          exampleOfWork = ( <CreativeWork props={ props.exampleOfWork } /> );        }
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
      var recordedAt;
      if( props.recordedAt ){
        if( props.recordedAt instanceof Array ){
          recordedAt = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.recordedAt ){
            recordedAt.push( ( <Event {...props.recordedAt } /> ) );          }
        } else {
          recordedAt = ( <Event props={ props.recordedAt } /> );        }
      }
      var pageStart;
      if( props.pageStart ){
        if( props.pageStart instanceof Array ){
          pageStart = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.pageStart ){
            pageStart.push( ( <div data-advice='Put your HTML here. pageStart is a Text or
Integer.'></div> ) );
          }
        } else {
            pageStart = ( <div data-advice='Put your HTML here. pageStart is a Text or
Integer.'></div> );
        }
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
      var timeRequired;
      if( props.timeRequired ){
        if( props.timeRequired instanceof Array ){
          timeRequired = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.timeRequired ){
            timeRequired.push( ( <Duration {...props.timeRequired } /> ) );          }
        } else {
          timeRequired = ( <Duration props={ props.timeRequired } /> );        }
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
      var educationalAlignment;
      if( props.educationalAlignment ){
        if( props.educationalAlignment instanceof Array ){
          educationalAlignment = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.educationalAlignment ){
            educationalAlignment.push( ( <AlignmentObject {...props.educationalAlignment } /> ) );          }
        } else {
          educationalAlignment = ( <AlignmentObject props={ props.educationalAlignment } /> );        }
      }
      var printEdition;
      if( props.printEdition ){
        if( props.printEdition instanceof Array ){
          printEdition = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.printEdition ){
            printEdition.push( ( <div data-advice='Put your HTML here. printEdition is a Text.'></div> ) );
          }
        } else {
            printEdition = ( <div data-advice='Put your HTML here. printEdition is a Text.'></div> );
        }
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
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.offers ){
            offers.push( ( <Offer {...props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ props.offers } /> );        }
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
      var releasedEvent;
      if( props.releasedEvent ){
        if( props.releasedEvent instanceof Array ){
          releasedEvent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.releasedEvent ){
            releasedEvent.push( ( <PublicationEvent {...props.releasedEvent } /> ) );          }
        } else {
          releasedEvent = ( <PublicationEvent props={ props.releasedEvent } /> );        }
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
      var printColumn;
      if( props.printColumn ){
        if( props.printColumn instanceof Array ){
          printColumn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.printColumn ){
            printColumn.push( ( <div data-advice='Put your HTML here. printColumn is a Text.'></div> ) );
          }
        } else {
            printColumn = ( <div data-advice='Put your HTML here. printColumn is a Text.'></div> );
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
      var publication;
      if( props.publication ){
        if( props.publication instanceof Array ){
          publication = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.publication ){
            publication.push( ( <PublicationEvent {...props.publication } /> ) );          }
        } else {
          publication = ( <PublicationEvent props={ props.publication } /> );        }
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
      var publisher;
      if( props.publisher ){
        if( props.publisher instanceof Array ){
          publisher = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.publisher ){
            publisher.push( ( <Organization {...props.publisher } /> ) );          }
        } else {
          publisher = ( <Organization props={ props.publisher } /> );        }
      }
      var pagination;
      if( props.pagination ){
        if( props.pagination instanceof Array ){
          pagination = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.pagination ){
            pagination.push( ( <div data-advice='Put your HTML here. pagination is a Text.'></div> ) );
          }
        } else {
            pagination = ( <div data-advice='Put your HTML here. pagination is a Text.'></div> );
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
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
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
      var sourceOrganization;
      if( props.sourceOrganization ){
        if( props.sourceOrganization instanceof Array ){
          sourceOrganization = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sourceOrganization ){
            sourceOrganization.push( ( <Organization {...props.sourceOrganization } /> ) );          }
        } else {
          sourceOrganization = ( <Organization props={ props.sourceOrganization } /> );        }
      }
      var printSection;
      if( props.printSection ){
        if( props.printSection instanceof Array ){
          printSection = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.printSection ){
            printSection.push( ( <div data-advice='Put your HTML here. printSection is a Text.'></div> ) );
          }
        } else {
            printSection = ( <div data-advice='Put your HTML here. printSection is a Text.'></div> );
        }
      }
      var wordCount;
      if( props.wordCount ){
        if( props.wordCount instanceof Array ){
          wordCount = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.wordCount ){
            wordCount.push( ( <Integer {...props.wordCount } /> ) );          }
        } else {
          wordCount = ( <Integer props={ props.wordCount } /> );        }
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
      var encoding;
      if( props.encoding ){
        if( props.encoding instanceof Array ){
          encoding = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.encoding ){
            encoding.push( ( <MediaObject {...props.encoding } /> ) );          }
        } else {
          encoding = ( <MediaObject props={ props.encoding } /> );        }
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
      var mentions;
      if( props.mentions ){
        if( props.mentions instanceof Array ){
          mentions = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mentions ){
            mentions.push( ( <Thing {...props.mentions } /> ) );          }
        } else {
          mentions = ( <Thing props={ props.mentions } /> );        }
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
      var printPage;
      if( props.printPage ){
        if( props.printPage instanceof Array ){
          printPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.printPage ){
            printPage.push( ( <div data-advice='Put your HTML here. printPage is a Text.'></div> ) );
          }
        } else {
            printPage = ( <div data-advice='Put your HTML here. printPage is a Text.'></div> );
        }
      }
      return (<div title='NewsArticle' className='NewsArticle entity'>
        { comment }
        { articleBody }
        { version }
        { producer }
        { copyrightYear }
        { publishingPrinciples }
        { text }
        { image }
        { citation }
        { sameAs }
        { pageEnd }
        { commentCount }
        { associatedMedia }
        { alternativeHeadline }
        { accountablePerson }
        { video }
        { url }
        { typicalAgeRange }
        { contributor }
        { articleSection }
        { thumbnailUrl }
        { mainEntity }
        { alternateName }
        { accessibilityFeature }
        { interactivityType }
        { learningResourceType }
        { discussionUrl }
        { author }
        { headline }
        { dateline }
        { creator }
        { character }
        { contentRating }
        { review }
        { hasPart }
        { exampleOfWork }
        { editor }
        { provider }
        { isPartOf }
        { recordedAt }
        { pageStart }
        { accessibilityHazard }
        { dateModified }
        { additionalType }
        { timeRequired }
        { mainEntityOfPage }
        { description }
        { educationalAlignment }
        { printEdition }
        { about }
        { award }
        { dateCreated }
        { translator }
        { offers }
        { copyrightHolder }
        { releasedEvent }
        { position }
        { genre }
        { schemaVersion }
        { datePublished }
        { printColumn }
        { contentLocation }
        { educationalUse }
        { publication }
        { accessibilityAPI }
        { publisher }
        { pagination }
        { potentialAction }
        { name }
        { license }
        { aggregateRating }
        { workExample }
        { sourceOrganization }
        { printSection }
        { wordCount }
        { inLanguage }
        { encoding }
        { isFamilyFriendly }
        { audience }
        { accessibilityControl }
        { keywords }
        { mentions }
        { audio }
        { isBasedOnUrl }
        { printPage }
     </div>);
    }
  });
});
