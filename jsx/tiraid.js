var Tiraid = React.createClass({
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
        <div title="Tiraid" className="tiraid entity">
            <div>
                { this.props.identifier.type } - { this.props.identifier.value }
            </div>
            <div>
                <h5>
                    <img className="icon" src="http://context.reelyactive.com/images/context-identification.png" />
                    ID Details
                </h5>
                <p>{ this.props.identifier.flags }</p>
            </div>
            <div>
                <h5>
                    <img className="icon" src="http://context.reelyactive.com/images/context-time.png" />
                    Timestamp Details
                </h5>
                <p>{ this.props.timestamp }</p>
            </div>
            <div>
                <h5>
                    <img className="icon" src="http://context.reelyactive.com/images/context-location.png" />
                    Location Details
                </h5>
                <RadioDecodings data={ this.props.radioDecodings } />
            </div>
        </div>
        );
    }
});

