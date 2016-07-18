"use strict";

(function(){
  angular
  .module("encounter")
  .directive("encounterForm", [
    "EncounterFactory",
    "$state",
    EncounterFormDirectiveFunction
  ]);

  function EncounterFormDirectiveFunction(EncounterFactory, $state){
    return{
      templateUrl: "js/encounters/form.html",
      scope: {
        grumble: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.encounter.$save(function(response){
            $state.go("encounterIndex", {}, {reload: true});
          });
        }
        scope.update = function(){
          scope.encounter.$update({id: scope.encounter.id}, function(response){
            console.log(response);
          });
        }
        scope.delete = function(){
          scope.character.$delete({id: scope.encounter.id}, function(){
            $state.go("encounterIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}());
