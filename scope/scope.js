(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('ScopeController', ['$scope', function($scope) {
    
	$scope.todoItems = [
		"Release Magnolia Blog App",
		"Finish Presentation",
	];
	
	$scope.addTodoItem = function(todoItem){
		$scope.todoItems.push(todoItem);
		$scope.newTodoItem = null;
	}
	
	$scope.removeTodoItem = function(index){
		$scope.todoItems.splice(index, 1);
	} 
  }]);
})(window.angular)