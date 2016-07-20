"use strict";

(function(){
  angular
  .module("monuments")
  .controller("MonumentIndexController", [
    "MonumentFactory",
    "CharacterFactory",
    MonumentIndexControllerFunction
  ]);

  function MonumentIndexControllerFunction(MonumentFactory, CharacterFactory){
    this.Monument = MonumentFactory.query()
    this.Characters = CharacterFactory.query()
    console.log(this.Monument);
//    this.newMonument = new MonumentFactory();
  }
}());
