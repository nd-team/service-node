var app = angular.module('customer', []);
app.controller('customerCtrl', function ($scope,$state,$http) {
    if ($state.current.url == '/customer') {//默认加载列表
        $state.go('root.business.customer.basicinfo');
    }


}).controller('subNavCtrl',function($scope,$state){
    $scope.initValue = $state.current.url.split('/')[1];

    $scope.navChange=function(val){
        if (val == 'basicinfo') {//默认加载列表
            $state.go('root.business.customer.basicinfo')
        }else if(val == 'level'){
            $state.go('root.business.customer.level')
        }else if(val == 'detailed'){
            $state.go('root.business.customer.detailed')
        }else if(val=='email'){
            $state.go('root.business.customer.email')
        }
    };
});

