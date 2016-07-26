"use strict";

(function(){
  angular
  .module("characters",[]) // should reference existing module, not create new. see characters.js
  .controller("CharacterIndexController", [
    "CharacterFactory",
    CharacterIndexControllerFunction
  ]);

  function CharacterIndexControllerFunction(CharacterFactory){
    this.Character = CharacterFactory.query();
console.log(this.Character); // in order to see this, you have to add a promise
// to .query, because .query is asynchronous
//    this.newCharacter = new CharacterFactory();
  }
}());
