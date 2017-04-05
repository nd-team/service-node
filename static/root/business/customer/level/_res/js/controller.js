var app = angular.module('level', [
    {
        files : ['root/business/customer/level/_res/js/service.js']
    }
]);
app.controller('levelCtrl', function ($scope,$http,$state, levelServer) {
    levelServer.listLevel().then(function(response){
        $scope.listLevels = response.data
    });
    $scope.levelEditModal = true;

});

