var app = angular.module('userVipModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.user.vip[1]", {
        url: "/vip[1]",
        views: {
            "content@root.user": {
                templateUrl: "root/user/vip/_res/html/index.html",
                controller: "userVipCtrl"
            }
        }
    });
});