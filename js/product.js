/* Thing > Product - Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './distance', './product', './productmodel', './thing', './offeritemcondition', './brand', './offer', './quantitativevalue', './propertyvalue', './aggregaterating', './audience', './physicalactivitycategory', './action', './organization', './creativework', './imageobject', './review'], function(React, Distance, Product, ProductModel, Thing, OfferItemCondition, Brand, Offer, QuantitativeValue, PropertyValue, AggregateRating, Audience, PhysicalActivityCategory, Action, Organization, CreativeWork, ImageObject, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var isConsumableFor;
      if( this.props.isConsumableFor ){
        if( this.props.isConsumableFor instanceof Array ){
          isConsumableFor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isConsumableFor ){
            isConsumableFor.push( ( React.createElement(Product, React.__spread({},  this.props.isConsumableFor )) ) );          }
        } else {
          isConsumableFor = ( React.createElement(Product, {props:  this.props.isConsumableFor}) );        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.weight ){
            weight.push( ( React.createElement(QuantitativeValue, React.__spread({},  this.props.weight )) ) );          }
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  this.props.weight}) );        }
      }
      var isAccessoryOrSparePartFor;
      if( this.props.isAccessoryOrSparePartFor ){
        if( this.props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isAccessoryOrSparePartFor ){
            isAccessoryOrSparePartFor.push( ( React.createElement(Product, React.__spread({},  this.props.isAccessoryOrSparePartFor )) ) );          }
        } else {
          isAccessoryOrSparePartFor = ( React.createElement(Product, {props:  this.props.isAccessoryOrSparePartFor}) );        }
      }
      var color;
      if( this.props.color ){
        if( this.props.color instanceof Array ){
          color = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.color ){
            color.push( ( React.createElement("div", {"data-advice": "Put your HTML here. color is a Text."}) ) );
          }
        } else {
            color = ( React.createElement("div", {"data-advice": "Put your HTML here. color is a Text."}) );
        }
      }
      var purchaseDate;
      if( this.props.purchaseDate ){
        if( this.props.purchaseDate instanceof Array ){
          purchaseDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.purchaseDate ){
            purchaseDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. purchaseDate is a Date."}) ) );
          }
        } else {
            purchaseDate = ( React.createElement("div", {"data-advice": "Put your HTML here. purchaseDate is a Date."}) );
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
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) ) );
          }
        } else {
            gtin8 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) );
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
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.height ){
            height.push( ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            height = ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var releaseDate;
      if( this.props.releaseDate ){
        if( this.props.releaseDate instanceof Array ){
          releaseDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.releaseDate ){
            releaseDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. releaseDate is a Date."}) ) );
          }
        } else {
            releaseDate = ( React.createElement("div", {"data-advice": "Put your HTML here. releaseDate is a Date."}) );
        }
      }
      var isRelatedTo;
      if( this.props.isRelatedTo ){
        if( this.props.isRelatedTo instanceof Array ){
          isRelatedTo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isRelatedTo ){
            isRelatedTo.push( ( React.createElement(Product, React.__spread({},  this.props.isRelatedTo )) ) );          }
        } else {
          isRelatedTo = ( React.createElement(Product, {props:  this.props.isRelatedTo}) );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) ) );
          }
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.logo ){
            logo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            logo = ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var productID;
      if( this.props.productID ){
        if( this.props.productID instanceof Array ){
          productID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.productID ){
            productID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. productID is a Text."}) ) );
          }
        } else {
            productID = ( React.createElement("div", {"data-advice": "Put your HTML here. productID is a Text."}) );
        }
      }
      var category;
      if( this.props.category ){
        if( this.props.category instanceof Array ){
          category = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.category ){
            category.push( ( React.createElement("div", {"data-advice": "Put your HTML here. category is a PhysicalActivityCategory or" + ' ' +
"Thing or" + ' ' +
"Text."}) ) );
          }
        } else {
            category = ( React.createElement("div", {"data-advice": "Put your HTML here. category is a PhysicalActivityCategory or" + ' ' +
"Thing or" + ' ' +
"Text."}) );
        }
      }
      var isSimilarTo;
      if( this.props.isSimilarTo ){
        if( this.props.isSimilarTo instanceof Array ){
          isSimilarTo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.isSimilarTo ){
            isSimilarTo.push( ( React.createElement(Product, React.__spread({},  this.props.isSimilarTo )) ) );          }
        } else {
          isSimilarTo = ( React.createElement(Product, {props:  this.props.isSimilarTo}) );        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, React.__spread({},  this.props.review )) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.audience ){
            audience.push( ( React.createElement(Audience, React.__spread({},  this.props.audience )) ) );          }
        } else {
          audience = ( React.createElement(Audience, {props:  this.props.audience}) );        }
      }
      var width;
      if( this.props.width ){
        if( this.props.width instanceof Array ){
          width = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.width ){
            width.push( ( React.createElement("div", {"data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            width = ( React.createElement("div", {"data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, React.__spread({},  this.props.additionalProperty )) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.offers ){
            offers.push( ( React.createElement(Offer, React.__spread({},  this.props.offers )) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  this.props.offers}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) ) );
          }
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var productionDate;
      if( this.props.productionDate ){
        if( this.props.productionDate instanceof Array ){
          productionDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.productionDate ){
            productionDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. productionDate is a Date."}) ) );
          }
        } else {
            productionDate = ( React.createElement("div", {"data-advice": "Put your HTML here. productionDate is a Date."}) );
        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.sku ){
            sku.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) ) );
          }
        } else {
            sku = ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) ) );
          }
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.mpn ){
            mpn.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) ) );
          }
        } else {
            mpn = ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) );
        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.brand ){
            brand.push( ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) ) );
          }
        } else {
            brand = ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.award ){
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
          }
        } else {
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
        }
      }
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( React.createElement(OfferItemCondition, React.__spread({},  this.props.itemCondition )) ) );          }
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  this.props.itemCondition}) );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) ) );
          }
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var manufacturer;
      if( this.props.manufacturer ){
        if( this.props.manufacturer instanceof Array ){
          manufacturer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.manufacturer ){
            manufacturer.push( ( React.createElement(Organization, React.__spread({},  this.props.manufacturer )) ) );          }
        } else {
          manufacturer = ( React.createElement(Organization, {props:  this.props.manufacturer}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  this.props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) ) );
          }
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, React.__spread({},  this.props.aggregateRating )) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) ) );
          }
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) ) );
          }
        } else {
            gtin14 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) );
        }
      }
      var depth;
      if( this.props.depth ){
        if( this.props.depth instanceof Array ){
          depth = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.depth ){
            depth.push( ( React.createElement("div", {"data-advice": "Put your HTML here. depth is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            depth = ( React.createElement("div", {"data-advice": "Put your HTML here. depth is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) ) );
          }
        } else {
            gtin13 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) ) );
          }
        } else {
            gtin12 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) );
        }
      }
      var model;
      if( this.props.model ){
        if( this.props.model instanceof Array ){
          model = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in this.props.model ){
            model.push( ( React.createElement("div", {"data-advice": "Put your HTML here. model is a ProductModel or" + ' ' +
"Text."}) ) );
          }
        } else {
            model = ( React.createElement("div", {"data-advice": "Put your HTML here. model is a ProductModel or" + ' ' +
"Text."}) );
        }
      }
      return (React.createElement("div", {title: "Product", className: "Product entity"}, 
         isConsumableFor, 
         weight, 
         isAccessoryOrSparePartFor, 
         color, 
         purchaseDate, 
         image, 
         gtin8, 
         sameAs, 
         height, 
         releaseDate, 
         isRelatedTo, 
         additionalType, 
         logo, 
         productID, 
         category, 
         isSimilarTo, 
         review, 
         audience, 
         width, 
         additionalProperty, 
         offers, 
         mainEntityOfPage, 
         productionDate, 
         sku, 
         description, 
         mpn, 
         brand, 
         award, 
         itemCondition, 
         alternateName, 
         manufacturer, 
         potentialAction, 
         name, 
         aggregateRating, 
         url, 
         gtin14, 
         depth, 
         gtin13, 
         gtin12, 
         model 
     ));
    }
  });
});
