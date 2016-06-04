var fs = require('fs');
var components = require('./parser');
var _ = require('lodash');

var snippetAsArray = fs.readFileSync('./ES6ClassSnippet.js').toString().split('\n');

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

function getRealType(type) {
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
      return 'string';
    case 'array':
      return 'arrayOf(React.PropTypes.' + subType + ')';
    default:
      return type;
  }
}


function writeRenderPreparation(file, property, type, component, isItem) {
  if (type.indexOf('arrayOf(') === 0) {
    var subType = type.substr(
      type.indexOf('arrayOf(') + 8,
      type.length - 8 - 1 // 8: length of 'arrayOf(', 1: length of the ')' at the end
    );
    type = 'array';
  } else if (isComponent(type)) { // = It is another component
    subType = type;
    type = 'component';
  }

  var line, value;

  if (isItem) {
    line = '      return (';
    value = 'item';
  } else {
    line = '    var ' + property + ' = (';
    value = 'this.props.' + property;
  }

  switch(type) {
    case 'component':
      line += "<" + subType + " {..." + value + "} />";
      break;
    case 'url':
      line += "<a className='" + component.className + "_" + capitalize(property) + "' href='{" + value + "}' target='_blank'>" + capitalize(property) + "</a>";
      break;
    case 'image':
      line += "<img className='" + component.className + "_" + capitalize(property) + "' src='{" + value + "}' alt='" + capitalize(property) +"' />";
      break;
    case 'string':
    case 'number':
      line += "<p className='" + component.className + "_" + capitalize(property) + "'>" + capitalize(property) + ": {" + value + "}</p>";
      break;
    case 'array':
      line += value + '.map(function(item) {\n';
      line += writeRenderPreparation(file, property, subType, component, true) + '\n';
      line += '    }';
      break;
  }
  line += ');';

  if (isItem) {
    return line;
  } else {
    write(file, line);
    write(file, '');
  }
}

function writeLine(file, templateLine, component) {
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
            "    " + property + ": React.PropTypes." + getRealType(type) + ","
          );
        } else {
          // Let's not put a propType on components
        }
      });
      break;
    case 'render':
      write(file, "  render() {");
      _.forEach(component.properties, function(type, property) {
        writeRenderPreparation(file, property, type, component);
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

function writeComponent(component) {
  var file = fs.createWriteStream(
    '../src/es6/' + component.className + '.js'
  );
  
  console.log('--------------- file start [' + component.className + ']');
  
  snippetAsArray.forEach(function (line) {
    writeLine(file, line, component);
  });

  console.log('--------------- file end [' + component.className + ']');

  file.end();
}

_.forEach(components, function(component, className) {
  writeComponent(component);
});
