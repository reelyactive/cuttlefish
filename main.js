define(['./bower_components/react/react', './tools', './js/person',
'./js/product'], function(React, tools, person, product){
  // Get data as argument as an object
  // This file should know automatically which react component to send back
  return function(myJson){
    if( myJson['@type'] == 'Person' )
      return person;
    else if( myJson['@type'] == 'Product' )
      return product;
  }
});

