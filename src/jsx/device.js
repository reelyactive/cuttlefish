// Created manually.
// A device is an object that has an identifier, and radioDecodings
var Device = React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var manufacturer;
      if( props.manufacturer ){
        manufacterer = ( <div>Manufacturer: {props.manufacturer} </div> );
      }
      var model;
      if( props.model ){
        model = ( <div>Model: {props.model}</div> );
      }
      var image;
      if( props.image ){
        image = ( <img className='image' src={props.image}/> );
      }
      return (<div title='Device' className='Device entity'>
        { image }
        { manufacterer }
        { model }
        <div className='clear'></div>
      </div>);
    }
  });
