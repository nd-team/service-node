var app = angular.module('level', [
    {
        files : ['root/business/customer/level/_res/js/service.js']
    }
]);
app.controller('levelCtrl', function ($scope,$http,$state,$rootScope,levelServer,ipCookie,toastr) {
    levelServer.listLevel().then(function(response){
        $scope.listLevels = response.data
    });
    $scope.modal = true;
    //监听到父Ctrl后改变事件
    $scope.$on("editModal", function(event, msg){
        $scope.modal = msg;
    });

    //删除列表
    $scope.isDeleteBtn = function(event){
        event._isDel = true;
        var vm = $scope;
        vm.deleteBtn = function(cusId){
            var token = ipCookie('token');
            var delData={id:cusId,userToken:ipCookie('token')};
            console.info(delData);
            levelServer.deleteLevel(delData).then(function(response){
                if(response.data.code==0){
                    event._isDel = false;
                    $scope.modal = true;
                    event._deled = true;
                    toastr.info('删除成功', '温馨提示');
                }else if(response.data.code==403){
                    $rootScope.login()
                }
            })
        }
    }
    //取消冻结或删除
    $scope.cancelBtn = function(event){
        $scope.modal = true;
        event._isDel = false;
    };

}).controller('levelMenuCtrl',function($scope){
    $scope.levelEdit = function(){
        $scope.modal = false;
        //向父Ctrl传递事件
        $scope.$emit('menuCtrlModal', $scope.modal)
    }
});

