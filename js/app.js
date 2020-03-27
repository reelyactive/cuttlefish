/**
 * Copyright reelyActive 2016-2020
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


// DOM elements
let storyInput = document.querySelector('#story');
let target = document.querySelector('#target');

// Update the preset story
function updatePreset() {
  switch(preset.value) {
    case 'person':
      storyInput.value = JSON.stringify(EXAMPLE_PERSON, null, 2);
      break;
    case 'product':
      storyInput.value = JSON.stringify(EXAMPLE_PRODUCT, null, 2);
      break;
    case 'place':
      storyInput.value = JSON.stringify(EXAMPLE_PLACE, null, 2);
      break;
    case 'organization':
      storyInput.value = JSON.stringify(EXAMPLE_ORGANIZATION, null, 2);
      break;
    default:
      storyInput.value = '{ }';
  }
}

// Remove all children from the given node
function removeAllChildren(node) {
  while(node.firstChild) {
    node.removeChild(target.firstChild);
  }
}

// Handle render button click
renderButton.addEventListener('click', function() {
  let story = JSON.parse(storyInput.value);

  removeAllChildren(target);
  cuttlefish.render(story, target);
});

// Handle render button click
preset.addEventListener('click', updatePreset);

// The code that runs on startup
storyInput.value = JSON.stringify(EXAMPLE_PERSON, null, 2);

// For demonstration of renderAsTabs()
let story1 = {
  "@context": {
    "schema": "https://schema.org/"
  },
  "@graph": [
    {
      "@id": "person",
      "@type": "schema:Person",
      "schema:name": "Barnowl",
      "schema:jobTitle": "Software Mascot",
      "schema:image": "https://www.reelyactive.com/stories/mascots/barnowl/320x320.png"
    }
  ]
};
let story2 = {
  "@context": {
    "schema": "https://schema.org/"
  },
  "@graph": [
    {
      "@id": "product",
      "@type": "schema:Product",
      "schema:name": "Minew E8",
      "schema:image": "https://sniffypedia.org/Organization/Shenzhen_Minew_Technologies_Co_Ltd/240x240.png"
    }
  ]
};
let stories = [ story1, story2 ];
let data = {
  batteryVoltage: 3.0,
  temperature: 21.0,
  uptime: 123000,
  timestamp: 123456789
};
let associations = {
  url: "https://github.com/reelyactive/barnowl/",
  tags: [ 'mascot' ],
  directory: null,
  position: null
};
let raddec = {
  transmitterId: "aabbccddeeff",
  transmitterIdType: 2,
  rssiSignature: [{
      receiverId: "001bc50940810000",
      receiverIdType: 1,
      rssi: -69,
      numberOfDecodings: 3
  }],
  packets: [],
  timestamp: 1343392496789
};


function update() {
  let timestamp = Date.now();

  if(Math.random() > 0.5) {
    data.batteryVoltage += 0.01;
    data.temperature += 0.02;
    raddec.rssiSignature[0].rssi += 1;
  }
  else {
    data.batteryVoltage -= 0.01;
    data.temperature -= 0.02;
    raddec.rssiSignature[0].rssi -= 1;
  }
  data.uptime += 1000;
  data.timestamp = timestamp;
  raddec.timestamp = timestamp;

  cuttlefish.renderAsTabs(targetAsTabs, stories, [ data ], associations,
                          [ raddec ], {});
}

setInterval(update, 1000);
