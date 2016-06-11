angular.module('LeagueOfLegends')
    .directive('headerResume', function headerResumeDirective(){
        return {
            link: function(){
                $('.cv').fadeIn(3000);
            },
            templateUrl: '../views/headers/resume.html'
        };
});