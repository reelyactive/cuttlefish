
import React, {
  Component
} from 'react';

export default class Person extends Component {
  static propTypes = {
    givenName: React.PropTypes.string,
    familyName: React.PropTypes.string,
    gender: React.PropTypes.string,
    nationality: React.PropTypes.string,
    worksFor: React.PropTypes.string,
    jobTitle: React.PropTypes.string,
    url: React.PropTypes.string,
    sameAs: React.PropTypes.arrayOf(React.PropTypes.url)),
    image: React.PropTypes.string,
  };

  render() {
    var givenName = (<p className='Person_GivenName'>GivenName: {this.props.givenName}</p>);

    var familyName = (<p className='Person_FamilyName'>FamilyName: {this.props.familyName}</p>);

    var gender = (<p className='Person_Gender'>Gender: {this.props.gender}</p>);

    var nationality = (<p className='Person_Nationality'>Nationality: {this.props.nationality}</p>);

    var worksFor = (<p className='Person_WorksFor'>WorksFor: {this.props.worksFor}</p>);

    var jobTitle = (<p className='Person_JobTitle'>JobTitle: {this.props.jobTitle}</p>);

    var url = (<a className='Person_Url' href='{this.props.url}' target='_blank'>Url</a>);

    var sameAs = (this.props.sameAs.map(function(item) {
      return (<a className='Person_SameAs' href='{item}' target='_blank'>SameAs</a>);
    });

    var image = (<img className='Person_Image' src='{this.props.image}' alt='Image' />);

    return (
      <div class='Person'>
        {givenName}
        {familyName}
        {gender}
        {nationality}
        {worksFor}
        {jobTitle}
        {url}
        {sameAs}
        {image}
      </div>
    );
  }
};


