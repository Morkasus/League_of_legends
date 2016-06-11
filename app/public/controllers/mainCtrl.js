var app = angular.module('mySite', ['ngRoute', 'ngCookies']);

//var isLogedIn = $cookies.get("isLogedIn") || false,
//    active = $cookies.get("active") || 4,
//    userName = $cookies.get("userName") || "",
//    isAdmin = $cookies.get("isAdmin") || false;
//

app.config(function($routeProvider){
    
        $routeProvider.when('/home', {
            templateUrl: '../views/mains/index.html',
        })
        
        .when('/resume', {
            templateUrl: '../views/mains/resume.html',
            controller: 'resumeCtrl.js',
            controllerAs: 'resume'
        })
               
        .when('/protfolio', {
            templateUrl: '../views/mains/protfolio.html',
        })

        .when('/contact', {
            templateUrl: '../views/mains/contact.html',
        })
        
        .when('/', {
            templateUrl: '../views/mains/index.html',
        })
        
        .otherwise({ redirectTo: '/'});
    
});


//app.run(function($rootScope, $http){
//    $http.get('http://localhost:3000/isLogin').success(function(data){
//        if(data.isLogedIn == true){
//            console.log("run");
//            $rootScope.userName = 'mork';
//            $rootScope.isAdmin = false;
//            $rootScope.isLogedIn = true;
//            $rootScope.active = 1;
//            window.location.hash = '#';
//        }
//    });
//});

//
//        console.log(isLogedIn);
//        console.log(userName);
//        console.log(isAdmin);
//        console.log(active);

app.controller('mainCtrl', function($scope, $http, $cookies){
        
    $scope.isLogedIn = Boolean($cookies.get("isLogedIn") || false);
    $scope.active = Number($cookies.get("active") || 4);
    $scope.userName = $cookies.get("user") || ""; 
    $scope.isAdmin = Boolean($cookies.get("isAdmin") || false); 
    
//    $scope.init = function () {
//        console.log("init");
//        console.log($cookies.get("userName"));
//        $scope.isLogedIn = $cookies.get("isLogedIn");
//        if($scope.isLogedIn) {
//            $scope.userName = $cookies.get("userName");
//            $scope.isAdmin = $cookies.get("isAdmin");
//            $scope.active = 1;
//        }
//    };

    $scope.isActive = function(num){
        return $scope.active === num;
    };

    $scope.changeActive = function(active){
        $scope.active = active;
        $cookies.put("active",  active);
    }
    
    $scope.insertKey = function(key){
        
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
                    window.location.hash = '#';
                    var session = {
                        'userName' : data.user,
                        'isAdmin' : data.isAdmin
                    }
                    
                    $cookies.put("user",  data.user);
                    $cookies.put("isAdmin",  data.isAdmin); 
                    $cookies.put("isLogedIn",  true); 
                    $cookies.put("active",  1);
                }
                else {
                    //show error
                }
        });
                
        //if success ----> isLogedIn = true
        //$scope.userName = user
        //isAdmin = is admin
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
    }
    
    $scope.showEvents = function() {
        //if success ----> isLogedIn = true
        //$scope.userName = user
    }
    
    $scope.showAchivements = function() {
        
    }
    
});


function validateFields(field) {
}
