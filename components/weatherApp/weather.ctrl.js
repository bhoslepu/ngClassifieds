(function () {
	// body...
	"use strict";

	angular.module('ngClassifieds').controller('weatherController',['$scope', function($scope){
		$scope.$parent.showNavbar = true;
    	$scope.$parent.inClassifeds = false; 

	}]);
})();