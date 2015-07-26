window.cormorant = {
  // Get data as argument as an object
  // This file should know automatically which react component to send back
  'getComponent': function(myJson){
    if( myJson['@type'] == 'Person' )
      return Person;
    else if( myJson['@type'] == 'Product' )
      return Product;
  }
};
