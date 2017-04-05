var app = angular.module('userVipVipChildModule');
app.factory('userVipVipChildSer',function () {
    return {
        testMethod : function () {
            console.info('userVip子测试方法');
        }
    };
});