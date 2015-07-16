var Person = React.createClass({displayName: "Person",
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
            alumni = (React.createElement("p", null, "Alumni of ",  this.props.alumniOf));
        }
        var productsNodes = this.props.owns.map( function(product) {
            return (React.createElement("p", null, React.createElement(Product, {data:  product })));
        });
        return (React.createElement("div", {title: "Person", className: "person entity"}, 
            React.createElement("h1", null, 
                 this.props.data.name
            ), 
            React.createElement("div", null, 
                React.createElement("img", {className: "icon", src: this.props.image}), 
                React.createElement("p", null, "Contact at ",  this.props.email), 
                 alumni, 
                React.createElement("p", null, "Owns:"), 
                 productsNodes 
            )
        ));
    }
});

