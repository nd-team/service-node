var app = angular.module('emailAdd',[
    {
        files : ['root/business/customer/email/_res/js/service.js']
    }
]);
app.controller('emailAddCtrl',function ($scope,$state,emailServer) {
    //自动客户编号
    //     basicinfoServer.generateNumber().then(function(response){
    //         $scope.generateNumber = response.data.data.customerNum;
    //     });
    // //添加列表
    // $scope.basicAddFun = function(){
    //     var vm = $scope;
    //     var data = {
    //         customerNum : vm.generateNumber,
    //         customerName : vm.addCustomerName,
    //         area : vm.addArea,
    //         customerType : vm.addCustomerType,
    //         customerSex : vm.addCustomerSex,
    //         customerStatus : vm.addCustomerStatus,
    //         origin : vm.addOrigin,
    //         customerLevelName : vm.addCustomerLevelName,
    //         cusEmail : vm.addCusEmail,
    //         introducer : vm.addIntroducer,
    //         phone : vm.addPhone,
    //         tel : vm.addTel,
    //         qq : vm.addqq,
    //         weChart : vm.addWeChart,
    //         origanizion : vm.addOriganizion,
    //         workProfession : vm.addWorkProfession,
    //         workLevel : vm.addWorkLevel,
    //         origanizationSize : vm.addoRiganizationSize,
    //         lifeArea : vm.addLifeArea,
    //         workPosition : vm.addWorkPosition,
    //         oldWorkPlace : vm.addOldWorkPlace,
    //         workRight : vm.addWorkRight
    //     };
    //     console.info(data);
    //     basicinfoServer.addCustomerbaseinfo(data).then(function(response){
    //
    //         if(response.data.code == 0){
    //             vm.addCustomerbaseinfo = response.data;
    //             $state.go('root.business.customer.basicinfo');
    //         } else {
    //             vm.addMsg = response.data.msg
    //         }
    //
    //
    //     });
    // }
});