angular.module('todo-app')
.service('mainService', function($http, $q) {

  this.todoList = ['apples'];
  this.inProgressList = [];
  this.completedList = [];

  this.addNewItem = function (newItem) {
    this.todoList.push(newItem);
  }

  this.passToInProgress = function(item, index) {
    this.inProgressList.push(item);
    this.todoList.splice(index, 1);
  }

  this.passToCompleted = function(item, index) {
    this.completedList.push(item);
    this.inProgressList.splice(index, 1);
    alert('your awesome joe!');
  }

  this.deleteItem = function(item, index) {
    this.completedList.splice(index, 1);
  }



})
