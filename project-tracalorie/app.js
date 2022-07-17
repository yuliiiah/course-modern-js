// Storage controller

// Item controller
const ItemCtrl = (function () {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure / State
  const data = {
    items: [
      {
        id: 0,
        name: 'Steak Dinner',
        calories: 1200,
      },
      {
        id: 0,
        name: 'Cookie',
        calories: 400,
      },
      {
        id: 0,
        name: 'Eggs',
        calories: 300,
      },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    logData: function () {
      return data;
    },
  };
})();

// UI controller
const UiCtrl = (function () {
  // Public methods
  return {};
})();

// App controller
const App = (function (ItemCtrl, UiCtrl) {
  // Public methods
  return {
    init: function () {
      console.log('Initializing app...');
    },
  };
})(ItemCtrl, UiCtrl);

// Initialize app
App.init();
