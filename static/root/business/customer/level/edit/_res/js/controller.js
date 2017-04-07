var app = angular.module('levelEdit',[
    {
        files : ['root/business/customer/level/_res/js/service.js']
    }
]);
app.controller('levelEditCtrl',function ($scope,$state,$stateParams,$rootScope,levelServer,ipCookie) {
    var _name = {name:$stateParams.name};
    levelServer.getLevel(_name).then(function(response){
        if(response.data.code==0){
            $scope.getLevel = response.data.data
        }

        $scope.levelEditFun = function(){
            var vm = $scope;
            var token = ipCookie('token');
            var data ={
                id:vm.getLevel.id,
                name:vm.getLevel.name,
                remark:vm.getLevel.remark,
                userToken:token
            }

            levelServer.editLevel(data).then(function(response){
                if(response.data.code==0){
                    $state.go('root.business.customer.level');
                    $scope.modal = true;
                }else if(response.data.code==403){
                    $rootScope.login()
                }
            })
        }
    });
});