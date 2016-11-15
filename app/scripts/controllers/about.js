'use strict';

/**
 * @ngdoc function
 * @name projFiveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projFiveApp
 */
angular.module('GemsStore')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     this.tab = 'homeTab';
  });
