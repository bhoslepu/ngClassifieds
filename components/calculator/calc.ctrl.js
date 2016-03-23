 angular.module('ngClassifieds').controller('CalculatorController', function CalculatorController($scope) {
          
      $scope.$parent.showNavbar = true;
      $scope.$parent.inClassifeds = false;
      $scope.operation = "None"; 
     $scope.add = function(){
         $scope.result = parseInt($scope.firstNum) + parseInt($scope.secondNum);
         $scope.operation = "Add"; 
     }
 
     $scope.subtract = function(){
         $scope.result = parseInt($scope.firstNum) - parseInt($scope.secondNum);
         $scope.operation = "Subtract"; 
     }
     
     $scope.multiply = function(){
         $scope.result = parseInt($scope.firstNum) * parseInt($scope.secondNum);
         $scope.operation = "Multiply"; 
     }
     
     $scope.divide = function(){
         $scope.result = parseInt($scope.firstNum) / parseInt($scope.secondNum);
         $scope.operation = "Divide"; 
     }
 });