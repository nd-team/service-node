var app = angular.module('detailed',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business.customer.detailed", {
        url: "/detailed",
        views: {
            "content@root.business.customer": {
                templateUrl: "root/business/customer/detailed/_res/html/index.html",
                controller: "detailedCtrl"
            },"menu@root.business.customer":{
                templateUrl: "root/business/customer/detailed/_res/html/menu.html",
                // controller: "detailedMenuCtrl"
            }
        }
    }).state("root.business.customer.detailed.add[12]", {
        url: "/add[12]",
        views:{
            "modals@root.business.customer.detailed":{
                templateUrl: "root/business/customer/detailed/add/_res/html/index.html",
                controller:"detailedAddCtrl"
            }
        }
    })/*.state("root.business.customer.detailed.edit[12]", {
        url: "/edit[12]?name",
        views:{
            "modals@root.business.customer.detailed":{
                templateUrl: "root/business/customer/detailed/edit/_res/html/index.html",
                controller:"levelEditCtrl"
            }
        }
    })*/
})