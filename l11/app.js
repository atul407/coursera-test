(function () {
'use strict';

angular.module('MsgApp',[])

.controller('MsgController',MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope)
{
 $scope.name = "Atul";
$scope.stateOfBeing = "first";
 $scope.sayMessage = function(){
   return 'Check the message';
 }

 $scope.feedAtul = function(){
   $scope.stateOfBeing = "second";
 }

}

})();
