var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");


  var refresh = function () {
    $http.get('/project').success(function (response) {
      console.log("I got the data I requested");
      $scope.projectlist = response;
      $scope.project = "";
    });
    $http.get('/skills').success(function (response) {
      console.log("I got the data I requested");
      $scope.skilllist = response;
      $scope.skill = "";
    });
    $http.get('/edu').success(function (response) {
      console.log("I got the data I requested");
      $scope.edulist = response;
      $scope.edu = "";
    });
  };

  refresh();

}]);