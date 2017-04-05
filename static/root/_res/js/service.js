var app = angular.module('rootModule',[]);
app.factory('rootSer',function () {
    return {
        testMethod : function () {
            console.info('测试方法')
        }
    };
});