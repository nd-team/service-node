var app = angular.module('app', ['ngVerify',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,rootSer) {
    $scope.moduleName = '这是首页';
})
