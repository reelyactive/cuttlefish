/**
 * Copyright reelyActive 2016-2021
 * We believe in an open Internet of Things
 */


// Constant definitions
const EXAMPLE_PERSON = {
    "@context": { "schema": "https://schema.org/" },
    "@graph": [
      {
        "@id": "person",
        "@type": "schema:Person",
        "schema:name": "Cuttlefish",
        "schema:jobTitle": "Software Mascot",
        "schema:worksFor": {
          "@type": "schema:Organization",
          "schema:name": "reelyActive",
          "schema:url": "https://www.reelyactive.com"
        },
        "schema:image": "https://www.reelyactive.com/stories/mascots/cuttlefish/320x320.png",
        "schema:sameAs": [
          "https://github.com/reelyactive/cuttlefish/"
        ]
      }
    ]
};
const EXAMPLE_PRODUCT = {
    "@context": { "schema": "https://schema.org/" },
    "@graph": [
      {
        "@id": "product",
        "@type": "schema:Product",
        "schema:name": "RA-R436",
        "schema:manufacturer": {
          "@type": "schema:Organization",
          "schema:name": "reelyActive",
          "schema:url": "https://www.reelyactive.com"
        },
        "schema:image": "https://sniffypedia.org/Product/reelyActive_RA-R436/240x240.jpg",
        "schema:sameAs": [
          "https://shop.reelyactive.com/products/ra-r436"
        ]
      }
    ]
};
const EXAMPLE_PLACE = {
    "@context": { "schema": "https://schema.org/" },
    "@graph": [
      {
        "@id": "place",
        "@type": "schema:Place",
        "schema:name": "Atrium",
        "schema:maximumAttendeeCapacity": 250,
        "schema:image": "https://www.reelyactive.com/stories/atrium/320x320.jpg"
      }
    ]
};
const EXAMPLE_ORGANIZATION = {
    "@context": { "schema": "https://schema.org/" },
    "@graph": [
      {
        "@id": "organization",
        "@type": "schema:Organization",
        "schema:name": "reelyActive",
        "schema:logo": "https://www.reelyactive.com/images/reelyActive-logo-square.png",
        "schema:sameAs": [
          "https://www.reelyactive.com"
        ]
      }
    ]
};