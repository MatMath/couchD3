'use strict';

describe('Controller: Linegraphnvd3Ctrl', function () {

  // load the controller's module
  beforeEach(module('couchD3App'));

  var Linegraphnvd3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Linegraphnvd3Ctrl = $controller('Linegraphnvd3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
