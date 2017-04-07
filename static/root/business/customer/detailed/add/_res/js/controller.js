var app = angular.module('detailedAdd', [
    {
        files : ['root/business/customer/detailed/_res/js/service.js']
    }
]);
app.controller('detailedAddCtrl', function($scope, $state, $rootScope, detailedServer, ipCookie){

    // $scope.addCustomerSex = "MAN";
    //
    // //自动客户编号
    // basicinfoServer.generateNumber().then(function(response){
    //     $scope.generateNumber = response.data.data.customerNum;
    // });
    //
    // function getScrollTop(){
    //     var scrollTop = 0;
    //     if(document.documentElement && document.documentElement.scrollTop){
    //         scrollTop = document.documentElement.scrollTop;
    //     }
    //     else if(document.body){
    //         scrollTop = document.body.scrollTop;
    //     }
    //     $scope.modalTop=scrollTop+100+ "px";
    //     return scrollTop;
    // }
    // getScrollTop();


    // //添加列表
    // $scope.basicAddFun = function(){
    //     var vm = $scope;
    //     var token = ipCookie('token');
    //     var data = {
    //         userToken : token,
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
    //         workRight : vm.addWorkRight,
    //         relation:angular.element('#title0').text()
    //     };
    //
    //
    //     basicinfoServer.addCustomerbaseinfo(data).then(function(response){
    //
    //         if(response.data.code == 0){
    //             vm.addCustomerbaseinfo = response.data;
    //             $state.go('root.business.customer.basicinfo');
    //             window.location.reload()
    //         } else if(response.data.code == 403){
    //             $rootScope.login()
    //         } else {
    //             vm.addMsg = response.data.msg
    //         }
    //
    //
    //     });
    // }
});