'use strict';

describe('Directive: donutDisplay', function() {

  // load the directive's module
  beforeEach(module('couchD3App', 'views/graphInfo.html'));

  var el, scope, compileFunction;
  // var element, scope;

  beforeEach(inject(function($rootScope, $compile) {
    // el = angular.element('<div></div>'); 
    el = angular.element('<donut-display data="donuts[0]"> </donut-display><donut-display data="donuts[1]"> </donut-display>');
    scope = $rootScope.$new();
    scope.donuts = [
      [1, 2, 3, 4, 5],
      [6, 7, 8]
    ];
    scope.donut = scope.donuts[0];
    console.log('pre compile', el.html()); // <== html here has {{}}
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
      expect(el.find('table').length).toEqual(2);
      expect(el.find('svg').length).toEqual(2);
      expect(el.find('path').length).toEqual(8);
    });
  });
});