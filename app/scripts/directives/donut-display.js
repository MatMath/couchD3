/* globals d3 */
/* Inspired a lot from: https://github.com/vicapow/angular-d3-talk/blob/master/slides/demos/lets-make-a-donut-chart-directive */

'use strict';

/**
 * @ngdoc directive
 * @name couchD3App.directive:donutDisplay
 * @description
 * # donutDisplay
 */
angular.module('couchD3App').directive('donutDisplay', function() {

	var link = function link(scope, element) {
		if (scope.data === undefined) {
			return;
		}
		// the D3 bits..
		var color = d3.scale.category10();
		var el = element[0];
		var width = el.clientWidth;
		var height = el.clientHeight;
		var min = Math.min(width, height);
		var pie = d3.layout.pie().sort(null);
		var arc = d3.svg.arc()
			.outerRadius(min / 2 * 0.9)
			.innerRadius(min / 2 * 0.5);
		var svg = d3.select(el).append('svg')
			.attr({
				width: width,
				height: height
			});
		
		svg.on('mousedown', function(d) {
			// yo angular, the code in this callback might make a change to the scope!
			// so be sure to apply $watch's and catch errors.
			console.log(d);
			scope.$apply(function() {
				if (scope.onClick) {
					scope.onClick();
				}
			});
		});

		function arcTween(a) {
			// see: http://bl.ocks.org/mbostock/1346410
			var i = d3.interpolate(scope._current, a);
			scope._current = i(0);
			return function(t) {
				return arc(i(t));
			};
		}

		// add the <path>s for each arc slice
		// All modification in the arc actually modify the item inside "svg"
		var arcs = svg.selectAll('path.arc').data(pie(scope.data))
			.enter().append('path')
			.attr('class', 'arc')
			.style('stroke', 'white')
			.attr('fill', function(d, i) {
				return color(i);
			})
			// store the initial angles
			.each(function(d) {
				scope._current = d;
				return;
			});

		// our data changed! update the arcs, adding, updating, or removing 
		// elements as needed
		scope.$watch('data', function(newData, oldData) {
			if (newData === undefined) {
				// if no data return so it wont make an error.
				return;
			}
			var data = newData.slice(0); // copy
			var duration = 500;
			var PI = Math.PI;
			while (data.length < oldData.length) {
				data.push(0);
			}
			arcs = svg.selectAll('.arc').data(pie(data));
			arcs.transition().duration(duration).attrTween('d', arcTween);
			// transition in any new slices
			arcs.enter().append('path')
				.style('stroke', 'white')
				.attr('class', 'arc')
				.attr('fill', function(d, i) {
					return color(i);
				})
				.each(function(d) {
					console.log(d);
					this._current = {
						startAngle: 2 * PI - 0.001,
						endAngle: 2 * PI
					};
				})
				.transition().duration(duration).attrTween('d', arcTween);
			// transition out any slices with size = 0
			arcs.filter(function(d) {
				return d.data === 0;
			})
				.transition()
				.duration(duration)
				.each(function(d) {
					d.startAngle = 2 * PI - 0.001;
					d.endAngle = 2 * PI;
				})
				.attrTween('d', arcTween).remove();
		});

		scope.$watch(function() {
			// If any elemet in the width or height, it will trigger the next function
			return el.clientWidth * el.clientHeight;
		}, function() {
			// When the width change we need to modify all element associated with that width and height
			width = el.clientWidth;
			height = el.clientHeight;
			min = Math.min(width, height);
			arc.outerRadius(min / 2 * 0.9).innerRadius(min / 2 * 0.5);
			svg.attr({width: width, height: height});
			arcs.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
			arcs.attr('d', arc);
		});
		
	};

	return {
		restrict: 'E',
		link: link,
		scope: {
			'data': '=',
			'onClick': '&'
		},
		templateUrl: 'views/graphInfo.html'
	};
});