(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['loginSrv', '$state'];

    function loginCtrl(loginSrv, $state) {
        var vm = this;
        var users = [];

        loginSrv.getUsers().then(function (_users) {
            users =_users;
        });

        vm.login = function (_username) {
            var role = undefined;
            if (users.length > 0) {
                users.map( function getRole (user) {
                    if (user.username === _username) {
                        role = user.role;
                    }
                })

                if (role) {
                    $state.go('menu', { role: role })
                } else {
                    vm.undefinedUser = true;
                    vm.user.username = '';
                    vm.user.password = '';
                }
            }
        };

    }
})();

