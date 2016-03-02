import React from 'react';
import ReactDOM from 'react-dom';

window.cuttlefish = {
    // Get data as argument as an object
    // This file should know automatically which react component to send back
    visualize: function (jsonld_data, nodeID) {
        var component = eval(jsonld_data['@type']);
        ReactDOM.render(
            React.createElement(component, jsonld_data),
            document.getElementById(nodeID)
        );
    }
};
