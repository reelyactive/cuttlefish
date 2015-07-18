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
              alumni = (<p>Alumni of { this.props.alumniOf }</p>);
          }
          var image;
          if ( this.props.image ){
             image = ( <img className="icon" src={this.props.image} /> );
          }
          var productsNodes;
          if( this.props.owns ){
            productsNodes = [(<p>Owns :</p>)]
            productsNodes = productsNodes.concat( this.props.owns.map( function(product) {
              return (<p><Product data={ product } /></p>);
            }) );
          }
          return (<div title="Person" className="person entity">
              { image }
              <h1>
                  { this.props.name }
              </h1>
              <div>
                  <p>Contact at <a href="{ this.props.email }">{ this.props.email }</a></p>
                  { alumni }
                  { productsNodes }  
              </div>
          </div>);
      }
  });
});


