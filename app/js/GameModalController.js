(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('GameModalController', GameModalController);

	GameModalController.$inject = ['$scope', '$uibModalInstance'];

	function GameModalController($scope, $uibModalInstance) {
		var vm = this;

		vm.game = $scope.$resolve.data;
		vm.player =$scope.$resolve.data;

		console.log(vm.game);
		console.log(vm.player);

	}

})();