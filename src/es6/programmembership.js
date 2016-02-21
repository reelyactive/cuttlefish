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
                hostingOrganization = (<Organization key={index} {...this.props.hostingOrganization} />);
            }
        }

        let member;
        if (this.props.member) {
            if (this.props.member instanceof Array) {
                member = (
                   <div className='member-container'>
                       <div className='member-header' data-advice='HTML for the *head* of the section'>members</div>
                       {this.props.member.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.member} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.member} />);
                           }
                       })};
                       <div className='member-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           if (this.props['@type'] === 'ImageObject') {
                               return (<ImageObject key={index} {...this.props.image} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="ProgramMembership-image" src={this.props.image} /></div>);
                           }
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
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
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                           else if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="ProgramMembership-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
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

        return (
            <div className='ProgramMembership'>
                {hostingOrganization}
                {member}
                {image}
                {potentialAction}
                {mainEntityOfPage}
            </div>
        );
    }
};

ProgramMembership.defaultProps = {
};

ProgramMembership.propTypes = {
   hostingOrganization: React.propTypes.object,
   member: React.propTypes.object,
   image: React.propTypes.object,
   potentialAction: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
};

