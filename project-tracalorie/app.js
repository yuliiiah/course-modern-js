// Storage controller
const StorageCtrl = (function () {
  // Public methods
  return {
    storeItem: function (item) {
      let items;
      // Check if any items in LS
      if (localStorage.getItem('items') === null) {
        items = [];
        // Push the new item
        items.push(item);
        // Set LS
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Get what's already in LS
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item
        items.push(item);

        // Reset LS
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }

      return items;
    },
    updateItemStorage: function (updateItem) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (updateItem.id === item.id) {
          items.splice(index, 1, updateItem);
        }
      });

      // Reset LS
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });

      // Reset LS
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function () {
      localStorage.removeItem('items');
    },
  };
})();

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
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let ID;
      // Create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getTotalCalories: function () {
      let total = 0;
      data.items.forEach((item) => {
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    getItemByID: function (id) {
      let found = null;
      // Loop through the items
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });

      return found;
    },
    updateItem: function (name, calories) {
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });

      return found;
    },
    deleteItem: function (id) {
      // Get ids
      const ids = data.items.map((item) => {
        return item.id;
      });

      // Get the index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function () {
      data.items = [];
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
  };

  // Public methods
  return {
    populateItemList: function (items) {
      let html = '';

      items.forEach((item) => {
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    addListItem: function (item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      li.id = `item-${item.id}`;

      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} calories</em>
                        <a href="#" class="secondary-content">
                          <i class="edit-item fa fa-pencil"></i>
                        </a>`;
      // Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn node list into array
      listItems = Array.from(listItems);

      listItems.forEach((listItem) => {
        const itemID = listItem.getAttribute('id');

        if (itemID === `item-${item.id}`) {
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} calories</em>
                          <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                          </a>`;
        }
      });
    },
    deleteListItem: function (id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);

      item.remove();
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function () {
      document.querySelector(UISelectors.itemNameInput).value =
        ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value =
        ItemCtrl.getCurrentItem().calories;

      UICtrl.showEditState();
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent =
        totalCalories;
    },
    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn into array
      listItems = Array.from(listItems);
      listItems.forEach((item) => {
        item.remove();
      });
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
  // Load event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick);

    // Update item event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);

    // Delete item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);

    // Back button event
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', UICtrl.clearEditState);

    // Clear button event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener('click', clearAllItemsClick);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to the UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Store in Local Storage
      StorageCtrl.storeItem(newItem);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // Click item to edit
  const itemEditClick = function (e) {
    if (e.target.classList.contains('edit-item')) {
      // Get list item id (item-0, item-1)
      const listID = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIDArray = listID.split('-');

      // Get the actual id
      const id = parseInt(listIDArray[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemByID(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  };

  // Item update submit
  const itemUpdateSubmit = function (e) {
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to the UI
    UICtrl.showTotalCalories(totalCalories);

    // Update local storage
    StorageCtrl.updateItemStorage(updatedItem);

    UICtrl.clearEditState();

    e.preventDefault();
  };

  // Item delete submit
  const itemDeleteSubmit = function (e) {
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to the UI
    UICtrl.showTotalCalories(totalCalories);

    // Delete from LS
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();

    e.preventDefault();
  };

  // Clear items on click
  const clearAllItemsClick = function () {
    // Delete all items from data structure
    ItemCtrl.clearAllItems();

    // Remove from UI
    UICtrl.removeItems();

    // Clear items from LS
    StorageCtrl.clearItemsFromStorage();

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to the UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    UICtrl.hideList();
  };

  // Public methods
  return {
    init: function () {
      // Set initial state
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl, StorageCtrl);

// Initialize app
App.init();
