
import React, {
  Component
} from 'react';

export default class Product extends Component {
  render() {
    var name;
    if (this.props.name) {
      name = (<p className='Product-Name' >Name: {this.props.name}</p>);
    }

    var manufacturer;
    if (this.props.manufacturer) {
      manufacturer = (<Organization {...this.props.manufacturer} />);
    }

    var model;
    if (this.props.model) {
      model = (<p className='Product-Model' >Model: {this.props.model}</p>);
    }

    var url;
    if (this.props.url) {
      url = (<a className='Product-Url' href={this.props.url} target='_blank'>Url</a>);
    }

    var image;
    if (this.props.image) {
      image = (<img className='Product-Image' src={this.props.image} alt='Image' />);
    }

    return (
      <div class='Product'>
        {name}
        {manufacturer}
        {model}
        {url}
        {image}
      </div>
    );
  }
};

Product.propTypes = {
    name: React.PropTypes.string,
    model: React.PropTypes.string,
    url: React.PropTypes.string,
    image: React.PropTypes.string,
};


