/**
 * Copyright reelyActive 2023
 * We believe in an open Internet of Things
 */


const DYNAMB_PROPERTY_ICON_CLASSES = {
    batteryPercentage: "fas fa-battery-half",
    illuminance: "fas fa-sun",
    isButtonPressed: "fas fa-hand-pointer",
    isContactDetected: "fas fa-compress-alt",
    isMotionDetected: "fas fa-walking",
    relativeHumidity: "fas fa-water",
    temperature: "fas fa-thermometer-half",
    unicodeCodePoints: "fas fa-language"
};
const DYNAMB_PROPERTY_UNITS = {
    batteryPercentage: "%",
    illuminance: " lux",
    relativeHumidity: "%",
    temperature: "\u2103"
};
const DYNAMB_PROPERTY_PRECISION = {
    batteryPercentage: 0,
    illuminance: 0,
    relativeHumidity: 0,
    temperature: 1
};
const DEFAULT_PROPERTY_BOUNDS = {
    batteryPercentage: { min: 10, max: 100 },
    illuminance: { min: 300, max: 500 },
    relativeHumidity: { min: 20, max: 80 },
    temperature: { min: 19, max: 23 }
};
const DEFAULT_DYNAMB_PROPERTY_ICON_CLASS = 'fas fa-info';
const CLOCK_OPTIONS = { hour: "2-digit", minute: "2-digit", hour12: false };
const UPDATE_TIME_OPTIONS = { hour: "2-digit", minute: "2-digit",
                              second: "2-digit", hour12: false };
const DISCRETE_TIMESTAMP_OPTIONS = { hour: "2-digit", minute: "2-digit",
                                     second: "2-digit", hour12: false };
const DISCRETE_DATA_STALE_MILLISECONDS = 60000;
const DISCRETE_DATA_ANIMATE_MILLISECONDS = 15000;


/**
 * ContinuousDataTable Class
 * Manages the processing and rendering of continuous data in an HTML table.
 */
class ContinuousDataTable {

  /**
   * ContinuousDataTable constructor
   * @param {String} elementId The id of the table in the HTML.
   * @param {Map} devices The hyperlocal context graph.
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(elementId, devices, options) {
    let self = this;
    options = options || {};
    this.table = document.querySelector(elementId);
    this.devices = devices;
    this.continuousData = new Map();
    this.updateMilliseconds = options.updateMilliseconds || 15000;
    this.numberOfSamples = options.numberOfSamples || 4;
    this.propertiesToDisplay = options.propertiesToDisplay ||
                               [ 'temperature', 'relativeHumidity',
                                 'illuminance', 'batteryPercentage' ];
    this.propertyBounds = options.propertyBounds || DEFAULT_PROPERTY_BOUNDS;
    this.propertiesToDisplay.forEach((property) => {
      self.continuousData.set(property, { averages: [], numberOfDevices: [],
                                          minimums: [], maximums: [] });
    });

    this.render();
    periodicUpdate();

    function periodicUpdate() {
      self.update();
      setTimeout(periodicUpdate, self.updateMilliseconds);
    }
  }

  /**
   * Render the HTML table from scratch.
   */
  render() {
    let self = this;

    let iTime = createElement('i', 'fas fa-clock');
    let spanTime = createElement('span');
    let caption = createElement('caption', 'text-end', [ iTime, spanTime ]);
    let tbody = createElement('tbody');
    spanTime.setAttribute('id', 'continuousUpdateTime');

    this.propertiesToDisplay.forEach((property) => {
      let iconClass = DYNAMB_PROPERTY_ICON_CLASSES[property] ||
                      DEFAULT_DYNAMB_PROPERTY_ICON_CLASS;
      let i = createElement('i', iconClass + ' text-white display-4');
      let th = createElement('th', 'bg-dark align-middle', i);
      let spanContent = '\u2014' + (DYNAMB_PROPERTY_UNITS[property] || '');
      let spanAvg = createElement('span', 'text-muted', spanContent);
      let tdAvg = createElement('td', 'align-middle display-4', spanAvg);
      let spanMax = createElement('span', 'text-muted', '\u2014');
      let spanMin = createElement('span', 'text-muted', '\u2014');
      let supMax = createElement('sup', 'text-muted', '\u00a0 max');
      let subMin = createElement('sub', 'text-muted', '\u00a0 min');
      let liMax = createElement('li', 'list-group-item', [ spanMax, supMax ]);
      let liMin = createElement('li', 'list-group-item', [ spanMin, subMin ]);
      let ul = createElement('ul', 'list-group list-group-flush',
                             [ liMax, liMin ]);
      let tdRange = createElement('td', 'align-middle', ul);
      let tr = createElement('tr', null, [ th, tdAvg, tdRange ]);
      tbody.appendChild(tr);
      th.setAttribute('id', property + 'Icon');
      spanAvg.setAttribute('id', property + 'Display');
      spanMax.setAttribute('id', property + 'DisplayMax');
      spanMin.setAttribute('id', property + 'DisplayMin');
    });

    self.table.setAttribute('class', 'table table-bordered text-center');
    self.table.appendChild(caption);
    self.table.appendChild(tbody);
  }

