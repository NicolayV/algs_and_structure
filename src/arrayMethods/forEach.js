// Метод массивов forEach принимает два аргумента:
// первый (обязательный) — callback функция, которая будет выполнена для каждого элемента массива один раз и
// второй (необязательный) — значение, которое будет использовано в качестве this при вызове функции callback.

["JavaScript", "is", "awesome"].forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
// Выведет в консоль
// JavaScript 0 ["JavaScript","is","awesome"]
// is 1 ["JavaScript","is","awesome"]
// awesome 2 ["JavaScript","is","awesome"]

//без метода this
var each = function (arr, callback, thisArg) {
  var i,
    length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    callback(arr[i], i, arr);
  }
};

//с добавлением метода this
var each = function (arr, callback, thisArg) {
  var i,
    length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    callback.call(thisArg, arr[i], i, arr);
  }
};
