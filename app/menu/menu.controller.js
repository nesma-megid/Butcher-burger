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
            menuSrv.saveItem(_newItem, _categoury)
            vm.showAddItemForm = false;
            vm.newItem = {};
        }

        vm.cancel = function () {
            vm.showAddItemForm = false;
            vm.newItem = {};
        }

        vm.editItem = function (_item) {
            vm.tempItem = {
                name: _item.name,
                price: _item.price,
                description: _item.description
            };
            _item.showEditItemForm = true;
        }

        vm.doneEdit = function (_item) {
            vm.tempItem = {};
            _item.showEditItemForm = false;
        }

        vm.cancelEdit = function (_item) {
            _item.name = vm.tempItem.name;
            _item.price = vm.tempItem.price;
            _item.description = vm.tempItem.description;
            _item.showEditItemForm = false;
        }
    }
})();

