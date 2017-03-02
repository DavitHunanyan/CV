var app = angular.module('game', []);

app.controller('questionCtrl', function($scope, $window,$document) {
   var questions=data;
   var users=[];
   var user_bal=0;
   var step=0;

  $scope.question=data[step].question;
  $scope.answers=data[step].answers;
  
  $scope.answer=function(answ){
  	    var answer_id="#style"+answ;
	    var answer_el=angular.element( document.querySelector( answer_id ) );

	    if(questions[step].answers[answ].bool=="true"){
	     	user_bal+=1;
        answer_el.addClass("true");
	    
	    var id="#id"+user_bal;
	    var elem=angular.element( document.querySelector( id ) );
        elem.addClass('active');
        }
        else{
          answer_el.addClass("wrong");
        }
	    console.log(user_bal);
   };

   $scope.next=function(){
	   	step+=1;

        var arr=["#style0","#style1","#style2","#style3"];
        for(var i=0; i<arr.length;++i){
        	var elem =angular.element( document.querySelector( arr[i]));
        	elem.removeClass('true');
        	elem.removeClass('wrong');
        }
	   	if(step<questions.length){
	        $scope.question=data[step].question;
	        $scope.answers=data[step].answers;
            }
	   	if(step===questions.length){
	   		users.push({"User Bal":user_bal});
	   		var nxtbut=angular.element( document.querySelector('#nextButton'));
	   		nxtbut.attr('href','result.html?val='+user_bal);//datai  poxancum
	   	}
   };


});

