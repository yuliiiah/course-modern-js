// Basic structure

// (function () {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   };
// })();

// STANDARD MODULE PATTERN
// const uiCtrl = (function () {
//   let text = 'Hello World';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     },
//   };
// })();

// uiCtrl.callChangeText();
// // uiCtrl.changeText();

// console.log(uiCtrl.text);

// REVEALING MODULE PATTERN
const itemCtrl = (function () {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return _data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

itemCtrl.add({ id: 1, name: 'John' });
itemCtrl.add({ id: 2, name: 'Mark' });
console.log(itemCtrl.get(2));
