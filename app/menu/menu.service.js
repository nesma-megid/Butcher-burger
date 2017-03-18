(function () {
    'use strict';

    angular
        .module('app.menu')
        .factory('menuSrv', menuSrv);


    menuSrv.$inject = ['$http'];

    function menuSrv($http) {
        return {
            getMenu: getMenu,
        };

        function getMenu() {
            var menu;
            return $http.get('data/menu.json')
                .then(function (response) {
                    menu = response.data.categories;
                    return menu;
                })
        }
    }

})();
