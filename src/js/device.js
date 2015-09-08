// Created manually.
// A device is an object that has an identifier, and radioDecodings
var Device = React.createClass({displayName: "Device",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var manufacterer;
      if( props.manufacterer ){
        manufacterer = ( React.createElement("p", null, "Manufacterer: ", props.manufacterer, " ") );
      }
      var model;
      if( props.model ){
        model = ( React.createElement("p", null, "Model: ", props.model) );
      }
      var portraitImageUrl;
      if( props.portraitImageUrl ){
        portraitImageUrl = ( React.createElement("img", {class: "image", src: "{props.model}"}) );
      }
      return (React.createElement("div", {title: "Device", className: "Device entity"}, 
         portraitImageUrl, 
         manufacterer, 
         model 
     ));
    }
  });
