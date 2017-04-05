var app = angular.module('fenbao',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.complex.fenbao", {
        url: "/fenbao",
        views: {
            "content@root.complex": {
                templateUrl: "root/complex/fenbao/_res/html/index.html",
                controller: "fenbaoCtrl"
            },"navMenu@root.complex": {
                templateUrl: "root/complex/fenbao/_res/html/navmenu.html",
            },"menu@root.complex.fenbao":{
                 templateUrl:"root/complex/fenbao/_res/html/menu.html"
            }
        }
    })
})