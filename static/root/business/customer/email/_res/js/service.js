var app = angular.module('emailSer',[]);
app.factory('emailServer',function ($http) {

    return {
        listCusEmail : listCusEmail,

    };

    function listCusEmail() {
        return $http.get('/customer/cusemail/listCusEmail')
    }

});