/**
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */


DEFAULT_BUBBLE_SIZE = '240px';
BUBBLE_TEMPLATE_URL = 'bubble.html';


angular.module('reelyactive.cuttlefish', [])

  .directive('bubble', function() {

    function link(scope) {
      scope.toggle = 0;
      scope.types = [];
      scope.size = scope.size || DEFAULT_BUBBLE_SIZE;

      var graph = scope.json["@graph"];
      for(var cItem = 0; cItem < graph.length; cItem++) {
        switch(graph[cItem]["@type"]) {
          case 'schema:Person':
            scope.person = graph[cItem];
            scope.types.push('Person');
            break;
          case 'schema:Product':
            scope.product = graph[cItem];
            scope.types.push('Product');
            break;
          case 'schema:Place':
            scope.place = graph[cItem];
            scope.types.push('Place');
            break;
        }
      }
      scope.current = scope.types[0];
    }

    return {
      restrict: "E",
      scope: {
        json: "=",
        size: "@"
      },
      link: link,
      templateUrl: BUBBLE_TEMPLATE_URL
    }
  });
