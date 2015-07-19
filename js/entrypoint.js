/* Thing > Intangible > EntryPoint - An entry point, within some Web-based protocol.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './creativework', './softwareapplication', './imageobject'], function(React, Action, CreativeWork, SoftwareApplication, ImageObject){
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
      var contentType;
      if( props.contentType ){
        if( props.contentType instanceof Array ){
          contentType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.contentType ){
            contentType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. contentType is a Text."}) ) );
          }
        } else {
            contentType = ( React.createElement("div", {"data-advice": "Put your HTML here. contentType is a Text."}) );
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
      var actionApplication;
      if( props.actionApplication ){
        if( props.actionApplication instanceof Array ){
          actionApplication = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.actionApplication ){
            actionApplication.push( ( React.createElement(SoftwareApplication, React.__spread({},  props.actionApplication )) ) );          }
        } else {
          actionApplication = ( React.createElement(SoftwareApplication, {props:  props.actionApplication}) );        }
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
      var httpMethod;
      if( props.httpMethod ){
        if( props.httpMethod instanceof Array ){
          httpMethod = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.httpMethod ){
            httpMethod.push( ( React.createElement("div", {"data-advice": "Put your HTML here. httpMethod is a Text."}) ) );
          }
        } else {
            httpMethod = ( React.createElement("div", {"data-advice": "Put your HTML here. httpMethod is a Text."}) );
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
      var urlTemplate;
      if( props.urlTemplate ){
        if( props.urlTemplate instanceof Array ){
          urlTemplate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.urlTemplate ){
            urlTemplate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. urlTemplate is a Text."}) ) );
          }
        } else {
            urlTemplate = ( React.createElement("div", {"data-advice": "Put your HTML here. urlTemplate is a Text."}) );
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
      var encodingType;
      if( props.encodingType ){
        if( props.encodingType instanceof Array ){
          encodingType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.encodingType ){
            encodingType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. encodingType is a Text."}) ) );
          }
        } else {
            encodingType = ( React.createElement("div", {"data-advice": "Put your HTML here. encodingType is a Text."}) );
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
