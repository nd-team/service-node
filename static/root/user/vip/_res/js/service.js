var app = angular.module('userVipModule');
app.factory('userVipSer',function () {
    return {
        testMethod : function () {
            console.info('userVip测试方法')
        }
    };
});