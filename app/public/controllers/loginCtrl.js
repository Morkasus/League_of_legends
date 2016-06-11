
angular.module('mySite').controller('loginCtrl', function($scope){
        
    this.active = 1;

    this.isActive = function(num){
        return this.active === num;
    };

    this.changeActive = function(active){
        this.active = active;
    }
});

//todoApp.run(function($http){
//    $http.get('http://localhost:3000/ws_todo/getActionsData').success(function(data){
//        console.log(data);
//        userName = data.userName;
//    });
//});