// Created manually.
// A device is an object that has an identifier, and radioDecodings
var Device = React.createClass({displayName: "Device",
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var manufacturer;
      if( props.manufacturer ){
        manufacterer = ( React.createElement("div", null, "Manufacturer: ", props.manufacturer, " ") );
      }
      var model;
      if( props.model ){
        model = ( React.createElement("div", null, "Model: ", props.model) );
      }
      var image;
      if( props.image ){
        image = ( React.createElement("img", {className: "image", src: props.image}) );
      }
      return (React.createElement("div", {title: "Device", className: "Device entity"}, 
         image, 
         manufacterer, 
         model, 
        React.createElement("div", {className: "clear"})
      ));
    }
  });
