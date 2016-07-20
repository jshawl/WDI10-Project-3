"use strict";

(function(){
  angular
  .module("characters",[])
  .controller("CharacterIndexController", [
    "CharacterFactory",
    "MonumentFactory",
    CharacterIndexControllerFunction
  ]);

  function CharacterIndexControllerFunction(CharacterFactory, MonumentFactory){
    this.characters = CharacterFactory.query()
    this.Monuments = MonumentFactory.query();
//    this.newCharacter = new CharacterFactory();
  }
}());
