var app = angular.module('LeagueOfLegends', ['ngMaterial','ngRoute', 'ngCookies']);

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


app.controller('mainCtrl', function($scope, $http, $cookies){
        
    $scope.isLogedIn = ($cookies.get("isLogedIn") === "true") || false;
    $scope.active = Number($cookies.get("active") || 4);
    $scope.userName = $cookies.get("user") || ""; 
    $scope.isAdmin = ($cookies.get("isAdmin") === "true") || false;
    $scope.events = $cookies.getObject('events') || {};
    $scope.feed = $cookies.getObject('feed') || {};

    $scope.isActive = function(num){
        return $scope.active === num;
    };

    $scope.changeActive = function(active){
        if($scope.active == 4) return;
        $scope.active = active;
        $cookies.put("active",  active);
    }
    
    $scope.insertKey = function(key, callback){

        $http.get('https://league-of-legends-service.herokuapp.com/insertkey/'+key).success(function(data){
            callback(data);
        });
    }
        
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
                        $scope.showAchivements($scope.userName);
                        window.location.hash = '/feed';
                    } else {
                        $scope.showEvents();
                        window.location.hash = '/events';
                        $scope.active = 3;
                        $cookies.put("active",  3);
                    }
                }
                else {
                    //show error
                }
        });
    }
    
    $scope.logout = function(){
        $scope.isLogedIn = false;
        $scope.active = 4;
        $scope.userName = "";
        $scope.isAdmin = false;
        $cookies.put("user",  "");
        $cookies.put("isAdmin",  false); 
        $cookies.put("isLogedIn",  false); 
        $cookies.put("active",  4);
    }
    
    $scope.createUser = function(userName, pass, mail, firstName, lastName, key) {
        console.log(userName);
        console.log(pass);
        console.log(mail);
        console.log(firstName);
        console.log(lastName);
        console.log(key);
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
                            //failed create new user error
                        }
                });
            } 
            else {
                //key not exist
            }
        });
    }
    
    $scope.showEvents = function() {
        
        $scope.changeActive(3);
        $http.get('https://league-of-legends-service.herokuapp.com/showevents').success(function(data){
            $scope.events = data;
            $cookies.putObject('events',data);
        });
    }
    
    $scope.showAchivements = function(userName) {
        $scope.changeActive(1);
        $http.get('https://league-of-legends-service.herokuapp.com/showachievements/'+userName).success(function(data){
            $scope.feed = data;
            $cookies.putObject('feed', data);
        });
    }
    
    $scope.getMonsterPicture = function() {
        var randomImg = "../../images/character";
        var tempNum = 0;
        return randomImg + Math.floor((Math.random() * 5) + 1) + ".png";
        console.log(randomImg + Math.floor((Math.random() * 5) + 1) + ".png");
    }
    
});
