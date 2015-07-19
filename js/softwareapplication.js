/* Thing > CreativeWork > SoftwareApplication - A software application.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './offer', './imageobject', './aggregaterating', './softwareapplication', './integer', './creativework', './review', './audioobject', './language', './person', './publicationevent', './place', './action', './organization', './comment', './thing', './audience', './boolean', './duration', './event'], function(React, AlignmentObject, VideoObject, MediaObject, Offer, ImageObject, AggregateRating, SoftwareApplication, Integer, CreativeWork, Review, AudioObject, Language, Person, PublicationEvent, Place, Action, Organization, Comment, Thing, Audience, Boolean, Duration, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var educationalUse;
      if( this.props.educationalUse ){
        if( this.props.educationalUse instanceof Array ){
          educationalUse = [(React.createElement("p", null, "educationalUse:") )];
          for( i in this.props.educationalUse ){
            educationalUse.push( ( React.createElement("div", {class: "educationalUse"}) ) );
          }
        } else {
          educationalUse = ( React.createElement("div", {class: "educationalUse"}, this.props.educationalUse) );
        }
      }
      var producer;
      if( this.props.producer ){
        if( this.props.producer instanceof Array ){
          producer = [(React.createElement("p", null, "producer:") )];
          for( i in this.props.producer ){
            producer.push( ( React.createElement("div", {class: "producer"}) ) );
          }
        } else {
          producer = ( React.createElement("div", {class: "producer"}, this.props.producer) );
        }
      }
      var text;
      if( this.props.text ){
        if( this.props.text instanceof Array ){
          text = [(React.createElement("p", null, "text:") )];
          for( i in this.props.text ){
            text.push( ( React.createElement("div", {class: "text"}) ) );
          }
        } else {
          text = ( React.createElement("div", {class: "text"}, this.props.text) );
        }
      }
      var datePublished;
      if( this.props.datePublished ){
        if( this.props.datePublished instanceof Array ){
          datePublished = [(React.createElement("p", null, "datePublished:") )];
          for( i in this.props.datePublished ){
            datePublished.push( ( React.createElement("div", {class: "datePublished"}) ) );
          }
        } else {
          datePublished = ( React.createElement("div", {class: "datePublished"}, this.props.datePublished) );
        }
      }
      var processorRequirements;
      if( this.props.processorRequirements ){
        if( this.props.processorRequirements instanceof Array ){
          processorRequirements = [(React.createElement("p", null, "processorRequirements:") )];
          for( i in this.props.processorRequirements ){
            processorRequirements.push( ( React.createElement("div", {class: "processorRequirements"}) ) );
          }
        } else {
          processorRequirements = ( React.createElement("div", {class: "processorRequirements"}, this.props.processorRequirements) );
        }
      }
      var alternativeHeadline;
      if( this.props.alternativeHeadline ){
        if( this.props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [(React.createElement("p", null, "alternativeHeadline:") )];
          for( i in this.props.alternativeHeadline ){
            alternativeHeadline.push( ( React.createElement("div", {class: "alternativeHeadline"}) ) );
          }
        } else {
          alternativeHeadline = ( React.createElement("div", {class: "alternativeHeadline"}, this.props.alternativeHeadline) );
        }
      }
      var accountablePerson;
      if( this.props.accountablePerson ){
        if( this.props.accountablePerson instanceof Array ){
          accountablePerson = [(React.createElement("p", null, "accountablePerson:") )];
          for( i in this.props.accountablePerson ){
            accountablePerson.push( ( React.createElement(Person, {props:  this.props.accountablePerson}) ) );          }
        } else {
          accountablePerson = ( React.createElement(Person, {props:  this.props.accountablePerson}) );        }
      }
      var keywords;
      if( this.props.keywords ){
        if( this.props.keywords instanceof Array ){
          keywords = [(React.createElement("p", null, "keywords:") )];
          for( i in this.props.keywords ){
            keywords.push( ( React.createElement("div", {class: "keywords"}) ) );
          }
        } else {
          keywords = ( React.createElement("div", {class: "keywords"}, this.props.keywords) );
        }
      }
      var countriesNotSupported;
      if( this.props.countriesNotSupported ){
        if( this.props.countriesNotSupported instanceof Array ){
          countriesNotSupported = [(React.createElement("p", null, "countriesNotSupported:") )];
          for( i in this.props.countriesNotSupported ){
            countriesNotSupported.push( ( React.createElement("div", {class: "countriesNotSupported"}) ) );
          }
        } else {
          countriesNotSupported = ( React.createElement("div", {class: "countriesNotSupported"}, this.props.countriesNotSupported) );
        }
      }
      var headline;
      if( this.props.headline ){
        if( this.props.headline instanceof Array ){
          headline = [(React.createElement("p", null, "headline:") )];
          for( i in this.props.headline ){
            headline.push( ( React.createElement("div", {class: "headline"}) ) );
          }
        } else {
          headline = ( React.createElement("div", {class: "headline"}, this.props.headline) );
        }
      }
      var character;
      if( this.props.character ){
        if( this.props.character instanceof Array ){
          character = [(React.createElement("p", null, "character:") )];
          for( i in this.props.character ){
            character.push( ( React.createElement(Person, {props:  this.props.character}) ) );          }
        } else {
          character = ( React.createElement(Person, {props:  this.props.character}) );        }
      }
      var contentRating;
      if( this.props.contentRating ){
        if( this.props.contentRating instanceof Array ){
          contentRating = [(React.createElement("p", null, "contentRating:") )];
          for( i in this.props.contentRating ){
            contentRating.push( ( React.createElement("div", {class: "contentRating"}) ) );
          }
        } else {
          contentRating = ( React.createElement("div", {class: "contentRating"}, this.props.contentRating) );
        }
      }
      var applicationCategory;
      if( this.props.applicationCategory ){
        if( this.props.applicationCategory instanceof Array ){
          applicationCategory = [(React.createElement("p", null, "applicationCategory:") )];
          for( i in this.props.applicationCategory ){
            applicationCategory.push( ( React.createElement("div", {class: "applicationCategory"}) ) );
          }
        } else {
          applicationCategory = ( React.createElement("div", {class: "applicationCategory"}, this.props.applicationCategory) );
        }
      }
      var exampleOfWork;
      if( this.props.exampleOfWork ){
        if( this.props.exampleOfWork instanceof Array ){
          exampleOfWork = [(React.createElement("p", null, "exampleOfWork:") )];
          for( i in this.props.exampleOfWork ){
            exampleOfWork.push( ( React.createElement(CreativeWork, {props:  this.props.exampleOfWork}) ) );          }
        } else {
          exampleOfWork = ( React.createElement(CreativeWork, {props:  this.props.exampleOfWork}) );        }
      }
      var publishingPrinciples;
      if( this.props.publishingPrinciples ){
        if( this.props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [(React.createElement("p", null, "publishingPrinciples:") )];
          for( i in this.props.publishingPrinciples ){
            publishingPrinciples.push( ( React.createElement("div", {class: "publishingPrinciples"}) ) );
          }
        } else {
          publishingPrinciples = ( React.createElement("div", {class: "publishingPrinciples"}, this.props.publishingPrinciples) );
        }
      }
      var releaseNotes;
      if( this.props.releaseNotes ){
        if( this.props.releaseNotes instanceof Array ){
          releaseNotes = [(React.createElement("p", null, "releaseNotes:") )];
          for( i in this.props.releaseNotes ){
            releaseNotes.push( ( React.createElement("div", {class: "releaseNotes"}) ) );
          }
        } else {
          releaseNotes = ( React.createElement("div", {class: "releaseNotes"}, this.props.releaseNotes) );
        }
      }
      var dateCreated;
      if( this.props.dateCreated ){
        if( this.props.dateCreated instanceof Array ){
          dateCreated = [(React.createElement("p", null, "dateCreated:") )];
          for( i in this.props.dateCreated ){
            dateCreated.push( ( React.createElement("div", {class: "dateCreated"}) ) );
          }
        } else {
          dateCreated = ( React.createElement("div", {class: "dateCreated"}, this.props.dateCreated) );
        }
      }
      var memoryRequirements;
      if( this.props.memoryRequirements ){
        if( this.props.memoryRequirements instanceof Array ){
          memoryRequirements = [(React.createElement("p", null, "memoryRequirements:") )];
          for( i in this.props.memoryRequirements ){
            memoryRequirements.push( ( React.createElement("div", {class: "memoryRequirements"}) ) );
          }
        } else {
          memoryRequirements = ( React.createElement("div", {class: "memoryRequirements"}, this.props.memoryRequirements) );
        }
      }
      var permissions;
      if( this.props.permissions ){
        if( this.props.permissions instanceof Array ){
          permissions = [(React.createElement("p", null, "permissions:") )];
          for( i in this.props.permissions ){
            permissions.push( ( React.createElement("div", {class: "permissions"}) ) );
          }
        } else {
          permissions = ( React.createElement("div", {class: "permissions"}, this.props.permissions) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(React.createElement("p", null, "aggregateRating:") )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [(React.createElement("p", null, "audience:") )];
          for( i in this.props.audience ){
            audience.push( ( React.createElement(Audience, {props:  this.props.audience}) ) );          }
        } else {
          audience = ( React.createElement(Audience, {props:  this.props.audience}) );        }
      }
      var accessibilityControl;
      if( this.props.accessibilityControl ){
        if( this.props.accessibilityControl instanceof Array ){
          accessibilityControl = [(React.createElement("p", null, "accessibilityControl:") )];
          for( i in this.props.accessibilityControl ){
            accessibilityControl.push( ( React.createElement("div", {class: "accessibilityControl"}) ) );
          }
        } else {
          accessibilityControl = ( React.createElement("div", {class: "accessibilityControl"}, this.props.accessibilityControl) );
        }
      }
      var copyrightYear;
      if( this.props.copyrightYear ){
        if( this.props.copyrightYear instanceof Array ){
          copyrightYear = [(React.createElement("p", null, "copyrightYear:") )];
          for( i in this.props.copyrightYear ){
            copyrightYear.push( ( React.createElement("div", {class: "copyrightYear"}) ) );
          }
        } else {
          copyrightYear = ( React.createElement("div", {class: "copyrightYear"}, this.props.copyrightYear) );
        }
      }
      var installUrl;
      if( this.props.installUrl ){
        if( this.props.installUrl instanceof Array ){
          installUrl = [(React.createElement("p", null, "installUrl:") )];
          for( i in this.props.installUrl ){
            installUrl.push( ( React.createElement("div", {class: "installUrl"}) ) );
          }
        } else {
          installUrl = ( React.createElement("div", {class: "installUrl"}, this.props.installUrl) );
        }
      }
      var creator;
      if( this.props.creator ){
        if( this.props.creator instanceof Array ){
          creator = [(React.createElement("p", null, "creator:") )];
          for( i in this.props.creator ){
            creator.push( ( React.createElement("div", {class: "creator"}) ) );
          }
        } else {
          creator = ( React.createElement("div", {class: "creator"}, this.props.creator) );
        }
      }
      var commentCount;
      if( this.props.commentCount ){
        if( this.props.commentCount instanceof Array ){
          commentCount = [(React.createElement("p", null, "commentCount:") )];
          for( i in this.props.commentCount ){
            commentCount.push( ( React.createElement(Integer, {props:  this.props.commentCount}) ) );          }
        } else {
          commentCount = ( React.createElement(Integer, {props:  this.props.commentCount}) );        }
      }
      var video;
      if( this.props.video ){
        if( this.props.video instanceof Array ){
          video = [(React.createElement("p", null, "video:") )];
          for( i in this.props.video ){
            video.push( ( React.createElement(VideoObject, {props:  this.props.video}) ) );          }
        } else {
          video = ( React.createElement(VideoObject, {props:  this.props.video}) );        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [(React.createElement("p", null, "typicalAgeRange:") )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( React.createElement("div", {class: "typicalAgeRange"}) ) );
          }
        } else {
          typicalAgeRange = ( React.createElement("div", {class: "typicalAgeRange"}, this.props.typicalAgeRange) );
        }
      }
      var fileFormat;
      if( this.props.fileFormat ){
        if( this.props.fileFormat instanceof Array ){
          fileFormat = [(React.createElement("p", null, "fileFormat:") )];
          for( i in this.props.fileFormat ){
            fileFormat.push( ( React.createElement("div", {class: "fileFormat"}) ) );
          }
        } else {
          fileFormat = ( React.createElement("div", {class: "fileFormat"}, this.props.fileFormat) );
        }
      }
      var applicationSuite;
      if( this.props.applicationSuite ){
        if( this.props.applicationSuite instanceof Array ){
          applicationSuite = [(React.createElement("p", null, "applicationSuite:") )];
          for( i in this.props.applicationSuite ){
            applicationSuite.push( ( React.createElement("div", {class: "applicationSuite"}) ) );
          }
        } else {
          applicationSuite = ( React.createElement("div", {class: "applicationSuite"}, this.props.applicationSuite) );
        }
      }
      var discussionUrl;
      if( this.props.discussionUrl ){
        if( this.props.discussionUrl instanceof Array ){
          discussionUrl = [(React.createElement("p", null, "discussionUrl:") )];
          for( i in this.props.discussionUrl ){
            discussionUrl.push( ( React.createElement("div", {class: "discussionUrl"}) ) );
          }
        } else {
          discussionUrl = ( React.createElement("div", {class: "discussionUrl"}, this.props.discussionUrl) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(React.createElement("p", null, "review:") )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var isFamilyFriendly;
      if( this.props.isFamilyFriendly ){
        if( this.props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [(React.createElement("p", null, "isFamilyFriendly:") )];
          for( i in this.props.isFamilyFriendly ){
            isFamilyFriendly.push( ( React.createElement(Boolean, {props:  this.props.isFamilyFriendly}) ) );          }
        } else {
          isFamilyFriendly = ( React.createElement(Boolean, {props:  this.props.isFamilyFriendly}) );        }
      }
      var version;
      if( this.props.version ){
        if( this.props.version instanceof Array ){
          version = [(React.createElement("p", null, "version:") )];
          for( i in this.props.version ){
            version.push( ( React.createElement("div", {class: "version"}) ) );
          }
        } else {
          version = ( React.createElement("div", {class: "version"}, this.props.version) );
        }
      }
      var provider;
      if( this.props.provider ){
        if( this.props.provider instanceof Array ){
          provider = [(React.createElement("p", null, "provider:") )];
          for( i in this.props.provider ){
            provider.push( ( React.createElement("div", {class: "provider"}) ) );
          }
        } else {
          provider = ( React.createElement("div", {class: "provider"}, this.props.provider) );
        }
      }
      var isPartOf;
      if( this.props.isPartOf ){
        if( this.props.isPartOf instanceof Array ){
          isPartOf = [(React.createElement("p", null, "isPartOf:") )];
          for( i in this.props.isPartOf ){
            isPartOf.push( ( React.createElement(CreativeWork, {props:  this.props.isPartOf}) ) );          }
        } else {
          isPartOf = ( React.createElement(CreativeWork, {props:  this.props.isPartOf}) );        }
      }
      var accessibilityHazard;
      if( this.props.accessibilityHazard ){
        if( this.props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [(React.createElement("p", null, "accessibilityHazard:") )];
          for( i in this.props.accessibilityHazard ){
            accessibilityHazard.push( ( React.createElement("div", {class: "accessibilityHazard"}) ) );
          }
        } else {
          accessibilityHazard = ( React.createElement("div", {class: "accessibilityHazard"}, this.props.accessibilityHazard) );
        }
      }
      var softwareRequirements;
      if( this.props.softwareRequirements ){
        if( this.props.softwareRequirements instanceof Array ){
          softwareRequirements = [(React.createElement("p", null, "softwareRequirements:") )];
          for( i in this.props.softwareRequirements ){
            softwareRequirements.push( ( React.createElement("div", {class: "softwareRequirements"}) ) );
          }
        } else {
          softwareRequirements = ( React.createElement("div", {class: "softwareRequirements"}, this.props.softwareRequirements) );
        }
      }
      var educationalAlignment;
      if( this.props.educationalAlignment ){
        if( this.props.educationalAlignment instanceof Array ){
          educationalAlignment = [(React.createElement("p", null, "educationalAlignment:") )];
          for( i in this.props.educationalAlignment ){
            educationalAlignment.push( ( React.createElement(AlignmentObject, {props:  this.props.educationalAlignment}) ) );          }
        } else {
          educationalAlignment = ( React.createElement(AlignmentObject, {props:  this.props.educationalAlignment}) );        }
      }
      var fileSize;
      if( this.props.fileSize ){
        if( this.props.fileSize instanceof Array ){
          fileSize = [(React.createElement("p", null, "fileSize:") )];
          for( i in this.props.fileSize ){
            fileSize.push( ( React.createElement(Integer, {props:  this.props.fileSize}) ) );          }
        } else {
          fileSize = ( React.createElement(Integer, {props:  this.props.fileSize}) );        }
      }
      var genre;
      if( this.props.genre ){
        if( this.props.genre instanceof Array ){
          genre = [(React.createElement("p", null, "genre:") )];
          for( i in this.props.genre ){
            genre.push( ( React.createElement("div", {class: "genre"}) ) );
          }
        } else {
          genre = ( React.createElement("div", {class: "genre"}, this.props.genre) );
        }
      }
      var publisher;
      if( this.props.publisher ){
        if( this.props.publisher instanceof Array ){
          publisher = [(React.createElement("p", null, "publisher:") )];
          for( i in this.props.publisher ){
            publisher.push( ( React.createElement(Organization, {props:  this.props.publisher}) ) );          }
        } else {
          publisher = ( React.createElement(Organization, {props:  this.props.publisher}) );        }
      }
      var about;
      if( this.props.about ){
        if( this.props.about instanceof Array ){
          about = [(React.createElement("p", null, "about:") )];
          for( i in this.props.about ){
            about.push( ( React.createElement(Thing, {props:  this.props.about}) ) );          }
        } else {
          about = ( React.createElement(Thing, {props:  this.props.about}) );        }
      }
      var license;
      if( this.props.license ){
        if( this.props.license instanceof Array ){
          license = [(React.createElement("p", null, "license:") )];
          for( i in this.props.license ){
            license.push( ( React.createElement("div", {class: "license"}) ) );
          }
        } else {
          license = ( React.createElement("div", {class: "license"}, this.props.license) );
        }
      }
      var workExample;
      if( this.props.workExample ){
        if( this.props.workExample instanceof Array ){
          workExample = [(React.createElement("p", null, "workExample:") )];
          for( i in this.props.workExample ){
            workExample.push( ( React.createElement(CreativeWork, {props:  this.props.workExample}) ) );          }
        } else {
          workExample = ( React.createElement(CreativeWork, {props:  this.props.workExample}) );        }
      }
      var mentions;
      if( this.props.mentions ){
        if( this.props.mentions instanceof Array ){
          mentions = [(React.createElement("p", null, "mentions:") )];
          for( i in this.props.mentions ){
            mentions.push( ( React.createElement(Thing, {props:  this.props.mentions}) ) );          }
        } else {
          mentions = ( React.createElement(Thing, {props:  this.props.mentions}) );        }
      }
      var comment;
      if( this.props.comment ){
        if( this.props.comment instanceof Array ){
          comment = [(React.createElement("p", null, "comment:") )];
          for( i in this.props.comment ){
            comment.push( ( React.createElement(Comment, {props:  this.props.comment}) ) );          }
        } else {
          comment = ( React.createElement(Comment, {props:  this.props.comment}) );        }
      }
      var isBasedOnUrl;
      if( this.props.isBasedOnUrl ){
        if( this.props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [(React.createElement("p", null, "isBasedOnUrl:") )];
          for( i in this.props.isBasedOnUrl ){
            isBasedOnUrl.push( ( React.createElement("div", {class: "isBasedOnUrl"}) ) );
          }
        } else {
          isBasedOnUrl = ( React.createElement("div", {class: "isBasedOnUrl"}, this.props.isBasedOnUrl) );
        }
      }
      var encoding;
      if( this.props.encoding ){
        if( this.props.encoding instanceof Array ){
          encoding = [(React.createElement("p", null, "encoding:") )];
          for( i in this.props.encoding ){
            encoding.push( ( React.createElement(MediaObject, {props:  this.props.encoding}) ) );          }
        } else {
          encoding = ( React.createElement(MediaObject, {props:  this.props.encoding}) );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var associatedMedia;
      if( this.props.associatedMedia ){
        if( this.props.associatedMedia instanceof Array ){
          associatedMedia = [(React.createElement("p", null, "associatedMedia:") )];
          for( i in this.props.associatedMedia ){
            associatedMedia.push( ( React.createElement(MediaObject, {props:  this.props.associatedMedia}) ) );          }
        } else {
          associatedMedia = ( React.createElement(MediaObject, {props:  this.props.associatedMedia}) );        }
      }
      var featureList;
      if( this.props.featureList ){
        if( this.props.featureList instanceof Array ){
          featureList = [(React.createElement("p", null, "featureList:") )];
          for( i in this.props.featureList ){
            featureList.push( ( React.createElement("div", {class: "featureList"}) ) );
          }
        } else {
          featureList = ( React.createElement("div", {class: "featureList"}, this.props.featureList) );
        }
      }
      var contributor;
      if( this.props.contributor ){
        if( this.props.contributor instanceof Array ){
          contributor = [(React.createElement("p", null, "contributor:") )];
          for( i in this.props.contributor ){
            contributor.push( ( React.createElement("div", {class: "contributor"}) ) );
          }
        } else {
          contributor = ( React.createElement("div", {class: "contributor"}, this.props.contributor) );
        }
      }
      var thumbnailUrl;
      if( this.props.thumbnailUrl ){
        if( this.props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [(React.createElement("p", null, "thumbnailUrl:") )];
          for( i in this.props.thumbnailUrl ){
            thumbnailUrl.push( ( React.createElement("div", {class: "thumbnailUrl"}) ) );
          }
        } else {
          thumbnailUrl = ( React.createElement("div", {class: "thumbnailUrl"}, this.props.thumbnailUrl) );
        }
      }
      var mainEntity;
      if( this.props.mainEntity ){
        if( this.props.mainEntity instanceof Array ){
          mainEntity = [(React.createElement("p", null, "mainEntity:") )];
          for( i in this.props.mainEntity ){
            mainEntity.push( ( React.createElement(Thing, {props:  this.props.mainEntity}) ) );          }
        } else {
          mainEntity = ( React.createElement(Thing, {props:  this.props.mainEntity}) );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var accessibilityFeature;
      if( this.props.accessibilityFeature ){
        if( this.props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [(React.createElement("p", null, "accessibilityFeature:") )];
          for( i in this.props.accessibilityFeature ){
            accessibilityFeature.push( ( React.createElement("div", {class: "accessibilityFeature"}) ) );
          }
        } else {
          accessibilityFeature = ( React.createElement("div", {class: "accessibilityFeature"}, this.props.accessibilityFeature) );
        }
      }
      var interactivityType;
      if( this.props.interactivityType ){
        if( this.props.interactivityType instanceof Array ){
          interactivityType = [(React.createElement("p", null, "interactivityType:") )];
          for( i in this.props.interactivityType ){
            interactivityType.push( ( React.createElement("div", {class: "interactivityType"}) ) );
          }
        } else {
          interactivityType = ( React.createElement("div", {class: "interactivityType"}, this.props.interactivityType) );
        }
      }
      var publication;
      if( this.props.publication ){
        if( this.props.publication instanceof Array ){
          publication = [(React.createElement("p", null, "publication:") )];
          for( i in this.props.publication ){
            publication.push( ( React.createElement(PublicationEvent, {props:  this.props.publication}) ) );          }
        } else {
          publication = ( React.createElement(PublicationEvent, {props:  this.props.publication}) );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [(React.createElement("p", null, "offers:") )];
          for( i in this.props.offers ){
            offers.push( ( React.createElement(Offer, {props:  this.props.offers}) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  this.props.offers}) );        }
      }
      var editor;
      if( this.props.editor ){
        if( this.props.editor instanceof Array ){
          editor = [(React.createElement("p", null, "editor:") )];
          for( i in this.props.editor ){
            editor.push( ( React.createElement(Person, {props:  this.props.editor}) ) );          }
        } else {
          editor = ( React.createElement(Person, {props:  this.props.editor}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var recordedAt;
      if( this.props.recordedAt ){
        if( this.props.recordedAt instanceof Array ){
          recordedAt = [(React.createElement("p", null, "recordedAt:") )];
          for( i in this.props.recordedAt ){
            recordedAt.push( ( React.createElement(Event, {props:  this.props.recordedAt}) ) );          }
        } else {
          recordedAt = ( React.createElement(Event, {props:  this.props.recordedAt}) );        }
      }
      var softwareVersion;
      if( this.props.softwareVersion ){
        if( this.props.softwareVersion instanceof Array ){
          softwareVersion = [(React.createElement("p", null, "softwareVersion:") )];
          for( i in this.props.softwareVersion ){
            softwareVersion.push( ( React.createElement("div", {class: "softwareVersion"}) ) );
          }
        } else {
          softwareVersion = ( React.createElement("div", {class: "softwareVersion"}, this.props.softwareVersion) );
        }
      }
      var hasPart;
      if( this.props.hasPart ){
        if( this.props.hasPart instanceof Array ){
          hasPart = [(React.createElement("p", null, "hasPart:") )];
          for( i in this.props.hasPart ){
            hasPart.push( ( React.createElement(CreativeWork, {props:  this.props.hasPart}) ) );          }
        } else {
          hasPart = ( React.createElement(CreativeWork, {props:  this.props.hasPart}) );        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [(React.createElement("p", null, "award:") )];
          for( i in this.props.award ){
            award.push( ( React.createElement("div", {class: "award"}) ) );
          }
        } else {
          award = ( React.createElement("div", {class: "award"}, this.props.award) );
        }
      }
      var copyrightHolder;
      if( this.props.copyrightHolder ){
        if( this.props.copyrightHolder instanceof Array ){
          copyrightHolder = [(React.createElement("p", null, "copyrightHolder:") )];
          for( i in this.props.copyrightHolder ){
            copyrightHolder.push( ( React.createElement("div", {class: "copyrightHolder"}) ) );
          }
        } else {
          copyrightHolder = ( React.createElement("div", {class: "copyrightHolder"}, this.props.copyrightHolder) );
        }
      }
      var accessibilityAPI;
      if( this.props.accessibilityAPI ){
        if( this.props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [(React.createElement("p", null, "accessibilityAPI:") )];
          for( i in this.props.accessibilityAPI ){
            accessibilityAPI.push( ( React.createElement("div", {class: "accessibilityAPI"}) ) );
          }
        } else {
          accessibilityAPI = ( React.createElement("div", {class: "accessibilityAPI"}, this.props.accessibilityAPI) );
        }
      }
      var downloadUrl;
      if( this.props.downloadUrl ){
        if( this.props.downloadUrl instanceof Array ){
          downloadUrl = [(React.createElement("p", null, "downloadUrl:") )];
          for( i in this.props.downloadUrl ){
            downloadUrl.push( ( React.createElement("div", {class: "downloadUrl"}) ) );
          }
        } else {
          downloadUrl = ( React.createElement("div", {class: "downloadUrl"}, this.props.downloadUrl) );
        }
      }
      var learningResourceType;
      if( this.props.learningResourceType ){
        if( this.props.learningResourceType instanceof Array ){
          learningResourceType = [(React.createElement("p", null, "learningResourceType:") )];
          for( i in this.props.learningResourceType ){
            learningResourceType.push( ( React.createElement("div", {class: "learningResourceType"}) ) );
          }
        } else {
          learningResourceType = ( React.createElement("div", {class: "learningResourceType"}, this.props.learningResourceType) );
        }
      }
      var sourceOrganization;
      if( this.props.sourceOrganization ){
        if( this.props.sourceOrganization instanceof Array ){
          sourceOrganization = [(React.createElement("p", null, "sourceOrganization:") )];
          for( i in this.props.sourceOrganization ){
            sourceOrganization.push( ( React.createElement(Organization, {props:  this.props.sourceOrganization}) ) );          }
        } else {
          sourceOrganization = ( React.createElement(Organization, {props:  this.props.sourceOrganization}) );        }
      }
      var operatingSystem;
      if( this.props.operatingSystem ){
        if( this.props.operatingSystem instanceof Array ){
          operatingSystem = [(React.createElement("p", null, "operatingSystem:") )];
          for( i in this.props.operatingSystem ){
            operatingSystem.push( ( React.createElement("div", {class: "operatingSystem"}) ) );
          }
        } else {
          operatingSystem = ( React.createElement("div", {class: "operatingSystem"}, this.props.operatingSystem) );
        }
      }
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [(React.createElement("p", null, "inLanguage:") )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( React.createElement("div", {class: "inLanguage"}) ) );
          }
        } else {
          inLanguage = ( React.createElement("div", {class: "inLanguage"}, this.props.inLanguage) );
        }
      }
      var citation;
      if( this.props.citation ){
        if( this.props.citation instanceof Array ){
          citation = [(React.createElement("p", null, "citation:") )];
          for( i in this.props.citation ){
            citation.push( ( React.createElement("div", {class: "citation"}) ) );
          }
        } else {
          citation = ( React.createElement("div", {class: "citation"}, this.props.citation) );
        }
      }
      var countriesSupported;
      if( this.props.countriesSupported ){
        if( this.props.countriesSupported instanceof Array ){
          countriesSupported = [(React.createElement("p", null, "countriesSupported:") )];
          for( i in this.props.countriesSupported ){
            countriesSupported.push( ( React.createElement("div", {class: "countriesSupported"}) ) );
          }
        } else {
          countriesSupported = ( React.createElement("div", {class: "countriesSupported"}, this.props.countriesSupported) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var availableOnDevice;
      if( this.props.availableOnDevice ){
        if( this.props.availableOnDevice instanceof Array ){
          availableOnDevice = [(React.createElement("p", null, "availableOnDevice:") )];
          for( i in this.props.availableOnDevice ){
            availableOnDevice.push( ( React.createElement("div", {class: "availableOnDevice"}) ) );
          }
        } else {
          availableOnDevice = ( React.createElement("div", {class: "availableOnDevice"}, this.props.availableOnDevice) );
        }
      }
      var applicationSubCategory;
      if( this.props.applicationSubCategory ){
        if( this.props.applicationSubCategory instanceof Array ){
          applicationSubCategory = [(React.createElement("p", null, "applicationSubCategory:") )];
          for( i in this.props.applicationSubCategory ){
            applicationSubCategory.push( ( React.createElement("div", {class: "applicationSubCategory"}) ) );
          }
        } else {
          applicationSubCategory = ( React.createElement("div", {class: "applicationSubCategory"}, this.props.applicationSubCategory) );
        }
      }
      var softwareHelp;
      if( this.props.softwareHelp ){
        if( this.props.softwareHelp instanceof Array ){
          softwareHelp = [(React.createElement("p", null, "softwareHelp:") )];
          for( i in this.props.softwareHelp ){
            softwareHelp.push( ( React.createElement(CreativeWork, {props:  this.props.softwareHelp}) ) );          }
        } else {
          softwareHelp = ( React.createElement(CreativeWork, {props:  this.props.softwareHelp}) );        }
      }
      var author;
      if( this.props.author ){
        if( this.props.author instanceof Array ){
          author = [(React.createElement("p", null, "author:") )];
          for( i in this.props.author ){
            author.push( ( React.createElement("div", {class: "author"}) ) );
          }
        } else {
          author = ( React.createElement("div", {class: "author"}, this.props.author) );
        }
      }
      var dateModified;
      if( this.props.dateModified ){
        if( this.props.dateModified instanceof Array ){
          dateModified = [(React.createElement("p", null, "dateModified:") )];
          for( i in this.props.dateModified ){
            dateModified.push( ( React.createElement("div", {class: "dateModified"}) ) );
          }
        } else {
          dateModified = ( React.createElement("div", {class: "dateModified"}, this.props.dateModified) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var screenshot;
      if( this.props.screenshot ){
        if( this.props.screenshot instanceof Array ){
          screenshot = [(React.createElement("p", null, "screenshot:") )];
          for( i in this.props.screenshot ){
            screenshot.push( ( React.createElement("div", {class: "screenshot"}) ) );
          }
        } else {
          screenshot = ( React.createElement("div", {class: "screenshot"}, this.props.screenshot) );
        }
      }
      var releasedEvent;
      if( this.props.releasedEvent ){
        if( this.props.releasedEvent instanceof Array ){
          releasedEvent = [(React.createElement("p", null, "releasedEvent:") )];
          for( i in this.props.releasedEvent ){
            releasedEvent.push( ( React.createElement(PublicationEvent, {props:  this.props.releasedEvent}) ) );          }
        } else {
          releasedEvent = ( React.createElement(PublicationEvent, {props:  this.props.releasedEvent}) );        }
      }
      var translator;
      if( this.props.translator ){
        if( this.props.translator instanceof Array ){
          translator = [(React.createElement("p", null, "translator:") )];
          for( i in this.props.translator ){
            translator.push( ( React.createElement("div", {class: "translator"}) ) );
          }
        } else {
          translator = ( React.createElement("div", {class: "translator"}, this.props.translator) );
        }
      }
      var softwareAddOn;
      if( this.props.softwareAddOn ){
        if( this.props.softwareAddOn instanceof Array ){
          softwareAddOn = [(React.createElement("p", null, "softwareAddOn:") )];
          for( i in this.props.softwareAddOn ){
            softwareAddOn.push( ( React.createElement(SoftwareApplication, {props:  this.props.softwareAddOn}) ) );          }
        } else {
          softwareAddOn = ( React.createElement(SoftwareApplication, {props:  this.props.softwareAddOn}) );        }
      }
      var storageRequirements;
      if( this.props.storageRequirements ){
        if( this.props.storageRequirements instanceof Array ){
          storageRequirements = [(React.createElement("p", null, "storageRequirements:") )];
          for( i in this.props.storageRequirements ){
            storageRequirements.push( ( React.createElement("div", {class: "storageRequirements"}) ) );
          }
        } else {
          storageRequirements = ( React.createElement("div", {class: "storageRequirements"}, this.props.storageRequirements) );
        }
      }
      var schemaVersion;
      if( this.props.schemaVersion ){
        if( this.props.schemaVersion instanceof Array ){
          schemaVersion = [(React.createElement("p", null, "schemaVersion:") )];
          for( i in this.props.schemaVersion ){
            schemaVersion.push( ( React.createElement("div", {class: "schemaVersion"}) ) );
          }
        } else {
          schemaVersion = ( React.createElement("div", {class: "schemaVersion"}, this.props.schemaVersion) );
        }
      }
      var contentLocation;
      if( this.props.contentLocation ){
        if( this.props.contentLocation instanceof Array ){
          contentLocation = [(React.createElement("p", null, "contentLocation:") )];
          for( i in this.props.contentLocation ){
            contentLocation.push( ( React.createElement(Place, {props:  this.props.contentLocation}) ) );          }
        } else {
          contentLocation = ( React.createElement(Place, {props:  this.props.contentLocation}) );        }
      }
      var timeRequired;
      if( this.props.timeRequired ){
        if( this.props.timeRequired instanceof Array ){
          timeRequired = [(React.createElement("p", null, "timeRequired:") )];
          for( i in this.props.timeRequired ){
            timeRequired.push( ( React.createElement(Duration, {props:  this.props.timeRequired}) ) );          }
        } else {
          timeRequired = ( React.createElement(Duration, {props:  this.props.timeRequired}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var position;
      if( this.props.position ){
        if( this.props.position instanceof Array ){
          position = [(React.createElement("p", null, "position:") )];
          for( i in this.props.position ){
            position.push( ( React.createElement("div", {class: "position"}) ) );
          }
        } else {
          position = ( React.createElement("div", {class: "position"}, this.props.position) );
        }
      }
      var audio;
      if( this.props.audio ){
        if( this.props.audio instanceof Array ){
          audio = [(React.createElement("p", null, "audio:") )];
          for( i in this.props.audio ){
            audio.push( ( React.createElement(AudioObject, {props:  this.props.audio}) ) );          }
        } else {
          audio = ( React.createElement(AudioObject, {props:  this.props.audio}) );        }
      }
      return (React.createElement("div", {title: "SoftwareApplication", className: "SoftwareApplication entity"}, 
         educationalUse, 
         producer, 
         text, 
         datePublished, 
         processorRequirements, 
         alternativeHeadline, 
         accountablePerson, 
         keywords, 
         countriesNotSupported, 
         headline, 
         character, 
         contentRating, 
         applicationCategory, 
         exampleOfWork, 
         publishingPrinciples, 
         releaseNotes, 
         dateCreated, 
         memoryRequirements, 
         permissions, 
         potentialAction, 
         name, 
         aggregateRating, 
         audience, 
         accessibilityControl, 
         copyrightYear, 
         installUrl, 
         creator, 
         commentCount, 
         video, 
         typicalAgeRange, 
         fileFormat, 
         applicationSuite, 
         discussionUrl, 
         review, 
         isFamilyFriendly, 
         version, 
         provider, 
         isPartOf, 
         accessibilityHazard, 
         softwareRequirements, 
         educationalAlignment, 
         fileSize, 
         genre, 
         publisher, 
         about, 
         license, 
         workExample, 
         mentions, 
         comment, 
         isBasedOnUrl, 
         encoding, 
         sameAs, 
         image, 
         associatedMedia, 
         featureList, 
         contributor, 
         thumbnailUrl, 
         mainEntity, 
         alternateName, 
         accessibilityFeature, 
         interactivityType, 
         publication, 
         offers, 
         editor, 
         mainEntityOfPage, 
         recordedAt, 
         softwareVersion, 
         hasPart, 
         award, 
         copyrightHolder, 
         accessibilityAPI, 
         downloadUrl, 
         learningResourceType, 
         sourceOrganization, 
         operatingSystem, 
         inLanguage, 
         citation, 
         countriesSupported, 
         additionalType, 
         availableOnDevice, 
         applicationSubCategory, 
         softwareHelp, 
         author, 
         dateModified, 
         description, 
         screenshot, 
         releasedEvent, 
         translator, 
         softwareAddOn, 
         storageRequirements, 
         schemaVersion, 
         contentLocation, 
         timeRequired, 
         url, 
         position, 
         audio 
     ));
    }
  });
});
