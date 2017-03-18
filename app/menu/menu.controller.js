(function () {
    'use strict';

    angular
        .module('app.menu')
        .controller('menuCtrl', menuCtrl);

    menuCtrl.$inject = ['menuSrv', '$state', '$stateParams', 'admin'];

    function menuCtrl(menuSrv, $state, $stateParams, admin) {
        var vm = this;
        vm.admin = admin;
        vm.role = $stateParams.role;

        menuSrv.getMenu().then(function (_menu) {
            vm.menu = _menu;
        });

        vm.addItem = function () {
            vm.showAddItemForm = true;
        }

        vm.saveItem = function (_newItem, _categoury) {
            _categoury.items.push(_newItem);
            vm.showAddItemForm = false;
            vm.newItem = {};
        }

        vm.cancel = function () {
            vm.showAddItemForm = false;
            vm.newItem = {};
        }
    }
})();

