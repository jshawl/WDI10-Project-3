"use strict";

(function(){
  angular
  .module("encounters")
  .controller("EncounterShowController", [
    "EncounterFactory",
    "$stateParams",
    EncounterShowControllerFunction
  ]);

  function EncounterShowControllerFunction(EncounterFactory, $stateParams){
    this.encounter = EncounterFactory.get({id: $stateParams.id});
  }
}());
 
