var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/user/' + path.basename(__filename)));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.post('/user/login', function*(){
        var $self = this;
        var loginData = this.request.body;
        console.info(loginData);
        yield (server().userLogin(loginData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/user/register', function*(){
        var $self = this;
        var registerData = this.request.body;
        console.info(registerData);
        yield (server().userRegister(registerData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/user/existUsername', function*(){
        var $self = this;
        var existData = this.request.body;
        yield (server().exisUsername(existData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    })
    return router;
};
