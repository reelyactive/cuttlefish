var Product = React.createClass({
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
            manufacturer  = (<p>Manufacterer : { this.props.data.manufacturer }</p>);
        return (<div title="Product" className="product entity">
            <h1>Product : { this.props.data.model }</h1>
            { manufacturer }
        </div>);
    }
});

