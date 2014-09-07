'use strict';

describe('Directive: couchJson', function() {

  // load the directive's module
  beforeEach(module('couchD3App', 'views/displayInfo.html'));

  var el, scope, compileFunction;
  // var element, scope;

  beforeEach(inject(function($rootScope, $compile) {
    el = angular.element('<couch-json></couch-json>');
    scope = $rootScope.$new();
    // scope.fetchingTo = 'https://matmath.iriscouch.com/';
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

      expect(el.find('button').text().trim()).toEqual('Fetch URL');
      expect(el.find('input').val().trim()).toEqual(scope.fetchingTo);

      // expect(el.find('h1').text().trim()).toEqual('Community Corpus');
    });
  });
});