  /**
   * Update the HTML table.
   */
  update() {
    let self = this;
    let current = {};
    let time = new Date().toLocaleTimeString([], UPDATE_TIME_OPTIONS);
    let updateTime = document.querySelector('#continuousUpdateTime');
    updateTime.textContent = '\u00a0' + time;

    self.continuousData.forEach((data, property) => { current[property] = [] });

    self.devices.forEach((device) => {
      if(device.hasOwnProperty('dynamb')) {
        self.continuousData.forEach((data, property) => {
          if(device.dynamb.hasOwnProperty(property)) {
            current[property].push(device.dynamb[property]);
          }
        });
      }
    });

    self.continuousData.forEach((data, property) => {
      let numberOfDevices = current[property].length;
      let precision = DYNAMB_PROPERTY_PRECISION[property];
      let avgDisplay = document.querySelector('#' + property + 'Display');
      let maxDisplay = document.querySelector('#' + property + 'DisplayMax');
      let minDisplay = document.querySelector('#' + property + 'DisplayMin');
      let iconCellDisplay = document.querySelector('#' + property + 'Icon');
      let isOutOfBounds = false;
      let average, minimum, maximum;

      if(numberOfDevices > 0) {
        average = current[property].reduce((a,b) => a + b, 0) / numberOfDevices;
        minimum = Math.min(...current[property]);
        maximum = Math.max(...current[property]);
        avgDisplay.textContent = average.toFixed(precision);
        let isAvgInBounds = (average <= self.propertyBounds[property].max) &&
                            (average >= self.propertyBounds[property].min);
        let avgClass = isAvgInBounds ? 'text-dark' : 'text-secondary';
        avgDisplay.setAttribute('class', avgClass);
        isOutOfBounds ||= !isAvgInBounds;
      }
      else {
        avgDisplay.textContent = '\u2014';
        avgDisplay.setAttribute('class', 'text-muted');
      }
      avgDisplay.textContent += (DYNAMB_PROPERTY_UNITS[property] || '');

      if(numberOfDevices > 1) {
        let isMaxInBounds = (maximum <= self.propertyBounds[property].max) &&
                            (maximum >= self.propertyBounds[property].min);
        let isMinInBounds = (minimum <= self.propertyBounds[property].max) &&
                            (minimum >= self.propertyBounds[property].min);
        let maxClass = isMinInBounds ? 'text-dark' : 'text-secondary';
        let minClass = isMinInBounds ? 'text-dark' : 'text-secondary';
        maxDisplay.textContent = maximum.toFixed(precision) +
                                 (DYNAMB_PROPERTY_UNITS[property] || '');
        minDisplay.textContent = minimum.toFixed(precision) +
                                 (DYNAMB_PROPERTY_UNITS[property] || '');
        maxDisplay.setAttribute('class', maxClass);
        minDisplay.setAttribute('class', minClass);
        isOutOfBounds ||= (!isMaxInBounds || !isMinInBounds);
      }
      else {
        maxDisplay.textContent = '\u2014';
        minDisplay.textContent = '\u2014';
        maxDisplay.setAttribute('class', 'text-muted');
        minDisplay.setAttribute('class', 'text-muted');
      }
      
      let iconCellClass = isOutOfBounds ? 'bg-secondary align-middle' :
                                          'bg-dark align-middle';
      iconCellDisplay.setAttribute('class', iconCellClass);

      data.averages.unshift(average);
      data.minimums.unshift(minimum);
      data.maximums.unshift(maximum);
      data.numberOfDevices.unshift(numberOfDevices);

      if(data.averages.length > self.numberOfSamples) {
        data.averages.pop();
        data.minimums.pop();
        data.maximums.pop();
        data.numberOfDevices.pop();
      }
    });
  }

}


