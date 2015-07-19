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
          isConsumableFor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isConsumableFor ){
            isConsumableFor.push( ( <Product {...this.props.isConsumableFor } /> ) );          }
        } else {
          isConsumableFor = ( <Product props={ this.props.isConsumableFor } /> );        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.weight ){
            weight.push( ( <QuantitativeValue {...this.props.weight } /> ) );          }
        } else {
          weight = ( <QuantitativeValue props={ this.props.weight } /> );        }
      }
      var isAccessoryOrSparePartFor;
      if( this.props.isAccessoryOrSparePartFor ){
        if( this.props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isAccessoryOrSparePartFor ){
            isAccessoryOrSparePartFor.push( ( <Product {...this.props.isAccessoryOrSparePartFor } /> ) );          }
        } else {
          isAccessoryOrSparePartFor = ( <Product props={ this.props.isAccessoryOrSparePartFor } /> );        }
      }
      var color;
      if( this.props.color ){
        if( this.props.color instanceof Array ){
          color = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.color ){
            color.push( ( <div data-advice='Put your HTML here. color is a Text.'></div> ) );
          }
        } else {
            color = ( <div data-advice='Put your HTML here. color is a Text.'></div> );
        }
      }
      var purchaseDate;
      if( this.props.purchaseDate ){
        if( this.props.purchaseDate instanceof Array ){
          purchaseDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.purchaseDate ){
            purchaseDate.push( ( <div data-advice='Put your HTML here. purchaseDate is a Date.'></div> ) );
          }
        } else {
            purchaseDate = ( <div data-advice='Put your HTML here. purchaseDate is a Date.'></div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> ) );
          }
        } else {
            gtin8 = ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.height ){
            height.push( ( <div data-advice='Put your HTML here. height is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            height = ( <div data-advice='Put your HTML here. height is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var releaseDate;
      if( this.props.releaseDate ){
        if( this.props.releaseDate instanceof Array ){
          releaseDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.releaseDate ){
            releaseDate.push( ( <div data-advice='Put your HTML here. releaseDate is a Date.'></div> ) );
          }
        } else {
            releaseDate = ( <div data-advice='Put your HTML here. releaseDate is a Date.'></div> );
        }
      }
      var isRelatedTo;
      if( this.props.isRelatedTo ){
        if( this.props.isRelatedTo instanceof Array ){
          isRelatedTo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isRelatedTo ){
            isRelatedTo.push( ( <Product {...this.props.isRelatedTo } /> ) );          }
        } else {
          isRelatedTo = ( <Product props={ this.props.isRelatedTo } /> );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.logo ){
            logo.push( ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> ) );
          }
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
        }
      }
      var productID;
      if( this.props.productID ){
        if( this.props.productID instanceof Array ){
          productID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.productID ){
            productID.push( ( <div data-advice='Put your HTML here. productID is a Text.'></div> ) );
          }
        } else {
            productID = ( <div data-advice='Put your HTML here. productID is a Text.'></div> );
        }
      }
      var category;
      if( this.props.category ){
        if( this.props.category instanceof Array ){
          category = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.category ){
            category.push( ( <div data-advice='Put your HTML here. category is a Text or
Thing or
PhysicalActivityCategory.'></div> ) );
          }
        } else {
            category = ( <div data-advice='Put your HTML here. category is a Text or
Thing or
PhysicalActivityCategory.'></div> );
        }
      }
      var predecessorOf;
      if( this.props.predecessorOf ){
        if( this.props.predecessorOf instanceof Array ){
          predecessorOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.predecessorOf ){
            predecessorOf.push( ( <ProductModel {...this.props.predecessorOf } /> ) );          }
        } else {
          predecessorOf = ( <ProductModel props={ this.props.predecessorOf } /> );        }
      }
      var isSimilarTo;
      if( this.props.isSimilarTo ){
        if( this.props.isSimilarTo instanceof Array ){
          isSimilarTo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isSimilarTo ){
            isSimilarTo.push( ( <Product {...this.props.isSimilarTo } /> ) );          }
        } else {
          isSimilarTo = ( <Product props={ this.props.isSimilarTo } /> );        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.review ){
            review.push( ( <Review {...this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var depth;
      if( this.props.depth ){
        if( this.props.depth instanceof Array ){
          depth = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.depth ){
            depth.push( ( <div data-advice='Put your HTML here. depth is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            depth = ( <div data-advice='Put your HTML here. depth is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var width;
      if( this.props.width ){
        if( this.props.width instanceof Array ){
          width = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.width ){
            width.push( ( <div data-advice='Put your HTML here. width is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            width = ( <div data-advice='Put your HTML here. width is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue {...this.props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ this.props.additionalProperty } /> );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.offers ){
            offers.push( ( <Offer {...this.props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ this.props.offers } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var manufacturer;
      if( this.props.manufacturer ){
        if( this.props.manufacturer instanceof Array ){
          manufacturer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.manufacturer ){
            manufacturer.push( ( <Organization {...this.props.manufacturer } /> ) );          }
        } else {
          manufacturer = ( <Organization props={ this.props.manufacturer } /> );        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.brand ){
            brand.push( ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> ) );
          }
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> );
        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sku ){
            sku.push( ( <div data-advice='Put your HTML here. sku is a Text.'></div> ) );
          }
        } else {
            sku = ( <div data-advice='Put your HTML here. sku is a Text.'></div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mpn ){
            mpn.push( ( <div data-advice='Put your HTML here. mpn is a Text.'></div> ) );
          }
        } else {
            mpn = ( <div data-advice='Put your HTML here. mpn is a Text.'></div> );
        }
      }
      var successorOf;
      if( this.props.successorOf ){
        if( this.props.successorOf instanceof Array ){
          successorOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.successorOf ){
            successorOf.push( ( <ProductModel {...this.props.successorOf } /> ) );          }
        } else {
          successorOf = ( <ProductModel props={ this.props.successorOf } /> );        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( <OfferItemCondition {...this.props.itemCondition } /> ) );          }
        } else {
          itemCondition = ( <OfferItemCondition props={ this.props.itemCondition } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var isVariantOf;
      if( this.props.isVariantOf ){
        if( this.props.isVariantOf instanceof Array ){
          isVariantOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isVariantOf ){
            isVariantOf.push( ( <ProductModel {...this.props.isVariantOf } /> ) );          }
        } else {
          isVariantOf = ( <ProductModel props={ this.props.isVariantOf } /> );        }
      }
      var productionDate;
      if( this.props.productionDate ){
        if( this.props.productionDate instanceof Array ){
          productionDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.productionDate ){
            productionDate.push( ( <div data-advice='Put your HTML here. productionDate is a Date.'></div> ) );
          }
        } else {
            productionDate = ( <div data-advice='Put your HTML here. productionDate is a Date.'></div> );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> ) );
          }
        } else {
            gtin14 = ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> );
        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.audience ){
            audience.push( ( <Audience {...this.props.audience } /> ) );          }
        } else {
          audience = ( <Audience props={ this.props.audience } /> );        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> ) );
          }
        } else {
            gtin13 = ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> ) );
          }
        } else {
            gtin12 = ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> );
        }
      }
      var model;
      if( this.props.model ){
        if( this.props.model instanceof Array ){
          model = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.model ){
            model.push( ( <div data-advice='Put your HTML here. model is a Text or
ProductModel.'></div> ) );
          }
        } else {
            model = ( <div data-advice='Put your HTML here. model is a Text or
ProductModel.'></div> );
        }
      }
      return (<div title='ProductModel' className='ProductModel entity'>
        { isConsumableFor }
        { weight }
        { isAccessoryOrSparePartFor }
        { color }
        { purchaseDate }
        { image }
        { gtin8 }
        { sameAs }
        { height }
        { releaseDate }
        { isRelatedTo }
        { additionalType }
        { logo }
        { productID }
        { category }
        { predecessorOf }
        { isSimilarTo }
        { review }
        { depth }
        { width }
        { additionalProperty }
        { offers }
        { mainEntityOfPage }
        { manufacturer }
        { brand }
        { sku }
        { description }
        { mpn }
        { successorOf }
        { award }
        { potentialAction }
        { itemCondition }
        { alternateName }
        { isVariantOf }
        { productionDate }
        { name }
        { aggregateRating }
        { url }
        { gtin14 }
        { audience }
        { gtin13 }
        { gtin12 }
        { model }
     </div>);
    }
  });
});
