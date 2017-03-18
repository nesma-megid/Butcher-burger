(function () {
    'use strict';

    angular
        .module('app.menu')
        .factory('menuSrv', menuSrv);


    menuSrv.$inject = ['$http'];

    function menuSrv($http) {
        return {
            getMenu: getMenu,
            saveItem: saveItem
        };

        function getMenu() {
            var menu;
            return $http.get('data/menu.json')
                .then(function (response) {
                    menu = response.data.categories;
                    return menu;
                })
        }

        function saveItem (_item, _categoury) {
            _categoury.items.push(_item);
        }
    }

})();
