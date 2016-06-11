
angular.module('LeagueOfLegends').controller('loginCtrl', function($scope){
        
    this.active = 1;

    this.isActive = function(num){
        return this.active === num;
    };

    this.changeActive = function(active){
        this.active = active;
    }
});
