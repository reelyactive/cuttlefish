/* Thing > Product - Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './distance', './product', './productmodel', './thing', './offeritemcondition', './brand', './offer', './quantitativevalue', './propertyvalue', './aggregaterating', './audience', './physicalactivitycategory', './action', './organization', './creativework', './imageobject', './review'], function(React, Distance, Product, ProductModel, Thing, OfferItemCondition, Brand, Offer, QuantitativeValue, PropertyValue, AggregateRating, Audience, PhysicalActivityCategory, Action, Organization, CreativeWork, ImageObject, Review){
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
          isConsumableFor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isConsumableFor ){
            isConsumableFor.push( ( <Product {...props.isConsumableFor } /> ) );          }
        } else {
          isConsumableFor = ( <Product props={ props.isConsumableFor } /> );        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.weight ){
            weight.push( ( <QuantitativeValue {...props.weight } /> ) );          }
        } else {
          weight = ( <QuantitativeValue props={ props.weight } /> );        }
      }
      var isAccessoryOrSparePartFor;
      if( props.isAccessoryOrSparePartFor ){
        if( props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isAccessoryOrSparePartFor ){
            isAccessoryOrSparePartFor.push( ( <Product {...props.isAccessoryOrSparePartFor } /> ) );          }
        } else {
          isAccessoryOrSparePartFor = ( <Product props={ props.isAccessoryOrSparePartFor } /> );        }
      }
      var color;
      if( props.color ){
        if( props.color instanceof Array ){
          color = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.color ){
            color.push( ( <div data-advice='Put your HTML here. color is a Text.'></div> ) );
          }
        } else {
            color = ( <div data-advice='Put your HTML here. color is a Text.'></div> );
        }
      }
      var purchaseDate;
      if( props.purchaseDate ){
        if( props.purchaseDate instanceof Array ){
          purchaseDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.purchaseDate ){
            purchaseDate.push( ( <div data-advice='Put your HTML here. purchaseDate is a Date.'></div> ) );
          }
        } else {
            purchaseDate = ( <div data-advice='Put your HTML here. purchaseDate is a Date.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin8 ){
            gtin8.push( ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> ) );
          }
        } else {
            gtin8 = ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.height ){
            height.push( ( <div data-advice='Put your HTML here. height is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            height = ( <div data-advice='Put your HTML here. height is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var releaseDate;
      if( props.releaseDate ){
        if( props.releaseDate instanceof Array ){
          releaseDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.releaseDate ){
            releaseDate.push( ( <div data-advice='Put your HTML here. releaseDate is a Date.'></div> ) );
          }
        } else {
            releaseDate = ( <div data-advice='Put your HTML here. releaseDate is a Date.'></div> );
        }
      }
      var isRelatedTo;
      if( props.isRelatedTo ){
        if( props.isRelatedTo instanceof Array ){
          isRelatedTo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isRelatedTo ){
            isRelatedTo.push( ( <Product {...props.isRelatedTo } /> ) );          }
        } else {
          isRelatedTo = ( <Product props={ props.isRelatedTo } /> );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.logo ){
            logo.push( ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> ) );
          }
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
        }
      }
      var productID;
      if( props.productID ){
        if( props.productID instanceof Array ){
          productID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.productID ){
            productID.push( ( <div data-advice='Put your HTML here. productID is a Text.'></div> ) );
          }
        } else {
            productID = ( <div data-advice='Put your HTML here. productID is a Text.'></div> );
        }
      }
      var category;
      if( props.category ){
        if( props.category instanceof Array ){
          category = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.category ){
            category.push( ( <div data-advice='Put your HTML here. category is a Thing or
Text or
PhysicalActivityCategory.'></div> ) );
          }
        } else {
            category = ( <div data-advice='Put your HTML here. category is a Thing or
Text or
PhysicalActivityCategory.'></div> );
        }
      }
      var isSimilarTo;
      if( props.isSimilarTo ){
        if( props.isSimilarTo instanceof Array ){
          isSimilarTo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isSimilarTo ){
            isSimilarTo.push( ( <Product {...props.isSimilarTo } /> ) );          }
        } else {
          isSimilarTo = ( <Product props={ props.isSimilarTo } /> );        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.review ){
            review.push( ( <Review {...props.review } /> ) );          }
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.audience ){
            audience.push( ( <Audience {...props.audience } /> ) );          }
        } else {
          audience = ( <Audience props={ props.audience } /> );        }
      }
      var width;
      if( props.width ){
        if( props.width instanceof Array ){
          width = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.width ){
            width.push( ( <div data-advice='Put your HTML here. width is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            width = ( <div data-advice='Put your HTML here. width is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue {...props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ props.additionalProperty } /> );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.offers ){
            offers.push( ( <Offer {...props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ props.offers } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var productionDate;
      if( props.productionDate ){
        if( props.productionDate instanceof Array ){
          productionDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.productionDate ){
            productionDate.push( ( <div data-advice='Put your HTML here. productionDate is a Date.'></div> ) );
          }
        } else {
            productionDate = ( <div data-advice='Put your HTML here. productionDate is a Date.'></div> );
        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sku ){
            sku.push( ( <div data-advice='Put your HTML here. sku is a Text.'></div> ) );
          }
        } else {
            sku = ( <div data-advice='Put your HTML here. sku is a Text.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mpn ){
            mpn.push( ( <div data-advice='Put your HTML here. mpn is a Text.'></div> ) );
          }
        } else {
            mpn = ( <div data-advice='Put your HTML here. mpn is a Text.'></div> );
        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.brand ){
            brand.push( ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> ) );
          }
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.itemCondition ){
            itemCondition.push( ( <OfferItemCondition {...props.itemCondition } /> ) );          }
        } else {
          itemCondition = ( <OfferItemCondition props={ props.itemCondition } /> );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var manufacturer;
      if( props.manufacturer ){
        if( props.manufacturer instanceof Array ){
          manufacturer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.manufacturer ){
            manufacturer.push( ( <Organization {...props.manufacturer } /> ) );          }
        } else {
          manufacturer = ( <Organization props={ props.manufacturer } /> );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin14 ){
            gtin14.push( ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> ) );
          }
        } else {
            gtin14 = ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> );
        }
      }
      var depth;
      if( props.depth ){
        if( props.depth instanceof Array ){
          depth = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.depth ){
            depth.push( ( <div data-advice='Put your HTML here. depth is a QuantitativeValue or
Distance.'></div> ) );
          }
        } else {
            depth = ( <div data-advice='Put your HTML here. depth is a QuantitativeValue or
Distance.'></div> );
        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin13 ){
            gtin13.push( ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> ) );
          }
        } else {
            gtin13 = ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.gtin12 ){
            gtin12.push( ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> ) );
          }
        } else {
            gtin12 = ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> );
        }
      }
      var model;
      if( props.model ){
        if( props.model instanceof Array ){
          model = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.model ){
            model.push( ( <div data-advice='Put your HTML here. model is a Text or
ProductModel.'></div> ) );
          }
        } else {
            model = ( <div data-advice='Put your HTML here. model is a Text or
ProductModel.'></div> );
        }
      }
      return (<div title='Product' className='Product entity'>
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
        { isSimilarTo }
        { review }
        { audience }
        { width }
        { additionalProperty }
        { offers }
        { mainEntityOfPage }
        { productionDate }
        { sku }
        { description }
        { mpn }
        { brand }
        { award }
        { itemCondition }
        { alternateName }
        { manufacturer }
        { potentialAction }
        { name }
        { aggregateRating }
        { url }
        { gtin14 }
        { depth }
        { gtin13 }
        { gtin12 }
        { model }
     </div>);
    }
  });
});
