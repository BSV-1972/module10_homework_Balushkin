let randNum = randomInteger(0, 100)
function randomInteger(min, max) {
  let rand = min - 0 + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randNum);
console.log(randNum);
// console.log(randomInteger(0, 100))
