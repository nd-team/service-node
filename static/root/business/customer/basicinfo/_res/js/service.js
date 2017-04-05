var app = angular.module('basicinfoSer',[]);
app.factory('basicinfoServer',function ($http) {

    return {
        listCustomerBaseInfo : listCustomerBaseInfo,
        customerLevelName:customerLevelName,
        generateNumber:generateNumber,
        addCustomerbaseinfo:addCustomerbaseinfo,
        delCustomerbaseinfo:delCustomerbaseinfo,
        congealCustomerbaseinfo:congealCustomerbaseinfo,
        thawCustomerbaseinfo:thawCustomerbaseinfo,
        getCustomers:getCustomers,
        editCustomerbaseinfo:editCustomerbaseinfo
    };

    function listCustomerBaseInfo() {
        return $http.get('/customer/customerbaseinfo/listCustomerBaseInfo')
    }
    
    function customerLevelName(){
        return $http.get('/customer/customerlevel/listCustomerLevel')
    }
   //获取客户编号
    function generateNumber(){
        return $http.get('/customer/customerbaseinfo/generateNumber')
    }
    //添加客户信息
    function addCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/add',data)
    }
    //删除客户信息
    function delCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/delete',data)
    }//冻结客户信息
    function congealCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/congeal',data)
    }
    //解冻
    function thawCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/thaw',data)
    }
    //获取单个客户信息
    function getCustomers(data){
        return $http.post('/customer/customerbaseinfo/getCustomer',data)
    }//获取编辑客户信息
    function editCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/edit',data)
    }


});