
//handle the events
angular.module('LeagueOfLegends').controller('eventCtrl', function($scope, $http){
        
    $scope.newEvent = false;
    $scope.joinedEvents = [];
    $scope.openEvents = [];
    
    //check on each event players if user include there.
    $scope.init = function(){
        var joined = [];
        var len = $scope.events.length;
        for(var i=0; i<len; i++) {
            if($scope.events[i].players.indexOf($scope.userName) > -1) {
                if(joined.indexOf($scope.events[i].eventId)) {
                    joined.push($scope.events[i].eventId);
                }
            }
        }
        $scope.joinedEvents = joined;
    }
    
    //create new event (admin option)
    $scope.createEvent = function(eventName, description, location) {
        var data = {
            'eventName': eventName,
            'description': description,
            'location': location
        }
        $http.post('https://league-of-legends-service.herokuapp.com/createevent', data)
            .success(function(data){
                $scope.showEvents();
                $scope.toggleEevent();
        });
    }
    
    //hide(delete) event (admin option)
    $scope.hideEvent = function(eventId) {
        $http.get('https://league-of-legends-service.herokuapp.com/hideevent/' + eventId).success(function(data){
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    //start event (admin option)
    $scope.startEvent = function(eventId) {
        $http.get('https://league-of-legends-service.herokuapp.com/startevent/' + eventId).success(function(data){
            $scope.hideEvent(eventId);
        });
    }
    
    //join to event (user option)
    $scope.joinEvent = function(eventId, userName) {
        $http.get('https://league-of-legends-service.herokuapp.com/joinevent/' + eventId + '/' + userName).success(function(data){
            if(data.status == 'success') {
                $scope.joinedEvents.push(eventId);
                $scope.showEvents();                    
            }
        });
    }
    
    //leave event (user option)
    $scope.leaveEvent = function(eventId, userName) {
        $http.get('https://league-of-legends-service.herokuapp.com/leaveevent/' + eventId + '/' + userName).success(function(data){
            if(data.status == 'success') {
                var eventIndex = $scope.joinedEvents.indexOf(eventId);
                if(eventIndex > -1) $scope.joinedEvents.splice(eventIndex, 1);
                $scope.showEvents();   
            }
        });
    }
    
    $scope.toggleEevent = function() {
        $scope.newEvent = !$scope.newEvent;
    }
    
    //check if user include in some event
    $scope.isInEvent = function(Id) {
        if($scope.joinedEvents.indexOf(Id) > -1) {
            return true;
        } else {
            return false;
        }
    }
    
    
    //open event description 
    $scope.openDescription = function(eventId) {
        if($scope.openEvents.indexOf(eventId) > -1) {
            $scope.openEvents.splice($scope.openEvents.indexOf(eventId), 1);
        }
        else {
            $scope.openEvents.push(eventId);
        }
    }
    
    //check if event descrtipion open
    $scope.isOpen = function(eventId) {
        if($scope.openEvents.indexOf(eventId) > -1) return true;
        return false;
    }
});


