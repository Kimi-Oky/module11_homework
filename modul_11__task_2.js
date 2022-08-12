let a = +prompt()

function task2(a) {
  if (a <= 1000){
      if (a % 1 === 0) {
      result = 'простое число'
    } else {
      result = 'непростое число'
    } 
  } else {
    result = 'неверное значение'
  }
 
  return result
}


const str = `Введено ${task2(a)}`

console.log(str)