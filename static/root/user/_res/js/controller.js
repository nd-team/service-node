var app = angular.module('userModule', [
    {
        files: ['root/user/_res/js/service.js']
    }
]);
app.controller('userCtrl',function ($scope,userSer) {
    $scope.moduleName = '这是用户模块页面';
});