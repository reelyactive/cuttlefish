/* Thing > Product > ProductModel - A datasheet or vendor specification of a product (in the sense of a prototypical description).. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './distance', './product', './thing', './productmodel', './brand', './offer', './quantitativevalue', './propertyvalue', './aggregaterating', './audience', './physicalactivitycategory', './offeritemcondition', './action', './organization', './creativework', './imageobject', './review'], function(React, Distance, Product, Thing, ProductModel, Brand, Offer, QuantitativeValue, PropertyValue, AggregateRating, Audience, PhysicalActivityCategory, OfferItemCondition, Action, Organization, CreativeWork, ImageObject, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var isConsumableFor;
      if( props.isConsumableFor ){
        if( props.isConsumableFor instanceof Array ){
          isConsumableFor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isConsumableFor ){
            isConsumableFor.push( ( React.createElement(Product, React.__spread({},  props.isConsumableFor )) ) );          }
        } else {
          isConsumableFor = ( React.createElement(Product, {props:  props.isConsumableFor}) );        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.weight ){
            weight.push( ( React.createElement(QuantitativeValue, React.__spread({},  props.weight )) ) );          }
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  props.weight}) );        }
      }
      var isAccessoryOrSparePartFor;
      if( props.isAccessoryOrSparePartFor ){
        if( props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isAccessoryOrSparePartFor ){
            isAccessoryOrSparePartFor.push( ( React.createElement(Product, React.__spread({},  props.isAccessoryOrSparePartFor )) ) );          }
        } else {
          isAccessoryOrSparePartFor = ( React.createElement(Product, {props:  props.isAccessoryOrSparePartFor}) );        }
      }
      var color;
      if( props.color ){
        if( props.color instanceof Array ){
          color = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.color ){
            color.push( ( React.createElement("div", {"data-advice": "Put your HTML here. color is a Text."}) ) );
          }
        } else {
            color = ( React.createElement("div", {"data-advice": "Put your HTML here. color is a Text."}) );
        }
      }
      var purchaseDate;
      if( props.purchaseDate ){
        if( props.purchaseDate instanceof Array ){
          purchaseDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.purchaseDate ){
            purchaseDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. purchaseDate is a Date."}) ) );
          }
        } else {
            purchaseDate = ( React.createElement("div", {"data-advice": "Put your HTML here. purchaseDate is a Date."}) );
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
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin8 ){
            gtin8.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) ) );
          }
        } else {
            gtin8 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) );
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
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.height ){
            height.push( ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            height = ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var releaseDate;
      if( props.releaseDate ){
        if( props.releaseDate instanceof Array ){
          releaseDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.releaseDate ){
            releaseDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. releaseDate is a Date."}) ) );
          }
        } else {
            releaseDate = ( React.createElement("div", {"data-advice": "Put your HTML here. releaseDate is a Date."}) );
        }
      }
      var isRelatedTo;
      if( props.isRelatedTo ){
        if( props.isRelatedTo instanceof Array ){
          isRelatedTo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isRelatedTo ){
            isRelatedTo.push( ( React.createElement(Product, React.__spread({},  props.isRelatedTo )) ) );          }
        } else {
          isRelatedTo = ( React.createElement(Product, {props:  props.isRelatedTo}) );        }
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
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.logo ){
            logo.push( ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) ) );
          }
        } else {
            logo = ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var productID;
      if( props.productID ){
        if( props.productID instanceof Array ){
          productID = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.productID ){
            productID.push( ( React.createElement("div", {"data-advice": "Put your HTML here. productID is a Text."}) ) );
          }
        } else {
            productID = ( React.createElement("div", {"data-advice": "Put your HTML here. productID is a Text."}) );
        }
      }
      var category;
      if( props.category ){
        if( props.category instanceof Array ){
          category = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.category ){
            category.push( ( React.createElement("div", {"data-advice": "Put your HTML here. category is a Text or" + ' ' +
"PhysicalActivityCategory or" + ' ' +
"Thing."}) ) );
          }
        } else {
            category = ( React.createElement("div", {"data-advice": "Put your HTML here. category is a Text or" + ' ' +
"PhysicalActivityCategory or" + ' ' +
"Thing."}) );
        }
      }
      var predecessorOf;
      if( props.predecessorOf ){
        if( props.predecessorOf instanceof Array ){
          predecessorOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.predecessorOf ){
            predecessorOf.push( ( React.createElement(ProductModel, React.__spread({},  props.predecessorOf )) ) );          }
        } else {
          predecessorOf = ( React.createElement(ProductModel, {props:  props.predecessorOf}) );        }
      }
      var isSimilarTo;
      if( props.isSimilarTo ){
        if( props.isSimilarTo instanceof Array ){
          isSimilarTo = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isSimilarTo ){
            isSimilarTo.push( ( React.createElement(Product, React.__spread({},  props.isSimilarTo )) ) );          }
        } else {
          isSimilarTo = ( React.createElement(Product, {props:  props.isSimilarTo}) );        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.review ){
            review.push( ( React.createElement(Review, React.__spread({},  props.review )) ) );          }
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var depth;
      if( props.depth ){
        if( props.depth instanceof Array ){
          depth = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.depth ){
            depth.push( ( React.createElement("div", {"data-advice": "Put your HTML here. depth is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            depth = ( React.createElement("div", {"data-advice": "Put your HTML here. depth is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var width;
      if( props.width ){
        if( props.width instanceof Array ){
          width = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.width ){
            width.push( ( React.createElement("div", {"data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) ) );
          }
        } else {
            width = ( React.createElement("div", {"data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) );
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
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.offers ){
            offers.push( ( React.createElement(Offer, React.__spread({},  props.offers )) ) );          }
        } else {
          offers = ( React.createElement(Offer, {props:  props.offers}) );        }
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
      var manufacturer;
      if( props.manufacturer ){
        if( props.manufacturer instanceof Array ){
          manufacturer = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.manufacturer ){
            manufacturer.push( ( React.createElement(Organization, React.__spread({},  props.manufacturer )) ) );          }
        } else {
          manufacturer = ( React.createElement(Organization, {props:  props.manufacturer}) );        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.brand ){
            brand.push( ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Organization or" + ' ' +
"Brand."}) ) );
          }
        } else {
            brand = ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Organization or" + ' ' +
"Brand."}) );
        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.sku ){
            sku.push( ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) ) );
          }
        } else {
            sku = ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) );
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
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.mpn ){
            mpn.push( ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) ) );
          }
        } else {
            mpn = ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) );
        }
      }
      var successorOf;
      if( props.successorOf ){
        if( props.successorOf instanceof Array ){
          successorOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.successorOf ){
            successorOf.push( ( React.createElement(ProductModel, React.__spread({},  props.successorOf )) ) );          }
        } else {
          successorOf = ( React.createElement(ProductModel, {props:  props.successorOf}) );        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.award ){
            award.push( ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) ) );
          }
        } else {
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, React.__spread({},  props.potentialAction )) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.itemCondition ){
            itemCondition.push( ( React.createElement(OfferItemCondition, React.__spread({},  props.itemCondition )) ) );          }
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  props.itemCondition}) );        }
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
      var isVariantOf;
      if( props.isVariantOf ){
        if( props.isVariantOf instanceof Array ){
          isVariantOf = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.isVariantOf ){
            isVariantOf.push( ( React.createElement(ProductModel, React.__spread({},  props.isVariantOf )) ) );          }
        } else {
          isVariantOf = ( React.createElement(ProductModel, {props:  props.isVariantOf}) );        }
      }
      var productionDate;
      if( props.productionDate ){
        if( props.productionDate instanceof Array ){
          productionDate = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.productionDate ){
            productionDate.push( ( React.createElement("div", {"data-advice": "Put your HTML here. productionDate is a Date."}) ) );
          }
        } else {
            productionDate = ( React.createElement("div", {"data-advice": "Put your HTML here. productionDate is a Date."}) );
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
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( React.createElement(AggregateRating, React.__spread({},  props.aggregateRating )) ) );          }
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
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
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin14 ){
            gtin14.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) ) );
          }
        } else {
            gtin14 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) );
        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.audience ){
            audience.push( ( React.createElement(Audience, React.__spread({},  props.audience )) ) );          }
        } else {
          audience = ( React.createElement(Audience, {props:  props.audience}) );        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin13 ){
            gtin13.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) ) );
          }
        } else {
            gtin13 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.gtin12 ){
            gtin12.push( ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) ) );
          }
        } else {
            gtin12 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) );
        }
      }
      var model;
      if( props.model ){
        if( props.model instanceof Array ){
          model = [( React.createElement("div", {"data-advice": "HTML for the *head* of the section"}) )];
          for( i in props.model ){
            model.push( ( React.createElement("div", {"data-advice": "Put your HTML here. model is a Text or" + ' ' +
"ProductModel."}) ) );
          }
        } else {
            model = ( React.createElement("div", {"data-advice": "Put your HTML here. model is a Text or" + ' ' +
"ProductModel."}) );
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
