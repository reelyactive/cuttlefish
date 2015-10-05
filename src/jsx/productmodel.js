/* Thing > Product > ProductModel - A datasheet or vendor specification of a product (in the sense of a prototypical description).. Generated automatically by the reactGenerator. */  var ProductModel= React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var isConsumableFor;
      if( props.isConsumableFor ){
        if( props.isConsumableFor instanceof Array ){
          isConsumableFor = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isConsumableFor = isConsumableFor.concat( props.isConsumableFor.map( function(result, index){
              return ( <Product {...result} key={index} /> )
           }) );
         isConsumableFor.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          isConsumableFor = ( <Product props={ props.isConsumableFor } /> );        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          weight = weight.concat( props.weight.map( function(result, index){
              return ( <QuantitativeValue {...result} key={index} /> )
           }) );
         weight.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          weight = ( <QuantitativeValue props={ props.weight } /> );        }
      }
      var isAccessoryOrSparePartFor;
      if( props.isAccessoryOrSparePartFor ){
        if( props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isAccessoryOrSparePartFor = isAccessoryOrSparePartFor.concat( props.isAccessoryOrSparePartFor.map( function(result, index){
              return ( <Product {...result} key={index} /> )
           }) );
         isAccessoryOrSparePartFor.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          isAccessoryOrSparePartFor = ( <Product props={ props.isAccessoryOrSparePartFor } /> );        }
      }
      var color;
      if( props.color ){
        if( props.color instanceof Array ){
          color = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          color = color.concat( props.color.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. color is a Text.'></div> )
           }) );
         color.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            color = ( <div data-advice='Put your HTML here. color is a Text.'></div> );
        }
      }
      var purchaseDate;
      if( props.purchaseDate ){
        if( props.purchaseDate instanceof Array ){
          purchaseDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          purchaseDate = purchaseDate.concat( props.purchaseDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. purchaseDate is a Date.'></div> )
           }) );
         purchaseDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            purchaseDate = ( <div data-advice='Put your HTML here. purchaseDate is a Date.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          image = image.concat( props.image.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> )
           }) );
         image.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin8 = gtin8.concat( props.gtin8.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin8 is a Text.'></div> )
           }) );
         gtin8.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin8 = ( <div data-advice='Put your HTML here. gtin8 is a Text.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sameAs is a URL.'></div> )
           }) );
         sameAs.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          height = height.concat( props.height.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> )
           }) );
         height.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            height = ( <div data-advice='Put your HTML here. height is a Distance or
QuantitativeValue.'></div> );
        }
      }
      var releaseDate;
      if( props.releaseDate ){
        if( props.releaseDate instanceof Array ){
          releaseDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          releaseDate = releaseDate.concat( props.releaseDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. releaseDate is a Date.'></div> )
           }) );
         releaseDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            releaseDate = ( <div data-advice='Put your HTML here. releaseDate is a Date.'></div> );
        }
      }
      var isRelatedTo;
      if( props.isRelatedTo ){
        if( props.isRelatedTo instanceof Array ){
          isRelatedTo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isRelatedTo = isRelatedTo.concat( props.isRelatedTo.map( function(result, index){
              return ( <Product {...result} key={index} /> )
           }) );
         isRelatedTo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          isRelatedTo = ( <Product props={ props.isRelatedTo } /> );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. additionalType is a URL.'></div> )
           }) );
         additionalType.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          logo = logo.concat( props.logo.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> )
           }) );
         logo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
        }
      }
      var productID;
      if( props.productID ){
        if( props.productID instanceof Array ){
          productID = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          productID = productID.concat( props.productID.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. productID is a Text.'></div> )
           }) );
         productID.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            productID = ( <div data-advice='Put your HTML here. productID is a Text.'></div> );
        }
      }
      var category;
      if( props.category ){
        if( props.category instanceof Array ){
          category = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          category = category.concat( props.category.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. category is a PhysicalActivityCategory or
Thing or
Text.'></div> )
           }) );
         category.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            category = ( <div data-advice='Put your HTML here. category is a PhysicalActivityCategory or
Thing or
Text.'></div> );
        }
      }
      var predecessorOf;
      if( props.predecessorOf ){
        if( props.predecessorOf instanceof Array ){
          predecessorOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          predecessorOf = predecessorOf.concat( props.predecessorOf.map( function(result, index){
              return ( <ProductModel {...result} key={index} /> )
           }) );
         predecessorOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          predecessorOf = ( <ProductModel props={ props.predecessorOf } /> );        }
      }
      var isSimilarTo;
      if( props.isSimilarTo ){
        if( props.isSimilarTo instanceof Array ){
          isSimilarTo = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isSimilarTo = isSimilarTo.concat( props.isSimilarTo.map( function(result, index){
              return ( <Product {...result} key={index} /> )
           }) );
         isSimilarTo.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          isSimilarTo = ( <Product props={ props.isSimilarTo } /> );        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          review = review.concat( props.review.map( function(result, index){
              return ( <Review {...result} key={index} /> )
           }) );
         review.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var depth;
      if( props.depth ){
        if( props.depth instanceof Array ){
          depth = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          depth = depth.concat( props.depth.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. depth is a Distance or
QuantitativeValue.'></div> )
           }) );
         depth.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            depth = ( <div data-advice='Put your HTML here. depth is a Distance or
QuantitativeValue.'></div> );
        }
      }
      var width;
      if( props.width ){
        if( props.width instanceof Array ){
          width = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          width = width.concat( props.width.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. width is a Distance or
QuantitativeValue.'></div> )
           }) );
         width.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            width = ( <div data-advice='Put your HTML here. width is a Distance or
QuantitativeValue.'></div> );
        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          additionalProperty = additionalProperty.concat( props.additionalProperty.map( function(result, index){
              return ( <PropertyValue {...result} key={index} /> )
           }) );
         additionalProperty.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          additionalProperty = ( <PropertyValue props={ props.additionalProperty } /> );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          offers = offers.concat( props.offers.map( function(result, index){
              return ( <Offer {...result} key={index} /> )
           }) );
         offers.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          offers = ( <Offer props={ props.offers } /> );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> )
           }) );
         mainEntityOfPage.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var manufacturer;
      if( props.manufacturer ){
        if( props.manufacturer instanceof Array ){
          manufacturer = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          manufacturer = manufacturer.concat( props.manufacturer.map( function(result, index){
              return ( <Organization {...result} key={index} /> )
           }) );
         manufacturer.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          manufacturer = ( <Organization props={ props.manufacturer } /> );        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          brand = brand.concat( props.brand.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> )
           }) );
         brand.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> );
        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          sku = sku.concat( props.sku.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. sku is a Text.'></div> )
           }) );
         sku.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            sku = ( <div data-advice='Put your HTML here. sku is a Text.'></div> );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          description = description.concat( props.description.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. description is a Text.'></div> )
           }) );
         description.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          mpn = mpn.concat( props.mpn.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. mpn is a Text.'></div> )
           }) );
         mpn.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            mpn = ( <div data-advice='Put your HTML here. mpn is a Text.'></div> );
        }
      }
      var successorOf;
      if( props.successorOf ){
        if( props.successorOf instanceof Array ){
          successorOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          successorOf = successorOf.concat( props.successorOf.map( function(result, index){
              return ( <ProductModel {...result} key={index} /> )
           }) );
         successorOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          successorOf = ( <ProductModel props={ props.successorOf } /> );        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          award = award.concat( props.award.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. award is a Text.'></div> )
           }) );
         award.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( <Action {...result} key={index} /> )
           }) );
         potentialAction.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          itemCondition = itemCondition.concat( props.itemCondition.map( function(result, index){
              return ( <OfferItemCondition {...result} key={index} /> )
           }) );
         itemCondition.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          itemCondition = ( <OfferItemCondition props={ props.itemCondition } /> );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. alternateName is a Text.'></div> )
           }) );
         alternateName.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var isVariantOf;
      if( props.isVariantOf ){
        if( props.isVariantOf instanceof Array ){
          isVariantOf = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          isVariantOf = isVariantOf.concat( props.isVariantOf.map( function(result, index){
              return ( <ProductModel {...result} key={index} /> )
           }) );
         isVariantOf.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          isVariantOf = ( <ProductModel props={ props.isVariantOf } /> );        }
      }
      var productionDate;
      if( props.productionDate ){
        if( props.productionDate instanceof Array ){
          productionDate = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          productionDate = productionDate.concat( props.productionDate.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. productionDate is a Date.'></div> )
           }) );
         productionDate.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            productionDate = ( <div data-advice='Put your HTML here. productionDate is a Date.'></div> );
        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          name = name.concat( props.name.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. name is a Text.'></div> )
           }) );
         name.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( <AggregateRating {...result} key={index} /> )
           }) );
         aggregateRating.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          url = url.concat( props.url.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. url is a URL.'></div> )
           }) );
         url.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin14 = gtin14.concat( props.gtin14.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin14 is a Text.'></div> )
           }) );
         gtin14.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin14 = ( <div data-advice='Put your HTML here. gtin14 is a Text.'></div> );
        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          audience = audience.concat( props.audience.map( function(result, index){
              return ( <Audience {...result} key={index} /> )
           }) );
         audience.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
          audience = ( <Audience props={ props.audience } /> );        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin13 = gtin13.concat( props.gtin13.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin13 is a Text.'></div> )
           }) );
         gtin13.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin13 = ( <div data-advice='Put your HTML here. gtin13 is a Text.'></div> );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          gtin12 = gtin12.concat( props.gtin12.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. gtin12 is a Text.'></div> )
           }) );
         gtin12.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            gtin12 = ( <div data-advice='Put your HTML here. gtin12 is a Text.'></div> );
        }
      }
      var model;
      if( props.model ){
        if( props.model instanceof Array ){
          model = [ (<div key='header' data-advice='HTML for the *head* of the section'></div>) ]
          model = model.concat( props.model.map( function(result, index){
              return ( <div key={index} data-advice='Put your HTML here. model is a ProductModel or
Text.'></div> )
           }) );
         model.push( ( <div key='footer' data-advice='HTML for the *footer* of the section'></div> ) );
        } else {
            model = ( <div data-advice='Put your HTML here. model is a ProductModel or
Text.'></div> );
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
