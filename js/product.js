define(['../bower_components/react/react'], function(React){
  return React.createClass({
    getDefaultProps: function() {
        return {
            "data" : {
                "@id": "http://product",
                "@type": "Product",
                "model": "RA-T411",
                "manufacturer": "http://reelyactive.com/???" 
            }
        }
    },
    render: function() {
        var manufacturer;
        if( this.props.data.manufacturer )
            manufacturer  = (React.createElement("p", null, "Manufacterer : ",  this.props.data.manufacturer));
        return (React.createElement("div", {title: "Product", className: "product entity"}, 
            React.createElement("h1", null, "Product : ",  this.props.data.model), 
             manufacturer 
        ));
    }
  });
});

