/**
 * Copyright reelyActive 2016-2019
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
  const DEFAULT_SUBTITLE = '&hearts; structured data';

  // Render the given story in the given node
  function render(story, node) {
    let graph = story["@graph"];
    let element = graph[0];

    removeAllChildren(node);
    renderImage(element, node);
    renderBody(element, node);
    renderFooter(element, node);
  }

  // Remove all children of the given node
  function removeAllChildren(node) {
    while(node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  // Render the card image
  function renderImage(element, node) {
    if(element.hasOwnProperty("schema:image")) {
      let img = document.createElement('img');
      img.src = element["schema:image"];
      img.setAttribute('class', IMG_CLASS);
      node.appendChild(img);
    }
    else { /* TODO */ }
  }

  // Render the card body
  function renderBody(element, node) {
    let body = document.createElement('div');
    body.setAttribute('class', BODY_CLASS);
    node.appendChild(body);

    renderTitle(element, body);
    renderSubtitle(element, body);
  }

  // Render the card footer
  function renderFooter(element, node) {
    let footer = document.createElement('div');
    footer.setAttribute('class', FOOTER_CLASS);
    node.appendChild(footer);

    renderSameAs(element, footer);
  }

  // Render the title (name)
  function renderTitle(element, node) {
    let title = document.createElement('h5'); 
    title.setAttribute('class', TITLE_CLASS);

    if(element.hasOwnProperty("schema:name")) {
      title.textContent = element["schema:name"];
    }
    else if(element.hasOwnProperty("schema:givenName") ||
            element.hasOwnProperty("schema:familyName")) {
      title.textContent = (element["schema:givenName"] || '') + ' ' +
                          (element["schema:familyName"] || '');
    }
    else {
      title.textContent = DEFAULT_TITLE;
    }
    node.appendChild(title);
  }

  // Render the subtitle
  function renderSubtitle(element, node) {
    let subtitle = document.createElement('h6'); 
    subtitle.setAttribute('class', SUBTITLE_CLASS);

    if(element.hasOwnProperty("schema:jobTitle")) {
      subtitle.textContent = element["schema:jobTitle"];
    }
    else if(element.hasOwnProperty("schema:worksFor")) {
      subtitle.textContent = element["schema:worksFor"];
    }
    else if(element.hasOwnProperty("schema:brand")) {
      subtitle.textContent = element["schema:brand"];
    }
    else if(element.hasOwnProperty("schema:manufacturer")) {
      subtitle.textContent = element["schema:manufacturer"];
    }
    else if(element.hasOwnProperty("schema:maximumAttendeeCapacity")) {
      subtitle.textContent = 'Capacity: ' +
                             element["schema:maximumAttendeeCapacity"];
    }
    else {
      subtitle.textContent = DEFAULT_SUBTITLE;
    }

    node.appendChild(subtitle);
  }

  // Render the sameAs (links)
  function renderSameAs(element, node) {
    let dropup = document.createElement('div');
    dropup.setAttribute('class', SAME_AS_CLASS);
    node.appendChild(dropup);

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-secondary btn-sm dropdown-toggle');
    button.setAttribute('data-toggle', 'dropdown');
    button.setAttribute('aria-haspopup', 'true');
    button.setAttribute('aria-expanded', 'false');
    dropup.appendChild(button);

    let i = document.createElement('i');
    i.setAttribute('class', 'fas fa-ellipsis-h');
    button.appendChild(i);

    let sameAsCount = 0;

    if(element.hasOwnProperty("schema:sameAs")) {
      let menu = document.createElement('div');
      menu.setAttribute('class', 'dropdown-menu');
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
      button.setAttribute('class', 'btn btn-dark btn-sm dropdown-toggle disabled');
    }

    let count = document.createTextNode('\u00a0\u00a0' + sameAsCount);
    button.appendChild(count);
  }

  // Render the sameAs menu item (link)
  function renderSameAsMenuItem(url, node) {
    let a = document.createElement('a');
    a.setAttribute('class', 'dropdown-item');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');

    renderLinkIcon(url, a);

    let space = document.createTextNode('\u00a0\u00a0');
    a.appendChild(space);

    let i = document.createElement('i');
    i.setAttribute('class', 'fas fa-external-link-alt');
    a.appendChild(i);

    let urlSnippet = document.createTextNode('\u00a0' + url.split('/')[2] + '/\u2026');
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

    let i = document.createElement('i');
    i.setAttribute('class', iClass);
    node.appendChild(i);
  }

  // Expose the following functions and variables
  return {
    render: render
  }

}());
