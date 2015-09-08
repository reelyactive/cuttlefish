// Created manually.
// A device is an object that has an identifier, and radioDecodings
var Device = React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var manufacterer;
      if( props.manufacterer ){
        manufacterer = ( <p>Manufacterer: {props.manufacterer} </p> );
      }
      var model;
      if( props.model ){
        model = ( <p>Model: {props.model}</p> );
      }
      var portraitImageUrl;
      if( props.portraitImageUrl ){
        portraitImageUrl = ( <img class='image' src='{props.model}'/> );
      }
      return (<div title='Device' className='Device entity'>
        { portraitImageUrl }
        { manufacterer }
        { model }
     </div>);
    }
  });
