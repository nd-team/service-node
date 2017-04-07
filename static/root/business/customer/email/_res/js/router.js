var app = angular.module('email',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business.customer.email", {
        url: "/email",
        views: {
            "content@root.business.customer": {
                templateUrl: "root/business/customer/email/_res/html/index.html",
                controller: "emailCtrl"
            },"menu@root.business.customer":{
                templateUrl: "root/business/customer/email/_res/html/menu.html",
                // controller: "detailedMenuCtrl"
            }
        }
    }).state("root.business.customer.email.add[12]", {
        url: "/add[12]",
        views:{
            "modals@root.business.customer.email":{
                templateUrl: "root/business/customer/email/add/_res/html/index.html",
                controller:"emailAddCtrl"
            }
        }
    }).state("root.business.customer.email.summary[12]", {
        url: "/summary[12]",
        views:{
            "content@root.business.customer":{
                templateUrl: "root/business/customer/email/summary/_res/html/index.html",
                controller:"summaryCtrl"
            }
        }
    })
})