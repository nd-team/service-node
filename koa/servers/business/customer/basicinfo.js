var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.customerbaseinfoList = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/listCustomerBaseInfo',
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
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/listCustomerLevel',
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
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/generateNumber',
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
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/add',
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
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/edit',
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
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/delete/'+argvs.id,
        };
        return request(options);
    };
    this.cusBaseinfoCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/congeal/'+argvs.id,
        };
        return request(options);
    };
    this.cusBaseinfoThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/thaw/'+argvs.id,
        };
        return request(options);
    };

    this.getCustomer = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/getCustomer?customerNum='+argvs.customerNum,
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
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/listCustomerLevel',
            headers : {
                // token : token
            }
        };
        return request(options);
    };



    return this;
}