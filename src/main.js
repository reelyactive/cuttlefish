window.cuttlefish = {
    // Get data as argument as an object
    // This file should know automatically which react component to send back
    getComponent: function (myJson) {
        if( myJson['@type'] == 'Person' )
            return Person;
        if( myJson['@type'] == 'Device' )
            return Device;
        else if( myJson['@type'] == 'Product' )
            return Product;
    }
};
