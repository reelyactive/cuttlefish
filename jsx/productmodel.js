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
          isConsumableFor = [(<p>isConsumableFor:</p> )];
          for( i in this.props.isConsumableFor ){
            isConsumableFor.push( ( <Product props={ this.props.isConsumableFor } /> ) );          }
        } else {
          isConsumableFor = ( <Product props={ this.props.isConsumableFor } /> );        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [(<p>weight:</p> )];
          for( i in this.props.weight ){
            weight.push( ( <QuantitativeValue props={ this.props.weight } /> ) );          }
        } else {
          weight = ( <QuantitativeValue props={ this.props.weight } /> );        }
      }
      var isAccessoryOrSparePartFor;
      if( this.props.isAccessoryOrSparePartFor ){
        if( this.props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [(<p>isAccessoryOrSparePartFor:</p> )];
          for( i in this.props.isAccessoryOrSparePartFor ){
            isAccessoryOrSparePartFor.push( ( <Product props={ this.props.isAccessoryOrSparePartFor } /> ) );          }
        } else {
          isAccessoryOrSparePartFor = ( <Product props={ this.props.isAccessoryOrSparePartFor } /> );        }
      }
      var color;
      if( this.props.color ){
        if( this.props.color instanceof Array ){
          color = [(<p>color:</p> )];
          for( i in this.props.color ){
            color.push( ( <div class='color'></div> ) );
          }
        } else {
          color = ( <div class='color'>{this.props.color}</div> );
        }
      }
      var purchaseDate;
      if( this.props.purchaseDate ){
        if( this.props.purchaseDate instanceof Array ){
          purchaseDate = [(<p>purchaseDate:</p> )];
          for( i in this.props.purchaseDate ){
            purchaseDate.push( ( <div class='purchaseDate'></div> ) );
          }
        } else {
          purchaseDate = ( <div class='purchaseDate'>{this.props.purchaseDate}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [(<p>gtin8:</p> )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( <div class='gtin8'></div> ) );
          }
        } else {
          gtin8 = ( <div class='gtin8'>{this.props.gtin8}</div> );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [(<p>height:</p> )];
          for( i in this.props.height ){
            height.push( ( <div class='height'></div> ) );
          }
        } else {
          height = ( <div class='height'>{this.props.height}</div> );
        }
      }
      var releaseDate;
      if( this.props.releaseDate ){
        if( this.props.releaseDate instanceof Array ){
          releaseDate = [(<p>releaseDate:</p> )];
          for( i in this.props.releaseDate ){
            releaseDate.push( ( <div class='releaseDate'></div> ) );
          }
        } else {
          releaseDate = ( <div class='releaseDate'>{this.props.releaseDate}</div> );
        }
      }
      var isRelatedTo;
      if( this.props.isRelatedTo ){
        if( this.props.isRelatedTo instanceof Array ){
          isRelatedTo = [(<p>isRelatedTo:</p> )];
          for( i in this.props.isRelatedTo ){
            isRelatedTo.push( ( <Product props={ this.props.isRelatedTo } /> ) );          }
        } else {
          isRelatedTo = ( <Product props={ this.props.isRelatedTo } /> );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [(<p>logo:</p> )];
          for( i in this.props.logo ){
            logo.push( ( <div class='logo'></div> ) );
          }
        } else {
          logo = ( <div class='logo'>{this.props.logo}</div> );
        }
      }
      var productID;
      if( this.props.productID ){
        if( this.props.productID instanceof Array ){
          productID = [(<p>productID:</p> )];
          for( i in this.props.productID ){
            productID.push( ( <div class='productID'></div> ) );
          }
        } else {
          productID = ( <div class='productID'>{this.props.productID}</div> );
        }
      }
      var category;
      if( this.props.category ){
        if( this.props.category instanceof Array ){
          category = [(<p>category:</p> )];
          for( i in this.props.category ){
            category.push( ( <div class='category'></div> ) );
          }
        } else {
          category = ( <div class='category'>{this.props.category}</div> );
        }
      }
      var predecessorOf;
      if( this.props.predecessorOf ){
        if( this.props.predecessorOf instanceof Array ){
          predecessorOf = [(<p>predecessorOf:</p> )];
          for( i in this.props.predecessorOf ){
            predecessorOf.push( ( <ProductModel props={ this.props.predecessorOf } /> ) );          }
        } else {
          predecessorOf = ( <ProductModel props={ this.props.predecessorOf } /> );        }
      }
      var isSimilarTo;
      if( this.props.isSimilarTo ){
        if( this.props.isSimilarTo instanceof Array ){
          isSimilarTo = [(<p>isSimilarTo:</p> )];
          for( i in this.props.isSimilarTo ){
            isSimilarTo.push( ( <Product props={ this.props.isSimilarTo } /> ) );          }
        } else {
          isSimilarTo = ( <Product props={ this.props.isSimilarTo } /> );        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(<p>review:</p> )];
          for( i in this.props.review ){
            review.push( ( <Review props={ this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var depth;
      if( this.props.depth ){
        if( this.props.depth instanceof Array ){
          depth = [(<p>depth:</p> )];
          for( i in this.props.depth ){
            depth.push( ( <div class='depth'></div> ) );
          }
        } else {
          depth = ( <div class='depth'>{this.props.depth}</div> );
        }
      }
      var width;
      if( this.props.width ){
        if( this.props.width instanceof Array ){
          width = [(<p>width:</p> )];
          for( i in this.props.width ){
            width.push( ( <div class='width'></div> ) );
          }
        } else {
          width = ( <div class='width'>{this.props.width}</div> );
        }
      }
      var additionalProperty;
      if( this.props.additionalProperty ){
        if( this.props.additionalProperty instanceof Array ){
          additionalProperty = [(<p>additionalProperty:</p> )];
          for( i in this.props.additionalProperty ){
            additionalProperty.push( ( <PropertyValue props={ this.props.additionalProperty } /> ) );          }
        } else {
          additionalProperty = ( <PropertyValue props={ this.props.additionalProperty } /> );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [(<p>offers:</p> )];
          for( i in this.props.offers ){
            offers.push( ( <Offer props={ this.props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ this.props.offers } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var manufacturer;
      if( this.props.manufacturer ){
        if( this.props.manufacturer instanceof Array ){
          manufacturer = [(<p>manufacturer:</p> )];
          for( i in this.props.manufacturer ){
            manufacturer.push( ( <Organization props={ this.props.manufacturer } /> ) );          }
        } else {
          manufacturer = ( <Organization props={ this.props.manufacturer } /> );        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [(<p>brand:</p> )];
          for( i in this.props.brand ){
            brand.push( ( <div class='brand'></div> ) );
          }
        } else {
          brand = ( <div class='brand'>{this.props.brand}</div> );
        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [(<p>sku:</p> )];
          for( i in this.props.sku ){
            sku.push( ( <div class='sku'></div> ) );
          }
        } else {
          sku = ( <div class='sku'>{this.props.sku}</div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [(<p>mpn:</p> )];
          for( i in this.props.mpn ){
            mpn.push( ( <div class='mpn'></div> ) );
          }
        } else {
          mpn = ( <div class='mpn'>{this.props.mpn}</div> );
        }
      }
      var successorOf;
      if( this.props.successorOf ){
        if( this.props.successorOf instanceof Array ){
          successorOf = [(<p>successorOf:</p> )];
          for( i in this.props.successorOf ){
            successorOf.push( ( <ProductModel props={ this.props.successorOf } /> ) );          }
        } else {
          successorOf = ( <ProductModel props={ this.props.successorOf } /> );        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [(<p>award:</p> )];
          for( i in this.props.award ){
            award.push( ( <div class='award'></div> ) );
          }
        } else {
          award = ( <div class='award'>{this.props.award}</div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [(<p>itemCondition:</p> )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( <OfferItemCondition props={ this.props.itemCondition } /> ) );          }
        } else {
          itemCondition = ( <OfferItemCondition props={ this.props.itemCondition } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var isVariantOf;
      if( this.props.isVariantOf ){
        if( this.props.isVariantOf instanceof Array ){
          isVariantOf = [(<p>isVariantOf:</p> )];
          for( i in this.props.isVariantOf ){
            isVariantOf.push( ( <ProductModel props={ this.props.isVariantOf } /> ) );          }
        } else {
          isVariantOf = ( <ProductModel props={ this.props.isVariantOf } /> );        }
      }
      var productionDate;
      if( this.props.productionDate ){
        if( this.props.productionDate instanceof Array ){
          productionDate = [(<p>productionDate:</p> )];
          for( i in this.props.productionDate ){
            productionDate.push( ( <div class='productionDate'></div> ) );
          }
        } else {
          productionDate = ( <div class='productionDate'>{this.props.productionDate}</div> );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(<p>aggregateRating:</p> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating props={ this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [(<p>gtin14:</p> )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( <div class='gtin14'></div> ) );
          }
        } else {
          gtin14 = ( <div class='gtin14'>{this.props.gtin14}</div> );
        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [(<p>audience:</p> )];
          for( i in this.props.audience ){
            audience.push( ( <Audience props={ this.props.audience } /> ) );          }
        } else {
          audience = ( <Audience props={ this.props.audience } /> );        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [(<p>gtin13:</p> )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( <div class='gtin13'></div> ) );
          }
        } else {
          gtin13 = ( <div class='gtin13'>{this.props.gtin13}</div> );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [(<p>gtin12:</p> )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( <div class='gtin12'></div> ) );
          }
        } else {
          gtin12 = ( <div class='gtin12'>{this.props.gtin12}</div> );
        }
      }
      var model;
      if( this.props.model ){
        if( this.props.model instanceof Array ){
          model = [(<p>model:</p> )];
          for( i in this.props.model ){
            model.push( ( <div class='model'></div> ) );
          }
        } else {
          model = ( <div class='model'>{this.props.model}</div> );
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
