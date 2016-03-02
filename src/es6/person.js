/* Person - A person (alive, dead, undead, or fictional).. Generated automatically by the reactGenerator. */
import React, {
  Component
} from 'react';

export default class Person extends Component {
    render() {
        let sibling;
        if (this.props.sibling) {
            if (this.props.sibling instanceof Array) {
                sibling = (
                   <div className='sibling__container'>
                       <div className='sibling__header' data-advice='HTML for the *head* of the section'>siblings</div>
                       {this.props.sibling.map((item, index) => {
                            return (<Person  {...this.props.sibling} />);
                       })}
                       <div className='sibling__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sibling = (<Person  {...this.props.sibling} />);
            }
        }

        let honorificPrefix;
        if (this.props.honorificPrefix) {
            if (this.props.honorificPrefix instanceof Array) {
                honorificPrefix = (
                   <div className='honorificPrefix__container'>
                       <div className='honorificPrefix__header' data-advice='HTML for the *head* of the section'>honorificPrefixs</div>
                       {this.props.honorificPrefix.map((item, index) => {
                            return (<div className='honorificPrefix' data-advice='Put your HTML here. honorificPrefix is a Text.'><p className="Person-honorificPrefix">honorificPrefix: {this.props.honorificPrefix}</p></div>);
                       })}
                       <div className='honorificPrefix__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                honorificPrefix = (<div className='honorificPrefix' data-advice='Put your HTML here. honorificPrefix is a Text.'><p className="Person-honorificPrefix">honorificPrefix: {this.props.honorificPrefix}</p></div>);
            }
        }

        let weight;
        if (this.props.weight) {
            if (this.props.weight instanceof Array) {
                weight = (
                   <div className='weight__container'>
                       <div className='weight__header' data-advice='HTML for the *head* of the section'>weights</div>
                       {this.props.weight.map((item, index) => {
                            return (<QuantitativeValue  {...this.props.weight} />);
                       })}
                       <div className='weight__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                weight = (<QuantitativeValue  {...this.props.weight} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs__container'>
                       <div className='link__header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                            return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Person-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })}
                       <div className='sameAs__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Person-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
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
                               return (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Person-image" src={this.props.image} /></div>);
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
                   image = (<div className='image' data-advice='Put your HTML here. image is a URL.'><img className="Person-image" src={this.props.image} /></div>);
               }
            }
        }

        let relatedTo;
        if (this.props.relatedTo) {
            if (this.props.relatedTo instanceof Array) {
                relatedTo = (
                   <div className='relatedTo__container'>
                       <div className='relatedTo__header' data-advice='HTML for the *head* of the section'>relatedTos</div>
                       {this.props.relatedTo.map((item, index) => {
                            return (<Person  {...this.props.relatedTo} />);
                       })}
                       <div className='relatedTo__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                relatedTo = (<Person  {...this.props.relatedTo} />);
            }
        }

        let telephone;
        if (this.props.telephone) {
            if (this.props.telephone instanceof Array) {
                telephone = (
                   <div className='telephone__container'>
                       <div className='telephone__header' data-advice='HTML for the *head* of the section'>telephones</div>
                       {this.props.telephone.map((item, index) => {
                            return (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="Person-telephone">telephone: {this.props.telephone}</p></div>);
                       })}
                       <div className='telephone__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                telephone = (<div className='telephone' data-advice='Put your HTML here. telephone is a Text.'><p className="Person-telephone">telephone: {this.props.telephone}</p></div>);
            }
        }

        let birthDate;
        if (this.props.birthDate) {
            if (this.props.birthDate instanceof Array) {
                birthDate = (
                   <div className='birthDate__container'>
                       <div className='birthDate__header' data-advice='HTML for the *head* of the section'>birthDates</div>
                       {this.props.birthDate.map((item, index) => {
                            return (<div className='birthDate' data-advice='Put your HTML here. birthDate is a Date.'><time className="Person-birthDate">birthDate: {this.props.birthDate}</time></div>);
                       })}
                       <div className='birthDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                birthDate = (<div className='birthDate' data-advice='Put your HTML here. birthDate is a Date.'><time className="Person-birthDate">birthDate: {this.props.birthDate}</time></div>);
            }
        }

        let faxNumber;
        if (this.props.faxNumber) {
            if (this.props.faxNumber instanceof Array) {
                faxNumber = (
                   <div className='faxNumber__container'>
                       <div className='faxNumber__header' data-advice='HTML for the *head* of the section'>faxNumbers</div>
                       {this.props.faxNumber.map((item, index) => {
                            return (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="Person-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
                       })}
                       <div className='faxNumber__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                faxNumber = (<div className='faxNumber' data-advice='Put your HTML here. faxNumber is a Text.'><p className="Person-faxNumber">faxNumber: {this.props.faxNumber}</p></div>);
            }
        }

        let affiliation;
        if (this.props.affiliation) {
            if (this.props.affiliation instanceof Array) {
                affiliation = (
                   <div className='affiliation__container'>
                       <div className='affiliation__header' data-advice='HTML for the *head* of the section'>affiliations</div>
                       {this.props.affiliation.map((item, index) => {
                            return (<Organization  {...this.props.affiliation} />);
                       })}
                       <div className='affiliation__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                affiliation = (<Organization  {...this.props.affiliation} />);
            }
        }

        let additionalName;
        if (this.props.additionalName) {
            if (this.props.additionalName instanceof Array) {
                additionalName = (
                   <div className='additionalName__container'>
                       <div className='additionalName__header' data-advice='HTML for the *head* of the section'>additionalNames</div>
                       {this.props.additionalName.map((item, index) => {
                            return (<div className='additionalName' data-advice='Put your HTML here. additionalName is a Text.'><p className="Person-additionalName">additionalName: {this.props.additionalName}</p></div>);
                       })}
                       <div className='additionalName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalName = (<div className='additionalName' data-advice='Put your HTML here. additionalName is a Text.'><p className="Person-additionalName">additionalName: {this.props.additionalName}</p></div>);
            }
        }

        let workLocation;
        if (this.props.workLocation) {
            if (this.props.workLocation instanceof Array) {
                workLocation = (
                   <div className='workLocation__container'>
                       <div className='workLocation__header' data-advice='HTML for the *head* of the section'>workLocations</div>
                       {this.props.workLocation.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.workLocation} />);
                           }
                           else if (this.props['@type'] === 'ContactPoint') {
                               return (<ContactPoint key={index} {...this.props.workLocation} />);
                           }
                       })}
                       <div className='workLocation__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   workLocation = (<Place key={index} {...this.props.workLocation} />);
               }
               else if (this.props['@type'] === 'ContactPoint') {
                   workLocation = (<ContactPoint key={index} {...this.props.workLocation} />);
               }
            }
        }

        let hasOfferCatalog;
        if (this.props.hasOfferCatalog) {
            if (this.props.hasOfferCatalog instanceof Array) {
                hasOfferCatalog = (
                   <div className='hasOfferCatalog__container'>
                       <div className='hasOfferCatalog__header' data-advice='HTML for the *head* of the section'>hasOfferCatalogs</div>
                       {this.props.hasOfferCatalog.map((item, index) => {
                            return (<OfferCatalog  {...this.props.hasOfferCatalog} />);
                       })}
                       <div className='hasOfferCatalog__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                hasOfferCatalog = (<OfferCatalog  {...this.props.hasOfferCatalog} />);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType__container'>
                       <div className='additionalType__header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                            return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Person-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })}
                       <div className='additionalType__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Person-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let children;
        if (this.props.children) {
            if (this.props.children instanceof Array) {
                children = (
                   <div className='children__container'>
                       <div className='children__header' data-advice='HTML for the *head* of the section'>childrens</div>
                       {this.props.children.map((item, index) => {
                            return (<Person  {...this.props.children} />);
                       })}
                       <div className='children__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                children = (<Person  {...this.props.children} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description__container'>
                       <div className='description__header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                            return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Person-description">description: {this.props.description}</p></div>);
                       })}
                       <div className='description__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Person-description">description: {this.props.description}</p></div>);
            }
        }

        let isicV4;
        if (this.props.isicV4) {
            if (this.props.isicV4 instanceof Array) {
                isicV4 = (
                   <div className='isicV4__container'>
                       <div className='isicV4__header' data-advice='HTML for the *head* of the section'>isicV4s</div>
                       {this.props.isicV4.map((item, index) => {
                            return (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="Person-isicV4">isicV4: {this.props.isicV4}</p></div>);
                       })}
                       <div className='isicV4__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                isicV4 = (<div className='isicV4' data-advice='Put your HTML here. isicV4 is a Text.'><p className="Person-isicV4">isicV4: {this.props.isicV4}</p></div>);
            }
        }

        let spouse;
        if (this.props.spouse) {
            if (this.props.spouse instanceof Array) {
                spouse = (
                   <div className='spouse__container'>
                       <div className='spouse__header' data-advice='HTML for the *head* of the section'>spouses</div>
                       {this.props.spouse.map((item, index) => {
                            return (<Person  {...this.props.spouse} />);
                       })}
                       <div className='spouse__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                spouse = (<Person  {...this.props.spouse} />);
            }
        }

        let worksFor;
        if (this.props.worksFor) {
            if (this.props.worksFor instanceof Array) {
                worksFor = (
                   <div className='worksFor__container'>
                       <div className='worksFor__header' data-advice='HTML for the *head* of the section'>worksFors</div>
                       {this.props.worksFor.map((item, index) => {
                            return (<Organization  {...this.props.worksFor} />);
                       })}
                       <div className='worksFor__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                worksFor = (<Organization  {...this.props.worksFor} />);
            }
        }

        let taxID;
        if (this.props.taxID) {
            if (this.props.taxID instanceof Array) {
                taxID = (
                   <div className='taxID__container'>
                       <div className='taxID__header' data-advice='HTML for the *head* of the section'>taxIDs</div>
                       {this.props.taxID.map((item, index) => {
                            return (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="Person-taxID">taxID: {this.props.taxID}</p></div>);
                       })}
                       <div className='taxID__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                taxID = (<div className='taxID' data-advice='Put your HTML here. taxID is a Text.'><p className="Person-taxID">taxID: {this.props.taxID}</p></div>);
            }
        }

        let honorificSuffix;
        if (this.props.honorificSuffix) {
            if (this.props.honorificSuffix instanceof Array) {
                honorificSuffix = (
                   <div className='honorificSuffix__container'>
                       <div className='honorificSuffix__header' data-advice='HTML for the *head* of the section'>honorificSuffixs</div>
                       {this.props.honorificSuffix.map((item, index) => {
                            return (<div className='honorificSuffix' data-advice='Put your HTML here. honorificSuffix is a Text.'><p className="Person-honorificSuffix">honorificSuffix: {this.props.honorificSuffix}</p></div>);
                       })}
                       <div className='honorificSuffix__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                honorificSuffix = (<div className='honorificSuffix' data-advice='Put your HTML here. honorificSuffix is a Text.'><p className="Person-honorificSuffix">honorificSuffix: {this.props.honorificSuffix}</p></div>);
            }
        }

        let netWorth;
        if (this.props.netWorth) {
            if (this.props.netWorth instanceof Array) {
                netWorth = (
                   <div className='netWorth__container'>
                       <div className='netWorth__header' data-advice='HTML for the *head* of the section'>netWorths</div>
                       {this.props.netWorth.map((item, index) => {
                            return (<PriceSpecification  {...this.props.netWorth} />);
                       })}
                       <div className='netWorth__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                netWorth = (<PriceSpecification  {...this.props.netWorth} />);
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
                               return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Person-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
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
                   mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL.'><a className="Person-mainEntityOfPage" href={this.props.mainEntityOfPage} target="_blank">mainEntityOfPage</a></div>);
               }
            }
        }

        let homeLocation;
        if (this.props.homeLocation) {
            if (this.props.homeLocation instanceof Array) {
                homeLocation = (
                   <div className='homeLocation__container'>
                       <div className='homeLocation__header' data-advice='HTML for the *head* of the section'>homeLocations</div>
                       {this.props.homeLocation.map((item, index) => {
                           if (this.props['@type'] === 'Place') {
                               return (<Place key={index} {...this.props.homeLocation} />);
                           }
                           else if (this.props['@type'] === 'ContactPoint') {
                               return (<ContactPoint key={index} {...this.props.homeLocation} />);
                           }
                       })}
                       <div className='homeLocation__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Place') {
                   homeLocation = (<Place key={index} {...this.props.homeLocation} />);
               }
               else if (this.props['@type'] === 'ContactPoint') {
                   homeLocation = (<ContactPoint key={index} {...this.props.homeLocation} />);
               }
            }
        }

        let email;
        if (this.props.email) {
            if (this.props.email instanceof Array) {
                email = (
                   <div className='email__container'>
                       <div className='email__header' data-advice='HTML for the *head* of the section'>emails</div>
                       {this.props.email.map((item, index) => {
                            return (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="Person-email">email: {this.props.email}</p></div>);
                       })}
                       <div className='email__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                email = (<div className='email' data-advice='Put your HTML here. email is a Text.'><p className="Person-email">email: {this.props.email}</p></div>);
            }
        }

        let seeks;
        if (this.props.seeks) {
            if (this.props.seeks instanceof Array) {
                seeks = (
                   <div className='seeks__container'>
                       <div className='seeks__header' data-advice='HTML for the *head* of the section'>seekss</div>
                       {this.props.seeks.map((item, index) => {
                            return (<Demand  {...this.props.seeks} />);
                       })}
                       <div className='seeks__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                seeks = (<Demand  {...this.props.seeks} />);
            }
        }

        let colleague;
        if (this.props.colleague) {
            if (this.props.colleague instanceof Array) {
                colleague = (
                   <div className='colleague__container'>
                       <div className='colleague__header' data-advice='HTML for the *head* of the section'>colleagues</div>
                       {this.props.colleague.map((item, index) => {
                            return (<Person  {...this.props.colleague} />);
                       })}
                       <div className='colleague__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                colleague = (<Person  {...this.props.colleague} />);
            }
        }

        let performerIn;
        if (this.props.performerIn) {
            if (this.props.performerIn instanceof Array) {
                performerIn = (
                   <div className='performerIn__container'>
                       <div className='performerIn__header' data-advice='HTML for the *head* of the section'>performerIns</div>
                       {this.props.performerIn.map((item, index) => {
                            return (<Event  {...this.props.performerIn} />);
                       })}
                       <div className='performerIn__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                performerIn = (<Event  {...this.props.performerIn} />);
            }
        }

        let birthPlace;
        if (this.props.birthPlace) {
            if (this.props.birthPlace instanceof Array) {
                birthPlace = (
                   <div className='birthPlace__container'>
                       <div className='birthPlace__header' data-advice='HTML for the *head* of the section'>birthPlaces</div>
                       {this.props.birthPlace.map((item, index) => {
                            return (<Place  {...this.props.birthPlace} />);
                       })}
                       <div className='birthPlace__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                birthPlace = (<Place  {...this.props.birthPlace} />);
            }
        }

        let knows;
        if (this.props.knows) {
            if (this.props.knows instanceof Array) {
                knows = (
                   <div className='knows__container'>
                       <div className='knows__header' data-advice='HTML for the *head* of the section'>knowss</div>
                       {this.props.knows.map((item, index) => {
                            return (<Person  {...this.props.knows} />);
                       })}
                       <div className='knows__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                knows = (<Person  {...this.props.knows} />);
            }
        }

        let parent;
        if (this.props.parent) {
            if (this.props.parent instanceof Array) {
                parent = (
                   <div className='parent__container'>
                       <div className='parent__header' data-advice='HTML for the *head* of the section'>parents</div>
                       {this.props.parent.map((item, index) => {
                            return (<Person  {...this.props.parent} />);
                       })}
                       <div className='parent__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                parent = (<Person  {...this.props.parent} />);
            }
        }

        let memberOf;
        if (this.props.memberOf) {
            if (this.props.memberOf instanceof Array) {
                memberOf = (
                   <div className='memberOf__container'>
                       <div className='memberOf__header' data-advice='HTML for the *head* of the section'>memberOfs</div>
                       {this.props.memberOf.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.memberOf} />);
                           }
                           else if (this.props['@type'] === 'ProgramMembership') {
                               return (<ProgramMembership key={index} {...this.props.memberOf} />);
                           }
                       })}
                       <div className='memberOf__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   memberOf = (<Organization key={index} {...this.props.memberOf} />);
               }
               else if (this.props['@type'] === 'ProgramMembership') {
                   memberOf = (<ProgramMembership key={index} {...this.props.memberOf} />);
               }
            }
        }

        let jobTitle;
        if (this.props.jobTitle) {
            if (this.props.jobTitle instanceof Array) {
                jobTitle = (
                   <div className='jobTitle__container'>
                       <div className='jobTitle__header' data-advice='HTML for the *head* of the section'>jobTitles</div>
                       {this.props.jobTitle.map((item, index) => {
                            return (<div className='jobTitle' data-advice='Put your HTML here. jobTitle is a Text.'><p className="Person-jobTitle">jobTitle: {this.props.jobTitle}</p></div>);
                       })}
                       <div className='jobTitle__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                jobTitle = (<div className='jobTitle' data-advice='Put your HTML here. jobTitle is a Text.'><p className="Person-jobTitle">jobTitle: {this.props.jobTitle}</p></div>);
            }
        }

        let brand;
        if (this.props.brand) {
            if (this.props.brand instanceof Array) {
                brand = (
                   <div className='brand__container'>
                       <div className='brand__header' data-advice='HTML for the *head* of the section'>brands</div>
                       {this.props.brand.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.brand} />);
                           }
                           else if (this.props['@type'] === 'Brand') {
                               return (<Brand key={index} {...this.props.brand} />);
                           }
                       })}
                       <div className='brand__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   brand = (<Organization key={index} {...this.props.brand} />);
               }
               else if (this.props['@type'] === 'Brand') {
                   brand = (<Brand key={index} {...this.props.brand} />);
               }
            }
        }

        let familyName;
        if (this.props.familyName) {
            if (this.props.familyName instanceof Array) {
                familyName = (
                   <div className='familyName__container'>
                       <div className='familyName__header' data-advice='HTML for the *head* of the section'>familyNames</div>
                       {this.props.familyName.map((item, index) => {
                            return (<div className='familyName' data-advice='Put your HTML here. familyName is a Text.'><p className="Person-familyName">familyName: {this.props.familyName}</p></div>);
                       })}
                       <div className='familyName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                familyName = (<div className='familyName' data-advice='Put your HTML here. familyName is a Text.'><p className="Person-familyName">familyName: {this.props.familyName}</p></div>);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award__container'>
                       <div className='award__header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                            return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Person-award">award: {this.props.award}</p></div>);
                       })}
                       <div className='award__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="Person-award">award: {this.props.award}</p></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName__container'>
                       <div className='alternateName__header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                            return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Person-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })}
                       <div className='alternateName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Person-alternateName">alternateName: {this.props.alternateName}</p></div>);
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

        let address;
        if (this.props.address) {
            if (this.props.address instanceof Array) {
                address = (
                   <div className='address__container'>
                       <div className='address__header' data-advice='HTML for the *head* of the section'>addresss</div>
                       {this.props.address.map((item, index) => {
                           if (this.props['@type'] === 'Text') {
                               return (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="Person-address">address: {this.props.address}</p></div>);
                           }
                           else if (this.props['@type'] === 'PostalAddress') {
                               return (<PostalAddress key={index} {...this.props.address} />);
                           }
                       })}
                       <div className='address__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Text') {
                   address = (<div className='address' data-advice='Put your HTML here. address is a Text.'><p className="Person-address">address: {this.props.address}</p></div>);
               }
               else if (this.props['@type'] === 'PostalAddress') {
                   address = (<PostalAddress key={index} {...this.props.address} />);
               }
            }
        }

        let duns;
        if (this.props.duns) {
            if (this.props.duns instanceof Array) {
                duns = (
                   <div className='duns__container'>
                       <div className='duns__header' data-advice='HTML for the *head* of the section'>dunss</div>
                       {this.props.duns.map((item, index) => {
                            return (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="Person-duns">duns: {this.props.duns}</p></div>);
                       })}
                       <div className='duns__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                duns = (<div className='duns' data-advice='Put your HTML here. duns is a Text.'><p className="Person-duns">duns: {this.props.duns}</p></div>);
            }
        }

        let nationality;
        if (this.props.nationality) {
            if (this.props.nationality instanceof Array) {
                nationality = (
                   <div className='nationality__container'>
                       <div className='nationality__header' data-advice='HTML for the *head* of the section'>nationalitys</div>
                       {this.props.nationality.map((item, index) => {
                            return (<Country  {...this.props.nationality} />);
                       })}
                       <div className='nationality__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                nationality = (<Country  {...this.props.nationality} />);
            }
        }

        let contactPoint;
        if (this.props.contactPoint) {
            if (this.props.contactPoint instanceof Array) {
                contactPoint = (
                   <div className='contactPoint__container'>
                       <div className='contactPoint__header' data-advice='HTML for the *head* of the section'>contactPoints</div>
                       {this.props.contactPoint.map((item, index) => {
                            return (<ContactPoint  {...this.props.contactPoint} />);
                       })}
                       <div className='contactPoint__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                contactPoint = (<ContactPoint  {...this.props.contactPoint} />);
            }
        }

        let deathDate;
        if (this.props.deathDate) {
            if (this.props.deathDate instanceof Array) {
                deathDate = (
                   <div className='deathDate__container'>
                       <div className='deathDate__header' data-advice='HTML for the *head* of the section'>deathDates</div>
                       {this.props.deathDate.map((item, index) => {
                            return (<div className='deathDate' data-advice='Put your HTML here. deathDate is a Date.'><time className="Person-deathDate">deathDate: {this.props.deathDate}</time></div>);
                       })}
                       <div className='deathDate__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                deathDate = (<div className='deathDate' data-advice='Put your HTML here. deathDate is a Date.'><time className="Person-deathDate">deathDate: {this.props.deathDate}</time></div>);
            }
        }

        let makesOffer;
        if (this.props.makesOffer) {
            if (this.props.makesOffer instanceof Array) {
                makesOffer = (
                   <div className='makesOffer__container'>
                       <div className='makesOffer__header' data-advice='HTML for the *head* of the section'>makesOffers</div>
                       {this.props.makesOffer.map((item, index) => {
                            return (<Offer  {...this.props.makesOffer} />);
                       })}
                       <div className='makesOffer__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                makesOffer = (<Offer  {...this.props.makesOffer} />);
            }
        }

        let hasPOS;
        if (this.props.hasPOS) {
            if (this.props.hasPOS instanceof Array) {
                hasPOS = (
                   <div className='hasPOS__container'>
                       <div className='hasPOS__header' data-advice='HTML for the *head* of the section'>hasPOSs</div>
                       {this.props.hasPOS.map((item, index) => {
                            return (<Place  {...this.props.hasPOS} />);
                       })}
                       <div className='hasPOS__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                hasPOS = (<Place  {...this.props.hasPOS} />);
            }
        }

        let owns;
        if (this.props.owns) {
            if (this.props.owns instanceof Array) {
                owns = (
                   <div className='owns__container'>
                       <div className='owns__header' data-advice='HTML for the *head* of the section'>ownss</div>
                       {this.props.owns.map((item, index) => {
                           if (this.props['@type'] === 'Product') {
                               return (<Product key={index} {...this.props.owns} />);
                           }
                           else if (this.props['@type'] === 'OwnershipInfo') {
                               return (<OwnershipInfo key={index} {...this.props.owns} />);
                           }
                       })}
                       <div className='owns__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Product') {
                   owns = (<Product key={index} {...this.props.owns} />);
               }
               else if (this.props['@type'] === 'OwnershipInfo') {
                   owns = (<OwnershipInfo key={index} {...this.props.owns} />);
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
                            return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Person-name">name: {this.props.name}</p></div>);
                       })}
                       <div className='name__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Person-name">name: {this.props.name}</p></div>);
            }
        }

        let naics;
        if (this.props.naics) {
            if (this.props.naics instanceof Array) {
                naics = (
                   <div className='naics__container'>
                       <div className='naics__header' data-advice='HTML for the *head* of the section'>naicss</div>
                       {this.props.naics.map((item, index) => {
                            return (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="Person-naics">naics: {this.props.naics}</p></div>);
                       })}
                       <div className='naics__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                naics = (<div className='naics' data-advice='Put your HTML here. naics is a Text.'><p className="Person-naics">naics: {this.props.naics}</p></div>);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url__container'>
                       <div className='url__header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                            return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Person-url" href={this.props.url} target="_blank">url</a></div>);
                       })}
                       <div className='url__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Person-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let gender;
        if (this.props.gender) {
            if (this.props.gender instanceof Array) {
                gender = (
                   <div className='gender__container'>
                       <div className='gender__header' data-advice='HTML for the *head* of the section'>genders</div>
                       {this.props.gender.map((item, index) => {
                            return (<div className='gender' data-advice='Put your HTML here. gender is a Text.'><p className="Person-gender">gender: {this.props.gender}</p></div>);
                       })}
                       <div className='gender__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                gender = (<div className='gender' data-advice='Put your HTML here. gender is a Text.'><p className="Person-gender">gender: {this.props.gender}</p></div>);
            }
        }

        let vatID;
        if (this.props.vatID) {
            if (this.props.vatID instanceof Array) {
                vatID = (
                   <div className='vatID__container'>
                       <div className='vatID__header' data-advice='HTML for the *head* of the section'>vatIDs</div>
                       {this.props.vatID.map((item, index) => {
                            return (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="Person-vatID">vatID: {this.props.vatID}</p></div>);
                       })}
                       <div className='vatID__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                vatID = (<div className='vatID' data-advice='Put your HTML here. vatID is a Text.'><p className="Person-vatID">vatID: {this.props.vatID}</p></div>);
            }
        }

        let height;
        if (this.props.height) {
            if (this.props.height instanceof Array) {
                height = (
                   <div className='height__container'>
                       <div className='height__header' data-advice='HTML for the *head* of the section'>heights</div>
                       {this.props.height.map((item, index) => {
                           if (this.props['@type'] === 'Distance') {
                               return (<Distance key={index} {...this.props.height} />);
                           }
                           else if (this.props['@type'] === 'QuantitativeValue') {
                               return (<QuantitativeValue key={index} {...this.props.height} />);
                           }
                       })}
                       <div className='height__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Distance') {
                   height = (<Distance key={index} {...this.props.height} />);
               }
               else if (this.props['@type'] === 'QuantitativeValue') {
                   height = (<QuantitativeValue key={index} {...this.props.height} />);
               }
            }
        }

        let deathPlace;
        if (this.props.deathPlace) {
            if (this.props.deathPlace instanceof Array) {
                deathPlace = (
                   <div className='deathPlace__container'>
                       <div className='deathPlace__header' data-advice='HTML for the *head* of the section'>deathPlaces</div>
                       {this.props.deathPlace.map((item, index) => {
                            return (<Place  {...this.props.deathPlace} />);
                       })}
                       <div className='deathPlace__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                deathPlace = (<Place  {...this.props.deathPlace} />);
            }
        }

        let follows;
        if (this.props.follows) {
            if (this.props.follows instanceof Array) {
                follows = (
                   <div className='follows__container'>
                       <div className='follows__header' data-advice='HTML for the *head* of the section'>followss</div>
                       {this.props.follows.map((item, index) => {
                            return (<Person  {...this.props.follows} />);
                       })}
                       <div className='follows__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                follows = (<Person  {...this.props.follows} />);
            }
        }

        let givenName;
        if (this.props.givenName) {
            if (this.props.givenName instanceof Array) {
                givenName = (
                   <div className='givenName__container'>
                       <div className='givenName__header' data-advice='HTML for the *head* of the section'>givenNames</div>
                       {this.props.givenName.map((item, index) => {
                            return (<div className='givenName' data-advice='Put your HTML here. givenName is a Text.'><p className="Person-givenName">givenName: {this.props.givenName}</p></div>);
                       })}
                       <div className='givenName__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                givenName = (<div className='givenName' data-advice='Put your HTML here. givenName is a Text.'><p className="Person-givenName">givenName: {this.props.givenName}</p></div>);
            }
        }

        let alumniOf;
        if (this.props.alumniOf) {
            if (this.props.alumniOf instanceof Array) {
                alumniOf = (
                   <div className='alumniOf__container'>
                       <div className='alumniOf__header' data-advice='HTML for the *head* of the section'>alumniOfs</div>
                       {this.props.alumniOf.map((item, index) => {
                           if (this.props['@type'] === 'Organization') {
                               return (<Organization key={index} {...this.props.alumniOf} />);
                           }
                           else if (this.props['@type'] === 'EducationalOrganization') {
                               return (<EducationalOrganization key={index} {...this.props.alumniOf} />);
                           }
                       })}
                       <div className='alumniOf__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
               if (this.props['@type'] === 'Organization') {
                   alumniOf = (<Organization key={index} {...this.props.alumniOf} />);
               }
               else if (this.props['@type'] === 'EducationalOrganization') {
                   alumniOf = (<EducationalOrganization key={index} {...this.props.alumniOf} />);
               }
            }
        }

        let globalLocationNumber;
        if (this.props.globalLocationNumber) {
            if (this.props.globalLocationNumber instanceof Array) {
                globalLocationNumber = (
                   <div className='globalLocationNumber__container'>
                       <div className='globalLocationNumber__header' data-advice='HTML for the *head* of the section'>globalLocationNumbers</div>
                       {this.props.globalLocationNumber.map((item, index) => {
                            return (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="Person-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
                       })}
                       <div className='globalLocationNumber__footer' data-advice='HTML for the *footer* of the section'></div>
                   </div>
                );
            } else {
                globalLocationNumber = (<div className='globalLocationNumber' data-advice='Put your HTML here. globalLocationNumber is a Text.'><p className="Person-globalLocationNumber">globalLocationNumber: {this.props.globalLocationNumber}</p></div>);
            }
        }

        return (
            <div className='Person'>
                {sibling}
                {honorificPrefix}
                {weight}
                {sameAs}
                {image}
                {relatedTo}
                {telephone}
                {birthDate}
                {faxNumber}
                {affiliation}
                {additionalName}
                {workLocation}
                {hasOfferCatalog}
                {additionalType}
                {children}
                {description}
                {isicV4}
                {spouse}
                {worksFor}
                {taxID}
                {honorificSuffix}
                {netWorth}
                {mainEntityOfPage}
                {homeLocation}
                {email}
                {seeks}
                {colleague}
                {performerIn}
                {birthPlace}
                {knows}
                {parent}
                {memberOf}
                {jobTitle}
                {brand}
                {familyName}
                {award}
                {alternateName}
                {potentialAction}
                {address}
                {duns}
                {nationality}
                {contactPoint}
                {deathDate}
                {makesOffer}
                {hasPOS}
                {owns}
                {name}
                {naics}
                {url}
                {gender}
                {vatID}
                {height}
                {deathPlace}
                {follows}
                {givenName}
                {alumniOf}
                {globalLocationNumber}
            </div>
        );
    }
};

Person.defaultProps = {
};

Person.propTypes = {
   sibling: React.PropTypes.object,
   honorificPrefix: React.PropTypes.object,
   weight: React.PropTypes.object,
   sameAs: React.PropTypes.object,
   image: React.PropTypes.object,
   relatedTo: React.PropTypes.object,
   telephone: React.PropTypes.object,
   birthDate: React.PropTypes.object,
   faxNumber: React.PropTypes.object,
   affiliation: React.PropTypes.object,
   additionalName: React.PropTypes.object,
   workLocation: React.PropTypes.object,
   hasOfferCatalog: React.PropTypes.object,
   additionalType: React.PropTypes.object,
   children: React.PropTypes.object,
   description: React.PropTypes.object,
   isicV4: React.PropTypes.object,
   spouse: React.PropTypes.object,
   worksFor: React.PropTypes.object,
   taxID: React.PropTypes.object,
   honorificSuffix: React.PropTypes.object,
   netWorth: React.PropTypes.object,
   mainEntityOfPage: React.PropTypes.object,
   homeLocation: React.PropTypes.object,
   email: React.PropTypes.object,
   seeks: React.PropTypes.object,
   colleague: React.PropTypes.object,
   performerIn: React.PropTypes.object,
   birthPlace: React.PropTypes.object,
   knows: React.PropTypes.object,
   parent: React.PropTypes.object,
   memberOf: React.PropTypes.object,
   jobTitle: React.PropTypes.object,
   brand: React.PropTypes.object,
   familyName: React.PropTypes.object,
   award: React.PropTypes.object,
   alternateName: React.PropTypes.object,
   potentialAction: React.PropTypes.object,
   address: React.PropTypes.object,
   duns: React.PropTypes.object,
   nationality: React.PropTypes.object,
   contactPoint: React.PropTypes.object,
   deathDate: React.PropTypes.object,
   makesOffer: React.PropTypes.object,
   hasPOS: React.PropTypes.object,
   owns: React.PropTypes.object,
   name: React.PropTypes.object,
   naics: React.PropTypes.object,
   url: React.PropTypes.object,
   gender: React.PropTypes.object,
   vatID: React.PropTypes.object,
   height: React.PropTypes.object,
   deathPlace: React.PropTypes.object,
   follows: React.PropTypes.object,
   givenName: React.PropTypes.object,
   alumniOf: React.PropTypes.object,
   globalLocationNumber: React.PropTypes.object,
};

