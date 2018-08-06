app.controller("myController",function($scope,$http){
    $http.get("http://localhost:3000/").then(function(response){
        $scope.datas=response.data;

    });
    $scope.giveFeedback=function(){
      let feedback={
        email:$scope.email,
        name:$scope.name,
        msg:$scope.msg
        }

        $http.post("http://localhost:3000/feedback",feedback).then(function(response){

        })

    }

});
