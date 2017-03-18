(function() {
    'use strict';

    angular
        .module('app.login')
        .run(routeConfig);

    routeConfig.$inject = ['routerHelper'];

    function routeConfig(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'login',
            config: {
                url: '/login',
                templateUrl: 'app/login/_login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm',
                title: 'Login'
            }
        }];
    }

})();

