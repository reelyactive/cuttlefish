/* Thing > Intangible > StructuredValue > TypeAndQuantityNode - A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './businessfunction', './creativework', './product', './imageobject'], function(React, Action, BusinessFunction, CreativeWork, Product, ImageObject){
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
      var businessFunction;
      if( props.businessFunction ){
        if( props.businessFunction instanceof Array ){
          businessFunction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.businessFunction ){
            businessFunction.push( ( React.createElement(BusinessFunction, React.__spread({},  props.businessFunction )) ) );          }
        } else {
          businessFunction = ( React.createElement(BusinessFunction, {props:  props.businessFunction}) );        }
      }
      var unitText;
      if( props.unitText ){
        if( props.unitText instanceof Array ){
          unitText = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.unitText ){
            unitText.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) ) );
          }
        } else {
            unitText = ( React.createElement("div", {"data-advice": "Put your HTML here. unitText is a Text."}) );
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
      var amountOfThisGood;
      if( props.amountOfThisGood ){
        if( props.amountOfThisGood instanceof Array ){
          amountOfThisGood = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.amountOfThisGood ){
            amountOfThisGood.push( ( React.createElement("div", {"data-advice": "Put your HTML here. amountOfThisGood is a Number."}) ) );
          }
        } else {
            amountOfThisGood = ( React.createElement("div", {"data-advice": "Put your HTML here. amountOfThisGood is a Number."}) );
        }
      }
      var unitCode;
      if( props.unitCode ){
        if( props.unitCode instanceof Array ){
          unitCode = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.unitCode ){
            unitCode.push( ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a Text or" + ' ' +
"URL."}) ) );
          }
        } else {
            unitCode = ( React.createElement("div", {"data-advice": "Put your HTML here. unitCode is a Text or" + ' ' +
"URL."}) );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
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
      return (React.createElement("div", {title: "TypeAndQuantityNode", className: "TypeAndQuantityNode entity"}, 
         potentialAction, 
         description, 
         sameAs, 
         businessFunction, 
         unitText, 
         url, 
         amountOfThisGood, 
         unitCode, 
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
