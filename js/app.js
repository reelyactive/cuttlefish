/**
 * Copyright reelyActive 2016-2023
 * We believe in an open Internet of Things
 */


// Constant definitions
const EXAMPLE_STORY = {
    "@context": { "schema": "https://schema.org/" },
    "@graph": [
      {
        "@id": "product",
        "@type": "schema:Product",
        "schema:name": "cuttlefish.js",
        "schema:manufacturer": {
          "@type": "schema:Organization",
          "schema:name": "reelyActive",
          "schema:url": "https://www.reelyactive.com"
        },
        "schema:image": "https://reelyactive.github.io/cuttlefish/images/cuttlefish-bubble.png",
        "schema:sameAs": [
          "https://github.com/reelyactive/cuttlefish"
        ]
      }
    ]
};
const EXAMPLE_DYNAMB = {
    deviceId: "bada55beaco4",
    deviceIdType: 3,
    acceleration: [ -0.2, 0.9, 0.3 ],
    angleOfRotation: 180,
    batteryPercentage: 50,
    batteryVoltage: 3.3,
    elevation: 152,
    heading: 270,
    heartRate: 60,
    illuminance: 333,
    isButtonPressed: [ false ],
    isContactDetected: [ true ],
    isMotionDetected: [ false ],
    magneticField: [ -0.7, 0.3, 0.1 ],
    position: [ -73.5, 45.5, 88 ],
    pressure: 101325,
    relativeHumidity: 69,
    speed: 1.1,
    temperature: 20.23,
    txCount: 123456789,
    unicodeCodePoints: [ 0x1f989 ],
    uptime: 60000
};
const EXAMPLE_STATID = {
    name: "cuttlefish.js",
    uri: "https://github.com/reelyactive/cuttlefish",
    version: "2.0.0"
};


const storyTarget = document.querySelector('#storyToRender');
const dynambTarget = document.querySelector('#dynambToRender');
const statidTarget = document.querySelector('#statidToRender');


cuttlefishStory.render(EXAMPLE_STORY, storyTarget);
cuttlefishDynamb.render(EXAMPLE_DYNAMB, dynambTarget);
cuttlefishStatid.render(EXAMPLE_STATID, statidTarget);


const storyData = document.querySelector('#storyData');
const dynambData = document.querySelector('#dynambData');
const statidData = document.querySelector('#statidData');

storyData.textContent = JSON.stringify(EXAMPLE_STORY, null, 2);
dynambData.textContent = JSON.stringify(EXAMPLE_DYNAMB, null, 2);
statidData.textContent = JSON.stringify(EXAMPLE_STATID, null, 2);