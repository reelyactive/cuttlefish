import PostalAddress from 'PostalAddress';

import React, {
  Component
} from 'react';

export default class Place extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    url: React.PropTypes.string,
    image: React.PropTypes.string,
    logo: React.PropTypes.string,
    sameAs: React.PropTypes.arrayOf(React.PropTypes.url)),
  };

  render() {
    var name = (<p className='Place_Name'>Name: {this.props.name}</p>);

    var address = (<PostalAddress {...this.props.address} />);

    var url = (<a className='Place_Url' href='{this.props.url}' target='_blank'>Url</a>);

    var image = (<img className='Place_Image' src='{this.props.image}' alt='Image' />);

    var logo = (<img className='Place_Logo' src='{this.props.logo}' alt='Logo' />);

    var sameAs = (this.props.sameAs.map(function(item) {
      return (<a className='Place_SameAs' href='{item}' target='_blank'>SameAs</a>);
    });

    return (
      <div class='Place'>
        {name}
        {address}
        {url}
        {image}
        {logo}
        {sameAs}
      </div>
    );
  }
};


