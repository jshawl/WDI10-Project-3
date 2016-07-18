"use strict";

(function(){
  angular
  .module("encounters")
  .factory("EncounterFactory", [
    "$resource",
    EncounterFactoryFunction
  ]);

  function EncounterFactoryFunction($resource){
    return $resource("http://localhost:8080/pokeMonuments_angular/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
