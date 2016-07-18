"use strict";

(function(){
  angular
  .module("characters")
  .factory("CharacterFactory", [
    "$resource",
    CharacterFactoryFunction
  ]);

  function CharacterFactoryFunction($resource){
    return $resource("http://localhost:8080/characters/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
