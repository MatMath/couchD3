/* globals d3 */
'use strict';

/**
 * @ngdoc function
 * @name couchD3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the couchD3App
 */
angular.module('couchD3App').controller('MainCtrl', function($scope) {
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];

	// controller "knows" nothing about donut charts
	// Sample data "Array of Array containing numbers only" for the donut charts
	$scope.donuts = d3.range(3).map(function() {
			return d3.range(5).map(Math.random);
		});
	$scope.chartClicked = function(index) {
		var n = Math.round(Math.random() * 9) + 1;
		$scope.donuts[index] = d3.range(n).map(function() {
			return Math.random();
		});
	};

});