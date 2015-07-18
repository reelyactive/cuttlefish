define(['../bower_components/react/react', './product'], function(React, Product){
  return React.createClass({
      getDefaultProps: function() {
          return {
              "@id": "http://person",
              "@type": "Person",
              "name": "John Doe",
              "owns": [
                  {
                    "@id": "productdb:iphone5.html",
                    "@type": "schema:Product",
                    "model": "iphone5",
                    "schema:productID": "mac:01:23:45:67:89:ab"
                  },
                  {
                    "@id": "productdb:DasKapital.html",
                    "@type": "schema:Product",
                    "model": "Das Kapital v1",
                    "schema:productID": "mac:01:23:45:67:89:ab"
                  }
              ],
              "email": "john@reelyactive.com",
              "image": "http://something.com/JohnDoe.jpg",
              "alumniOf": "XXXXXXXXXXX"
          }
      },
      render: function() {
          var alumni;
          if ( this.props.alumniOf ){
              alumni = (<p>Alumni of { this.props.alumniOf }</p>);
          }
          var productsNodes = this.props.owns.map( function(product) {
              return (<p><Product data={ product } /></p>);
          });
          return (<div title="Person" className="person entity">
              <h1>
                  { this.props.name }
              </h1>
              <div>
                  <img className="icon" src={this.props.image} />
                  <p>Contact at { this.props.email }</p>
                  { alumni }
                  <p>Owns:</p>
                  { productsNodes }  
              </div>
          </div>);
      }
  });
});


