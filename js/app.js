/*global angular*/
var app = angular.module("myFirstApp",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "views/state1.html"
    });
})