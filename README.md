cuttlefish
==========


Human-friendly HTML rendering of machine-friendly JSON-LD.


In the scheme of Things (pun intended)
--------------------------------------

The [beaver.js](https://github.com/reelyactive/beaver), [cormorant.js](https://github.com/reelyactive/cormorant) and __cuttlefish.js__ modules work together as a unit.  See our [dashboard-template-angular](https://github.com/reelyactive/dashboard-template-angular) for a minimal implementation.


![cuttlefish logo](http://reelyactive.github.io/cuttlefish/images/cuttlefish-bubble.png)


What's in a name?
-----------------

The cuttlefish isn't actually a fish, but rather a cephalopod, which is a class of marine animals remarkable for how quickly and diversely they can communicate visually.  [As per Wikipedia](https://en.wikipedia.org/wiki/Cuttlefish#Communication): "flamboyant cuttlefish use between 42 and 75 chromatic, seven textural, 14 postural, and seven locomotor elements" to communicate.

Given that cuttlefish.js communicates machine-readable data as human-readable visual information, that unprecedented natural vocabulary sets some serious expectations for UI/UX design!  Seriously.  Read [Jaron Lanier's 2006 article in Discover Magazine](http://discovermagazine.com/2006/apr/cephalopod-morphing/).

In its client-side habitat, cuttlefish.js will consume and render the JSON-LD fetched by [cormorant.js](https://github.com/reelyactive/cormorant).  And while you may suspect that cuttlefish and cormorants have nothing more in common than the fact that the pupil of the former resembles the distinct wing shape of the latter, check out [this video](https://youtu.be/OQq__WdJBMw?t=2m40s) we found on the Internets.  Yeah, if that skate were a [beaver](https://github.com/reelyactive/beaver)...

Speaking of videos, we'd be remiss not to share with you Ze Frank's [True Facts about the Cuttlefish](https://youtu.be/GDwOi7HpHtQ).  May we also suggest an images search for "cute baby cuttlefish".  You're welcome.


Hello cuttlefish
----------------

The easiest way to familiarise yourself with cuttlefish.js is to experiment with the code in the [gh-pages branch](https://github.com/reelyactive/cuttlefish/tree/gh-pages), of which there's a live demo [here](http://reelyactive.github.io/cuttlefish/).

This directory contains the latest versions of cuttlefish.js, bubble.html and bubble.css.  Below is the description of a minimal implementation.

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style/bubble.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js"></script>
    <script type="text/javascript" src="js/cuttlefish.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </head>
  <body ng-app="appName">
    <span ng-init='sourcejson =
      {
        "@context": {
          "schema": "http://schema.org/"
        },
        "@graph": [
          {
            "@id": "person",
            "@type": "schema:Person",
            "schema:givenName": "Barn",
            "schema:familyName": "Owl",
            "schema:worksFor": "reelyActive",
            "schema:jobTitle": "Mascot",
            "schema:image": "http://reelyactive.com/images/barnowl.jpg"
          }
        ]
      }
    '></span>
    <bubble json="sourcejson" size="240px"></bubble>
  </body>
</html>
```

### js/script.js

```javascript
angular.module('appName', [ 'reelyactive.cuttlefish' ]);
```

In a folder, create the above files, as well as _bubble.html_ and _style/bubble.css_ (which can be sourced from the template folder).  Also copy cuttlefish.js to _js/cuttlefish.js_.  Upon opening index.html in your browser, cuttlefish will render the JSON that's hard-coded within.


License
-------

MIT License

Copyright (c) 2016 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

