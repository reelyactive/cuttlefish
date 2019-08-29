cuttlefish
==========


Human-friendly HTML rendering of machine-friendly JSON-LD.


Installation
------------

__cuttlefish.js__ is written in vanilla JavaScript and the file can simply be included among the scripts in an HTML file.  For example:

```html
<html>
  <head></head>
  <body>
    <script src="js/cuttlefish.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```


Hello cuttlefish
----------------

Include in your _index.html_ divs of the class _card_ in which cuttlefish should render stories.

```html
<div class="card" id="toRender"></div>
```

Include in your _js/app.js_ the following code to render the given story in the _toRender_ div:

```javascript
let story = { /* Likely retrieved by cormorant.js */ };
let target = document.querySelector('#toRender');

cuttlefish.render(story, target, options);
```


![cuttlefish logo](https://reelyactive.github.io/cuttlefish/images/cuttlefish-bubble.png)


Options
-------

Cuttlefish supports the following options:

### listGroupItems

An array of list-group-items to append to the bottom of the card.  Each item can be preceded by an icon if the optional _iconClass_ property is included, and the appearance can be customised if the optional _itemClass_ property is included.  For example:

```javascript
let options = {
    listGroupItems: [
      {
        text: "An info message to append",
        itemClass: "text-white bg-dark",
        iconClass: "fas fa-info-circle"
    ]
}

cuttlefish.render(story, target, options);
```


What's in a name?
-----------------

The cuttlefish isn't actually a fish, but rather a cephalopod, which is a class of marine animals remarkable for how quickly and diversely they can communicate visually.  [As per Wikipedia](https://en.wikipedia.org/wiki/Cuttlefish#Communication): "flamboyant cuttlefish use between 42 and 75 chromatic, seven textural, 14 postural, and seven locomotor elements" to communicate.

Given that cuttlefish.js communicates machine-readable data as human-readable visual information, that unprecedented natural vocabulary sets some serious expectations for UI/UX design!  Seriously.  Read [Jaron Lanier's 2006 article in Discover Magazine](http://discovermagazine.com/2006/apr/cephalopod-morphing/).

In its client-side habitat, cuttlefish.js will consume and render the JSON-LD fetched by [cormorant.js](https://github.com/reelyactive/cormorant).  And while you may suspect that cuttlefish and cormorants have nothing more in common than the fact that the pupil of the former resembles the distinct wing shape of the latter, check out [this video](https://youtu.be/OQq__WdJBMw?t=2m40s) we found on the Internets.  Yeah, if that skate were a [beaver](https://github.com/reelyactive/beaver)...

Speaking of videos, we'd be remiss not to share with you Ze Frank's [True Facts about the Cuttlefish](https://youtu.be/GDwOi7HpHtQ).  May we also suggest an images search for "cute baby cuttlefish".  You're welcome.


What's next?
------------

__cuttlefish.js__ v1.0.0 was released in July 2019, superseding all earlier versions, the latest of which remains available in the [release-0.1 branch](https://github.com/reelyactive/cuttlefish/tree/release-0.1).


License
-------

MIT License

Copyright (c) 2016-2019 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
