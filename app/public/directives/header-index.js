angular.module('mySite')
    .directive('headerIndex', function headerIndexDirective(){
        return {
            link: function(){
                $('.titles').fadeIn(5000);
                    $('a[href=#briefBackground]').click(function(){
                    $('html, body').animate({scrollTop:600}, 'slow');
                });

                $('.moreArrow').on('mouseover', function(){
                    console.log($(this));
                    $(this).animate({'margin-top':'126px'}, 150);
                });
                $('.moreArrow').on('mouseleave', function(){
                    console.log($(this));
                    $(this).animate({'margin-top':'120px'}, 150);
                });
            },
            templateUrl: '../views/headers/home.html'
        };
});