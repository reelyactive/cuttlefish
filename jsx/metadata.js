var MetaData = React.createClass({
    getDefaultProps: function() {
        return {
            'url' : "http://www.hyperlocalcontext.com/id/xxxxxxxxxxxxxxxx"
        }
    },
    componentDidMount: function(){
        var theUrl = this.props.url;
        var theComponent = this;
        $('.meta-data').on('click', function(e){
            $.ajax({
                url: theUrl,
                dataType: 'json',
                success: function(data) {
                    theComponent.setState({data: data});
                    React.render(
                      <Person data={ theComponent.state.data.person } />,
                      document.getElementById('person')
                    );
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        });
    },
    render: function() {
        return (<div>
            <button className="btn meta-data" data-url={ this.props.url }>Meta Data</button>
            <div id="person"></div>
        </div>)
    }
});

