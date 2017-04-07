var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/business') {//默认加载列表
        $state.go('root.business.customer');
    }

    //父 Ctrl 监听到事件，向下广播
    $scope.$on('menuCtrlModal',function(event,msg){
        $scope.$broadcast('editModal',msg)
    });

});

