(function () {
'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController',function ($scope){

$scope.name = 'Atul';

$scope.sayHello = function(){
  return "Hello Coursers";
};

});

})();
