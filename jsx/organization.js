/* Thing > Organization - An organization such as a school, NGO, corporation, club, etc.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './quantitativevalue', './programmembership', './product', './person', './brand', './offer', './imageobject', './event', './aggregaterating', './ownershipinfo', './place', './demand', './action', './organization', './postaladdress', './creativework', './contactpoint', './review'], function(React, QuantitativeValue, ProgramMembership, Product, Person, Brand, Offer, ImageObject, Event, AggregateRating, OwnershipInfo, Place, Demand, Action, Organization, PostalAddress, CreativeWork, ContactPoint, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var founder;
      if( this.props.founder ){
        if( this.props.founder instanceof Array ){
          founder = [(<p>founder:</p> )];
          for( i in this.props.founder ){
            founder.push( ( <Person props={ this.props.founder } /> ) );          }
        } else {
          founder = ( <Person props={ this.props.founder } /> );        }
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
      var foundingDate;
      if( this.props.foundingDate ){
        if( this.props.foundingDate instanceof Array ){
          foundingDate = [(<p>foundingDate:</p> )];
          for( i in this.props.foundingDate ){
            foundingDate.push( ( <div class='foundingDate'></div> ) );
          }
        } else {
          foundingDate = ( <div class='foundingDate'>{this.props.foundingDate}</div> );
        }
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
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(<p>aggregateRating:</p> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating props={ this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
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
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [(<p>logo:</p> )];
          for( i in this.props.logo ){
            logo.push( ( <div class='logo'></div> ) );
          }
        } else {
          logo = ( <div class='logo'>{this.props.logo}</div> );
        }
      }
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [(<p>event:</p> )];
          for( i in this.props.event ){
            event.push( ( <Event props={ this.props.event } /> ) );          }
        } else {
          event = ( <Event props={ this.props.event } /> );        }
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
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(<p>review:</p> )];
          for( i in this.props.review ){
            review.push( ( <Review props={ this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
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
      var member;
      if( this.props.member ){
        if( this.props.member instanceof Array ){
          member = [(<p>member:</p> )];
          for( i in this.props.member ){
            member.push( ( <div class='member'></div> ) );
          }
        } else {
          member = ( <div class='member'>{this.props.member}</div> );
        }
      }
      var foundingLocation;
      if( this.props.foundingLocation ){
        if( this.props.foundingLocation instanceof Array ){
          foundingLocation = [(<p>foundingLocation:</p> )];
          for( i in this.props.foundingLocation ){
            foundingLocation.push( ( <Place props={ this.props.foundingLocation } /> ) );          }
        } else {
          foundingLocation = ( <Place props={ this.props.foundingLocation } /> );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [(<p>location:</p> )];
          for( i in this.props.location ){
            location.push( ( <div class='location'></div> ) );
          }
        } else {
          location = ( <div class='location'>{this.props.location}</div> );
        }
      }
      var employee;
      if( this.props.employee ){
        if( this.props.employee instanceof Array ){
          employee = [(<p>employee:</p> )];
          for( i in this.props.employee ){
            employee.push( ( <Person props={ this.props.employee } /> ) );          }
        } else {
          employee = ( <Person props={ this.props.employee } /> );        }
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
      var numberOfEmployees;
      if( this.props.numberOfEmployees ){
        if( this.props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [(<p>numberOfEmployees:</p> )];
          for( i in this.props.numberOfEmployees ){
            numberOfEmployees.push( ( <QuantitativeValue props={ this.props.numberOfEmployees } /> ) );          }
        } else {
          numberOfEmployees = ( <QuantitativeValue props={ this.props.numberOfEmployees } /> );        }
      }
      var subOrganization;
      if( this.props.subOrganization ){
        if( this.props.subOrganization instanceof Array ){
          subOrganization = [(<p>subOrganization:</p> )];
          for( i in this.props.subOrganization ){
            subOrganization.push( ( <Organization props={ this.props.subOrganization } /> ) );          }
        } else {
          subOrganization = ( <Organization props={ this.props.subOrganization } /> );        }
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
      var department;
      if( this.props.department ){
        if( this.props.department instanceof Array ){
          department = [(<p>department:</p> )];
          for( i in this.props.department ){
            department.push( ( <Organization props={ this.props.department } /> ) );          }
        } else {
          department = ( <Organization props={ this.props.department } /> );        }
      }
      var dissolutionDate;
      if( this.props.dissolutionDate ){
        if( this.props.dissolutionDate instanceof Array ){
          dissolutionDate = [(<p>dissolutionDate:</p> )];
          for( i in this.props.dissolutionDate ){
            dissolutionDate.push( ( <div class='dissolutionDate'></div> ) );
          }
        } else {
          dissolutionDate = ( <div class='dissolutionDate'>{this.props.dissolutionDate}</div> );
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
      var contactPoint;
      if( this.props.contactPoint ){
        if( this.props.contactPoint instanceof Array ){
          contactPoint = [(<p>contactPoint:</p> )];
          for( i in this.props.contactPoint ){
            contactPoint.push( ( <ContactPoint props={ this.props.contactPoint } /> ) );          }
        } else {
          contactPoint = ( <ContactPoint props={ this.props.contactPoint } /> );        }
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
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
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
      var legalName;
      if( this.props.legalName ){
        if( this.props.legalName instanceof Array ){
          legalName = [(<p>legalName:</p> )];
          for( i in this.props.legalName ){
            legalName.push( ( <div class='legalName'></div> ) );
          }
        } else {
          legalName = ( <div class='legalName'>{this.props.legalName}</div> );
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
      return (<div title='Organization' className='Organization entity'>
        { founder }
        { sameAs }
        { image }
        { foundingDate }
        { telephone }
        { faxNumber }
        { aggregateRating }
        { additionalType }
        { logo }
        { event }
        { isicV4 }
        { review }
        { taxID }
        { mainEntityOfPage }
        { member }
        { foundingLocation }
        { location }
        { employee }
        { email }
        { seeks }
        { description }
        { numberOfEmployees }
        { subOrganization }
        { brand }
        { owns }
        { award }
        { department }
        { dissolutionDate }
        { alternateName }
        { address }
        { duns }
        { contactPoint }
        { makesOffer }
        { hasPOS }
        { potentialAction }
        { name }
        { naics }
        { url }
        { memberOf }
        { legalName }
        { vatID }
        { globalLocationNumber }
     </div>);
    }
  });
});
