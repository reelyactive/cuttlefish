/* Thing > Intangible > Property - A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './imageobject', './enumeration', './action', './property', './creativework', './class'], function(React, ImageObject, Enumeration, Action, Property, CreativeWork, Class){
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
      var inverseOf;
      if( this.props.inverseOf ){
        if( this.props.inverseOf instanceof Array ){
          inverseOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.inverseOf ){
            inverseOf.push( ( <Property props={ this.props.inverseOf } /> ) );          }
        } else {
          inverseOf = ( <Property props={ this.props.inverseOf } /> );        }
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
      var rangeIncludes;
      if( this.props.rangeIncludes ){
        if( this.props.rangeIncludes instanceof Array ){
          rangeIncludes = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.rangeIncludes ){
            rangeIncludes.push( ( <Class props={ this.props.rangeIncludes } /> ) );          }
        } else {
          rangeIncludes = ( <Class props={ this.props.rangeIncludes } /> );        }
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
      var supersededBy;
      if( this.props.supersededBy ){
        if( this.props.supersededBy instanceof Array ){
          supersededBy = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.supersededBy ){
            supersededBy.push( ( <div data-advice='Put your HTML here. supersededBy is a Enumeration or
Class or
Property.'></div> ) );
          }
        } else {
            supersededBy.push( ( <div data-advice='Put your HTML here. supersededBy is a Enumeration or
Class or
Property.'></div> ) );
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
      var domainIncludes;
      if( this.props.domainIncludes ){
        if( this.props.domainIncludes instanceof Array ){
          domainIncludes = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.domainIncludes ){
            domainIncludes.push( ( <Class props={ this.props.domainIncludes } /> ) );          }
        } else {
          domainIncludes = ( <Class props={ this.props.domainIncludes } /> );        }
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
      return (<div title='Property' className='Property entity'>
        { potentialAction }
        { description }
        { inverseOf }
        { sameAs }
        { rangeIncludes }
        { image }
        { url }
        { supersededBy }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { domainIncludes }
        { name }
     </div>);
    }
  });
});
