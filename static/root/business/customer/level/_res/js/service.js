var app = angular.module('levelSer',[]);
app.factory('levelServer',function ($http) {

    return {
        listLevel : listLevel,
        addLevel:addLevel,
        deleteLevel:deleteLevel,
        getLevel:getLevel,
        editLevel:editLevel
    };

    function listLevel() {
        return $http.get('/customer/customerlevel/listCustomerLevel')
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