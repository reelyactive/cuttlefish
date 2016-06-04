import Organization from 'Organization';

import React, {
  Component
} from 'react';

export default class Product extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    model: React.PropTypes.string,
    url: React.PropTypes.string,
    image: React.PropTypes.string,
  };

  render() {
    var name = (<p className='Product_Name'>Name: {this.props.name}</p>);

    var manufacturer = (<Organization {...this.props.manufacturer} />);

    var model = (<p className='Product_Model'>Model: {this.props.model}</p>);

    var url = (<a className='Product_Url' href='{this.props.url}' target='_blank'>Url</a>);

    var image = (<img className='Product_Image' src='{this.props.image}' alt='Image' />);

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


