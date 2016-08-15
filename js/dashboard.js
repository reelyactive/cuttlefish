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
      "schema:givenName": "Jeffrey",
      "schema:familyName": "Dungen",
      "schema:gender": "Male",
      "schema:nationality": "CA",
      "schema:worksFor": "reelyActive",
      "schema:jobTitle": "Co-founder and CEO",
      "schema:url": "http://dungen.ca/jeff/",
      "schema:sameAs": [
      "https://www.linkedin.com/in/dungen",
      "https://plus.google.com/+JeffreyDungen"
      ],
      "schema:image": "http://dungen.ca/jeff/portrait-ld.jpg"
    }
    ]
  };

  $scope.data = JSON.stringify($scope.json, null, '  ');
  $scope.size = '240px';

  $scope.update = function(data) {
    $scope.json = JSON.parse(data);
  }

});

