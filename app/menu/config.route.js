(function() {
    'use strict';

    angular
        .module('app.menu')
        .run(routeConfig);

    routeConfig.$inject = ['routerHelper'];

    function routeConfig(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'menu',
            config: {
                url: '/menu',
                templateUrl: 'app/menu/_menu.html',
                controller: 'menuCtrl',
                controllerAs: 'vm',
                title: 'Menu',
                params: {
                    role: {
                        value: '',
                        squash: false
                    }
                }
            }
        }];
    }

})();

