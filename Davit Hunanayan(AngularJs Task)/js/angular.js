var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);
  
app.controller('listData', function($scope,$http,$window) {
  $scope.users =data;//not server 
  /*$scope.users = ''; 
    $http.get("data.json").success(function(response){ 
        $scope.users = response;  
    });*/

  $scope.sort=function(keyname){
  	$scope.sortkey=keyname;
  	$scope.reverse=!$scope.reverse;
   
  };

  $scope.detail=function(user_id){
  	  for (var i = 0; i <data.length; ++i){
       if(data[i].id===user_id){

        var obj_data={

        userfname:data[i].firstname,
        userlname:data[i].lastname,
        usercity:data[i].city,
        userage:data[i].age
        }
      
       }
     }
      $window.open('popup.html').name=JSON.stringify(obj_data); 
    	
  };
});
