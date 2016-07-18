"use strict";

(function(){
  angular
  .module("character")
  .directive("characterForm", [
    "CharacterFactory",
    "$state",
    CharacterFormDirectiveFunction
  ]);

  function CharacterFormDirectiveFunction(CharacterFactory, $state){
    return{
      templateUrl: "js/characters/form.html",
      scope: {
        grumble: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.character.$save(function(response){
            $state.go("characterIndex", {}, {reload: true});
          });
        }
        scope.update = function(){
          scope.character.$update({id: scope.character.id}, function(response){
            console.log(response);
          });
        }
        scope.delete = function(){
          scope.character.$delete({id: scope.character.id}, function(){
            $state.go("characterIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}());
