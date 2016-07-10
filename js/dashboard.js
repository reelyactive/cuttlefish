/**
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */


/**
 * dashboard Module
 * All of the JavaScript specific to the dashboard is contained inside this
 * angular module.  The only external dependencies are:
 * - cuttlefish (reelyActive)
 */
angular.module('dashboard', [ 'reelyactive.cuttlefish' ])


/**
 * DashCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('DashCtrl', function($scope) {

  $scope.json = {
    "@context": {
      "schema": "http://schema.org/"
    },
    "@graph": [
      {
        "@id": "person",
        "@type": "schema:Person",
        "schema:givenName": "Barn",
        "schema:familyName": "Owl",
        "schema:worksFor": "reelyActive",
        "schema:jobTitle": "Mascot",
        "schema:image": "http://reelyactive.com/images/barnowl.jpg"
      },
      {
        "@id": "product",
        "@type": "schema:Product",
        "schema:name": "915MHz Active RFID Tag",
        "schema:image": "http://reelyactive.com/images/tag400x400.jpg"
      }
    ]
  };

  $scope.data = JSON.stringify($scope.json, null, '  ');

  $scope.update = function(data) {
    $scope.json = JSON.parse(data);
  }

});

