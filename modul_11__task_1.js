let n = [0, 1, 3, 9, 2, 4, 'sine', null];
let even = 0;
let odd = 0;
let zero = 0;
let others = 0;
let nullS = 0;
for (let i = 0; i < n.length; i++){
  if (n[i] === 0) {
    zero++;
  } else if (n[i] % 2 === 0) {
    even++;
  } else if (n[i] % 2 === 1) {
    odd++;
  } else if (n[i] == null){
    nullS++; // так и не разобрался, почему null считает за чётное число
  } else {
    others++
  }
}
console.log(`четных: ${even}, нечетных: ${odd}, 
нолей ${zero}, других: ${others}, элементов null: ${nullS}`)
