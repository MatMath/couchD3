/* globals d3 */
// From: http://krispo.github.io/angular-nvd3/#/quickstart
'use strict';

/**
 * @ngdoc function
 * @name couchD3App.controller:Nvd3Ctrl
 * @description
 * # Nvd3Ctrl
 * Controller of the couchD3App
 */
angular.module('couchD3App').controller('Nvd3Ctrl', function($scope) {
	/* Chart options */
	$scope.options = {
		chart: {
			type: 'discreteBarChart',
			height: 450,
			margin: {
				top: 20,
				right: 20,
				bottom: 60,
				left: 55
			},
			x: function(d) {
				return d.label;
			},
			y: function(d) {
				return d.value;
			},
			showValues: true,
			valueFormat: function(d) {
				return d3.format(',.4f')(d);
			},
			transitionDuration: 500,
			xAxis: {
				axisLabel: 'X Axis'
			},
			yAxis: {
				axisLabel: 'Y Axis',
				axisLabelDistance: 30
			}
		}
	};

	/* Chart data */
	$scope.data = [{
		key: 'Cumulative Return',
		values: [{
			'label': 'A',
			'value': -29.765957771107
		}, {
			'label': 'B',
			'value': 0
		}, {
			'label': 'C',
			'value': 32.807804682612
		}, {
			'label': 'D',
			'value': 196.45946739256
		}, {
			'label': 'E',
			'value': 0.19434030906893
		}, {
			'label': 'F',
			'value': -98.079782601442
		}, {
			'label': 'G',
			'value': -13.925743130903
		}, {
			'label': 'H',
			'value': -5.1387322875705
		}]
	}];

});