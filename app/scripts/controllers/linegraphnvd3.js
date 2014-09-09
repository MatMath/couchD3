/* globals d3 */
'use strict';

/**
 * @ngdoc function
 * @name couchD3App.controller:Linegraphnvd3Ctrl
 * @description
 * # Linegraphnvd3Ctrl
 * Controller of the couchD3App
 */
angular.module('couchD3App')
	.controller('Linegraphnvd3Ctrl', function($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$scope.options = {
			chart: {
				type: 'lineChart',
				height: 450,
				margin: {
					top: 20,
					right: 20,
					bottom: 40,
					left: 55
				},
				x: function(d) {
					return d.x;
				},
				y: function(d) {
					return d.y;
				},
				useInteractiveGuideline: true,
				dispatch: {
					stateChange: function(e) {
						console.log('stateChange' + e);
					},
					changeState: function(e) {
						console.log('changeState' + e);
					},
					tooltipShow: function(e) {
						console.log('tooltipShow' + e);
					},
					tooltipHide: function(e) {
						console.log('tooltipHide' + e);
					}
				},
				xAxis: {
					axisLabel: 'Time (ms)'
				},
				yAxis: {
					axisLabel: 'Voltage (v)',
					tickFormat: function(d) {
						return d3.format('.02f')(d);
					},
					axisLabelDistance: 30
				},
				callback: function(chart) {
					console.log('!!! lineChart callback !!!' + chart);
				}
			},
			title: {
				enable: true,
				text: 'Title for Line Chart Shoud equal to the Map reduce'
			},
			subtitle: {
				enable: true,
				text: 'Subtitle for simple line chart. Shoudl have the details of ??? Not sure what yet.',
				css: {
					'text-align': 'center',
					'margin': '10px 13px 0px 7px'
				}
			},
			caption: {
				enable: true,
				html: '<b>Figure 1.</b> Some text to make the Graph interesting.',
				css: {
					'text-align': 'justify',
					'margin': '10px 13px 0px 7px'
				}
			}
		};

		/*Random Data Generator */
		function sinAndCos() {
			var sin = [],
				sin2 = [],
				cos = [];

			//Data is represented as an array of {x,y} pairs.
			for (var i = 0; i < 100; i++) {
				sin.push({
					x: i,
					y: Math.sin(i / 10)
				});
				sin2.push({
					x: i,
					y: i % 10 === 5 ? null : Math.sin(i / 10) * 0.25 + 0.5
				});
				cos.push({
					x: i,
					y: 0.5 * Math.cos(i / 10 + 2) + Math.random() / 10
				});
			}

			//Line chart data should be sent as an array of series objects.
			return [{
				values: sin, //values - represents the array of {x,y} data points
				key: 'Sine Wave', //key  - the name of the series.
				color: '#ff7f0e' //color - optional: choose your own line color.
			}, {
				values: cos,
				key: 'Cosine Wave',
				color: '#2ca02c'
			}, {
				values: sin2,
				key: 'Another sine wave',
				color: '#7777ff',
				area: true //area - set to true if you want this line to turn into a filled area chart.
			}];
		}

		$scope.discreteChartSampleData = {
			values: [{
				'values': [{
					'x': 0,
					'y': 0,
					'series': 0
				}, {
					'x': 1,
					'y': 0.09983,
					'series': 0
				}],
				'key': 'Sine Wave --> Name of the Series',
				'color': '#ff7f0e Or Optional',
				'area':'set to true if you want this line to turn into a filled area chart.'
			}, {
				'values': [{
					'x': 0,
					'y': -0.207535,
					'series': 1
				}, {
					'x': 1,
					'y': -0.215722,
					'series': 1
				}],
				'key': 'Cosine Wave'
			}],
			details: 'Array of object containing a "value:[]"'
		};

		$scope.discreteChartData = sinAndCos();


	});