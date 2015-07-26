/* Thing > Product - Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.. Generated automatically by the reactGenerator. */  var Product= React.createClass({displayName: "Product",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var isConsumableFor;
      if( props.isConsumableFor ){
        if( props.isConsumableFor instanceof Array ){
          isConsumableFor = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isConsumableFor = isConsumableFor.concat( props.isConsumableFor.map( function(result, index){
              return ( React.createElement(Product, React.__spread({},  result, {key: index})) )
           }) );
         isConsumableFor.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          isConsumableFor = ( React.createElement(Product, {props:  props.isConsumableFor}) );        }
      }
      var weight;
      if( props.weight ){
        if( props.weight instanceof Array ){
          weight = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          weight = weight.concat( props.weight.map( function(result, index){
              return ( React.createElement(QuantitativeValue, React.__spread({},  result, {key: index})) )
           }) );
         weight.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          weight = ( React.createElement(QuantitativeValue, {props:  props.weight}) );        }
      }
      var isAccessoryOrSparePartFor;
      if( props.isAccessoryOrSparePartFor ){
        if( props.isAccessoryOrSparePartFor instanceof Array ){
          isAccessoryOrSparePartFor = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isAccessoryOrSparePartFor = isAccessoryOrSparePartFor.concat( props.isAccessoryOrSparePartFor.map( function(result, index){
              return ( React.createElement(Product, React.__spread({},  result, {key: index})) )
           }) );
         isAccessoryOrSparePartFor.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          isAccessoryOrSparePartFor = ( React.createElement(Product, {props:  props.isAccessoryOrSparePartFor}) );        }
      }
      var color;
      if( props.color ){
        if( props.color instanceof Array ){
          color = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          color = color.concat( props.color.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. color is a Text."}) )
           }) );
         color.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            color = ( React.createElement("div", {"data-advice": "Put your HTML here. color is a Text."}) );
        }
      }
      var purchaseDate;
      if( props.purchaseDate ){
        if( props.purchaseDate instanceof Array ){
          purchaseDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          purchaseDate = purchaseDate.concat( props.purchaseDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. purchaseDate is a Date."}) )
           }) );
         purchaseDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            purchaseDate = ( React.createElement("div", {"data-advice": "Put your HTML here. purchaseDate is a Date."}) );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          image = image.concat( props.image.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         image.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            image = ( React.createElement("div", {"data-advice": "Put your HTML here. image is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var gtin8;
      if( props.gtin8 ){
        if( props.gtin8 instanceof Array ){
          gtin8 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin8 = gtin8.concat( props.gtin8.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin8 is a Text."}) )
           }) );
         gtin8.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin8 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin8 is a Text."}) );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sameAs = sameAs.concat( props.sameAs.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sameAs is a URL."}) )
           }) );
         sameAs.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sameAs = ( React.createElement("div", {"data-advice": "Put your HTML here. sameAs is a URL."}) );
        }
      }
      var height;
      if( props.height ){
        if( props.height instanceof Array ){
          height = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          height = height.concat( props.height.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) )
           }) );
         height.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            height = ( React.createElement("div", {"data-advice": "Put your HTML here. height is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var releaseDate;
      if( props.releaseDate ){
        if( props.releaseDate instanceof Array ){
          releaseDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          releaseDate = releaseDate.concat( props.releaseDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. releaseDate is a Date."}) )
           }) );
         releaseDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            releaseDate = ( React.createElement("div", {"data-advice": "Put your HTML here. releaseDate is a Date."}) );
        }
      }
      var isRelatedTo;
      if( props.isRelatedTo ){
        if( props.isRelatedTo instanceof Array ){
          isRelatedTo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isRelatedTo = isRelatedTo.concat( props.isRelatedTo.map( function(result, index){
              return ( React.createElement(Product, React.__spread({},  result, {key: index})) )
           }) );
         isRelatedTo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          isRelatedTo = ( React.createElement(Product, {props:  props.isRelatedTo}) );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalType = additionalType.concat( props.additionalType.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. additionalType is a URL."}) )
           }) );
         additionalType.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            additionalType = ( React.createElement("div", {"data-advice": "Put your HTML here. additionalType is a URL."}) );
        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          logo = logo.concat( props.logo.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) )
           }) );
         logo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            logo = ( React.createElement("div", {"data-advice": "Put your HTML here. logo is a URL or" + ' ' +
"ImageObject."}) );
        }
      }
      var productID;
      if( props.productID ){
        if( props.productID instanceof Array ){
          productID = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          productID = productID.concat( props.productID.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. productID is a Text."}) )
           }) );
         productID.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            productID = ( React.createElement("div", {"data-advice": "Put your HTML here. productID is a Text."}) );
        }
      }
      var category;
      if( props.category ){
        if( props.category instanceof Array ){
          category = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          category = category.concat( props.category.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. category is a PhysicalActivityCategory or" + ' ' +
"Thing or" + ' ' +
"Text."}) )
           }) );
         category.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            category = ( React.createElement("div", {"data-advice": "Put your HTML here. category is a PhysicalActivityCategory or" + ' ' +
"Thing or" + ' ' +
"Text."}) );
        }
      }
      var isSimilarTo;
      if( props.isSimilarTo ){
        if( props.isSimilarTo instanceof Array ){
          isSimilarTo = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          isSimilarTo = isSimilarTo.concat( props.isSimilarTo.map( function(result, index){
              return ( React.createElement(Product, React.__spread({},  result, {key: index})) )
           }) );
         isSimilarTo.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          isSimilarTo = ( React.createElement(Product, {props:  props.isSimilarTo}) );        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          review = review.concat( props.review.map( function(result, index){
              return ( React.createElement(Review, React.__spread({},  result, {key: index})) )
           }) );
         review.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          review = ( React.createElement(Review, {props:  props.review}) );        }
      }
      var audience;
      if( props.audience ){
        if( props.audience instanceof Array ){
          audience = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          audience = audience.concat( props.audience.map( function(result, index){
              return ( React.createElement(Audience, React.__spread({},  result, {key: index})) )
           }) );
         audience.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          audience = ( React.createElement(Audience, {props:  props.audience}) );        }
      }
      var width;
      if( props.width ){
        if( props.width instanceof Array ){
          width = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          width = width.concat( props.width.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) )
           }) );
         width.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            width = ( React.createElement("div", {"data-advice": "Put your HTML here. width is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var additionalProperty;
      if( props.additionalProperty ){
        if( props.additionalProperty instanceof Array ){
          additionalProperty = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          additionalProperty = additionalProperty.concat( props.additionalProperty.map( function(result, index){
              return ( React.createElement(PropertyValue, React.__spread({},  result, {key: index})) )
           }) );
         additionalProperty.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          additionalProperty = ( React.createElement(PropertyValue, {props:  props.additionalProperty}) );        }
      }
      var offers;
      if( props.offers ){
        if( props.offers instanceof Array ){
          offers = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          offers = offers.concat( props.offers.map( function(result, index){
              return ( React.createElement(Offer, React.__spread({},  result, {key: index})) )
           }) );
         offers.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          offers = ( React.createElement(Offer, {props:  props.offers}) );        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mainEntityOfPage = mainEntityOfPage.concat( props.mainEntityOfPage.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) )
           }) );
         mainEntityOfPage.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mainEntityOfPage = ( React.createElement("div", {"data-advice": "Put your HTML here. mainEntityOfPage is a CreativeWork or" + ' ' +
"URL."}) );
        }
      }
      var productionDate;
      if( props.productionDate ){
        if( props.productionDate instanceof Array ){
          productionDate = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          productionDate = productionDate.concat( props.productionDate.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. productionDate is a Date."}) )
           }) );
         productionDate.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            productionDate = ( React.createElement("div", {"data-advice": "Put your HTML here. productionDate is a Date."}) );
        }
      }
      var sku;
      if( props.sku ){
        if( props.sku instanceof Array ){
          sku = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          sku = sku.concat( props.sku.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. sku is a Text."}) )
           }) );
         sku.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            sku = ( React.createElement("div", {"data-advice": "Put your HTML here. sku is a Text."}) );
        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          description = description.concat( props.description.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. description is a Text."}) )
           }) );
         description.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            description = ( React.createElement("div", {"data-advice": "Put your HTML here. description is a Text."}) );
        }
      }
      var mpn;
      if( props.mpn ){
        if( props.mpn instanceof Array ){
          mpn = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          mpn = mpn.concat( props.mpn.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. mpn is a Text."}) )
           }) );
         mpn.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            mpn = ( React.createElement("div", {"data-advice": "Put your HTML here. mpn is a Text."}) );
        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          brand = brand.concat( props.brand.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) )
           }) );
         brand.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            brand = ( React.createElement("div", {"data-advice": "Put your HTML here. brand is a Brand or" + ' ' +
"Organization."}) );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          award = award.concat( props.award.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. award is a Text."}) )
           }) );
         award.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            award = ( React.createElement("div", {"data-advice": "Put your HTML here. award is a Text."}) );
        }
      }
      var itemCondition;
      if( props.itemCondition ){
        if( props.itemCondition instanceof Array ){
          itemCondition = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          itemCondition = itemCondition.concat( props.itemCondition.map( function(result, index){
              return ( React.createElement(OfferItemCondition, React.__spread({},  result, {key: index})) )
           }) );
         itemCondition.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  props.itemCondition}) );        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          alternateName = alternateName.concat( props.alternateName.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. alternateName is a Text."}) )
           }) );
         alternateName.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            alternateName = ( React.createElement("div", {"data-advice": "Put your HTML here. alternateName is a Text."}) );
        }
      }
      var manufacturer;
      if( props.manufacturer ){
        if( props.manufacturer instanceof Array ){
          manufacturer = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          manufacturer = manufacturer.concat( props.manufacturer.map( function(result, index){
              return ( React.createElement(Organization, React.__spread({},  result, {key: index})) )
           }) );
         manufacturer.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          manufacturer = ( React.createElement(Organization, {props:  props.manufacturer}) );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          potentialAction = potentialAction.concat( props.potentialAction.map( function(result, index){
              return ( React.createElement(Action, React.__spread({},  result, {key: index})) )
           }) );
         potentialAction.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          potentialAction = ( React.createElement(Action, {props:  props.potentialAction}) );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          name = name.concat( props.name.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. name is a Text."}) )
           }) );
         name.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            name = ( React.createElement("div", {"data-advice": "Put your HTML here. name is a Text."}) );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          aggregateRating = aggregateRating.concat( props.aggregateRating.map( function(result, index){
              return ( React.createElement(AggregateRating, React.__spread({},  result, {key: index})) )
           }) );
         aggregateRating.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
          aggregateRating = ( React.createElement(AggregateRating, {props:  props.aggregateRating}) );        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          url = url.concat( props.url.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. url is a URL."}) )
           }) );
         url.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            url = ( React.createElement("div", {"data-advice": "Put your HTML here. url is a URL."}) );
        }
      }
      var gtin14;
      if( props.gtin14 ){
        if( props.gtin14 instanceof Array ){
          gtin14 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin14 = gtin14.concat( props.gtin14.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin14 is a Text."}) )
           }) );
         gtin14.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin14 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin14 is a Text."}) );
        }
      }
      var depth;
      if( props.depth ){
        if( props.depth instanceof Array ){
          depth = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          depth = depth.concat( props.depth.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. depth is a Distance or" + ' ' +
"QuantitativeValue."}) )
           }) );
         depth.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            depth = ( React.createElement("div", {"data-advice": "Put your HTML here. depth is a Distance or" + ' ' +
"QuantitativeValue."}) );
        }
      }
      var gtin13;
      if( props.gtin13 ){
        if( props.gtin13 instanceof Array ){
          gtin13 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin13 = gtin13.concat( props.gtin13.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin13 is a Text."}) )
           }) );
         gtin13.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin13 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin13 is a Text."}) );
        }
      }
      var gtin12;
      if( props.gtin12 ){
        if( props.gtin12 instanceof Array ){
          gtin12 = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          gtin12 = gtin12.concat( props.gtin12.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. gtin12 is a Text."}) )
           }) );
         gtin12.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
        } else {
            gtin12 = ( React.createElement("div", {"data-advice": "Put your HTML here. gtin12 is a Text."}) );
        }
      }
      var model;
      if( props.model ){
        if( props.model instanceof Array ){
          model = [ (React.createElement("div", {key: "header", "data-advice": "HTML for the *head* of the section"})) ]
          model = model.concat( props.model.map( function(result, index){
              return ( React.createElement("div", {key: index, "data-advice": "Put your HTML here. model is a ProductModel or" + ' ' +
"Text."}) )
           }) );
         model.push( ( React.createElement("div", {key: "footer", "data-advice": "HTML for the *footer* of the section"}) ) );
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
