number = prompt('Введите любое число, кроме нуля');
let value  
if(value = +number %2 == 0 ) {
  console.log(number + ' - чётное число');
} else if(isNaN(number)) {
  console.log('Упс, кажется, вы ошиблись, введите число');
} else if(value = +number %2 !== 0) {
  console.log(number + ' - нечётное число');
}
