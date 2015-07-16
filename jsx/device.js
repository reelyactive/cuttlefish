var Device = React.createClass({
    getDefaultProps: function(){
        return {
            "data" : {
            "id" : "xxxxxxxxxxxxxxxx",
            "tiraid" : {
                "identifier": {
                    "type":"TYPE",
                    "value":"xxxxxxxxxxxxxxxx",
                    "flags":{
                        "transmissionCount": 99
                    }
                },
                "timestamp":"20yy-mm-ddThh:ii:ss.xxxx",
                "radioDecodings":
                    [{
                        "rssi": 99,
                        "identifier":{
                            "type":"TYPE",
                            "value":"xxxxxxxxxxxxxxxx"
                        }
                    }]
            },
            "url":"http://reelyactive.com/metadata/xxxxxxxxxxx.json",
            "href":"http://www.hyperlocalcontext.com/id/xxxxxxxxxxxxxxxx",
            }
        }
    },
    render: function() {
        return (
            <div title="Device" className="device entity">
                <h1>{ this.props.data.id }</h1>
                <Tiraid data={ this.props.data.tiraid } />
                <p>url : <MetaData url={ this.props.data.url } /></p>
                <p>href : <a target="_blank" className="btn" href={ this.props.data.href }>API</a></p>
            </div>
        );
    }
});

