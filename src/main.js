window.cuttlefish = {
    // Get data as argument as an object
    // This file should know automatically which react component to send back
    visualize: function (jsonld_data, nodeID) {
        var component = eval(jsonld_data['@type']);
        React.render(
            React.createElement(component, jsonld_data),
            document.getElementById(nodeID)
        );
    }
};
