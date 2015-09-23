(function(angular) {
  'use strict';
	var myApp = angular.module('capital', []);
	myApp.controller('dutchController', ['$scope', function($scope) {
	  $scope.name = 'Amsterdam';
	}]);
	myApp.controller('macedonianController', ['$scope', function($scope) {
	  $scope.name = 'Skopje';
	}]);
	myApp.controller('swissController', ['$scope', function($scope) {
	  $scope.name = 'Bern';
	}]);
})(window.angular);