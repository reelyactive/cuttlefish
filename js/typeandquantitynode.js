/* Thing > Intangible > StructuredValue > TypeAndQuantityNode - A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './action', './businessfunction', './creativework', './product', './imageobject'], function(React, Action, BusinessFunction, CreativeWork, Product, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
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
      var businessFunction;
      if( this.props.businessFunction ){
        if( this.props.businessFunction instanceof Array ){
          businessFunction = [(React.createElement("p", null, "businessFunction:") )];
          for( i in this.props.businessFunction ){
            businessFunction.push( ( React.createElement(BusinessFunction, {props:  this.props.businessFunction}) ) );          }
        } else {
          businessFunction = ( React.createElement(BusinessFunction, {props:  this.props.businessFunction}) );        }
      }
      var unitText;
      if( this.props.unitText ){
        if( this.props.unitText instanceof Array ){
          unitText = [(React.createElement("p", null, "unitText:") )];
          for( i in this.props.unitText ){
            unitText.push( ( React.createElement("div", {class: "unitText"}) ) );
          }
        } else {
          unitText = ( React.createElement("div", {class: "unitText"}, this.props.unitText) );
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
      var amountOfThisGood;
      if( this.props.amountOfThisGood ){
        if( this.props.amountOfThisGood instanceof Array ){
          amountOfThisGood = [(React.createElement("p", null, "amountOfThisGood:") )];
          for( i in this.props.amountOfThisGood ){
            amountOfThisGood.push( ( React.createElement("div", {class: "amountOfThisGood"}) ) );
          }
        } else {
          amountOfThisGood = ( React.createElement("div", {class: "amountOfThisGood"}, this.props.amountOfThisGood) );
        }
      }
      var unitCode;
      if( this.props.unitCode ){
        if( this.props.unitCode instanceof Array ){
          unitCode = [(React.createElement("p", null, "unitCode:") )];
          for( i in this.props.unitCode ){
            unitCode.push( ( React.createElement("div", {class: "unitCode"}) ) );
          }
        } else {
          unitCode = ( React.createElement("div", {class: "unitCode"}, this.props.unitCode) );
        }
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
      var typeOfGood;
      if( this.props.typeOfGood ){
        if( this.props.typeOfGood instanceof Array ){
          typeOfGood = [(React.createElement("p", null, "typeOfGood:") )];
          for( i in this.props.typeOfGood ){
            typeOfGood.push( ( React.createElement(Product, {props:  this.props.typeOfGood}) ) );          }
        } else {
          typeOfGood = ( React.createElement(Product, {props:  this.props.typeOfGood}) );        }
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
