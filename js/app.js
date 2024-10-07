/**
 * Copyright reelyActive 2016-2024
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
    deviceId: "bada55beac04",
    deviceIdType: 3,
    acceleration: [ -0.2, 0.9, 0.3 ],
    amperages: [ 4.8, null, 0.4 ],
    angleOfRotation: 180,
    batteryPercentage: 50,
    batteryVoltage: 3.3,
    distance: 0.5,
    elevation: 152,
    heading: 270,
    heartRate: 60,
    illuminance: 333,
    isButtonPressed: [ false ],
    isContactDetected: [ true ],
    isHealthy: true,
    isLiquidDetected: [ false ],
    isMotionDetected: [ false ],
    levelPercentage: 55,
    magneticField: [ -0.7, 0.3, 0.1 ],
    numberOfOccupants: 7,
    passageCounts: [ 3, 9 ],
    pH: 7.654321,
    position: [ -73.5, 45.5, 88 ],
    pressure: 101325,
    relativeHumidity: 69,
    soundPressure: 42,
    speed: 1.1,
    temperature: 20.23,
    txCount: 123456789,
    unicodeCodePoints: [ 0x1f989 ],
    uptime: 60000,
    voltages: [ 5.1, 4.9, null ],
    timestamp: Date.now()
};
const EXAMPLE_SPATEM = {
    deviceId: "bada55beac04",
    deviceIdType: 3,
    type: "location",
    data: {
      type: "FeatureCollection",
      features: [{
        type: "Feature",
        properties: { isDevicePosition: true,
                      positioningEngine: "External" },
        geometry: {
          type: "Point",
          coordinates: [ -73.57123, 45.50883 ]
        }
      },{
        type: "Feature",
        id: "df52b802f4054bdb815102be1d76f8ab",
        properties: { name: "reelyActive Parc" },
        geometry: {
          type: "Polygon",
          coordinates: [[[ -73.57120, 45.50879 ], [ -73.57113, 45.50894 ],
                         [ -73.57120, 45.50897 ], [ -73.57129, 45.50883 ],
                         [ -73.57120, 45.50879 ]]]
        }
      }
    ]},
    timestamp: Date.now()
};
const EXAMPLE_STATID = {
    languages: [ 'fr', 'en' ],
    name: "cuttlefish.js",
    uri: "https://github.com/reelyactive/cuttlefish",
    version: "2.0.0"
};


const storyTarget = document.querySelector('#storyToRender');
const dynambTarget = document.querySelector('#dynambToRender');
const spatemTarget = document.querySelector('#spatemToRender');
const statidTarget = document.querySelector('#statidToRender');


cuttlefishStory.render(EXAMPLE_STORY, storyTarget);
cuttlefishDynamb.render(EXAMPLE_DYNAMB, dynambTarget);
cuttlefishSpatem.render(EXAMPLE_SPATEM, spatemTarget);
cuttlefishStatid.render(EXAMPLE_STATID, statidTarget);


const storyData = document.querySelector('#storyData');
const dynambData = document.querySelector('#dynambData');
const spatemData = document.querySelector('#spatemData');
const statidData = document.querySelector('#statidData');

storyData.textContent = JSON.stringify(EXAMPLE_STORY, null, 2);
dynambData.textContent = JSON.stringify(EXAMPLE_DYNAMB, null, 2);
spatemData.textContent = JSON.stringify(EXAMPLE_SPATEM, null, 2);
statidData.textContent = JSON.stringify(EXAMPLE_STATID, null, 2);