(function(angular) {
  'use strict';
angular.module('dataBindingExample', [])
  .controller('dataBindingController', ['$scope', function($scope) {
    $scope.name = '';
  }]);
})(window.angular);