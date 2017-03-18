(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['loginSrv', '$state'];

    function loginCtrl(loginSrv, $state) {
        var vm = this;
        var users = [];

        vm.login = function (_username) {
            loginSrv.getUserRole(_username).then(function (_role) {
                if (_role) {
                    $state.go('menu', { role: _role })
                } else {
                    vm.undefinedUser = true;
                    vm.user.username = '';
                    vm.user.password = '';
                }
            });
        };

    }
})();

