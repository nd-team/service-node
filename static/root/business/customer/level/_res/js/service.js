var app = angular.module('levelSer',[]);
app.factory('levelServer',function ($http) {

    return {
        listLevel : listLevel,

    };

    function listLevel() {
        return $http.get('/customer/customerlevel/listCustomerLevel')
    }

});