/**
 * DiscreteDataTable Class
 * Manages the processing and rendering of discrete data in an HTML table.
 */
class DiscreteDataTable {
  constructor(elementId, options) {
    let self = this;
    this.table = document.querySelector(elementId);
    this.discreteData = new Map();
    this.updateMilliseconds = options.updateMilliseconds || 5000;
    this.maxRows = options.maxRows || 8;
    this.isClockDisplayed = options.isClockDisplayed || false;
    this.propertiesToDisplay = options.propertiesToDisplay ||
                               [ 'isButtonPressed', 'isContactDetected',
                                 'isMotionDetected', 'unicodeCodePoints' ];
    
    this.render();
    periodicUpdate();

    function periodicUpdate() {
      let nextUpdateTime = self.update();
      setTimeout(periodicUpdate, Math.max(nextUpdateTime - Date.now(), 1000));
    }
  }

  /**
   * Render the HTML table from scratch.
   */
  render() {
    let self = this;

    if(self.isClockDisplayed) {
      let time = new Date().toLocaleTimeString([], CLOCK_OPTIONS);
      let td = createElement('td', 'bg-dark bg-gradient text-white display-1',
                             time);
      let tr = createElement('tr', null, td);
      let thead = createElement('thead', null, tr);
      td.setAttribute('colspan', '4');
      td.setAttribute('id', 'timeDisplay');
      self.table.appendChild(thead);
    }

    let tbody = createElement('tbody');
    tbody.setAttribute('id', 'discreteDataRows');

    self.table.setAttribute('class', 'table table-hover text-center');
    self.table.appendChild(tbody);
  }

  /**
   * Update the HTML table (time & events).
   */
  update() {
    let self = this;
    let nextMinuteTime = Math.ceil(Date.now() / 60000) * 60000;
    let nextUpdateTime = Math.min(Date.now() + self.updateMilliseconds,
                                  nextMinuteTime);
    let tbody = document.querySelector('#discreteDataRows');

    if(self.isClockDisplayed) {
      let time = new Date().toLocaleTimeString([], CLOCK_OPTIONS);
      let timeDisplay = document.querySelector('#timeDisplay');
      timeDisplay.textContent = time;
    }

    if(tbody.hasChildNodes()) {
      tbody.childNodes.forEach((row, index) => {
        if(index >= self.maxRows) {
          tbody.removeChild(row);
        }
        else {
          let staleTimestamp = row.timestamp + DISCRETE_DATA_STALE_MILLISECONDS;
          let animateTimestamp = row.timestamp +
                                 DISCRETE_DATA_ANIMATE_MILLISECONDS;
          if(staleTimestamp < Date.now()) {
            row.setAttribute('class', 'align-middle text-muted');
          }
          else {
            nextUpdateTime = Math.min(staleTimestamp, nextUpdateTime);
          }
          if(animateTimestamp < Date.now()) {
            row.firstChild.setAttribute('class', '');
          }
          else {
            nextUpdateTime = Math.min(animateTimestamp, nextUpdateTime);
          }
        }
      });
    }

    return nextUpdateTime;
  }

