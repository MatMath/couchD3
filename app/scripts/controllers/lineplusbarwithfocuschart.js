/* globals d3 */
'use strict';

/**
 * @ngdoc function
 * @name couchD3App.controller:LineplusbarwithfocuschartCtrl
 * @description
 * # LineplusbarwithfocuschartCtrl
 * Controller of the couchD3App
 */
angular.module('couchD3App')
	.controller('LineplusbarwithfocuschartCtrl', function($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		// There is an error When we select the sub graph for the selection, but this is in the D3 code.
		// Do not seems to have the possibility to add a title in this graph.
		$scope.options = {
			chart: {
				type: 'linePlusBarWithFocusChart',
				height: 500,
				margin: {
					top: 30,
					right: 75,
					bottom: 50,
					left: 75
				},
				bars: {
					forceY: [0]
				},
				bars2: {
					forceY: [0]
				},
				color: ['#2ca02c', 'darkred'],
				x: function(d, i) {
					return i;
				},
				xAxis: {
					axisLabel: 'X Axis',
					tickFormat: function(d) {
						var dx = $scope.discreteChartData[0].values[d] && $scope.discreteChartData[0].values[d].x || 0;
						if (dx > 0) {
							return d3.time.format('%x')(new Date(dx));
						}
						return null;
					}
				},
				x2Axis: {
					tickFormat: function(d) {
						var dx = $scope.discreteChartData[0].values[d] && $scope.discreteChartData[0].values[d].x || 0;
						return d3.time.format('%b-%Y')(new Date(dx));
					},
					showMaxMin: false
				},
				y1Axis: {
					axisLabel: 'Y1 Axis',
					tickFormat: function(d) {
						return d3.format(',f')(d);
					}
				},
				y2Axis: {
					axisLabel: 'Y2 Axis',
					tickFormat: function(d) {
						return d3.format(',.2f')(d);
					}
				},
				y3Axis: {
					tickFormat: function(d) {
						return d3.format(',f')(d);
					}
				},
				y4Axis: {
					tickFormat: function(d) {
						return d3.format(',.2f')(d);
					}
				}
			}
		};

		// Demo Sample exemple
		$scope.discreteChartSampleData = {
			values: [{
				'BarName': 'Quantity',
				'LineName': 'Price',
				'values': [{
					timestamp: 1136005200000,
					BarValue: 1271000.0,
					LineValue: 71.89
				}, {
					timestamp: 1138683600000,
					BarValue: 1271000.0,
					LineValue: 75.51
				}, {
					timestamp: 1141102800000,
					BarValue: 1271000.0,
					LineValue: 68.49
				}]
			}],
			transformedTo: [{
				'key': 'Quantity',
				'bar': true,
				'values': [
					{timestamp: 1136005200000, currentValue: 1271000.0},
					{timestamp: 1138683600000, currentValue: 1271000.0}
				]
			}, {
				'key': 'Price',
				'values': [
					{timestamp: 1136005200000, currentValue: 71.89},
					{timestamp: 1138683600000, currentValue: 75.51}
				]
			}],
			details: 'Both graph cannot be bar, one need to be a line (bar = false). Last Data array = [Date , Value]. Both array to have the same amount of value with same date otherwise they wont be alligned. '
		};

	});