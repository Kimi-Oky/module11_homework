const a = +prompt()
const b = +prompt()

 function secondFunction (){
    return b;
 }

function firstFunction (s) {
  s();
  return function(){
    const result = a + s();
    console.log(result);
    return result;
  }
}

const resultFunc = firstFunction (secondFunction);

resultFunc();