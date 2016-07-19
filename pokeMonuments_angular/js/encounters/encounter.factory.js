"use strict";

(function(){
  angular
  .module("encounters")
  .factory("EncounterFactory", [
    "$resource",
    EncounterFactoryFunction
  ]);

  function EncounterFactoryFunction($resource){
    return $resource("http://localhost:3000/encounters/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
