var app = angular.module('fenbaoQT',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.complex.contract.fenbaoQT", {
        url: "/fenbaoQT",
        views: {
            "content@root.complex.contract": {
                templateUrl: "root/complex/contract/fenbaoQT/_res/html/index.html",
                controller: "fenbaoQTCtrl"
            },"menu@root.complex.contract":{
                templateUrl: "root/complex/contract/fenbaoQT/_res/html/menu.html",
            }
        }
    })
})