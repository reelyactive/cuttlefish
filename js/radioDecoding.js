var RadioDecoding = React.createClass({displayName: "RadioDecoding",
    getDefaultProps: function() {
        return {};
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("p", null, "RSSI: ",  this.props.data.rssi), 
                React.createElement("p", null, "ID: ",  this.props.data.identifier.type, " - ",  this.props.data.identifier.value)
            )
        )
    }
});

