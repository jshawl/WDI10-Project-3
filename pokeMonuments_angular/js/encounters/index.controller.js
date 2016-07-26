"use strict";

(function(){
  angular
  .module("encounters")
  .controller("EncounterIndexController", [
    "EncounterFactory",
    EncounterIndexControllerFunction
  ]);

  function EncounterIndexControllerFunction(EncounterFactory){
    this.encounters = EncounterFactory.query();
    this.newEncounter = new EncounterFactory();
  }
}());
 
