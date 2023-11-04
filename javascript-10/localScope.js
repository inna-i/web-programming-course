let res = 0;
let res2 = 0;
// console.log(i); // i - is not available
 
for (let i = 0; i < 10; i++) {
  res += i;
}

for (let i = 0; i < 10; i++) {
  res2 += i;
}
 
console.log({ res, res2})
// console.log(i); // i - also is not available

const myFn = (i) => `Iterator is ${i}`

function test(a, b) {
  console.log({a, b});

  function sumC(c) {
    return a + c;
  }  
  
  function sumD(d) {
    return a + d;
  }

  console.log(sumC(10));
  console.log(sumD(33));
}

test(1, 1);