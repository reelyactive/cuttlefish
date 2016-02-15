/* ProgramMembership - Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.. Generated automatically by the reactGenerator. */
import Action from './action.js';
import Organization from './organization.js';
import CreativeWork from './creativework.js';
import ImageObject from './imageobject.js';
import Person from './person.js';


import React, {
  Component
} from 'react';

export default class ProgramMembership extends Component {
    render() {
        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction-container'>
                       <div className='potentialAction-header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                           return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="ProgramMembership-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='hostingOrganization-container'>
                       <div className='hostingOrganization-header' data-advice='HTML for the *head* of the section'>hostingOrganizations</div>
                       {this.props.hostingOrganization.map((item, index) => {
                           return (<Organization key={index} {...this.props.hostingOrganization} />);
                       })};
                       <div className='hostingOrganization-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ProgramMembership-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="ProgramMembership-image" src={this.props.image} /></div>);
            }
        }

        let member;
        if (this.props.member) {
            if (this.props.member instanceof Array) {
                member = (
                   <div className='member-container'>
                       <div className='member-header' data-advice='HTML for the *head* of the section'>members</div>
                       {this.props.member.map((item, index) => {
                           return (<div className='member' data-advice='Put your HTML here. member is a Person or Organization.'><div className="ProgramMembership-member">member: {this.props.member}</div></div>);
                       })};
                       <div className='member-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                member = (<div className='member' data-advice='Put your HTML here. member is a Person or Organization.'><div className="ProgramMembership-member">member: {this.props.member}</div></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="ProgramMembership-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='membershipNumber-container'>
                       <div className='membershipNumber-header' data-advice='HTML for the *head* of the section'>membershipNumbers</div>
                       {this.props.membershipNumber.map((item, index) => {
                           return (<div className='membershipNumber' data-advice='Put your HTML here. membershipNumber is a Text.'><p className="ProgramMembership-membershipNumber">membershipNumber: {this.props.membershipNumber}</p></div>);
                       })};
                       <div className='membershipNumber-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="ProgramMembership-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='programName-container'>
                       <div className='programName-header' data-advice='HTML for the *head* of the section'>programNames</div>
                       {this.props.programName.map((item, index) => {
                           return (<div className='programName' data-advice='Put your HTML here. programName is a Text.'><p className="ProgramMembership-programName">programName: {this.props.programName}</p></div>);
                       })};
                       <div className='programName-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="ProgramMembership-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="ProgramMembership-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="ProgramMembership-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="ProgramMembership-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="ProgramMembership-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
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
   potentialAction: React.propTypes.object,
   description: React.propTypes.string,
   hostingOrganization: React.propTypes.object,
   image: React.propTypes.object,
   member: React.propTypes.object,
   sameAs: React.propTypes.string,
   membershipNumber: React.propTypes.string,
   url: React.propTypes.string,
   programName: React.propTypes.string,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   name: React.propTypes.string,
};

