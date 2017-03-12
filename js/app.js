var app = angular.module("ArabicAlphabetApp", ['ngRoute', 'ui.bootstrap']);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when('/all', {
            templateUrl: 'pages/main.html'
        })
        .when('/slide', {
            templateUrl: 'pages/slideView.html'
        })
        .otherwise({
            redirectTo: '/slide'
    });
}]);



app.factory("DataService",["$http", function($http){
    
    var getArabicAlphabet = function(){
        return $http.get('json/arabic-alphabet.json');
    };
    
    return {
        getArabicAlphabet: getArabicAlphabet
    }
        
}]);

app.controller("ArabicAlphabetCtrl", ["$scope", "DataService", function($scope, DataService){
   
    
    $scope.myInterval = 2000;
    var getArabicAlphabets = function(){
        DataService.getArabicAlphabet().then(
            function(results){
                 $scope.arabicAlphabets = results;
            },
            function(error){
                console.log(error);
            });
    };
    getArabicAlphabets();
}]);



$(function() {
  $('a').click( function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
