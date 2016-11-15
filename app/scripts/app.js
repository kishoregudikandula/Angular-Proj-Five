'use strict';

/**
 * @ngdoc overview
 * @name projFiveApp
 * @description
 * # projFiveApp
 *
 * Main module of the application.
 */
angular
  .module('GemsStore', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'

      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'

      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
