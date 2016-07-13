
angular.module('LeagueOfLegends').controller('loginCtrl', function($scope){
        
    $scope.loginActive = 1;

    $scope.isActive = function(num){
        return $scope.loginActive === num;
    };

    $scope.changeActive = function(active){
        $scope.loginActive = active;
    }
});
