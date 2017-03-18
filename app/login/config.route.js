(function () {
    'use strict';

    angular
        .module('app.login')
        .config( routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/login/_login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm',
                title: 'Login'
            })
    }
})();