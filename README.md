cuttlefish
==========

__cuttlefish__ facilitates human-friendly HTML rendering of machine-friendly:
- JSON-LD & Schema.org ("story" data)
- [dynamb](https://reelyactive.github.io/diy/cheatsheet/#dynamb) (dynamic ambient data)
- [spatem](https://reelyactive.github.io/diy/cheatsheet/#spatem) (spatial-temporal data)
- statid (static identifier data)

![Overview of cuttlefish.js](https://reelyactive.github.io/cuttlefish/images/overview.png)

__cuttlefish__ is lightweight client-side JavaScript that runs in the browser.  See a live demo using the code in this repository at: [reelyactive.github.io/cuttlefish](https://reelyactive.github.io/cuttlefish)


Hello cuttlefish!
-----------------

Include in an _index.html_ file the required __cuttlefish-x__ scripts, the Font Awesome 5 icon set, and divs in which each can render the data:

```html
<html>
  <head></head>
  <body>
    <div id="storyToRender"></div>
    <div id="dynambToRender"></div>
    <div id="spatemToRender"></div>
    <div id="statidToRender"></div>

    <script defer src="js/fontawesome-reelyactive.min.js"></script>
    <script src="js/cuttlefish-story.js"></script>
    <script src="js/cuttlefish-dynamb.js"></script>
    <script src="js/cuttlefish-spatem.js"></script>
    <script src="js/cuttlefish-statid.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

Include in a _js/app.js_ the code to render the given story, dynamb, spatem and/or statid data in the _xToRender_ divs:

```javascript
let story = { /* Likely retrieved by cormorant.js */ };
let storyTarget = document.querySelector('#storyToRender');
let storyOptions = {};

cuttlefishStory.render(story, storyTarget, storyOptions);

let dynamb = { /* Likely consumed from Pareto Anywhere */ };
let dynambTarget = document.querySelector('#dynambToRender');
let dynambOptions = {};

cuttlefishDynamb.render(dynamb, dynambTarget, dynambOptions);

let spatem = { /* Likely consumed from Pareto Anywhere */ };
let spatemTarget = document.querySelector('#spatemToRender');
let spatemOptions = {};

cuttlefishSpatem.render(spatem, spatemTarget, spatemOptions);

let statid = { /* Likely consumed from Pareto Anywhere */ };
let statidTarget = document.querySelector('#statidToRender');
let statidOptions = {};

cuttlefishStatid.render(statid, statidTarget, statidOptions);
```

Open the _index.html_ file in a web browser to see the story, dynamb, spatem and/or statid data rendered in a human-readable way.


Supported functions
-------------------

### cuttlefish-story.js

`cuttlefishStory.render(story, target, options);`

`cuttlefishStory.determineImageUrl(story);`

`cuttlefishStory.determineTitle(story);`

### cuttlefish-dynamb.js

`cuttlefishDynamb.render(dynamb, target, options);`

`cuttlefishDynamb.renderIcon(property, target, options);`

`cuttlefishDynamb.renderValue(property, data, target, options);`

### cuttlefish-spatem.js

`cuttlefishSpatem.render(statid, target, options);`

### cuttlefish-statid.js

`cuttlefishStatid.render(statid, target, options);`

### cuttlefish-tables.js

Provides a __ContinuousDataTable__ class which updates automatically once instantiated:

```html
<table id="continuousData"></table>
```

```javascript
let elementId = document.querySelector('#continuousData');
let devices = beaver.devices; // See beaver.js
let options = { updateMilliseconds: 15000,
                numberOfSamples: 4,
                propertiesToDisplay: [ 'temperature', 'relativeHumidity',
                                       'illuminance', 'batteryPercentage' ]
};

let continuousDataTable = new ContinuousDataTable(elementId, devices, options);
```

Provides a __DiscreteDataTable__ class which takes dynamb events via its _handleDynamb()_ function, and updates automatically once instantiated:

```html
<table id="discreteData"></table>
```

```javascript
let elementId = document.querySelector('#discreteData');
let options = { updateMilliseconds: 5000,
                maxRows: 8,
                isClockDisplayed: false,
                digitalTwins: cormorant.digitalTwins, // See cormorant.js
                propertiesToDisplay: [ 'isButtonPressed', 'isContactDetected',
                                       'isMotionDetected', 'unicodeCodePoints' ]
};

let discreteDataTable = new DiscreteDataTable(elementId, options);

// See beaver.js
beaver.on('dynamb', (dynamb) => { discreteDataTable.handleDynamb(dynamb); });

// To update the device name after fetching a digital twin with cormorant.js:
discreteDataTable.updateDigitalTwin(deviceSignature, digitalTwin);
```

Provides a __DevicesTable__ class which displays devices filtered from an optional beaver instance, and/or inserted/removed via its _insertDevice()_ and _removeDevice()_ functions, and updates automatically once instantiated:

```html
<table id="devicesTable"></table>
```

```javascript
let elementId = document.querySelector('#devicesTable');
let options = { beaver: beaver, // See beaver.js
                maxRows: 12,
                isClockDisplayed: false,
                digitalTwins: cormorant.digitalTwins, // See cormorant.js
                isFilteredDevice: function(device) { return true; }
};

let devicesTable = new DevicesTable(elementId, options);

// To update the device name after fetching a digital twin with cormorant.js:
devicesTable.updateDigitalTwin(deviceSignature, digitalTwin);

// To receive notification of a user selection of a device in the table:
devicesTable.on('selection', (deviceSignature) => { /* Selection handler */ });
```


![cuttlefish logo](https://reelyactive.github.io/cuttlefish/images/cuttlefish-bubble.png)


What's in a name?
-----------------

The cuttlefish isn't actually a fish, but rather a cephalopod, which is a class of marine animals remarkable for how quickly and diversely they can communicate visually.  [As per Wikipedia](https://en.wikipedia.org/wiki/Cuttlefish#Communication): "flamboyant cuttlefish use between 42 and 75 chromatic, seven textural, 14 postural, and seven locomotor elements" to communicate.

Given that cuttlefish.js communicates machine-readable data as human-readable visual information, that unprecedented natural vocabulary sets some serious expectations for UI/UX design!  Seriously.  Read [Jaron Lanier's 2006 article in Discover Magazine](http://discovermagazine.com/2006/apr/cephalopod-morphing/).

In its client-side habitat, cuttlefish.js will consume and render the JSON-LD fetched by [cormorant.js](https://github.com/reelyactive/cormorant).  And while you may suspect that cuttlefish and cormorants have nothing more in common than the fact that the pupil of the former resembles the distinct wing shape of the latter, check out [this video](https://youtu.be/OQq__WdJBMw?t=2m40s) we found on the Internets.  Yeah, if that skate were a [beaver](https://github.com/reelyactive/beaver)...

Speaking of videos, we'd be remiss not to share with you Ze Frank's [True Facts about the Cuttlefish](https://youtu.be/GDwOi7HpHtQ).  May we also suggest an images search for "cute baby cuttlefish".  You're welcome.


Project History
---------------

__cuttlefish__ v2.0.0 was released in February 2023.

__cuttlefish.js__ v1.0.0 was released in July 2019, superseding all earlier versions, the latest of which remains available in the [release-0.1 branch](https://github.com/reelyactive/cuttlefish/tree/release-0.1).


Modular Architecture
--------------------

__cuttlefish.js__ is easily combined with the following complementary client-side modules:
- [beaver.js](https://github.com/reelyactive/beaver)
- [cormorant.js](https://github.com/reelyactive/cormorant)
- [charlotte.js](https://github.com/reelyactive/charlotte)

Learn more about the [reelyActive Open Source Software packages](https://reelyactive.github.io/diy/oss-packages/), all of which are bundled together as [Pareto Anywhere](https://github.com/reelyactive/pareto-anywhere) open source IoT middleware.


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.


License
-------

MIT License

Copyright (c) 2016-2025 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
