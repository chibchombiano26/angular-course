/*global angular*/
var app = angular.module("myFirstApp",['ui.router', 'oc.lazyLoad']);

app.config(function($stateProvider, $urlRouterProvider){
    
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      controller: 'firstCtrl',
      templateUrl: "views/state1.html",
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('js/controllers/firstCtrl.js');
        }]
      }
    });
})