'use strict';

describe('Directive: simpleBarChart', function () {

  // load the directive's module
  beforeEach(module('couchD3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simple-bar-chart></simple-bar-chart>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the simpleBarChart directive');
  }));
});
