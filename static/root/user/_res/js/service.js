var app = angular.module('userModule');
app.factory('userSer',function () {
    return {
        testMethod : function () {
            console.info('user测试方法')
        }
    };
});