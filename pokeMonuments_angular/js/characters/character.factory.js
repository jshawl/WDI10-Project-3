"use strict";

(function(){
  angular
  .module("characters")
  .factory("CharacterFactory", [
    "$resource",
    CharacterFactoryFunction
  ]);

  function CharacterFactoryFunction($resource){
console.log("test");
    return $resource("https://pokemonuments.herokuapp.com/characters/:id.json", {}, {
      update: {method: "PUT"}
    });
  }
}());
