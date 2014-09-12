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
						return '$' + d3.format(',.2f')(d);
					}
				},
				y3Axis: {
					tickFormat: function(d) {
						return d3.format(',f')(d);
					}
				},
				y4Axis: {
					tickFormat: function(d) {
						return '$' + d3.format(',.2f')(d);
					}
				}
			}
		};

		$scope.discreteChartData = [{
			'key': 'Quantity',
			'bar': true,
			'values': [
				{timestamp: 1136005200000, currentValue: 1271000.0},
				{timestamp: 1138683600000, currentValue: 1271000.0},
				{timestamp: 1141102800000, currentValue: 1271000.0},
				{timestamp: 1143781200000, currentValue: 0},
				{timestamp: 1146369600000, currentValue: 0},
				{timestamp: 1149048000000, currentValue: 0},
				{timestamp: 1151640000000, currentValue: 0},
				{timestamp: 1154318400000, currentValue: 0},
				{timestamp: 1156996800000, currentValue: 0},
				{timestamp: 1159588800000, currentValue: 3899486.0},
				{timestamp: 1162270800000, currentValue: 3899486.0},
				{timestamp: 1164862800000, currentValue: 3899486.0},
				{timestamp: 1167541200000, currentValue: 3564700.0},
				{timestamp: 1170219600000, currentValue: 3564700.0},
				{timestamp: 1172638800000, currentValue: 3564700.0},
				{timestamp: 1175313600000, currentValue: 2648493.0},
				{timestamp: 1177905600000, currentValue: 2648493.0},
				{timestamp: 1180584000000, currentValue: 2648493.0},
				{timestamp: 1183176000000, currentValue: 2522993.0},
				{timestamp: 1185854400000, currentValue: 2522993.0},
				{timestamp: 1188532800000, currentValue: 2522993.0},
				{timestamp: 1191124800000, currentValue: 2906501.0},
				{timestamp: 1193803200000, currentValue: 2906501.0},
				{timestamp: 1196398800000, currentValue: 2906501.0},
				{timestamp: 1199077200000, currentValue: 2206761.0},
				{timestamp: 1201755600000, currentValue: 2206761.0},
				{timestamp: 1204261200000, currentValue: 2206761.0},
				{timestamp: 1206936000000, currentValue: 2287726.0},
				{timestamp: 1209528000000, currentValue: 2287726.0},
				{timestamp: 1212206400000, currentValue: 2287726.0},
				{timestamp: 1214798400000, currentValue: 2732646.0},
				{timestamp: 1217476800000, currentValue: 2732646.0},
				{timestamp: 1220155200000, currentValue: 2732646.0},
				{timestamp: 1222747200000, currentValue: 2599196.0},
				{timestamp: 1225425600000, currentValue: 2599196.0},
				{timestamp: 1228021200000, currentValue: 2599196.0},
				{timestamp: 1230699600000, currentValue: 1924387.0},
				{timestamp: 1233378000000, currentValue: 1924387.0},
				{timestamp: 1235797200000, currentValue: 1924387.0},
				{timestamp: 1238472000000, currentValue: 1756311.0},
				{timestamp: 1241064000000, currentValue: 1756311.0},
				{timestamp: 1243742400000, currentValue: 1756311.0},
				{timestamp: 1246334400000, currentValue: 1743470.0},
				{timestamp: 1249012800000, currentValue: 1743470.0},
				{timestamp: 1251691200000, currentValue: 1743470.0},
				{timestamp: 1254283200000, currentValue: 1519010.0},
				{timestamp: 1256961600000, currentValue: 1519010.0},
				{timestamp: 1259557200000, currentValue: 1519010.0},
				{timestamp: 1262235600000, currentValue: 1591444.0},
				{timestamp: 1264914000000, currentValue: 1591444.0},
				{timestamp: 1267333200000, currentValue: 1591444.0},
				{timestamp: 1270008000000, currentValue: 1543784.0},
				{timestamp: 1272600000000, currentValue: 1543784.0},
				{timestamp: 1275278400000, currentValue: 1543784.0},
				{timestamp: 1277870400000, currentValue: 1309915.0},
				{timestamp: 1280548800000, currentValue: 1309915.0},
				{timestamp: 1283227200000, currentValue: 1309915.0},
				{timestamp: 1285819200000, currentValue: 1331875.0},
				{timestamp: 1288497600000, currentValue: 1331875.0},
				{timestamp: 1291093200000, currentValue: 1331875.0},
				{timestamp: 1293771600000, currentValue: 1331875.0},
				{timestamp: 1296450000000, currentValue: 1154695.0},
				{timestamp: 1298869200000, currentValue: 1154695.0},
				{timestamp: 1301544000000, currentValue: 1194025.0},
				{timestamp: 1304136000000, currentValue: 1194025.0},
				{timestamp: 1306814400000, currentValue: 1194025.0},
				{timestamp: 1309406400000, currentValue: 1194025.0},
				{timestamp: 1312084800000, currentValue: 1194025.0},
				{timestamp: 1314763200000, currentValue: 1244525.0},
				{timestamp: 1317355200000, currentValue: 475000.0},
				{timestamp: 1320033600000, currentValue: 475000.0},
				{timestamp: 1322629200000, currentValue: 475000.0},
				{timestamp: 1325307600000, currentValue: 690033.0},
				{timestamp: 1327986000000, currentValue: 690033.0},
				{timestamp: 1330491600000, currentValue: 690033.0},
				{timestamp: 1333166400000, currentValue: 514733.0},
				{timestamp: 1335758400000, currentValue: 514733.0}
			]
		}, {
			'key': 'Price',
			'bar': false,
			'values': [
				{timestamp: 1136005200000, currentValue: 71.89},
				{timestamp: 1138683600000, currentValue: 75.51},
				{timestamp: 1141102800000, currentValue: 68.49},
				{timestamp: 1143781200000, currentValue: 62.72},
				{timestamp: 1146369600000, currentValue: 70.39},
				{timestamp: 1149048000000, currentValue: 59.77},
				{timestamp: 1151640000000, currentValue: 57.27},
				{timestamp: 1154318400000, currentValue: 67.96},
				{timestamp: 1156996800000, currentValue: 67.85},
				{timestamp: 1159588800000, currentValue: 76.98},
				{timestamp: 1162270800000, currentValue: 81.08},
				{timestamp: 1164862800000, currentValue: 91.66},
				{timestamp: 1167541200000, currentValue: 84.84},
				{timestamp: 1170219600000, currentValue: 85.73},
				{timestamp: 1172638800000, currentValue: 84.61},
				{timestamp: 1175313600000, currentValue: 92.91},
				{timestamp: 1177905600000, currentValue: 99.8},
				{timestamp: 1180584000000, currentValue: 121.191},
				{timestamp: 1183176000000, currentValue: 122.04},
				{timestamp: 1185854400000, currentValue: 131.76},
				{timestamp: 1188532800000, currentValue: 138.48},
				{timestamp: 1191124800000, currentValue: 153.47},
				{timestamp: 1193803200000, currentValue: 189.95},
				{timestamp: 1196398800000, currentValue: 182.22},
				{timestamp: 1199077200000, currentValue: 198.08},
				{timestamp: 1201755600000, currentValue: 135.36},
				{timestamp: 1204261200000, currentValue: 125.02},
				{timestamp: 1206936000000, currentValue: 143.5},
				{timestamp: 1209528000000, currentValue: 173.95},
				{timestamp: 1212206400000, currentValue: 188.75},
				{timestamp: 1214798400000, currentValue: 167.44},
				{timestamp: 1217476800000, currentValue: 158.95},
				{timestamp: 1220155200000, currentValue: 169.53},
				{timestamp: 1222747200000, currentValue: 113.66},
				{timestamp: 1225425600000, currentValue: 107.59},
				{timestamp: 1228021200000, currentValue: 92.67},
				{timestamp: 1230699600000, currentValue: 85.35},
				{timestamp: 1233378000000, currentValue: 90.13},
				{timestamp: 1235797200000, currentValue: 89.31},
				{timestamp: 1238472000000, currentValue: 105.12},
				{timestamp: 1241064000000, currentValue: 125.83},
				{timestamp: 1243742400000, currentValue: 135.81},
				{timestamp: 1246334400000, currentValue: 142.43},
				{timestamp: 1249012800000, currentValue: 163.39},
				{timestamp: 1251691200000, currentValue: 168.21},
				{timestamp: 1254283200000, currentValue: 185.35},
				{timestamp: 1256961600000, currentValue: 188.5},
				{timestamp: 1259557200000, currentValue: 199.91},
				{timestamp: 1262235600000, currentValue: 210.732},
				{timestamp: 1264914000000, currentValue: 192.063},
				{timestamp: 1267333200000, currentValue: 204.62},
				{timestamp: 1270008000000, currentValue: 235.0},
				{timestamp: 1272600000000, currentValue: 261.09},
				{timestamp: 1275278400000, currentValue: 256.88},
				{timestamp: 1277870400000, currentValue: 251.53},
				{timestamp: 1280548800000, currentValue: 257.25},
				{timestamp: 1283227200000, currentValue: 243.1},
				{timestamp: 1285819200000, currentValue: 283.75},
				{timestamp: 1288497600000, currentValue: 300.98},
				{timestamp: 1291093200000, currentValue: 311.15},
				{timestamp: 1293771600000, currentValue: 322.56},
				{timestamp: 1296450000000, currentValue: 339.32},
				{timestamp: 1298869200000, currentValue: 353.21},
				{timestamp: 1301544000000, currentValue: 348.5075},
				{timestamp: 1304136000000, currentValue: 350.13},
				{timestamp: 1306814400000, currentValue: 347.83},
				{timestamp: 1309406400000, currentValue: 335.67},
				{timestamp: 1312084800000, currentValue: 390.48},
				{timestamp: 1314763200000, currentValue: 384.83},
				{timestamp: 1317355200000, currentValue: 381.32},
				{timestamp: 1320033600000, currentValue: 404.78},
				{timestamp: 1322629200000, currentValue: 382.2},
				{timestamp: 1325307600000, currentValue: 405.0},
				{timestamp: 1327986000000, currentValue: 456.48},
				{timestamp: 1330491600000, currentValue: 542.44},
				{timestamp: 1333166400000, currentValue: 599.55},
				{timestamp: 1335758400000, currentValue: 583.98}
			]
		}].map(function(series) {
			series.values = series.values.map(function(dataObject) {
				// This function will modify the value returned from a array of object to an array of array with 2 values X,Y.
				return {
					x: dataObject.timestamp,
					y: dataObject.currentValue
				};
			});
			return series;
		});

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