"use strict";

(function(){
  angular
  .module("monuments")
  .factory("MonumentFactory", [
    "$resource",
    MonumentFactoryFunction
  ]);

  function MonumentFactoryFunction($resource){
    return $resource("https://pokemonuments.herokuapp.com/monuments/:id.json", {}, {
      update: {method: "PUT"}
    });
  }
}());
