
angular.module('LeagueOfLegends').controller('eventCtrl', function($scope, $http){
        
    $scope.newEvent = false;
    $scope.joinedEvents = [];
    $scope.openEvents = [];
    
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
    
    $scope.hideEvent = function(eventId) {
        $http.get('https://league-of-legends-service.herokuapp.com/hideevent/' + eventId).success(function(data){
            if(data.status == 'success') {
                $scope.showEvents();                    
            }
        });
    }
    
    $scope.startEvent = function(eventId) {
        $http.get('https://league-of-legends-service.herokuapp.com/startevent/' + eventId).success(function(data){
            $scope.hideEvent(eventId);
        });
    }
    
    $scope.joinEvent = function(eventId, userName) {
        $http.get('https://league-of-legends-service.herokuapp.com/joinevent/' + eventId + '/' + userName).success(function(data){
            if(data.status == 'success') {
                $scope.joinedEvents.push(eventId);
                $scope.showEvents();                    
            }
        });
    }
    
    
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
    
    $scope.isInEvent = function(Id) {
        if($scope.joinedEvents.indexOf(Id) > -1) {
            return true;
        } else {
            return false;
        }
    }
    
    $scope.openDescription = function(eventId) {
        if($scope.openEvents.indexOf(eventId) > -1) {
            $scope.openEvents.splice($scope.openEvents.indexOf(eventId), 1);
        }
        else {
            $scope.openEvents.push(eventId);
        }
    }
    
    $scope.isOpen = function(eventId) {
        if($scope.openEvents.indexOf(eventId) > -1) return true;
        return false;
    }
    
    $scope.getEventImage = function() {
        var randomImg = "../../images/event";
        var tempNum = 0;
        return randomImg + Math.floor((Math.random() * 3) + 1) + ".png";
    }
    
});


