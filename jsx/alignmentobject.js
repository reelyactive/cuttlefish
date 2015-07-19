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
          alignmentType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alignmentType ){
            alignmentType.push( ( <div data-advice='Put your HTML here. alignmentType is a Text.'></div> ) );
          }
        } else {
            alignmentType.push( ( <div data-advice='Put your HTML here. alignmentType is a Text.'></div> ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
        }
      }
      var educationalFramework;
      if( this.props.educationalFramework ){
        if( this.props.educationalFramework instanceof Array ){
          educationalFramework = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.educationalFramework ){
            educationalFramework.push( ( <div data-advice='Put your HTML here. educationalFramework is a Text.'></div> ) );
          }
        } else {
            educationalFramework.push( ( <div data-advice='Put your HTML here. educationalFramework is a Text.'></div> ) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
        }
      }
      var targetUrl;
      if( this.props.targetUrl ){
        if( this.props.targetUrl instanceof Array ){
          targetUrl = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.targetUrl ){
            targetUrl.push( ( <div data-advice='Put your HTML here. targetUrl is a URL.'></div> ) );
          }
        } else {
            targetUrl.push( ( <div data-advice='Put your HTML here. targetUrl is a URL.'></div> ) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
        }
      }
      var targetName;
      if( this.props.targetName ){
        if( this.props.targetName instanceof Array ){
          targetName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.targetName ){
            targetName.push( ( <div data-advice='Put your HTML here. targetName is a Text.'></div> ) );
          }
        } else {
            targetName.push( ( <div data-advice='Put your HTML here. targetName is a Text.'></div> ) );
        }
      }
      var targetDescription;
      if( this.props.targetDescription ){
        if( this.props.targetDescription instanceof Array ){
          targetDescription = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.targetDescription ){
            targetDescription.push( ( <div data-advice='Put your HTML here. targetDescription is a Text.'></div> ) );
          }
        } else {
            targetDescription.push( ( <div data-advice='Put your HTML here. targetDescription is a Text.'></div> ) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
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
