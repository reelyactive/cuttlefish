/* Thing > CreativeWork > SoftwareApplication - A software application.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './offer', './imageobject', './aggregaterating', './softwareapplication', './integer', './creativework', './review', './audioobject', './language', './person', './publicationevent', './place', './action', './organization', './comment', './thing', './audience', './boolean', './duration', './event'], function(React, AlignmentObject, VideoObject, MediaObject, Offer, ImageObject, AggregateRating, SoftwareApplication, Integer, CreativeWork, Review, AudioObject, Language, Person, PublicationEvent, Place, Action, Organization, Comment, Thing, Audience, Boolean, Duration, Event){
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
      var processorRequirements;
      if( props.processorRequirements ){
        if( props.processorRequirements instanceof Array ){
          processorRequirements = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.processorRequirements ){
            processorRequirements.push( ( React.createElement("div", {"data-advice": "Put your HTML here. processorRequirements is a Text."}) ) );
          }
        } else {
            processorRequirements = ( React.createElement("div", {"data-advice": "Put your HTML here. processorRequirements is a Text."}) );
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
      var countriesNotSupported;
      if( props.countriesNotSupported ){
        if( props.countriesNotSupported instanceof Array ){
          countriesNotSupported = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.countriesNotSupported ){
            countriesNotSupported.push( ( React.createElement("div", {"data-advice": "Put your HTML here. countriesNotSupported is a Text."}) ) );
          }
        } else {
            countriesNotSupported = ( React.createElement("div", {"data-advice": "Put your HTML here. countriesNotSupported is a Text."}) );
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
      var applicationCategory;
      if( props.applicationCategory ){
        if( props.applicationCategory instanceof Array ){
          applicationCategory = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.applicationCategory ){
            applicationCategory.push( ( React.createElement("div", {"data-advice": "Put your HTML here. applicationCategory is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            applicationCategory = ( React.createElement("div", {"data-advice": "Put your HTML here. applicationCategory is a Text or" + ' ' +
"URL."}) );
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
      var releaseNotes;
      if( props.releaseNotes ){
        if( props.releaseNotes instanceof Array ){
          releaseNotes = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.releaseNotes ){
            releaseNotes.push( ( React.createElement("div", {"data-advice": "Put your HTML here. releaseNotes is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            releaseNotes = ( React.createElement("div", {"data-advice": "Put your HTML here. releaseNotes is a Text or" + ' ' +
"URL."}) );
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
      var memoryRequirements;
      if( props.memoryRequirements ){
        if( props.memoryRequirements instanceof Array ){
          memoryRequirements = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.memoryRequirements ){
            memoryRequirements.push( ( React.createElement("div", {"data-advice": "Put your HTML here. memoryRequirements is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            memoryRequirements = ( React.createElement("div", {"data-advice": "Put your HTML here. memoryRequirements is a Text or" + ' ' +
"URL."}) );
        }
      }
      var permissions;
      if( props.permissions ){
        if( props.permissions instanceof Array ){
          permissions = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.permissions ){
            permissions.push( ( React.createElement("div", {"data-advice": "Put your HTML here. permissions is a Text."}) ) );
          }
        } else {
            permissions = ( React.createElement("div", {"data-advice": "Put your HTML here. permissions is a Text."}) );
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
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, React.__spread({},  props.aggregateRating )) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
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
      var installUrl;
      if( props.installUrl ){
        if( props.installUrl instanceof Array ){
          installUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.installUrl ){
            installUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. installUrl is a URL."}) ) );
          }
        } else {
            installUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. installUrl is a URL."}) );
        }
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
      var fileFormat;
      if( props.fileFormat ){
        if( props.fileFormat instanceof Array ){
          fileFormat = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.fileFormat ){
            fileFormat.push( ( React.createElement("div", {"data-advice": "Put your HTML here. fileFormat is a Text."}) ) );
          }
        } else {
            fileFormat = ( React.createElement("div", {"data-advice": "Put your HTML here. fileFormat is a Text."}) );
        }
      }
      var applicationSuite;
      if( props.applicationSuite ){
        if( props.applicationSuite instanceof Array ){
          applicationSuite = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.applicationSuite ){
            applicationSuite.push( ( React.createElement("div", {"data-advice": "Put your HTML here. applicationSuite is a Text."}) ) );
          }
        } else {
            applicationSuite = ( React.createElement("div", {"data-advice": "Put your HTML here. applicationSuite is a Text."}) );
        }
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
      var softwareRequirements;
      if( props.softwareRequirements ){
        if( props.softwareRequirements instanceof Array ){
          softwareRequirements = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.softwareRequirements ){
            softwareRequirements.push( ( React.createElement("div", {"data-advice": "Put your HTML here. softwareRequirements is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            softwareRequirements = ( React.createElement("div", {"data-advice": "Put your HTML here. softwareRequirements is a Text or" + ' ' +
"URL."}) );
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
      var fileSize;
      if( props.fileSize ){
        if( props.fileSize instanceof Array ){
          fileSize = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.fileSize ){
            fileSize.push( ( React.createElement(Integer, React.__spread({},  props.fileSize )) ) );          }
        } else {
          fileSize = ( React.createElement(Integer, {props:  props.fileSize}) );        }
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
      var associatedMedia;
      if( props.associatedMedia ){
        if( props.associatedMedia instanceof Array ){
          associatedMedia = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.associatedMedia ){
            associatedMedia.push( ( React.createElement(MediaObject, React.__spread({},  props.associatedMedia )) ) );          }
        } else {
          associatedMedia = ( React.createElement(MediaObject, {props:  props.associatedMedia}) );        }
      }
      var featureList;
      if( props.featureList ){
        if( props.featureList instanceof Array ){
          featureList = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.featureList ){
            featureList.push( ( React.createElement("div", {"data-advice": "Put your HTML here. featureList is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            featureList = ( React.createElement("div", {"data-advice": "Put your HTML here. featureList is a Text or" + ' ' +
"URL."}) );
        }
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
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.offers ){
            offers.push( ( React.createElement(Offer, React.__spread({},  props.offers )) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  props.offers}) );        }
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
      var softwareVersion;
      if( props.softwareVersion ){
        if( props.softwareVersion instanceof Array ){
          softwareVersion = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.softwareVersion ){
            softwareVersion.push( ( React.createElement("div", {"data-advice": "Put your HTML here. softwareVersion is a Text."}) ) );
          }
        } else {
            softwareVersion = ( React.createElement("div", {"data-advice": "Put your HTML here. softwareVersion is a Text."}) );
        }
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
      var downloadUrl;
      if( props.downloadUrl ){
        if( props.downloadUrl instanceof Array ){
          downloadUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.downloadUrl ){
            downloadUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. downloadUrl is a URL."}) ) );
          }
        } else {
            downloadUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. downloadUrl is a URL."}) );
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
      var operatingSystem;
      if( props.operatingSystem ){
        if( props.operatingSystem instanceof Array ){
          operatingSystem = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.operatingSystem ){
            operatingSystem.push( ( React.createElement("div", {"data-advice": "Put your HTML here. operatingSystem is a Text."}) ) );
          }
        } else {
            operatingSystem = ( React.createElement("div", {"data-advice": "Put your HTML here. operatingSystem is a Text."}) );
        }
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
      var countriesSupported;
      if( props.countriesSupported ){
        if( props.countriesSupported instanceof Array ){
          countriesSupported = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.countriesSupported ){
            countriesSupported.push( ( React.createElement("div", {"data-advice": "Put your HTML here. countriesSupported is a Text."}) ) );
          }
        } else {
            countriesSupported = ( React.createElement("div", {"data-advice": "Put your HTML here. countriesSupported is a Text."}) );
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
      var availableOnDevice;
      if( props.availableOnDevice ){
        if( props.availableOnDevice instanceof Array ){
          availableOnDevice = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.availableOnDevice ){
            availableOnDevice.push( ( React.createElement("div", {"data-advice": "Put your HTML here. availableOnDevice is a Text."}) ) );
          }
        } else {
            availableOnDevice = ( React.createElement("div", {"data-advice": "Put your HTML here. availableOnDevice is a Text."}) );
        }
      }
      var applicationSubCategory;
      if( props.applicationSubCategory ){
        if( props.applicationSubCategory instanceof Array ){
          applicationSubCategory = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.applicationSubCategory ){
            applicationSubCategory.push( ( React.createElement("div", {"data-advice": "Put your HTML here. applicationSubCategory is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            applicationSubCategory = ( React.createElement("div", {"data-advice": "Put your HTML here. applicationSubCategory is a Text or" + ' ' +
"URL."}) );
        }
      }
      var softwareHelp;
      if( props.softwareHelp ){
        if( props.softwareHelp instanceof Array ){
          softwareHelp = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.softwareHelp ){
            softwareHelp.push( ( React.createElement(CreativeWork, React.__spread({},  props.softwareHelp )) ) );          }
        } else {
          softwareHelp = ( React.createElement(CreativeWork, {props:  props.softwareHelp}) );        }
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
      var screenshot;
      if( props.screenshot ){
        if( props.screenshot instanceof Array ){
          screenshot = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.screenshot ){
            screenshot.push( ( React.createElement("div", {"data-advice": "Put your HTML here. screenshot is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            screenshot = ( React.createElement("div", {"data-advice": "Put your HTML here. screenshot is a URL or" + ' ' +
"ImageObject."}) );
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
      var softwareAddOn;
      if( props.softwareAddOn ){
        if( props.softwareAddOn instanceof Array ){
          softwareAddOn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.softwareAddOn ){
            softwareAddOn.push( ( React.createElement(SoftwareApplication, React.__spread({},  props.softwareAddOn )) ) );          }
        } else {
          softwareAddOn = ( React.createElement(SoftwareApplication, {props:  props.softwareAddOn}) );        }
      }
      var storageRequirements;
      if( props.storageRequirements ){
        if( props.storageRequirements instanceof Array ){
          storageRequirements = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.storageRequirements ){
            storageRequirements.push( ( React.createElement("div", {"data-advice": "Put your HTML here. storageRequirements is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            storageRequirements = ( React.createElement("div", {"data-advice": "Put your HTML here. storageRequirements is a Text or" + ' ' +
"URL."}) );
        }
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
