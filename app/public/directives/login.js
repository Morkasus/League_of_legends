angular.module('LeagueOfLegends')
    .directive('login', function loginDirective(){
        return {
            link: function(){
                //$('.login').fadeIn(3000);
            },
            templateUrl: '../views/login/login.html'
        };
});