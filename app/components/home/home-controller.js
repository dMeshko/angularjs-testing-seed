angular.module("angularjs.testing").controller("HomeController", [
    "$scope", 
    function($scope){
        $scope.message = "Hello World!";
    }
]);