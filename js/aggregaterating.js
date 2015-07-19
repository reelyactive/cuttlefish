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
          reviewCount = [(React.createElement("p", null, "reviewCount:") )];
          for( i in this.props.reviewCount ){
            reviewCount.push( ( React.createElement(Integer, {props:  this.props.reviewCount}) ) );          }
        } else {
          reviewCount = ( React.createElement(Integer, {props:  this.props.reviewCount}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var bestRating;
      if( this.props.bestRating ){
        if( this.props.bestRating instanceof Array ){
          bestRating = [(React.createElement("p", null, "bestRating:") )];
          for( i in this.props.bestRating ){
            bestRating.push( ( React.createElement("div", {class: "bestRating"}) ) );
          }
        } else {
          bestRating = ( React.createElement("div", {class: "bestRating"}, this.props.bestRating) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var worstRating;
      if( this.props.worstRating ){
        if( this.props.worstRating instanceof Array ){
          worstRating = [(React.createElement("p", null, "worstRating:") )];
          for( i in this.props.worstRating ){
            worstRating.push( ( React.createElement("div", {class: "worstRating"}) ) );
          }
        } else {
          worstRating = ( React.createElement("div", {class: "worstRating"}, this.props.worstRating) );
        }
      }
      var ratingCount;
      if( this.props.ratingCount ){
        if( this.props.ratingCount instanceof Array ){
          ratingCount = [(React.createElement("p", null, "ratingCount:") )];
          for( i in this.props.ratingCount ){
            ratingCount.push( ( React.createElement(Integer, {props:  this.props.ratingCount}) ) );          }
        } else {
          ratingCount = ( React.createElement(Integer, {props:  this.props.ratingCount}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var itemReviewed;
      if( this.props.itemReviewed ){
        if( this.props.itemReviewed instanceof Array ){
          itemReviewed = [(React.createElement("p", null, "itemReviewed:") )];
          for( i in this.props.itemReviewed ){
            itemReviewed.push( ( React.createElement(Thing, {props:  this.props.itemReviewed}) ) );          }
        } else {
          itemReviewed = ( React.createElement(Thing, {props:  this.props.itemReviewed}) );        }
      }
      var ratingValue;
      if( this.props.ratingValue ){
        if( this.props.ratingValue instanceof Array ){
          ratingValue = [(React.createElement("p", null, "ratingValue:") )];
          for( i in this.props.ratingValue ){
            ratingValue.push( ( React.createElement("div", {class: "ratingValue"}) ) );
          }
        } else {
          ratingValue = ( React.createElement("div", {class: "ratingValue"}, this.props.ratingValue) );
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
