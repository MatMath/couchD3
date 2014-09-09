'use strict';

describe('Controller: Nvd3Ctrl', function () {

  // load the controller's module
  beforeEach(module('couchD3App'));

  var Nvd3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Nvd3Ctrl = $controller('Nvd3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
