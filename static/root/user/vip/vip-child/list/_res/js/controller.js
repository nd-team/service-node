var app = angular.module('userVipVipChildListModule', []);
app.controller('userVipVipChildListCtrl', function ($scope) {
    var vm = $scope;
    vm.list = function () {
        console.info('controller 方法调用');
    };
});