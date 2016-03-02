/* ProgramMembership - Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class ProgramMembership extends Component {
    render() {
        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction__container'>
                       <div className='potentialAction__header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                            return (<Action  {...this.props.potentialAction} />);
                       })}
                       <div className='potentialAction__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                potentialAction = (<Action  {...this.props.potentialAction} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ProgramMembership-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ProgramMembership-description">description: {this.props.description}</p></div>);
            }
        }

        let hostingOrganization;
        if (this.props.hostingOrganization) {
            if (this.props.hostingOrganization instanceof Array) {
                hostingOrganization = (
                   <div className='hostingOrganization__container'>
                       <div className='hostingOrganization__header' data-advice='HTML for the *head* of the section'>hostingOrganizations</div>
                       {this.props.hostingOrganization.map((item, index) => {
                            return (<Organization  {...this.props.hostingOrganization} />);
                       })}
                       <div className='hostingOrganization__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                hostingOrganization = (<Organization  {...this.props.hostingOrganization} />);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image__container'>
                       <div className='image__header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ProgramMembership-image" src={this.props.image} /></div>);
                           }
                       })}
                       <div className='image__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'ImageObject') {
                   image = (<ImageObject key={index} {...this.props.image} />);
               }
               else if (this.props['@type'] === 'URL') {
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ProgramMembership-image" src={this.props.image} /></div>);
               }
            }
        }

        let member;
        if (this.props.member) {
            if (this.props.member instanceof Array) {
                member = (
                   <div className='member__container'>
                       <div className='member__header' data-advice='HTML for the *head* of the section'>members</div>
                       {this.props.member.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.member} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.member} />);
                           }
                       })}
                       <div className='member__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   member = (<Person key={index} {...this.props.member} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   member = (<Organization key={index} {...this.props.member} />);
               }
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ProgramMembership-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ProgramMembership-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let membershipNumber;
        if (this.props.membershipNumber) {
            if (this.props.membershipNumber instanceof Array) {
                membershipNumber = (
                   <div className='membershipNumber__container'>
                       <div className='membershipNumber__header' data-advice='HTML for the *head* of the section'>membershipNumbers</div>
                       {this.props.membershipNumber.map((item, index) => {
                            return (<div className='membershipNumber' data-advice='Put your HTML here. membershipNumber is a Text.'><p className="ProgramMembership-membershipNumber">membershipNumber: {this.props.membershipNumber}</p></div>);
                       })}
                       <div className='membershipNumber__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                membershipNumber = (<div className='membershipNumber' data-advice='Put your HTML here. membershipNumber is a Text.'><p className="ProgramMembership-membershipNumber">membershipNumber: {this.props.membershipNumber}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ProgramMembership-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ProgramMembership-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let programName;
        if (this.props.programName) {
            if (this.props.programName instanceof Array) {
                programName = (
                   <div className='programName__container'>
                       <div className='programName__header' data-advice='HTML for the *head* of the section'>programNames</div>
                       {this.props.programName.map((item, index) => {
                            return (<div className='programName' data-advice='Put your HTML here. programName is a Text.'><p className="ProgramMembership-programName">programName: {this.props.programName}</p></div>);
                       })}
                       <div className='programName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                programName = (<div className='programName' data-advice='Put your HTML here. programName is a Text.'><p className="ProgramMembership-programName">programName: {this.props.programName}</p></div>);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ProgramMembership-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
               else if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ProgramMembership-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ProgramMembership-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ProgramMembership-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ProgramMembership-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ProgramMembership-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ProgramMembership-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ProgramMembership-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='ProgramMembership'>
                {potentialAction}
                {description}
                {hostingOrganization}
                {image}
                {member}
                {sameAs}
                {membershipNumber}
                {url}
                {programName}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {name}
            </div>
        );
    }
};

ProgramMembership.defaultProps = {
};

ProgramMembership.propTypes = {
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   hostingOrganization: React.PropTypes.object,
   image: React.PropTypes.object,
   member: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   membershipNumber: React.PropTypes.object,
   url: React.PropTypes.object,
   programName: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   name: React.PropTypes.object,
};

