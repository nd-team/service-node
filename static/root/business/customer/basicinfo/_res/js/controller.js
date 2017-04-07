var app = angular.module('basicinfo', [
    {
        files : ['root/business/customer/basicinfo/_res/js/service.js']
    }

]);
app.controller('basicinfoCtrl', function($scope, $http,$state, basicinfoServer,ipCookie){
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



    //是否删除列表
    $scope.isDeleteBtn = function(event){
        event._isDel = true;
        var vm = $scope;
        vm.deleteBtn = function(cusId){
            var delData={id:cusId,userToken:ipCookie('token')};
            basicinfoServer.delCustomerbaseinfo(delData).then(function(response){
                if(response.data.code==0){
                    event._isDel = false;
                    $scope.modal = true;
                    event._deled = true
                }else if(response.data.code==403){
                    $rootScope.login()
                }
            })
        }
    }


    //是否冻结
    $scope.isCongeal = function(event){
        event._isCongeal = true;
        var vm = $scope;
        vm.congealBtn = function(cusId){
            var congealData={id:cusId,userToken:ipCookie('token')};
            basicinfoServer.congealCustomerbaseinfo(congealData).then(function(response){
                if(response.data.code==0){
                    event._isCongeal = false;
                    $scope.modal = true;
                    event.status = 'CONGEAL';
                }else if(response.data.code==403){
                    $rootScope.login();
                }
            })
        }
    };

    //是否解冻
    $scope.isThaw = function(event){
        event._isThaw = true;
        var vm = $scope;
        vm.thawBtn = function(cusId){
            var thawData={id:cusId,userToken:ipCookie('token')};
            basicinfoServer.thawCustomerbaseinfo(thawData).then(function(response){
                console.info(response);
                if(response.data.code==0){
                    event._isThaw = false;
                    $scope.modal = true;
                    event.status = ''
                }else if(response.data.code==403){
                    $rootScope.login();
                }
            })
        }
    }


    //取消冻结或删除
    $scope.cancelBtn = function(event){
        $scope.modal = true;
        event._isDel = false;
        event._isCongeal = false;
    };

    //查看详情
    $scope.detailedBtn = function(event){
        event._detail = true;
        var cusNum = {customerNum:event.customerNum,userToken:ipCookie('token')};
        basicinfoServer.getCustomers(cusNum).then(function(response){
            if(response.data.code ==0){
                $scope.detailed = response.data.data;
            }else if(response.data.code ==403){
                $rootScope.login()
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
        $scope.$emit('menuCtrlModal', $scope.modal)

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

