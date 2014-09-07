'use strict';

/**
 * @ngdoc directive
 * @name couchD3App.directive:couchJson
 * @description
 * # couchJson
 */
angular.module('couchD3App')
  .directive('couchJson', function () {
    return {
      templateUrl: 'views/displayInfo.html',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the couchJson directive');
      }
    };
  });
