/* Thing > Organization > EducationalOrganization - An educational organization.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './programmembership', './product', './aggregaterating', './brand', './offer', './imageobject', './event', './person', './ownershipinfo', './place', './demand', './action', './organization', './contactpoint', './creativework', './postaladdress', './review'], function(React, QuantitativeValue, ProgramMembership, Product, AggregateRating, Brand, Offer, ImageObject, Event, Person, OwnershipInfo, Place, Demand, Action, Organization, ContactPoint, CreativeWork, PostalAddress, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var founder;
      if( this.props.founder ){
        if( this.props.founder instanceof Array ){
          founder = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.founder ){
            founder.push( ( <Person {...this.props.founder } /> ) );          }
        } else {
          founder = ( <Person props={ this.props.founder } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var foundingDate;
      if( this.props.foundingDate ){
        if( this.props.foundingDate instanceof Array ){
          foundingDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.foundingDate ){
            foundingDate.push( ( <div data-advice='Put your HTML here. foundingDate is a Date.'></div> ) );
          }
        } else {
            foundingDate = ( <div data-advice='Put your HTML here. foundingDate is a Date.'></div> );
        }
      }
      var telephone;
      if( this.props.telephone ){
        if( this.props.telephone instanceof Array ){
          telephone = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.telephone ){
            telephone.push( ( <div data-advice='Put your HTML here. telephone is a Text.'></div> ) );
          }
        } else {
            telephone = ( <div data-advice='Put your HTML here. telephone is a Text.'></div> );
        }
      }
      var faxNumber;
      if( this.props.faxNumber ){
        if( this.props.faxNumber instanceof Array ){
          faxNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.faxNumber ){
            faxNumber.push( ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> ) );
          }
        } else {
            faxNumber = ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var logo;
      if( this.props.logo ){
        if( this.props.logo instanceof Array ){
          logo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.logo ){
            logo.push( ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> ) );
          }
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
        }
      }
      var event;
      if( this.props.event ){
        if( this.props.event instanceof Array ){
          event = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.event ){
            event.push( ( <Event {...this.props.event } /> ) );          }
        } else {
          event = ( <Event props={ this.props.event } /> );        }
      }
      var isicV4;
      if( this.props.isicV4 ){
        if( this.props.isicV4 instanceof Array ){
          isicV4 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isicV4 ){
            isicV4.push( ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> ) );
          }
        } else {
            isicV4 = ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.review ){
            review.push( ( <Review {...this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var taxID;
      if( this.props.taxID ){
        if( this.props.taxID instanceof Array ){
          taxID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.taxID ){
            taxID.push( ( <div data-advice='Put your HTML here. taxID is a Text.'></div> ) );
          }
        } else {
            taxID = ( <div data-advice='Put your HTML here. taxID is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a URL or
CreativeWork.'></div> );
        }
      }
      var member;
      if( this.props.member ){
        if( this.props.member instanceof Array ){
          member = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.member ){
            member.push( ( <div data-advice='Put your HTML here. member is a Person or
Organization.'></div> ) );
          }
        } else {
            member = ( <div data-advice='Put your HTML here. member is a Person or
Organization.'></div> );
        }
      }
      var foundingLocation;
      if( this.props.foundingLocation ){
        if( this.props.foundingLocation instanceof Array ){
          foundingLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.foundingLocation ){
            foundingLocation.push( ( <Place {...this.props.foundingLocation } /> ) );          }
        } else {
          foundingLocation = ( <Place props={ this.props.foundingLocation } /> );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.location ){
            location.push( ( <div data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> ) );
          }
        } else {
            location = ( <div data-advice='Put your HTML here. location is a PostalAddress or
Place.'></div> );
        }
      }
      var employee;
      if( this.props.employee ){
        if( this.props.employee instanceof Array ){
          employee = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.employee ){
            employee.push( ( <Person {...this.props.employee } /> ) );          }
        } else {
          employee = ( <Person props={ this.props.employee } /> );        }
      }
      var email;
      if( this.props.email ){
        if( this.props.email instanceof Array ){
          email = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.email ){
            email.push( ( <div data-advice='Put your HTML here. email is a Text.'></div> ) );
          }
        } else {
            email = ( <div data-advice='Put your HTML here. email is a Text.'></div> );
        }
      }
      var seeks;
      if( this.props.seeks ){
        if( this.props.seeks instanceof Array ){
          seeks = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.seeks ){
            seeks.push( ( <Demand {...this.props.seeks } /> ) );          }
        } else {
          seeks = ( <Demand props={ this.props.seeks } /> );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var numberOfEmployees;
      if( this.props.numberOfEmployees ){
        if( this.props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.numberOfEmployees ){
            numberOfEmployees.push( ( <QuantitativeValue {...this.props.numberOfEmployees } /> ) );          }
        } else {
          numberOfEmployees = ( <QuantitativeValue props={ this.props.numberOfEmployees } /> );        }
      }
      var subOrganization;
      if( this.props.subOrganization ){
        if( this.props.subOrganization instanceof Array ){
          subOrganization = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.subOrganization ){
            subOrganization.push( ( <Organization {...this.props.subOrganization } /> ) );          }
        } else {
          subOrganization = ( <Organization props={ this.props.subOrganization } /> );        }
      }
      var brand;
      if( this.props.brand ){
        if( this.props.brand instanceof Array ){
          brand = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.brand ){
            brand.push( ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> ) );
          }
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Brand or
Organization.'></div> );
        }
      }
      var owns;
      if( this.props.owns ){
        if( this.props.owns instanceof Array ){
          owns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.owns ){
            owns.push( ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> ) );
          }
        } else {
            owns = ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> );
        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var department;
      if( this.props.department ){
        if( this.props.department instanceof Array ){
          department = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.department ){
            department.push( ( <Organization {...this.props.department } /> ) );          }
        } else {
          department = ( <Organization props={ this.props.department } /> );        }
      }
      var dissolutionDate;
      if( this.props.dissolutionDate ){
        if( this.props.dissolutionDate instanceof Array ){
          dissolutionDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.dissolutionDate ){
            dissolutionDate.push( ( <div data-advice='Put your HTML here. dissolutionDate is a Date.'></div> ) );
          }
        } else {
            dissolutionDate = ( <div data-advice='Put your HTML here. dissolutionDate is a Date.'></div> );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var address;
      if( this.props.address ){
        if( this.props.address instanceof Array ){
          address = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.address ){
            address.push( ( <PostalAddress {...this.props.address } /> ) );          }
        } else {
          address = ( <PostalAddress props={ this.props.address } /> );        }
      }
      var duns;
      if( this.props.duns ){
        if( this.props.duns instanceof Array ){
          duns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.duns ){
            duns.push( ( <div data-advice='Put your HTML here. duns is a Text.'></div> ) );
          }
        } else {
            duns = ( <div data-advice='Put your HTML here. duns is a Text.'></div> );
        }
      }
      var contactPoint;
      if( this.props.contactPoint ){
        if( this.props.contactPoint instanceof Array ){
          contactPoint = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.contactPoint ){
            contactPoint.push( ( <ContactPoint {...this.props.contactPoint } /> ) );          }
        } else {
          contactPoint = ( <ContactPoint props={ this.props.contactPoint } /> );        }
      }
      var makesOffer;
      if( this.props.makesOffer ){
        if( this.props.makesOffer instanceof Array ){
          makesOffer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.makesOffer ){
            makesOffer.push( ( <Offer {...this.props.makesOffer } /> ) );          }
        } else {
          makesOffer = ( <Offer props={ this.props.makesOffer } /> );        }
      }
      var hasPOS;
      if( this.props.hasPOS ){
        if( this.props.hasPOS instanceof Array ){
          hasPOS = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.hasPOS ){
            hasPOS.push( ( <Place {...this.props.hasPOS } /> ) );          }
        } else {
          hasPOS = ( <Place props={ this.props.hasPOS } /> );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action {...this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var naics;
      if( this.props.naics ){
        if( this.props.naics instanceof Array ){
          naics = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.naics ){
            naics.push( ( <div data-advice='Put your HTML here. naics is a Text.'></div> ) );
          }
        } else {
            naics = ( <div data-advice='Put your HTML here. naics is a Text.'></div> );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var memberOf;
      if( this.props.memberOf ){
        if( this.props.memberOf instanceof Array ){
          memberOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.memberOf ){
            memberOf.push( ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> ) );
          }
        } else {
            memberOf = ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> );
        }
      }
      var alumni;
      if( this.props.alumni ){
        if( this.props.alumni instanceof Array ){
          alumni = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alumni ){
            alumni.push( ( <Person {...this.props.alumni } /> ) );          }
        } else {
          alumni = ( <Person props={ this.props.alumni } /> );        }
      }
      var legalName;
      if( this.props.legalName ){
        if( this.props.legalName instanceof Array ){
          legalName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.legalName ){
            legalName.push( ( <div data-advice='Put your HTML here. legalName is a Text.'></div> ) );
          }
        } else {
            legalName = ( <div data-advice='Put your HTML here. legalName is a Text.'></div> );
        }
      }
      var vatID;
      if( this.props.vatID ){
        if( this.props.vatID instanceof Array ){
          vatID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.vatID ){
            vatID.push( ( <div data-advice='Put your HTML here. vatID is a Text.'></div> ) );
          }
        } else {
            vatID = ( <div data-advice='Put your HTML here. vatID is a Text.'></div> );
        }
      }
      var globalLocationNumber;
      if( this.props.globalLocationNumber ){
        if( this.props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.globalLocationNumber ){
            globalLocationNumber.push( ( <div data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> ) );
          }
        } else {
            globalLocationNumber = ( <div data-advice='Put your HTML here. globalLocationNumber is a Text.'></div> );
        }
      }
      return (<div title='EducationalOrganization' className='EducationalOrganization entity'>
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
        { alumni }
        { legalName }
        { vatID }
        { globalLocationNumber }
     </div>);
    }
  });
});
