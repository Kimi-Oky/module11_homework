const x = +prompt('введите x');
const n = +prompt('введите n');

const result =(x, n) => {
  let result = x;
  for (let i = 1; i < n; i++){
    result = result * x;
    }
  console.log(result);
  return result;
}

result(x, n)