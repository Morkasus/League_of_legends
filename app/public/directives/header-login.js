angular.module('LeagueOfLegends')
    .directive('headerLogin', function headerLoginDirective(){
        return {
            link: function(){
                $('.cv').fadeIn(3000);
            },
            templateUrl: 'views/headers/login.html'
        };
});