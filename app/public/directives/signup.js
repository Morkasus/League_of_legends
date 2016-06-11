angular.module('mySite')
    .directive('signup', function signUpDirective(){
        return {
            link: function(){
                //$('.signup').fadeIn(3000);
            },
            templateUrl: '../views/login/signup.html'
        };
});