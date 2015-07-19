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
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var contentType;
      if( this.props.contentType ){
        if( this.props.contentType instanceof Array ){
          contentType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contentType ){
            contentType.push( ( <div data-advice='Put your HTML here. contentType is a Text.'></div> ) );
          }
        } else {
            contentType = ( <div data-advice='Put your HTML here. contentType is a Text.'></div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
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
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var actionApplication;
      if( this.props.actionApplication ){
        if( this.props.actionApplication instanceof Array ){
          actionApplication = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.actionApplication ){
            actionApplication.push( ( <SoftwareApplication {...this.props.actionApplication } /> ) );          }
        } else {
          actionApplication = ( <SoftwareApplication props={ this.props.actionApplication } /> );        }
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
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var httpMethod;
      if( this.props.httpMethod ){
        if( this.props.httpMethod instanceof Array ){
          httpMethod = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.httpMethod ){
            httpMethod.push( ( <div data-advice='Put your HTML here. httpMethod is a Text.'></div> ) );
          }
        } else {
            httpMethod = ( <div data-advice='Put your HTML here. httpMethod is a Text.'></div> );
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
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var urlTemplate;
      if( this.props.urlTemplate ){
        if( this.props.urlTemplate instanceof Array ){
          urlTemplate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.urlTemplate ){
            urlTemplate.push( ( <div data-advice='Put your HTML here. urlTemplate is a Text.'></div> ) );
          }
        } else {
            urlTemplate = ( <div data-advice='Put your HTML here. urlTemplate is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
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
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
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
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var encodingType;
      if( this.props.encodingType ){
        if( this.props.encodingType instanceof Array ){
          encodingType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.encodingType ){
            encodingType.push( ( <div data-advice='Put your HTML here. encodingType is a Text.'></div> ) );
          }
        } else {
            encodingType = ( <div data-advice='Put your HTML here. encodingType is a Text.'></div> );
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
