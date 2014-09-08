/* globals d3 */

'use strict';

/**
 * @ngdoc directive
 * @name couchD3App.directive:d3Display
 * @description
 * # d3Display
 */
angular.module('couchD3App').directive('d3Display', function() {

	// var returncolor = function() {
	// 	return 'red';
	// };

	var link = function link(scope, element) {
	    // the D3 bits..
	    var color = d3.scale.category10();
	    var el = element[0];
	    var width = 100;
	    var height = 100;
	    var min = Math.min(width, height);
	    var pie = d3.layout.pie().sort(null);
	    var arc = d3.svg.arc()
	      .outerRadius(min / 2 * 0.9)
	      .innerRadius(min / 2 * 0.5);
	    var svg = d3.select(el).append('svg')
	      .attr({width: width, height: height})
	      .append('g')
	        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
	    
	    // add the <path>s for each arc slice
	    svg.selectAll('path').data(pie(scope.data))
	      .enter().append('path')
	        .style('stroke', 'white')
	        .attr('d', arc)
	        .attr('fill', function(d, i){ return color(i); });
	  };

	return {
		restrict: 'E',
		link: link,
		
		scope: {
			data: '='
		}
	};
});