var app = angular.module('basicinfo', [
    {
        files : ['root/business/customer/basicinfo/_res/js/service.js']
    }

]);
app.controller('basicinfoCtrl', function($scope, $http,$state, basicinfoServer){
    $scope.modal = true;

    //监听到父Ctrl后改变事件
    $scope.$on("editModal", function(event, msg){
        $scope.modal = msg;
    });

    $scope.$on("generateNumber", function(event, generateNumber){
        $scope.generateNumber = generateNumber;
    });


    //列表请求
     basicinfoServer.listCustomerBaseInfo().then(function(response){
        $scope.basicLists = response.data;
    });
    //重要性级别
    basicinfoServer.customerLevelName().then(function(response){
        $scope.customerLevels = response.data;
    });





    //添加列表
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data = {
            customerNum : vm.generateNumber,
            customerName : vm.addCustomerName,
            area : vm.addArea,
            customerType : vm.addCustomerType,
            customerSex : vm.addCustomerSex,
            customerStatus : vm.addCustomerStatus,
            origin : vm.addOrigin,
            customerLevelName : vm.addCustomerLevelName,
            cusEmail : vm.addCusEmail,
            introducer : vm.addIntroducer,
            phone : vm.addPhone,
            tel : vm.addTel,
            qq : vm.addqq,
            weChart : vm.addWeChart,
            origanizion : vm.addOriganizion,
            workProfession : vm.addWorkProfession,
            workLevel : vm.addWorkLevel,
            origanizationSize : vm.addoRiganizationSize,
            lifeArea : vm.addLifeArea,
            workPosition : vm.addWorkPosition,
            oldWorkPlace : vm.addOldWorkPlace,
            workRight : vm.addWorkRight

        };
        console.info(data);
        basicinfoServer.addCustomerbaseinfo(data).then(function(response){

            if(response.data.code == 0){
                vm.addCustomerbaseinfo = response.data;
                vm.modulebg = true;
                vm.addModalTable = true;
            } else {
                vm.addMsg = response.data.msg
            }


        });
    };

    //是否删除列表
    $scope.isDeleteBtn = function(event){
        event._isDel = true;
        var vm = $scope;
        vm.deleteBtn = function(cusId){
            var delData={id:cusId};
            basicinfoServer.delCustomerbaseinfo(delData).then(function(response){
                if(response.data.code==0){
                    event._isDel = false;
                    $scope.modal = true;
                }
            })
        }
    }


    //是否冻结
    $scope.isCongeal = function(event){
        event._isCongeal = true;
        var vm = $scope;
        vm.congealBtn = function(cusId){
            var congealData={id:cusId};
            basicinfoServer.congealCustomerbaseinfo(congealData).then(function(response){
                if(response.data.code==0){
                    event._isCongeal = false;
                    $scope.modal = true;
                    event.status = 'CONGEAL';
                }
            })
        }
    };

    //是否解冻
    $scope.isThaw = function(event){
        event._isThaw = true;
        var vm = $scope;
        vm.thawBtn = function(cusId){
            var thawData={id:cusId};
            basicinfoServer.thawCustomerbaseinfo(thawData).then(function(response){
                console.info(response);
                if(response.data.code==0){
                    event._isThaw = false;
                    $scope.modal = true;
                    event.status = ''
                }
            })
        }
    }


    //取消冻结或删除
    $scope.cancelBtn = function(event){

        $scope.modal = true;
        event._isDel = false;
    };

    //查看详情
    $scope.detailedBtn = function(event){
        event._detail = true;
        var cusNum = {customerNum:event.customerNum};
        basicinfoServer.getCustomers(cusNum).then(function(response){
            if(response.data.code ==0){
                $scope.detailed = response.data.data;

            }
        })

    }
    $scope.detailClose = function(event){
        event._detail = false
    }

}).controller('basicMenuCtrl', function($scope, basicinfoServer ){

    //****编辑菜单按钮***//
    $scope.basicEdit = function(){
        $scope.modal = false;
        //向父Ctrl传递事件
        $scope.$emit('basicMenuCtrlModal', $scope.modal)

    }

});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "WOMAN":
                result = "女";
                break;
            case "MAN":
                result = "男";
                break;
            case "VIP":
                result = "VIP";
                break;
            case "OLD":
                result = "老客户";
                break;
            case "COOPERATOR":
                result = "合作伙伴";
                break;
            case "ORDINARY":
                result = "普通客户";
                break;
            case "COMPLETEPROJECT":
                result = "已完成项目客户";
                break;
            case "PROJECTING":
                result = "现项目客户";
                break;
            case "POTENTIAL":
                result = "潜在客户";
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

