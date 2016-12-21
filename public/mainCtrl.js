angular.module('todo-app')
.controller('mainCtrl', function($scope, mainService) {

$scope.todoList = mainService.todoList;
$scope.inProgressList = mainService.inProgressList;
$scope.completedList = mainService.completedList;

$scope.addNewItem = function(item) {
  mainService.addNewItem(item);
}

$scope.passToInProgress = function(item, index) {
  mainService.passToInProgress(item, index);
}

$scope.passToCompleted = function(item, index) {
  mainService.passToCompleted(item, index);
}

$scope.deleteItem = function(item, index) {
  mainService.deleteItem(item, index);
}

})
