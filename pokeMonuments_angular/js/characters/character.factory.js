"use strict";

(function(){
  angular
  .module("characters")
  .factory("CharacterFactory", [
    "$resource",
    CharacterFactoryFunction
  ]);

  function CharacterFactoryFunction($resource){
    return $resource("http://localhost:3000/characters", {}, {
      update: {method: "PUT"}
    });
  }
}());
