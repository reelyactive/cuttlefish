var Device = React.createClass({displayName: "Device",
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
            React.createElement("div", {title: "Device", className: "device entity"}, 
                React.createElement("h1", null,  this.props.data.id), 
                React.createElement(Tiraid, {data:  this.props.data.tiraid}), 
                React.createElement("p", null, "url : ", React.createElement(MetaData, {url:  this.props.data.url})), 
                React.createElement("p", null, "href : ", React.createElement("a", {target: "_blank", className: "btn", href:  this.props.data.href}, "API"))
            )
        );
    }
});

