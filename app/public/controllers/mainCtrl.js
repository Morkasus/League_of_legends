var app = angular.module('LeagueOfLegends', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
    
        $routeProvider.when('/home', {
            templateUrl: '../views/mains/index.html',
        })
        
        .when('/resume', {
            templateUrl: '../views/mains/resume.html',
            controller: 'loginCtrl.js',
            controllerAs: 'login'
        })
               
        .when('/achivements', {
            templateUrl: '../views/mains/achivements.html',
        })

        .when('/events', {
            templateUrl: '../views/mains/events.html',
        })
        
        .when('/', {
            templateUrl: '../views/mains/index.html',
        })
        
        .otherwise({ redirectTo: '/'});
    
});


app.controller('mainCtrl', function($scope, $http, $cookies){
        
    $scope.isLogedIn = !!JSON.parse(String($cookies.get("isLogedIn")).toLowerCase());
    $scope.active = Number($cookies.get("active") || 4);
    $scope.userName = $cookies.get("user") || ""; 
    $scope.isAdmin = !!JSON.parse(String($cookies.get("isAdmin")).toLowerCase());
    $scope.events = $cookies.getObject('events');
    $scope.feed = $cookies.getObject('feed');

    $scope.isActive = function(num){
        return $scope.active === num;
    };

    $scope.changeActive = function(active){
        if($scope.active == 4) return;
        $scope.active = active;
        $cookies.put("active",  active);
    }
    
    $scope.insertKey = function(key, callback){

        $http.get('http://localhost:3000/insertkey/'+key).success(function(data){
            callback(data);
        });
    }
        
    this.login = function(userName, password){
        console.log(userName);
        console.log(password);
        var data = {
            'username': userName,
            'password': password
        };
        $http.post('http://localhost:3000/login', data)
            .success(function(data){
                console.log(data.status);
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
                    
                    if(!$scope.isAdmin) $scope.showAchivements($scope.userName);
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
        //http.get logout
    }
    
    $scope.createUser = function(userName, pass, mail, firstName, lastName, key) {
        console.log(userName);
        console.log(pass);
        console.log(mail);
        console.log(firstName);
        console.log(lastName);
        console.log(key);
        $scope.insertKey(key, function(res) {
            console.log(res);
            if(res.status == "success") {
                var data = {
                    'username': userName,
                    'password': pass,
                    'mail': mail,
                    'firstname': firstName,
                    'lastname': lastName,
                };  
                $http.post('http://localhost:3000/createuser', data)
                    .success(function(data){
                        console.log(data.status);
                        if(data.status === "success") {
                            $scope.userName = data.user;
                            $scope.isAdmin = data.isAdmin;
                            $scope.isLogedIn = true;
                            $scope.active = 1;
                            window.location.hash = '/home';

                            $cookies.put("user",  userName);
                            $cookies.put("isAdmin",  false); 
                            $cookies.put("isLogedIn",  true); 
                            $cookies.put("active",  1);
                            
                            if(!$scope.isAdmin) $scope.showAchivements($scope.userName);
                            //remove key !!!
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
        $http.get('http://localhost:3000/showevents').success(function(data){
            $scope.events = data;
            $cookies.putObject('events',data);
            console.log(data);
            //console.log($scope.events);
        });
    }
    
    $scope.showAchivements = function(userName) {
        $scope.changeActive(1);
        $http.get('http://localhost:3000/showachievements/'+userName).success(function(data){
            $scope.feed = data;
            $cookies.putObject('feed', data);
            console.log(data);
            //console.log($scope.events);
        });
    }
    
});


function validateFields(field) {
}
