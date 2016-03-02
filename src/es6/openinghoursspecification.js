/* OpeningHoursSpecification - A structured value providing information about the opening hours of a place or a certain service inside a place.. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class OpeningHoursSpecification extends Component {
    render() {
        let dayOfWeek;
        if (this.props.dayOfWeek) {
            if (this.props.dayOfWeek instanceof Array) {
                dayOfWeek = (
                   <div className='dayOfWeek__container'>
                       <div className='dayOfWeek__header' data-advice='HTML for the *head* of the section'>dayOfWeeks</div>
                       {this.props.dayOfWeek.map((item, index) => {
                            return (<DayOfWeek  {...this.props.dayOfWeek} />);
                       })}
                       <div className='dayOfWeek__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                dayOfWeek = (<DayOfWeek  {...this.props.dayOfWeek} />);
            }
        }

        let closes;
        if (this.props.closes) {
            if (this.props.closes instanceof Array) {
                closes = (
                   <div className='closes__container'>
                       <div className='closes__header' data-advice='HTML for the *head* of the section'>closess</div>
                       {this.props.closes.map((item, index) => {
                            return (<Time  {...this.props.closes} />);
                       })}
                       <div className='closes__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                closes = (<Time  {...this.props.closes} />);
            }
        }

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
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OpeningHoursSpecification-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="OpeningHoursSpecification-description">description: {this.props.description}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OpeningHoursSpecification-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="OpeningHoursSpecification-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OpeningHoursSpecification-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="OpeningHoursSpecification-image" src={this.props.image} /></div>);
               }
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OpeningHoursSpecification-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="OpeningHoursSpecification-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let validThrough;
        if (this.props.validThrough) {
            if (this.props.validThrough instanceof Array) {
                validThrough = (
                   <div className='validThrough__container'>
                       <div className='validThrough__header' data-advice='HTML for the *head* of the section'>validThroughs</div>
                       {this.props.validThrough.map((item, index) => {
                            return (<div className='validThrough' data-advice='Put your HTML here. validThrough is a DateTime.'><time className="OpeningHoursSpecification-validThrough">validThrough: {this.props.validThrough}</time></div>);
                       })}
                       <div className='validThrough__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                validThrough = (<div className='validThrough' data-advice='Put your HTML here. validThrough is a DateTime.'><time className="OpeningHoursSpecification-validThrough">validThrough: {this.props.validThrough}</time></div>);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OpeningHoursSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="OpeningHoursSpecification-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OpeningHoursSpecification-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="OpeningHoursSpecification-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OpeningHoursSpecification-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="OpeningHoursSpecification-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let validFrom;
        if (this.props.validFrom) {
            if (this.props.validFrom instanceof Array) {
                validFrom = (
                   <div className='validFrom__container'>
                       <div className='validFrom__header' data-advice='HTML for the *head* of the section'>validFroms</div>
                       {this.props.validFrom.map((item, index) => {
                            return (<div className='validFrom' data-advice='Put your HTML here. validFrom is a DateTime.'><time className="OpeningHoursSpecification-validFrom">validFrom: {this.props.validFrom}</time></div>);
                       })}
                       <div className='validFrom__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                validFrom = (<div className='validFrom' data-advice='Put your HTML here. validFrom is a DateTime.'><time className="OpeningHoursSpecification-validFrom">validFrom: {this.props.validFrom}</time></div>);
            }
        }

        let opens;
        if (this.props.opens) {
            if (this.props.opens instanceof Array) {
                opens = (
                   <div className='opens__container'>
                       <div className='opens__header' data-advice='HTML for the *head* of the section'>openss</div>
                       {this.props.opens.map((item, index) => {
                            return (<Time  {...this.props.opens} />);
                       })}
                       <div className='opens__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                opens = (<Time  {...this.props.opens} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name__container'>
                       <div className='name__header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OpeningHoursSpecification-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="OpeningHoursSpecification-name">name: {this.props.name}</p></div>);
            }
        }

        return (
            <div className='OpeningHoursSpecification'>
                {dayOfWeek}
                {closes}
                {potentialAction}
                {description}
                {sameAs}
                {image}
                {url}
                {validThrough}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {validFrom}
                {opens}
                {name}
            </div>
        );
    }
};

OpeningHoursSpecification.defaultProps = {
};

OpeningHoursSpecification.propTypes = {
   dayOfWeek: React.PropTypes.object,
   closes: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   description: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   url: React.PropTypes.object,
   validThrough: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   validFrom: React.PropTypes.object,
   opens: React.PropTypes.object,
   name: React.PropTypes.object,
};

