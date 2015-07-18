define(['../bower_components/react/react', './product'], function(React, Product){
  return React.createClass({
      getDefaultProps: function() {
          return {
              "@id": "http://person",
              "@type": "Person",
              "name": "John Doe"
          }
      },
      render: function() {
          var alumni;
          if ( this.props.alumniOf ){
              alumni = (React.createElement("p", null, "Alumni of ",  this.props.alumniOf));
          }
          var image;
          if ( this.props.image ){
             image = ( React.createElement("img", {className: "icon", src: this.props.image}) );
          }
          var productsNodes;
          if( this.props.owns ){
            productsNodes = [(React.createElement("p", null, "Owns :"))]
            productsNodes = productsNodes.concat( this.props.owns.map( function(product) {
              return (React.createElement("p", null, React.createElement(Product, {data:  product })));
            }) );
          }
          return (React.createElement("div", {title: "Person", className: "person entity"}, 
               image, 
              React.createElement("h1", null, 
                   this.props.name
              ), 
              React.createElement("div", null, 
                  React.createElement("p", null, "Contact at ", React.createElement("a", {href: "{ this.props.email }"},  this.props.email)), 
                   alumni, 
                   productsNodes 
              )
          ));
      }
  });
});


