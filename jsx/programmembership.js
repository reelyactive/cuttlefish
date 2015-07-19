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
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
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
      var hostingOrganization;
      if( this.props.hostingOrganization ){
        if( this.props.hostingOrganization instanceof Array ){
          hostingOrganization = [(<p>hostingOrganization:</p> )];
          for( i in this.props.hostingOrganization ){
            hostingOrganization.push( ( <Organization props={ this.props.hostingOrganization } /> ) );          }
        } else {
          hostingOrganization = ( <Organization props={ this.props.hostingOrganization } /> );        }
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
      var member;
      if( this.props.member ){
        if( this.props.member instanceof Array ){
          member = [(<p>member:</p> )];
          for( i in this.props.member ){
            member.push( ( <div class='member'></div> ) );
          }
        } else {
          member = ( <div class='member'>{this.props.member}</div> );
        }
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
      var membershipNumber;
      if( this.props.membershipNumber ){
        if( this.props.membershipNumber instanceof Array ){
          membershipNumber = [(<p>membershipNumber:</p> )];
          for( i in this.props.membershipNumber ){
            membershipNumber.push( ( <div class='membershipNumber'></div> ) );
          }
        } else {
          membershipNumber = ( <div class='membershipNumber'>{this.props.membershipNumber}</div> );
        }
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
      var programName;
      if( this.props.programName ){
        if( this.props.programName instanceof Array ){
          programName = [(<p>programName:</p> )];
          for( i in this.props.programName ){
            programName.push( ( <div class='programName'></div> ) );
          }
        } else {
          programName = ( <div class='programName'>{this.props.programName}</div> );
        }
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
