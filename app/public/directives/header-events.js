angular.module('LeagueOfLegends')
    .directive('headerEvents', function headerEventsDirective(){
        return {
            link: function(){
                $('.cv').fadeIn(3000);
            },
            templateUrl: 'views/headers/events.html'
        };
});