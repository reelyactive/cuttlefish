cuttlefish
==========

Human-friendly HTML rendering of machine-friendly JSON-LD
---------------------------------------------------------

Cuttlefish allows you to get HTML out of almost any JSON-LD data structure by providing [ReactJS](https://facebook.github.io/react/) component based on the [Schema.org](http://schema.org/) definition of entities.

What's in a name?
-----------------

Story to come.

How do I use it?
----------

The basic compiled version allows you to visualise `Person`s, `Product`s and `Place`s. (see `index.html` example)

To use it, all you need to do is :

* Install cuttlefish with bower 

```sh
bower install cuttlefish
```

* Insert it in your webpage (before your scripts) and insert a node in which to insert the representation

```html
<!-- In the *head* tag (if you want our default style) -->
<link rel='stylesheet' href='bower_components/cuttlefish/dist/cuttlefish.css' />
<!-- Somewhere in the body -->
<div id='myJSON-LDRepresentationContainer'>
</div>
...
<script src='bower_components/cuttlefish/dist/cuttlefish.min.js'></script>
...
```

* Call it with your JSON-ld and the ID of your node

```javascript
cuttlefish.represent(JSONLDData, 'myJSON-LDRepresentationContainer');
```

* Check out your HTML (right-click + inspect in Google Chrome)

Develop
-------

Ok, that's nice, but now, you want to put your hands in the dough.

There are three ways to do that:

* You want to change the style of what you see ...

  * ... by modifying only certain attributes? Just create a CSS file and override the classes you want by using the ID of the container as a higher CSS specificity selector!

  * ... by starting from scratch? Remove our stylesheet in the *head* tag and create your own, you will find that cuttlefish tries to follow the [SUIT CSS naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) to make it easy for you to style.

* You want to customize the HTML itself, or extend the React components for them to really do something!

  * Fork this repo
  * In the `src/es6/` folder, you will find the components: Modify them as you want!
  * To Rebuild the all in one dist file: run `npm install && npm run build-dist`

* You want to adapt cuttlefish to YOUR data structure:
  * Put an extensive example of your JSON-LD data in the `source.json` file
  * Run the `npm run generate-source` command
  * Look in `src/es6` and you should have the corresponding react components in Ecma script 6 syntax. Customize them as you want and
  * Run `npm run build` to get the new version of Cuttlefish with YOUR React components packaged. If you are happy with them, run `npm run build-dist` to generate the distribution-ready version (minified and stuff)

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
