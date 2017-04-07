var app = angular.module('detailed', [
    {
        files : ['root/business/customer/detailed/_res/js/service.js']
    }
]);
app.controller('detailedCtrl', function ($scope,$http,$state, detailedServer) {
    detailedServer.listCustomerDetail().then(function(response){
        $scope.listdetails = response.data;
    });
    // $scope.modal = true;
    // //监听到父Ctrl后改变事件
    // $scope.$on("editModal", function(event, msg){
    //     $scope.modal = msg;
    // });
    //
    // //删除列表
    // $scope.isDeleteBtn = function(event){
    //     event._isDel = true;
    //     var vm = $scope;
    //     vm.deleteBtn = function(cusId){
    //         var delData={id:cusId};
    //         levelServer.deleteLevel(delData).then(function(response){
    //             if(response.data.code==0){
    //                 event._isDel = false;
    //                 $scope.modal = true;
    //             }
    //         })
    //     }
    // }
    // //取消冻结或删除
    // $scope.cancelBtn = function(event){
    //     $scope.modal = true;
    //     event._isDel = false;
    // };

})/*.controller('levelMenuCtrl',function($scope){
    $scope.levelEdit = function(){
        $scope.modal = false;
        //向父Ctrl传递事件
        $scope.$emit('menuCtrlModal', $scope.modal)
    }
});
*/
