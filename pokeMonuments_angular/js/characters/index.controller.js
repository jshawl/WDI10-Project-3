"use strict";

(function(){
  angular
  .module("characters",[])
  .controller("CharacterIndexController", [
    "CharacterFactory",
    CharacterIndexControllerFunction
  ]);

  function CharacterIndexControllerFunction(CharacterFactory){
    this.Character = CharacterFactory.query();
    console.log(this.Character);
//    this.newCharacter = new CharacterFactory();
  }
}());
