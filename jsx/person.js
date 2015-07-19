/* Thing > Person - A person (alive, dead, undead, or fictional).. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './distance', './product', './educationalorganization', './offer', './country', './brand', './pricespecification', './quantitativevalue', './programmembership', './person', './ownershipinfo', './place', './imageobject', './demand', './action', './organization', './postaladdress', './creativework', './contactpoint', './event'], function(React, Distance, Product, EducationalOrganization, Offer, Country, Brand, PriceSpecification, QuantitativeValue, ProgramMembership, Person, OwnershipInfo, Place, ImageObject, Demand, Action, Organization, PostalAddress, CreativeWork, ContactPoint, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var sibling;
      if( this.props.sibling ){
        if( this.props.sibling instanceof Array ){
          sibling = [(<p>sibling:</p> )];
          for( i in this.props.sibling ){
            sibling.push( ( <Person props={ this.props.sibling } /> ) );          }
        } else {
          sibling = ( <Person props={ this.props.sibling } /> );        }
      }
      var honorificPrefix;
      if( this.props.honorificPrefix ){
        if( this.props.honorificPrefix instanceof Array ){
          honorificPrefix = [(<p>honorificPrefix:</p> )];
          for( i in this.props.honorificPrefix ){
            honorificPrefix.push( ( <div class='honorificPrefix'></div> ) );
          }
        } else {
          honorificPrefix = ( <div class='honorificPrefix'>{this.props.honorificPrefix}</div> );
        }
      }
      var weight;
      if( this.props.weight ){
        if( this.props.weight instanceof Array ){
          weight = [(<p>weight:</p> )];
          for( i in this.props.weight ){
            weight.push( ( <QuantitativeValue props={ this.props.weight } /> ) );          }
        } else {
          weight = ( <QuantitativeValue props={ this.props.weight } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var relatedTo;
      if( this.props.relatedTo ){
        if( this.props.relatedTo instanceof Array ){
          relatedTo = [(<p>relatedTo:</p> )];
          for( i in this.props.relatedTo ){
            relatedTo.push( ( <Person props={ this.props.relatedTo } /> ) );          }
        } else {
          relatedTo = ( <Person props={ this.props.relatedTo } /> );        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [(<p>telephone:</p> )];
          for( i in this.props.telephone ){
            telephone.push( ( <div class='telephone'></div> ) );
          }
        } else {
          telephone = ( <div class='telephone'>{this.props.telephone}</div> );
        }
      }
      var birthDate;
      if( this.props.birthDate ){
        if( this.props.birthDate instanceof Array ){
          birthDate = [(<p>birthDate:</p> )];
          for( i in this.props.birthDate ){
            birthDate.push( ( <div class='birthDate'></div> ) );
          }
        } else {
          birthDate = ( <div class='birthDate'>{this.props.birthDate}</div> );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [(<p>faxNumber:</p> )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( <div class='faxNumber'></div> ) );
          }
        } else {
          faxNumber = ( <div class='faxNumber'>{this.props.faxNumber}</div> );
        }
      }
      var affiliation;
      if( this.props.affiliation ){
        if( this.props.affiliation instanceof Array ){
          affiliation = [(<p>affiliation:</p> )];
          for( i in this.props.affiliation ){
            affiliation.push( ( <Organization props={ this.props.affiliation } /> ) );          }
        } else {
          affiliation = ( <Organization props={ this.props.affiliation } /> );        }
      }
      var additionalName;
      if( this.props.additionalName ){
        if( this.props.additionalName instanceof Array ){
          additionalName = [(<p>additionalName:</p> )];
          for( i in this.props.additionalName ){
            additionalName.push( ( <div class='additionalName'></div> ) );
          }
        } else {
          additionalName = ( <div class='additionalName'>{this.props.additionalName}</div> );
        }
      }
      var workLocation;
      if( this.props.workLocation ){
        if( this.props.workLocation instanceof Array ){
          workLocation = [(<p>workLocation:</p> )];
          for( i in this.props.workLocation ){
            workLocation.push( ( <div class='workLocation'></div> ) );
          }
        } else {
          workLocation = ( <div class='workLocation'>{this.props.workLocation}</div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var children;
      if( this.props.children ){
        if( this.props.children instanceof Array ){
          children = [(<p>children:</p> )];
          for( i in this.props.children ){
            children.push( ( <Person props={ this.props.children } /> ) );          }
        } else {
          children = ( <Person props={ this.props.children } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [(<p>isicV4:</p> )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( <div class='isicV4'></div> ) );
          }
        } else {
          isicV4 = ( <div class='isicV4'>{this.props.isicV4}</div> );
        }
      }
      var spouse;
      if( this.props.spouse ){
        if( this.props.spouse instanceof Array ){
          spouse = [(<p>spouse:</p> )];
          for( i in this.props.spouse ){
            spouse.push( ( <Person props={ this.props.spouse } /> ) );          }
        } else {
          spouse = ( <Person props={ this.props.spouse } /> );        }
      }
      var worksFor;
      if( this.props.worksFor ){
        if( this.props.worksFor instanceof Array ){
          worksFor = [(<p>worksFor:</p> )];
          for( i in this.props.worksFor ){
            worksFor.push( ( <Organization props={ this.props.worksFor } /> ) );          }
        } else {
          worksFor = ( <Organization props={ this.props.worksFor } /> );        }
      }
      var taxID;
      if( this.props.taxID ){
        if( this.props.taxID instanceof Array ){
          taxID = [(<p>taxID:</p> )];
          for( i in this.props.taxID ){
            taxID.push( ( <div class='taxID'></div> ) );
          }
        } else {
          taxID = ( <div class='taxID'>{this.props.taxID}</div> );
        }
      }
      var honorificSuffix;
      if( this.props.honorificSuffix ){
        if( this.props.honorificSuffix instanceof Array ){
          honorificSuffix = [(<p>honorificSuffix:</p> )];
          for( i in this.props.honorificSuffix ){
            honorificSuffix.push( ( <div class='honorificSuffix'></div> ) );
          }
        } else {
          honorificSuffix = ( <div class='honorificSuffix'>{this.props.honorificSuffix}</div> );
        }
      }
      var netWorth;
      if( this.props.netWorth ){
        if( this.props.netWorth instanceof Array ){
          netWorth = [(<p>netWorth:</p> )];
          for( i in this.props.netWorth ){
            netWorth.push( ( <PriceSpecification props={ this.props.netWorth } /> ) );          }
        } else {
          netWorth = ( <PriceSpecification props={ this.props.netWorth } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var homeLocation;
      if( this.props.homeLocation ){
        if( this.props.homeLocation instanceof Array ){
          homeLocation = [(<p>homeLocation:</p> )];
          for( i in this.props.homeLocation ){
            homeLocation.push( ( <div class='homeLocation'></div> ) );
          }
        } else {
          homeLocation = ( <div class='homeLocation'>{this.props.homeLocation}</div> );
        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [(<p>email:</p> )];
          for( i in this.props.email ){
            email.push( ( <div class='email'></div> ) );
          }
        } else {
          email = ( <div class='email'>{this.props.email}</div> );
        }
      }
      var seeks;
      if( this.props.seeks ){
        if( this.props.seeks instanceof Array ){
          seeks = [(<p>seeks:</p> )];
          for( i in this.props.seeks ){
            seeks.push( ( <Demand props={ this.props.seeks } /> ) );          }
        } else {
          seeks = ( <Demand props={ this.props.seeks } /> );        }
      }
      var colleague;
      if( this.props.colleague ){
        if( this.props.colleague instanceof Array ){
          colleague = [(<p>colleague:</p> )];
          for( i in this.props.colleague ){
            colleague.push( ( <Person props={ this.props.colleague } /> ) );          }
        } else {
          colleague = ( <Person props={ this.props.colleague } /> );        }
      }
      var performerIn;
      if( this.props.performerIn ){
        if( this.props.performerIn instanceof Array ){
          performerIn = [(<p>performerIn:</p> )];
          for( i in this.props.performerIn ){
            performerIn.push( ( <Event props={ this.props.performerIn } /> ) );          }
        } else {
          performerIn = ( <Event props={ this.props.performerIn } /> );        }
      }
      var birthPlace;
      if( this.props.birthPlace ){
        if( this.props.birthPlace instanceof Array ){
          birthPlace = [(<p>birthPlace:</p> )];
          for( i in this.props.birthPlace ){
            birthPlace.push( ( <Place props={ this.props.birthPlace } /> ) );          }
        } else {
          birthPlace = ( <Place props={ this.props.birthPlace } /> );        }
      }
      var knows;
      if( this.props.knows ){
        if( this.props.knows instanceof Array ){
          knows = [(<p>knows:</p> )];
          for( i in this.props.knows ){
            knows.push( ( <Person props={ this.props.knows } /> ) );          }
        } else {
          knows = ( <Person props={ this.props.knows } /> );        }
      }
      var parent;
      if( this.props.parent ){
        if( this.props.parent instanceof Array ){
          parent = [(<p>parent:</p> )];
          for( i in this.props.parent ){
            parent.push( ( <Person props={ this.props.parent } /> ) );          }
        } else {
          parent = ( <Person props={ this.props.parent } /> );        }
      }
      var memberOf;
      if( this.props.memberOf ){
        if( this.props.memberOf instanceof Array ){
          memberOf = [(<p>memberOf:</p> )];
          for( i in this.props.memberOf ){
            memberOf.push( ( <div class='memberOf'></div> ) );
          }
        } else {
          memberOf = ( <div class='memberOf'>{this.props.memberOf}</div> );
        }
      }
      var jobTitle;
      if( this.props.jobTitle ){
        if( this.props.jobTitle instanceof Array ){
          jobTitle = [(<p>jobTitle:</p> )];
          for( i in this.props.jobTitle ){
            jobTitle.push( ( <div class='jobTitle'></div> ) );
          }
        } else {
          jobTitle = ( <div class='jobTitle'>{this.props.jobTitle}</div> );
        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [(<p>brand:</p> )];
          for( i in this.props.brand ){
            brand.push( ( <div class='brand'></div> ) );
          }
        } else {
          brand = ( <div class='brand'>{this.props.brand}</div> );
        }
      }
      var familyName;
      if( this.props.familyName ){
        if( this.props.familyName instanceof Array ){
          familyName = [(<p>familyName:</p> )];
          for( i in this.props.familyName ){
            familyName.push( ( <div class='familyName'></div> ) );
          }
        } else {
          familyName = ( <div class='familyName'>{this.props.familyName}</div> );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [(<p>award:</p> )];
          for( i in this.props.award ){
            award.push( ( <div class='award'></div> ) );
          }
        } else {
          award = ( <div class='award'>{this.props.award}</div> );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [(<p>address:</p> )];
          for( i in this.props.address ){
            address.push( ( <PostalAddress props={ this.props.address } /> ) );          }
        } else {
          address = ( <PostalAddress props={ this.props.address } /> );        }
      }
      var duns;
      if( this.props.duns ){
        if( this.props.duns instanceof Array ){
          duns = [(<p>duns:</p> )];
          for( i in this.props.duns ){
            duns.push( ( <div class='duns'></div> ) );
          }
        } else {
          duns = ( <div class='duns'>{this.props.duns}</div> );
        }
      }
      var nationality;
      if( this.props.nationality ){
        if( this.props.nationality instanceof Array ){
          nationality = [(<p>nationality:</p> )];
          for( i in this.props.nationality ){
            nationality.push( ( <Country props={ this.props.nationality } /> ) );          }
        } else {
          nationality = ( <Country props={ this.props.nationality } /> );        }
      }
      var contactPoint;
      if( this.props.contactPoint ){
        if( this.props.contactPoint instanceof Array ){
          contactPoint = [(<p>contactPoint:</p> )];
          for( i in this.props.contactPoint ){
            contactPoint.push( ( <ContactPoint props={ this.props.contactPoint } /> ) );          }
        } else {
          contactPoint = ( <ContactPoint props={ this.props.contactPoint } /> );        }
      }
      var deathDate;
      if( this.props.deathDate ){
        if( this.props.deathDate instanceof Array ){
          deathDate = [(<p>deathDate:</p> )];
          for( i in this.props.deathDate ){
            deathDate.push( ( <div class='deathDate'></div> ) );
          }
        } else {
          deathDate = ( <div class='deathDate'>{this.props.deathDate}</div> );
        }
      }
      var makesOffer;
      if( this.props.makesOffer ){
        if( this.props.makesOffer instanceof Array ){
          makesOffer = [(<p>makesOffer:</p> )];
          for( i in this.props.makesOffer ){
            makesOffer.push( ( <Offer props={ this.props.makesOffer } /> ) );          }
        } else {
          makesOffer = ( <Offer props={ this.props.makesOffer } /> );        }
      }
      var hasPOS;
      if( this.props.hasPOS ){
        if( this.props.hasPOS instanceof Array ){
          hasPOS = [(<p>hasPOS:</p> )];
          for( i in this.props.hasPOS ){
            hasPOS.push( ( <Place props={ this.props.hasPOS } /> ) );          }
        } else {
          hasPOS = ( <Place props={ this.props.hasPOS } /> );        }
      }
      var owns;
      if( this.props.owns ){
        if( this.props.owns instanceof Array ){
          owns = [(<p>owns:</p> )];
          for( i in this.props.owns ){
            owns.push( ( <div class='owns'></div> ) );
          }
        } else {
          owns = ( <div class='owns'>{this.props.owns}</div> );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var naics;
      if( this.props.naics ){
        if( this.props.naics instanceof Array ){
          naics = [(<p>naics:</p> )];
          for( i in this.props.naics ){
            naics.push( ( <div class='naics'></div> ) );
          }
        } else {
          naics = ( <div class='naics'>{this.props.naics}</div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var gender;
      if( this.props.gender ){
        if( this.props.gender instanceof Array ){
          gender = [(<p>gender:</p> )];
          for( i in this.props.gender ){
            gender.push( ( <div class='gender'></div> ) );
          }
        } else {
          gender = ( <div class='gender'>{this.props.gender}</div> );
        }
      }
      var vatID;
      if( this.props.vatID ){
        if( this.props.vatID instanceof Array ){
          vatID = [(<p>vatID:</p> )];
          for( i in this.props.vatID ){
            vatID.push( ( <div class='vatID'></div> ) );
          }
        } else {
          vatID = ( <div class='vatID'>{this.props.vatID}</div> );
        }
      }
      var height;
      if( this.props.height ){
        if( this.props.height instanceof Array ){
          height = [(<p>height:</p> )];
          for( i in this.props.height ){
            height.push( ( <div class='height'></div> ) );
          }
        } else {
          height = ( <div class='height'>{this.props.height}</div> );
        }
      }
      var deathPlace;
      if( this.props.deathPlace ){
        if( this.props.deathPlace instanceof Array ){
          deathPlace = [(<p>deathPlace:</p> )];
          for( i in this.props.deathPlace ){
            deathPlace.push( ( <Place props={ this.props.deathPlace } /> ) );          }
        } else {
          deathPlace = ( <Place props={ this.props.deathPlace } /> );        }
      }
      var follows;
      if( this.props.follows ){
        if( this.props.follows instanceof Array ){
          follows = [(<p>follows:</p> )];
          for( i in this.props.follows ){
            follows.push( ( <Person props={ this.props.follows } /> ) );          }
        } else {
          follows = ( <Person props={ this.props.follows } /> );        }
      }
      var givenName;
      if( this.props.givenName ){
        if( this.props.givenName instanceof Array ){
          givenName = [(<p>givenName:</p> )];
          for( i in this.props.givenName ){
            givenName.push( ( <div class='givenName'></div> ) );
          }
        } else {
          givenName = ( <div class='givenName'>{this.props.givenName}</div> );
        }
      }
      var alumniOf;
      if( this.props.alumniOf ){
        if( this.props.alumniOf instanceof Array ){
          alumniOf = [(<p>alumniOf:</p> )];
          for( i in this.props.alumniOf ){
            alumniOf.push( ( <EducationalOrganization props={ this.props.alumniOf } /> ) );          }
        } else {
          alumniOf = ( <EducationalOrganization props={ this.props.alumniOf } /> );        }
      }
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [(<p>globalLocationNumber:</p> )];
          for( i in this.props.globalLocationNumber ){
            globalLocationNumber.push( ( <div class='globalLocationNumber'></div> ) );
          }
        } else {
          globalLocationNumber = ( <div class='globalLocationNumber'>{this.props.globalLocationNumber}</div> );
        }
      }
      return (<div title='Person' className='Person entity'>
        { sibling }
        { honorificPrefix }
        { weight }
        { sameAs }
        { image }
        { relatedTo }
        { telephone }
        { birthDate }
        { faxNumber }
        { affiliation }
        { additionalName }
        { workLocation }
        { additionalType }
        { children }
        { description }
        { isicV4 }
        { spouse }
        { worksFor }
        { taxID }
        { honorificSuffix }
        { netWorth }
        { mainEntityOfPage }
        { homeLocation }
        { email }
        { seeks }
        { colleague }
        { performerIn }
        { birthPlace }
        { knows }
        { parent }
        { memberOf }
        { jobTitle }
        { brand }
        { familyName }
        { award }
        { alternateName }
        { potentialAction }
        { address }
        { duns }
        { nationality }
        { contactPoint }
        { deathDate }
        { makesOffer }
        { hasPOS }
        { owns }
        { name }
        { naics }
        { url }
        { gender }
        { vatID }
        { height }
        { deathPlace }
        { follows }
        { givenName }
        { alumniOf }
        { globalLocationNumber }
     </div>);
    }
  });
});
