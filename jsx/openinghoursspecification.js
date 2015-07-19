/* Thing > Intangible > StructuredValue > OpeningHoursSpecification - A structured value providing information about the opening hours of a place or a certain service inside a place.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './dayofweek', './imageobject', './datetime', './time', './action', './creativework'], function(React, DayOfWeek, ImageObject, DateTime, Time, Action, CreativeWork){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var dayOfWeek;
      if( this.props.dayOfWeek ){
        if( this.props.dayOfWeek instanceof Array ){
          dayOfWeek = [(<p>dayOfWeek:</p> )];
          for( i in this.props.dayOfWeek ){
            dayOfWeek.push( ( <DayOfWeek props={ this.props.dayOfWeek } /> ) );          }
        } else {
          dayOfWeek = ( <DayOfWeek props={ this.props.dayOfWeek } /> );        }
      }
      var closes;
      if( this.props.closes ){
        if( this.props.closes instanceof Array ){
          closes = [(<p>closes:</p> )];
          for( i in this.props.closes ){
            closes.push( ( <Time props={ this.props.closes } /> ) );          }
        } else {
          closes = ( <Time props={ this.props.closes } /> );        }
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
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [(<p>validThrough:</p> )];
          for( i in this.props.validThrough ){
            validThrough.push( ( <DateTime props={ this.props.validThrough } /> ) );          }
        } else {
          validThrough = ( <DateTime props={ this.props.validThrough } /> );        }
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
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [(<p>validFrom:</p> )];
          for( i in this.props.validFrom ){
            validFrom.push( ( <DateTime props={ this.props.validFrom } /> ) );          }
        } else {
          validFrom = ( <DateTime props={ this.props.validFrom } /> );        }
      }
      var opens;
      if( this.props.opens ){
        if( this.props.opens instanceof Array ){
          opens = [(<p>opens:</p> )];
          for( i in this.props.opens ){
            opens.push( ( <Time props={ this.props.opens } /> ) );          }
        } else {
          opens = ( <Time props={ this.props.opens } /> );        }
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
      return (<div title='OpeningHoursSpecification' className='OpeningHoursSpecification entity'>
        { dayOfWeek }
        { closes }
        { potentialAction }
        { description }
        { sameAs }
        { image }
        { url }
        { validThrough }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { validFrom }
        { opens }
        { name }
     </div>);
    }
  });
});
