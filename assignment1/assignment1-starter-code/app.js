(function () {
	// body...
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	var enjoy = "Enjoy!";
	var tooMuch = "Too much";
	var empty = "Please enter data first";

	function LunchCheckController ($scope) {
		$scope.name = "";
		$scope.displayMsg = "";
		$scope.borderColor = "";
		$scope.textColor = "";
		$scope.borderStyle = "";

		$scope.FoodStatus = function () {
			console.log($scope.name == "");
			var x = countOfItems($scope.name);
			$scope.borderStyle = "solid";
			if($scope.name == ""){
				$scope.displayMsg = empty;
				$scope.borderColor = "red";
				$scope.textColor = "red";
			}
			else if(x<=3){
				$scope.displayMsg = enjoy;
				$scope.borderColor = "green";
				$scope.textColor = "green";
			}
			else {
				$scope.displayMsg = tooMuch;
				$scope.borderColor = "green";
				$scope.textColor = "green";
			}
		};

	};

	function countOfItems(string) {
		var words = string.split(',');
		words = words.filter(function (value, index,arr){
			return value!= " ";
		});
		console.log(words);
		return words.length;
	};

})();
