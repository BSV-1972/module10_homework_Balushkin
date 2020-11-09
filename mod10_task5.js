const arr = [true, 13, '456', 'string', null];

console.log("Всего элементов в массиве " + arr.length);

arr.forEach(function(item, i) {
  console.log(i + ": " + item);
});
