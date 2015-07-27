// Created manually.
// A device is an object that has an identifier, and radioDecodings
var Device = React.createClass({displayName: "Device",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var identifier;
      if( props.identifier ){
        if( props.identifier instanceof Array ){
            identifier = [ (React.createElement("div", {key: "header"}, "Identifier")) ]
          identifier = identifier.concat( props.identifier.map( function(result, index){
              radioDecodings = result.radioDecodings.map( function(decoding, decIndex){
                return (React.createElement("li", null, 
                  React.createElement("a", {href: decoding.href, target: "_blank"}, decoding.rssi), 
                  React.createElement("p", null, "identifier: ", React.createElement("pre", null, decoding.identifier))
                ));
              });
              return ( React.createElement("div", {key: index}, 
                React.createElement("h1", null, result.value, "(type: ", result.type, ")"), 
                React.createElement("div", null, 
                  React.createElement("h2", null, "advHeader"), 
                  React.createElement("pre", null, result.advHeader)
                ), 
                React.createElement("div", null, 
                  React.createElement("h2", null, "advData"), 
                  React.createElement("pre", null, result.advData)
                ), 
                React.createElement("h1", null, "Timestamp: ", result.timestamp), 
                React.createElement("h1", null, "Radio Decodings"), 
                React.createElement("ul", null, 
                  radioDecodings
                )
              ) )
           }) );
        } else {
          var radioDecodings = result.radioDecodings.map( function(decoding, decIndex){
            return (React.createElement("li", null, 
              React.createElement("a", {href: decoding.href, target: "_blank"}, decoding.rssi), 
              React.createElement("p", null, "identifier: ", React.createElement("pre", null, decoding.identifier))
            ));
           });
          var identifier = ( React.createElement("div", {key: index}, 
             React.createElement("h1", null, result.value, "(type: ", result.type, ")"), 
             React.createElement("div", null, 
               React.createElement("h2", null, "advHeader"), 
               React.createElement("pre", null, result.advHeader)
             ), 
             React.createElement("div", null, 
               React.createElement("h2", null, "advData"), 
               React.createElement("pre", null, result.advData)
             ), 
             React.createElement("h1", null, "Timestamp: ", result.timestamp), 
             React.createElement("h1", null, "Radio Decodings"), 
             React.createElement("ul", null, 
               radioDecodings
             )
           ) )
        }
      }
      return (React.createElement("div", {title: "Device", className: "Device entity"}, 
         identifier 
     ));
    }
  });
