  var RadioDecodings = React.createClass({displayName: "RadioDecodings",
      getDefaultProps: function() {
          return [];
      },
      render: function() {
          if( this.props.data.length > 1 ){
              var nodes = this.props.data.map(
                  function( radioDecoding ){
                      return (React.createElement(RadioDecoding, {data:  radioDecoding }));
                  }
              );
          } else {
              var nodes = (React.createElement(RadioDecoding, {data:  this.props.data[0] }));
          }
          return nodes
      }
  });

