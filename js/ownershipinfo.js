/* Thing > Intangible > StructuredValue > OwnershipInfo - A structured value providing information about when a certain organization or person owned a certain product.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './product', './imageobject', './datetime', './person', './action', './organization', './creativework'], function(React, Product, ImageObject, DateTime, Person, Action, Organization, CreativeWork){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sameAs ){
            sameAs.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) ) );
          }
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var ownedFrom;
      if( props.ownedFrom ){
        if( props.ownedFrom instanceof Array ){
          ownedFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.ownedFrom ){
            ownedFrom.push( ( React.createElement(DateTime, React.__spread({},  props.ownedFrom )) ) );          }
        } else {
          ownedFrom = ( React.createElement(DateTime, {props:  props.ownedFrom}) );        }
      }
      var acquiredFrom;
      if( props.acquiredFrom ){
        if( props.acquiredFrom instanceof Array ){
          acquiredFrom = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.acquiredFrom ){
            acquiredFrom.push( ( React.createElement("div", {"data-advice": "Put your HTML here. acquiredFrom is a Person or" + ' ' +
"Organization."}) ) );
          }
        } else {
            acquiredFrom = ( React.createElement("div", {"data-advice": "Put your HTML here. acquiredFrom is a Person or" + ' ' +
"Organization."}) );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var ownedThrough;
      if( props.ownedThrough ){
        if( props.ownedThrough instanceof Array ){
          ownedThrough = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.ownedThrough ){
            ownedThrough.push( ( React.createElement(DateTime, React.__spread({},  props.ownedThrough )) ) );          }
        } else {
          ownedThrough = ( React.createElement(DateTime, {props:  props.ownedThrough}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a URL or" + ' ' +
"CreativeWork."}) );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.image ){
            image.push( ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var typeOfGood;
      if( props.typeOfGood ){
        if( props.typeOfGood instanceof Array ){
          typeOfGood = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.typeOfGood ){
            typeOfGood.push( ( React.createElement(Product, React.__spread({},  props.typeOfGood )) ) );          }
        } else {
          typeOfGood = ( React.createElement(Product, {props:  props.typeOfGood}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      return (React.createElement("div", {title: "OwnershipInfo", className: "OwnershipInfo entity"}, 
         potentialAction, 
         description, 
         sameAs, 
         ownedFrom, 
         acquiredFrom, 
         url, 
         ownedThrough, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         image, 
         typeOfGood, 
         name 
     ));
    }
  });
});
