/**
 * Copyright reelyActive 2016-2019
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
        "schema:image": "https://www.reelyactive.com/stories/atrium/320x320.jpg"
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
