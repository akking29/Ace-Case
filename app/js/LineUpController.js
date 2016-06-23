(function() {
    'use strict';

    var app = angular
        .module('app')
        .controller('LineUpController', LineUpController);

    LineUpController.$inject = ['$scope', '$log', 'LineUpFactory'];

    function LineUpController($scope, $log, LineUpFactory) {

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
                function(response){
                    vm.players = response.data;
                    console.log(vm.players);
                });
        };

      vm.getGames();
      vm.getPlayers();
        //content
    }


})();
