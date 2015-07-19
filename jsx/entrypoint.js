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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var contentType;
      if( props.contentType ){
        if( props.contentType instanceof Array ){
          contentType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contentType ){
            contentType.push( ( <div data-advice='Put your HTML here. contentType is a Text.'></div> ) );
          }
        } else {
            contentType = ( <div data-advice='Put your HTML here. contentType is a Text.'></div> );
        }
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
      var actionApplication;
      if( props.actionApplication ){
        if( props.actionApplication instanceof Array ){
          actionApplication = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.actionApplication ){
            actionApplication.push( ( <SoftwareApplication {...props.actionApplication } /> ) );          }
        } else {
          actionApplication = ( <SoftwareApplication props={ props.actionApplication } /> );        }
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
      var httpMethod;
      if( props.httpMethod ){
        if( props.httpMethod instanceof Array ){
          httpMethod = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.httpMethod ){
            httpMethod.push( ( <div data-advice='Put your HTML here. httpMethod is a Text.'></div> ) );
          }
        } else {
            httpMethod = ( <div data-advice='Put your HTML here. httpMethod is a Text.'></div> );
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
      var urlTemplate;
      if( props.urlTemplate ){
        if( props.urlTemplate instanceof Array ){
          urlTemplate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.urlTemplate ){
            urlTemplate.push( ( <div data-advice='Put your HTML here. urlTemplate is a Text.'></div> ) );
          }
        } else {
            urlTemplate = ( <div data-advice='Put your HTML here. urlTemplate is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
      var encodingType;
      if( props.encodingType ){
        if( props.encodingType instanceof Array ){
          encodingType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.encodingType ){
            encodingType.push( ( <div data-advice='Put your HTML here. encodingType is a Text.'></div> ) );
          }
        } else {
            encodingType = ( <div data-advice='Put your HTML here. encodingType is a Text.'></div> );
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
      return (<div title='EntryPoint' className='EntryPoint entity'>
        { potentialAction }
        { contentType }
        { description }
        { sameAs }
        { actionApplication }
        { image }
        { httpMethod }
        { url }
        { urlTemplate }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { encodingType }
        { name }
     </div>);
    }
  });
});
