/* Thing > Intangible > StructuredValue > GeoShape - The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var box;
      if( this.props.box ){
        if( this.props.box instanceof Array ){
          box = [(<p>box:</p> )];
          for( i in this.props.box ){
            box.push( ( <div class='box'></div> ) );
          }
        } else {
          box = ( <div class='box'>{this.props.box}</div> );
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
      var elevation;
      if( this.props.elevation ){
        if( this.props.elevation instanceof Array ){
          elevation = [(<p>elevation:</p> )];
          for( i in this.props.elevation ){
            elevation.push( ( <div class='elevation'></div> ) );
          }
        } else {
          elevation = ( <div class='elevation'>{this.props.elevation}</div> );
        }
      }
      var polygon;
      if( this.props.polygon ){
        if( this.props.polygon instanceof Array ){
          polygon = [(<p>polygon:</p> )];
          for( i in this.props.polygon ){
            polygon.push( ( <div class='polygon'></div> ) );
          }
        } else {
          polygon = ( <div class='polygon'>{this.props.polygon}</div> );
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
      var circle;
      if( this.props.circle ){
        if( this.props.circle instanceof Array ){
          circle = [(<p>circle:</p> )];
          for( i in this.props.circle ){
            circle.push( ( <div class='circle'></div> ) );
          }
        } else {
          circle = ( <div class='circle'>{this.props.circle}</div> );
        }
      }
      var line;
      if( this.props.line ){
        if( this.props.line instanceof Array ){
          line = [(<p>line:</p> )];
          for( i in this.props.line ){
            line.push( ( <div class='line'></div> ) );
          }
        } else {
          line = ( <div class='line'>{this.props.line}</div> );
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
      return (<div title='GeoShape' className='GeoShape entity'>
        { box }
        { potentialAction }
        { elevation }
        { polygon }
        { sameAs }
        { image }
        { name }
        { alternateName }
        { url }
        { mainEntityOfPage }
        { additionalType }
        { circle }
        { line }
        { description }
     </div>);
    }
  });
});
