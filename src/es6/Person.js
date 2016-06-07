
import React, {
  Component
} from 'react';

export default class Person extends Component {
  render() {
    var givenName;
    if (this.props.givenName) {
      givenName = (<p className='Person-GivenName' >GivenName: {this.props.givenName}</p>);
    }

    var familyName;
    if (this.props.familyName) {
      familyName = (<p className='Person-FamilyName' >FamilyName: {this.props.familyName}</p>);
    }

    var gender;
    if (this.props.gender) {
      gender = (<p className='Person-Gender' >Gender: {this.props.gender}</p>);
    }

    var nationality;
    if (this.props.nationality) {
      nationality = (<p className='Person-Nationality' >Nationality: {this.props.nationality}</p>);
    }

    var worksFor;
    if (this.props.worksFor) {
      worksFor = (<p className='Person-WorksFor' >WorksFor: {this.props.worksFor}</p>);
    }

    var jobTitle;
    if (this.props.jobTitle) {
      jobTitle = (<p className='Person-JobTitle' >JobTitle: {this.props.jobTitle}</p>);
    }

    var url;
    if (this.props.url) {
      url = (<a className='Person-Url' href={this.props.url} target='_blank'>Url</a>);
    }

    var sameAs;
    if (this.props.sameAs) {
      sameAs = (this.props.sameAs
      ? this.props.sameAs.map(function(item, index) {
        return (<a className='Person-SameAs' href={item} key={index} target='_blank'>SameAs</a>);
      })
      : null
    );
    }

    var image;
    if (this.props.image) {
      image = (<img className='Person-Image' src={this.props.image} alt='Image' />);
    }

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

Person.propTypes = {
    givenName: React.PropTypes.string,
    familyName: React.PropTypes.string,
    gender: React.PropTypes.string,
    nationality: React.PropTypes.string,
    worksFor: React.PropTypes.string,
    jobTitle: React.PropTypes.string,
    url: React.PropTypes.string,
    sameAs: React.PropTypes.arrayOf(React.PropTypes.string),
    image: React.PropTypes.string,
};


