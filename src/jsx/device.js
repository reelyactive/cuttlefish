// Created manually.
// A device is an object that has an identifier, and radioDecodings
var Device = React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var identifier;
      if( props.identifier ){
        if( props.identifier instanceof Array ){
            identifier = [ (<div key='header'>Identifier</div>) ]
          identifier = identifier.concat( props.identifier.map( function(result, index){
              radioDecodings = result.radioDecodings.map( function(decoding, decIndex){
                return (<li>
                  <a href={decoding.href} target='_blank'>{decoding.rssi}</a>
                  <p>identifier: <pre>{decoding.identifier}</pre></p>
                </li>);
              });
              return ( <div key={index}>
                <h1>{result.value}(type: {result.type})</h1>
                <div>
                  <h2>advHeader</h2>
                  <pre>{result.advHeader}</pre>
                </div>
                <div>
                  <h2>advData</h2>
                  <pre>{result.advData}</pre>
                </div>
                <h1>Timestamp: {result.timestamp}</h1>
                <h1>Radio Decodings</h1>
                <ul>
                  {radioDecodings}
                </ul>
              </div> )
           }) );
        } else {
          var radioDecodings = result.radioDecodings.map( function(decoding, decIndex){
            return (<li>
              <a href={decoding.href} target='_blank'>{decoding.rssi}</a>
              <p>identifier: <pre>{decoding.identifier}</pre></p>
            </li>);
           });
          var identifier = ( <div key={index}>
             <h1>{result.value}(type: {result.type})</h1>
             <div>
               <h2>advHeader</h2>
               <pre>{result.advHeader}</pre>
             </div>
             <div>
               <h2>advData</h2>
               <pre>{result.advData}</pre>
             </div>
             <h1>Timestamp: {result.timestamp}</h1>
             <h1>Radio Decodings</h1>
             <ul>
               {radioDecodings}
             </ul>
           </div> )
        }
      }
      return (<div title='Device' className='Device entity'>
        { identifier }
     </div>);
    }
  });
