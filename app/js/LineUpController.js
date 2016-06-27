(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('LineUpController', LineUpController);

    LineUpController.$inject = ['$scope', '$log', 'LineUpFactory', "NgTableParams"];

    function LineUpController($scope, $log, LineUpFactory, NgTableParams) {

        var vm = this;
        vm.ctrlName = 'LineUpController';

        vm.getGames = function() {
            LineUpFactory.getGames().then(
                function(response) {
                    vm.games = response.data;
                    console.log(vm.games);
                });
        };

        vm.getPlayers = function() {
            LineUpFactory.getPlayers().then(
                function(response) {
                    vm.players = response.data;

                    vm.tableParams = new NgTableParams({}, {
                        dataset: vm.players
                    });

                    console.log(vm.players);
                });
        };

        vm.getGames();
        vm.getPlayers();

        //content
    }


})();
