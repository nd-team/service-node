var app = angular.module('basicinfoEdit',[
    {
        files : ['root/business/customer/basicinfo/_res/js/service.js']
    }
]);
app.controller('basicinfoEditCtrl',function ($scope,$state,$stateParams,ipCookie,basicinfoServer) {

    var cusNumData ={customerNum: $stateParams.cusNum};

    basicinfoServer.getCustomers(cusNumData).then(function(response){
        console.info(response);
        if(response.data.code==0){
            $scope.editInfo = response.data.data
        }
    });
    function getScrollTop(){
        var scrollTop = 0;
        if(document.documentElement && document.documentElement.scrollTop){
            scrollTop = document.documentElement.scrollTop;
        }
        else if(document.body){
            scrollTop = document.body.scrollTop;
        }
        $scope.modalTop=scrollTop+100+ "px";
        return scrollTop;
    }
    getScrollTop();


    //编辑列表
    $scope.basicEditFun = function(){
        var vm = $scope;
        var token = ipCookie('token');
        var data = {
            userToken : token,
            id:vm.editInfo.id,
            customerNum : vm.editInfo.customerNum,
            customerName : vm.editInfo.customerName,
            area : vm.editInfo.area,
            customerType : vm.editInfo.customerType,
            customerSex : vm.editInfo.customerSex,
            customerStatus : vm.editInfo.customerStatus,
            origin : vm.editInfo.origin,
            customerLevelName : vm.editInfo.customerLevelVO.name,
            cusEmail : vm.editInfo.cusEmail,
            introducer : vm.editInfo.introducer,
            phone : vm.editInfo.phone,
            tel : vm.editInfo.tel,
            qq : vm.editInfo.qq,
            weChart : vm.editInfo.weChart,
            origanizion : vm.editInfo.origanizion,
            workProfession : vm.editInfo.workProfession,
            workLevel : vm.editInfo.workLevel,
            origanizationSize : vm.editInfo.origanizationSize,
            lifeArea : vm.editInfo.lifeArea,
            workPosition : vm.editInfo.workPosition,
            oldWorkPlace : vm.editInfo.oldWorkPlace,
            workRight : vm.editInfo.workRight,
            relation:angular.element('#title0').text()
        };
        console.info(data);
        basicinfoServer.editCustomerbaseinfo(data).then(function(response){
            console.info(response);
            if(response.data.code == 0){
                $state.go('root.business.customer.basicinfo');
                $scope.modal = true;
                $scope.$emit('menuCtrlModal', $scope.modal)

            } else if(response.data.code == 403){
                $rootScope.login()
            } {
                vm.addMsg = response.data.msg
            }


        });
    }
});