var app = angular.module('detailedSer',[]);
app.factory('detailedServer',function ($http) {

    return {
        listCustomerDetail : listCustomerDetail,
        addLevel:addLevel,
        deleteLevel:deleteLevel,
        getLevel:getLevel,
        editLevel:editLevel
    };

    function listCustomerDetail() {
        return $http.get('/customer/customerdetail/listCustomerDetail')
    }
    function addLevel(data) {
        return $http.post('/customer/customerlevel/add',data)
    }
    function deleteLevel(data) {
        return $http.post('/customer/customerlevel/delete',data)
    }
    function getLevel(data) {
        return $http.post('/customer/customerlevel/getCustomerLevel',data)
    }
    function editLevel(data) {
        return $http.post('/customer/customerlevel/edit',data)
    }

});