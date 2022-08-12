let n = prompt ('введите число');
  x = n++
if ((typeof n) === "number") {
    x = x % 2
    if (x === 0) {
    console.log ('это чётное число')
    } else if (x === 1) {
    console.log ('это нечётное число')
    }
} else if ((typeof n) === "nan"){
   console.log ('вы ввели не число')
} else {
  console.log ('Упс, кажется, вы ошиблись')
}
