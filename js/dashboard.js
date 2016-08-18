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
        "schema:nationality": "CA",
        "schema:worksFor": "reelyActive",
        "schema:jobTitle": "Mascot",
        "schema:url": "https://www.npmjs.com/package/barnowl",
        "schema:sameAs": [
          "http://www.facebook.com/reelyActive",
          "http://www.twitter.com/reelyActive",
          "http://plus.google.com/+reelyActive",
          "http://www.linkedin.com/company/reelyactive",
          "http://www.instagram.com/reelyactive",
          "http://www.youtube.com/reelyActive",
          "http://github.com/reelyactive",
          "http://www.npmjs.com/~reelyactive",
          "http://angel.co/reelyactive",
          "http://www.crunchbase.com/organization/reelyactive"
        ],
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
  $scope.size = '240px';

  $scope.update = function(data) {
    $scope.json = JSON.parse(data);
  }

});

