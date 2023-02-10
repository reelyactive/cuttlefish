cuttlefish
==========

__cuttlefish__ facilitates human-friendly HTML rendering of machine-friendly:
- JSON-LD & Schema.org ("story" data)
- dynamb (dynamic ambient data)
- statid (static identifier data)

__cuttlefish__ is lightweight client-side JavaScript that runs in the browser.


Hello cuttlefish!
-----------------

Include in an _index.html_ file the required __cuttlefish-x__ scripts, the Font Awesome 5 icon set, and divs in which each can render the data:

```html
<html>
  <head></head>
  <body>
    <div id="storyToRender"></div>
    <div id="dynambToRender"></div>
    <div id="statidToRender"></div>

    <script defer src="js/fontawesome-reelyactive.min.js"></script>
    <script src="js/cuttlefish-story.js"></script>
    <script src="js/cuttlefish-dynamb.js"></script>
    <script src="js/cuttlefish-statid.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

Include in a _js/app.js_ the code to render the given story, dynamb and/or statid data in the _xToRender_ divs:

```javascript
let story = { /* Likely retrieved by cormorant.js */ };
let storyTarget = document.querySelector('#storyToRender');
let storyOptions = {};

cuttlefishStory.render(story, storyTarget, storyOptions);

let dynamb = { /* Likely consumed from Pareto Anywhere */ };
let dynambTarget = document.querySelector('#dynambToRender');
let dynambOptions = {};

cuttlefishDynamb.render(dynamb, dynambTarget, dynambOptions);

let statid = { /* Likely consumed from Pareto Anywhere */ };
let statidTarget = document.querySelector('#statidToRender');
let statidOptions = {};

cuttlefishStatid.render(statid, statidTarget, statidOptions);
```

Open the _index.html_ file in a web browser to see the story, dynamb and/or statid data rendered in a human-readable way.


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

### cuttlefish-statid.js

`cuttlefishStatid.render(statid, target, options);`


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


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.

[![Known Vulnerabilities](https://snyk.io/test/github/reelyactive/cuttlefish/badge.svg)](https://snyk.io/test/github/reelyactive/cuttlefish)


License
-------

MIT License

Copyright (c) 2016-2023 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
