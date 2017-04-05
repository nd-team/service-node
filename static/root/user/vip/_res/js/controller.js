var app = angular.module('userVipModule', [
    {
        files: ['root/user/vip/_res/js/service.js']
    }
]);
app.controller('userVipCtrl', function ($scope,userVipSer) {
    var vm = $scope;
    vm.moduleName = '这是VIP用户页面';
});