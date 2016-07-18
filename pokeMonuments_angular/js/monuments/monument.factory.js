"use strict";

(function(){
  angular
  .module("monuments")
  .factory("MonumentFactory", [
    "$resource",
    MonumentFactoryFunction
  ]);

  function MonumentFactoryFunction($resource){
    return $resource("http://localhost:8080/monuments/:id", {}, {
      update: {method: "PUT"}
    });

  }
}());
