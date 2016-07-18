"use strict";

(function(){
  angular
  .module("monuments")
  .controller("MonumentShowController", [
    "MonumentFactory",
    "$stateParams",
    MonumentShowControllerFunction
  ]);

  function MonumentShowControllerFunction(MonumentFactory, $stateParams){
    this.monument = MonumentFactory.get({id: $stateParams.id});
  }
}());