  /**
   * Update the table based on new dynambic ambient (dynamb) data.
   * @param {Object} dynamb The dynamic ambient data.
   */
  handleDynamb(dynamb) {
    let self = this;
    let tbody = document.querySelector('#discreteDataRows');
    let deviceSignature = dynamb.deviceId + '/' + dynamb.deviceIdType;

    this.propertiesToDisplay.forEach((property) => {
      if(dynamb.hasOwnProperty(property)) {
        let id = dynamb.deviceId + '-' + dynamb.deviceIdType + '-' + property;
        let current = dynamb[property];
        let previous = self.discreteData.get(id);
        let event = determineDiscreteDataEvent(property, current, previous);

        if(event) {
          self.discreteData.set(id, current);
          let row = tbody.querySelector('#' + id);

          if(row) {
            updateDiscreteDataRow(row, event, dynamb.timestamp);
          }
          else {
            row = createDiscreteDataRow(id, property, event, deviceSignature,
                                        dynamb.timestamp);
            if(tbody.hasChildNodes() &&
               (tbody.childNodes.length >= self.maxRows)) {
              tbody.removeChild(tbody.lastChild);
            }
          }
          tbody.insertBefore(row, tbody.firstChild);
        }
      }
    });
  }
}


// Compare current and previous values of the property to determine event
function determineDiscreteDataEvent(property, current, previous) {
  let isEvent = false;

  if(previous === undefined) {
    isEvent = true;
  }
  else if(Array.isArray(current) && Array.isArray(previous)) {
    isEvent = !((current.length === previous.length) &&
                (current.every((value, index) => value === previous[index])));
  }
  // TODO: other discrete data property types

  if(!isEvent) {
    return null;
  }

  switch(property) {
    case 'isButtonPressed':
      return (current.includes(true) ? 'Button pressed' :
                                       'No button pressed');
    case 'isContactDetected':
      return (current.includes(true) ? 'Contact detected' :
                                       'No contact detected');
    case 'isMotionDetected':
      return (current.includes(true) ? 'Motion detected' :
                                       'No motion detected');
    case 'unicodeCodePoints':
      let chars = '';
      current.forEach(codePoint => chars += String.fromCodePoint(codePoint));
      return chars;
    default:
      return current;
  }
}


// Create a discrete data row
function createDiscreteDataRow(id, property, description, device, timestamp) {
  let iconClass = DYNAMB_PROPERTY_ICON_CLASSES[property] ||
                  DEFAULT_DYNAMB_PROPERTY_ICON_CLASS;
  let icon = createElement('i', iconClass + ' display-6');
  let iconCol = createElement('th', 'table-primary animate-breathing', icon);
  let deviceCol = createElement('td', 'font-monospace', device);
  let descriptionClass = (property === 'unicodeCodePoints') ? 'display-6' :
                                                              'fw-bold';
  let descriptionCol = createElement('td', descriptionClass, description);
  let time = new Date(timestamp).toLocaleTimeString([],
                                                    DISCRETE_TIMESTAMP_OPTIONS);
  let timestampCol = createElement('td', null, time);
  let tr = createElement('tr', 'align-middle',
                         [ iconCol, descriptionCol, deviceCol, timestampCol ]);
  tr.id = id;
  tr.timestamp = timestamp;

  return tr;
}


// Update a discrete data row
function updateDiscreteDataRow(row, description, timestamp) {
  let iconCol = row.children[0];
  let descriptionCol = row.children[1];
  let timestampCol = row.children[3];
  iconCol.setAttribute('class', 'table-primary animate-breathing');
  descriptionCol.textContent = description;
  timestampCol.textContent = new Date(timestamp).toLocaleTimeString([],
                                                   DISCRETE_TIMESTAMP_OPTIONS);
  row.timestamp = timestamp;
}


// Create an element as specified
function createElement(elementName, classNames, content) {
  let element = document.createElement(elementName);

  if(classNames) {
    element.setAttribute('class', classNames);
  }

  if((content instanceof Element) || (content instanceof DocumentFragment)) {
    element.appendChild(content);
  }
  else if(Array.isArray(content)) {
    content.forEach((item) => {
      if((item instanceof Element) || (item instanceof DocumentFragment)) {
        element.appendChild(item);
      }
      else {
        element.appendChild(document.createTextNode(item));
      }
    });
  }
  else if(content) {
    element.appendChild(document.createTextNode(content));
  }

  return element;
}