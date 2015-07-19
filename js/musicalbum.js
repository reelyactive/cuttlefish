/* Thing > CreativeWork > MusicPlaylist > MusicAlbum - A collection of music tracks.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './offer', './imageobject', './aggregaterating', './musicalbumreleasetype', './integer', './creativework', './review', './audioobject', './musicrecording', './language', './person', './publicationevent', './place', './itemlist', './action', './organization', './comment', './musicalbumproductiontype', './thing', './audience', './boolean', './musicgroup', './duration', './musicrelease', './event'], function(React, AlignmentObject, VideoObject, MediaObject, Offer, ImageObject, AggregateRating, MusicAlbumReleaseType, Integer, CreativeWork, Review, AudioObject, MusicRecording, Language, Person, PublicationEvent, Place, ItemList, Action, Organization, Comment, MusicAlbumProductionType, Thing, Audience, Boolean, MusicGroup, Duration, MusicRelease, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var comment;
      if( this.props.comment ){
        if( this.props.comment instanceof Array ){
          comment = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.comment ){
            comment.push( ( React.createElement(Comment, {props:  this.props.comment}) ) );          }
        } else {
          comment = ( React.createElement(Comment, {props:  this.props.comment}) );        }
      }
      var copyrightYear;
      if( this.props.copyrightYear ){
        if( this.props.copyrightYear instanceof Array ){
          copyrightYear = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.copyrightYear ){
            copyrightYear.push( ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightYear is a Number."}) ) );
          }
        } else {
            copyrightYear.push( ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightYear is a Number."}) ) );
        }
      }
      var hasPart;
      if( this.props.hasPart ){
        if( this.props.hasPart instanceof Array ){
          hasPart = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.hasPart ){
            hasPart.push( ( React.createElement(CreativeWork, {props:  this.props.hasPart}) ) );          }
        } else {
          hasPart = ( React.createElement(CreativeWork, {props:  this.props.hasPart}) );        }
      }
      var version;
      if( this.props.version ){
        if( this.props.version instanceof Array ){
          version = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.version ){
            version.push( ( React.createElement("div", {"data-advice": "Put your HTML here. version is a Number."}) ) );
          }
        } else {
            version.push( ( React.createElement("div", {"data-advice": "Put your HTML here. version is a Number."}) ) );
        }
      }
      var producer;
      if( this.props.producer ){
        if( this.props.producer instanceof Array ){
          producer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.producer ){
            producer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. producer is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            producer.push( ( React.createElement("div", {"data-advice": "Put your HTML here. producer is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var creator;
      if( this.props.creator ){
        if( this.props.creator instanceof Array ){
          creator = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.creator ){
            creator.push( ( React.createElement("div", {"data-advice": "Put your HTML here. creator is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            creator.push( ( React.createElement("div", {"data-advice": "Put your HTML here. creator is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var publishingPrinciples;
      if( this.props.publishingPrinciples ){
        if( this.props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.publishingPrinciples ){
            publishingPrinciples.push( ( React.createElement("div", {"data-advice": "Put your HTML here. publishingPrinciples is a URL."}) ) );
          }
        } else {
            publishingPrinciples.push( ( React.createElement("div", {"data-advice": "Put your HTML here. publishingPrinciples is a URL."}) ) );
        }
      }
      var text;
      if( this.props.text ){
        if( this.props.text instanceof Array ){
          text = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.text ){
            text.push( ( React.createElement("div", {"data-advice": "Put your HTML here. text is a Text."}) ) );
          }
        } else {
            text.push( ( React.createElement("div", {"data-advice": "Put your HTML here. text is a Text."}) ) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var albumProductionType;
      if( this.props.albumProductionType ){
        if( this.props.albumProductionType instanceof Array ){
          albumProductionType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.albumProductionType ){
            albumProductionType.push( ( React.createElement(MusicAlbumProductionType, {props:  this.props.albumProductionType}) ) );          }
        } else {
          albumProductionType = ( React.createElement(MusicAlbumProductionType, {props:  this.props.albumProductionType}) );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
        }
      }
      var datePublished;
      if( this.props.datePublished ){
        if( this.props.datePublished instanceof Array ){
          datePublished = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.datePublished ){
            datePublished.push( ( React.createElement("div", {"data-advice": "Put your HTML here. datePublished is a Date."}) ) );
          }
        } else {
            datePublished.push( ( React.createElement("div", {"data-advice": "Put your HTML here. datePublished is a Date."}) ) );
        }
      }
      var albumRelease;
      if( this.props.albumRelease ){
        if( this.props.albumRelease instanceof Array ){
          albumRelease = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.albumRelease ){
            albumRelease.push( ( React.createElement(MusicRelease, {props:  this.props.albumRelease}) ) );          }
        } else {
          albumRelease = ( React.createElement(MusicRelease, {props:  this.props.albumRelease}) );        }
      }
      var associatedMedia;
      if( this.props.associatedMedia ){
        if( this.props.associatedMedia instanceof Array ){
          associatedMedia = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.associatedMedia ){
            associatedMedia.push( ( React.createElement(MediaObject, {props:  this.props.associatedMedia}) ) );          }
        } else {
          associatedMedia = ( React.createElement(MediaObject, {props:  this.props.associatedMedia}) );        }
      }
      var alternativeHeadline;
      if( this.props.alternativeHeadline ){
        if( this.props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternativeHeadline ){
            alternativeHeadline.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternativeHeadline is a Text."}) ) );
          }
        } else {
            alternativeHeadline.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternativeHeadline is a Text."}) ) );
        }
      }
      var accountablePerson;
      if( this.props.accountablePerson ){
        if( this.props.accountablePerson instanceof Array ){
          accountablePerson = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.accountablePerson ){
            accountablePerson.push( ( React.createElement(Person, {props:  this.props.accountablePerson}) ) );          }
        } else {
          accountablePerson = ( React.createElement(Person, {props:  this.props.accountablePerson}) );        }
      }
      var video;
      if( this.props.video ){
        if( this.props.video instanceof Array ){
          video = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.video ){
            video.push( ( React.createElement(VideoObject, {props:  this.props.video}) ) );          }
        } else {
          video = ( React.createElement(VideoObject, {props:  this.props.video}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) ) );
          }
        } else {
            typicalAgeRange.push( ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) ) );
        }
      }
      var contributor;
      if( this.props.contributor ){
        if( this.props.contributor instanceof Array ){
          contributor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.contributor ){
            contributor.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contributor is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            contributor.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contributor is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
        }
      }
      var thumbnailUrl;
      if( this.props.thumbnailUrl ){
        if( this.props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.thumbnailUrl ){
            thumbnailUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. thumbnailUrl is a URL."}) ) );
          }
        } else {
            thumbnailUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. thumbnailUrl is a URL."}) ) );
        }
      }
      var mainEntity;
      if( this.props.mainEntity ){
        if( this.props.mainEntity instanceof Array ){
          mainEntity = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntity ){
            mainEntity.push( ( React.createElement(Thing, {props:  this.props.mainEntity}) ) );          }
        } else {
          mainEntity = ( React.createElement(Thing, {props:  this.props.mainEntity}) );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
        }
      }
      var accessibilityFeature;
      if( this.props.accessibilityFeature ){
        if( this.props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.accessibilityFeature ){
            accessibilityFeature.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityFeature is a Text."}) ) );
          }
        } else {
            accessibilityFeature.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityFeature is a Text."}) ) );
        }
      }
      var albumReleaseType;
      if( this.props.albumReleaseType ){
        if( this.props.albumReleaseType instanceof Array ){
          albumReleaseType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.albumReleaseType ){
            albumReleaseType.push( ( React.createElement(MusicAlbumReleaseType, {props:  this.props.albumReleaseType}) ) );          }
        } else {
          albumReleaseType = ( React.createElement(MusicAlbumReleaseType, {props:  this.props.albumReleaseType}) );        }
      }
      var publication;
      if( this.props.publication ){
        if( this.props.publication instanceof Array ){
          publication = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.publication ){
            publication.push( ( React.createElement(PublicationEvent, {props:  this.props.publication}) ) );          }
        } else {
          publication = ( React.createElement(PublicationEvent, {props:  this.props.publication}) );        }
      }
      var discussionUrl;
      if( this.props.discussionUrl ){
        if( this.props.discussionUrl instanceof Array ){
          discussionUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.discussionUrl ){
            discussionUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. discussionUrl is a URL."}) ) );
          }
        } else {
            discussionUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. discussionUrl is a URL."}) ) );
        }
      }
      var author;
      if( this.props.author ){
        if( this.props.author instanceof Array ){
          author = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.author ){
            author.push( ( React.createElement("div", {"data-advice": "Put your HTML here. author is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            author.push( ( React.createElement("div", {"data-advice": "Put your HTML here. author is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var headline;
      if( this.props.headline ){
        if( this.props.headline instanceof Array ){
          headline = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.headline ){
            headline.push( ( React.createElement("div", {"data-advice": "Put your HTML here. headline is a Text."}) ) );
          }
        } else {
            headline.push( ( React.createElement("div", {"data-advice": "Put your HTML here. headline is a Text."}) ) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var encoding;
      if( this.props.encoding ){
        if( this.props.encoding instanceof Array ){
          encoding = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.encoding ){
            encoding.push( ( React.createElement(MediaObject, {props:  this.props.encoding}) ) );          }
        } else {
          encoding = ( React.createElement(MediaObject, {props:  this.props.encoding}) );        }
      }
      var character;
      if( this.props.character ){
        if( this.props.character instanceof Array ){
          character = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.character ){
            character.push( ( React.createElement(Person, {props:  this.props.character}) ) );          }
        } else {
          character = ( React.createElement(Person, {props:  this.props.character}) );        }
      }
      var contentRating;
      if( this.props.contentRating ){
        if( this.props.contentRating instanceof Array ){
          contentRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.contentRating ){
            contentRating.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contentRating is a Text."}) ) );
          }
        } else {
            contentRating.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contentRating is a Text."}) ) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
        }
      }
      var educationalAlignment;
      if( this.props.educationalAlignment ){
        if( this.props.educationalAlignment instanceof Array ){
          educationalAlignment = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.educationalAlignment ){
            educationalAlignment.push( ( React.createElement(AlignmentObject, {props:  this.props.educationalAlignment}) ) );          }
        } else {
          educationalAlignment = ( React.createElement(AlignmentObject, {props:  this.props.educationalAlignment}) );        }
      }
      var exampleOfWork;
      if( this.props.exampleOfWork ){
        if( this.props.exampleOfWork instanceof Array ){
          exampleOfWork = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.exampleOfWork ){
            exampleOfWork.push( ( React.createElement(CreativeWork, {props:  this.props.exampleOfWork}) ) );          }
        } else {
          exampleOfWork = ( React.createElement(CreativeWork, {props:  this.props.exampleOfWork}) );        }
      }
      var editor;
      if( this.props.editor ){
        if( this.props.editor instanceof Array ){
          editor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.editor ){
            editor.push( ( React.createElement(Person, {props:  this.props.editor}) ) );          }
        } else {
          editor = ( React.createElement(Person, {props:  this.props.editor}) );        }
      }
      var provider;
      if( this.props.provider ){
        if( this.props.provider instanceof Array ){
          provider = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.provider ){
            provider.push( ( React.createElement("div", {"data-advice": "Put your HTML here. provider is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            provider.push( ( React.createElement("div", {"data-advice": "Put your HTML here. provider is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var isPartOf;
      if( this.props.isPartOf ){
        if( this.props.isPartOf instanceof Array ){
          isPartOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isPartOf ){
            isPartOf.push( ( React.createElement(CreativeWork, {props:  this.props.isPartOf}) ) );          }
        } else {
          isPartOf = ( React.createElement(CreativeWork, {props:  this.props.isPartOf}) );        }
      }
      var recordedAt;
      if( this.props.recordedAt ){
        if( this.props.recordedAt instanceof Array ){
          recordedAt = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.recordedAt ){
            recordedAt.push( ( React.createElement(Event, {props:  this.props.recordedAt}) ) );          }
        } else {
          recordedAt = ( React.createElement(Event, {props:  this.props.recordedAt}) );        }
      }
      var byArtist;
      if( this.props.byArtist ){
        if( this.props.byArtist instanceof Array ){
          byArtist = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.byArtist ){
            byArtist.push( ( React.createElement(MusicGroup, {props:  this.props.byArtist}) ) );          }
        } else {
          byArtist = ( React.createElement(MusicGroup, {props:  this.props.byArtist}) );        }
      }
      var accessibilityHazard;
      if( this.props.accessibilityHazard ){
        if( this.props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.accessibilityHazard ){
            accessibilityHazard.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityHazard is a Text."}) ) );
          }
        } else {
            accessibilityHazard.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityHazard is a Text."}) ) );
        }
      }
      var dateModified;
      if( this.props.dateModified ){
        if( this.props.dateModified instanceof Array ){
          dateModified = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.dateModified ){
            dateModified.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dateModified is a Date."}) ) );
          }
        } else {
            dateModified.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dateModified is a Date."}) ) );
        }
      }
      var timeRequired;
      if( this.props.timeRequired ){
        if( this.props.timeRequired instanceof Array ){
          timeRequired = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.timeRequired ){
            timeRequired.push( ( React.createElement(Duration, {props:  this.props.timeRequired}) ) );          }
        } else {
          timeRequired = ( React.createElement(Duration, {props:  this.props.timeRequired}) );        }
      }
      var citation;
      if( this.props.citation ){
        if( this.props.citation instanceof Array ){
          citation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.citation ){
            citation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. citation is a Text or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            citation.push( ( React.createElement("div", {"data-advice": "Put your HTML here. citation is a Text or" + ' ' +
"CreativeWork."}) ) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
        }
      }
      var publisher;
      if( this.props.publisher ){
        if( this.props.publisher instanceof Array ){
          publisher = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.publisher ){
            publisher.push( ( React.createElement(Organization, {props:  this.props.publisher}) ) );          }
        } else {
          publisher = ( React.createElement(Organization, {props:  this.props.publisher}) );        }
      }
      var track;
      if( this.props.track ){
        if( this.props.track instanceof Array ){
          track = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.track ){
            track.push( ( React.createElement("div", {"data-advice": "Put your HTML here. track is a ItemList or" + ' ' +
"MusicRecording."}) ) );
          }
        } else {
            track.push( ( React.createElement("div", {"data-advice": "Put your HTML here. track is a ItemList or" + ' ' +
"MusicRecording."}) ) );
        }
      }
      var learningResourceType;
      if( this.props.learningResourceType ){
        if( this.props.learningResourceType instanceof Array ){
          learningResourceType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.learningResourceType ){
            learningResourceType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. learningResourceType is a Text."}) ) );
          }
        } else {
            learningResourceType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. learningResourceType is a Text."}) ) );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.award ){
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
          }
        } else {
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
        }
      }
      var dateCreated;
      if( this.props.dateCreated ){
        if( this.props.dateCreated instanceof Array ){
          dateCreated = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.dateCreated ){
            dateCreated.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dateCreated is a Date."}) ) );
          }
        } else {
            dateCreated.push( ( React.createElement("div", {"data-advice": "Put your HTML here. dateCreated is a Date."}) ) );
        }
      }
      var translator;
      if( this.props.translator ){
        if( this.props.translator instanceof Array ){
          translator = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.translator ){
            translator.push( ( React.createElement("div", {"data-advice": "Put your HTML here. translator is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            translator.push( ( React.createElement("div", {"data-advice": "Put your HTML here. translator is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.offers ){
            offers.push( ( React.createElement(Offer, {props:  this.props.offers}) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  this.props.offers}) );        }
      }
      var copyrightHolder;
      if( this.props.copyrightHolder ){
        if( this.props.copyrightHolder instanceof Array ){
          copyrightHolder = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.copyrightHolder ){
            copyrightHolder.push( ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightHolder is a Organization or" + ' ' +
"Person."}) ) );
          }
        } else {
            copyrightHolder.push( ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightHolder is a Organization or" + ' ' +
"Person."}) ) );
        }
      }
      var releasedEvent;
      if( this.props.releasedEvent ){
        if( this.props.releasedEvent instanceof Array ){
          releasedEvent = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.releasedEvent ){
            releasedEvent.push( ( React.createElement(PublicationEvent, {props:  this.props.releasedEvent}) ) );          }
        } else {
          releasedEvent = ( React.createElement(PublicationEvent, {props:  this.props.releasedEvent}) );        }
      }
      var position;
      if( this.props.position ){
        if( this.props.position instanceof Array ){
          position = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.position ){
            position.push( ( React.createElement("div", {"data-advice": "Put your HTML here. position is a Text or" + ' ' +
"Integer."}) ) );
          }
        } else {
            position.push( ( React.createElement("div", {"data-advice": "Put your HTML here. position is a Text or" + ' ' +
"Integer."}) ) );
        }
      }
      var genre;
      if( this.props.genre ){
        if( this.props.genre instanceof Array ){
          genre = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.genre ){
            genre.push( ( React.createElement("div", {"data-advice": "Put your HTML here. genre is a Text."}) ) );
          }
        } else {
            genre.push( ( React.createElement("div", {"data-advice": "Put your HTML here. genre is a Text."}) ) );
        }
      }
      var interactivityType;
      if( this.props.interactivityType ){
        if( this.props.interactivityType instanceof Array ){
          interactivityType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.interactivityType ){
            interactivityType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. interactivityType is a Text."}) ) );
          }
        } else {
            interactivityType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. interactivityType is a Text."}) ) );
        }
      }
      var schemaVersion;
      if( this.props.schemaVersion ){
        if( this.props.schemaVersion instanceof Array ){
          schemaVersion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.schemaVersion ){
            schemaVersion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. schemaVersion is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            schemaVersion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. schemaVersion is a Text or" + ' ' +
"URL."}) ) );
        }
      }
      var contentLocation;
      if( this.props.contentLocation ){
        if( this.props.contentLocation instanceof Array ){
          contentLocation = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.contentLocation ){
            contentLocation.push( ( React.createElement(Place, {props:  this.props.contentLocation}) ) );          }
        } else {
          contentLocation = ( React.createElement(Place, {props:  this.props.contentLocation}) );        }
      }
      var educationalUse;
      if( this.props.educationalUse ){
        if( this.props.educationalUse instanceof Array ){
          educationalUse = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.educationalUse ){
            educationalUse.push( ( React.createElement("div", {"data-advice": "Put your HTML here. educationalUse is a Text."}) ) );
          }
        } else {
            educationalUse.push( ( React.createElement("div", {"data-advice": "Put your HTML here. educationalUse is a Text."}) ) );
        }
      }
      var accessibilityAPI;
      if( this.props.accessibilityAPI ){
        if( this.props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.accessibilityAPI ){
            accessibilityAPI.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityAPI is a Text."}) ) );
          }
        } else {
            accessibilityAPI.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityAPI is a Text."}) ) );
        }
      }
      var commentCount;
      if( this.props.commentCount ){
        if( this.props.commentCount instanceof Array ){
          commentCount = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.commentCount ){
            commentCount.push( ( React.createElement(Integer, {props:  this.props.commentCount}) ) );          }
        } else {
          commentCount = ( React.createElement(Integer, {props:  this.props.commentCount}) );        }
      }
      var about;
      if( this.props.about ){
        if( this.props.about instanceof Array ){
          about = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.about ){
            about.push( ( React.createElement(Thing, {props:  this.props.about}) ) );          }
        } else {
          about = ( React.createElement(Thing, {props:  this.props.about}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      var license;
      if( this.props.license ){
        if( this.props.license instanceof Array ){
          license = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.license ){
            license.push( ( React.createElement("div", {"data-advice": "Put your HTML here. license is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            license.push( ( React.createElement("div", {"data-advice": "Put your HTML here. license is a CreativeWork or" + ' ' +
"URL."}) ) );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var workExample;
      if( this.props.workExample ){
        if( this.props.workExample instanceof Array ){
          workExample = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.workExample ){
            workExample.push( ( React.createElement(CreativeWork, {props:  this.props.workExample}) ) );          }
        } else {
          workExample = ( React.createElement(CreativeWork, {props:  this.props.workExample}) );        }
      }
      var sourceOrganization;
      if( this.props.sourceOrganization ){
        if( this.props.sourceOrganization instanceof Array ){
          sourceOrganization = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sourceOrganization ){
            sourceOrganization.push( ( React.createElement(Organization, {props:  this.props.sourceOrganization}) ) );          }
        } else {
          sourceOrganization = ( React.createElement(Organization, {props:  this.props.sourceOrganization}) );        }
      }
      var numTracks;
      if( this.props.numTracks ){
        if( this.props.numTracks instanceof Array ){
          numTracks = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.numTracks ){
            numTracks.push( ( React.createElement(Integer, {props:  this.props.numTracks}) ) );          }
        } else {
          numTracks = ( React.createElement(Integer, {props:  this.props.numTracks}) );        }
      }
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Text or" + ' ' +
"Language."}) ) );
          }
        } else {
            inLanguage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Text or" + ' ' +
"Language."}) ) );
        }
      }
      var isFamilyFriendly;
      if( this.props.isFamilyFriendly ){
        if( this.props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isFamilyFriendly ){
            isFamilyFriendly.push( ( React.createElement(Boolean, {props:  this.props.isFamilyFriendly}) ) );          }
        } else {
          isFamilyFriendly = ( React.createElement(Boolean, {props:  this.props.isFamilyFriendly}) );        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.audience ){
            audience.push( ( React.createElement(Audience, {props:  this.props.audience}) ) );          }
        } else {
          audience = ( React.createElement(Audience, {props:  this.props.audience}) );        }
      }
      var accessibilityControl;
      if( this.props.accessibilityControl ){
        if( this.props.accessibilityControl instanceof Array ){
          accessibilityControl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.accessibilityControl ){
            accessibilityControl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityControl is a Text."}) ) );
          }
        } else {
            accessibilityControl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityControl is a Text."}) ) );
        }
      }
      var keywords;
      if( this.props.keywords ){
        if( this.props.keywords instanceof Array ){
          keywords = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.keywords ){
            keywords.push( ( React.createElement("div", {"data-advice": "Put your HTML here. keywords is a Text."}) ) );
          }
        } else {
            keywords.push( ( React.createElement("div", {"data-advice": "Put your HTML here. keywords is a Text."}) ) );
        }
      }
      var mentions;
      if( this.props.mentions ){
        if( this.props.mentions instanceof Array ){
          mentions = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mentions ){
            mentions.push( ( React.createElement(Thing, {props:  this.props.mentions}) ) );          }
        } else {
          mentions = ( React.createElement(Thing, {props:  this.props.mentions}) );        }
      }
      var audio;
      if( this.props.audio ){
        if( this.props.audio instanceof Array ){
          audio = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.audio ){
            audio.push( ( React.createElement(AudioObject, {props:  this.props.audio}) ) );          }
        } else {
          audio = ( React.createElement(AudioObject, {props:  this.props.audio}) );        }
      }
      var isBasedOnUrl;
      if( this.props.isBasedOnUrl ){
        if( this.props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isBasedOnUrl ){
            isBasedOnUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. isBasedOnUrl is a URL."}) ) );
          }
        } else {
            isBasedOnUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. isBasedOnUrl is a URL."}) ) );
        }
      }
      return (React.createElement("div", {title: "MusicAlbum", className: "MusicAlbum entity"}, 
         comment, 
         copyrightYear, 
         hasPart, 
         version, 
         producer, 
         creator, 
         publishingPrinciples, 
         text, 
         image, 
         albumProductionType, 
         sameAs, 
         datePublished, 
         albumRelease, 
         associatedMedia, 
         alternativeHeadline, 
         accountablePerson, 
         video, 
         url, 
         typicalAgeRange, 
         contributor, 
         additionalType, 
         thumbnailUrl, 
         mainEntity, 
         alternateName, 
         accessibilityFeature, 
         albumReleaseType, 
         publication, 
         discussionUrl, 
         author, 
         headline, 
         review, 
         encoding, 
         character, 
         contentRating, 
         mainEntityOfPage, 
         educationalAlignment, 
         exampleOfWork, 
         editor, 
         provider, 
         isPartOf, 
         recordedAt, 
         byArtist, 
         accessibilityHazard, 
         dateModified, 
         timeRequired, 
         citation, 
         description, 
         publisher, 
         track, 
         learningResourceType, 
         award, 
         dateCreated, 
         translator, 
         offers, 
         copyrightHolder, 
         releasedEvent, 
         position, 
         genre, 
         interactivityType, 
         schemaVersion, 
         contentLocation, 
         educationalUse, 
         accessibilityAPI, 
         commentCount, 
         about, 
         potentialAction, 
         name, 
         license, 
         aggregateRating, 
         workExample, 
         sourceOrganization, 
         numTracks, 
         inLanguage, 
         isFamilyFriendly, 
         audience, 
         accessibilityControl, 
         keywords, 
         mentions, 
         audio, 
         isBasedOnUrl 
     ));
    }
  });
});