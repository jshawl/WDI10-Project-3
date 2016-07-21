"use strict";

(function(){
  angular
  .module("encounters")
  .factory("EncounterFactory", [
    "$resource",
    EncounterFactoryFunction
  ]);

  function EncounterFactoryFunction($resource){
    return $resource("https://pokemonuments.herokuapp.com/encounters/:id.json", {}, {
      update: {method: "PUT"}
    });
  }
}());
