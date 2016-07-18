"use strict";

(function(){
  angular
  .module("characters")
  .controller("CharacterShowController", [
    "CharacterFactory",
    "$stateParams",
    CharacterShowControllerFunction
  ]);

  function CharacterShowControllerFunction(CharacterFactory, $stateParams){
    this.character = CharacterFactory.get({id: $stateParams.id});
  }
}()); 
