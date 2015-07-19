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
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
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
      var hostingOrganization;
      if( props.hostingOrganization ){
        if( props.hostingOrganization instanceof Array ){
          hostingOrganization = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.hostingOrganization ){
            hostingOrganization.push( ( React.createElement(Organization, React.__spread({},  props.hostingOrganization )) ) );          }
        } else {
          hostingOrganization = ( React.createElement(Organization, {props:  props.hostingOrganization}) );        }
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
      var member;
      if( props.member ){
        if( props.member instanceof Array ){
          member = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.member ){
            member.push( ( React.createElement("div", {"data-advice": "Put your HTML here. member is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            member = ( React.createElement("div", {"data-advice": "Put your HTML here. member is a Person or" + ' ' +
"Organization."}) );
        }
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
      var membershipNumber;
      if( props.membershipNumber ){
        if( props.membershipNumber instanceof Array ){
          membershipNumber = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.membershipNumber ){
            membershipNumber.push( ( React.createElement("div", {"data-advice": "Put your HTML here. membershipNumber is a Text."}) ) );
          }
        } else {
            membershipNumber = ( React.createElement("div", {"data-advice": "Put your HTML here. membershipNumber is a Text."}) );
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
      var programName;
      if( props.programName ){
        if( props.programName instanceof Array ){
          programName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.programName ){
            programName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. programName is a Text."}) ) );
          }
        } else {
            programName = ( React.createElement("div", {"data-advice": "Put your HTML here. programName is a Text."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
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
