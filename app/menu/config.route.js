(function () {
    'use strict';

    angular
        .module('app.menu')
        .config(routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('menu', {
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
            })
    }
})();

