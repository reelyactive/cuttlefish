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
      var inverseOf;
      if( this.props.inverseOf ){
        if( this.props.inverseOf instanceof Array ){
          inverseOf = [(<p>inverseOf:</p> )];
          for( i in this.props.inverseOf ){
            inverseOf.push( ( <Property props={ this.props.inverseOf } /> ) );          }
        } else {
          inverseOf = ( <Property props={ this.props.inverseOf } /> );        }
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
      var rangeIncludes;
      if( this.props.rangeIncludes ){
        if( this.props.rangeIncludes instanceof Array ){
          rangeIncludes = [(<p>rangeIncludes:</p> )];
          for( i in this.props.rangeIncludes ){
            rangeIncludes.push( ( <Class props={ this.props.rangeIncludes } /> ) );          }
        } else {
          rangeIncludes = ( <Class props={ this.props.rangeIncludes } /> );        }
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
      var supersededBy;
      if( this.props.supersededBy ){
        if( this.props.supersededBy instanceof Array ){
          supersededBy = [(<p>supersededBy:</p> )];
          for( i in this.props.supersededBy ){
            supersededBy.push( ( <div class='supersededBy'></div> ) );
          }
        } else {
          supersededBy = ( <div class='supersededBy'>{this.props.supersededBy}</div> );
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
      var domainIncludes;
      if( this.props.domainIncludes ){
        if( this.props.domainIncludes instanceof Array ){
          domainIncludes = [(<p>domainIncludes:</p> )];
          for( i in this.props.domainIncludes ){
            domainIncludes.push( ( <Class props={ this.props.domainIncludes } /> ) );          }
        } else {
          domainIncludes = ( <Class props={ this.props.domainIncludes } /> );        }
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
