
angular.module('starter.controllers', [])
.controller('MyController', function($scope, $stateParams, myService) {
  $scope.name = myService.getName();

    $scope.connect = function() {
        myService.connect();
        myService.on(function () {
          $scope.history = myService.getHistory();
    });
    } 

    $scope.history = [];
})

