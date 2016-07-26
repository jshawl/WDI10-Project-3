"use strict";

(function(){
  angular
  .module("pokemonuments_angular", [
    "ui.router",
    "monuments",
    "encounters",
    "characters"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true); // nice!
    $stateProvider
    .state("monumentIndex", {
      url: "/",
      templateUrl: "js/monuments/index.html",
      controller: "MonumentIndexController",
      controllerAs: "MonumentIndexViewModel"
    })
    .state("monumentShow", {
      url: "/:id",
      templateUrl: "js/monuments/show.html",
      controller: "MonumentShowController",
      controllerAs: "MonumentShowViewModel"
    })
    .state("characterIndex", {
      url: "/",
      templateUrl: "js/characters/index.html",
      controller: "CharacterIndexController",
      controllerAs: "CharacterIndexViewModel"
    })
    .state("characterShow", {
      url: "/:id",
      templateUrl: "js/characters/show.html",
      controller: "CharacterShowController",
      controllerAs: "CharacterShowViewModel"
    });
  }
}());
