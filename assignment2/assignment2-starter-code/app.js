(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  // console.log('Here');
  list1.toBuyItems = ShoppingListCheckOffService.getUnboughtItems();

  list1.convertItem = function(itemIndex) {
  	// console.log("Here in coverter1");
  	ShoppingListCheckOffService.convertItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  // console.log('Here');
  list2.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name: 'Cookies',
      quantity: '5'
    },
    {
      name: 'books',
      quantity: '10'
    },
    {
      name: 'coffee',
      quantity: '8'
    },
    {
    	name: 'chips',
    	quantity: '4'
    },
    {
    	name: 'm&m',
    	quantity: '6'
    },
    {
    	name: 'biscuit',
    	quantity: '12'
    }
  ];
  var boughtItems = [];

  service.convertItem = function (itemIndex) {
  	// console.log("Here in coverter");
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex,1);
    // console.log('toBuyItems',toBuyItems);
    // console.log('boughtItems',boughtItems);
  };

  service.getUnboughtItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
