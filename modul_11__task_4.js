let a = +prompt('введите первое число')
let b = +prompt('введите второе число')

const count = function() {
  let counter = a;
  function adding() {
    console.log(counter);
    counter++;
  }
  return adding;
}();

let dif;
dif = b * 1000 - a * 1000 + 1000

const intervalId = setInterval(count, 1000)

setTimeout(function(){
  clearInterval(intervalId)
}, dif)