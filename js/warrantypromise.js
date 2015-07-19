/* Thing > Intangible > StructuredValue > WarrantyPromise - A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './warrantyscope', './creativework', './quantitativevalue', './imageobject'], function(React, Action, WarrantyScope, CreativeWork, QuantitativeValue, ImageObject){
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
      var warrantyScope;
      if( props.warrantyScope ){
        if( props.warrantyScope instanceof Array ){
          warrantyScope = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.warrantyScope ){
            warrantyScope.push( ( React.createElement(WarrantyScope, React.__spread({},  props.warrantyScope )) ) );          }
        } else {
          warrantyScope = ( React.createElement(WarrantyScope, {props:  props.warrantyScope}) );        }
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
      var durationOfWarranty;
      if( props.durationOfWarranty ){
        if( props.durationOfWarranty instanceof Array ){
          durationOfWarranty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.durationOfWarranty ){
            durationOfWarranty.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.durationOfWarranty )) ) );          }
        } else {
          durationOfWarranty = ( React.createElement(QuantitativeValue, {props:  props.durationOfWarranty}) );        }
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
      return (React.createElement("div", {title: "WarrantyPromise", className: "WarrantyPromise entity"}, 
         potentialAction, 
         description, 
         sameAs, 
         warrantyScope, 
         image, 
         url, 
         durationOfWarranty, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         name 
     ));
    }
  });
});
