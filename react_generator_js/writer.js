var fs = require('fs');
var _ = require('lodash');

function isComponent(type) {
  return type[0] === type[0].toUpperCase();
}

function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1);
}

function write(file, something) {
  // console.log('+ ' + something); // For debugging
  file.write(something + '\n');
}

function getTemplateWord(line) {
  var matches = line.match(/.*%([^%]+)%.*/);

  if (matches) {
    return matches[1];
  } else {
    return null;
  }
}

function getReactType(type) {
  if (type.indexOf('arrayOf(') === 0) {
    var subType = type.substr(
      type.indexOf('arrayOf(') + 8,
      type.indexOf(')') + 1
    );
    type = 'array';
  }

  switch(type) {
    case 'url':
    case 'image':
      return 'React.PropTypes.string';
    case 'array':
      return 'React.PropTypes.arrayOf(React.PropTypes.' + subType + ')';
    case 'boolean':
      return 'React.PropTypes.bool';
    default:
      return 'React.PropTypes.' + type;
  }
}

// *value* is a bit weird. It can be either *this.props.something* or *item*
function getRepresentationOf(component, value, property, type, subType) {
  var representation = '(';

  switch(type) {
    case 'component':
      representation += "<" + subType + " {..." + value + "} />";
      break;
    case 'url':
      representation += 
        "<a className='"
        + component.className + "_" + capitalize(property)
        + "' href='{" + value + "}' "
        + "target='_blank'>"
        + capitalize(property) 
        + "</a>";
      break;
    case 'image':
      representation +=
        "<img className='" 
        + component.className + "_" + capitalize(property) + "' "
        + "src='{" + value + "}' "
        + "alt='" + capitalize(property) + "' "
        + "/>";
      break;
    case 'string':
    case 'number':
      representation += 
        "<p className='" 
        + component.className + "_" + capitalize(property) + "'"
        + ">"
        + capitalize(property) + ": {" + value + "}" 
        + "</p>";
      break;
    case 'array':
      representation += value + '.map(function(item) {\n';
      representation += '      return ' + getRepresentationOf(component, 'item', property, subType) + '\n';
      representation += '    }';
      break;
  }

  representation += ');';

  return representation;
}

function writeRenderPreparation(file, component, property, type) {
  if (type.indexOf('arrayOf(') === 0) {
    var subType = type.substr(
      type.indexOf('arrayOf(') + 8,
      type.length - 8 - 1 // 8: length of 'arrayOf(', 1: length of the ')' at the end
    );
    type = 'array';
  } else if (isComponent(type)) {
    subType = type;
    type = 'component';
  }

  var value = 'this.props.' + property;
  var line = '    var ' + property + ' = ' + getRepresentationOf(
    component,
    value,
    property,
    type,
    subType
  );

  write(file, line);
  write(file, '');
}

function writeForTemplateLine(file, templateLine, component) {
  switch (getTemplateWord(templateLine)) {
    case null: // No template word in line
      write(file, templateLine);
      break;
    case 'imports':
      _.forEach(component.properties, function(type, property) {
        if (isComponent(type)) {
          write(
            file,
            "import " + type + " from '" + type + "';"
          );
        }
      });
      break;
    case 'className':
      write(
        file,
        templateLine.replace('%className%', component.className)
      );
      break;
    case 'propTypes':
      _.forEach(component.properties, function(type, property) {
        if (!isComponent(type)) {
          write(
            file,
            "    " + property + ": " + getReactType(type) + ","
          );
        } else {
          // Let's not put a propType on components
        }
      });
      break;
    case 'render':
      write(file, "  render() {");
      _.forEach(component.properties, function(type, property) {
        writeRenderPreparation(file, component, property, type);
      });
      write(file, "    return (");
      write(file, "      <div class='" + component.className + "'>");
      _.forEach(component.properties, function(type, property) {
        write(file, "        {" + property + "}");
      });
      write(file, "      </div>");
      write(file, "    );");
      write(file, "  }");
      break;
    default:
      break;
  }
}

var snippetAsArray = fs.readFileSync('./ES6ClassSnippet.js').toString().split('\n');

function writeComponent(component) {
  var file = fs.createWriteStream(
    '../src/es6/' + component.className + '.js'
  );
  
  console.log('--------------- file start [' + component.className + ']');
  
  snippetAsArray.forEach(function (line) {
    writeForTemplateLine(file, line, component);
  });

  console.log('--------------- file end [' + component.className + ']');

  file.end();
}

var components = require('./parser');

_.forEach(components, function(component, className) {
  writeComponent(component);
});
