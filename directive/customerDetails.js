(function(angular) {
  'use strict';
angular.module('customDirective', [])
  .controller('customerDetailsController', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Jan Janssen',
      address: 'Schutterij 8',
	  city: 'Veenendaal'
    };
  }])
  .directive('customerDetails', function() {
    return {
      template: 'Name: {{customer.name}}<br/> Address: {{customer.address}}<br/> City: {{customer.city}}<br/>'
    };
  });
})(window.angular);