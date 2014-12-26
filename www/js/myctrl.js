
angular.module('starter.controllers', [])
.controller('MyController', function($scope, $stateParams, myService) {
  $scope.name = myService.getName();

    $scope.connect = function() {
        myService.connect();
        myService.on(function () {
          $scope.history = myService.getHistory();
          if ($scope.history.length>0) {
            var msg = "on change data:"+$scope.history.length+", "+$scope.history[$scope.history.length-1].value;
            console.log(msg);
        }
    });
    } 

    $scope.history = [];
})

