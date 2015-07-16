var Tiraid = React.createClass({displayName: "Tiraid",
    getDefaultProps: function() {
        return { 
            "identifier": {
                "type": "EUI-64",
                "value": "001bc50940100069",
                "flags": {
                    "transmissionCount": 0
                }
            },
            "timestamp": "2015-03-02T20:10:41.338Z",
            "radioDecodings": [
                {
                    "rssi": 111,
                    "identifier": {
                        "type": "EUI-64",
                        "value": "001bc5094080001a"
                    }
                }
            ]
        };
    },
    render: function() {
        return (
        React.createElement("div", {title: "Tiraid", className: "tiraid entity"}, 
            React.createElement("div", null, 
                 this.props.identifier.type, " - ",  this.props.identifier.value
            ), 
            React.createElement("div", null, 
                React.createElement("h5", null, 
                    React.createElement("img", {className: "icon", src: "http://context.reelyactive.com/images/context-identification.png"}), 
                    "ID Details"
                ), 
                React.createElement("p", null,  this.props.identifier.flags)
            ), 
            React.createElement("div", null, 
                React.createElement("h5", null, 
                    React.createElement("img", {className: "icon", src: "http://context.reelyactive.com/images/context-time.png"}), 
                    "Timestamp Details"
                ), 
                React.createElement("p", null,  this.props.timestamp)
            ), 
            React.createElement("div", null, 
                React.createElement("h5", null, 
                    React.createElement("img", {className: "icon", src: "http://context.reelyactive.com/images/context-location.png"}), 
                    "Location Details"
                ), 
                React.createElement(RadioDecodings, {data:  this.props.radioDecodings})
            )
        )
        );
    }
});

