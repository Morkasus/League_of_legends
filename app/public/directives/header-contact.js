angular.module('mySite')
    .directive('headerContact', function headerContactDirective(){
        return {
            link: function(){
                $('.contact').fadeIn(3000);
            },
            templateUrl: '../views/headers/contact.html'
        };
});