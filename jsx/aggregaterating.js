/* Thing > Intangible > Rating > AggregateRating - The average rating based on multiple ratings or reviews.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './thing', './creativework', './imageobject', './integer'], function(React, Action, Thing, CreativeWork, ImageObject, Integer){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var reviewCount;
      if( props.reviewCount ){
        if( props.reviewCount instanceof Array ){
          reviewCount = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.reviewCount ){
            reviewCount.push( ( <Integer {...props.reviewCount } /> ) );          }
        } else {
          reviewCount = ( <Integer props={ props.reviewCount } /> );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
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
      var bestRating;
      if( props.bestRating ){
        if( props.bestRating instanceof Array ){
          bestRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.bestRating ){
            bestRating.push( ( <div data-advice='Put your HTML here. bestRating is a Text or
Number.'></div> ) );
          }
        } else {
            bestRating = ( <div data-advice='Put your HTML here. bestRating is a Text or
Number.'></div> );
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
      var worstRating;
      if( props.worstRating ){
        if( props.worstRating instanceof Array ){
          worstRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.worstRating ){
            worstRating.push( ( <div data-advice='Put your HTML here. worstRating is a Text or
Number.'></div> ) );
          }
        } else {
            worstRating = ( <div data-advice='Put your HTML here. worstRating is a Text or
Number.'></div> );
        }
      }
      var ratingCount;
      if( props.ratingCount ){
        if( props.ratingCount instanceof Array ){
          ratingCount = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.ratingCount ){
            ratingCount.push( ( <Integer {...props.ratingCount } /> ) );          }
        } else {
          ratingCount = ( <Integer props={ props.ratingCount } /> );        }
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
      var itemReviewed;
      if( props.itemReviewed ){
        if( props.itemReviewed instanceof Array ){
          itemReviewed = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.itemReviewed ){
            itemReviewed.push( ( <Thing {...props.itemReviewed } /> ) );          }
        } else {
          itemReviewed = ( <Thing props={ props.itemReviewed } /> );        }
      }
      var ratingValue;
      if( props.ratingValue ){
        if( props.ratingValue instanceof Array ){
          ratingValue = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.ratingValue ){
            ratingValue.push( ( <div data-advice='Put your HTML here. ratingValue is a Text.'></div> ) );
          }
        } else {
            ratingValue = ( <div data-advice='Put your HTML here. ratingValue is a Text.'></div> );
        }
      }
      return (<div title='AggregateRating' className='AggregateRating entity'>
        { reviewCount }
        { potentialAction }
        { description }
        { name }
        { sameAs }
        { image }
        { bestRating }
        { url }
        { worstRating }
        { ratingCount }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { itemReviewed }
        { ratingValue }
     </div>);
    }
  });
});
