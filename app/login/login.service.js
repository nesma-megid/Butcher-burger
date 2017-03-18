(function () {
    'use strict';

    angular
        .module('app.login')
        .factory('loginSrv', loginSrv);


    loginSrv.$inject = ['$http'];

    function loginSrv($http) {
        return {
            getUserRole: getUserRole,
        };

        function getUserRole(_username) {
            var role;
            return $http.get('data/users.json')
                .then(function (response) {
                    var users = response.data.users;
                    if (users.length > 0) {
                        users.map(function getRole(user) {
                            if (user.username === _username) {
                                role = user.role;
                            }
                        })
                    }
                    return role;
                })
        }
    }

})();
