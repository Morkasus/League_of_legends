
angular.module('LeagueOfLegends').controller('eventCtrl', function($scope, $http){
        
    $scope.newEvent = false;
    
    $scope.createEvent = function(eventName, description, location) {
        var data = {
            'eventName': eventName,
            'description': description,
            'location': location
        }
        $http.post('https://league-of-legends-service.herokuapp.com/createevent', data)
            .success(function(data){
                //console.log(data.status);
                $scope.showEvents();
                $scope.toggleEevent();
        });
    }
    
    $scope.hideEvent = function(eventId) {
        $http.get('https://league-of-legends-service.herokuapp.com/hideevent/' + eventId).success(function(data){
            //console.log(data);
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    $scope.startEvent = function(eventId) {
        $http.get('https://league-of-legends-service.herokuapp.com/startevent/' + eventId).success(function(data){
            //console.log(data);
            $scope.hideEvent(eventId);
        });
    }
    
    $scope.joinEvent = function(eventId, userName) {
        $http.get('https://league-of-legends-service.herokuapp.com/joinevent/' + eventId + '/' + userName).success(function(data){
            //console.log(data);
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    
    $scope.leaveEvent = function(eventId, userName) {
        $http.get('https://league-of-legends-service.herokuapp.com/leaveevent/' + eventId + '/' + userName).success(function(data){
            //console.log(data);
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    $scope.toggleEevent = function() {
        $scope.newEvent = !$scope.newEvent;
    }
});


