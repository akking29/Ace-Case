(function() {
    'use strict';

    angular
        .module('app')
        .factory('LineUpFactory', LineUpFactory);

    LineUpFactory.$inject = ['$http', '$q', '$log'];

    function LineUpFactory($http, $q, $log) {

        var service = {
            getGames: getGames,
            getPlayers: getPlayers
        };
        //content

        return service;

        function getGames() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'https://api.fantasydata.net/mlb/v2/JSON/GamesByDate/2016-JUL-10?key=1d7a3c97b3e742b9b1662604691b3cab'
            }).then(
                function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);

                    } else {
                        defer.reject(response);
                    }
                },
                function(error) {
                    defer.reject(error);
                    $log.error(error);
                });
            return defer.promise;
        };

        function getPlayers() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'https://api.fantasydata.net/mlb/v2/JSON/PlayerGameStatsByDate/2016-JUN-22?key=1d7a3c97b3e742b9b1662604691b3cab'
            }).then(
                function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject(response);
                    }
                },
                function(error) {
                    defer.reject(error);
                    $log.error(error);
                });
            return defer.promise;
        };
    };

})();
