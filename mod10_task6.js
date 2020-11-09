let arr = [10, 10, "10"];
let flag = true;

for (let i = 0; i < arr.length; i++) {
if (arr[0] !== arr[i]) {
   flag = false;
   break;
  } 
}
 
if (flag) {
   console.log('все элементы в массиве равны');
  } else {
   console.log('НЕ все элементы в массиве равны');
}
