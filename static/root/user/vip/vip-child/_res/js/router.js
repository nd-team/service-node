var app = angular.module('userVipVipChildModule', []);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.user.vip[1].vip-child", {
        url: "/vip-child",
        views: {
            "content@root.user": {
                templateUrl: "root/user/vip/vip-child/_res/html/index.html",
                controller: "userVipVipChildCtrl"
            }
        }
    }).state("root.user.vip[1].vip-child.list[12]", {
        url: "/list[12]",
        views: {
            "content@root.user.vip[1].vip-child": {
                templateUrl: "root/user/vip/vip-child/list/_res/html/div.html",
                controller: "userVipVipChildListCtrl"
            }
        }
    }).state("root.user.vip[1].vip-child.add[12]", {
        url: "/add[12]",
        views: {
            "content@root.user.vip[1].vip-child": {
                templateUrl: "root/user/vip/vip-child/add/_res/html/div.html"
            }
        }
    }).state("root.user.vip[1].vip-child.del[12]", {
        url: "/del[12]",
        views: {
            "content@root.user.vip[1].vip-child": {
                templateUrl: "root/user/vip/vip-child/del/_res/html/div.html"
            }
        }
    });
});