/**
 * 
 */

// define a module
/*var myModule = angular.module("myModule",[]);

// create a value object and pass it a data
myModule.value("numberValue", 100);
myModule.value("stringValue", "angular");
myModule.value("objectValue", {val1: 123, val2: 'javascript'});
*/
// created a factory and injected value dependency to the factory
/*myModule.factory("myFactory", function(numberValue){
	return numberValue;
});
*/

// created a service
/*myModule.service("CalcService", function(MathService){
	this.square=function(a){
		return MathService.multiply(a,a);
	}
});*/


// created controller and injected value dependency to controller
/*myModule.controller("myController", function($scope, numberValue){
	$scope.number=numberValue;
})*/

// created contoller and injected factory dependency to controller
/*myModule.controller("myController", function($scope, myFactory){
$scope.number=myFactory;
});*/

// created a controller and injected service dependency to the controller
/*myModule.controller('myController', function($scope, CalcService, defaultInput) {  
	   $scope.number = defaultInput;  
	   $scope.result = CalcService.square($scope.number);  
	    $scope.square = function() {  
	      $scope.result = CalcService.square($scope.number);  
	   }  
	}); */



var mainApp = angular.module("mainApp", []);  
           
         mainApp.config(function($provide) {  
            $provide.provider('MathService', function() {  
               this.$get = function() {  
                  var factory = {};  
                    
                  factory.multiply = function(a, b) {  
                     return a * b;  
                  }  
                  return factory;  
               };  
            });  
         });  
              
         mainApp.value("defaultInput", 10);  
           
         mainApp.factory('MathService', function() {  
            var factory = {};  
              
            factory.multiply = function(a, b) {  
               return a * b;  
            }  
            return factory;  
         });  
           
         mainApp.service('CalcService', function(MathService){  
            this.square = function(a) {  
               return MathService.multiply(a,a);  
            }  
         });  
           
         mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {  
            $scope.number = defaultInput;  
            $scope.result = CalcService.square($scope.number);  
  
            $scope.square = function() {  
               $scope.result = CalcService.square($scope.number);  
            }  
         });  
