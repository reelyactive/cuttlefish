/**
 * Copyright reelyActive 2016-2026
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
    angularVelocity: -1.23,
    batteryPercentage: 50,
    batteryVoltage: 3.3,
    carbonDioxideConcentration: 765,
    carbonMonoxideConcentration: 666,
    count: 123,
    counts: [ 1, 2, 3 ],
    distance: 0.5,
    duration: 1000,
    durations: [ 958, 1049 ],
    elevation: 152,
    energy: 21,
    heading: 270,
    heartRate: 60,
    illuminance: 333,
    isButtonPressed: [ false ],
    isButtonPressedCycle: 13,
    isCarbonMonoxideDetected: [ true ],
    isCarbonMonoxideDetectedCycle: 26,
    isContactDetected: [ false ],
    isContactDetectedCycle: 39,
    isGasDetected: [ true ],
    isGasDetectedCycle: 52,
    isHealthy: true,
    isInputDetected: [ false ],
    isInputDetectedCycle: 65,
    isLightDetected: [ true ],
    isLightDetectedCycle: 78,
    isLiquidDetected: [ false ],
    isLiquidDetectedCycle: 91,
    isMotionDetected: [ true ],
    isMotionDetectedCycle: 104,
    isOccupancyDetected: [ false ],
    isOccupancyDetectedCycle: 117,
    isSmokeDetected: [ true ],
    isSmokeDetectedCycle: 130,
    levelPercentage: 55,
    luminousFlux: 750,
    magneticField: [ -0.7, 0.3, 0.1 ],
    methaneConcentration: 1.908,
    nitrogenDioxideConcentration: 174,
    nitrogenOxidesIndex: 99,
    numberOfOccupants: 7,
    numberOfOccupantsCycle: 91,
    numberOfReceivedDevices: 42,
    numberOfStrongestReceivedDevices: 21,
    passageCounts: [ 3, 9 ],
    passageCountsCycle: 104,
    pH: 7.654321,
    "pm1.0": 1.5,
    "pm2.5": 15,
    "pm10": 50,
    position: [ -73.5, 45.5, 88 ],
    power: 1600,
    pressure: 101325,
    raw: "0123456789abcdef",
    relativeHumidity: 69,
    soundPressure: 42,
    speed: 1.1,
    temperature: 20.23,
    text: "Interoperability!",
    txCount: 123456789,
    txCycle: 117,
    unicodeCodePoints: [ 0x1f989 ],
    uptime: 60000,
    velocityOverall: [ 0.0035, 0.0014, 0.0111 ],
    volatileOrganicCompoundsConcentration: 0.123,
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
    deviceType: "Badge",
    firmwareVersion: "1.2.3",
    hardwareVersion: "4",
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