/* Action - An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.

See also blog post and Actions overview document.. Generated automatically by the reactGenerator. */
import ActionStatusType from './actionstatustype.js';
import Thing from './thing.js';
import ImageObject from './imageobject.js';
import Person from './person.js';
import Place from './place.js';
import Organization from './organization.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import EntryPoint from './entrypoint.js';


import React, {
  Component
} from 'react';

export default class Action extends Component {
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
                potentialAction = (<Action key={index} {...this.props.potentialAction} />);
            }
        }

        let participant;
        if (this.props.participant) {
            if (this.props.participant instanceof Array) {
                participant = (
                   <div className='participant-container'>
                       <div className='participant-header' data-advice='HTML for the *head* of the section'>participants</div>
                       {this.props.participant.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.participant} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.participant} />);
                           }
                       })};
                       <div className='participant-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   participant = (<Person key={index} {...this.props.participant} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   participant = (<Organization key={index} {...this.props.participant} />);
               }
            }
        }

        let target;
        if (this.props.target) {
            if (this.props.target instanceof Array) {
                target = (
                   <div className='target-container'>
                       <div className='target-header' data-advice='HTML for the *head* of the section'>targets</div>
                       {this.props.target.map((item, index) => {
                            return (<EntryPoint key={index} {...this.props.target} />);
                       })};
                       <div className='target-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                target = (<EntryPoint key={index} {...this.props.target} />);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Action-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Action-image" src={this.props.image} /></div>);
               }
            }
        }

        let object;
        if (this.props.object) {
            if (this.props.object instanceof Array) {
                object = (
                   <div className='object-container'>
                       <div className='object-header' data-advice='HTML for the *head* of the section'>objects</div>
                       {this.props.object.map((item, index) => {
                            return (<Thing key={index} {...this.props.object} />);
                       })};
                       <div className='object-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                object = (<Thing key={index} {...this.props.object} />);
            }
        }

        let agent;
        if (this.props.agent) {
            if (this.props.agent instanceof Array) {
                agent = (
                   <div className='agent-container'>
                       <div className='agent-header' data-advice='HTML for the *head* of the section'>agents</div>
                       {this.props.agent.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.agent} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.agent} />);
                           }
                       })};
                       <div className='agent-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Person') {
                   agent = (<Person key={index} {...this.props.agent} />);
               }
               else if (this.props['@type'] === 'Organization') {
                   agent = (<Organization key={index} {...this.props.agent} />);
               }
            }
        }

        let actionStatus;
        if (this.props.actionStatus) {
            if (this.props.actionStatus instanceof Array) {
                actionStatus = (
                   <div className='actionStatus-container'>
                       <div className='actionStatus-header' data-advice='HTML for the *head* of the section'>actionStatuss</div>
                       {this.props.actionStatus.map((item, index) => {
                            return (<ActionStatusType key={index} {...this.props.actionStatus} />);
                       })};
                       <div className='actionStatus-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                actionStatus = (<ActionStatusType key={index} {...this.props.actionStatus} />);
            }
        }

        let instrument;
        if (this.props.instrument) {
            if (this.props.instrument instanceof Array) {
                instrument = (
                   <div className='instrument-container'>
                       <div className='instrument-header' data-advice='HTML for the *head* of the section'>instruments</div>
                       {this.props.instrument.map((item, index) => {
                            return (<Thing key={index} {...this.props.instrument} />);
                       })};
                       <div className='instrument-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                instrument = (<Thing key={index} {...this.props.instrument} />);
            }
        }

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location-container'>
                       <div className='location-header' data-advice='HTML for the *head* of the section'>locations</div>
                       {this.props.location.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.location} />);
                           }
                           else if (this.props['@type'] === 'Text') {
                               return (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="Action-location">location: {this.props.location}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.location} />);
                           }
                       })};
                       <div className='location-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   location = (<Place key={index} {...this.props.location} />);
               }
               else if (this.props['@type'] === 'Text') {
                   location = (<div className='location' data-advice='Put your HTML here. location is a Text.'><p className="Action-location">location: {this.props.location}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   location = (<PostalAddress key={index} {...this.props.location} />);
               }
            }
        }

        let error;
        if (this.props.error) {
            if (this.props.error instanceof Array) {
                error = (
                   <div className='error-container'>
                       <div className='error-header' data-advice='HTML for the *head* of the section'>errors</div>
                       {this.props.error.map((item, index) => {
                            return (<Thing key={index} {...this.props.error} />);
                       })};
                       <div className='error-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                error = (<Thing key={index} {...this.props.error} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Action-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
               if (this.props['@type'] === 'URL') {
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Action-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
               else if (this.props['@type'] === 'CreativeWork') {
                   mainEntityOfPage = (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
               }
            }
        }

        let result;
        if (this.props.result) {
            if (this.props.result instanceof Array) {
                result = (
                   <div className='result-container'>
                       <div className='result-header' data-advice='HTML for the *head* of the section'>results</div>
                       {this.props.result.map((item, index) => {
                            return (<Thing key={index} {...this.props.result} />);
                       })};
                       <div className='result-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                result = (<Thing key={index} {...this.props.result} />);
            }
        }

        return (
            <div className='Action'>
                {potentialAction}
                {participant}
                {target}
                {image}
                {object}
                {agent}
                {actionStatus}
                {instrument}
                {location}
                {error}
                {mainEntityOfPage}
                {result}
            </div>
        );
    }
};

Action.defaultProps = {
};

Action.propTypes = {
   potentialAction: React.propTypes.object,
   participant: React.propTypes.object,
   target: React.propTypes.object,
   image: React.propTypes.object,
   object: React.propTypes.object,
   agent: React.propTypes.object,
   actionStatus: React.propTypes.object,
   instrument: React.propTypes.object,
   location: React.propTypes.object,
   error: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   result: React.propTypes.object,
};

