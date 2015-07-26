/* Thing > CreativeWork > SoftwareApplication - A software application.. Generated automatically by the reactGenerator. */  var SoftwareApplication= React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var educationalUse;
      if( props.educationalUse ){
        if( props.educationalUse instanceof Array ){
          educationalUse = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          educationalUse = educationalUse.concat( props.educationalUse.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. educationalUse is a Text.'></div> )
           }) );
         educationalUse.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            educationalUse = ( <div data-advice='Put your HTML here. educationalUse is a Text.'></div> );
        }
      }
      var producer;
      if( props.producer ){
        if( props.producer instanceof Array ){
          producer = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          producer = producer.concat( props.producer.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. producer is a Person or
Organization.'></div> )
           }) );
         producer.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            producer = ( <div data-advice='Put your HTML here. producer is a Person or
Organization.'></div> );
        }
      }
      var text;
      if( props.text ){
        if( props.text instanceof Array ){
          text = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          text = text.concat( props.text.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. text is a Text.'></div> )
           }) );
         text.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            text = ( <div data-advice='Put your HTML here. text is a Text.'></div> );
        }
      }
      var datePublished;
      if( props.datePublished ){
        if( props.datePublished instanceof Array ){
          datePublished = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          datePublished = datePublished.concat( props.datePublished.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. datePublished is a Date.'></div> )
           }) );
         datePublished.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            datePublished = ( <div data-advice='Put your HTML here. datePublished is a Date.'></div> );
        }
      }
      var processorRequirements;
      if( props.processorRequirements ){
        if( props.processorRequirements instanceof Array ){
          processorRequirements = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          processorRequirements = processorRequirements.concat( props.processorRequirements.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. processorRequirements is a Text.'></div> )
           }) );
         processorRequirements.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            processorRequirements = ( <div data-advice='Put your HTML here. processorRequirements is a Text.'></div> );
        }
      }
      var alternativeHeadline;
      if( props.alternativeHeadline ){
        if( props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alternativeHeadline = alternativeHeadline.concat( props.alternativeHeadline.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alternativeHeadline is a Text.'></div> )
           }) );
         alternativeHeadline.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alternativeHeadline = ( <div data-advice='Put your HTML here. alternativeHeadline is a Text.'></div> );
        }
      }
      var accountablePerson;
      if( props.accountablePerson ){
        if( props.accountablePerson instanceof Array ){
          accountablePerson = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          accountablePerson = accountablePerson.concat( props.accountablePerson.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         accountablePerson.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          accountablePerson = ( <Person props={ props.accountablePerson } /> );        }
      }
      var keywords;
      if( props.keywords ){
        if( props.keywords instanceof Array ){
          keywords = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          keywords = keywords.concat( props.keywords.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. keywords is a Text.'></div> )
           }) );
         keywords.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            keywords = ( <div data-advice='Put your HTML here. keywords is a Text.'></div> );
        }
      }
      var countriesNotSupported;
      if( props.countriesNotSupported ){
        if( props.countriesNotSupported instanceof Array ){
          countriesNotSupported = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          countriesNotSupported = countriesNotSupported.concat( props.countriesNotSupported.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. countriesNotSupported is a Text.'></div> )
           }) );
         countriesNotSupported.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            countriesNotSupported = ( <div data-advice='Put your HTML here. countriesNotSupported is a Text.'></div> );
        }
      }
      var headline;
      if( props.headline ){
        if( props.headline instanceof Array ){
          headline = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          headline = headline.concat( props.headline.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. headline is a Text.'></div> )
           }) );
         headline.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            headline = ( <div data-advice='Put your HTML here. headline is a Text.'></div> );
        }
      }
      var character;
      if( props.character ){
        if( props.character instanceof Array ){
          character = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          character = character.concat( props.character.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         character.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          character = ( <Person props={ props.character } /> );        }
      }
      var contentRating;
      if( props.contentRating ){
        if( props.contentRating instanceof Array ){
          contentRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          contentRating = contentRating.concat( props.contentRating.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. contentRating is a Text.'></div> )
           }) );
         contentRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            contentRating = ( <div data-advice='Put your HTML here. contentRating is a Text.'></div> );
        }
      }
      var applicationCategory;
      if( props.applicationCategory ){
        if( props.applicationCategory instanceof Array ){
          applicationCategory = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          applicationCategory = applicationCategory.concat( props.applicationCategory.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. applicationCategory is a URL or
Text.'></div> )
           }) );
         applicationCategory.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            applicationCategory = ( <div data-advice='Put your HTML here. applicationCategory is a URL or
Text.'></div> );
        }
      }
      var exampleOfWork;
      if( props.exampleOfWork ){
        if( props.exampleOfWork instanceof Array ){
          exampleOfWork = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          exampleOfWork = exampleOfWork.concat( props.exampleOfWork.map( function(result, index){
              return ( <CreativeWork {...result} key={index} /> )
           }) );
         exampleOfWork.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          exampleOfWork = ( <CreativeWork props={ props.exampleOfWork } /> );        }
      }
      var publishingPrinciples;
      if( props.publishingPrinciples ){
        if( props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          publishingPrinciples = publishingPrinciples.concat( props.publishingPrinciples.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. publishingPrinciples is a URL.'></div> )
           }) );
         publishingPrinciples.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            publishingPrinciples = ( <div data-advice='Put your HTML here. publishingPrinciples is a URL.'></div> );
        }
      }
      var releaseNotes;
      if( props.releaseNotes ){
        if( props.releaseNotes instanceof Array ){
          releaseNotes = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          releaseNotes = releaseNotes.concat( props.releaseNotes.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. releaseNotes is a URL or
Text.'></div> )
           }) );
         releaseNotes.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            releaseNotes = ( <div data-advice='Put your HTML here. releaseNotes is a URL or
Text.'></div> );
        }
      }
      var dateCreated;
      if( props.dateCreated ){
        if( props.dateCreated instanceof Array ){
          dateCreated = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          dateCreated = dateCreated.concat( props.dateCreated.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. dateCreated is a Date.'></div> )
           }) );
         dateCreated.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            dateCreated = ( <div data-advice='Put your HTML here. dateCreated is a Date.'></div> );
        }
      }
      var memoryRequirements;
      if( props.memoryRequirements ){
        if( props.memoryRequirements instanceof Array ){
          memoryRequirements = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          memoryRequirements = memoryRequirements.concat( props.memoryRequirements.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. memoryRequirements is a URL or
Text.'></div> )
           }) );
         memoryRequirements.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            memoryRequirements = ( <div data-advice='Put your HTML here. memoryRequirements is a URL or
Text.'></div> );
        }
      }
      var permissions;
      if( props.permissions ){
        if( props.permissions instanceof Array ){
          permissions = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          permissions = permissions.concat( props.permissions.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. permissions is a Text.'></div> )
           }) );
         permissions.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            permissions = ( <div data-advice='Put your HTML here. permissions is a Text.'></div> );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( <Action {...result} key={index} /> )
           }) );
         potentialAction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          name = name.concat( props.name.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. name is a Text.'></div> )
           }) );
         name.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( <AggregateRating {...result} key={index} /> )
           }) );
         aggregateRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          audience = audience.concat( props.audience.map( function(result, index){
              return ( <Audience {...result} key={index} /> )
           }) );
         audience.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          audience = ( <Audience props={ props.audience } /> );        }
      }
      var accessibilityControl;
      if( props.accessibilityControl ){
        if( props.accessibilityControl instanceof Array ){
          accessibilityControl = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          accessibilityControl = accessibilityControl.concat( props.accessibilityControl.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. accessibilityControl is a Text.'></div> )
           }) );
         accessibilityControl.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            accessibilityControl = ( <div data-advice='Put your HTML here. accessibilityControl is a Text.'></div> );
        }
      }
      var copyrightYear;
      if( props.copyrightYear ){
        if( props.copyrightYear instanceof Array ){
          copyrightYear = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          copyrightYear = copyrightYear.concat( props.copyrightYear.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. copyrightYear is a Number.'></div> )
           }) );
         copyrightYear.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            copyrightYear = ( <div data-advice='Put your HTML here. copyrightYear is a Number.'></div> );
        }
      }
      var installUrl;
      if( props.installUrl ){
        if( props.installUrl instanceof Array ){
          installUrl = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          installUrl = installUrl.concat( props.installUrl.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. installUrl is a URL.'></div> )
           }) );
         installUrl.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            installUrl = ( <div data-advice='Put your HTML here. installUrl is a URL.'></div> );
        }
      }
      var creator;
      if( props.creator ){
        if( props.creator instanceof Array ){
          creator = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          creator = creator.concat( props.creator.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. creator is a Person or
Organization.'></div> )
           }) );
         creator.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            creator = ( <div data-advice='Put your HTML here. creator is a Person or
Organization.'></div> );
        }
      }
      var commentCount;
      if( props.commentCount ){
        if( props.commentCount instanceof Array ){
          commentCount = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          commentCount = commentCount.concat( props.commentCount.map( function(result, index){
              return ( <Integer {...result} key={index} /> )
           }) );
         commentCount.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          commentCount = ( <Integer props={ props.commentCount } /> );        }
      }
      var video;
      if( props.video ){
        if( props.video instanceof Array ){
          video = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          video = video.concat( props.video.map( function(result, index){
              return ( <VideoObject {...result} key={index} /> )
           }) );
         video.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          video = ( <VideoObject props={ props.video } /> );        }
      }
      var typicalAgeRange;
      if( props.typicalAgeRange ){
        if( props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          typicalAgeRange = typicalAgeRange.concat( props.typicalAgeRange.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> )
           }) );
         typicalAgeRange.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            typicalAgeRange = ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> );
        }
      }
      var fileFormat;
      if( props.fileFormat ){
        if( props.fileFormat instanceof Array ){
          fileFormat = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          fileFormat = fileFormat.concat( props.fileFormat.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. fileFormat is a Text.'></div> )
           }) );
         fileFormat.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            fileFormat = ( <div data-advice='Put your HTML here. fileFormat is a Text.'></div> );
        }
      }
      var applicationSuite;
      if( props.applicationSuite ){
        if( props.applicationSuite instanceof Array ){
          applicationSuite = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          applicationSuite = applicationSuite.concat( props.applicationSuite.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. applicationSuite is a Text.'></div> )
           }) );
         applicationSuite.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            applicationSuite = ( <div data-advice='Put your HTML here. applicationSuite is a Text.'></div> );
        }
      }
      var discussionUrl;
      if( props.discussionUrl ){
        if( props.discussionUrl instanceof Array ){
          discussionUrl = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          discussionUrl = discussionUrl.concat( props.discussionUrl.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. discussionUrl is a URL.'></div> )
           }) );
         discussionUrl.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            discussionUrl = ( <div data-advice='Put your HTML here. discussionUrl is a URL.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          review = review.concat( props.review.map( function(result, index){
              return ( <Review {...result} key={index} /> )
           }) );
         review.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var isFamilyFriendly;
      if( props.isFamilyFriendly ){
        if( props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isFamilyFriendly = isFamilyFriendly.concat( props.isFamilyFriendly.map( function(result, index){
              return ( <Boolean {...result} key={index} /> )
           }) );
         isFamilyFriendly.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          isFamilyFriendly = ( <Boolean props={ props.isFamilyFriendly } /> );        }
      }
      var version;
      if( props.version ){
        if( props.version instanceof Array ){
          version = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          version = version.concat( props.version.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. version is a Number.'></div> )
           }) );
         version.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            version = ( <div data-advice='Put your HTML here. version is a Number.'></div> );
        }
      }
      var provider;
      if( props.provider ){
        if( props.provider instanceof Array ){
          provider = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          provider = provider.concat( props.provider.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. provider is a Person or
Organization.'></div> )
           }) );
         provider.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            provider = ( <div data-advice='Put your HTML here. provider is a Person or
Organization.'></div> );
        }
      }
      var isPartOf;
      if( props.isPartOf ){
        if( props.isPartOf instanceof Array ){
          isPartOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isPartOf = isPartOf.concat( props.isPartOf.map( function(result, index){
              return ( <CreativeWork {...result} key={index} /> )
           }) );
         isPartOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          isPartOf = ( <CreativeWork props={ props.isPartOf } /> );        }
      }
      var accessibilityHazard;
      if( props.accessibilityHazard ){
        if( props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          accessibilityHazard = accessibilityHazard.concat( props.accessibilityHazard.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. accessibilityHazard is a Text.'></div> )
           }) );
         accessibilityHazard.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            accessibilityHazard = ( <div data-advice='Put your HTML here. accessibilityHazard is a Text.'></div> );
        }
      }
      var softwareRequirements;
      if( props.softwareRequirements ){
        if( props.softwareRequirements instanceof Array ){
          softwareRequirements = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          softwareRequirements = softwareRequirements.concat( props.softwareRequirements.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. softwareRequirements is a URL or
Text.'></div> )
           }) );
         softwareRequirements.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            softwareRequirements = ( <div data-advice='Put your HTML here. softwareRequirements is a URL or
Text.'></div> );
        }
      }
      var educationalAlignment;
      if( props.educationalAlignment ){
        if( props.educationalAlignment instanceof Array ){
          educationalAlignment = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          educationalAlignment = educationalAlignment.concat( props.educationalAlignment.map( function(result, index){
              return ( <AlignmentObject {...result} key={index} /> )
           }) );
         educationalAlignment.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          educationalAlignment = ( <AlignmentObject props={ props.educationalAlignment } /> );        }
      }
      var fileSize;
      if( props.fileSize ){
        if( props.fileSize instanceof Array ){
          fileSize = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          fileSize = fileSize.concat( props.fileSize.map( function(result, index){
              return ( <Integer {...result} key={index} /> )
           }) );
         fileSize.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          fileSize = ( <Integer props={ props.fileSize } /> );        }
      }
      var genre;
      if( props.genre ){
        if( props.genre instanceof Array ){
          genre = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          genre = genre.concat( props.genre.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. genre is a Text.'></div> )
           }) );
         genre.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            genre = ( <div data-advice='Put your HTML here. genre is a Text.'></div> );
        }
      }
      var publisher;
      if( props.publisher ){
        if( props.publisher instanceof Array ){
          publisher = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          publisher = publisher.concat( props.publisher.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         publisher.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          publisher = ( <Organization props={ props.publisher } /> );        }
      }
      var about;
      if( props.about ){
        if( props.about instanceof Array ){
          about = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          about = about.concat( props.about.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         about.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          about = ( <Thing props={ props.about } /> );        }
      }
      var license;
      if( props.license ){
        if( props.license instanceof Array ){
          license = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          license = license.concat( props.license.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. license is a CreativeWork or
URL.'></div> )
           }) );
         license.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            license = ( <div data-advice='Put your HTML here. license is a CreativeWork or
URL.'></div> );
        }
      }
      var workExample;
      if( props.workExample ){
        if( props.workExample instanceof Array ){
          workExample = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          workExample = workExample.concat( props.workExample.map( function(result, index){
              return ( <CreativeWork {...result} key={index} /> )
           }) );
         workExample.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          workExample = ( <CreativeWork props={ props.workExample } /> );        }
      }
      var mentions;
      if( props.mentions ){
        if( props.mentions instanceof Array ){
          mentions = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mentions = mentions.concat( props.mentions.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         mentions.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          mentions = ( <Thing props={ props.mentions } /> );        }
      }
      var comment;
      if( props.comment ){
        if( props.comment instanceof Array ){
          comment = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          comment = comment.concat( props.comment.map( function(result, index){
              return ( <Comment {...result} key={index} /> )
           }) );
         comment.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          comment = ( <Comment props={ props.comment } /> );        }
      }
      var isBasedOnUrl;
      if( props.isBasedOnUrl ){
        if( props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isBasedOnUrl = isBasedOnUrl.concat( props.isBasedOnUrl.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. isBasedOnUrl is a URL.'></div> )
           }) );
         isBasedOnUrl.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            isBasedOnUrl = ( <div data-advice='Put your HTML here. isBasedOnUrl is a URL.'></div> );
        }
      }
      var encoding;
      if( props.encoding ){
        if( props.encoding instanceof Array ){
          encoding = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          encoding = encoding.concat( props.encoding.map( function(result, index){
              return ( <MediaObject {...result} key={index} /> )
           }) );
         encoding.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          encoding = ( <MediaObject props={ props.encoding } /> );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sameAs is a URL.'></div> )
           }) );
         sameAs.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          image = image.concat( props.image.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> )
           }) );
         image.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var associatedMedia;
      if( props.associatedMedia ){
        if( props.associatedMedia instanceof Array ){
          associatedMedia = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          associatedMedia = associatedMedia.concat( props.associatedMedia.map( function(result, index){
              return ( <MediaObject {...result} key={index} /> )
           }) );
         associatedMedia.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          associatedMedia = ( <MediaObject props={ props.associatedMedia } /> );        }
      }
      var featureList;
      if( props.featureList ){
        if( props.featureList instanceof Array ){
          featureList = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          featureList = featureList.concat( props.featureList.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. featureList is a URL or
Text.'></div> )
           }) );
         featureList.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            featureList = ( <div data-advice='Put your HTML here. featureList is a URL or
Text.'></div> );
        }
      }
      var contributor;
      if( props.contributor ){
        if( props.contributor instanceof Array ){
          contributor = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          contributor = contributor.concat( props.contributor.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. contributor is a Person or
Organization.'></div> )
           }) );
         contributor.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            contributor = ( <div data-advice='Put your HTML here. contributor is a Person or
Organization.'></div> );
        }
      }
      var thumbnailUrl;
      if( props.thumbnailUrl ){
        if( props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          thumbnailUrl = thumbnailUrl.concat( props.thumbnailUrl.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. thumbnailUrl is a URL.'></div> )
           }) );
         thumbnailUrl.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            thumbnailUrl = ( <div data-advice='Put your HTML here. thumbnailUrl is a URL.'></div> );
        }
      }
      var mainEntity;
      if( props.mainEntity ){
        if( props.mainEntity instanceof Array ){
          mainEntity = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntity = mainEntity.concat( props.mainEntity.map( function(result, index){
              return ( <Thing {...result} key={index} /> )
           }) );
         mainEntity.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          mainEntity = ( <Thing props={ props.mainEntity } /> );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alternateName is a Text.'></div> )
           }) );
         alternateName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var accessibilityFeature;
      if( props.accessibilityFeature ){
        if( props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          accessibilityFeature = accessibilityFeature.concat( props.accessibilityFeature.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. accessibilityFeature is a Text.'></div> )
           }) );
         accessibilityFeature.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            accessibilityFeature = ( <div data-advice='Put your HTML here. accessibilityFeature is a Text.'></div> );
        }
      }
      var interactivityType;
      if( props.interactivityType ){
        if( props.interactivityType instanceof Array ){
          interactivityType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          interactivityType = interactivityType.concat( props.interactivityType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. interactivityType is a Text.'></div> )
           }) );
         interactivityType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            interactivityType = ( <div data-advice='Put your HTML here. interactivityType is a Text.'></div> );
        }
      }
      var publication;
      if( props.publication ){
        if( props.publication instanceof Array ){
          publication = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          publication = publication.concat( props.publication.map( function(result, index){
              return ( <PublicationEvent {...result} key={index} /> )
           }) );
         publication.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          publication = ( <PublicationEvent props={ props.publication } /> );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          offers = offers.concat( props.offers.map( function(result, index){
              return ( <Offer {...result} key={index} /> )
           }) );
         offers.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          offers = ( <Offer props={ props.offers } /> );        }
      }
      var editor;
      if( props.editor ){
        if( props.editor instanceof Array ){
          editor = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          editor = editor.concat( props.editor.map( function(result, index){
              return ( <Person {...result} key={index} /> )
           }) );
         editor.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          editor = ( <Person props={ props.editor } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var recordedAt;
      if( props.recordedAt ){
        if( props.recordedAt instanceof Array ){
          recordedAt = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          recordedAt = recordedAt.concat( props.recordedAt.map( function(result, index){
              return ( <Event {...result} key={index} /> )
           }) );
         recordedAt.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          recordedAt = ( <Event props={ props.recordedAt } /> );        }
      }
      var softwareVersion;
      if( props.softwareVersion ){
        if( props.softwareVersion instanceof Array ){
          softwareVersion = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          softwareVersion = softwareVersion.concat( props.softwareVersion.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. softwareVersion is a Text.'></div> )
           }) );
         softwareVersion.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            softwareVersion = ( <div data-advice='Put your HTML here. softwareVersion is a Text.'></div> );
        }
      }
      var hasPart;
      if( props.hasPart ){
        if( props.hasPart instanceof Array ){
          hasPart = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          hasPart = hasPart.concat( props.hasPart.map( function(result, index){
              return ( <CreativeWork {...result} key={index} /> )
           }) );
         hasPart.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          hasPart = ( <CreativeWork props={ props.hasPart } /> );        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          award = award.concat( props.award.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. award is a Text.'></div> )
           }) );
         award.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var copyrightHolder;
      if( props.copyrightHolder ){
        if( props.copyrightHolder instanceof Array ){
          copyrightHolder = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          copyrightHolder = copyrightHolder.concat( props.copyrightHolder.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. copyrightHolder is a Person or
Organization.'></div> )
           }) );
         copyrightHolder.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            copyrightHolder = ( <div data-advice='Put your HTML here. copyrightHolder is a Person or
Organization.'></div> );
        }
      }
      var accessibilityAPI;
      if( props.accessibilityAPI ){
        if( props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          accessibilityAPI = accessibilityAPI.concat( props.accessibilityAPI.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. accessibilityAPI is a Text.'></div> )
           }) );
         accessibilityAPI.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            accessibilityAPI = ( <div data-advice='Put your HTML here. accessibilityAPI is a Text.'></div> );
        }
      }
      var downloadUrl;
      if( props.downloadUrl ){
        if( props.downloadUrl instanceof Array ){
          downloadUrl = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          downloadUrl = downloadUrl.concat( props.downloadUrl.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. downloadUrl is a URL.'></div> )
           }) );
         downloadUrl.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            downloadUrl = ( <div data-advice='Put your HTML here. downloadUrl is a URL.'></div> );
        }
      }
      var learningResourceType;
      if( props.learningResourceType ){
        if( props.learningResourceType instanceof Array ){
          learningResourceType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          learningResourceType = learningResourceType.concat( props.learningResourceType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. learningResourceType is a Text.'></div> )
           }) );
         learningResourceType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            learningResourceType = ( <div data-advice='Put your HTML here. learningResourceType is a Text.'></div> );
        }
      }
      var sourceOrganization;
      if( props.sourceOrganization ){
        if( props.sourceOrganization instanceof Array ){
          sourceOrganization = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sourceOrganization = sourceOrganization.concat( props.sourceOrganization.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         sourceOrganization.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          sourceOrganization = ( <Organization props={ props.sourceOrganization } /> );        }
      }
      var operatingSystem;
      if( props.operatingSystem ){
        if( props.operatingSystem instanceof Array ){
          operatingSystem = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          operatingSystem = operatingSystem.concat( props.operatingSystem.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. operatingSystem is a Text.'></div> )
           }) );
         operatingSystem.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            operatingSystem = ( <div data-advice='Put your HTML here. operatingSystem is a Text.'></div> );
        }
      }
      var inLanguage;
      if( props.inLanguage ){
        if( props.inLanguage instanceof Array ){
          inLanguage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          inLanguage = inLanguage.concat( props.inLanguage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> )
           }) );
         inLanguage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            inLanguage = ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> );
        }
      }
      var citation;
      if( props.citation ){
        if( props.citation instanceof Array ){
          citation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          citation = citation.concat( props.citation.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. citation is a CreativeWork or
Text.'></div> )
           }) );
         citation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            citation = ( <div data-advice='Put your HTML here. citation is a CreativeWork or
Text.'></div> );
        }
      }
      var countriesSupported;
      if( props.countriesSupported ){
        if( props.countriesSupported instanceof Array ){
          countriesSupported = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          countriesSupported = countriesSupported.concat( props.countriesSupported.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. countriesSupported is a Text.'></div> )
           }) );
         countriesSupported.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            countriesSupported = ( <div data-advice='Put your HTML here. countriesSupported is a Text.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. additionalType is a URL.'></div> )
           }) );
         additionalType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var availableOnDevice;
      if( props.availableOnDevice ){
        if( props.availableOnDevice instanceof Array ){
          availableOnDevice = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          availableOnDevice = availableOnDevice.concat( props.availableOnDevice.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. availableOnDevice is a Text.'></div> )
           }) );
         availableOnDevice.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            availableOnDevice = ( <div data-advice='Put your HTML here. availableOnDevice is a Text.'></div> );
        }
      }
      var applicationSubCategory;
      if( props.applicationSubCategory ){
        if( props.applicationSubCategory instanceof Array ){
          applicationSubCategory = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          applicationSubCategory = applicationSubCategory.concat( props.applicationSubCategory.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. applicationSubCategory is a URL or
Text.'></div> )
           }) );
         applicationSubCategory.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            applicationSubCategory = ( <div data-advice='Put your HTML here. applicationSubCategory is a URL or
Text.'></div> );
        }
      }
      var softwareHelp;
      if( props.softwareHelp ){
        if( props.softwareHelp instanceof Array ){
          softwareHelp = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          softwareHelp = softwareHelp.concat( props.softwareHelp.map( function(result, index){
              return ( <CreativeWork {...result} key={index} /> )
           }) );
         softwareHelp.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          softwareHelp = ( <CreativeWork props={ props.softwareHelp } /> );        }
      }
      var author;
      if( props.author ){
        if( props.author instanceof Array ){
          author = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          author = author.concat( props.author.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. author is a Person or
Organization.'></div> )
           }) );
         author.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            author = ( <div data-advice='Put your HTML here. author is a Person or
Organization.'></div> );
        }
      }
      var dateModified;
      if( props.dateModified ){
        if( props.dateModified instanceof Array ){
          dateModified = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          dateModified = dateModified.concat( props.dateModified.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. dateModified is a Date.'></div> )
           }) );
         dateModified.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            dateModified = ( <div data-advice='Put your HTML here. dateModified is a Date.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          description = description.concat( props.description.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. description is a Text.'></div> )
           }) );
         description.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var screenshot;
      if( props.screenshot ){
        if( props.screenshot instanceof Array ){
          screenshot = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          screenshot = screenshot.concat( props.screenshot.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. screenshot is a URL or
ImageObject.'></div> )
           }) );
         screenshot.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            screenshot = ( <div data-advice='Put your HTML here. screenshot is a URL or
ImageObject.'></div> );
        }
      }
      var releasedEvent;
      if( props.releasedEvent ){
        if( props.releasedEvent instanceof Array ){
          releasedEvent = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          releasedEvent = releasedEvent.concat( props.releasedEvent.map( function(result, index){
              return ( <PublicationEvent {...result} key={index} /> )
           }) );
         releasedEvent.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          releasedEvent = ( <PublicationEvent props={ props.releasedEvent } /> );        }
      }
      var translator;
      if( props.translator ){
        if( props.translator instanceof Array ){
          translator = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          translator = translator.concat( props.translator.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. translator is a Person or
Organization.'></div> )
           }) );
         translator.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            translator = ( <div data-advice='Put your HTML here. translator is a Person or
Organization.'></div> );
        }
      }
      var softwareAddOn;
      if( props.softwareAddOn ){
        if( props.softwareAddOn instanceof Array ){
          softwareAddOn = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          softwareAddOn = softwareAddOn.concat( props.softwareAddOn.map( function(result, index){
              return ( <SoftwareApplication {...result} key={index} /> )
           }) );
         softwareAddOn.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          softwareAddOn = ( <SoftwareApplication props={ props.softwareAddOn } /> );        }
      }
      var storageRequirements;
      if( props.storageRequirements ){
        if( props.storageRequirements instanceof Array ){
          storageRequirements = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          storageRequirements = storageRequirements.concat( props.storageRequirements.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. storageRequirements is a URL or
Text.'></div> )
           }) );
         storageRequirements.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            storageRequirements = ( <div data-advice='Put your HTML here. storageRequirements is a URL or
Text.'></div> );
        }
      }
      var schemaVersion;
      if( props.schemaVersion ){
        if( props.schemaVersion instanceof Array ){
          schemaVersion = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          schemaVersion = schemaVersion.concat( props.schemaVersion.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. schemaVersion is a URL or
Text.'></div> )
           }) );
         schemaVersion.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            schemaVersion = ( <div data-advice='Put your HTML here. schemaVersion is a URL or
Text.'></div> );
        }
      }
      var contentLocation;
      if( props.contentLocation ){
        if( props.contentLocation instanceof Array ){
          contentLocation = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          contentLocation = contentLocation.concat( props.contentLocation.map( function(result, index){
              return ( <Place {...result} key={index} /> )
           }) );
         contentLocation.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          contentLocation = ( <Place props={ props.contentLocation } /> );        }
      }
      var timeRequired;
      if( props.timeRequired ){
        if( props.timeRequired instanceof Array ){
          timeRequired = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          timeRequired = timeRequired.concat( props.timeRequired.map( function(result, index){
              return ( <Duration {...result} key={index} /> )
           }) );
         timeRequired.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          timeRequired = ( <Duration props={ props.timeRequired } /> );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          url = url.concat( props.url.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. url is a URL.'></div> )
           }) );
         url.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var position;
      if( props.position ){
        if( props.position instanceof Array ){
          position = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          position = position.concat( props.position.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. position is a Integer or
Text.'></div> )
           }) );
         position.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            position = ( <div data-advice='Put your HTML here. position is a Integer or
Text.'></div> );
        }
      }
      var audio;
      if( props.audio ){
        if( props.audio instanceof Array ){
          audio = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          audio = audio.concat( props.audio.map( function(result, index){
              return ( <AudioObject {...result} key={index} /> )
           }) );
         audio.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          audio = ( <AudioObject props={ props.audio } /> );        }
      }
      return (<div title='SoftwareApplication' className='SoftwareApplication entity'>
        { educationalUse }
        { producer }
        { text }
        { datePublished }
        { processorRequirements }
        { alternativeHeadline }
        { accountablePerson }
        { keywords }
        { countriesNotSupported }
        { headline }
        { character }
        { contentRating }
        { applicationCategory }
        { exampleOfWork }
        { publishingPrinciples }
        { releaseNotes }
        { dateCreated }
        { memoryRequirements }
        { permissions }
        { potentialAction }
        { name }
        { aggregateRating }
        { audience }
        { accessibilityControl }
        { copyrightYear }
        { installUrl }
        { creator }
        { commentCount }
        { video }
        { typicalAgeRange }
        { fileFormat }
        { applicationSuite }
        { discussionUrl }
        { review }
        { isFamilyFriendly }
        { version }
        { provider }
        { isPartOf }
        { accessibilityHazard }
        { softwareRequirements }
        { educationalAlignment }
        { fileSize }
        { genre }
        { publisher }
        { about }
        { license }
        { workExample }
        { mentions }
        { comment }
        { isBasedOnUrl }
        { encoding }
        { sameAs }
        { image }
        { associatedMedia }
        { featureList }
        { contributor }
        { thumbnailUrl }
        { mainEntity }
        { alternateName }
        { accessibilityFeature }
        { interactivityType }
        { publication }
        { offers }
        { editor }
        { mainEntityOfPage }
        { recordedAt }
        { softwareVersion }
        { hasPart }
        { award }
        { copyrightHolder }
        { accessibilityAPI }
        { downloadUrl }
        { learningResourceType }
        { sourceOrganization }
        { operatingSystem }
        { inLanguage }
        { citation }
        { countriesSupported }
        { additionalType }
        { availableOnDevice }
        { applicationSubCategory }
        { softwareHelp }
        { author }
        { dateModified }
        { description }
        { screenshot }
        { releasedEvent }
        { translator }
        { softwareAddOn }
        { storageRequirements }
        { schemaVersion }
        { contentLocation }
        { timeRequired }
        { url }
        { position }
        { audio }
     </div>);
    }
  });
