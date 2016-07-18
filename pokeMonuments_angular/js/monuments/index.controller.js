"use strict";

(function(){
  angular
  .module("monuments")
  .controller("MonumentIndexController", [
    "MonumentFactory",
    MonumentIndexControllerFunction
  ]);

  function MonumentIndexControllerFunction(MonumentFactory){
    this.Monument = MonumentFactory.query();
    this.newMonument = new MonumentFactory();
  }
}());
