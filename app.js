angular.module('myApp', []).
	directive('makeEditable', function() {
		return {
			restrict: 'A',
			transclude: true,
			templateUrl: 'container.html',
			scope: true,
		}
	});