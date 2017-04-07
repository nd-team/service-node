var app = angular.module('level',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business.customer.level", {
        url: "/level",
        views: {
            "content@root.business.customer": {
                templateUrl: "root/business/customer/level/_res/html/index.html",
                controller: "levelCtrl",

            },"menu@root.business.customer":{
                templateUrl: "root/business/customer/level/_res/html/menu.html",
                controller: "levelMenuCtrl"
            }
        }
    }).state("root.business.customer.level.add[12]", {
        url: "/add[12]",
        views:{
            "modals@root.business.customer.level":{
                templateUrl: "root/business/customer/level/add/_res/html/index.html",
                controller:"levelAddCtrl"
            }
        }
    }).state("root.business.customer.level.edit[12]", {
        url: "/edit[12]?name",
        views:{
            "modals@root.business.customer.level":{
                templateUrl: "root/business/customer/level/edit/_res/html/index.html",
                controller:"levelEditCtrl"
            }
        }
    })
})