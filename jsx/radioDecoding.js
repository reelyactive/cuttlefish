var RadioDecoding = React.createClass({
    getDefaultProps: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <p>RSSI: { this.props.data.rssi }</p>
                <p>ID: { this.props.data.identifier.type } - { this.props.data.identifier.value }</p>
            </div>
        )
    }
});

