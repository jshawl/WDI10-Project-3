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
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("monumentIndex", {
      url: "/",
      templateUrl: "pokemonuments_angular/js/monuments/index.html",
      controller: "MonumentIndexController",
      controllerAs: "MonumentIndexViewModel"
    })
    .state("monumentShow", {
      url: "/:id",
      templateUrl: "js/monuments/show.html",
      controller: "MonumentShowController",
      controllerAs: "MonumentShowViewModel"
    })
      .state("encounterIndex", {
        url: "/",
        templateUrl: "pokemonuments_angular/js/encounters/index.html",
        controller: "EncounterIndexController",
        controllerAs: "EncounterIndexViewModel"
      })
      .state("encounterShow", {
        url: "/:id",
        templateUrl: "js/encounters/show.html",
        controller: "EncounterShowController",
        controllerAs: "EncounterShowViewModel"
      })
        .state("characterIndex", {
          url: "/",
          templateUrl: "pokemonuments_angular/js/characters/index.html",
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
    }
  }
}());
