/* Thing > Intangible > AlignmentObject - An intangible item that describes an alignment between a learning resource and a node in an educational framework.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var alignmentType;
      if( props.alignmentType ){
        if( props.alignmentType instanceof Array ){
          alignmentType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alignmentType ){
            alignmentType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alignmentType is a Text."}) ) );
          }
        } else {
            alignmentType = ( React.createElement("div", {"data-advice": "Put your HTML here. alignmentType is a Text."}) );
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
      var educationalFramework;
      if( props.educationalFramework ){
        if( props.educationalFramework instanceof Array ){
          educationalFramework = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.educationalFramework ){
            educationalFramework.push( ( React.createElement("div", {"data-advice": "Put your HTML here. educationalFramework is a Text."}) ) );
          }
        } else {
            educationalFramework = ( React.createElement("div", {"data-advice": "Put your HTML here. educationalFramework is a Text."}) );
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
      var targetUrl;
      if( props.targetUrl ){
        if( props.targetUrl instanceof Array ){
          targetUrl = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.targetUrl ){
            targetUrl.push( ( React.createElement("div", {"data-advice": "Put your HTML here. targetUrl is a URL."}) ) );
          }
        } else {
            targetUrl = ( React.createElement("div", {"data-advice": "Put your HTML here. targetUrl is a URL."}) );
        }
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
      var targetName;
      if( props.targetName ){
        if( props.targetName instanceof Array ){
          targetName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.targetName ){
            targetName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. targetName is a Text."}) ) );
          }
        } else {
            targetName = ( React.createElement("div", {"data-advice": "Put your HTML here. targetName is a Text."}) );
        }
      }
      var targetDescription;
      if( props.targetDescription ){
        if( props.targetDescription instanceof Array ){
          targetDescription = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.targetDescription ){
            targetDescription.push( ( React.createElement("div", {"data-advice": "Put your HTML here. targetDescription is a Text."}) ) );
          }
        } else {
            targetDescription = ( React.createElement("div", {"data-advice": "Put your HTML here. targetDescription is a Text."}) );
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
