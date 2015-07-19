/* Thing > Intangible > ProgramMembership - Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './organization', './creativework', './imageobject', './person'], function(React, Action, Organization, CreativeWork, ImageObject, Person){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
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
      var hostingOrganization;
      if( this.props.hostingOrganization ){
        if( this.props.hostingOrganization instanceof Array ){
          hostingOrganization = [(React.createElement("p", null, "hostingOrganization:") )];
          for( i in this.props.hostingOrganization ){
            hostingOrganization.push( ( React.createElement(Organization, {props:  this.props.hostingOrganization}) ) );          }
        } else {
          hostingOrganization = ( React.createElement(Organization, {props:  this.props.hostingOrganization}) );        }
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
      var member;
      if( this.props.member ){
        if( this.props.member instanceof Array ){
          member = [(React.createElement("p", null, "member:") )];
          for( i in this.props.member ){
            member.push( ( React.createElement("div", {class: "member"}) ) );
          }
        } else {
          member = ( React.createElement("div", {class: "member"}, this.props.member) );
        }
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
      var membershipNumber;
      if( this.props.membershipNumber ){
        if( this.props.membershipNumber instanceof Array ){
          membershipNumber = [(React.createElement("p", null, "membershipNumber:") )];
          for( i in this.props.membershipNumber ){
            membershipNumber.push( ( React.createElement("div", {class: "membershipNumber"}) ) );
          }
        } else {
          membershipNumber = ( React.createElement("div", {class: "membershipNumber"}, this.props.membershipNumber) );
        }
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
      var programName;
      if( this.props.programName ){
        if( this.props.programName instanceof Array ){
          programName = [(React.createElement("p", null, "programName:") )];
          for( i in this.props.programName ){
            programName.push( ( React.createElement("div", {class: "programName"}) ) );
          }
        } else {
          programName = ( React.createElement("div", {class: "programName"}, this.props.programName) );
        }
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
      return (React.createElement("div", {title: "ProgramMembership", className: "ProgramMembership entity"}, 
         potentialAction, 
         description, 
         hostingOrganization, 
         image, 
         member, 
         sameAs, 
         membershipNumber, 
         url, 
         programName, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         name 
     ));
    }
  });
});
