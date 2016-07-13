angular.module('LeagueOfLegends')
    .directive('headerFeed', function headerFeedDirective(){
        return {
            link: function(){
                $('.titles').fadeIn(5000);
                    $('a[href=#briefBackground]').click(function(){
                    $('html, body').animate({scrollTop:600}, 'slow');
                });
            },
            templateUrl: 'views/headers/feed-header.html'
        };
});