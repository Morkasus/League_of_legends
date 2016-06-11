angular.module('mySite')
    .directive('headerProtfolio', function headerProtfolioDirective(){
        return {
            link: function(){
                $('.prot').fadeIn(3000);
            },
            templateUrl: '../views/headers/protfolio.html'
        };
});