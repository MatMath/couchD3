'use strict';

describe('Controller: BarNvd3Ctrl', function () {

  // load the controller's module
  beforeEach(module('couchD3App'));

  var BarNvd3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarNvd3Ctrl = $controller('BarNvd3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
