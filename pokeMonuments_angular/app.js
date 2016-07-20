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
      url: "/monuments",
      templateUrl: "js/monuments/index.html",
      controller: "MonumentIndexController",
      controllerAs: "MonumentIndexViewModel"
    })
    .state("monumentShow", {
      url: "/moments/:id",
      templateUrl: "js/monuments/show.html",
      controller: "MonumentShowController",
      controllerAs: "MonumentShowViewModel"
    })
    .state("characterIndex", {
      url: "/characters",
      templateUrl: "js/characters/index.html",
      controller: "CharacterIndexController",
      controllerAs: "CharacterIndexViewModel"
    })
    .state("characterShow", {
      url: "/characters/:id",
      templateUrl: "js/characters/show.html",
      controller: "CharacterShowController",
      controllerAs: "CharacterShowViewModel"
    });

/*
    function RouterFunction($stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
      .state("encounterIndex", {
        url: "/",
        templateUrl: "js/encounters/index.html",
        controller: "EncounterIndexController",
        controllerAs: "EncounterIndexViewModel"
      })
      .state("encounterShow", {
        url: "/:id",
        templateUrl: "js/encounters/show.html",
        controller: "EncounterShowController",
        controllerAs: "EncounterShowViewModel"
      });


      function RouterFunction($stateProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $stateProvider
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
}*/
    }
}());
