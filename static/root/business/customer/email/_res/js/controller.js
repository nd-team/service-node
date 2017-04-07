var app = angular.module('email', [
    {
        files : ['root/business/customer/email/_res/js/service.js']
    }
]);
app.controller('emailCtrl', function ($scope,$http,$state, emailServer) {
    emailServer.listCusEmail().then(function(response){
        $scope.listEmails = response.data;
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

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "MINUTE":
                result = "分钟";
                break;
            case "HOURS":
                result = "小时";
                break;
            case "DAY":
                result = "天";
                break;
            case "WEEK":
                result = "周";
                break;
            case "MONTH":
                result = "月";
                break;
            case "QUARTER":
                result = "季度";
                break;
            case "YEAR":
                result = "年";
                break;
            case "EVERYDAY":
                result = "每天";
                break;
            case "EVERYWEEK":
                result = "每周";
                break;
            case "EVERYMONTH":
                result = "每月";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
        }
        return result;
    }

})
