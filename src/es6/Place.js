
import React, {
  Component
} from 'react';

export default class Place extends Component {
  render() {
    var name;
    if (this.props.name) {
      name = (<p className='Place-Name' >Name: {this.props.name}</p>);
    }

    var address;
    if (this.props.address) {
      address = (<PostalAddress {...this.props.address} />);
    }

    var url;
    if (this.props.url) {
      url = (<a className='Place-Url' href={this.props.url} target='_blank'>Url</a>);
    }

    var image;
    if (this.props.image) {
      image = (<img className='Place-Image' src={this.props.image} alt='Image' />);
    }

    var logo;
    if (this.props.logo) {
      logo = (<img className='Place-Logo' src={this.props.logo} alt='Logo' />);
    }

    var sameAs;
    if (this.props.sameAs) {
      sameAs = (this.props.sameAs
      ? this.props.sameAs.map(function(item, index) {
        return (<a className='Place-SameAs' href={item} key={index} target='_blank'>SameAs</a>);
      })
      : null
    );
    }

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

Place.propTypes = {
    name: React.PropTypes.string,
    url: React.PropTypes.string,
    image: React.PropTypes.string,
    logo: React.PropTypes.string,
    sameAs: React.PropTypes.arrayOf(React.PropTypes.string),
};


