/* Action - An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.

See also blog post and Actions overview document.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class Action extends Component {
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

        let participant;
        if (this.props.participant) {
            if (this.props.participant instanceof Array) {
                participant = (
                   <div className='participant__container'>
                       <div className='participant__header' data-advice='HTML for the *head* of the section'>participants</div>
                       {this.props.participant.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.participant} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.participant} />);
                           }
                       })}
                       <div className='participant__footer' data-advice='HTML for the *footer* of the section'></div>
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
                   <div className='target__container'>
                       <div className='target__header' data-advice='HTML for the *head* of the section'>targets</div>
                       {this.props.target.map((item, index) => {
                            return (<EntryPoint  {...this.props.target} />);
                       })}
                       <div className='target__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                target = (<EntryPoint  {...this.props.target} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Action-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Action-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Action-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Action-description">description: {this.props.description}</p></div>);
            }
        }

        let object;
        if (this.props.object) {
            if (this.props.object instanceof Array) {
                object = (
                   <div className='object__container'>
                       <div className='object__header' data-advice='HTML for the *head* of the section'>objects</div>
                       {this.props.object.map((item, index) => {
                            return (<Thing  {...this.props.object} />);
                       })}
                       <div className='object__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                object = (<Thing  {...this.props.object} />);
            }
        }

        let agent;
        if (this.props.agent) {
            if (this.props.agent instanceof Array) {
                agent = (
                   <div className='agent__container'>
                       <div className='agent__header' data-advice='HTML for the *head* of the section'>agents</div>
                       {this.props.agent.map((item, index) => {
                           if (this.props['@type'] === 'Person') {
                               return (<Person key={index} {...this.props.agent} />);
                           }
                           else if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.agent} />);
                           }
                       })}
                       <div className='agent__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Action-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Action-name">name: {this.props.name}</p></div>);
            }
        }

        let actionStatus;
        if (this.props.actionStatus) {
            if (this.props.actionStatus instanceof Array) {
                actionStatus = (
                   <div className='actionStatus__container'>
                       <div className='actionStatus__header' data-advice='HTML for the *head* of the section'>actionStatuss</div>
                       {this.props.actionStatus.map((item, index) => {
                            return (<ActionStatusType  {...this.props.actionStatus} />);
                       })}
                       <div className='actionStatus__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                actionStatus = (<ActionStatusType  {...this.props.actionStatus} />);
            }
        }

        let instrument;
        if (this.props.instrument) {
            if (this.props.instrument instanceof Array) {
                instrument = (
                   <div className='instrument__container'>
                       <div className='instrument__header' data-advice='HTML for the *head* of the section'>instruments</div>
                       {this.props.instrument.map((item, index) => {
                            return (<Thing  {...this.props.instrument} />);
                       })}
                       <div className='instrument__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                instrument = (<Thing  {...this.props.instrument} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Action-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Action-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location__container'>
                       <div className='location__header' data-advice='HTML for the *head* of the section'>locations</div>
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
                       })}
                       <div className='location__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let startTime;
        if (this.props.startTime) {
            if (this.props.startTime instanceof Array) {
                startTime = (
                   <div className='startTime__container'>
                       <div className='startTime__header' data-advice='HTML for the *head* of the section'>startTimes</div>
                       {this.props.startTime.map((item, index) => {
                            return (<div className='startTime' data-advice='Put your HTML here. startTime is a DateTime.'><time className="Action-startTime">startTime: {this.props.startTime}</time></div>);
                       })}
                       <div className='startTime__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                startTime = (<div className='startTime' data-advice='Put your HTML here. startTime is a DateTime.'><time className="Action-startTime">startTime: {this.props.startTime}</time></div>);
            }
        }

        let error;
        if (this.props.error) {
            if (this.props.error instanceof Array) {
                error = (
                   <div className='error__container'>
                       <div className='error__header' data-advice='HTML for the *head* of the section'>errors</div>
                       {this.props.error.map((item, index) => {
                            return (<Thing  {...this.props.error} />);
                       })}
                       <div className='error__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                error = (<Thing  {...this.props.error} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage__container'>
                       <div className='mainEntityOfPage__header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           if (this.props['@type'] === 'URL') {
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Action-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
                           }
                           else if (this.props['@type'] === 'CreativeWork') {
                               return (<CreativeWork key={index} {...this.props.mainEntityOfPage} />);
                           }
                       })}
                       <div className='mainEntityOfPage__footer' data-advice='HTML for the *footer* of the section'></div>
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

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Action-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Action-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Action-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Action-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let endTime;
        if (this.props.endTime) {
            if (this.props.endTime instanceof Array) {
                endTime = (
                   <div className='endTime__container'>
                       <div className='endTime__header' data-advice='HTML for the *head* of the section'>endTimes</div>
                       {this.props.endTime.map((item, index) => {
                            return (<div className='endTime' data-advice='Put your HTML here. endTime is a DateTime.'><time className="Action-endTime">endTime: {this.props.endTime}</time></div>);
                       })}
                       <div className='endTime__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                endTime = (<div className='endTime' data-advice='Put your HTML here. endTime is a DateTime.'><time className="Action-endTime">endTime: {this.props.endTime}</time></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Action-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Action-image" src={this.props.image} /></div>);
               }
            }
        }

        let result;
        if (this.props.result) {
            if (this.props.result instanceof Array) {
                result = (
                   <div className='result__container'>
                       <div className='result__header' data-advice='HTML for the *head* of the section'>results</div>
                       {this.props.result.map((item, index) => {
                            return (<Thing  {...this.props.result} />);
                       })}
                       <div className='result__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                result = (<Thing  {...this.props.result} />);
            }
        }

        return (
            <div className='Action'>
                {potentialAction}
                {participant}
                {target}
                {sameAs}
                {description}
                {object}
                {agent}
                {name}
                {actionStatus}
                {instrument}
                {url}
                {location}
                {startTime}
                {error}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {endTime}
                {image}
                {result}
            </div>
        );
    }
};

Action.defaultProps = {
};

Action.propTypes = {
   potentialAction: React.PropTypes.object,
   participant: React.PropTypes.object,
   target: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   description: React.PropTypes.object,
   object: React.PropTypes.object,
   agent: React.PropTypes.object,
   name: React.PropTypes.object,
   actionStatus: React.PropTypes.object,
   instrument: React.PropTypes.object,
   url: React.PropTypes.object,
   location: React.PropTypes.object,
   startTime: React.PropTypes.object,
   error: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   endTime: React.PropTypes.object,
   image: React.PropTypes.object,
   result: React.PropTypes.object,
};

