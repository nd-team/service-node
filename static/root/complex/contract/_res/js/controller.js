var app = angular.module('contract', []);
app.controller('contractCtrl', function ($scope) {
}).controller('subNavCtrl',function($scope,$state){
    $scope.initValue = $state.current.url.split('/')[1];
    console.info($scope.initValue);
    $scope.change=function(val){
        if (val == 'chengbaoQT') {//默认加载列表
            $state.go('root.complex.contract.chengbaoQT')
        }else if(val == 'fenbaoQT'){
            $state.go('root.complex.contract.fenbaoQT')
        }
    };
    $scope.selectNavs = [{navVal:"chengbaoQT",navName:"承包项目洽谈"},{navVal:"fenbaoQT",navName:"分包项目洽谈"}]
});

