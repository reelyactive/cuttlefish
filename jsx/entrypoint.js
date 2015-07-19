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
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var contentType;
      if( this.props.contentType ){
        if( this.props.contentType instanceof Array ){
          contentType = [(<p>contentType:</p> )];
          for( i in this.props.contentType ){
            contentType.push( ( <div class='contentType'></div> ) );
          }
        } else {
          contentType = ( <div class='contentType'>{this.props.contentType}</div> );
        }
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
      var actionApplication;
      if( this.props.actionApplication ){
        if( this.props.actionApplication instanceof Array ){
          actionApplication = [(<p>actionApplication:</p> )];
          for( i in this.props.actionApplication ){
            actionApplication.push( ( <SoftwareApplication props={ this.props.actionApplication } /> ) );          }
        } else {
          actionApplication = ( <SoftwareApplication props={ this.props.actionApplication } /> );        }
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
      var httpMethod;
      if( this.props.httpMethod ){
        if( this.props.httpMethod instanceof Array ){
          httpMethod = [(<p>httpMethod:</p> )];
          for( i in this.props.httpMethod ){
            httpMethod.push( ( <div class='httpMethod'></div> ) );
          }
        } else {
          httpMethod = ( <div class='httpMethod'>{this.props.httpMethod}</div> );
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
      var urlTemplate;
      if( this.props.urlTemplate ){
        if( this.props.urlTemplate instanceof Array ){
          urlTemplate = [(<p>urlTemplate:</p> )];
          for( i in this.props.urlTemplate ){
            urlTemplate.push( ( <div class='urlTemplate'></div> ) );
          }
        } else {
          urlTemplate = ( <div class='urlTemplate'>{this.props.urlTemplate}</div> );
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
      var encodingType;
      if( this.props.encodingType ){
        if( this.props.encodingType instanceof Array ){
          encodingType = [(<p>encodingType:</p> )];
          for( i in this.props.encodingType ){
            encodingType.push( ( <div class='encodingType'></div> ) );
          }
        } else {
          encodingType = ( <div class='encodingType'>{this.props.encodingType}</div> );
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
