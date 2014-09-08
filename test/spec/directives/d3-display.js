'use strict';

describe('Directive: d3Display', function() {

  // load the directive's module
  beforeEach(module('couchD3App', 'views/d3BarGraph.html'));

  var el, scope, compileFunction;
  // var element, scope;

  beforeEach(inject(function($rootScope, $compile) {
    el = angular.element('<d3-display></d3-display>');
    scope = $rootScope.$new();
    compileFunction = $compile(el);
    scope.$digest();
    // bring html from templateCache
    console.log('post compile', el.html()); // <== html here has {{}}
  }));

  it('should make hidden element visible', function() {
    inject(function() {
      compileFunction(scope); // <== the html {{}} are bound
      scope.$digest(); // <== digest to get the render to show the bound values
      console.log('post link', el.html());
      expect(el.find('h1').text().trim()).toEqual('Graph');
    });
  });
});