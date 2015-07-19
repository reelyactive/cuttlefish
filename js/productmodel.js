/* Thing > Product > ProductModel - A datasheet or vendor specification of a product (in the sense of a prototypical description).. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './distance', './product', './thing', './productmodel', './brand', './offer', './quantitativevalue', './propertyvalue', './aggregaterating', './audience', './physicalactivitycategory', './offeritemcondition', './action', './organization', './creativework', './imageobject', './review'], function(React, Distance, Product, Thing, ProductModel, Brand, Offer, QuantitativeValue, PropertyValue, AggregateRating, Audience, PhysicalActivityCategory, OfferItemCondition, Action, Organization, CreativeWork, ImageObject, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var isConsumableFor;
      if( this.props.isConsumableFor ){
        if( this.props.isConsumableFor instanceof Array ){
          isConsumableFor = [(React.createElement("p", null, "isConsumableFor:") )];
          for( i in this.props.isConsumableFor ){
            isConsumableFor.push( ( React.createElement(Product, {props:  this.props.isConsumableFor}) ) );          }
        } else {
          isConsumableFor = ( React.createElement(Product, {props:  this.props.isConsumableFor}) );        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [(React.createElement("p", null, "weight:") )];
          for( i in this.props.weight ){
            weight.push( ( React.createElement(QuantitativeValue, {props:  this.props.weight}) ) );          }
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  this.props.weight}) );        }
      }
      var isAccessoryOrSparePartFor;
      if( this.props.isAccessoryOrSparePartFor ){
        if( this.props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [(React.createElement("p", null, "isAccessoryOrSparePartFor:") )];
          for( i in this.props.isAccessoryOrSparePartFor ){
            isAccessoryOrSparePartFor.push( ( React.createElement(Product, {props:  this.props.isAccessoryOrSparePartFor}) ) );          }
        } else {
          isAccessoryOrSparePartFor = ( React.createElement(Product, {props:  this.props.isAccessoryOrSparePartFor}) );        }
      }
      var color;
      if( this.props.color ){
        if( this.props.color instanceof Array ){
          color = [(React.createElement("p", null, "color:") )];
          for( i in this.props.color ){
            color.push( ( React.createElement("div", {class: "color"}) ) );
          }
        } else {
          color = ( React.createElement("div", {class: "color"}, this.props.color) );
        }
      }
      var purchaseDate;
      if( this.props.purchaseDate ){
        if( this.props.purchaseDate instanceof Array ){
          purchaseDate = [(React.createElement("p", null, "purchaseDate:") )];
          for( i in this.props.purchaseDate ){
            purchaseDate.push( ( React.createElement("div", {class: "purchaseDate"}) ) );
          }
        } else {
          purchaseDate = ( React.createElement("div", {class: "purchaseDate"}, this.props.purchaseDate) );
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
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [(React.createElement("p", null, "gtin8:") )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( React.createElement("div", {class: "gtin8"}) ) );
          }
        } else {
          gtin8 = ( React.createElement("div", {class: "gtin8"}, this.props.gtin8) );
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
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [(React.createElement("p", null, "height:") )];
          for( i in this.props.height ){
            height.push( ( React.createElement("div", {class: "height"}) ) );
          }
        } else {
          height = ( React.createElement("div", {class: "height"}, this.props.height) );
        }
      }
      var releaseDate;
      if( this.props.releaseDate ){
        if( this.props.releaseDate instanceof Array ){
          releaseDate = [(React.createElement("p", null, "releaseDate:") )];
          for( i in this.props.releaseDate ){
            releaseDate.push( ( React.createElement("div", {class: "releaseDate"}) ) );
          }
        } else {
          releaseDate = ( React.createElement("div", {class: "releaseDate"}, this.props.releaseDate) );
        }
      }
      var isRelatedTo;
      if( this.props.isRelatedTo ){
        if( this.props.isRelatedTo instanceof Array ){
          isRelatedTo = [(React.createElement("p", null, "isRelatedTo:") )];
          for( i in this.props.isRelatedTo ){
            isRelatedTo.push( ( React.createElement(Product, {props:  this.props.isRelatedTo}) ) );          }
        } else {
          isRelatedTo = ( React.createElement(Product, {props:  this.props.isRelatedTo}) );        }
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
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [(React.createElement("p", null, "logo:") )];
          for( i in this.props.logo ){
            logo.push( ( React.createElement("div", {class: "logo"}) ) );
          }
        } else {
          logo = ( React.createElement("div", {class: "logo"}, this.props.logo) );
        }
      }
      var productID;
      if( this.props.productID ){
        if( this.props.productID instanceof Array ){
          productID = [(React.createElement("p", null, "productID:") )];
          for( i in this.props.productID ){
            productID.push( ( React.createElement("div", {class: "productID"}) ) );
          }
        } else {
          productID = ( React.createElement("div", {class: "productID"}, this.props.productID) );
        }
      }
      var category;
      if( this.props.category ){
        if( this.props.category instanceof Array ){
          category = [(React.createElement("p", null, "category:") )];
          for( i in this.props.category ){
            category.push( ( React.createElement("div", {class: "category"}) ) );
          }
        } else {
          category = ( React.createElement("div", {class: "category"}, this.props.category) );
        }
      }
      var predecessorOf;
      if( this.props.predecessorOf ){
        if( this.props.predecessorOf instanceof Array ){
          predecessorOf = [(React.createElement("p", null, "predecessorOf:") )];
          for( i in this.props.predecessorOf ){
            predecessorOf.push( ( React.createElement(ProductModel, {props:  this.props.predecessorOf}) ) );          }
        } else {
          predecessorOf = ( React.createElement(ProductModel, {props:  this.props.predecessorOf}) );        }
      }
      var isSimilarTo;
      if( this.props.isSimilarTo ){
        if( this.props.isSimilarTo instanceof Array ){
          isSimilarTo = [(React.createElement("p", null, "isSimilarTo:") )];
          for( i in this.props.isSimilarTo ){
            isSimilarTo.push( ( React.createElement(Product, {props:  this.props.isSimilarTo}) ) );          }
        } else {
          isSimilarTo = ( React.createElement(Product, {props:  this.props.isSimilarTo}) );        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(React.createElement("p", null, "review:") )];
          for( i in this.props.review ){
            review.push( ( React.createElement(Review, {props:  this.props.review}) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  this.props.review}) );        }
      }
      var depth;
      if( this.props.depth ){
        if( this.props.depth instanceof Array ){
          depth = [(React.createElement("p", null, "depth:") )];
          for( i in this.props.depth ){
            depth.push( ( React.createElement("div", {class: "depth"}) ) );
          }
        } else {
          depth = ( React.createElement("div", {class: "depth"}, this.props.depth) );
        }
      }
      var width;
      if( this.props.width ){
        if( this.props.width instanceof Array ){
          width = [(React.createElement("p", null, "width:") )];
          for( i in this.props.width ){
            width.push( ( React.createElement("div", {class: "width"}) ) );
          }
        } else {
          width = ( React.createElement("div", {class: "width"}, this.props.width) );
        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [(React.createElement("p", null, "additionalProperty:") )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) ) );          }
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  this.props.additionalProperty}) );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [(React.createElement("p", null, "offers:") )];
          for( i in this.props.offers ){
            offers.push( ( React.createElement(Offer, {props:  this.props.offers}) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  this.props.offers}) );        }
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
      var manufacturer;
      if( this.props.manufacturer ){
        if( this.props.manufacturer instanceof Array ){
          manufacturer = [(React.createElement("p", null, "manufacturer:") )];
          for( i in this.props.manufacturer ){
            manufacturer.push( ( React.createElement(Organization, {props:  this.props.manufacturer}) ) );          }
        } else {
          manufacturer = ( React.createElement(Organization, {props:  this.props.manufacturer}) );        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [(React.createElement("p", null, "brand:") )];
          for( i in this.props.brand ){
            brand.push( ( React.createElement("div", {class: "brand"}) ) );
          }
        } else {
          brand = ( React.createElement("div", {class: "brand"}, this.props.brand) );
        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [(React.createElement("p", null, "sku:") )];
          for( i in this.props.sku ){
            sku.push( ( React.createElement("div", {class: "sku"}) ) );
          }
        } else {
          sku = ( React.createElement("div", {class: "sku"}, this.props.sku) );
        }
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
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [(React.createElement("p", null, "mpn:") )];
          for( i in this.props.mpn ){
            mpn.push( ( React.createElement("div", {class: "mpn"}) ) );
          }
        } else {
          mpn = ( React.createElement("div", {class: "mpn"}, this.props.mpn) );
        }
      }
      var successorOf;
      if( this.props.successorOf ){
        if( this.props.successorOf instanceof Array ){
          successorOf = [(React.createElement("p", null, "successorOf:") )];
          for( i in this.props.successorOf ){
            successorOf.push( ( React.createElement(ProductModel, {props:  this.props.successorOf}) ) );          }
        } else {
          successorOf = ( React.createElement(ProductModel, {props:  this.props.successorOf}) );        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [(React.createElement("p", null, "award:") )];
          for( i in this.props.award ){
            award.push( ( React.createElement("div", {class: "award"}) ) );
          }
        } else {
          award = ( React.createElement("div", {class: "award"}, this.props.award) );
        }
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
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [(React.createElement("p", null, "itemCondition:") )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( React.createElement(OfferItemCondition, {props:  this.props.itemCondition}) ) );          }
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  this.props.itemCondition}) );        }
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
      var isVariantOf;
      if( this.props.isVariantOf ){
        if( this.props.isVariantOf instanceof Array ){
          isVariantOf = [(React.createElement("p", null, "isVariantOf:") )];
          for( i in this.props.isVariantOf ){
            isVariantOf.push( ( React.createElement(ProductModel, {props:  this.props.isVariantOf}) ) );          }
        } else {
          isVariantOf = ( React.createElement(ProductModel, {props:  this.props.isVariantOf}) );        }
      }
      var productionDate;
      if( this.props.productionDate ){
        if( this.props.productionDate instanceof Array ){
          productionDate = [(React.createElement("p", null, "productionDate:") )];
          for( i in this.props.productionDate ){
            productionDate.push( ( React.createElement("div", {class: "productionDate"}) ) );
          }
        } else {
          productionDate = ( React.createElement("div", {class: "productionDate"}, this.props.productionDate) );
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
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(React.createElement("p", null, "aggregateRating:") )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  this.props.aggregateRating}) );        }
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
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [(React.createElement("p", null, "gtin14:") )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( React.createElement("div", {class: "gtin14"}) ) );
          }
        } else {
          gtin14 = ( React.createElement("div", {class: "gtin14"}, this.props.gtin14) );
        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [(React.createElement("p", null, "audience:") )];
          for( i in this.props.audience ){
            audience.push( ( React.createElement(Audience, {props:  this.props.audience}) ) );          }
        } else {
          audience = ( React.createElement(Audience, {props:  this.props.audience}) );        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [(React.createElement("p", null, "gtin13:") )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( React.createElement("div", {class: "gtin13"}) ) );
          }
        } else {
          gtin13 = ( React.createElement("div", {class: "gtin13"}, this.props.gtin13) );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [(React.createElement("p", null, "gtin12:") )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( React.createElement("div", {class: "gtin12"}) ) );
          }
        } else {
          gtin12 = ( React.createElement("div", {class: "gtin12"}, this.props.gtin12) );
        }
      }
      var model;
      if( this.props.model ){
        if( this.props.model instanceof Array ){
          model = [(React.createElement("p", null, "model:") )];
          for( i in this.props.model ){
            model.push( ( React.createElement("div", {class: "model"}) ) );
          }
        } else {
          model = ( React.createElement("div", {class: "model"}, this.props.model) );
        }
      }
      return (React.createElement("div", {title: "ProductModel", className: "ProductModel entity"}, 
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
         predecessorOf, 
         isSimilarTo, 
         review, 
         depth, 
         width, 
         additionalProperty, 
         offers, 
         mainEntityOfPage, 
         manufacturer, 
         brand, 
         sku, 
         description, 
         mpn, 
         successorOf, 
         award, 
         potentialAction, 
         itemCondition, 
         alternateName, 
         isVariantOf, 
         productionDate, 
         name, 
         aggregateRating, 
         url, 
         gtin14, 
         audience, 
         gtin13, 
         gtin12, 
         model 
     ));
    }
  });
});
