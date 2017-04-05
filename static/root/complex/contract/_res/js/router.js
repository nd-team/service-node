var app = angular.module('contract',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.complex.contract", {
        url: "/contract",
        views: {
            "content@root.complex": {
                templateUrl: "root/complex/contract/_res/html/index.html",
                controller: "contractCtrl"
            },"navMenu@root.complex": {
                templateUrl: "root/complex/contract/_res/html/navmenu.html",
                controller:"subNavCtrl"
            },"menu@root.complex.contract":{
                 templateUrl:"root/complex/contract/_res/html/menu.html"
            }
        }
    })
})