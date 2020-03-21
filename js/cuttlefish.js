/**
 * Copyright reelyActive 2016-2020
 * We believe in an open Internet of Things
 */


let cuttlefish = (function() {

  // Internal constants
  const IMG_CLASS = 'card-img-top';
  const BODY_CLASS = 'card-body';
  const FOOTER_CLASS = 'card-footer';
  const TITLE_CLASS = 'card-title text-truncate';
  const SUBTITLE_CLASS = 'card-subtitle text-muted text-truncate';
  const SAME_AS_CLASS = 'btn-group dropup';
  const DEFAULT_TITLE = 'Unknown';
  const DEFAULT_SUBTITLE = '\u2665 structured data';
  const LIST_GROUP_CLASS = 'list-group list-group-flush';
  const LIST_GROUP_ITEM_CLASS = 'list-group-item text-truncate';

  // Render the given story in the given node
  function render(story, node, options) {
    let graph = story["@graph"];
    let element = graph[0];

    removeAllChildren(node);
    renderImage(element, node);
    renderBody(element, node);
    renderFooter(element, node);

    if(options && options.hasOwnProperty('listGroupItems') &&
       Array.isArray(options.listGroupItems)) {
      renderListGroup(options.listGroupItems, node);
    }
  }

  // Remove all children of the given node
  function removeAllChildren(node) {
    while(node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  // Render the card image
  function renderImage(element, node) {
    let img = createElement('img', IMG_CLASS);
    img.src = determineElementImageUrl(element);
    node.appendChild(img);
  }

  // Render the card body
  function renderBody(element, node) {
    let body = createElement('div', BODY_CLASS);
    node.appendChild(body);

    renderTitle(element, body);
    renderSubtitle(element, body);
  }

  // Render the card footer
  function renderFooter(element, node) {
    let footer = createElement('div', FOOTER_CLASS);
    node.appendChild(footer);

    renderSameAs(element, footer);
  }

  // Render the title (name)
  function renderTitle(element, node) {
    let title = createElement('h5', TITLE_CLASS,
                              determineElementTitle(element));
    node.appendChild(title);
  }

  // Render the subtitle
  function renderSubtitle(element, node) {
    let text = DEFAULT_SUBTITLE;

    if(element.hasOwnProperty("schema:jobTitle") &&
       element.hasOwnProperty("schema:worksFor")) {
      text = toString(element["schema:jobTitle"]) + ' @ ' +
                      toString(element["schema:worksFor"]);
    }
    else if(element.hasOwnProperty("schema:jobTitle")) {
      text = toString(element["schema:jobTitle"]);
    }
    else if(element.hasOwnProperty("schema:worksFor")) {
      text = toString(element["schema:worksFor"]);
    }
    else if(element.hasOwnProperty("schema:brand")) {
      text = toString(element["schema:brand"]);
    }
    else if(element.hasOwnProperty("schema:manufacturer")) {
      text = toString(element["schema:manufacturer"]);
    }
    else if(element.hasOwnProperty("schema:maximumAttendeeCapacity")) {
      text = 'Capacity: ' + element["schema:maximumAttendeeCapacity"];
    }

    let subtitle = createElement('h6', SUBTITLE_CLASS, text);
    node.appendChild(subtitle);
  }

  // Render the sameAs (links)
  function renderSameAs(element, node) {
    let dropup = createElement('div', SAME_AS_CLASS);
    node.appendChild(dropup);

    let button = createElement('button',
                               'btn btn-secondary btn-sm dropdown-toggle');
    button.setAttribute('type', 'button');
    button.setAttribute('data-toggle', 'dropdown');
    button.setAttribute('aria-haspopup', 'true');
    button.setAttribute('aria-expanded', 'false');
    dropup.appendChild(button);

    let i = createElement('i', 'fas fa-ellipsis-h');
    button.appendChild(i);

    let sameAsCount = 0;

    if(element.hasOwnProperty("schema:sameAs")) {
      let menu = createElement('div', 'dropdown-menu');
      dropup.appendChild(menu);

      let sameAs = element["schema:sameAs"];
      if(typeof sameAs === 'string') {
        sameAs = [ sameAs ];
      }

      sameAsCount = sameAs.length;

      sameAs.forEach(function(url) {
        renderSameAsMenuItem(url, menu);
      });

    }
    else {
      button.setAttribute('class',
                          'btn btn-dark btn-sm dropdown-toggle disabled');
    }

    let count = document.createTextNode('\u00a0\u00a0' + sameAsCount);
    button.appendChild(count);
  }

  // Render the sameAs menu item (link)
  function renderSameAsMenuItem(url, node) {
    let a = createElement('a', 'dropdown-item');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');

    renderLinkIcon(url, a);

    let space = document.createTextNode('\u00a0\u00a0');
    a.appendChild(space);

    let i = createElement('i', 'fas fa-external-link-alt');
    a.appendChild(i);

    let urlSnippet = document.createTextNode('\u00a0' + url.split('/')[2] +
                                             '/\u2026');
    a.appendChild(urlSnippet);
    
    node.appendChild(a);
  }

  // Render the link icon, if known, based on the given URL
  function renderLinkIcon(url, node) {
    let iClass = 'fas fa-link';

    if(url.includes('github.com')) {
      iClass = 'fab fa-github';
    }
    else if(url.includes('twitter.com')) {
      iClass = 'fab fa-twitter';
    }
    else if(url.includes('linkedin.com')) {
      iClass = 'fab fa-linkedin';
    }
    else if(url.includes('facebook.com')) {
      iClass = 'fab fa-facebook';
    }
    else if(url.includes('instagram.com')) {
      iClass = 'fab fa-instagram';
    }

    let i = createElement('i', iClass);
    node.appendChild(i);
  }

  // Render the list group items
  function renderListGroup(listGroupItems, node) {
    let listGroup = createElement('ul', LIST_GROUP_CLASS);

    listGroupItems.forEach(function(item) {
      let itemClass = LIST_GROUP_ITEM_CLASS;
      if(item.hasOwnProperty('itemClass')) {
        itemClass += ' ' + item.itemClass;
      }
      let listGroupItem = createElement('li', itemClass);

      if(item.hasOwnProperty('iconClass')) {
        let space = document.createTextNode('\u00a0\u00a0');
        let i = createElement('i', item.iconClass);
        listGroupItem.appendChild(i);
        listGroupItem.appendChild(space);
      }
      let text = document.createTextNode(item.text);
      listGroupItem.appendChild(text);
      listGroup.appendChild(listGroupItem);
    });

    node.appendChild(listGroup);
  }

  // Determine the title of the story
  function determineStoryTitle(story) {
    let graph = story["@graph"];
    let element = graph[0];

    return determineElementTitle(element);
  }

  // Determine the title of the element
  function determineElementTitle(element) {
    if(element.hasOwnProperty("schema:name")) {
      return element["schema:name"];
    }
    else if(element.hasOwnProperty("schema:givenName") ||
            element.hasOwnProperty("schema:familyName")) {
      return (element["schema:givenName"] || '') + ' ' +
             (element["schema:familyName"] || '');
    }
    else {
      return DEFAULT_TITLE;
    }
  }

  // Determine the image URL of the story
  function determineStoryImageUrl(story) {
    let graph = story["@graph"];
    let element = graph[0];

    return determineElementImageUrl(element);
  }

  // Determine the image URL of the element
  function determineElementImageUrl(element) {
    if(element.hasOwnProperty("schema:image")) {
      return element["schema:image"];
    }
    else if(element.hasOwnProperty("schema:logo")) {
      return element["schema:logo"];
    }

    return null;
  }

  // Return the given schema.org property as a string, if not already so
  function toString(property) {
    if(typeof property === 'string') {
      return property;
    }
    if(property.hasOwnProperty("name")) {
      return property["name"];
    }
    else if(property.hasOwnProperty("schema:name")) {
      return property["schema:name"];
    }
    return '';
  }

  // Create an HTML element with optional class and text content
  function createElement(tagName, className, textContent) {
    let element = document.createElement(tagName);

    if(className) {
      element.setAttribute('class', className);
    }
    if(textContent) {
      element.textContent = textContent;
    }

    return element;
  }

  // Expose the following functions and variables
  return {
    render: render,
    determineImageUrl: determineStoryImageUrl,
    determineTitle: determineStoryTitle
  }

}());
