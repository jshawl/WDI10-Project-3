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
    return $resource("http://localhost:3000/characters/:id.json", {}, {
      update: {method: "PUT"}
    });
  }
}());
