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
          box = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.box ){
            box.push( ( <div data-advice='Put your HTML here. box is a Text.'></div> ) );
          }
        } else {
            box = ( <div data-advice='Put your HTML here. box is a Text.'></div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var elevation;
      if( this.props.elevation ){
        if( this.props.elevation instanceof Array ){
          elevation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.elevation ){
            elevation.push( ( <div data-advice='Put your HTML here. elevation is a Text or
Number.'></div> ) );
          }
        } else {
            elevation = ( <div data-advice='Put your HTML here. elevation is a Text or
Number.'></div> );
        }
      }
      var polygon;
      if( this.props.polygon ){
        if( this.props.polygon instanceof Array ){
          polygon = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.polygon ){
            polygon.push( ( <div data-advice='Put your HTML here. polygon is a Text.'></div> ) );
          }
        } else {
            polygon = ( <div data-advice='Put your HTML here. polygon is a Text.'></div> );
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
      var circle;
      if( this.props.circle ){
        if( this.props.circle instanceof Array ){
          circle = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.circle ){
            circle.push( ( <div data-advice='Put your HTML here. circle is a Text.'></div> ) );
          }
        } else {
            circle = ( <div data-advice='Put your HTML here. circle is a Text.'></div> );
        }
      }
      var line;
      if( this.props.line ){
        if( this.props.line instanceof Array ){
          line = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.line ){
            line.push( ( <div data-advice='Put your HTML here. line is a Text.'></div> ) );
          }
        } else {
            line = ( <div data-advice='Put your HTML here. line is a Text.'></div> );
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
