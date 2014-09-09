'use strict';

describe('Controller: LineplusbarwithfocuschartCtrl', function () {

  // load the controller's module
  beforeEach(module('couchD3App'));

  var LineplusbarwithfocuschartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LineplusbarwithfocuschartCtrl = $controller('LineplusbarwithfocuschartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
