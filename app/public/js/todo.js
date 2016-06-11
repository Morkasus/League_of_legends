var todoApp = angular.module('todoApp',[]);


var model = {
    userName: "Noam Star",
};

todoApp.run(function($http){
    $http.get('http://localhost:3000/').success(function(data){
        console.log(data);
        model.userName = data;    
    });
});



todoApp.filter("checkedItems", function(){
    return function(items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function(item) {
            if(item.done == false || showComplete == true)
                resultArr.push(item);
        });
        return resultArr;
    };
});

todoApp.controller('ToDoCtrl', function($scope) {
    $scope.todo = model;
    
    $scope.incompleteCount = function() {
        var count = 0;
        angular.forEach($scope.todo.items, function(item) {
            if(!item.done) { count++; }
        });
        return count;
    };
    
    $scope.warningLevel = function() {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    };
    
    $scope.addNewItem = function(actionText) {
        $scope.todo.items.push({action: actionText, done:false});
    };
    
});