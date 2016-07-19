"use strict";

(function(){
  angular
  .module("monuments")
  .factory("MonumentFactory", [
    "$resource",
    MonumentFactoryFunction
  ]);

  function MonumentFactoryFunction($resource){
    return $resource("http://localhost:3000/monuments", {}, {
      update: {method: "PUT"}
    });

  }
}());
