angular.module('mySite')
    .directive('mainNavbar', function navbarDirective(){
        return {
            link: function(){
                //$('.signup').fadeIn(3000);
            },
            templateUrl: '../views/navs/mainnav.html'
        };
});