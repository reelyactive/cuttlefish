/* Thing > Intangible > AlignmentObject - An intangible item that describes an alignment between a learning resource and a node in an educational framework.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var alignmentType;
      if( this.props.alignmentType ){
        if( this.props.alignmentType instanceof Array ){
          alignmentType = [(React.createElement("p", null, "alignmentType:") )];
          for( i in this.props.alignmentType ){
            alignmentType.push( ( React.createElement("div", {class: "alignmentType"}) ) );
          }
        } else {
          alignmentType = ( React.createElement("div", {class: "alignmentType"}, this.props.alignmentType) );
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
      var educationalFramework;
      if( this.props.educationalFramework ){
        if( this.props.educationalFramework instanceof Array ){
          educationalFramework = [(React.createElement("p", null, "educationalFramework:") )];
          for( i in this.props.educationalFramework ){
            educationalFramework.push( ( React.createElement("div", {class: "educationalFramework"}) ) );
          }
        } else {
          educationalFramework = ( React.createElement("div", {class: "educationalFramework"}, this.props.educationalFramework) );
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
      var targetUrl;
      if( this.props.targetUrl ){
        if( this.props.targetUrl instanceof Array ){
          targetUrl = [(React.createElement("p", null, "targetUrl:") )];
          for( i in this.props.targetUrl ){
            targetUrl.push( ( React.createElement("div", {class: "targetUrl"}) ) );
          }
        } else {
          targetUrl = ( React.createElement("div", {class: "targetUrl"}, this.props.targetUrl) );
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
      var targetName;
      if( this.props.targetName ){
        if( this.props.targetName instanceof Array ){
          targetName = [(React.createElement("p", null, "targetName:") )];
          for( i in this.props.targetName ){
            targetName.push( ( React.createElement("div", {class: "targetName"}) ) );
          }
        } else {
          targetName = ( React.createElement("div", {class: "targetName"}, this.props.targetName) );
        }
      }
      var targetDescription;
      if( this.props.targetDescription ){
        if( this.props.targetDescription instanceof Array ){
          targetDescription = [(React.createElement("p", null, "targetDescription:") )];
          for( i in this.props.targetDescription ){
            targetDescription.push( ( React.createElement("div", {class: "targetDescription"}) ) );
          }
        } else {
          targetDescription = ( React.createElement("div", {class: "targetDescription"}, this.props.targetDescription) );
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
      return (React.createElement("div", {title: "AlignmentObject", className: "AlignmentObject entity"}, 
         alignmentType, 
         potentialAction, 
         description, 
         sameAs, 
         image, 
         educationalFramework, 
         url, 
         targetUrl, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         targetName, 
         targetDescription, 
         name 
     ));
    }
  });
});
