"use strict";

(function(){
  angular
  .module("encounters")
  .controller("EncounterShowController", [
    "EncounterFactory",
    "CharacterFactory",
    "MonumentFactory",
    "$stateParams",
    EncounterShowControllerFunction
  ]);

  function EncounterShowControllerFunction(EncounterFactory,CharacterFactory,MonumentFactory, $stateParams){
    var vm = this;
    EncounterFactory.get({id: $stateParams.id}).$promise.then(function(encounter) {
      vm.encounter = encounter;
      // vm.character = CharacterFactory.get({id: encounter.character_id});
      // vm.monument = MonumentFactory.get({id: encounter.monument_id});
    });
  }
}());
