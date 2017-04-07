var app = angular.module('levelAdd',[,
    {
        files : ['root/business/customer/level/_res/js/service.js']
    }
]);
app.controller('levelAddCtrl',function ($scope,$state,$rootScope,levelServer,ipCookie) {

    $scope.levelAddFun = function(){
        var token = ipCookie('token');
        var data ={
            name:$scope.levelAddName,
            remark:$scope.levelAddRemark,
            userToken:token
        };
        levelServer.addLevel(data).then(function(response){
            if(response.data.code==0){
                $state.go('root.business.customer.level',{reload: true});
                window.location.reload()
            }else if(response.data.code == 403){
                $rootScope.login()
            }
        })

    }
});