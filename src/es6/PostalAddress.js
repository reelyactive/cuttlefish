
import React, {
  Component
} from 'react';

export default class PostalAddress extends Component {
  render() {
    var streetAddress;
    if (this.props.streetAddress) {
      streetAddress = (<p className='PostalAddress-StreetAddress' >StreetAddress: {this.props.streetAddress}</p>);
    }

    var addressLocality;
    if (this.props.addressLocality) {
      addressLocality = (<p className='PostalAddress-AddressLocality' >AddressLocality: {this.props.addressLocality}</p>);
    }

    var addressRegion;
    if (this.props.addressRegion) {
      addressRegion = (<p className='PostalAddress-AddressRegion' >AddressRegion: {this.props.addressRegion}</p>);
    }

    var postalCode;
    if (this.props.postalCode) {
      postalCode = (<p className='PostalAddress-PostalCode' >PostalCode: {this.props.postalCode}</p>);
    }

    var addressCountry;
    if (this.props.addressCountry) {
      addressCountry = (<p className='PostalAddress-AddressCountry' >AddressCountry: {this.props.addressCountry}</p>);
    }

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

PostalAddress.propTypes = {
    streetAddress: React.PropTypes.string,
    addressLocality: React.PropTypes.string,
    addressRegion: React.PropTypes.string,
    postalCode: React.PropTypes.string,
    addressCountry: React.PropTypes.string,
};


