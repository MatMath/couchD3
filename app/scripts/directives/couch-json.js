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
		$scope.fetchingInfo = {};
		$scope.fetchingInfo.dbPath = 'https://localhost:6984/stage02-fake-data/';
		$scope.fetchingInfo.mapReduce = '_design/extract2/_view/datagraph?group=true';
		$scope.fetchingTo = $scope.fetchingInfo.dbPath + $scope.fetchingInfo.mapReduce;


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