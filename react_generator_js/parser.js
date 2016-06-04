var fs = require('fs');
var _ = require('lodash');

function stripKey(key) {
  return key.substr(key.indexOf(':') + 1);
}

function extractType(value) {
  if (
    (/\.(gif|jpg|jpeg|tiff|png)$/i).test(value)
  ) {
    return 'image';
  } else if (
      (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(value)
  ) {
    return 'url';
  } else {
    return typeof value;
  }
}

function extractComponent(data) {
  var wrapper = {
    id: '',
    className: '',
    properties: {}
  };

  _.forEach(data, function(value, key) {
    if (key === '@id') {
      wrapper.id = value;
    } else if (key === '@type') {
      wrapper.className = stripKey(value);
    } else {
      if (typeof value === 'object') {
        if (!value.length) {
          var subComponentWrapped = extractComponent(value);
          components[subComponentWrapped.className] = subComponentWrapped;
          wrapper.properties[stripKey(key)] = subComponentWrapped.className;
        } else {
          var type = extractType(value[0]);
          wrapper.properties[stripKey(key)] = 'arrayOf(' + type + ')';
        }
      } else {
        wrapper.properties[stripKey(key)] = extractType(value);
      }
    }
  });

  return wrapper;
}

function extractComponents(data) {
  var prefixes = [];

  _.forEach(data, function(value, key) {
    if (key === '@context') {
      prefixes = Object.keys(value);
    } else if (key === '@graph') {
      var baseComponents = value;

      _.forEach(baseComponents, function(baseComponent) {
        var component = extractComponent(baseComponent);
        components[component.className] = component;
      });
    } else {
      console.log('Weird, first level should only have @context or @graph');
    }
  });

  return components;
}

var parsedData = JSON.parse(
  fs.readFileSync('../source.json', 'utf8')
);

var components = {};
extractComponents(parsedData)

module.exports = components;
