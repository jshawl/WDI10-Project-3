"use strict";

(function(){
  angular
  .module("characters")
  .controller("CharacterIndexController", [
    "CharacterFactory",
    CharacterIndexControllerFunction
  ]);

  function CharacterIndexControllerFunction(CharacterFactory){
    this.Character = CharacterFactory.query();
    this.newCharacter = new CharacterFactory();
  }
}());
