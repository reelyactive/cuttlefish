
import React, {
  Component
} from 'react';

export default class Organization extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    var name = (<p className='Organization_Name'>Name: {this.props.name}</p>);

    return (
      <div class='Organization'>
        {name}
      </div>
    );
  }
};


