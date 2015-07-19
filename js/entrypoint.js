/* Thing > Intangible > EntryPoint - An entry point, within some Web-based protocol.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './creativework', './softwareapplication', './imageobject'], function(React, Action, CreativeWork, SoftwareApplication, ImageObject){
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
      var contentType;
      if( this.props.contentType ){
        if( this.props.contentType instanceof Array ){
          contentType = [(React.createElement("p", null, "contentType:") )];
          for( i in this.props.contentType ){
            contentType.push( ( React.createElement("div", {class: "contentType"}) ) );
          }
        } else {
          contentType = ( React.createElement("div", {class: "contentType"}, this.props.contentType) );
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
      var actionApplication;
      if( this.props.actionApplication ){
        if( this.props.actionApplication instanceof Array ){
          actionApplication = [(React.createElement("p", null, "actionApplication:") )];
          for( i in this.props.actionApplication ){
            actionApplication.push( ( React.createElement(SoftwareApplication, {props:  this.props.actionApplication}) ) );          }
        } else {
          actionApplication = ( React.createElement(SoftwareApplication, {props:  this.props.actionApplication}) );        }
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
      var httpMethod;
      if( this.props.httpMethod ){
        if( this.props.httpMethod instanceof Array ){
          httpMethod = [(React.createElement("p", null, "httpMethod:") )];
          for( i in this.props.httpMethod ){
            httpMethod.push( ( React.createElement("div", {class: "httpMethod"}) ) );
          }
        } else {
          httpMethod = ( React.createElement("div", {class: "httpMethod"}, this.props.httpMethod) );
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
      var urlTemplate;
      if( this.props.urlTemplate ){
        if( this.props.urlTemplate instanceof Array ){
          urlTemplate = [(React.createElement("p", null, "urlTemplate:") )];
          for( i in this.props.urlTemplate ){
            urlTemplate.push( ( React.createElement("div", {class: "urlTemplate"}) ) );
          }
        } else {
          urlTemplate = ( React.createElement("div", {class: "urlTemplate"}, this.props.urlTemplate) );
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
      var encodingType;
      if( this.props.encodingType ){
        if( this.props.encodingType instanceof Array ){
          encodingType = [(React.createElement("p", null, "encodingType:") )];
          for( i in this.props.encodingType ){
            encodingType.push( ( React.createElement("div", {class: "encodingType"}) ) );
          }
        } else {
          encodingType = ( React.createElement("div", {class: "encodingType"}, this.props.encodingType) );
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
      return (React.createElement("div", {title: "EntryPoint", className: "EntryPoint entity"}, 
         potentialAction, 
         contentType, 
         description, 
         sameAs, 
         actionApplication, 
         image, 
         httpMethod, 
         url, 
         urlTemplate, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         encodingType, 
         name 
     ));
    }
  });
});
