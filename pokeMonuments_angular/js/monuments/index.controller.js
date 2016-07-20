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
    console.log(this.Monument);
//    this.newMonument = new MonumentFactory();
  }
}());
