/**
 * 
 */

angular.module('myControllerApp',[]).controller('personController', function($scope){
	$scope.firstName='Jessie',
	$scope.lastName='Brown',
	$scope.fullName=function(){
		return $scope.firstName + " " + $scope.lastName;
	}
})