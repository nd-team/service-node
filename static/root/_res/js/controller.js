var app = angular.module('app', ['ngVerify','ngDialog','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state) {


}).controller('headerCtrl',function($scope,$rootScope,ngDialog,rootSer,ipCookie,ngVerify){
    $rootScope.isLogin = false;
    $rootScope.resSuccess = false;

    var token = ipCookie('token');
    if(token){
        var username = ipCookie('account');
        $rootScope.isLogin = true;
        $rootScope.userName = username;
    }

    //登录
    $rootScope.login = function(){
         ngDialog.open({
            template:'root/_res/html/login.html',
            className: 'ngdialog-theme-plain',
            controller:function($scope){
                $scope.close = function(){
                    $scope.closeThisDialog()
                };
                $rootScope.loginBtn = function(){
                    var vm = $scope;
                    var data = {
                        account:vm.username,
                        password:vm.password,
                        rememberMe:vm.checked
                    };
                    rootSer.login(data).then(function(response){
                        console.info(response);
                        if(response.data.code==0){
                            ipCookie('account', data.account);
                            // ipCookie('token',response.data.data);
                            $scope.closeThisDialog();
                            $rootScope.isLogin = true;
                            $rootScope.userName = data.account
                        }
                    })
                }
            }

        })
    }

    //登出
    $rootScope.logout = function(){
        ipCookie.remove('token');
        $rootScope.isLogin = false;
    }
    //注册
    $scope.register = function(){
        ngDialog.open({
            template:'root/_res/html/register.html',
            className: 'ngdialog-theme-plain',
            controller:function($scope,ngVerify){
                $scope.close = function(){
                    $scope.closeThisDialog()
                };
                //验证用户名是否重复
                $scope.existUsername = function(){
                    var data={
                        username:$scope.regUsername
                    }
                    rootSer.existUsername(data).then(function(response){
                        console.info(response);
                        if(response.data.data == true){
                            ngVerify.setError('#register-name','用户名重复');
                        }

                    })
                };
                $scope.registerBtn = function(){
                    var vm = $scope;
                    var data ={
                        username:vm.regUsername,
                        password:vm.regPassword,
                        rePassword:vm.regRepassword,
                    };

                    rootSer.register(data).then(function(response){
                        console.info(response);
                        if(response.data.code==0){
                            $rootScope.resSuccess = true;

                            // $scope.closeThisDialog();

                        }
                    })
                }

            }
        })
    }

})
