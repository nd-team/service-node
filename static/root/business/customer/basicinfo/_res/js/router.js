var app = angular.module('basicinfo',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business.customer.basicinfo", {
        url: "/basicinfo",
        views: {
            "content@root.business.customer": {
                templateUrl: "root/business/customer/basicinfo/_res/html/index.html",
                controller: "basicinfoCtrl"
            },"menu@root.business.customer":{
                templateUrl: "root/business/customer/basicinfo/_res/html/menu.html",
                controller:"basicMenuCtrl",

            }
        }
    }).state("root.business.customer.basicinfo.add[12]",{
        url:"/add[12]",
        views:{
            "modals@root.business.customer.basicinfo":{
                templateUrl: "root/business/customer/basicinfo/add/_res/html/index.html",
                controller:"basicinfoAddCtrl"
            }
        }
    }).state("root.business.customer.basicinfo.edit[12]",{
        url:"/edit[12]?cusNum",
        views:{
            "modals@root.business.customer.basicinfo":{
                templateUrl: "root/business/customer/basicinfo/edit/_res/html/index.html",
                controller:"basicinfoEditCtrl"
            }
        }
    })
})