/**
 * Copyright reelyActive 2016-2019
 * We believe in an open Internet of Things
 */


let cuttlefish = (function() {

  // Internal constants
  const IMG_CLASS = 'card-img-top';
  const BODY_CLASS = 'card-body';
  const TITLE_CLASS = 'card-title text-truncate';

  // Render the given story in the given node
  function render(story, node) {
    let graph = story["@graph"];
    let element = graph[0];

    renderImage(element, node);
    renderTitle(element, node);
  }

  // Render the image
  function renderImage(element, node) {
    if(element.hasOwnProperty("schema:image")) {
      let img = document.createElement('img');
      img.src = element["schema:image"];
      img.setAttribute('class', IMG_CLASS);
      node.appendChild(img);
    }
    else { /* TODO */ }
  }

  // Render the title (name)
  function renderTitle(element, node) {
    let body = document.createElement('div');
    body.setAttribute('class', BODY_CLASS);
    node.appendChild(body);

    let title = document.createElement('h5'); 
    title.setAttribute('class', TITLE_CLASS);

    if(element.hasOwnProperty("schema:name")) {
      title.textContent = element["schema:name"];
    }
    else {
      title.textContent = 'Unknown';
    }
    body.appendChild(title);
  }

  // Expose the following functions and variables
  return {
    render: render
  }

}());
