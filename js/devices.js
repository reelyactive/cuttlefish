var Devices = React.createClass({displayName: "Devices",
    getDefaultProps: function() {
        return {
            'data' : {}
        };
    },
    render: function() {
        var myData = this.props.data;
        var nodes = Object.keys(this.props.data).map(function(key) {
            return (React.createElement(Device, {data:  myData[key] }))
        });
        return (React.createElement("div", {className: "devices"},  nodes ))
    }
});

