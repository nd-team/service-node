var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.customerbaseinfoList = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/listCustomerBaseInfo',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.customerLevel = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/listCustomerLevel',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.generateNumber = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/generateNumber',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusBaseinfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/add',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusBaseinfoEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/edit',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusBaseinfoDel = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    this.cusBaseinfoCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/congeal/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    this.cusBaseinfoThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/thaw/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };

    this.getCustomer = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/getCustomer?customerNum='+argvs.customerNum,
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    //获取客户级别列表
    this.customerlevel = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/listCustomerLevel',
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    //添加
    this.customerlevelAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/add',
            form : argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除
    this.customerlevelDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,

        };
        return request(options);
    };
    //单个客户等级信息
    this.getCustomerLevelinfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/getCustomerLevel?name='+argvs.name,

        };
        return request(options);
    };

    //编辑客户信息
    this.customerlevelEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/edit',
            form : argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //客户详细信息
    this.listCustomerDetail = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerdetail/v1/listCustomerDetail',
            headers : {
            }
        };
        return request(options);
    };
    //客户邮箱
    this.listCusEmail = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/listCusEmail',
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    return this;
}