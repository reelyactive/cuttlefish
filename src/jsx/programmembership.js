/* Thing > Intangible > ProgramMembership - Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './organization', './creativework', './imageobject', './person'], function(React, Action, Organization, CreativeWork, ImageObject, Person){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
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
      var hostingOrganization;
      if( props.hostingOrganization ){
        if( props.hostingOrganization instanceof Array ){
          hostingOrganization = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          hostingOrganization = hostingOrganization.concat( props.hostingOrganization.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         hostingOrganization.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          hostingOrganization = ( <Organization props={ props.hostingOrganization } /> );        }
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
      var member;
      if( props.member ){
        if( props.member instanceof Array ){
          member = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          member = member.concat( props.member.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. member is a Person or
Organization.'></div> )
           }) );
         member.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            member = ( <div data-advice='Put your HTML here. member is a Person or
Organization.'></div> );
        }
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
      var membershipNumber;
      if( props.membershipNumber ){
        if( props.membershipNumber instanceof Array ){
          membershipNumber = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          membershipNumber = membershipNumber.concat( props.membershipNumber.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. membershipNumber is a Text.'></div> )
           }) );
         membershipNumber.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            membershipNumber = ( <div data-advice='Put your HTML here. membershipNumber is a Text.'></div> );
        }
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
      var programName;
      if( props.programName ){
        if( props.programName instanceof Array ){
          programName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          programName = programName.concat( props.programName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. programName is a Text.'></div> )
           }) );
         programName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            programName = ( <div data-advice='Put your HTML here. programName is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
      return (<div title='ProgramMembership' className='ProgramMembership entity'>
        { potentialAction }
        { description }
        { hostingOrganization }
        { image }
        { member }
        { sameAs }
        { membershipNumber }
        { url }
        { programName }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { name }
     </div>);
    }
  });
});
