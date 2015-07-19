/* Thing > Intangible > Enumeration > QualitativeValue - A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './propertyvalue', './quantitativevalue', './enumeration', './structuredvalue', './qualitativevalue', './imageobject', './action', './property', './creativework', './class'], function(React, PropertyValue, QuantitativeValue, Enumeration, StructuredValue, QualitativeValue, ImageObject, Action, Property, CreativeWork, Class){
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
      var valueReference;
      if( props.valueReference ){
        if( props.valueReference instanceof Array ){
          valueReference = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.valueReference ){
            valueReference.push( ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue."}) ) );
          }
        } else {
            valueReference = ( React.createElement("div", {"data-advice": "Put your HTML here. valueReference is a PropertyValue or" + ' ' +
"QuantitativeValue or" + ' ' +
"QualitativeValue or" + ' ' +
"Enumeration or" + ' ' +
"StructuredValue."}) );
        }
      }
      var greater;
      if( props.greater ){
        if( props.greater instanceof Array ){
          greater = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.greater ){
            greater.push( ( React.createElement(QualitativeValue, React.__spread({},  props.greater )) ) );          }
        } else {
          greater = ( React.createElement(QualitativeValue, {props:  props.greater}) );        }
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
      var lesserOrEqual;
      if( props.lesserOrEqual ){
        if( props.lesserOrEqual instanceof Array ){
          lesserOrEqual = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.lesserOrEqual ){
            lesserOrEqual.push( ( React.createElement(QualitativeValue, React.__spread({},  props.lesserOrEqual )) ) );          }
        } else {
          lesserOrEqual = ( React.createElement(QualitativeValue, {props:  props.lesserOrEqual}) );        }
      }
      var equal;
      if( props.equal ){
        if( props.equal instanceof Array ){
          equal = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.equal ){
            equal.push( ( React.createElement(QualitativeValue, React.__spread({},  props.equal )) ) );          }
        } else {
          equal = ( React.createElement(QualitativeValue, {props:  props.equal}) );        }
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
      var lesser;
      if( props.lesser ){
        if( props.lesser instanceof Array ){
          lesser = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.lesser ){
            lesser.push( ( React.createElement(QualitativeValue, React.__spread({},  props.lesser )) ) );          }
        } else {
          lesser = ( React.createElement(QualitativeValue, {props:  props.lesser}) );        }
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
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, React.__spread({},  props.additionalProperty )) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  props.additionalProperty}) );        }
      }
      var supersededBy;
      if( props.supersededBy ){
        if( props.supersededBy instanceof Array ){
          supersededBy = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.supersededBy ){
            supersededBy.push( ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Property or" + ' ' +
"Enumeration or" + ' ' +
"Class."}) ) );
          }
        } else {
            supersededBy = ( React.createElement("div", {"data-advice": "Put your HTML here. supersededBy is a Property or" + ' ' +
"Enumeration or" + ' ' +
"Class."}) );
        }
      }
      var greaterOrEqual;
      if( props.greaterOrEqual ){
        if( props.greaterOrEqual instanceof Array ){
          greaterOrEqual = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.greaterOrEqual ){
            greaterOrEqual.push( ( React.createElement(QualitativeValue, React.__spread({},  props.greaterOrEqual )) ) );          }
        } else {
          greaterOrEqual = ( React.createElement(QualitativeValue, {props:  props.greaterOrEqual}) );        }
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
      var nonEqual;
      if( props.nonEqual ){
        if( props.nonEqual instanceof Array ){
          nonEqual = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.nonEqual ){
            nonEqual.push( ( React.createElement(QualitativeValue, React.__spread({},  props.nonEqual )) ) );          }
        } else {
          nonEqual = ( React.createElement(QualitativeValue, {props:  props.nonEqual}) );        }
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
      return (React.createElement("div", {title: "QualitativeValue", className: "QualitativeValue entity"}, 
         potentialAction, 
         valueReference, 
         greater, 
         sameAs, 
         lesserOrEqual, 
         equal, 
         name, 
         lesser, 
         url, 
         additionalProperty, 
         supersededBy, 
         greaterOrEqual, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         nonEqual, 
         image, 
         description 
     ));
    }
  });
});
