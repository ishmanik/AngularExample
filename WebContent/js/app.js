var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
  $scope.friends = [
    { name: "Peter",   phone:'+13-201234' ,email:"peter@gmail.com",policyno:'1234|1234|2222' },
    { name: "Pablo",   phone:'+41-201222' ,email:"Pablo@gmail.com",policyno:'1236|2322|2422' },
    { name: "Linda",   phone:'+87-201132' ,email:"Linda@gmail.com",policyno:'1212|3434|3433' },
    
  ];

  $scope.filterFunction = function(element) {
	  if (!$scope.query || 
		        (element.name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) || 
		        (element.policyno.toLowerCase().indexOf($scope.query.toLowerCase()) != -1)             
		       ){
		        return true;
		    }
		    return false;
  };

});