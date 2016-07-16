var app = angular.module('LeagueOfLegends', ['ngMaterial','ngRoute', 'ngCookies']);


//Mains Router
app.config(function($routeProvider){
    
        $routeProvider.when('/home', {
            templateUrl: 'views/mains/feed.html',
        })
        
        .when('/resume', {
            templateUrl: 'views/mains/login.html',
            controller: 'loginCtrl.js',
            controllerAs: 'login'
        })
               
        .when('/achivements', {
            templateUrl: 'views/mains/achivements.html',
        })

        .when('/events', {
            templateUrl: 'views/mains/events.html',
        })
        
        .when('/', {
            templateUrl: 'views/mains/feed.html',
        })
        .otherwise({ redirectTo: '/'});
    
});


//Main controller- contains registration and handle the data
app.controller('mainCtrl', function($scope, $http, $cookies){
        
    $scope.isLogedIn = ($cookies.get("isLogedIn") === "true") || false;
    $scope.active = Number($cookies.get("active") || 4);
    $scope.userName = $cookies.get("user") || ""; 
    $scope.isAdmin = ($cookies.get("isAdmin") === "true") || false;
    $scope.events = $cookies.getObject('events') || {};
    $scope.feed = $cookies.getObject('feed') || {};
    $scope.imgUrl = $cookies.get("imgUrl") || ""; 

    $scope.isActive = function(num){
        return $scope.active === num;
    };

    $scope.changeActive = function(active){
        if($scope.active == 4) return;
        $scope.active = active;
        $cookies.put("active",  active);
    }
    
    //InsertKey WebService - check if this key exists
    $scope.insertKey = function(key, callback){

        $http.get('https://league-of-legends-service.herokuapp.com/insertkey/'+key).success(function(data){
            callback(data);
        });
    }
        
    //Login WebService
    this.login = function(userName, password){
        var data = {
            'username': userName,
            'password': password
        };
        $http.post('https://league-of-legends-service.herokuapp.com/login', data)
            .success(function(data){
                if(data.status === "success") {
                    $scope.userName = data.user;
                    $scope.isAdmin = data.isAdmin;
                    $scope.isLogedIn = true;
                    $scope.active = 1;
                    window.location.hash = '/home';
                    
                    $cookies.put("user",  data.user);
                    $cookies.put("isAdmin",  data.isAdmin); 
                    $cookies.put("isLogedIn",  true); 
                    $cookies.put("active",  1);
                    
                    if(!$scope.isAdmin) {
                        $scope.imgUrl = data.imgUrl;
                        $cookies.put("imgUrl",  $scope.imgUrl);
                        $scope.showAchivements($scope.userName);
                        window.location.hash = '/feed';
                    } else {
                        $scope.showEvents();
                        window.location.hash = '/events';
                        $scope.active = 3;
                        $cookies.put("active",  3);
                    }
                     $scope.failed = "";
                }
                else {
                    $scope.failed = "Failed, please try again";
                    console.log($scope.failed);
                }
        });
    }
    
    //Logout WebService
    $scope.logout = function(){
        $scope.isLogedIn = false;
        $scope.active = 4;
        $scope.userName = "";
        $scope.isAdmin = false;
        $scope.imgUrl = "";
        $cookies.put("user",  "");
        $cookies.put("isAdmin",  false); 
        $cookies.put("isLogedIn",  false); 
        $cookies.put("active",  4);
    }
    
    //CreateUser WebService
    //  - check if the key exists 
    //      - if exist , created the new user
    $scope.createUser = function(userName, pass, mail, firstName, lastName, key) {
        $scope.insertKey(key, function(res) {
            if(res.status == "success") {
                var data = {
                    'username': userName,
                    'password': pass,
                    'mail': mail,
                    'firstname': firstName,
                    'lastname': lastName,
                };  
                $http.post('https://league-of-legends-service.herokuapp.com/createuser', data)
                    .success(function(data){
                        //console.log(data.status);
                        if(data.status === "success") {
                            location.reload(); 
                        }
                        else {
                            $scope.failed = "There were one or more errors in your submission, try again";
                            console.log($scope.failed);
                        }
                });
            } 
            else {
                $scope.failed = "Key don't exist, please try again";
                console.log($scope.failed);
            }
        });
    }
    
    //Get all the events data
    $scope.showEvents = function() {
        $scope.changeActive(3);
        $http.get('https://league-of-legends-service.herokuapp.com/showevents').success(function(data){
            $scope.events = data;
            console.log(data);
            $cookies.putObject('events',data);
        });
    }
    
    //Get all the feed data
    $scope.showAchivements = function(userName) {
        $scope.changeActive(1);
        $http.get('https://league-of-legends-service.herokuapp.com/showachievements/'+userName).success(function(data){
            $scope.feed = data;
            $cookies.putObject('feed', data);
        });
    }
    
    $scope.getFriendImage = function(friendId) {
        var path = "images/character" + friendId + ".png";
        return path; 
    }
    
    
});
