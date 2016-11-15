'use strict';

/**
 * @ngdoc function
 * @name projFiveApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the projFiveApp
 */

   angular.module('GemsStore')
     .controller('ProductCtrl', function () {
         this.products=[
                      {name:'Diamond Necklace',price:199.88,type:'Gold',description:'Gold Necklace Ornament',available:true,soldout:false},
                      {name:'Ring',type:'Gold',price:299.99,description:'Gold Ring Ornament',available:true,soldout:false},
                      {name:'Chain',type:'Gold',price:399.99,description:'Gold Ring Ornament',available:true,soldout:false},
                      {name:'Ear Ring',type:'Gold',price:200,description:'Gold Ring Ornament',available:true,soldout:false}
                    ];
          this.tab = 1;
          this.selectTab = function(setTab){
             this.tab = setTab;
          };
          this.isSelected = function(checkTab){
            return this.tab === checkTab;
          };
     });
