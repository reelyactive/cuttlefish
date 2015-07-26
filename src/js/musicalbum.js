/* Thing > CreativeWork > MusicPlaylist > MusicAlbum - A collection of music tracks.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './offer', './imageobject', './aggregaterating', './musicalbumreleasetype', './integer', './creativework', './review', './audioobject', './musicrecording', './language', './person', './publicationevent', './place', './itemlist', './action', './organization', './comment', './musicalbumproductiontype', './thing', './audience', './boolean', './musicgroup', './duration', './musicrelease', './event'], function(React, AlignmentObject, VideoObject, MediaObject, Offer, ImageObject, AggregateRating, MusicAlbumReleaseType, Integer, CreativeWork, Review, AudioObject, MusicRecording, Language, Person, PublicationEvent, Place, ItemList, Action, Organization, Comment, MusicAlbumProductionType, Thing, Audience, Boolean, MusicGroup, Duration, MusicRelease, Event){
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
          comment = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          comment = comment.concat( props.comment.map( function(result, index){
              return ( React.createElement(Comment, React.__spread({},  result, {key: index})) )
           }) );
         comment.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          comment = ( React.createElement(Comment, {props:  props.comment}) );        }
      }
      var copyrightYear;
      if( props.copyrightYear ){
        if( props.copyrightYear instanceof Array ){
          copyrightYear = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          copyrightYear = copyrightYear.concat( props.copyrightYear.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. copyrightYear is a Number."}) )
           }) );
         copyrightYear.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            copyrightYear = ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightYear is a Number."}) );
        }
      }
      var hasPart;
      if( props.hasPart ){
        if( props.hasPart instanceof Array ){
          hasPart = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          hasPart = hasPart.concat( props.hasPart.map( function(result, index){
              return ( React.createElement(CreativeWork, React.__spread({},  result, {key: index})) )
           }) );
         hasPart.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          hasPart = ( React.createElement(CreativeWork, {props:  props.hasPart}) );        }
      }
      var version;
      if( props.version ){
        if( props.version instanceof Array ){
          version = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          version = version.concat( props.version.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. version is a Number."}) )
           }) );
         version.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            version = ( React.createElement("div", {"data-advice": "Put your HTML here. version is a Number."}) );
        }
      }
      var producer;
      if( props.producer ){
        if( props.producer instanceof Array ){
          producer = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          producer = producer.concat( props.producer.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. producer is a Person or" + ' ' +
"Organization."}) )
           }) );
         producer.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            producer = ( React.createElement("div", {"data-advice": "Put your HTML here. producer is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var creator;
      if( props.creator ){
        if( props.creator instanceof Array ){
          creator = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          creator = creator.concat( props.creator.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. creator is a Person or" + ' ' +
"Organization."}) )
           }) );
         creator.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            creator = ( React.createElement("div", {"data-advice": "Put your HTML here. creator is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var publishingPrinciples;
      if( props.publishingPrinciples ){
        if( props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          publishingPrinciples = publishingPrinciples.concat( props.publishingPrinciples.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. publishingPrinciples is a URL."}) )
           }) );
         publishingPrinciples.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            publishingPrinciples = ( React.createElement("div", {"data-advice": "Put your HTML here. publishingPrinciples is a URL."}) );
        }
      }
      var text;
      if( props.text ){
        if( props.text instanceof Array ){
          text = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          text = text.concat( props.text.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. text is a Text."}) )
           }) );
         text.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            text = ( React.createElement("div", {"data-advice": "Put your HTML here. text is a Text."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var albumProductionType;
      if( props.albumProductionType ){
        if( props.albumProductionType instanceof Array ){
          albumProductionType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          albumProductionType = albumProductionType.concat( props.albumProductionType.map( function(result, index){
              return ( React.createElement(MusicAlbumProductionType, React.__spread({},  result, {key: index})) )
           }) );
         albumProductionType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          albumProductionType = ( React.createElement(MusicAlbumProductionType, {props:  props.albumProductionType}) );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var datePublished;
      if( props.datePublished ){
        if( props.datePublished instanceof Array ){
          datePublished = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          datePublished = datePublished.concat( props.datePublished.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. datePublished is a Date."}) )
           }) );
         datePublished.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            datePublished = ( React.createElement("div", {"data-advice": "Put your HTML here. datePublished is a Date."}) );
        }
      }
      var albumRelease;
      if( props.albumRelease ){
        if( props.albumRelease instanceof Array ){
          albumRelease = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          albumRelease = albumRelease.concat( props.albumRelease.map( function(result, index){
              return ( React.createElement(MusicRelease, React.__spread({},  result, {key: index})) )
           }) );
         albumRelease.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          albumRelease = ( React.createElement(MusicRelease, {props:  props.albumRelease}) );        }
      }
      var associatedMedia;
      if( props.associatedMedia ){
        if( props.associatedMedia instanceof Array ){
          associatedMedia = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          associatedMedia = associatedMedia.concat( props.associatedMedia.map( function(result, index){
              return ( React.createElement(MediaObject, React.__spread({},  result, {key: index})) )
           }) );
         associatedMedia.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          associatedMedia = ( React.createElement(MediaObject, {props:  props.associatedMedia}) );        }
      }
      var alternativeHeadline;
      if( props.alternativeHeadline ){
        if( props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternativeHeadline = alternativeHeadline.concat( props.alternativeHeadline.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternativeHeadline is a Text."}) )
           }) );
         alternativeHeadline.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternativeHeadline = ( React.createElement("div", {"data-advice": "Put your HTML here. alternativeHeadline is a Text."}) );
        }
      }
      var accountablePerson;
      if( props.accountablePerson ){
        if( props.accountablePerson instanceof Array ){
          accountablePerson = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          accountablePerson = accountablePerson.concat( props.accountablePerson.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         accountablePerson.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          accountablePerson = ( React.createElement(Person, {props:  props.accountablePerson}) );        }
      }
      var video;
      if( props.video ){
        if( props.video instanceof Array ){
          video = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          video = video.concat( props.video.map( function(result, index){
              return ( React.createElement(VideoObject, React.__spread({},  result, {key: index})) )
           }) );
         video.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          video = ( React.createElement(VideoObject, {props:  props.video}) );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          typicalAgeRange = typicalAgeRange.concat( props.typicalAgeRange.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. typicalAgeRange is a Text."}) )
           }) );
         typicalAgeRange.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            typicalAgeRange = ( React.createElement("div", {"data-advice": "Put your HTML here. typicalAgeRange is a Text."}) );
        }
      }
      var contributor;
      if( props.contributor ){
        if( props.contributor instanceof Array ){
          contributor = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          contributor = contributor.concat( props.contributor.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. contributor is a Person or" + ' ' +
"Organization."}) )
           }) );
         contributor.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            contributor = ( React.createElement("div", {"data-advice": "Put your HTML here. contributor is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var thumbnailUrl;
      if( props.thumbnailUrl ){
        if( props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          thumbnailUrl = thumbnailUrl.concat( props.thumbnailUrl.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. thumbnailUrl is a URL."}) )
           }) );
         thumbnailUrl.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            thumbnailUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. thumbnailUrl is a URL."}) );
        }
      }
      var mainEntity;
      if( props.mainEntity ){
        if( props.mainEntity instanceof Array ){
          mainEntity = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntity = mainEntity.concat( props.mainEntity.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         mainEntity.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          mainEntity = ( React.createElement(Thing, {props:  props.mainEntity}) );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var accessibilityFeature;
      if( props.accessibilityFeature ){
        if( props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          accessibilityFeature = accessibilityFeature.concat( props.accessibilityFeature.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. accessibilityFeature is a Text."}) )
           }) );
         accessibilityFeature.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            accessibilityFeature = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityFeature is a Text."}) );
        }
      }
      var albumReleaseType;
      if( props.albumReleaseType ){
        if( props.albumReleaseType instanceof Array ){
          albumReleaseType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          albumReleaseType = albumReleaseType.concat( props.albumReleaseType.map( function(result, index){
              return ( React.createElement(MusicAlbumReleaseType, React.__spread({},  result, {key: index})) )
           }) );
         albumReleaseType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          albumReleaseType = ( React.createElement(MusicAlbumReleaseType, {props:  props.albumReleaseType}) );        }
      }
      var publication;
      if( props.publication ){
        if( props.publication instanceof Array ){
          publication = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          publication = publication.concat( props.publication.map( function(result, index){
              return ( React.createElement(PublicationEvent, React.__spread({},  result, {key: index})) )
           }) );
         publication.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          publication = ( React.createElement(PublicationEvent, {props:  props.publication}) );        }
      }
      var discussionUrl;
      if( props.discussionUrl ){
        if( props.discussionUrl instanceof Array ){
          discussionUrl = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          discussionUrl = discussionUrl.concat( props.discussionUrl.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. discussionUrl is a URL."}) )
           }) );
         discussionUrl.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            discussionUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. discussionUrl is a URL."}) );
        }
      }
      var author;
      if( props.author ){
        if( props.author instanceof Array ){
          author = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          author = author.concat( props.author.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. author is a Person or" + ' ' +
"Organization."}) )
           }) );
         author.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            author = ( React.createElement("div", {"data-advice": "Put your HTML here. author is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var headline;
      if( props.headline ){
        if( props.headline instanceof Array ){
          headline = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          headline = headline.concat( props.headline.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. headline is a Text."}) )
           }) );
         headline.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            headline = ( React.createElement("div", {"data-advice": "Put your HTML here. headline is a Text."}) );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          review = review.concat( props.review.map( function(result, index){
              return ( React.createElement(Review, React.__spread({},  result, {key: index})) )
           }) );
         review.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var encoding;
      if( props.encoding ){
        if( props.encoding instanceof Array ){
          encoding = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          encoding = encoding.concat( props.encoding.map( function(result, index){
              return ( React.createElement(MediaObject, React.__spread({},  result, {key: index})) )
           }) );
         encoding.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          encoding = ( React.createElement(MediaObject, {props:  props.encoding}) );        }
      }
      var character;
      if( props.character ){
        if( props.character instanceof Array ){
          character = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          character = character.concat( props.character.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         character.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          character = ( React.createElement(Person, {props:  props.character}) );        }
      }
      var contentRating;
      if( props.contentRating ){
        if( props.contentRating instanceof Array ){
          contentRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          contentRating = contentRating.concat( props.contentRating.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. contentRating is a Text."}) )
           }) );
         contentRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            contentRating = ( React.createElement("div", {"data-advice": "Put your HTML here. contentRating is a Text."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var educationalAlignment;
      if( props.educationalAlignment ){
        if( props.educationalAlignment instanceof Array ){
          educationalAlignment = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          educationalAlignment = educationalAlignment.concat( props.educationalAlignment.map( function(result, index){
              return ( React.createElement(AlignmentObject, React.__spread({},  result, {key: index})) )
           }) );
         educationalAlignment.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          educationalAlignment = ( React.createElement(AlignmentObject, {props:  props.educationalAlignment}) );        }
      }
      var exampleOfWork;
      if( props.exampleOfWork ){
        if( props.exampleOfWork instanceof Array ){
          exampleOfWork = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          exampleOfWork = exampleOfWork.concat( props.exampleOfWork.map( function(result, index){
              return ( React.createElement(CreativeWork, React.__spread({},  result, {key: index})) )
           }) );
         exampleOfWork.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          exampleOfWork = ( React.createElement(CreativeWork, {props:  props.exampleOfWork}) );        }
      }
      var editor;
      if( props.editor ){
        if( props.editor instanceof Array ){
          editor = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          editor = editor.concat( props.editor.map( function(result, index){
              return ( React.createElement(Person, React.__spread({},  result, {key: index})) )
           }) );
         editor.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          editor = ( React.createElement(Person, {props:  props.editor}) );        }
      }
      var provider;
      if( props.provider ){
        if( props.provider instanceof Array ){
          provider = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          provider = provider.concat( props.provider.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. provider is a Person or" + ' ' +
"Organization."}) )
           }) );
         provider.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            provider = ( React.createElement("div", {"data-advice": "Put your HTML here. provider is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var isPartOf;
      if( props.isPartOf ){
        if( props.isPartOf instanceof Array ){
          isPartOf = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isPartOf = isPartOf.concat( props.isPartOf.map( function(result, index){
              return ( React.createElement(CreativeWork, React.__spread({},  result, {key: index})) )
           }) );
         isPartOf.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          isPartOf = ( React.createElement(CreativeWork, {props:  props.isPartOf}) );        }
      }
      var recordedAt;
      if( props.recordedAt ){
        if( props.recordedAt instanceof Array ){
          recordedAt = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          recordedAt = recordedAt.concat( props.recordedAt.map( function(result, index){
              return ( React.createElement(Event, React.__spread({},  result, {key: index})) )
           }) );
         recordedAt.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          recordedAt = ( React.createElement(Event, {props:  props.recordedAt}) );        }
      }
      var byArtist;
      if( props.byArtist ){
        if( props.byArtist instanceof Array ){
          byArtist = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          byArtist = byArtist.concat( props.byArtist.map( function(result, index){
              return ( React.createElement(MusicGroup, React.__spread({},  result, {key: index})) )
           }) );
         byArtist.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          byArtist = ( React.createElement(MusicGroup, {props:  props.byArtist}) );        }
      }
      var accessibilityHazard;
      if( props.accessibilityHazard ){
        if( props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          accessibilityHazard = accessibilityHazard.concat( props.accessibilityHazard.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. accessibilityHazard is a Text."}) )
           }) );
         accessibilityHazard.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            accessibilityHazard = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityHazard is a Text."}) );
        }
      }
      var dateModified;
      if( props.dateModified ){
        if( props.dateModified instanceof Array ){
          dateModified = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          dateModified = dateModified.concat( props.dateModified.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. dateModified is a Date."}) )
           }) );
         dateModified.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            dateModified = ( React.createElement("div", {"data-advice": "Put your HTML here. dateModified is a Date."}) );
        }
      }
      var timeRequired;
      if( props.timeRequired ){
        if( props.timeRequired instanceof Array ){
          timeRequired = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          timeRequired = timeRequired.concat( props.timeRequired.map( function(result, index){
              return ( React.createElement(Duration, React.__spread({},  result, {key: index})) )
           }) );
         timeRequired.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          timeRequired = ( React.createElement(Duration, {props:  props.timeRequired}) );        }
      }
      var citation;
      if( props.citation ){
        if( props.citation instanceof Array ){
          citation = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          citation = citation.concat( props.citation.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. citation is a Text or" + ' ' +
"CreativeWork."}) )
           }) );
         citation.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            citation = ( React.createElement("div", {"data-advice": "Put your HTML here. citation is a Text or" + ' ' +
"CreativeWork."}) );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var publisher;
      if( props.publisher ){
        if( props.publisher instanceof Array ){
          publisher = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          publisher = publisher.concat( props.publisher.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         publisher.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          publisher = ( React.createElement(Organization, {props:  props.publisher}) );        }
      }
      var track;
      if( props.track ){
        if( props.track instanceof Array ){
          track = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          track = track.concat( props.track.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. track is a ItemList or" + ' ' +
"MusicRecording."}) )
           }) );
         track.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            track = ( React.createElement("div", {"data-advice": "Put your HTML here. track is a ItemList or" + ' ' +
"MusicRecording."}) );
        }
      }
      var learningResourceType;
      if( props.learningResourceType ){
        if( props.learningResourceType instanceof Array ){
          learningResourceType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          learningResourceType = learningResourceType.concat( props.learningResourceType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. learningResourceType is a Text."}) )
           }) );
         learningResourceType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            learningResourceType = ( React.createElement("div", {"data-advice": "Put your HTML here. learningResourceType is a Text."}) );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          award = award.concat( props.award.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. award is a Text."}) )
           }) );
         award.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
        }
      }
      var dateCreated;
      if( props.dateCreated ){
        if( props.dateCreated instanceof Array ){
          dateCreated = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          dateCreated = dateCreated.concat( props.dateCreated.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. dateCreated is a Date."}) )
           }) );
         dateCreated.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            dateCreated = ( React.createElement("div", {"data-advice": "Put your HTML here. dateCreated is a Date."}) );
        }
      }
      var translator;
      if( props.translator ){
        if( props.translator instanceof Array ){
          translator = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          translator = translator.concat( props.translator.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. translator is a Person or" + ' ' +
"Organization."}) )
           }) );
         translator.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            translator = ( React.createElement("div", {"data-advice": "Put your HTML here. translator is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          offers = offers.concat( props.offers.map( function(result, index){
              return ( React.createElement(Offer, React.__spread({},  result, {key: index})) )
           }) );
         offers.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          offers = ( React.createElement(Offer, {props:  props.offers}) );        }
      }
      var copyrightHolder;
      if( props.copyrightHolder ){
        if( props.copyrightHolder instanceof Array ){
          copyrightHolder = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          copyrightHolder = copyrightHolder.concat( props.copyrightHolder.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. copyrightHolder is a Person or" + ' ' +
"Organization."}) )
           }) );
         copyrightHolder.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            copyrightHolder = ( React.createElement("div", {"data-advice": "Put your HTML here. copyrightHolder is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var releasedEvent;
      if( props.releasedEvent ){
        if( props.releasedEvent instanceof Array ){
          releasedEvent = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          releasedEvent = releasedEvent.concat( props.releasedEvent.map( function(result, index){
              return ( React.createElement(PublicationEvent, React.__spread({},  result, {key: index})) )
           }) );
         releasedEvent.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          releasedEvent = ( React.createElement(PublicationEvent, {props:  props.releasedEvent}) );        }
      }
      var position;
      if( props.position ){
        if( props.position instanceof Array ){
          position = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          position = position.concat( props.position.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. position is a Text or" + ' ' +
"Integer."}) )
           }) );
         position.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            position = ( React.createElement("div", {"data-advice": "Put your HTML here. position is a Text or" + ' ' +
"Integer."}) );
        }
      }
      var genre;
      if( props.genre ){
        if( props.genre instanceof Array ){
          genre = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          genre = genre.concat( props.genre.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. genre is a Text."}) )
           }) );
         genre.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            genre = ( React.createElement("div", {"data-advice": "Put your HTML here. genre is a Text."}) );
        }
      }
      var interactivityType;
      if( props.interactivityType ){
        if( props.interactivityType instanceof Array ){
          interactivityType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          interactivityType = interactivityType.concat( props.interactivityType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. interactivityType is a Text."}) )
           }) );
         interactivityType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            interactivityType = ( React.createElement("div", {"data-advice": "Put your HTML here. interactivityType is a Text."}) );
        }
      }
      var schemaVersion;
      if( props.schemaVersion ){
        if( props.schemaVersion instanceof Array ){
          schemaVersion = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          schemaVersion = schemaVersion.concat( props.schemaVersion.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. schemaVersion is a URL or" + ' ' +
"Text."}) )
           }) );
         schemaVersion.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            schemaVersion = ( React.createElement("div", {"data-advice": "Put your HTML here. schemaVersion is a URL or" + ' ' +
"Text."}) );
        }
      }
      var contentLocation;
      if( props.contentLocation ){
        if( props.contentLocation instanceof Array ){
          contentLocation = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          contentLocation = contentLocation.concat( props.contentLocation.map( function(result, index){
              return ( React.createElement(Place, React.__spread({},  result, {key: index})) )
           }) );
         contentLocation.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          contentLocation = ( React.createElement(Place, {props:  props.contentLocation}) );        }
      }
      var educationalUse;
      if( props.educationalUse ){
        if( props.educationalUse instanceof Array ){
          educationalUse = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          educationalUse = educationalUse.concat( props.educationalUse.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. educationalUse is a Text."}) )
           }) );
         educationalUse.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            educationalUse = ( React.createElement("div", {"data-advice": "Put your HTML here. educationalUse is a Text."}) );
        }
      }
      var accessibilityAPI;
      if( props.accessibilityAPI ){
        if( props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          accessibilityAPI = accessibilityAPI.concat( props.accessibilityAPI.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. accessibilityAPI is a Text."}) )
           }) );
         accessibilityAPI.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            accessibilityAPI = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityAPI is a Text."}) );
        }
      }
      var commentCount;
      if( props.commentCount ){
        if( props.commentCount instanceof Array ){
          commentCount = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          commentCount = commentCount.concat( props.commentCount.map( function(result, index){
              return ( React.createElement(Integer, React.__spread({},  result, {key: index})) )
           }) );
         commentCount.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          commentCount = ( React.createElement(Integer, {props:  props.commentCount}) );        }
      }
      var about;
      if( props.about ){
        if( props.about instanceof Array ){
          about = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          about = about.concat( props.about.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         about.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          about = ( React.createElement(Thing, {props:  props.about}) );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var license;
      if( props.license ){
        if( props.license instanceof Array ){
          license = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          license = license.concat( props.license.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. license is a URL or" + ' ' +
"CreativeWork."}) )
           }) );
         license.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            license = ( React.createElement("div", {"data-advice": "Put your HTML here. license is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( React.createElement(AggregateRating, React.__spread({},  result, {key: index})) )
           }) );
         aggregateRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var workExample;
      if( props.workExample ){
        if( props.workExample instanceof Array ){
          workExample = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          workExample = workExample.concat( props.workExample.map( function(result, index){
              return ( React.createElement(CreativeWork, React.__spread({},  result, {key: index})) )
           }) );
         workExample.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          workExample = ( React.createElement(CreativeWork, {props:  props.workExample}) );        }
      }
      var sourceOrganization;
      if( props.sourceOrganization ){
        if( props.sourceOrganization instanceof Array ){
          sourceOrganization = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sourceOrganization = sourceOrganization.concat( props.sourceOrganization.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         sourceOrganization.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          sourceOrganization = ( React.createElement(Organization, {props:  props.sourceOrganization}) );        }
      }
      var numTracks;
      if( props.numTracks ){
        if( props.numTracks instanceof Array ){
          numTracks = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          numTracks = numTracks.concat( props.numTracks.map( function(result, index){
              return ( React.createElement(Integer, React.__spread({},  result, {key: index})) )
           }) );
         numTracks.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          numTracks = ( React.createElement(Integer, {props:  props.numTracks}) );        }
      }
      var inLanguage;
      if( props.inLanguage ){
        if( props.inLanguage instanceof Array ){
          inLanguage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          inLanguage = inLanguage.concat( props.inLanguage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) )
           }) );
         inLanguage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            inLanguage = ( React.createElement("div", {"data-advice": "Put your HTML here. inLanguage is a Language or" + ' ' +
"Text."}) );
        }
      }
      var isFamilyFriendly;
      if( props.isFamilyFriendly ){
        if( props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isFamilyFriendly = isFamilyFriendly.concat( props.isFamilyFriendly.map( function(result, index){
              return ( React.createElement(Boolean, React.__spread({},  result, {key: index})) )
           }) );
         isFamilyFriendly.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          isFamilyFriendly = ( React.createElement(Boolean, {props:  props.isFamilyFriendly}) );        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          audience = audience.concat( props.audience.map( function(result, index){
              return ( React.createElement(Audience, React.__spread({},  result, {key: index})) )
           }) );
         audience.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          audience = ( React.createElement(Audience, {props:  props.audience}) );        }
      }
      var accessibilityControl;
      if( props.accessibilityControl ){
        if( props.accessibilityControl instanceof Array ){
          accessibilityControl = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          accessibilityControl = accessibilityControl.concat( props.accessibilityControl.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. accessibilityControl is a Text."}) )
           }) );
         accessibilityControl.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            accessibilityControl = ( React.createElement("div", {"data-advice": "Put your HTML here. accessibilityControl is a Text."}) );
        }
      }
      var keywords;
      if( props.keywords ){
        if( props.keywords instanceof Array ){
          keywords = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          keywords = keywords.concat( props.keywords.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. keywords is a Text."}) )
           }) );
         keywords.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            keywords = ( React.createElement("div", {"data-advice": "Put your HTML here. keywords is a Text."}) );
        }
      }
      var mentions;
      if( props.mentions ){
        if( props.mentions instanceof Array ){
          mentions = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mentions = mentions.concat( props.mentions.map( function(result, index){
              return ( React.createElement(Thing, React.__spread({},  result, {key: index})) )
           }) );
         mentions.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          mentions = ( React.createElement(Thing, {props:  props.mentions}) );        }
      }
      var audio;
      if( props.audio ){
        if( props.audio instanceof Array ){
          audio = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          audio = audio.concat( props.audio.map( function(result, index){
              return ( React.createElement(AudioObject, React.__spread({},  result, {key: index})) )
           }) );
         audio.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          audio = ( React.createElement(AudioObject, {props:  props.audio}) );        }
      }
      var isBasedOnUrl;
      if( props.isBasedOnUrl ){
        if( props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isBasedOnUrl = isBasedOnUrl.concat( props.isBasedOnUrl.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. isBasedOnUrl is a URL."}) )
           }) );
         isBasedOnUrl.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            isBasedOnUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. isBasedOnUrl is a URL."}) );
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
