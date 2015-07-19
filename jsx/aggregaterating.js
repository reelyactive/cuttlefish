/* Thing > Intangible > Rating > AggregateRating - The average rating based on multiple ratings or reviews.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './thing', './creativework', './imageobject', './integer'], function(React, Action, Thing, CreativeWork, ImageObject, Integer){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var reviewCount;
      if( this.props.reviewCount ){
        if( this.props.reviewCount instanceof Array ){
          reviewCount = [(<p>reviewCount:</p> )];
          for( i in this.props.reviewCount ){
            reviewCount.push( ( <Integer props={ this.props.reviewCount } /> ) );          }
        } else {
          reviewCount = ( <Integer props={ this.props.reviewCount } /> );        }
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
      var bestRating;
      if( this.props.bestRating ){
        if( this.props.bestRating instanceof Array ){
          bestRating = [(<p>bestRating:</p> )];
          for( i in this.props.bestRating ){
            bestRating.push( ( <div class='bestRating'></div> ) );
          }
        } else {
          bestRating = ( <div class='bestRating'>{this.props.bestRating}</div> );
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
      var worstRating;
      if( this.props.worstRating ){
        if( this.props.worstRating instanceof Array ){
          worstRating = [(<p>worstRating:</p> )];
          for( i in this.props.worstRating ){
            worstRating.push( ( <div class='worstRating'></div> ) );
          }
        } else {
          worstRating = ( <div class='worstRating'>{this.props.worstRating}</div> );
        }
      }
      var ratingCount;
      if( this.props.ratingCount ){
        if( this.props.ratingCount instanceof Array ){
          ratingCount = [(<p>ratingCount:</p> )];
          for( i in this.props.ratingCount ){
            ratingCount.push( ( <Integer props={ this.props.ratingCount } /> ) );          }
        } else {
          ratingCount = ( <Integer props={ this.props.ratingCount } /> );        }
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
      var itemReviewed;
      if( this.props.itemReviewed ){
        if( this.props.itemReviewed instanceof Array ){
          itemReviewed = [(<p>itemReviewed:</p> )];
          for( i in this.props.itemReviewed ){
            itemReviewed.push( ( <Thing props={ this.props.itemReviewed } /> ) );          }
        } else {
          itemReviewed = ( <Thing props={ this.props.itemReviewed } /> );        }
      }
      var ratingValue;
      if( this.props.ratingValue ){
        if( this.props.ratingValue instanceof Array ){
          ratingValue = [(<p>ratingValue:</p> )];
          for( i in this.props.ratingValue ){
            ratingValue.push( ( <div class='ratingValue'></div> ) );
          }
        } else {
          ratingValue = ( <div class='ratingValue'>{this.props.ratingValue}</div> );
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
