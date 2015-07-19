/* Thing > Organization > EducationalOrganization - An educational organization.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './quantitativevalue', './programmembership', './product', './aggregaterating', './brand', './offer', './imageobject', './event', './person', './ownershipinfo', './place', './demand', './action', './organization', './contactpoint', './creativework', './postaladdress', './review'], function(React, QuantitativeValue, ProgramMembership, Product, AggregateRating, Brand, Offer, ImageObject, Event, Person, OwnershipInfo, Place, Demand, Action, Organization, ContactPoint, CreativeWork, PostalAddress, Review){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var founder;
      if( props.founder ){
        if( props.founder instanceof Array ){
          founder = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.founder ){
            founder.push( ( <Person {...props.founder } /> ) );          }
        } else {
          founder = ( <Person props={ props.founder } /> );        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var foundingDate;
      if( props.foundingDate ){
        if( props.foundingDate instanceof Array ){
          foundingDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.foundingDate ){
            foundingDate.push( ( <div data-advice='Put your HTML here. foundingDate is a Date.'></div> ) );
          }
        } else {
            foundingDate = ( <div data-advice='Put your HTML here. foundingDate is a Date.'></div> );
        }
      }
      var telephone;
      if( props.telephone ){
        if( props.telephone instanceof Array ){
          telephone = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.telephone ){
            telephone.push( ( <div data-advice='Put your HTML here. telephone is a Text.'></div> ) );
          }
        } else {
            telephone = ( <div data-advice='Put your HTML here. telephone is a Text.'></div> );
        }
      }
      var faxNumber;
      if( props.faxNumber ){
        if( props.faxNumber instanceof Array ){
          faxNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.faxNumber ){
            faxNumber.push( ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> ) );
          }
        } else {
            faxNumber = ( <div data-advice='Put your HTML here. faxNumber is a Text.'></div> );
        }
      }
      var aggregateRating;
      if( props.aggregateRating ){
        if( props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating {...props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ props.aggregateRating } /> );        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var logo;
      if( props.logo ){
        if( props.logo instanceof Array ){
          logo = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.logo ){
            logo.push( ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> ) );
          }
        } else {
            logo = ( <div data-advice='Put your HTML here. logo is a URL or
ImageObject.'></div> );
        }
      }
      var event;
      if( props.event ){
        if( props.event instanceof Array ){
          event = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.event ){
            event.push( ( <Event {...props.event } /> ) );          }
        } else {
          event = ( <Event props={ props.event } /> );        }
      }
      var isicV4;
      if( props.isicV4 ){
        if( props.isicV4 instanceof Array ){
          isicV4 = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.isicV4 ){
            isicV4.push( ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> ) );
          }
        } else {
            isicV4 = ( <div data-advice='Put your HTML here. isicV4 is a Text.'></div> );
        }
      }
      var review;
      if( props.review ){
        if( props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.review ){
            review.push( ( <Review {...props.review } /> ) );          }
        } else {
          review = ( <Review props={ props.review } /> );        }
      }
      var taxID;
      if( props.taxID ){
        if( props.taxID instanceof Array ){
          taxID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.taxID ){
            taxID.push( ( <div data-advice='Put your HTML here. taxID is a Text.'></div> ) );
          }
        } else {
            taxID = ( <div data-advice='Put your HTML here. taxID is a Text.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var member;
      if( props.member ){
        if( props.member instanceof Array ){
          member = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.member ){
            member.push( ( <div data-advice='Put your HTML here. member is a Organization or
Person.'></div> ) );
          }
        } else {
            member = ( <div data-advice='Put your HTML here. member is a Organization or
Person.'></div> );
        }
      }
      var foundingLocation;
      if( props.foundingLocation ){
        if( props.foundingLocation instanceof Array ){
          foundingLocation = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.foundingLocation ){
            foundingLocation.push( ( <Place {...props.foundingLocation } /> ) );          }
        } else {
          foundingLocation = ( <Place props={ props.foundingLocation } /> );        }
      }
      var location;
      if( props.location ){
        if( props.location instanceof Array ){
          location = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.location ){
            location.push( ( <div data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> ) );
          }
        } else {
            location = ( <div data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> );
        }
      }
      var employee;
      if( props.employee ){
        if( props.employee instanceof Array ){
          employee = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.employee ){
            employee.push( ( <Person {...props.employee } /> ) );          }
        } else {
          employee = ( <Person props={ props.employee } /> );        }
      }
      var email;
      if( props.email ){
        if( props.email instanceof Array ){
          email = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.email ){
            email.push( ( <div data-advice='Put your HTML here. email is a Text.'></div> ) );
          }
        } else {
            email = ( <div data-advice='Put your HTML here. email is a Text.'></div> );
        }
      }
      var seeks;
      if( props.seeks ){
        if( props.seeks instanceof Array ){
          seeks = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.seeks ){
            seeks.push( ( <Demand {...props.seeks } /> ) );          }
        } else {
          seeks = ( <Demand props={ props.seeks } /> );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var numberOfEmployees;
      if( props.numberOfEmployees ){
        if( props.numberOfEmployees instanceof Array ){
          numberOfEmployees = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.numberOfEmployees ){
            numberOfEmployees.push( ( <QuantitativeValue {...props.numberOfEmployees } /> ) );          }
        } else {
          numberOfEmployees = ( <QuantitativeValue props={ props.numberOfEmployees } /> );        }
      }
      var subOrganization;
      if( props.subOrganization ){
        if( props.subOrganization instanceof Array ){
          subOrganization = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.subOrganization ){
            subOrganization.push( ( <Organization {...props.subOrganization } /> ) );          }
        } else {
          subOrganization = ( <Organization props={ props.subOrganization } /> );        }
      }
      var brand;
      if( props.brand ){
        if( props.brand instanceof Array ){
          brand = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.brand ){
            brand.push( ( <div data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> ) );
          }
        } else {
            brand = ( <div data-advice='Put your HTML here. brand is a Organization or
Brand.'></div> );
        }
      }
      var owns;
      if( props.owns ){
        if( props.owns instanceof Array ){
          owns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.owns ){
            owns.push( ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> ) );
          }
        } else {
            owns = ( <div data-advice='Put your HTML here. owns is a OwnershipInfo or
Product.'></div> );
        }
      }
      var award;
      if( props.award ){
        if( props.award instanceof Array ){
          award = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.award ){
            award.push( ( <div data-advice='Put your HTML here. award is a Text.'></div> ) );
          }
        } else {
            award = ( <div data-advice='Put your HTML here. award is a Text.'></div> );
        }
      }
      var department;
      if( props.department ){
        if( props.department instanceof Array ){
          department = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.department ){
            department.push( ( <Organization {...props.department } /> ) );          }
        } else {
          department = ( <Organization props={ props.department } /> );        }
      }
      var dissolutionDate;
      if( props.dissolutionDate ){
        if( props.dissolutionDate instanceof Array ){
          dissolutionDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.dissolutionDate ){
            dissolutionDate.push( ( <div data-advice='Put your HTML here. dissolutionDate is a Date.'></div> ) );
          }
        } else {
            dissolutionDate = ( <div data-advice='Put your HTML here. dissolutionDate is a Date.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var address;
      if( props.address ){
        if( props.address instanceof Array ){
          address = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.address ){
            address.push( ( <PostalAddress {...props.address } /> ) );          }
        } else {
          address = ( <PostalAddress props={ props.address } /> );        }
      }
      var duns;
      if( props.duns ){
        if( props.duns instanceof Array ){
          duns = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.duns ){
            duns.push( ( <div data-advice='Put your HTML here. duns is a Text.'></div> ) );
          }
        } else {
            duns = ( <div data-advice='Put your HTML here. duns is a Text.'></div> );
        }
      }
      var contactPoint;
      if( props.contactPoint ){
        if( props.contactPoint instanceof Array ){
          contactPoint = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.contactPoint ){
            contactPoint.push( ( <ContactPoint {...props.contactPoint } /> ) );          }
        } else {
          contactPoint = ( <ContactPoint props={ props.contactPoint } /> );        }
      }
      var makesOffer;
      if( props.makesOffer ){
        if( props.makesOffer instanceof Array ){
          makesOffer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.makesOffer ){
            makesOffer.push( ( <Offer {...props.makesOffer } /> ) );          }
        } else {
          makesOffer = ( <Offer props={ props.makesOffer } /> );        }
      }
      var hasPOS;
      if( props.hasPOS ){
        if( props.hasPOS instanceof Array ){
          hasPOS = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.hasPOS ){
            hasPOS.push( ( <Place {...props.hasPOS } /> ) );          }
        } else {
          hasPOS = ( <Place props={ props.hasPOS } /> );        }
      }
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      var naics;
      if( props.naics ){
        if( props.naics instanceof Array ){
          naics = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.naics ){
            naics.push( ( <div data-advice='Put your HTML here. naics is a Text.'></div> ) );
          }
        } else {
            naics = ( <div data-advice='Put your HTML here. naics is a Text.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var memberOf;
      if( props.memberOf ){
        if( props.memberOf instanceof Array ){
          memberOf = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.memberOf ){
            memberOf.push( ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> ) );
          }
        } else {
            memberOf = ( <div data-advice='Put your HTML here. memberOf is a Organization or
ProgramMembership.'></div> );
        }
      }
      var alumni;
      if( props.alumni ){
        if( props.alumni instanceof Array ){
          alumni = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alumni ){
            alumni.push( ( <Person {...props.alumni } /> ) );          }
        } else {
          alumni = ( <Person props={ props.alumni } /> );        }
      }
      var legalName;
      if( props.legalName ){
        if( props.legalName instanceof Array ){
          legalName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.legalName ){
            legalName.push( ( <div data-advice='Put your HTML here. legalName is a Text.'></div> ) );
          }
        } else {
            legalName = ( <div data-advice='Put your HTML here. legalName is a Text.'></div> );
        }
      }
      var vatID;
      if( props.vatID ){
        if( props.vatID instanceof Array ){
          vatID = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.vatID ){
            vatID.push( ( <div data-advice='Put your HTML here. vatID is a Text.'></div> ) );
          }
        } else {
            vatID = ( <div data-advice='Put your HTML here. vatID is a Text.'></div> );
        }
      }
      var globalLocationNumber;
      if( props.globalLocationNumber ){
        if( props.globalLocationNumber instanceof Array ){
          globalLocationNumber = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.globalLocationNumber ){
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
