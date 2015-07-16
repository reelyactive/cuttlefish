  var RadioDecodings = React.createClass({
      getDefaultProps: function() {
          return [];
      },
      render: function() {
          if( this.props.data.length > 1 ){
              var nodes = this.props.data.map(
                  function( radioDecoding ){
                      return (<RadioDecoding data={ radioDecoding } />);
                  }
              );
          } else {
              var nodes = (<RadioDecoding data={ this.props.data[0] } />);
          }
          return nodes
      }
  });

