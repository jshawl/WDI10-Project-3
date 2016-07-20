"use strict";

(function(){
  angular
  .module("encounters")
  .controller("EncounterIndexController", [
    "EncounterFactory",
    "CharacterFactory",
    "MonumentFactory",
    EncounterIndexControllerFunction
  ]);

  function EncounterIndexControllerFunction(EncounterFactory,CharacterFactory,MonumentFactory){
    this.Encounter = EncounterFactory.query();
    this.newEncounter = new EncounterFactory()
    this.Characters = CharacterFactory.query()
    this.Monuments = MonumentFactory.query();
  }
}());
