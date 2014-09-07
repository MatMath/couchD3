'use strict';

/**
 * @ngdoc directive
 * @name couchD3App.directive:couchJson
 * @description
 * # couchJson
 */
angular.module('couchD3App').directive('couchJson', function() {


	var controller = function($scope) {
		console.log('Hehe Im in the controller.', $scope);
		// $scope.fetchingTo = 'https://corpusdev.lingsync.org/mathieu-firstcorpus';
		$scope.fetchingTo = 'https://localhost:6984/mathieu-firstcorpus/_design/pages/_view/byStage';


		$scope.httpGet = function(theUrl) {
			var xmlHttp = null;

			xmlHttp = new XMLHttpRequest();
			xmlHttp.open('GET', theUrl, true);
			xmlHttp.onload = function() {
				$scope.responseResult = JSON.parse(xmlHttp.responseText);
				$scope.$digest();
			};
			xmlHttp.send(null);
			return xmlHttp.responseText;
		};
		$scope.httpGet($scope.fetchingTo);
	};
	controller.$inject = ['$scope'];

	return {
		templateUrl: 'views/displayInfo.html',
		restrict: 'E',
		link: function postLink() {},
		controller: controller,
		controllerAs: 'stringAlias'
	};
});