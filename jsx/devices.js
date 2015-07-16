var Devices = React.createClass({
    getDefaultProps: function() {
        return {
            'data' : {}
        };
    },
    render: function() {
        var myData = this.props.data;
        var nodes = Object.keys(this.props.data).map(function(key) {
            return (<Device data={ myData[key] } />)
        });
        return (<div className="devices">{ nodes }</div>)
    }
});

