/* Thing > Intangible > Rating - A rating is an evaluation on a numeric scale, such as 1 to 5 stars.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './creativework', './imageobject'], function(React, Action, CreativeWork, ImageObject){
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
      var bestRating;
      if( this.props.bestRating ){
        if( this.props.bestRating instanceof Array ){
          bestRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.bestRating ){
            bestRating.push( ( <div data-advice='Put your HTML here. bestRating is a Text or
Number.'></div> ) );
          }
        } else {
            bestRating.push( ( <div data-advice='Put your HTML here. bestRating is a Text or
Number.'></div> ) );
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
      var worstRating;
      if( this.props.worstRating ){
        if( this.props.worstRating instanceof Array ){
          worstRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.worstRating ){
            worstRating.push( ( <div data-advice='Put your HTML here. worstRating is a Text or
Number.'></div> ) );
          }
        } else {
            worstRating.push( ( <div data-advice='Put your HTML here. worstRating is a Text or
Number.'></div> ) );
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
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
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
      var ratingValue;
      if( this.props.ratingValue ){
        if( this.props.ratingValue instanceof Array ){
          ratingValue = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.ratingValue ){
            ratingValue.push( ( <div data-advice='Put your HTML here. ratingValue is a Text.'></div> ) );
          }
        } else {
            ratingValue.push( ( <div data-advice='Put your HTML here. ratingValue is a Text.'></div> ) );
        }
      }
      return (<div title='Rating' className='Rating entity'>
        { potentialAction }
        { description }
        { name }
        { sameAs }
        { image }
        { bestRating }
        { url }
        { worstRating }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { ratingValue }
     </div>);
    }
  });
});
