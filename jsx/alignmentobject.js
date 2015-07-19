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
          alignmentType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alignmentType ){
            alignmentType.push( ( <div data-advice='Put your HTML here. alignmentType is a Text.'></div> ) );
          }
        } else {
            alignmentType = ( <div data-advice='Put your HTML here. alignmentType is a Text.'></div> );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var educationalFramework;
      if( props.educationalFramework ){
        if( props.educationalFramework instanceof Array ){
          educationalFramework = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.educationalFramework ){
            educationalFramework.push( ( <div data-advice='Put your HTML here. educationalFramework is a Text.'></div> ) );
          }
        } else {
            educationalFramework = ( <div data-advice='Put your HTML here. educationalFramework is a Text.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var targetUrl;
      if( props.targetUrl ){
        if( props.targetUrl instanceof Array ){
          targetUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.targetUrl ){
            targetUrl.push( ( <div data-advice='Put your HTML here. targetUrl is a URL.'></div> ) );
          }
        } else {
            targetUrl = ( <div data-advice='Put your HTML here. targetUrl is a URL.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var targetName;
      if( props.targetName ){
        if( props.targetName instanceof Array ){
          targetName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.targetName ){
            targetName.push( ( <div data-advice='Put your HTML here. targetName is a Text.'></div> ) );
          }
        } else {
            targetName = ( <div data-advice='Put your HTML here. targetName is a Text.'></div> );
        }
      }
      var targetDescription;
      if( props.targetDescription ){
        if( props.targetDescription instanceof Array ){
          targetDescription = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.targetDescription ){
            targetDescription.push( ( <div data-advice='Put your HTML here. targetDescription is a Text.'></div> ) );
          }
        } else {
            targetDescription = ( <div data-advice='Put your HTML here. targetDescription is a Text.'></div> );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      return (<div title='AlignmentObject' className='AlignmentObject entity'>
        { alignmentType }
        { potentialAction }
        { description }
        { sameAs }
        { image }
        { educationalFramework }
        { url }
        { targetUrl }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { targetName }
        { targetDescription }
        { name }
     </div>);
    }
  });
});
