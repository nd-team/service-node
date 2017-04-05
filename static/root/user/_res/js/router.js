var app = angular.module('userModule',[]);
app.config( function ($provide, $stateProvider) {
    $stateProvider.state("root.user", {
        url: "/user",
        views: {
            "content@root": {
                templateUrl: "root/user/_res/html/index.html",
                controller: "userCtrl"
            }
        }
    })
});