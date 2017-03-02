
var result=angular.module('result',[]);

result.controller("resultCtrl",function($scope,$window){

   function param(Name)
			{
				var Params = location.search.substring(1).split("&");
				var variable = "";
				for (var i = 0; i < Params.length; i++)
				{
					if(Params[i].split("=")[0] == Name)
					{
					  if (Params[i].split("=").length > 1)
					    variable = Params[i].split("=")[1];
					return variable;
					}
			    }
				return "";
			}
var select=param("val");
$scope.userbal=select;
});


