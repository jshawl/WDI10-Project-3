"use strict";

(function(){
  angular
  .module("monuments")
  .directive("monumentForm", [
    "MonumentFactory",
    "$state",
    MonumentFormDirectiveFunction
  ]);

  function MonumentFormDirectiveFunction(MonumentFactory, $state){
    return{
      templateUrl: "js/monuments/form.html",
      scope: {
      monument: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.encounter.$save(function(response){
            $state.go("monumentIndex", {}, {reload: true});
          });
        }
        scope.update = function(){
          scope.monument.$update({id: scope.monument.id}, function(response){
            console.log(response);
          });
        }
        scope.delete = function(){
          scope.monument.$delete({id: scope.monument.id}, function(){
            $state.go("monumentIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}());
