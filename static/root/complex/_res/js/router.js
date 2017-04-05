var app = angular.module('complex',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.complex", {
        url: "/complex",
        views: {
            "content@root": {
                templateUrl: "root/complex/_res/html/index.html",
                controller: "complexCtrl"
            },"topNav@root.complex":{
                templateUrl:"root/complex/_res/html/topnav.html"
            }
        }
    })
})