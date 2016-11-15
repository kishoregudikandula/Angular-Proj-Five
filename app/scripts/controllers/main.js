'use strict';

/**
 * @ngdoc function
 * @name projFiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projFiveApp
 */

   angular.module('GemsStore')
     .controller('MainCtrl', function () {
       this.awesomeThings = [
         'HTML5 Boilerplate',
         'AngularJS',
         'Karma'
       ];
       this.tab = 'mainTab';
     });
