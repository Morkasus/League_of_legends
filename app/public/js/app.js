angular.module('mySite', ['ngRoute'])
    .config(function($routeProvider){
    
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