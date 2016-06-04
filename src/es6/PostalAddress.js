
import React, {
  Component
} from 'react';

export default class PostalAddress extends Component {
  static propTypes = {
    streetAddress: React.PropTypes.string,
    addressLocality: React.PropTypes.string,
    addressRegion: React.PropTypes.string,
    postalCode: React.PropTypes.string,
    addressCountry: React.PropTypes.string,
  };

  render() {
    var streetAddress = (<p className='PostalAddress_StreetAddress'>StreetAddress: {this.props.streetAddress}</p>);

    var addressLocality = (<p className='PostalAddress_AddressLocality'>AddressLocality: {this.props.addressLocality}</p>);

    var addressRegion = (<p className='PostalAddress_AddressRegion'>AddressRegion: {this.props.addressRegion}</p>);

    var postalCode = (<p className='PostalAddress_PostalCode'>PostalCode: {this.props.postalCode}</p>);

    var addressCountry = (<p className='PostalAddress_AddressCountry'>AddressCountry: {this.props.addressCountry}</p>);

    return (
      <div class='PostalAddress'>
        {streetAddress}
        {addressLocality}
        {addressRegion}
        {postalCode}
        {addressCountry}
      </div>
    );
  }
};


