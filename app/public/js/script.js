$('document').ready(function(){
////    $('.titles').fadeToggle(5000);
////    $('.cv').fadeToggle(3000);
////    
//    $('a[href=#briefBackground]').click(function(){
//        $('html, body').animate({scrollTop:600}, 'slow');
//    });
//    
//    $('.moreArrow').on('mouseover', function(){
//        console.log($(this));
//        $(this).animate({'margin-top':'126px'}, 150);
//    });
//    $('.moreArrow').on('mouseleave', function(){
//        console.log($(this));
//        $(this).animate({'margin-top':'120px'}, 150);
//    });
    
    var map;
    function initMap() {
        // Enabling new cartography and themes
        google.maps.visualRefresh = true;

        // Setting starting options
        var mapOptions = {
            center: new google.maps.LatLng(31.8163, 34.7770),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Getting Map DOM Element
        var mapElement = document.getElementById('map');

        // Creating a map with DOM element
        map = new google.maps.Map(mapElement, mapOptions);
    }
});
