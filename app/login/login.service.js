(function () {
    'use strict';

    angular
        .module('app.login')
        .factory('loginSrv', loginSrv);


    loginSrv.$inject = ['$http'];

    function loginSrv($http) {
        return {
            getUsers: getUsers,
        };

        function getUsers() {
            var users;
            return $http.get('data/users.json')
                .then(function (response) {
                    users = response.data.users;
                    return users;
                })
        }
    }

})();
