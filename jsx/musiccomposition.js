/* Thing > CreativeWork > MusicComposition - A musical composition.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './offer', './imageobject', './aggregaterating', './integer', './creativework', './review', './audioobject', './musicrecording', './language', './thing', './publicationevent', './place', './action', './organization', './comment', './person', './audience', './musiccomposition', './boolean', './duration', './event'], function(React, AlignmentObject, VideoObject, MediaObject, Offer, ImageObject, AggregateRating, Integer, CreativeWork, Review, AudioObject, MusicRecording, Language, Thing, PublicationEvent, Place, Action, Organization, Comment, Person, Audience, MusicComposition, Boolean, Duration, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var comment;
      if( this.props.comment ){
        if( this.props.comment instanceof Array ){
          comment = [(<p>comment:</p> )];
          for( i in this.props.comment ){
            comment.push( ( <Comment props={ this.props.comment } /> ) );          }
        } else {
          comment = ( <Comment props={ this.props.comment } /> );        }
      }
      var copyrightYear;
      if( this.props.copyrightYear ){
        if( this.props.copyrightYear instanceof Array ){
          copyrightYear = [(<p>copyrightYear:</p> )];
          for( i in this.props.copyrightYear ){
            copyrightYear.push( ( <div class='copyrightYear'></div> ) );
          }
        } else {
          copyrightYear = ( <div class='copyrightYear'>{this.props.copyrightYear}</div> );
        }
      }
      var musicArrangement;
      if( this.props.musicArrangement ){
        if( this.props.musicArrangement instanceof Array ){
          musicArrangement = [(<p>musicArrangement:</p> )];
          for( i in this.props.musicArrangement ){
            musicArrangement.push( ( <MusicComposition props={ this.props.musicArrangement } /> ) );          }
        } else {
          musicArrangement = ( <MusicComposition props={ this.props.musicArrangement } /> );        }
      }
      var iswcCode;
      if( this.props.iswcCode ){
        if( this.props.iswcCode instanceof Array ){
          iswcCode = [(<p>iswcCode:</p> )];
          for( i in this.props.iswcCode ){
            iswcCode.push( ( <div class='iswcCode'></div> ) );
          }
        } else {
          iswcCode = ( <div class='iswcCode'>{this.props.iswcCode}</div> );
        }
      }
      var producer;
      if( this.props.producer ){
        if( this.props.producer instanceof Array ){
          producer = [(<p>producer:</p> )];
          for( i in this.props.producer ){
            producer.push( ( <div class='producer'></div> ) );
          }
        } else {
          producer = ( <div class='producer'>{this.props.producer}</div> );
        }
      }
      var creator;
      if( this.props.creator ){
        if( this.props.creator instanceof Array ){
          creator = [(<p>creator:</p> )];
          for( i in this.props.creator ){
            creator.push( ( <div class='creator'></div> ) );
          }
        } else {
          creator = ( <div class='creator'>{this.props.creator}</div> );
        }
      }
      var publishingPrinciples;
      if( this.props.publishingPrinciples ){
        if( this.props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [(<p>publishingPrinciples:</p> )];
          for( i in this.props.publishingPrinciples ){
            publishingPrinciples.push( ( <div class='publishingPrinciples'></div> ) );
          }
        } else {
          publishingPrinciples = ( <div class='publishingPrinciples'>{this.props.publishingPrinciples}</div> );
        }
      }
      var text;
      if( this.props.text ){
        if( this.props.text instanceof Array ){
          text = [(<p>text:</p> )];
          for( i in this.props.text ){
            text.push( ( <div class='text'></div> ) );
          }
        } else {
          text = ( <div class='text'>{this.props.text}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var lyricist;
      if( this.props.lyricist ){
        if( this.props.lyricist instanceof Array ){
          lyricist = [(<p>lyricist:</p> )];
          for( i in this.props.lyricist ){
            lyricist.push( ( <Person props={ this.props.lyricist } /> ) );          }
        } else {
          lyricist = ( <Person props={ this.props.lyricist } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var musicCompositionForm;
      if( this.props.musicCompositionForm ){
        if( this.props.musicCompositionForm instanceof Array ){
          musicCompositionForm = [(<p>musicCompositionForm:</p> )];
          for( i in this.props.musicCompositionForm ){
            musicCompositionForm.push( ( <div class='musicCompositionForm'></div> ) );
          }
        } else {
          musicCompositionForm = ( <div class='musicCompositionForm'>{this.props.musicCompositionForm}</div> );
        }
      }
      var commentCount;
      if( this.props.commentCount ){
        if( this.props.commentCount instanceof Array ){
          commentCount = [(<p>commentCount:</p> )];
          for( i in this.props.commentCount ){
            commentCount.push( ( <Integer props={ this.props.commentCount } /> ) );          }
        } else {
          commentCount = ( <Integer props={ this.props.commentCount } /> );        }
      }
      var associatedMedia;
      if( this.props.associatedMedia ){
        if( this.props.associatedMedia instanceof Array ){
          associatedMedia = [(<p>associatedMedia:</p> )];
          for( i in this.props.associatedMedia ){
            associatedMedia.push( ( <MediaObject props={ this.props.associatedMedia } /> ) );          }
        } else {
          associatedMedia = ( <MediaObject props={ this.props.associatedMedia } /> );        }
      }
      var alternativeHeadline;
      if( this.props.alternativeHeadline ){
        if( this.props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [(<p>alternativeHeadline:</p> )];
          for( i in this.props.alternativeHeadline ){
            alternativeHeadline.push( ( <div class='alternativeHeadline'></div> ) );
          }
        } else {
          alternativeHeadline = ( <div class='alternativeHeadline'>{this.props.alternativeHeadline}</div> );
        }
      }
      var accountablePerson;
      if( this.props.accountablePerson ){
        if( this.props.accountablePerson instanceof Array ){
          accountablePerson = [(<p>accountablePerson:</p> )];
          for( i in this.props.accountablePerson ){
            accountablePerson.push( ( <Person props={ this.props.accountablePerson } /> ) );          }
        } else {
          accountablePerson = ( <Person props={ this.props.accountablePerson } /> );        }
      }
      var video;
      if( this.props.video ){
        if( this.props.video instanceof Array ){
          video = [(<p>video:</p> )];
          for( i in this.props.video ){
            video.push( ( <VideoObject props={ this.props.video } /> ) );          }
        } else {
          video = ( <VideoObject props={ this.props.video } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var composer;
      if( this.props.composer ){
        if( this.props.composer instanceof Array ){
          composer = [(<p>composer:</p> )];
          for( i in this.props.composer ){
            composer.push( ( <div class='composer'></div> ) );
          }
        } else {
          composer = ( <div class='composer'>{this.props.composer}</div> );
        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [(<p>typicalAgeRange:</p> )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( <div class='typicalAgeRange'></div> ) );
          }
        } else {
          typicalAgeRange = ( <div class='typicalAgeRange'>{this.props.typicalAgeRange}</div> );
        }
      }
      var contributor;
      if( this.props.contributor ){
        if( this.props.contributor instanceof Array ){
          contributor = [(<p>contributor:</p> )];
          for( i in this.props.contributor ){
            contributor.push( ( <div class='contributor'></div> ) );
          }
        } else {
          contributor = ( <div class='contributor'>{this.props.contributor}</div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var thumbnailUrl;
      if( this.props.thumbnailUrl ){
        if( this.props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [(<p>thumbnailUrl:</p> )];
          for( i in this.props.thumbnailUrl ){
            thumbnailUrl.push( ( <div class='thumbnailUrl'></div> ) );
          }
        } else {
          thumbnailUrl = ( <div class='thumbnailUrl'>{this.props.thumbnailUrl}</div> );
        }
      }
      var mainEntity;
      if( this.props.mainEntity ){
        if( this.props.mainEntity instanceof Array ){
          mainEntity = [(<p>mainEntity:</p> )];
          for( i in this.props.mainEntity ){
            mainEntity.push( ( <Thing props={ this.props.mainEntity } /> ) );          }
        } else {
          mainEntity = ( <Thing props={ this.props.mainEntity } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var accessibilityFeature;
      if( this.props.accessibilityFeature ){
        if( this.props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [(<p>accessibilityFeature:</p> )];
          for( i in this.props.accessibilityFeature ){
            accessibilityFeature.push( ( <div class='accessibilityFeature'></div> ) );
          }
        } else {
          accessibilityFeature = ( <div class='accessibilityFeature'>{this.props.accessibilityFeature}</div> );
        }
      }
      var interactivityType;
      if( this.props.interactivityType ){
        if( this.props.interactivityType instanceof Array ){
          interactivityType = [(<p>interactivityType:</p> )];
          for( i in this.props.interactivityType ){
            interactivityType.push( ( <div class='interactivityType'></div> ) );
          }
        } else {
          interactivityType = ( <div class='interactivityType'>{this.props.interactivityType}</div> );
        }
      }
      var publication;
      if( this.props.publication ){
        if( this.props.publication instanceof Array ){
          publication = [(<p>publication:</p> )];
          for( i in this.props.publication ){
            publication.push( ( <PublicationEvent props={ this.props.publication } /> ) );          }
        } else {
          publication = ( <PublicationEvent props={ this.props.publication } /> );        }
      }
      var discussionUrl;
      if( this.props.discussionUrl ){
        if( this.props.discussionUrl instanceof Array ){
          discussionUrl = [(<p>discussionUrl:</p> )];
          for( i in this.props.discussionUrl ){
            discussionUrl.push( ( <div class='discussionUrl'></div> ) );
          }
        } else {
          discussionUrl = ( <div class='discussionUrl'>{this.props.discussionUrl}</div> );
        }
      }
      var author;
      if( this.props.author ){
        if( this.props.author instanceof Array ){
          author = [(<p>author:</p> )];
          for( i in this.props.author ){
            author.push( ( <div class='author'></div> ) );
          }
        } else {
          author = ( <div class='author'>{this.props.author}</div> );
        }
      }
      var headline;
      if( this.props.headline ){
        if( this.props.headline instanceof Array ){
          headline = [(<p>headline:</p> )];
          for( i in this.props.headline ){
            headline.push( ( <div class='headline'></div> ) );
          }
        } else {
          headline = ( <div class='headline'>{this.props.headline}</div> );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(<p>review:</p> )];
          for( i in this.props.review ){
            review.push( ( <Review props={ this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var encoding;
      if( this.props.encoding ){
        if( this.props.encoding instanceof Array ){
          encoding = [(<p>encoding:</p> )];
          for( i in this.props.encoding ){
            encoding.push( ( <MediaObject props={ this.props.encoding } /> ) );          }
        } else {
          encoding = ( <MediaObject props={ this.props.encoding } /> );        }
      }
      var character;
      if( this.props.character ){
        if( this.props.character instanceof Array ){
          character = [(<p>character:</p> )];
          for( i in this.props.character ){
            character.push( ( <Person props={ this.props.character } /> ) );          }
        } else {
          character = ( <Person props={ this.props.character } /> );        }
      }
      var musicalKey;
      if( this.props.musicalKey ){
        if( this.props.musicalKey instanceof Array ){
          musicalKey = [(<p>musicalKey:</p> )];
          for( i in this.props.musicalKey ){
            musicalKey.push( ( <div class='musicalKey'></div> ) );
          }
        } else {
          musicalKey = ( <div class='musicalKey'>{this.props.musicalKey}</div> );
        }
      }
      var isBasedOnUrl;
      if( this.props.isBasedOnUrl ){
        if( this.props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [(<p>isBasedOnUrl:</p> )];
          for( i in this.props.isBasedOnUrl ){
            isBasedOnUrl.push( ( <div class='isBasedOnUrl'></div> ) );
          }
        } else {
          isBasedOnUrl = ( <div class='isBasedOnUrl'>{this.props.isBasedOnUrl}</div> );
        }
      }
      var hasPart;
      if( this.props.hasPart ){
        if( this.props.hasPart instanceof Array ){
          hasPart = [(<p>hasPart:</p> )];
          for( i in this.props.hasPart ){
            hasPart.push( ( <CreativeWork props={ this.props.hasPart } /> ) );          }
        } else {
          hasPart = ( <CreativeWork props={ this.props.hasPart } /> );        }
      }
      var exampleOfWork;
      if( this.props.exampleOfWork ){
        if( this.props.exampleOfWork instanceof Array ){
          exampleOfWork = [(<p>exampleOfWork:</p> )];
          for( i in this.props.exampleOfWork ){
            exampleOfWork.push( ( <CreativeWork props={ this.props.exampleOfWork } /> ) );          }
        } else {
          exampleOfWork = ( <CreativeWork props={ this.props.exampleOfWork } /> );        }
      }
      var editor;
      if( this.props.editor ){
        if( this.props.editor instanceof Array ){
          editor = [(<p>editor:</p> )];
          for( i in this.props.editor ){
            editor.push( ( <Person props={ this.props.editor } /> ) );          }
        } else {
          editor = ( <Person props={ this.props.editor } /> );        }
      }
      var version;
      if( this.props.version ){
        if( this.props.version instanceof Array ){
          version = [(<p>version:</p> )];
          for( i in this.props.version ){
            version.push( ( <div class='version'></div> ) );
          }
        } else {
          version = ( <div class='version'>{this.props.version}</div> );
        }
      }
      var provider;
      if( this.props.provider ){
        if( this.props.provider instanceof Array ){
          provider = [(<p>provider:</p> )];
          for( i in this.props.provider ){
            provider.push( ( <div class='provider'></div> ) );
          }
        } else {
          provider = ( <div class='provider'>{this.props.provider}</div> );
        }
      }
      var isPartOf;
      if( this.props.isPartOf ){
        if( this.props.isPartOf instanceof Array ){
          isPartOf = [(<p>isPartOf:</p> )];
          for( i in this.props.isPartOf ){
            isPartOf.push( ( <CreativeWork props={ this.props.isPartOf } /> ) );          }
        } else {
          isPartOf = ( <CreativeWork props={ this.props.isPartOf } /> );        }
      }
      var recordedAt;
      if( this.props.recordedAt ){
        if( this.props.recordedAt instanceof Array ){
          recordedAt = [(<p>recordedAt:</p> )];
          for( i in this.props.recordedAt ){
            recordedAt.push( ( <Event props={ this.props.recordedAt } /> ) );          }
        } else {
          recordedAt = ( <Event props={ this.props.recordedAt } /> );        }
      }
      var accessibilityHazard;
      if( this.props.accessibilityHazard ){
        if( this.props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [(<p>accessibilityHazard:</p> )];
          for( i in this.props.accessibilityHazard ){
            accessibilityHazard.push( ( <div class='accessibilityHazard'></div> ) );
          }
        } else {
          accessibilityHazard = ( <div class='accessibilityHazard'>{this.props.accessibilityHazard}</div> );
        }
      }
      var dateModified;
      if( this.props.dateModified ){
        if( this.props.dateModified instanceof Array ){
          dateModified = [(<p>dateModified:</p> )];
          for( i in this.props.dateModified ){
            dateModified.push( ( <div class='dateModified'></div> ) );
          }
        } else {
          dateModified = ( <div class='dateModified'>{this.props.dateModified}</div> );
        }
      }
      var recordedAs;
      if( this.props.recordedAs ){
        if( this.props.recordedAs instanceof Array ){
          recordedAs = [(<p>recordedAs:</p> )];
          for( i in this.props.recordedAs ){
            recordedAs.push( ( <MusicRecording props={ this.props.recordedAs } /> ) );          }
        } else {
          recordedAs = ( <MusicRecording props={ this.props.recordedAs } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var timeRequired;
      if( this.props.timeRequired ){
        if( this.props.timeRequired instanceof Array ){
          timeRequired = [(<p>timeRequired:</p> )];
          for( i in this.props.timeRequired ){
            timeRequired.push( ( <Duration props={ this.props.timeRequired } /> ) );          }
        } else {
          timeRequired = ( <Duration props={ this.props.timeRequired } /> );        }
      }
      var citation;
      if( this.props.citation ){
        if( this.props.citation instanceof Array ){
          citation = [(<p>citation:</p> )];
          for( i in this.props.citation ){
            citation.push( ( <div class='citation'></div> ) );
          }
        } else {
          citation = ( <div class='citation'>{this.props.citation}</div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var educationalAlignment;
      if( this.props.educationalAlignment ){
        if( this.props.educationalAlignment instanceof Array ){
          educationalAlignment = [(<p>educationalAlignment:</p> )];
          for( i in this.props.educationalAlignment ){
            educationalAlignment.push( ( <AlignmentObject props={ this.props.educationalAlignment } /> ) );          }
        } else {
          educationalAlignment = ( <AlignmentObject props={ this.props.educationalAlignment } /> );        }
      }
      var learningResourceType;
      if( this.props.learningResourceType ){
        if( this.props.learningResourceType instanceof Array ){
          learningResourceType = [(<p>learningResourceType:</p> )];
          for( i in this.props.learningResourceType ){
            learningResourceType.push( ( <div class='learningResourceType'></div> ) );
          }
        } else {
          learningResourceType = ( <div class='learningResourceType'>{this.props.learningResourceType}</div> );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [(<p>award:</p> )];
          for( i in this.props.award ){
            award.push( ( <div class='award'></div> ) );
          }
        } else {
          award = ( <div class='award'>{this.props.award}</div> );
        }
      }
      var dateCreated;
      if( this.props.dateCreated ){
        if( this.props.dateCreated instanceof Array ){
          dateCreated = [(<p>dateCreated:</p> )];
          for( i in this.props.dateCreated ){
            dateCreated.push( ( <div class='dateCreated'></div> ) );
          }
        } else {
          dateCreated = ( <div class='dateCreated'>{this.props.dateCreated}</div> );
        }
      }
      var translator;
      if( this.props.translator ){
        if( this.props.translator instanceof Array ){
          translator = [(<p>translator:</p> )];
          for( i in this.props.translator ){
            translator.push( ( <div class='translator'></div> ) );
          }
        } else {
          translator = ( <div class='translator'>{this.props.translator}</div> );
        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [(<p>offers:</p> )];
          for( i in this.props.offers ){
            offers.push( ( <Offer props={ this.props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ this.props.offers } /> );        }
      }
      var copyrightHolder;
      if( this.props.copyrightHolder ){
        if( this.props.copyrightHolder instanceof Array ){
          copyrightHolder = [(<p>copyrightHolder:</p> )];
          for( i in this.props.copyrightHolder ){
            copyrightHolder.push( ( <div class='copyrightHolder'></div> ) );
          }
        } else {
          copyrightHolder = ( <div class='copyrightHolder'>{this.props.copyrightHolder}</div> );
        }
      }
      var releasedEvent;
      if( this.props.releasedEvent ){
        if( this.props.releasedEvent instanceof Array ){
          releasedEvent = [(<p>releasedEvent:</p> )];
          for( i in this.props.releasedEvent ){
            releasedEvent.push( ( <PublicationEvent props={ this.props.releasedEvent } /> ) );          }
        } else {
          releasedEvent = ( <PublicationEvent props={ this.props.releasedEvent } /> );        }
      }
      var position;
      if( this.props.position ){
        if( this.props.position instanceof Array ){
          position = [(<p>position:</p> )];
          for( i in this.props.position ){
            position.push( ( <div class='position'></div> ) );
          }
        } else {
          position = ( <div class='position'>{this.props.position}</div> );
        }
      }
      var firstPerformance;
      if( this.props.firstPerformance ){
        if( this.props.firstPerformance instanceof Array ){
          firstPerformance = [(<p>firstPerformance:</p> )];
          for( i in this.props.firstPerformance ){
            firstPerformance.push( ( <Event props={ this.props.firstPerformance } /> ) );          }
        } else {
          firstPerformance = ( <Event props={ this.props.firstPerformance } /> );        }
      }
      var schemaVersion;
      if( this.props.schemaVersion ){
        if( this.props.schemaVersion instanceof Array ){
          schemaVersion = [(<p>schemaVersion:</p> )];
          for( i in this.props.schemaVersion ){
            schemaVersion.push( ( <div class='schemaVersion'></div> ) );
          }
        } else {
          schemaVersion = ( <div class='schemaVersion'>{this.props.schemaVersion}</div> );
        }
      }
      var datePublished;
      if( this.props.datePublished ){
        if( this.props.datePublished instanceof Array ){
          datePublished = [(<p>datePublished:</p> )];
          for( i in this.props.datePublished ){
            datePublished.push( ( <div class='datePublished'></div> ) );
          }
        } else {
          datePublished = ( <div class='datePublished'>{this.props.datePublished}</div> );
        }
      }
      var contentLocation;
      if( this.props.contentLocation ){
        if( this.props.contentLocation instanceof Array ){
          contentLocation = [(<p>contentLocation:</p> )];
          for( i in this.props.contentLocation ){
            contentLocation.push( ( <Place props={ this.props.contentLocation } /> ) );          }
        } else {
          contentLocation = ( <Place props={ this.props.contentLocation } /> );        }
      }
      var educationalUse;
      if( this.props.educationalUse ){
        if( this.props.educationalUse instanceof Array ){
          educationalUse = [(<p>educationalUse:</p> )];
          for( i in this.props.educationalUse ){
            educationalUse.push( ( <div class='educationalUse'></div> ) );
          }
        } else {
          educationalUse = ( <div class='educationalUse'>{this.props.educationalUse}</div> );
        }
      }
      var accessibilityAPI;
      if( this.props.accessibilityAPI ){
        if( this.props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [(<p>accessibilityAPI:</p> )];
          for( i in this.props.accessibilityAPI ){
            accessibilityAPI.push( ( <div class='accessibilityAPI'></div> ) );
          }
        } else {
          accessibilityAPI = ( <div class='accessibilityAPI'>{this.props.accessibilityAPI}</div> );
        }
      }
      var publisher;
      if( this.props.publisher ){
        if( this.props.publisher instanceof Array ){
          publisher = [(<p>publisher:</p> )];
          for( i in this.props.publisher ){
            publisher.push( ( <Organization props={ this.props.publisher } /> ) );          }
        } else {
          publisher = ( <Organization props={ this.props.publisher } /> );        }
      }
      var about;
      if( this.props.about ){
        if( this.props.about instanceof Array ){
          about = [(<p>about:</p> )];
          for( i in this.props.about ){
            about.push( ( <Thing props={ this.props.about } /> ) );          }
        } else {
          about = ( <Thing props={ this.props.about } /> );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var license;
      if( this.props.license ){
        if( this.props.license instanceof Array ){
          license = [(<p>license:</p> )];
          for( i in this.props.license ){
            license.push( ( <div class='license'></div> ) );
          }
        } else {
          license = ( <div class='license'>{this.props.license}</div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(<p>aggregateRating:</p> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating props={ this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var workExample;
      if( this.props.workExample ){
        if( this.props.workExample instanceof Array ){
          workExample = [(<p>workExample:</p> )];
          for( i in this.props.workExample ){
            workExample.push( ( <CreativeWork props={ this.props.workExample } /> ) );          }
        } else {
          workExample = ( <CreativeWork props={ this.props.workExample } /> );        }
      }
      var sourceOrganization;
      if( this.props.sourceOrganization ){
        if( this.props.sourceOrganization instanceof Array ){
          sourceOrganization = [(<p>sourceOrganization:</p> )];
          for( i in this.props.sourceOrganization ){
            sourceOrganization.push( ( <Organization props={ this.props.sourceOrganization } /> ) );          }
        } else {
          sourceOrganization = ( <Organization props={ this.props.sourceOrganization } /> );        }
      }
      var contentRating;
      if( this.props.contentRating ){
        if( this.props.contentRating instanceof Array ){
          contentRating = [(<p>contentRating:</p> )];
          for( i in this.props.contentRating ){
            contentRating.push( ( <div class='contentRating'></div> ) );
          }
        } else {
          contentRating = ( <div class='contentRating'>{this.props.contentRating}</div> );
        }
      }
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [(<p>inLanguage:</p> )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( <div class='inLanguage'></div> ) );
          }
        } else {
          inLanguage = ( <div class='inLanguage'>{this.props.inLanguage}</div> );
        }
      }
      var isFamilyFriendly;
      if( this.props.isFamilyFriendly ){
        if( this.props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [(<p>isFamilyFriendly:</p> )];
          for( i in this.props.isFamilyFriendly ){
            isFamilyFriendly.push( ( <Boolean props={ this.props.isFamilyFriendly } /> ) );          }
        } else {
          isFamilyFriendly = ( <Boolean props={ this.props.isFamilyFriendly } /> );        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [(<p>audience:</p> )];
          for( i in this.props.audience ){
            audience.push( ( <Audience props={ this.props.audience } /> ) );          }
        } else {
          audience = ( <Audience props={ this.props.audience } /> );        }
      }
      var accessibilityControl;
      if( this.props.accessibilityControl ){
        if( this.props.accessibilityControl instanceof Array ){
          accessibilityControl = [(<p>accessibilityControl:</p> )];
          for( i in this.props.accessibilityControl ){
            accessibilityControl.push( ( <div class='accessibilityControl'></div> ) );
          }
        } else {
          accessibilityControl = ( <div class='accessibilityControl'>{this.props.accessibilityControl}</div> );
        }
      }
      var includedComposition;
      if( this.props.includedComposition ){
        if( this.props.includedComposition instanceof Array ){
          includedComposition = [(<p>includedComposition:</p> )];
          for( i in this.props.includedComposition ){
            includedComposition.push( ( <MusicComposition props={ this.props.includedComposition } /> ) );          }
        } else {
          includedComposition = ( <MusicComposition props={ this.props.includedComposition } /> );        }
      }
      var keywords;
      if( this.props.keywords ){
        if( this.props.keywords instanceof Array ){
          keywords = [(<p>keywords:</p> )];
          for( i in this.props.keywords ){
            keywords.push( ( <div class='keywords'></div> ) );
          }
        } else {
          keywords = ( <div class='keywords'>{this.props.keywords}</div> );
        }
      }
      var mentions;
      if( this.props.mentions ){
        if( this.props.mentions instanceof Array ){
          mentions = [(<p>mentions:</p> )];
          for( i in this.props.mentions ){
            mentions.push( ( <Thing props={ this.props.mentions } /> ) );          }
        } else {
          mentions = ( <Thing props={ this.props.mentions } /> );        }
      }
      var audio;
      if( this.props.audio ){
        if( this.props.audio instanceof Array ){
          audio = [(<p>audio:</p> )];
          for( i in this.props.audio ){
            audio.push( ( <AudioObject props={ this.props.audio } /> ) );          }
        } else {
          audio = ( <AudioObject props={ this.props.audio } /> );        }
      }
      var genre;
      if( this.props.genre ){
        if( this.props.genre instanceof Array ){
          genre = [(<p>genre:</p> )];
          for( i in this.props.genre ){
            genre.push( ( <div class='genre'></div> ) );
          }
        } else {
          genre = ( <div class='genre'>{this.props.genre}</div> );
        }
      }
      return (<div title='MusicComposition' className='MusicComposition entity'>
        { comment }
        { copyrightYear }
        { musicArrangement }
        { iswcCode }
        { producer }
        { creator }
        { publishingPrinciples }
        { text }
        { image }
        { lyricist }
        { sameAs }
        { musicCompositionForm }
        { commentCount }
        { associatedMedia }
        { alternativeHeadline }
        { accountablePerson }
        { video }
        { url }
        { composer }
        { typicalAgeRange }
        { contributor }
        { additionalType }
        { thumbnailUrl }
        { mainEntity }
        { alternateName }
        { accessibilityFeature }
        { interactivityType }
        { publication }
        { discussionUrl }
        { author }
        { headline }
        { review }
        { encoding }
        { character }
        { musicalKey }
        { isBasedOnUrl }
        { hasPart }
        { exampleOfWork }
        { editor }
        { version }
        { provider }
        { isPartOf }
        { recordedAt }
        { accessibilityHazard }
        { dateModified }
        { recordedAs }
        { mainEntityOfPage }
        { timeRequired }
        { citation }
        { description }
        { educationalAlignment }
        { learningResourceType }
        { award }
        { dateCreated }
        { translator }
        { offers }
        { copyrightHolder }
        { releasedEvent }
        { position }
        { firstPerformance }
        { schemaVersion }
        { datePublished }
        { contentLocation }
        { educationalUse }
        { accessibilityAPI }
        { publisher }
        { about }
        { potentialAction }
        { name }
        { license }
        { aggregateRating }
        { workExample }
        { sourceOrganization }
        { contentRating }
        { inLanguage }
        { isFamilyFriendly }
        { audience }
        { accessibilityControl }
        { includedComposition }
        { keywords }
        { mentions }
        { audio }
        { genre }
     </div>);
    }
  });
});
