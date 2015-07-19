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
          alignmentType = [(<p>alignmentType:</p> )];
          for( i in this.props.alignmentType ){
            alignmentType.push( ( <div class='alignmentType'></div> ) );
          }
        } else {
          alignmentType = ( <div class='alignmentType'>{this.props.alignmentType}</div> );
        }
      }
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
      var educationalFramework;
      if( this.props.educationalFramework ){
        if( this.props.educationalFramework instanceof Array ){
          educationalFramework = [(<p>educationalFramework:</p> )];
          for( i in this.props.educationalFramework ){
            educationalFramework.push( ( <div class='educationalFramework'></div> ) );
          }
        } else {
          educationalFramework = ( <div class='educationalFramework'>{this.props.educationalFramework}</div> );
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
      var targetUrl;
      if( this.props.targetUrl ){
        if( this.props.targetUrl instanceof Array ){
          targetUrl = [(<p>targetUrl:</p> )];
          for( i in this.props.targetUrl ){
            targetUrl.push( ( <div class='targetUrl'></div> ) );
          }
        } else {
          targetUrl = ( <div class='targetUrl'>{this.props.targetUrl}</div> );
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
      var targetName;
      if( this.props.targetName ){
        if( this.props.targetName instanceof Array ){
          targetName = [(<p>targetName:</p> )];
          for( i in this.props.targetName ){
            targetName.push( ( <div class='targetName'></div> ) );
          }
        } else {
          targetName = ( <div class='targetName'>{this.props.targetName}</div> );
        }
      }
      var targetDescription;
      if( this.props.targetDescription ){
        if( this.props.targetDescription instanceof Array ){
          targetDescription = [(<p>targetDescription:</p> )];
          for( i in this.props.targetDescription ){
            targetDescription.push( ( <div class='targetDescription'></div> ) );
          }
        } else {
          targetDescription = ( <div class='targetDescription'>{this.props.targetDescription}</div> );
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
