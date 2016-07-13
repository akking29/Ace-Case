(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('LineUpController', LineUpController);

    LineUpController.$inject = ['$scope', '$log', 'LineUpFactory', '$uibModal'];


    function LineUpController($scope, $log, LineUpFactory, $uibModal) {
        var vm = this;

        vm.ctrlName = 'LineUpController';
        vm.lineup = [
            { id: 1, Position: "P", player: null },
            { id: 2, Position: "P", player: null },
            { id: 3, Position: "C", player: null },
            { id: 4, Position: "1B", player: null },
            { id: 5, Position: "2B", player: null },
            { id: 6, Position: "3B", player: null },
            { id: 7, Position: "SS", player: null },
            { id: 8, Position: "OF", player: null },
            { id: 9, Position: "OF", player: null },
            { id: 10, Position: "OF", player: null }
        ];

        vm.init = function() {
            var data = {};

            vm.getGames(data).then(vm.getPlayers).then(function(data) {
                vm.players = data.players;
                vm.games = data.games;
                console.log(vm.games);

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
        
        vm.openGameModal = function(data) {
            var gameInfoModal = $uibModal.open({
                animation: true,
                controller: 'GameModalController as gameModal',
                templateUrl: 'app/templates/gameInfoModal.html',
                size: 'md',
                resolve :{
                    data:function(){

                        return data;

                    }
                }
            });

            return gameInfoModal.result;
        }

        vm.openPlayerModal = function(data) {
            var gameInfoModal = $uibModal.open({
                animation: true,
                controller: 'GameModalController as gameModal',
                templateUrl: 'app/templates/playerInfoModal.html',
                size: 'md',
                resolve :{
                    data:function(){

                        return data;

                    }
                }
            });

            return gameInfoModal.result;
        }
        

        vm.addPlayer = function(player) {
            var lineup = null;

            // filter lineup to only elements that match player position
            // loop through filtered lineups and check each one.
            // if we find an empty position, assign the player and stop the loop
            // if no position is available, alert the user

            for (var i = 0; i < vm.lineup.length; i++) {
                if (vm.lineup[i].Position === player.FanDuelPosition && vm.lineup[i].player === null) {
                    vm.lineup[i].player = player;
                    vm.players.splice(vm.players.indexOf(player), 1);
                    return;
                } else {
                    console.log('else');
                }

                vm.pitcherAlert = function(lineup) {
                    var pitchers = [];
                    for (var i = 0; i < vm.lineup.length; i++) {
                        if (vm.lineup[0].player === null && vm.lineup[1].player === null) {
                            console.log(vm.lineup[0].player);

                        } else {
                            console.log('at least one empty');
                        }
                    }
                }
            }

        }

        vm.nixPlayer = function(lineup) {
            vm.players.unshift(lineup.player);
            lineup.player = null;

        };
    }

})();
