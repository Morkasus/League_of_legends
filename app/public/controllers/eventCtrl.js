
angular.module('LeagueOfLegends').controller('eventCtrl', function($scope, $http){
        
    $scope.newEvent = false;
    
    $scope.createEvent = function(eventName, description, location) {
        var data = {
            'eventName': eventName,
            'description': description,
            'location': location
        }
        $http.post('http://localhost:3000/createevent', data)
            .success(function(data){
                console.log(data.status);
                $scope.showEvents();
                $scope.toggleEevent();
        });
    }
    
    $scope.hideEvent = function(eventId) {
        $http.get('http://localhost:3000/hideevent/' + eventId).success(function(data){
            console.log(data);
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    $scope.startEvent = function(eventId) {
        $http.get('http://localhost:3000/startevent/' + eventId).success(function(data){
            console.log(data);
            $scope.hideEvent(eventId);
        });
    }
    
    $scope.joinEvent = function(eventId, userName) {
        $http.get('http://localhost:3000/joinevent/' + eventId + '/' + userName).success(function(data){
            console.log(data);
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    
    $scope.leaveEvent = function(eventId, userName) {
        $http.get('http://localhost:3000/leaveevent/' + eventId + '/' + userName).success(function(data){
            console.log(data);
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    $scope.toggleEevent = function() {
        $scope.newEvent = !$scope.newEvent;
    }
});


