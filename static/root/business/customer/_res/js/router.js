var app = angular.module('customer',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business.customer", {
        url: "/customer",
        views: {
            "content@root.business": {
                templateUrl: "root/business/customer/_res/html/index.html",
                controller: "customerCtrl"
            },"navMenu@root.business": {
                templateUrl: "root/business/customer/_res/html/navmenu.html",
                controller:"subNavCtrl"
            }
        }
    })
})