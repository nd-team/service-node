var app = angular.module('chengbaoQT',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.complex.contract.chengbaoQT", {
        url: "/chengbaoQT",
        views: {
            "content@root.complex.contract": {
                templateUrl: "root/complex/contract/chengbaoQT/_res/html/index.html",
                controller: "chengbaoQTCtrl"
            }
        }
    })
});