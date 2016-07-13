angular.module('LeagueOfLegends')
    .directive('headerAchivements', function headerAchivementsDirective(){
        return {
            link: function(){
                $('.prot').fadeIn(3000);
            },
            templateUrl: 'views/headers/achivements.html'
        };
});