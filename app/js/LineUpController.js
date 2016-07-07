(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('LineUpController', LineUpController);

    LineUpController.$inject = ['$scope', '$log', 'LineUpFactory'];

    function LineUpController($scope, $log, LineUpFactory) {

        var vm = this;
        vm.ctrlName = 'LineUpController';
        vm.lineup = [
            { Position: "P", player: null },
            { Position: "P", player: null },
            { Position: "C", player: null },
            { Position: "1B", player: null },
            { Position: "2B", player: null },
            { Position: "3B", player: null },
            { Position: "SS", player: null },
            { Position: "OF", player: null },
            { Position: "OF", player: null },
            { Position: "OF", player: null }
        ];

        vm.init = function() {
            var data = {};

            vm.getGames(data).then(vm.getPlayers).then(function(data) {
                vm.players = data.players;
                vm.games = data.games;

                console.log(vm.games);
                console.log(vm.players);

            });
        }

        vm.getGames = function(data) {

            return LineUpFactory.getGames().then(
                function(response) {
                    data.games = response.data;
                    return data;
                });
        };

        vm.getPlayers = function(data) {
            return LineUpFactory.getPlayers().then(
                function(response) {
                    data.players = response.data;
                    return data;
                });
        };

        vm.init();

        vm.addPlayer = function(player) {
            var lineup = null;
            console.log(lineup);

            for (var i = 0; i < vm.lineup.length; i++) {
                if (vm.lineup[i].Position === player.FanDuelPosition && vm.lineup[i].player === null) {
                    vm.lineup[i].player = player;
                    vm.players.splice(vm.players.indexOf(player), 1);
                    console.log(vm.lineup);
                    console.log(player);
                    return;
                } if (vm.lineup[i].Position === player.FanDuelPosition && vm.lineup[i].player === vm.lineup[i].player || vm.lineup[1].player !== null){
                    alert("position already filled");
                }
            }
        };

        vm.nixPlayer = function(lineup) {
            vm.players.unshift(lineup.player);
            lineup.player = null;
        
        };
    }

})();
