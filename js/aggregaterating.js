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
          reviewCount = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.reviewCount ){
            reviewCount.push( ( React.createElement(Integer, {props:  this.props.reviewCount}) ) );          }
        } else {
          reviewCount = ( React.createElement(Integer, {props:  this.props.reviewCount}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
        }
      }
      var bestRating;
      if( this.props.bestRating ){
        if( this.props.bestRating instanceof Array ){
          bestRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.bestRating ){
            bestRating.push( ( React.createElement("div", {"data-advice": "Put your HTML here. bestRating is a Text or" + ' ' +
"Number."}) ) );
          }
        } else {
            bestRating.push( ( React.createElement("div", {"data-advice": "Put your HTML here. bestRating is a Text or" + ' ' +
"Number."}) ) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
        }
      }
      var worstRating;
      if( this.props.worstRating ){
        if( this.props.worstRating instanceof Array ){
          worstRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.worstRating ){
            worstRating.push( ( React.createElement("div", {"data-advice": "Put your HTML here. worstRating is a Text or" + ' ' +
"Number."}) ) );
          }
        } else {
            worstRating.push( ( React.createElement("div", {"data-advice": "Put your HTML here. worstRating is a Text or" + ' ' +
"Number."}) ) );
        }
      }
      var ratingCount;
      if( this.props.ratingCount ){
        if( this.props.ratingCount instanceof Array ){
          ratingCount = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.ratingCount ){
            ratingCount.push( ( React.createElement(Integer, {props:  this.props.ratingCount}) ) );          }
        } else {
          ratingCount = ( React.createElement(Integer, {props:  this.props.ratingCount}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
        }
      }
      var itemReviewed;
      if( this.props.itemReviewed ){
        if( this.props.itemReviewed instanceof Array ){
          itemReviewed = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.itemReviewed ){
            itemReviewed.push( ( React.createElement(Thing, {props:  this.props.itemReviewed}) ) );          }
        } else {
          itemReviewed = ( React.createElement(Thing, {props:  this.props.itemReviewed}) );        }
      }
      var ratingValue;
      if( this.props.ratingValue ){
        if( this.props.ratingValue instanceof Array ){
          ratingValue = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.ratingValue ){
            ratingValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. ratingValue is a Text."}) ) );
          }
        } else {
            ratingValue.push( ( React.createElement("div", {"data-advice": "Put your HTML here. ratingValue is a Text."}) ) );
        }
      }
      return (React.createElement("div", {title: "AggregateRating", className: "AggregateRating entity"}, 
         reviewCount, 
         potentialAction, 
         description, 
         name, 
         sameAs, 
         image, 
         bestRating, 
         url, 
         worstRating, 
         ratingCount, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         itemReviewed, 
         ratingValue 
     ));
    }
  });
});
