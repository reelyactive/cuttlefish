
import React, {
  Component
} from 'react';

export default class Organization extends Component {
  render() {
    var name;
    if (this.props.name) {
      name = (<p className='Organization-Name' >Name: {this.props.name}</p>);
    }

    return (
      <div class='Organization'>
        {name}
      </div>
    );
  }
};

Organization.propTypes = {
    name: React.PropTypes.string,
};


