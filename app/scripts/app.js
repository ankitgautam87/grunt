'use strict';

/**
 * @ngdoc overview 2345
 * @name jenkinsGruntApp
 * @description
 * # jenkinsGruntApp
 *
 * Main module of the application.
 */
angular
  .module('jenkinsGruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
